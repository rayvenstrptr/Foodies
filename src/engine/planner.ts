import type { Menu, Protein } from "../data/types";
import { MENUS, getMenu } from "../data/menus";
import { canonicalIngredientName } from "../data/ingredients";
import { makeRng, hashSeed, shuffle, type Rng } from "./rng";
import {
  buildDaySet,
  composeComposedDay,
  composeNasiSpesialDay,
  composeOneDish,
  effortCap,
  intersects,
  menuNeedsSupermarket,
  menusByCategory,
  passesHardFilters,
  pickMenu,
  tryCuratedSet,
  type WeekScoreCtx
} from "./core";
import type {
  DayOptions,
  DaySet,
  DaySetItem,
  GenerateContext,
  IngredientMatch,
  RecommendationEngine,
  SlotKind,
  WeekPlan
} from "./types";

/** Rebuild a DaySet from stored menu ids (persistence reload / week display). */
export function dayFromMenuIds(ids: string[], seed = 0): DaySet | null {
  const items: DaySetItem[] = [];
  for (const id of ids) {
    const menu = getMenu(id);
    if (menu) items.push({ slot: menu.category as SlotKind, menu, locked: false });
  }
  if (!items.length) return null;
  return buildDaySet(items, seed);
}

function randomSeed(): number {
  return Math.floor(Math.random() * 0xffffffff) >>> 0;
}

function dishesFor(ctx: GenerateContext, options: DayOptions): 2 | 3 | 4 {
  return options.dishesPerMeal ?? ctx.household.dishesPerMeal ?? 2;
}

function laukProtein(day: DaySet): Protein | undefined {
  return day.items.find((i) => i.slot === "lauk_utama")?.menu.protein;
}

// ── generateDay ────────────────────────────────────────────────────────
export function generateDay(ctx: GenerateContext, options: DayOptions = {}): DaySet | null {
  const opts: DayOptions = { ...options, seed: options.seed ?? randomSeed() };
  const chips = opts.chips ?? [];
  const rng = makeRng(hashSeed(`${opts.seed}:${opts.salt ?? 0}`));

  if (chips.includes("spesial")) {
    const curated = tryCuratedSet(ctx, opts, rng);
    if (curated) return curated;
    const themed = composeNasiSpesialDay(ctx, opts, rng);
    if (themed) return themed;
    return composeComposedDay(ctx, opts, rng) ?? composeOneDish(ctx, opts, rng);
  }

  const roll = rng();
  const isWeekend = [0, 6].includes(new Date(ctx.today).getDay());
  if (roll < 0.1) {
    const od = composeOneDish(ctx, opts, rng);
    if (od) return od;
  } else if (roll < (isWeekend ? 0.3 : 0.18)) {
    const themed = composeNasiSpesialDay(ctx, opts, rng);
    if (themed) return themed;
  }
  return composeComposedDay(ctx, opts, rng) ?? composeOneDish(ctx, opts, rng);
}

// ── rerollSlot ─────────────────────────────────────────────────────────
export function rerollSlot(
  day: DaySet,
  slotIndex: number,
  ctx: GenerateContext,
  options: DayOptions = {},
  extraExcludeIds: string[] = []
): DaySet {
  const target = day.items[slotIndex];
  if (!target) return day;

  const chips = options.chips ?? [];
  const cap = effortCap(ctx.household, chips);
  const fixed = day.items.filter((_, i) => i !== slotIndex);
  const exclude = new Set<string>([...extraExcludeIds, ...day.items.map((i) => i.menu.id)]);
  const salt = options.salt ?? 0;
  const rng = makeRng(hashSeed(`${day.seed}:${slotIndex}:${salt}`));

  let pool = menusByCategory(target.slot);
  const anchor = fixed.find((i) => i.slot === "nasi_spesial")?.menu;
  if (anchor && (target.slot === "lauk_utama" || target.slot === "sayur" || target.slot === "pelengkap")) {
    pool = pool.filter((m) => intersects(m.tags, anchor.pairTags ?? []));
  }

  const newMenu = pickMenu({
    pool,
    slot: target.slot,
    chosen: fixed,
    cap,
    ctx,
    chips,
    rng,
    exclude
  });
  if (!newMenu) return day;

  const items: DaySetItem[] = day.items.map((it, i) =>
    i === slotIndex ? { slot: target.slot, menu: newMenu, locked: false } : it
  );
  const sambalNote = items.some((i) => passesHardFilters(i.menu, ctx).sambalNote);
  return buildDaySet(items, day.seed, { nasiSpesialId: day.nasiSpesialId, sambalNote });
}

// ── Weekly planner ─────────────────────────────────────────────────────
function pickWeekProteins(rng: Rng): Protein[] {
  const cheap: Protein[] = ["telur", "tempe_tahu", "ikan", "ayam"];
  const base: Protein[] = ["ikan", "tempe_tahu", "ayam", "telur"];
  const r = rng();
  const fifth: Protein =
    r < 0.3 ? "daging_sapi" : r < 0.45 ? "udang" : cheap[Math.floor(rng() * cheap.length)];
  base.push(fifth);

  const seq = shuffle(base, rng);
  for (let i = 1; i < seq.length; i++) {
    if (seq[i] !== seq[i - 1]) continue;
    for (let j = i + 1; j < seq.length; j++) {
      if (seq[j] !== seq[i] && (j + 1 >= seq.length || seq[j] !== seq[i - 1])) {
        [seq[i], seq[j]] = [seq[j], seq[i]];
        break;
      }
    }
    if (seq[i] === seq[i - 1]) {
      for (let j = 0; j < i - 1; j++) {
        if (seq[j] !== seq[i] && (i + 1 >= seq.length || seq[j] !== seq[i + 1])) {
          [seq[i], seq[j]] = [seq[j], seq[i]];
          break;
        }
      }
    }
  }
  return seq;
}

function registerDay(day: DaySet, used: Set<string>, week: WeekScoreCtx) {
  for (const it of day.items) {
    used.add(it.menu.id);
    week.methodsUsed.add(it.menu.method);
    week.cuisinesUsed.add(it.menu.cuisine);
    for (const ing of it.menu.ingredients) {
      if (!ing.staple && ing.perishable) week.usedPerishables.add(ing.name);
    }
  }
}

export function planWeek(
  ctx: GenerateContext,
  options: DayOptions = {},
  locked?: (DaySet | null)[]
): WeekPlan {
  const opts: DayOptions = { ...options, seed: options.seed ?? randomSeed() };
  const rng = makeRng(hashSeed(`${opts.seed}:${opts.salt ?? 0}:week`));
  const used = new Set<string>();
  const week: WeekScoreCtx = {
    usedPerishables: new Set(),
    methodsUsed: new Set(),
    cuisinesUsed: new Set()
  };

  const days: (DaySet | null)[] = new Array(5).fill(null);
  for (let i = 0; i < 5; i++) {
    const lk = locked?.[i];
    if (lk) {
      days[i] = lk;
      registerDay(lk, used, week);
    }
  }

  const proteins = pickWeekProteins(rng);
  const dishes = dishesFor(ctx, opts);

  for (let i = 0; i < 5; i++) {
    if (days[i]) continue;
    const prev = i > 0 ? days[i - 1] : null;
    const prevProtein = prev ? laukProtein(prev) : undefined;

    let forced: Protein | undefined = proteins[i];
    if (forced === prevProtein) {
      // keep consecutive lauk proteins distinct
      forced = proteins.find((p) => p !== prevProtein) ?? forced;
    }

    let day =
      composeComposedDay(ctx, { ...opts, dishesPerMeal: dishes }, rng, {
        exclude: used,
        forcedLaukProtein: forced,
        week
      }) ??
      composeComposedDay(ctx, { ...opts, dishesPerMeal: dishes }, rng, {
        exclude: used,
        week
      });

    if (!day) continue;
    days[i] = day;
    registerDay(day, used, week);
  }

  const built = days.filter((d): d is DaySet => !!d);
  const proteinList = built
    .map((d) => laukProtein(d))
    .filter((p): p is Protein => !!p && p !== "none");
  const distinct = [...new Set(proteinList)];
  const hasIkan = proteinList.includes("ikan");
  const hasTempe = proteinList.includes("tempe_tahu");

  let reason = `Menu ${built.length} hari dengan ${distinct.length} jenis protein berbeda`;
  if (hasIkan && hasTempe) reason += ", ada hari ikan dan hari tempe/tahu";
  reason += ". Bahan segar sengaja dipakai lintas hari biar hemat dan nggak kebuang.";

  return { days: built, reason, proteins: distinct };
}

// ── Ingredient mode ────────────────────────────────────────────────────
export function ingredientMode(
  owned: string[],
  ctx: GenerateContext,
  limit = 30
): IngredientMatch[] {
  const ownedSet = new Set(
    owned.map((o) => canonicalIngredientName(o) ?? o.trim().toLowerCase())
  );
  const results: IngredientMatch[] = [];

  for (const menu of MENUS) {
    if (!passesHardFilters(menu, ctx).ok) continue;
    const needed = menu.ingredients.filter((i) => !i.staple);
    if (!needed.length) continue;

    let ownedW = 0;
    let neededW = 0;
    const ownedNeeded: string[] = [];
    const missing: string[] = [];
    for (const ing of needed) {
      const w = ing.perishable ? 2 : 1;
      neededW += w;
      if (ownedSet.has(ing.name.toLowerCase())) {
        ownedW += w;
        ownedNeeded.push(ing.name);
      } else {
        missing.push(ing.name);
      }
    }
    const coverage = neededW ? ownedW / neededW : 0;
    if (coverage <= 0) continue;
    results.push({ menu, coverage, ownedNeeded, missing, neededCount: needed.length });
  }

  results.sort((a, b) => b.coverage - a.coverage || a.missing.length - b.missing.length);
  return results.slice(0, limit);
}

// ── Engine factory ─────────────────────────────────────────────────────
export function createEngine(): RecommendationEngine {
  return { generateDay, rerollSlot, planWeek, ingredientMode };
}

export function menuNeedsSupermarketPublic(menu: Menu): boolean {
  return menuNeedsSupermarket(menu);
}
