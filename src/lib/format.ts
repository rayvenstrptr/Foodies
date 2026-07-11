import type {
  CookMethod,
  Difficulty,
  MenuCategory,
  PriceTier,
  Protein,
  ShoppingCategory
} from "../data/types";

export const PRICE_LABEL: Record<PriceTier, string> = {
  ekonomis: "Ekonomis",
  sedang: "Sedang",
  agak_mahal: "Agak mahal"
};

export const DIFFICULTY_LABEL: Record<Difficulty, string> = {
  gampang: "Gampang",
  sedang: "Sedang",
  butuh_niat: "Butuh niat"
};

export const CATEGORY_LABEL: Record<MenuCategory, string> = {
  lauk_utama: "Lauk utama",
  sayur: "Sayur",
  pelengkap: "Pelengkap",
  sup: "Sup",
  one_dish: "Sekali piring",
  nasi_spesial: "Nasi spesial"
};

export const PROTEIN_LABEL: Record<Protein, string> = {
  ayam: "Ayam",
  ikan: "Ikan",
  udang: "Udang/seafood",
  telur: "Telur",
  tempe_tahu: "Tempe/tahu",
  daging_sapi: "Daging sapi",
  none: "Tanpa protein hewani"
};

export const METHOD_LABEL: Record<CookMethod, string> = {
  goreng: "Goreng",
  tumis: "Tumis",
  rebus: "Rebus",
  kukus: "Kukus",
  bakar: "Bakar",
  santan: "Bersantan",
  panggang: "Panggang"
};

export const SHOPPING_SECTION_LABEL: Record<ShoppingCategory, string> = {
  sayuran_bumbu_segar: "Sayuran & Bumbu Segar",
  protein: "Protein",
  bumbu_dapur: "Bumbu Dapur",
  sembako: "Sembako",
  lainnya: "Lainnya"
};

export const SHOPPING_SECTION_ORDER: ShoppingCategory[] = [
  "sayuran_bumbu_segar",
  "protein",
  "bumbu_dapur",
  "sembako",
  "lainnya"
];

export function effortLabel(minutes: number): string {
  if (minutes <= 20) return `${minutes} menit · cepat`;
  if (minutes <= 45) return `${minutes} menit`;
  return `${minutes} menit · agak lama`;
}

export const CHIP_LABEL: Record<string, string> = {
  pedas: "🌶️ Pedas",
  berkuah: "🍜 Berkuah",
  seger: "🥬 Seger",
  cepet: "⚡ Cepet",
  ekonomis: "💰 Ekonomis",
  spesial: "✨ Yang Spesial",
  santai: "😌 Lagi santai"
};

export const SLOT_LABEL: Record<string, string> = {
  lauk_utama: "Lauk",
  sayur: "Sayur",
  pelengkap: "Pelengkap",
  sup: "Sup",
  one_dish: "Menu lengkap",
  nasi_spesial: "Nasi spesial"
};
