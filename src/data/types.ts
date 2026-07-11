/** Core data model for MasakApa. Pure types — no runtime code. */

export type MenuCategory =
  | "lauk_utama"
  | "sayur"
  | "pelengkap"
  | "sup"
  | "one_dish"
  | "nasi_spesial";

export type Cuisine = "indonesia" | "chinese_indo" | "western_simple";

export type Protein =
  | "ayam"
  | "ikan"
  | "udang"
  | "telur"
  | "tempe_tahu"
  | "daging_sapi"
  | "none";

export type CookMethod =
  | "goreng"
  | "tumis"
  | "rebus"
  | "kukus"
  | "bakar"
  | "santan"
  | "panggang";

export type Richness = 1 | 2 | 3;
export type SpiceLevel = 0 | 1 | 2 | 3;
export type Difficulty = "gampang" | "sedang" | "butuh_niat";
export type PriceTier = "ekonomis" | "sedang" | "agak_mahal";

export type ShoppingCategory =
  | "sayuran_bumbu_segar"
  | "protein"
  | "bumbu_dapur"
  | "sembako"
  | "lainnya";

export type Availability = "pasar" | "supermarket";

export type Ingredient = {
  name: string; // canonical, matches the ingredient dictionary
  qtyPerServing: string; // human hint: "100 gr", "1/2 buah", "secukupnya"
  shoppingCategory: ShoppingCategory;
  perishable: boolean;
  staple: boolean; // assumed always at home — excluded from shopping list by default
  availability: Availability;
};

export type Menu = {
  id: string;
  name: string;
  photo?: string; // optional real photo URL; falls back to a striped placeholder
  category: MenuCategory;
  cuisine: Cuisine;
  protein: Protein;
  method: CookMethod;
  richness: Richness; // 1 ringan, 2 sedang, 3 berat
  bersantan: boolean;
  berkuah: boolean;
  segar: boolean; // fresh/light character (bening, urap, lalapan)
  spiceBase: SpiceLevel; // heat as normally cooked
  sambalSeparable: boolean; // can be served not-spicy with sambal on the side
  effortMinutes: number; // realistic active cooking time
  difficulty: Difficulty;
  priceTier: PriceTier;
  ingredients: Ingredient[];
  steps: string[]; // 5–8 simple steps in Bahasa
  nutrition: { kcalPerServing: number; proteinGram: number }; // rough estimates only
  tags: string[];
  pairTags?: string[]; // for nasi_spesial: what companions fit
};

/** A hand-authored named combo — a complete course Indonesians recognize as a unit. */
export type CuratedSet = {
  id: string;
  name: string; // "Paket Nasi Liwet"
  description: string; // short Bahasa blurb
  menuIds: string[]; // references existing menu ids
  occasion?: "weekend" | "spesial" | "harian";
};

export type AgeGroup = "anak" | "dewasa" | "lansia";

export type Member = {
  name: string;
  ageGroup: AgeGroup;
  allergies: string[]; // ingredient names — HARD filter
  dislikes: string[]; // menu ids or ingredient names — soft penalty
  spiceTolerance: SpiceLevel;
  eatingToday: boolean;
};

export type Household = {
  members: Member[];
  defaultServings: number;
  dishesPerMeal: 2 | 3 | 4; // 2 = lauk+sayur, 3 adds pelengkap, 4 adds sup
  weekdayEffortCapMinutes: number; // default 45
};

/** Silent, automatic suggestion-memory. NOT a diary. */
export type HistoryEntry = {
  date: string; // ISO yyyy-mm-dd
  menuIds: string[];
};

export type IngredientInfo = {
  name: string; // canonical name
  aliases: string[];
  shoppingCategory: ShoppingCategory;
  perishable: boolean;
  staple: boolean;
  availability: Availability;
};
