import type {
  Household,
  Member,
  Menu,
  MenuCategory,
  PriceTier,
  Protein
} from "../data/types";
import { MENUS, getMenu } from "../data/menus";
import { CURATED_SETS } from "../data/sets";
import { canonicalIngredientName } from "../data/ingredients";
import { hashSeed, type Rng } from "./rng";
import type {
  Chip,
  DayOptions,
  DaySet,
  DaySetItem,
  GenerateContext,
  SlotKind
} from "./types";

// ── Tunable weights ────────────────────────────────────────────────────
const W = {
  recency: 120, // max penalty for a menu shown today; decays to 0 over 14 days
  recencyWindowDays: 14,
  chip: 35,
  spesial: 70,
  favorite: 25,
  dislike: 60,
  supermarket: 18,
  jitter: 30, // seeded randomness so close candidates shuffle → variety
  ingredientReuse: 22, // per reused perishable ingredient (weekly)
  varietyMethod: 12,
  varietyCuisine: 10,
  priceWeekPenalty: 14 // penalize agak_mahal lauk inside the weekly planner
};

const PRICE_RANK: Record<PriceTier, number> = {
  ekonomis: 0,
  sedang: 1,
  agak_mahal: 2
};

// ── Menu helpers ───────────────────────────────────────────────────────
export function menuNeedsSupermarket(menu: Menu): boolean {
  return menu.ingredients.some((i) => !i.staple && i.availability === "supermarket");
}

function nonStaplePerishables(menu: Menu): string[] {
  return menu.ingredients.filter((i) => !i.staple && i.perishable).map((i) => i.name);
}

export function menusByCategory(cat: MenuCategory): Menu[] {
  return MENUS.filter((m) => m.category === cat);
}

export function intersects(a: readonly string[], b: readonly string[]): boolean {
  return a.some((x) => b.includes(x));
}

// ── Eating context ─────────────────────────────────────────────────────
export function eatingMembers(household: Household): Member[] {
  const eating = household.members.filter((m) => m.eatingToday);
  return eating.length ? eating : household.members;
}

function allergySet(household: Household): Set<string> {
  const set = new Set<string>();
  for (const m of eatingMembers(household)) {
    for (const a of m.allergies) {
      const canon = canonicalIngredientName(a) ?? a.trim().toLowerCase();
      set.add(canon);
    }
  }
  return set;
}

function minSpiceTolerance(household: Household): number {
  const members = eatingMembers(household);
  if (!members.length) return 3;
  return Math.min(...members.map((m) => m.spiceTolerance));
}

function dislikeSet(household: Household): Set<string> {
  const set = new Set<string>();
  for (const m of eatingMembers(household)) {
    for (const d of m.dislikes) {
      const canon = canonicalIngredientName(d);
      set.add(canon ?? d.trim().toLowerCase());
    }
  }
  return set;
}

// ── Hard filters ───────────────────────────────────────────────────────
export type FilterResult = { ok: boolean; sambalNote?: boolean; reason?: string };

export function passesHardFilters(menu: Menu, ctx: GenerateContext): FilterResult {
  if (ctx.banned.includes(menu.id)) return { ok: false, reason: "banned" };

  const allergies = allergySet(ctx.household);
  if (allergies.size) {
    for (const ing of menu.ingredients) {
      if (allergies.has(ing.name.toLowerCase())) {
        return { ok: false, reason: `alergi:${ing.name}` };
      }
    }
  }

  const minTol = minSpiceTolerance(ctx.household);
  if (menu.spiceBase > minTol) {
    if (menu.sambalSeparable) return { ok: true, sambalNote: true };
    return { ok: false, reason: "pedas" };
  }
  return { ok: true };
}

// ── Effort cap ─────────────────────────────────────────────────────────
export function effortCap(household: Household, chips: readonly Chip[]): number {
  if (chips.includes("cepet")) return 30;
  if (chips.includes("santai")) return Number.POSITIVE_INFINITY;
  const base = household.weekdayEffortCapMinutes || 45;
  // "Yang Spesial" implies willingness to cook something more elaborate.
  if (chips.includes("spesial")) return Math.max(base, 90);
  return base;
}

// ── Balance constraints (a candidate vs the partial set) ───────────────
/** The nasi_spesial anchor (rice) is exempt from the method-distinctness rule. */
function isDishSlot(slot: SlotKind): boolean {
  return slot === "lauk_utama" || slot === "sayur" || slot === "pelengkap" || slot === "sup";
}

/** Enough headroom to still fit a quick sayur/pelengkap after this pick. */
export const MIN_SLOT_EFFORT = 15;

export function passesBalance(
  menu: Menu,
  slot: SlotKind,
  chosen: readonly DaySetItem[],
  cap: number,
  reserve = 0
): boolean {
  // Max 1 bersantan per set (rice counts too).
  if (menu.bersantan && chosen.some((c) => c.menu.bersantan)) return false;

  // No same cooking method twice among actual dishes.
  if (isDishSlot(slot)) {
    for (const c of chosen) {
      if (isDishSlot(c.slot) && c.menu.method === menu.method) return false;
    }
  }

  // Heavy lauk ⇒ light/segar sayur (both directions).
  if (slot === "sayur") {
    const lauk = chosen.find((c) => c.slot === "lauk_utama");
    if (lauk && lauk.menu.richness === 3 && !(menu.richness === 1 || menu.segar)) return false;
  }
  if (slot === "lauk_utama" && menu.richness === 3) {
    const sayur = chosen.find((c) => c.slot === "sayur");
    if (sayur && !(sayur.menu.richness === 1 || sayur.menu.segar)) return false;
  }

  // Lauk and pelengkap must not share the same protein.
  if (slot === "pelengkap" && menu.protein !== "none") {
    const lauk = chosen.find((c) => c.slot === "lauk_utama");
    if (lauk && lauk.menu.protein === menu.protein) return false;
  }
  if (slot === "lauk_utama" && menu.protein !== "none") {
    const pel = chosen.find((c) => c.slot === "pelengkap");
    if (pel && pel.menu.protein === menu.protein) return false;
  }

  // Total effort ≤ cap, leaving room reserved for still-required slots.
  const total = chosen.reduce((s, c) => s + c.menu.effortMinutes, 0) + menu.effortMinutes;
  if (total + reserve > cap) return false;

  return true;
}

// ── Scoring ────────────────────────────────────────────────────────────
export type WeekScoreCtx = {
  usedPerishables: Set<string>;
  methodsUsed: Set<string>;
  cuisinesUsed: Set<string>;
};

function recencyPenalty(menu: Menu, ctx: GenerateContext): number {
  const today = Date.parse(ctx.today);
  if (Number.isNaN(today)) return 0;
  let worst = 0;
  for (const entry of ctx.history) {
    if (!entry.menuIds.includes(menu.id)) continue;
    const then = Date.parse(entry.date);
    if (Number.isNaN(then)) continue;
    const daysAgo = Math.round((today - then) / 86_400_000);
    if (daysAgo < 0 || daysAgo > W.recencyWindowDays) continue;
    const penalty = W.recency * (1 - daysAgo / W.recencyWindowDays);
    if (penalty > worst) worst = penalty;
  }
  return worst;
}

export function scoreMenu(
  menu: Menu,
  ctx: GenerateContext,
  chips: readonly Chip[],
  rng: Rng,
  week?: WeekScoreCtx
): number {
  let s = 0;

  s -= recencyPenalty(menu, ctx);

  if (chips.includes("pedas") && (menu.tags.includes("pedas") || menu.spiceBase >= 2)) s += W.chip;
  if (chips.includes("berkuah") && menu.berkuah) s += W.chip;
  if (chips.includes("seger") && (menu.segar || menu.tags.includes("seger"))) s += W.chip;
  if (chips.includes("cepet") && menu.effortMinutes <= 25) s += W.chip;
  if (chips.includes("ekonomis") && menu.priceTier === "ekonomis") s += W.chip;
  if (chips.includes("spesial") && menu.category === "nasi_spesial") s += W.spesial;

  if (ctx.favorites.includes(menu.id)) s += W.favorite;

  const dislikes = dislikeSet(ctx.household);
  if (dislikes.size) {
    if (dislikes.has(menu.id)) s -= W.dislike;
    else if (menu.ingredients.some((i) => dislikes.has(i.name.toLowerCase()))) s -= W.dislike;
  }

  if (menuNeedsSupermarket(menu)) s -= W.supermarket;

  if (week) {
    let reuse = 0;
    for (const name of nonStaplePerishables(menu)) {
      if (week.usedPerishables.has(name)) reuse++;
    }
    s += reuse * W.ingredientReuse;
    if (!week.methodsUsed.has(menu.method)) s += W.varietyMethod;
    if (!week.cuisinesUsed.has(menu.cuisine)) s += W.varietyCuisine;
    if (menu.priceTier === "agak_mahal") s -= W.priceWeekPenalty;
  }

  s += rng() * W.jitter;
  return s;
}

// ── Slot picking ───────────────────────────────────────────────────────
export type PickArgs = {
  pool: Menu[];
  slot: SlotKind;
  chosen: DaySetItem[];
  cap: number;
  ctx: GenerateContext;
  chips: readonly Chip[];
  rng: Rng;
  exclude: Set<string>;
  week?: WeekScoreCtx;
  forcedProtein?: Protein;
  reserve?: number;
};

export function pickMenu(args: PickArgs): Menu | undefined {
  const { pool, slot, chosen, cap, ctx, chips, rng, exclude, week, forcedProtein } = args;
  const reserve = args.reserve ?? 0;
  let best: Menu | undefined;
  let bestScore = -Infinity;
  for (const menu of pool) {
    if (exclude.has(menu.id)) continue;
    if (forcedProtein && menu.protein !== forcedProtein) continue;
    if (!passesHardFilters(menu, ctx).ok) continue;
    if (!passesBalance(menu, slot, chosen, cap, reserve)) continue;
    const sc = scoreMenu(menu, ctx, chips, rng, week);
    if (sc > bestScore) {
      bestScore = sc;
      best = menu;
    }
  }
  return best;
}

// ── DaySet assembly ────────────────────────────────────────────────────
function pickPriceTier(items: readonly DaySetItem[]): PriceTier {
  let rank = 0;
  for (const it of items) rank = Math.max(rank, PRICE_RANK[it.menu.priceTier]);
  return (Object.keys(PRICE_RANK) as PriceTier[]).find((k) => PRICE_RANK[k] === rank) ?? "ekonomis";
}

function sumNutrition(items: readonly DaySetItem[]) {
  return items.reduce(
    (acc, it) => ({
      kcalPerServing: acc.kcalPerServing + it.menu.nutrition.kcalPerServing,
      proteinGram: acc.proteinGram + it.menu.nutrition.proteinGram
    }),
    { kcalPerServing: 0, proteinGram: 0 }
  );
}

function buildReason(items: readonly DaySetItem[], sambalNote: boolean): string {
  const lauk = items.find((i) => i.slot === "lauk_utama")?.menu;
  const sayur = items.find((i) => i.slot === "sayur")?.menu;
  const oneDish = items.find((i) => i.slot === "one_dish")?.menu;
  const anchor = items.find((i) => i.slot === "nasi_spesial")?.menu;

  let reason: string;
  if (oneDish) {
    reason = `${oneDish.name} udah lengkap jadi satu piring — praktis, tinggal makan.`;
  } else if (anchor) {
    const teman = items
      .filter((i) => i.slot !== "nasi_spesial")
      .map((i) => i.menu.name);
    reason = `Hari ini spesial: ${anchor.name}${
      teman.length ? " ditemani " + teman.join(" dan ") : ""
    }.`;
  } else if (lauk && sayur) {
    if (lauk.bersantan) {
      reason = `${lauk.name} bersantan${
        lauk.richness === 3 ? " dan cukup berat" : ""
      }, makanya dipasangin ${sayur.name} yang ${
        sayur.segar ? "seger" : "ringan"
      } biar seimbang.`;
    } else if (lauk.richness === 3) {
      reason = `${lauk.name} termasuk berat, jadi ${sayur.name} yang ${
        sayur.segar ? "seger" : "ringan"
      } biar nggak enek.`;
    } else if (lauk.tags.includes("pedas") && sayur.berkuah) {
      reason = `${lauk.name} yang pedas cocok diseimbangin ${sayur.name} yang berkuah.`;
    } else {
      reason = `${lauk.name} sama ${sayur.name} — kombinasi yang pas dan nggak berat.`;
    }
  } else if (lauk) {
    reason = `${lauk.name} sebagai lauk utama hari ini.`;
  } else {
    reason = "Set menu yang seimbang buat hari ini.";
  }

  if (sambalNote) reason += " Buat yang nggak kuat pedas, sambalnya bisa dipisah.";
  if (items.some((i) => menuNeedsSupermarket(i.menu))) {
    reason += " Ada bahan yang perlu mampir ke supermarket dulu ya.";
  }
  return reason;
}

export function buildDaySet(
  items: DaySetItem[],
  seed: number,
  extra?: { curatedSetId?: string; nasiSpesialId?: string; sambalNote?: boolean }
): DaySet {
  return {
    items,
    reason: buildReason(items, extra?.sambalNote ?? false),
    totalEffortMinutes: items.reduce((s, i) => s + i.menu.effortMinutes, 0),
    priceTier: pickPriceTier(items),
    nutrition: sumNutrition(items),
    needsSupermarket: items.some((i) => menuNeedsSupermarket(i.menu)),
    seed,
    curatedSetId: extra?.curatedSetId,
    nasiSpesialId: extra?.nasiSpesialId
  };
}

// ── Day composition modes ──────────────────────────────────────────────
function dishesFor(ctx: GenerateContext, options: DayOptions): 2 | 3 | 4 {
  return options.dishesPerMeal ?? ctx.household.dishesPerMeal ?? 2;
}

export function composeComposedDay(
  ctx: GenerateContext,
  options: DayOptions,
  rng: Rng,
  extra?: { exclude?: Set<string>; forcedLaukProtein?: Protein; week?: WeekScoreCtx }
): DaySet | null {
  const chips = options.chips ?? [];
  const cap = effortCap(ctx.household, chips);
  const exclude = new Set(extra?.exclude ?? []);
  const chosen: DaySetItem[] = [];
  let sambalNote = false;

  const lauk = pickMenu({
    pool: menusByCategory("lauk_utama"),
    slot: "lauk_utama",
    chosen,
    cap,
    ctx,
    chips,
    rng,
    exclude,
    week: extra?.week,
    forcedProtein: extra?.forcedLaukProtein,
    reserve: Number.isFinite(cap) ? MIN_SLOT_EFFORT : 0 // leave room for the sayur
  });
  if (!lauk) return null;
  sambalNote ||= !!passesHardFilters(lauk, ctx).sambalNote;
  chosen.push({ slot: "lauk_utama", menu: lauk, locked: false });
  exclude.add(lauk.id);

  const sayur = pickMenu({
    pool: menusByCategory("sayur"),
    slot: "sayur",
    chosen,
    cap,
    ctx,
    chips,
    rng,
    exclude,
    week: extra?.week
  });
  if (!sayur) return null;
  sambalNote ||= !!passesHardFilters(sayur, ctx).sambalNote;
  chosen.push({ slot: "sayur", menu: sayur, locked: false });
  exclude.add(sayur.id);

  const dishes = dishesFor(ctx, options);
  if (dishes >= 3) {
    const pel = pickMenu({
      pool: menusByCategory("pelengkap"),
      slot: "pelengkap",
      chosen,
      cap,
      ctx,
      chips,
      rng,
      exclude,
      week: extra?.week
    });
    if (pel) {
      sambalNote ||= !!passesHardFilters(pel, ctx).sambalNote;
      chosen.push({ slot: "pelengkap", menu: pel, locked: false });
      exclude.add(pel.id);
    }
  }
  if (dishes >= 4) {
    const sup = pickMenu({
      pool: menusByCategory("sup"),
      slot: "sup",
      chosen,
      cap,
      ctx,
      chips,
      rng,
      exclude,
      week: extra?.week
    });
    if (sup) {
      sambalNote ||= !!passesHardFilters(sup, ctx).sambalNote;
      chosen.push({ slot: "sup", menu: sup, locked: false });
    }
  }

  return buildDaySet(chosen, hashSeedForDay(options), { sambalNote });
}

export function composeOneDish(
  ctx: GenerateContext,
  options: DayOptions,
  rng: Rng,
  extra?: { exclude?: Set<string>; week?: WeekScoreCtx }
): DaySet | null {
  const chips = options.chips ?? [];
  const cap = effortCap(ctx.household, chips);
  const menu = pickMenu({
    pool: menusByCategory("one_dish"),
    slot: "one_dish",
    chosen: [],
    cap,
    ctx,
    chips,
    rng,
    exclude: new Set(extra?.exclude ?? []),
    week: extra?.week
  });
  if (!menu) return null;
  const sambalNote = !!passesHardFilters(menu, ctx).sambalNote;
  return buildDaySet([{ slot: "one_dish", menu, locked: false }], hashSeedForDay(options), {
    sambalNote
  });
}

export function composeNasiSpesialDay(
  ctx: GenerateContext,
  options: DayOptions,
  rng: Rng,
  extra?: { exclude?: Set<string>; week?: WeekScoreCtx }
): DaySet | null {
  const chips = options.chips ?? [];
  const cap = effortCap(ctx.household, chips);
  const exclude = new Set(extra?.exclude ?? []);

  const anchor = pickMenu({
    pool: menusByCategory("nasi_spesial"),
    slot: "nasi_spesial",
    chosen: [],
    cap,
    ctx,
    chips,
    rng,
    exclude,
    week: extra?.week
  });
  if (!anchor) return null;
  const pairTags = anchor.pairTags ?? [];
  const chosen: DaySetItem[] = [{ slot: "nasi_spesial", menu: anchor, locked: false }];
  exclude.add(anchor.id);
  let sambalNote = !!passesHardFilters(anchor, ctx).sambalNote;

  const laukPool = menusByCategory("lauk_utama").filter((m) => intersects(m.tags, pairTags));
  const lauk = pickMenu({
    pool: laukPool,
    slot: "lauk_utama",
    chosen,
    cap,
    ctx,
    chips,
    rng,
    exclude,
    week: extra?.week,
    reserve: Number.isFinite(cap) ? MIN_SLOT_EFFORT : 0 // leave room for a sayur companion
  });
  if (!lauk) return null;
  sambalNote ||= !!passesHardFilters(lauk, ctx).sambalNote;
  chosen.push({ slot: "lauk_utama", menu: lauk, locked: false });
  exclude.add(lauk.id);

  const sayurPool = menusByCategory("sayur").filter((m) => intersects(m.tags, pairTags));
  const sayur = pickMenu({
    pool: sayurPool,
    slot: "sayur",
    chosen,
    cap,
    ctx,
    chips,
    rng,
    exclude,
    week: extra?.week
  });
  if (sayur) {
    sambalNote ||= !!passesHardFilters(sayur, ctx).sambalNote;
    chosen.push({ slot: "sayur", menu: sayur, locked: false });
  }

  return buildDaySet(chosen, hashSeedForDay(options), {
    nasiSpesialId: anchor.id,
    sambalNote
  });
}

// ── Curated sets ───────────────────────────────────────────────────────
export function tryCuratedSet(
  ctx: GenerateContext,
  options: DayOptions,
  rng: Rng
): DaySet | null {
  const chips = options.chips ?? [];
  const cap = effortCap(ctx.household, chips);
  const today = Date.parse(ctx.today);

  const candidates = CURATED_SETS.map((set) => {
    const menus = set.menuIds.map(getMenu).filter((m): m is Menu => !!m);
    if (menus.length !== set.menuIds.length) return null;
    if (!menus.every((m) => passesHardFilters(m, ctx).ok)) return null;
    const totalEffort = menus.reduce((s, m) => s + m.effortMinutes, 0);
    if (totalEffort > cap) return null;
    // Recency on the set as a whole entry.
    const recentlyUsed = ctx.history.some((h) => {
      if (!h.menuIds.includes(set.id)) return false;
      const then = Date.parse(h.date);
      return !Number.isNaN(then) && (today - then) / 86_400_000 <= W.recencyWindowDays;
    });
    if (recentlyUsed) return null;
    return { set, menus };
  }).filter((x): x is { set: (typeof CURATED_SETS)[number]; menus: Menu[] } => !!x);

  if (!candidates.length) return null;

  const isWeekend = [0, 6].includes(new Date(ctx.today).getDay());
  let best: (typeof candidates)[number] | undefined;
  let bestScore = -Infinity;
  for (const c of candidates) {
    let sc = rng() * W.jitter;
    if (chips.includes("spesial")) sc += W.spesial;
    if (isWeekend && c.set.occasion === "weekend") sc += W.chip;
    if (c.set.occasion === "spesial") sc += W.chip / 2;
    // small recency-style penalty for menus used recently even within a set
    for (const m of c.menus) sc -= recencyPenalty(m, ctx) * 0.3;
    if (sc > bestScore) {
      bestScore = sc;
      best = c;
    }
  }
  if (!best) return null;

  const items: DaySetItem[] = best.menus.map((menu) => ({
    slot: menu.category as SlotKind,
    menu,
    locked: false
  }));
  const sambalNote = best.menus.some((m) => passesHardFilters(m, ctx).sambalNote);
  const day = buildDaySet(items, hashSeedForDay(options), {
    curatedSetId: best.set.id,
    sambalNote
  });
  return { ...day, reason: best.set.description + reasonSuffix(items, sambalNote) };
}

function reasonSuffix(items: readonly DaySetItem[], sambalNote: boolean): string {
  let s = "";
  if (sambalNote) s += " Sambalnya bisa dipisah buat yang nggak kuat pedas.";
  if (items.some((i) => menuNeedsSupermarket(i.menu))) {
    s += " Ada bahan yang perlu ke supermarket dulu.";
  }
  return s;
}

// ── Seed helpers ───────────────────────────────────────────────────────
function hashSeedForDay(options: DayOptions): number {
  return hashSeed(`${options.seed ?? 0}:${options.salt ?? 0}`);
}
