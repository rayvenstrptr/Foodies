import type { Menu } from "./types";
import { LAUK_AYAM_TELUR } from "./menus/lauk-ayam-telur";
import { LAUK_IKAN_SEAFOOD } from "./menus/lauk-ikan-seafood";
import { LAUK_DAGING_TEMPE } from "./menus/lauk-daging-tempe";
import { SAYUR } from "./menus/sayur";
import { PELENGKAP } from "./menus/pelengkap";
import { SUP } from "./menus/sup";
import { ONE_DISH } from "./menus/one-dish";
import { NASI_SPESIAL } from "./menus/nasi-spesial";
import { RUMAHAN_TAMBAHAN } from "./menus/rumahan-tambahan";
import { CHINESE_TAMBAHAN } from "./menus/chinese-tambahan";

/**
 * Katalog menu lengkap. Seed data dipecah per kategori di src/data/menus/
 * supaya batch authoring & review gampang; file ini tetap satu-satunya
 * pintu masuk (spec: src/data/menus.ts).
 */
export const MENUS: Menu[] = [
  ...LAUK_AYAM_TELUR,
  ...LAUK_IKAN_SEAFOOD,
  ...LAUK_DAGING_TEMPE,
  ...SAYUR,
  ...PELENGKAP,
  ...SUP,
  ...ONE_DISH,
  ...NASI_SPESIAL,
  ...RUMAHAN_TAMBAHAN,
  ...CHINESE_TAMBAHAN
];

const byId = new Map(MENUS.map((menu) => [menu.id, menu]));
export function getMenu(id: string): Menu | undefined {
  return byId.get(id);
}
