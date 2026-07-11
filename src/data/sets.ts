import type { CuratedSet } from "./types";

/**
 * Paket bernama — course lengkap yang dikenali orang Indonesia sebagai satu
 * kesatuan. Setiap menuIds mereferensikan id menu yang ADA di src/data/menus/.
 * Validator memastikan semua id valid. Filter keras, cap effort, & recency
 * tetap berlaku saat engine menyajikan paket (satu paket = satu entry history).
 */
export const CURATED_SETS: CuratedSet[] = [
  {
    id: "paket-nasi-liwet-sunda",
    name: "Paket Nasi Liwet Sunda",
    description: "Nasi liwet teri gurih, tahu tempe goreng, sayur asem, dan sambal terasi.",
    menuIds: ["nasi-liwet-sunda", "tahu-tempe-goreng", "sayur-asem", "sambal-terasi"],
    occasion: "weekend"
  },
  {
    id: "paket-nasi-uduk-betawi",
    name: "Paket Nasi Uduk Betawi",
    description: "Nasi uduk wangi dengan ayam goreng, orek tempe, telur balado, dan kerupuk.",
    menuIds: ["nasi-uduk", "ayam-goreng-lengkuas", "orek-tempe-kering", "telur-balado", "kerupuk-udang"],
    occasion: "weekend"
  },
  {
    id: "paket-nasi-kuning-komplit",
    name: "Paket Nasi Kuning Komplit",
    description: "Nasi kuning dengan ayam serundeng, orek tempe, telur balado, dan sambal goreng kentang.",
    menuIds: ["nasi-kuning", "ayam-goreng-serundeng", "orek-tempe-kering", "telur-balado", "sambal-goreng-kentang"],
    occasion: "spesial"
  },
  {
    id: "paket-nasi-hainam",
    name: "Paket Nasi Hainam",
    description: "Nasi hainam gurih jahe, ayam rebus, tumis pakcoy, dan acar segar.",
    menuIds: ["nasi-hainam", "ayam-rebus-jahe", "cah-pakcoy", "acar-timun-wortel"],
    occasion: "weekend"
  },
  {
    id: "paket-soto-ayam-komplit",
    name: "Paket Soto Ayam Komplit",
    description: "Soto ayam bening, perkedel kentang, kerupuk, dan sambal.",
    menuIds: ["soto-ayam-bening", "perkedel-kentang", "kerupuk-udang", "sambal-terasi"],
    occasion: "harian"
  },
  {
    id: "paket-soto-lamongan",
    name: "Paket Soto Lamongan",
    description: "Soto Lamongan koya dengan perkedel kentang dan kerupuk udang.",
    menuIds: ["soto-lamongan", "perkedel-kentang", "kerupuk-udang"],
    occasion: "weekend"
  },
  {
    id: "paket-rawon-komplit",
    name: "Paket Rawon Komplit",
    description: "Rawon daging kluwek pekat dengan sambal terasi dan kerupuk.",
    menuIds: ["rawon-daging", "sambal-terasi", "kerupuk-udang"],
    occasion: "weekend"
  },
  {
    id: "paket-pecel-komplit",
    name: "Paket Pecel Komplit",
    description: "Pecel sayur bumbu kacang, tempe goreng, telur mata sapi, dan rempeyek.",
    menuIds: ["pecel-sayur", "tempe-goreng-tepung", "telur-mata-sapi-kecap", "rempeyek-kacang"],
    occasion: "harian"
  },
  {
    id: "paket-gado-gado",
    name: "Paket Gado-Gado",
    description: "Gado-gado siram bumbu kacang lengkap dengan tempe mendoan.",
    menuIds: ["gado-gado-sayur", "tempe-mendoan"],
    occasion: "harian"
  },
  {
    id: "paket-ayam-bakar-lalapan",
    name: "Paket Ayam Bakar Lalapan",
    description: "Ayam bakar kecap, tahu tempe goreng, lalapan sambal terasi, dan sayur asem.",
    menuIds: ["ayam-bakar-kecap", "tahu-tempe-goreng", "lalapan-sambal-terasi", "sayur-asem"],
    occasion: "weekend"
  },
  {
    id: "paket-ayam-goreng-lalapan",
    name: "Paket Ayam Goreng Lalapan",
    description: "Ayam goreng lengkuas, tempe goreng, lalapan, dan tumis kangkung.",
    menuIds: ["ayam-goreng-lengkuas", "tempe-goreng-tepung", "lalapan-sambal-terasi", "tumis-kangkung"],
    occasion: "harian"
  },
  {
    id: "paket-nasi-padang-rumahan",
    name: "Paket Nasi Padang Rumahan",
    description: "Rendang daging, tumis daun singkong, sambal ijo, dan telur balado.",
    menuIds: ["rendang-daging", "tumis-daun-singkong-teri", "sambal-ijo", "telur-balado"],
    occasion: "spesial"
  },
  {
    id: "paket-nasi-bakar",
    name: "Paket Nasi Bakar",
    description: "Nasi bakar ayam kemangi, tahu tempe goreng, dan lalapan sambal.",
    menuIds: ["nasi-bakar-komplit", "tahu-tempe-goreng", "lalapan-sambal-terasi"],
    occasion: "weekend"
  },
  {
    id: "paket-ikan-bakar",
    name: "Paket Ikan Bakar",
    description: "Ikan bakar kecap, tumis kangkung, dan sambal terasi.",
    menuIds: ["ikan-bakar-kecap", "tumis-kangkung", "sambal-terasi"],
    occasion: "harian"
  },
  {
    id: "paket-opor-lebaran",
    name: "Paket Opor Lebaran",
    description: "Opor ayam, sambal goreng ati kentang, dan telur balado — khas hari raya.",
    menuIds: ["opor-ayam", "sambal-goreng-ati", "telur-balado"],
    occasion: "spesial"
  },
  {
    id: "paket-gulai-ayam",
    name: "Paket Gulai Ayam",
    description: "Gulai ayam bersantan, tumis kacang panjang, dan sambal terasi.",
    menuIds: ["gulai-ayam", "tumis-kacang-panjang", "sambal-terasi"],
    occasion: "harian"
  },
  {
    id: "paket-soto-betawi",
    name: "Paket Soto Betawi",
    description: "Soto Betawi santan gurih dengan emping dan acar segar.",
    menuIds: ["soto-betawi", "emping-goreng", "acar-timun-wortel"],
    occasion: "weekend"
  },
  {
    id: "paket-nasi-goreng-spesial",
    name: "Paket Nasi Goreng Spesial",
    description: "Nasi goreng kampung dengan telur mata sapi dan kerupuk.",
    menuIds: ["nasi-goreng-kampung", "telur-mata-sapi-kecap", "kerupuk-udang"],
    occasion: "harian"
  },
  {
    id: "paket-mie-ayam-pangsit",
    name: "Paket Mie Ayam Pangsit",
    description: "Mie ayam dengan pangsit rebus kuah.",
    menuIds: ["mie-ayam", "pangsit-rebus-ayam"],
    occasion: "harian"
  },
  {
    id: "paket-capcay-ayam",
    name: "Paket Capcay Ayam Goreng",
    description: "Capcay kuah sayuran dengan ayam goreng tepung crispy.",
    menuIds: ["capcay-kuah", "ayam-goreng-tepung"],
    occasion: "harian"
  },
  {
    id: "paket-bubur-ayam",
    name: "Paket Bubur Ayam",
    description: "Bubur ayam komplit dengan telur pindang dan kerupuk.",
    menuIds: ["bubur-ayam", "telur-pindang", "kerupuk-udang"],
    occasion: "harian"
  },
  {
    id: "paket-nasi-timbel-sunda",
    name: "Paket Nasi Timbel Sunda",
    description: "Ayam goreng, tahu tempe, sayur asem, sambal terasi, dan lalapan ala timbel.",
    menuIds: ["ayam-goreng-lengkuas", "tahu-tempe-goreng", "sayur-asem", "lalapan-sambal-terasi"],
    occasion: "weekend"
  },
  {
    id: "paket-pindang-serani",
    name: "Paket Pindang Serani",
    description: "Pindang serani ikan segar berkuah, tumis kangkung, dan sambal terasi.",
    menuIds: ["pindang-serani", "tumis-kangkung", "sambal-terasi"],
    occasion: "harian"
  },
  {
    id: "paket-nasi-kebuli",
    name: "Paket Nasi Kebuli",
    description: "Nasi kebuli rempah dengan acar dan emping.",
    menuIds: ["nasi-goreng-liwet-anchor", "acar-timun-wortel", "emping-goreng"],
    occasion: "spesial"
  },
  {
    id: "paket-semur-betawi",
    name: "Paket Semur Betawi",
    description: "Semur daging manis dengan acar dan emping.",
    menuIds: ["semur-daging", "acar-timun-wortel", "emping-goreng"],
    occasion: "weekend"
  },
  {
    id: "paket-sop-iga",
    name: "Paket Sop Iga",
    description: "Sop iga sapi hangat dengan sambal kecap dan kerupuk.",
    menuIds: ["sop-iga-sapi", "sambal-kecap", "kerupuk-udang"],
    occasion: "weekend"
  },
  {
    id: "paket-garang-asem",
    name: "Paket Garang Asem",
    description: "Garang asem ayam berkuah asam segar dengan tahu tempe dan sambal.",
    menuIds: ["garang-asem-ayam", "tahu-tempe-goreng", "sambal-terasi"],
    occasion: "harian"
  },
  {
    id: "paket-nasi-ulam",
    name: "Paket Nasi Ulam Betawi",
    description: "Nasi ulam serundeng dengan telur dadar dan tahu tempe goreng.",
    menuIds: ["nasi-ulam", "telur-dadar", "tahu-tempe-goreng"],
    occasion: "weekend"
  },
  {
    id: "paket-nasi-lengko",
    name: "Paket Nasi Lengko Cirebon",
    description: "Nasi lengko tahu tempe bumbu kacang dengan kerupuk.",
    menuIds: ["nasi-lengko", "kerupuk-udang"],
    occasion: "harian"
  },
  {
    id: "paket-ayam-penyet",
    name: "Paket Ayam Penyet",
    description: "Ayam penyet sambal terasi dengan tempe goreng dan tumis kangkung.",
    menuIds: ["ayam-penyet", "tempe-goreng-tepung", "tumis-kangkung"],
    occasion: "harian"
  }
];
