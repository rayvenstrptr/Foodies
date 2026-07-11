import type {
  Household,
  HistoryEntry,
  Member,
  Menu,
  PriceTier,
  SpiceLevel
} from "../data/types";

/** Preference chips on the Today screen. */
export type Chip =
  | "pedas"
  | "berkuah"
  | "seger"
  | "cepet"
  | "ekonomis"
  | "spesial"
  | "santai";

export type SlotKind =
  | "lauk_utama"
  | "sayur"
  | "pelengkap"
  | "sup"
  | "one_dish"
  | "nasi_spesial";

export type DaySetItem = {
  slot: SlotKind;
  menu: Menu;
  locked: boolean;
};

export type DaySet = {
  items: DaySetItem[];
  reason: string;
  totalEffortMinutes: number;
  priceTier: PriceTier;
  nutrition: { kcalPerServing: number; proteinGram: number };
  needsSupermarket: boolean;
  seed: number;
  /** Set when this day came from a hand-authored curated set. */
  curatedSetId?: string;
  /** Set for a themed day anchored by a nasi_spesial. */
  nasiSpesialId?: string;
};

export type WeekPlan = {
  /** Senin–Jumat. */
  days: DaySet[];
  reason: string;
  proteins: string[];
};

/** Everything the engine needs about the user to filter and score. */
export type GenerateContext = {
  household: Household;
  favorites: string[];
  banned: string[];
  history: HistoryEntry[];
  /** ISO yyyy-mm-dd — anchors recency + weekend detection. */
  today: string;
  /** Max supermarket-dependent menus allowed in a weekly plan (default 1). */
  allowSupermarketPerWeek?: number;
};

export type DayOptions = {
  chips?: Chip[];
  dishesPerMeal?: 2 | 3 | 4;
  servings?: number;
  seed?: number | string;
  /** Bump to force a different result when re-rolling the whole set. */
  salt?: number;
};

export type IngredientMatch = {
  menu: Menu;
  coverage: number; // 0..1, perishable-weighted
  ownedNeeded: string[];
  missing: string[];
  neededCount: number;
};

export interface RecommendationEngine {
  generateDay(ctx: GenerateContext, options?: DayOptions): DaySet | null;
  rerollSlot(
    day: DaySet,
    slotIndex: number,
    ctx: GenerateContext,
    options?: DayOptions,
    extraExcludeIds?: string[]
  ): DaySet;
  planWeek(
    ctx: GenerateContext,
    options?: DayOptions,
    locked?: (DaySet | null)[]
  ): WeekPlan;
  ingredientMode(
    owned: string[],
    ctx: GenerateContext,
    limit?: number
  ): IngredientMatch[];
}

export type { Household, Member, Menu, SpiceLevel };
