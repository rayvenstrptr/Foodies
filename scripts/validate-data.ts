/**
 * Seed-data validator. Run: npm run validate:data
 * `--partial` skips the per-category minimum counts (used between authoring batches).
 */
import { MENUS } from "../src/data/menus";
import { CURATED_SETS } from "../src/data/sets";
import { lookupIngredient } from "../src/data/ingredients";
import type { Menu, MenuCategory } from "../src/data/types";

const partial = process.argv.includes("--partial");
const errors: string[] = [];
const warnings: string[] = [];

const CATEGORIES: MenuCategory[] = [
  "lauk_utama",
  "sayur",
  "pelengkap",
  "sup",
  "one_dish",
  "nasi_spesial"
];
const MIN_PER_CATEGORY: Record<MenuCategory, number> = {
  lauk_utama: 80,
  sayur: 50,
  pelengkap: 25,
  sup: 18,
  one_dish: 25,
  nasi_spesial: 8
};
const CUISINES = ["indonesia", "chinese_indo", "western_simple"];
const METHODS = ["goreng", "tumis", "rebus", "kukus", "bakar", "santan", "panggang"];
const PROTEINS = ["ayam", "ikan", "udang", "telur", "tempe_tahu", "daging_sapi", "none"];
const DIFFICULTIES = ["gampang", "sedang", "butuh_niat"];
const PRICES = ["ekonomis", "sedang", "agak_mahal"];

function err(msg: string) {
  errors.push(msg);
}
function warn(msg: string) {
  warnings.push(msg);
}

/** Loose name normalization to catch near-duplicates ("Tumis Kangkung" vs "Kangkung Tumis"). */
function nameKey(name: string): string {
  return name
    .toLowerCase()
    .replace(/[^a-z ]/g, "")
    .split(/\s+/)
    .filter(Boolean)
    .sort()
    .join(" ");
}

const ids = new Set<string>();
const nameKeys = new Map<string, string>();

function needsSupermarket(menu: Menu): boolean {
  return menu.ingredients.some((i) => !i.staple && i.availability === "supermarket");
}

for (const menu of MENUS) {
  const where = `[${menu.id}] ${menu.name}`;

  // ids
  if (!/^[a-z0-9-]+$/.test(menu.id)) err(`${where}: id harus kebab-case`);
  if (ids.has(menu.id)) err(`${where}: id duplikat`);
  ids.add(menu.id);

  // near-duplicate names
  const key = nameKey(menu.name);
  const existing = nameKeys.get(key);
  if (existing) err(`${where}: nama mirip/duplikat dengan [${existing}]`);
  else nameKeys.set(key, menu.id);

  // enum shape
  if (!CATEGORIES.includes(menu.category)) err(`${where}: category tidak valid`);
  if (!CUISINES.includes(menu.cuisine)) err(`${where}: cuisine tidak valid`);
  if (!METHODS.includes(menu.method)) err(`${where}: method tidak valid`);
  if (!PROTEINS.includes(menu.protein)) err(`${where}: protein tidak valid`);
  if (![1, 2, 3].includes(menu.richness)) err(`${where}: richness tidak valid`);
  if (![0, 1, 2, 3].includes(menu.spiceBase)) err(`${where}: spiceBase tidak valid`);
  if (!DIFFICULTIES.includes(menu.difficulty)) err(`${where}: difficulty tidak valid`);
  if (!PRICES.includes(menu.priceTier)) err(`${where}: priceTier tidak valid`);

  // effort
  if (!(menu.effortMinutes > 0)) err(`${where}: effortMinutes harus > 0`);
  if (menu.effortMinutes > 120) warn(`${where}: effortMinutes ${menu.effortMinutes} > 120, yakin?`);
  if (menu.difficulty === "gampang" && menu.effortMinutes > 45)
    warn(`${where}: gampang tapi ${menu.effortMinutes} menit`);
  if (menu.difficulty === "butuh_niat" && menu.effortMinutes < 40)
    warn(`${where}: butuh_niat tapi cuma ${menu.effortMinutes} menit`);

  // santan coherence
  if (menu.bersantan && menu.method !== "santan" && !menu.tags.includes("bersantan"))
    err(`${where}: bersantan=true tapi method bukan "santan" dan tag "bersantan" tidak ada`);
  if (menu.method === "santan" && !menu.bersantan)
    err(`${where}: method "santan" tapi bersantan=false`);

  // spice coherence
  if (menu.sambalSeparable && menu.spiceBase === 0)
    warn(`${where}: sambalSeparable tapi spiceBase 0 (tidak perlu dipisah)`);
  if (menu.spiceBase >= 2 && !menu.tags.includes("pedas"))
    warn(`${where}: spiceBase ${menu.spiceBase} tapi tanpa tag "pedas"`);

  // kuah coherence
  if (menu.category === "sup" && !menu.berkuah) err(`${where}: sup harus berkuah`);

  // nasi_spesial pairing
  if (menu.category === "nasi_spesial" && (!menu.pairTags || menu.pairTags.length < 2))
    err(`${where}: nasi_spesial butuh pairTags (>= 2)`);
  if (menu.category !== "nasi_spesial" && menu.pairTags)
    err(`${where}: pairTags hanya untuk nasi_spesial`);

  // ingredients
  if (menu.ingredients.length < 3) err(`${where}: bahan terlalu sedikit (<3)`);
  const seenIng = new Set<string>();
  for (const ing of menu.ingredients) {
    const info = lookupIngredient(ing.name);
    if (!info) err(`${where}: bahan "${ing.name}" tidak ada di kamus`);
    else if (info.name !== ing.name)
      err(`${where}: bahan "${ing.name}" bukan nama kanonik ("${info.name}")`);
    if (!ing.qtyPerServing.trim()) err(`${where}: qty kosong untuk "${ing.name}"`);
    if (seenIng.has(ing.name)) err(`${where}: bahan "${ing.name}" dobel`);
    seenIng.add(ing.name);
  }

  // steps
  if (menu.steps.length < 4 || menu.steps.length > 9)
    err(`${where}: langkah harus 4-9 (sekarang ${menu.steps.length})`);
  for (const s of menu.steps) if (s.trim().length < 10) err(`${where}: langkah terlalu pendek: "${s}"`);

  // nutrition sanity
  const { kcalPerServing, proteinGram } = menu.nutrition;
  if (kcalPerServing < 20 || kcalPerServing > 900)
    err(`${where}: kcal ${kcalPerServing} tidak masuk akal`);
  if (proteinGram < 0 || proteinGram > 60) err(`${where}: protein ${proteinGram}g tidak masuk akal`);
}

// ── Aggregate checks ─────────────────────────────────────────────────────
const byCategory = new Map<MenuCategory, number>();
for (const c of CATEGORIES) byCategory.set(c, 0);
for (const menu of MENUS) byCategory.set(menu.category, (byCategory.get(menu.category) ?? 0) + 1);

const supermarketMenus = MENUS.filter(needsSupermarket);
const supermarketPct = MENUS.length ? (supermarketMenus.length / MENUS.length) * 100 : 0;

const cuisineCount = new Map<string, number>();
for (const menu of MENUS) cuisineCount.set(menu.cuisine, (cuisineCount.get(menu.cuisine) ?? 0) + 1);

if (!partial) {
  if (MENUS.length < 300) err(`Total menu ${MENUS.length} < 300`);
  for (const c of CATEGORIES) {
    const n = byCategory.get(c) ?? 0;
    if (n < MIN_PER_CATEGORY[c]) err(`Kategori ${c}: ${n} < minimum ${MIN_PER_CATEGORY[c]}`);
  }
  if (supermarketPct > 15)
    err(`${supermarketPct.toFixed(1)}% menu butuh supermarket (target ~10%, max 15%)`);

  // curated sets
  if (CURATED_SETS.length < 25 || CURATED_SETS.length > 40)
    err(`Curated sets: ${CURATED_SETS.length}, harus 25-35`);
  const setIds = new Set<string>();
  for (const set of CURATED_SETS) {
    if (setIds.has(set.id)) err(`Set [${set.id}]: id duplikat`);
    setIds.add(set.id);
    if (set.menuIds.length < 2) err(`Set [${set.id}]: minimal 2 menu`);
    for (const mid of set.menuIds)
      if (!ids.has(mid)) err(`Set [${set.id}]: menu id "${mid}" tidak ada`);
  }
}

// ── Report ───────────────────────────────────────────────────────────────
console.log(`\n=== Validasi data MasakApa ${partial ? "(partial)" : ""} ===`);
console.log(`Total menu: ${MENUS.length}`);
for (const c of CATEGORIES) console.log(`  ${c}: ${byCategory.get(c)}`);
for (const [cui, n] of cuisineCount)
  console.log(`  ${cui}: ${n} (${((n / MENUS.length) * 100).toFixed(0)}%)`);
console.log(
  `  perlu supermarket: ${supermarketMenus.length} (${supermarketPct.toFixed(1)}%)`
);
if (!partial) console.log(`Curated sets: ${CURATED_SETS.length}`);

if (warnings.length) {
  console.log(`\n⚠ ${warnings.length} warning:`);
  for (const w of warnings) console.log(`  - ${w}`);
}
if (errors.length) {
  console.error(`\n✗ ${errors.length} error:`);
  for (const e of errors) console.error(`  - ${e}`);
  process.exit(1);
}
console.log(`\n✓ Data valid${warnings.length ? " (dengan warning)" : ""}.`);
