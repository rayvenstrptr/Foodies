import { describe, it, expect } from "vitest";
import { getMenu } from "../data/menus";
import { CURATED_SETS } from "../data/sets";
import type { Household, Member, Menu, Protein } from "../data/types";
import { makeRng } from "./rng";
import {
  passesHardFilters,
  passesBalance,
  scoreMenu,
  composeComposedDay,
  composeNasiSpesialDay,
  tryCuratedSet,
  type WeekScoreCtx
} from "./core";
import { generateDay, rerollSlot, planWeek, ingredientMode } from "./planner";
import type { DayOptions, GenerateContext } from "./types";

const INF = Number.POSITIVE_INFINITY;

function member(over: Partial<Member> = {}): Member {
  return {
    name: "Ibu",
    ageGroup: "dewasa",
    allergies: [],
    dislikes: [],
    spiceTolerance: 3,
    eatingToday: true,
    ...over
  };
}

function household(over: Partial<Household> = {}): Household {
  return {
    members: [member()],
    defaultServings: 4,
    dishesPerMeal: 2,
    weekdayEffortCapMinutes: 45,
    ...over
  };
}

function ctx(over: Partial<GenerateContext> = {}): GenerateContext {
  return {
    household: household(),
    favorites: [],
    banned: [],
    history: [],
    today: "2026-07-08",
    ...over
  };
}

const must = (id: string): Menu => {
  const m = getMenu(id);
  if (!m) throw new Error(`fixture menu missing: ${id}`);
  return m;
};

// ── 1. Allergy hard-filter ─────────────────────────────────────────────
describe("allergy hard filter", () => {
  it("excludes a menu containing an allergen (via alias)", () => {
    const telurDadar = must("telur-dadar"); // contains "telur ayam"
    const c = ctx({ household: household({ members: [member({ allergies: ["telur"] })] }) });
    expect(passesHardFilters(telurDadar, c).ok).toBe(false);
  });
  it("keeps a menu without the allergen", () => {
    const tumisKangkung = must("tumis-kangkung");
    const c = ctx({ household: household({ members: [member({ allergies: ["telur"] })] }) });
    expect(passesHardFilters(tumisKangkung, c).ok).toBe(true);
  });
  it("only counts members eating today", () => {
    const udangMenu = must("udang-goreng-bawang-putih");
    const c = ctx({
      household: household({
        members: [
          member({ name: "A", allergies: ["udang"], eatingToday: false }),
          member({ name: "B", eatingToday: true })
        ]
      })
    });
    expect(passesHardFilters(udangMenu, c).ok).toBe(true);
  });
});

// ── 2. Spice filter + sambalSeparable exception ────────────────────────
describe("spice filter", () => {
  it("excludes a too-spicy non-separable menu", () => {
    const rica = must("ayam-rica-rica"); // spiceBase 3, not separable
    const c = ctx({ household: household({ members: [member({ spiceTolerance: 0 })] }) });
    expect(passesHardFilters(rica, c).ok).toBe(false);
  });
  it("keeps a spicy sambalSeparable menu but flags a sambal note", () => {
    const lele = must("lele-goreng-lalapan"); // spiceBase 2, separable
    const c = ctx({ household: household({ members: [member({ spiceTolerance: 0 })] }) });
    const res = passesHardFilters(lele, c);
    expect(res.ok).toBe(true);
    expect(res.sambalNote).toBe(true);
  });
});

// ── 3. Max 1 bersantan per set ─────────────────────────────────────────
describe("max 1 bersantan rule", () => {
  it("rejects a second bersantan item", () => {
    const nasiUduk = must("nasi-uduk"); // bersantan, method rebus
    const opor = must("opor-ayam"); // bersantan, method santan
    const chosen = [{ slot: "nasi_spesial" as const, menu: nasiUduk, locked: false }];
    expect(passesBalance(opor, "lauk_utama", chosen, INF)).toBe(false);
  });
  it("allows a non-bersantan lauk alongside a bersantan anchor", () => {
    const nasiUduk = must("nasi-uduk");
    const ayamGoreng = must("ayam-goreng-lengkuas"); // not bersantan, goreng
    const chosen = [{ slot: "nasi_spesial" as const, menu: nasiUduk, locked: false }];
    expect(passesBalance(ayamGoreng, "lauk_utama", chosen, INF)).toBe(true);
  });
});

// ── 4. Heavy lauk ⇒ light/segar sayur ──────────────────────────────────
describe("heavy lauk needs light sayur", () => {
  const rendang = must("rendang-daging"); // richness 3
  const chosen = [{ slot: "lauk_utama" as const, menu: rendang, locked: false }];
  it("rejects a heavy (richness 2, non-segar) sayur", () => {
    const terongBalado = must("tumis-terong-balado"); // richness 2, not segar
    expect(passesBalance(terongBalado, "sayur", chosen, INF)).toBe(false);
  });
  it("accepts a light bening sayur", () => {
    const bening = must("sayur-bening-bayam"); // richness 1
    expect(passesBalance(bening, "sayur", chosen, INF)).toBe(true);
  });
});

// ── 5. No duplicate method in a set ────────────────────────────────────
describe("no duplicate method", () => {
  const ayamGoreng = must("ayam-goreng-lengkuas"); // goreng
  const chosen = [{ slot: "lauk_utama" as const, menu: ayamGoreng, locked: false }];
  it("rejects a second goreng dish", () => {
    const terongGoreng = must("tumis-terong-balado"); // goreng
    expect(passesBalance(terongGoreng, "sayur", chosen, INF)).toBe(false);
  });
  it("accepts a differently-cooked dish", () => {
    const tumis = must("tumis-kangkung"); // tumis
    expect(passesBalance(tumis, "sayur", chosen, INF)).toBe(true);
  });
});

// ── extra: lauk & pelengkap must not share protein ─────────────────────
describe("lauk and pelengkap protein clash", () => {
  it("rejects a pelengkap sharing the lauk protein", () => {
    const ayamGoreng = must("ayam-goreng-lengkuas"); // protein ayam
    const atiBalado = must("ati-ampela-balado"); // protein ayam, pelengkap? (lauk) — use a pelengkap ayam
    // sambal-goreng-ati is protein ayam (pelengkap-ish); find any pelengkap with protein ayam
    const chosen = [{ slot: "lauk_utama" as const, menu: ayamGoreng, locked: false }];
    // build a synthetic pelengkap-slot check using nugget (protein ayam)
    const nugget = must("kentang-goreng-ayam"); // protein ayam, category pelengkap
    void atiBalado;
    expect(passesBalance(nugget, "pelengkap", chosen, INF)).toBe(false);
  });
});

// ── 6 & 7. Weekly protein rotation + no repeats ────────────────────────
describe("weekly plan constraints", () => {
  const week = planWeek(ctx(), { chips: ["santai"], seed: 42 });

  it("produces five days", () => {
    expect(week.days.length).toBe(5);
  });
  it("has no exact menu repeated across the week", () => {
    const ids = week.days.flatMap((d) => d.items.map((i) => i.menu.id));
    expect(new Set(ids).size).toBe(ids.length);
  });
  it("never repeats the lauk protein on consecutive days", () => {
    const proteins = week.days.map(
      (d) => d.items.find((i) => i.slot === "lauk_utama")?.menu.protein
    );
    for (let i = 1; i < proteins.length; i++) {
      expect(proteins[i]).not.toBe(proteins[i - 1]);
    }
  });
  it("uses at least 3 distinct lauk proteins incl. ikan and tempe_tahu", () => {
    const proteins = week.days
      .map((d) => d.items.find((i) => i.slot === "lauk_utama")?.menu.protein)
      .filter((p): p is Protein => !!p && p !== "none");
    const distinct = new Set(proteins);
    expect(distinct.size).toBeGreaterThanOrEqual(3);
    expect(proteins).toContain("ikan");
    expect(proteins).toContain("tempe_tahu");
  });
  it("keeps the weekly price average at or below 'sedang'", () => {
    const rank = { ekonomis: 0, sedang: 1, agak_mahal: 2 } as const;
    const avg =
      week.days.reduce((s, d) => s + rank[d.priceTier], 0) / week.days.length;
    expect(avg).toBeLessThanOrEqual(1);
  });
});

// ── 8. 14-day recency penalty ──────────────────────────────────────────
describe("recency penalty", () => {
  const menu = must("ayam-goreng-lengkuas");
  it("lowers the score for a recently-shown menu", () => {
    const withHist = ctx({ history: [{ date: "2026-07-08", menuIds: [menu.id] }] });
    const noHist = ctx();
    const a = scoreMenu(menu, withHist, [], makeRng(7));
    const b = scoreMenu(menu, noHist, [], makeRng(7));
    expect(a).toBeLessThan(b);
  });
  it("decays: 13 days ago penalises less than today", () => {
    const today = ctx({ history: [{ date: "2026-07-08", menuIds: [menu.id] }] });
    const old = ctx({ history: [{ date: "2026-06-25", menuIds: [menu.id] }] }); // 13 days
    const a = scoreMenu(menu, today, [], makeRng(3));
    const b = scoreMenu(menu, old, [], makeRng(3));
    expect(a).toBeLessThan(b);
  });
  it("ignores history older than 14 days", () => {
    const menu2 = must("tumis-kangkung");
    const old = ctx({ history: [{ date: "2026-06-01", menuIds: [menu2.id] }] }); // >14 days
    const none = ctx();
    const a = scoreMenu(menu2, old, [], makeRng(9));
    const b = scoreMenu(menu2, none, [], makeRng(9));
    expect(a).toBeCloseTo(b, 5);
  });
});

// ── 9. Ingredient-reuse bonus ──────────────────────────────────────────
describe("ingredient reuse bonus", () => {
  it("prefers a menu that reuses an already-used perishable", () => {
    const menu = must("ayam-goreng-lengkuas"); // uses "ayam" (perishable)
    const base: WeekScoreCtx = {
      usedPerishables: new Set(),
      methodsUsed: new Set([menu.method]),
      cuisinesUsed: new Set([menu.cuisine])
    };
    const reuse: WeekScoreCtx = {
      usedPerishables: new Set(["ayam"]),
      methodsUsed: new Set([menu.method]),
      cuisinesUsed: new Set([menu.cuisine])
    };
    const withReuse = scoreMenu(menu, ctx(), [], makeRng(5), reuse);
    const without = scoreMenu(menu, ctx(), [], makeRng(5), base);
    expect(withReuse).toBeGreaterThan(without);
  });
});

// ── 10. Swap keeps locked items valid ──────────────────────────────────
describe("rerollSlot keeps the rest of the set valid", () => {
  const options: DayOptions = { chips: ["santai"], seed: 123, dishesPerMeal: 3 };
  const day = composeComposedDay(ctx(), { ...options }, makeRng(123));

  it("composes a 3-dish set to swap", () => {
    expect(day).not.toBeNull();
    expect(day!.items.length).toBe(3);
  });

  it("swaps the sayur, keeps lauk & pelengkap, and stays balanced", () => {
    const sayurIndex = day!.items.findIndex((i) => i.slot === "sayur");
    const before = day!.items[sayurIndex].menu.id;
    const after = rerollSlot(day!, sayurIndex, ctx(), options);
    const newSayur = after.items[sayurIndex];

    expect(newSayur.menu.id).not.toBe(before);
    // other slots unchanged
    for (let i = 0; i < after.items.length; i++) {
      if (i === sayurIndex) continue;
      expect(after.items[i].menu.id).toBe(day!.items[i].menu.id);
    }
    // still balanced against the fixed items
    const fixed = after.items.filter((_, i) => i !== sayurIndex);
    expect(passesBalance(newSayur.menu, "sayur", fixed, INF)).toBe(true);
  });
});

// ── 11. nasi_spesial pairing respects pairTags ─────────────────────────
describe("nasi_spesial pairing", () => {
  it("only pairs companions whose tags match the anchor pairTags", () => {
    let checked = 0;
    for (let seed = 0; seed < 40 && checked < 6; seed++) {
      const day = composeNasiSpesialDay(
        ctx(),
        { chips: ["spesial", "santai"], seed },
        makeRng(seed)
      );
      if (!day) continue;
      const anchor = day.items.find((i) => i.slot === "nasi_spesial")!.menu;
      const pairTags = anchor.pairTags ?? [];
      for (const it of day.items) {
        if (it.slot === "nasi_spesial") continue;
        expect(it.menu.tags.some((t) => pairTags.includes(t))).toBe(true);
      }
      checked++;
    }
    expect(checked).toBeGreaterThan(0);
  });
});

// ── 12. Curated sets respect hard filters ──────────────────────────────
describe("curated sets respect hard filters", () => {
  it("never surfaces a set containing an allergen", () => {
    const c = ctx({ household: household({ members: [member({ allergies: ["ayam"] })] }) });
    for (let seed = 0; seed < 60; seed++) {
      const day = tryCuratedSet(c, { chips: ["spesial", "santai"], seed }, makeRng(seed));
      if (!day) continue;
      for (const it of day.items) {
        expect(it.menu.ingredients.some((i) => i.name === "ayam")).toBe(false);
      }
    }
  });

  it("every curated set references existing menus", () => {
    for (const set of CURATED_SETS) {
      for (const id of set.menuIds) expect(getMenu(id), `${set.id} → ${id}`).toBeTruthy();
    }
  });
});

// ── Determinism + smoke ────────────────────────────────────────────────
describe("determinism & smoke", () => {
  it("same seed → identical day", () => {
    const a = generateDay(ctx(), { seed: 999, chips: [] });
    const b = generateDay(ctx(), { seed: 999, chips: [] });
    expect(a?.items.map((i) => i.menu.id)).toEqual(b?.items.map((i) => i.menu.id));
  });

  it("banned menus never appear", () => {
    const banned = "ayam-goreng-lengkuas";
    const c = ctx({ banned: [banned] });
    for (let seed = 0; seed < 30; seed++) {
      const day = generateDay(c, { seed, chips: ["santai"] });
      expect(day?.items.every((i) => i.menu.id !== banned)).toBe(true);
    }
  });

  it("ingredient mode ranks by coverage", () => {
    const matches = ingredientMode(["ayam", "kecap manis", "bawang putih", "jahe"], ctx(), 10);
    expect(matches.length).toBeGreaterThan(0);
    for (let i = 1; i < matches.length; i++) {
      expect(matches[i - 1].coverage).toBeGreaterThanOrEqual(matches[i].coverage);
    }
    // coverage between 0 and 1
    expect(matches[0].coverage).toBeGreaterThan(0);
    expect(matches[0].coverage).toBeLessThanOrEqual(1);
  });

  it("every generated composed day satisfies balance constraints", () => {
    for (let seed = 0; seed < 25; seed++) {
      const day = composeComposedDay(ctx(), { chips: ["santai"], seed, dishesPerMeal: 3 }, makeRng(seed));
      if (!day) continue;
      const santanCount = day.items.filter((i) => i.menu.bersantan).length;
      expect(santanCount).toBeLessThanOrEqual(1);
      const methods = day.items.filter((i) => i.slot !== "nasi_spesial").map((i) => i.menu.method);
      expect(new Set(methods).size).toBe(methods.length);
    }
  });
});
