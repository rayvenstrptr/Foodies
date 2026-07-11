import type {
  CookMethod,
  Cuisine,
  Difficulty,
  Ingredient,
  Menu,
  MenuCategory,
  PriceTier,
  Protein,
  Richness,
  SpiceLevel
} from "./types";
import { lookupIngredient } from "./ingredients";

/**
 * Compact authoring format. Ingredient rows are [canonicalNameOrAlias, qtyPerServing];
 * shopping metadata is resolved from the dictionary so it can never drift per-menu.
 */
export type MenuDef = {
  id: string;
  name: string;
  cat: MenuCategory;
  cui?: Cuisine; // default "indonesia"
  pro: Protein;
  met: CookMethod;
  rich: Richness;
  santan?: boolean;
  kuah?: boolean;
  segar?: boolean;
  spice?: SpiceLevel; // default 0
  sambal?: boolean; // sambalSeparable, default false
  menit: number;
  sulit?: Difficulty; // default "gampang"
  harga?: PriceTier; // default "ekonomis"
  bahan: [string, string][];
  langkah: string[];
  kcal: number;
  protg: number;
  tags?: string[];
  pair?: string[];
};

function resolveIngredient(menuId: string, nameOrAlias: string, qty: string): Ingredient {
  const info = lookupIngredient(nameOrAlias);
  if (!info) {
    throw new Error(
      `Menu "${menuId}": bahan "${nameOrAlias}" tidak ada di kamus bahan (src/data/ingredients.ts)`
    );
  }
  return {
    name: info.name,
    qtyPerServing: qty,
    shoppingCategory: info.shoppingCategory,
    perishable: info.perishable,
    staple: info.staple,
    availability: info.availability
  };
}

export function m(def: MenuDef): Menu {
  return {
    id: def.id,
    name: def.name,
    category: def.cat,
    cuisine: def.cui ?? "indonesia",
    protein: def.pro,
    method: def.met,
    richness: def.rich,
    bersantan: def.santan ?? false,
    berkuah: def.kuah ?? false,
    segar: def.segar ?? false,
    spiceBase: def.spice ?? 0,
    sambalSeparable: def.sambal ?? false,
    effortMinutes: def.menit,
    difficulty: def.sulit ?? "gampang",
    priceTier: def.harga ?? "ekonomis",
    ingredients: def.bahan.map(([n, q]) => resolveIngredient(def.id, n, q)),
    steps: def.langkah,
    nutrition: { kcalPerServing: def.kcal, proteinGram: def.protg },
    tags: def.tags ?? [],
    pairTags: def.pair
  };
}
