import type { Menu } from "../types";
import { m } from "../menuHelpers";

/** One-dish — makanan lengkap tanpa lauk lain. Baca TAGGING.md. */
export const ONE_DISH: Menu[] = [
  // ── Nasi & bubur ─────────────────────────────────────────────────────
  m({
    id: "nasi-goreng-kampung",
    name: "Nasi Goreng Kampung",
    cat: "one_dish", pro: "telur", met: "goreng", rich: 2, spice: 2, menit: 20,
    bahan: [
      ["beras", "1 piring nasi"], ["telur ayam", "1 butir"], ["cabe rawit", "5 buah"],
      ["bawang merah", "4 butir"], ["bawang putih", "2 siung"], ["kecap manis", "1 sdm"],
      ["ikan teri", "2 sdm"], ["daun bawang", "1 batang"]
    ],
    langkah: [
      "Ulek kasar cabe rawit, bawang merah, dan bawang putih.",
      "Goreng teri sampai garing, sisihkan.",
      "Tumis bumbu ulek sampai harum, orak-arik telur.",
      "Masukkan nasi dan kecap manis, aduk rata api besar.",
      "Masukkan teri dan daun bawang, aduk, angkat."
    ],
    kcal: 420, protg: 14, tags: ["pedas", "cepat", "klasik", "ekonomis"]
  }),
  m({
    id: "nasi-goreng-ayam",
    name: "Nasi Goreng Ayam",
    cat: "one_dish", pro: "ayam", met: "goreng", rich: 2, menit: 20,
    harga: "sedang",
    bahan: [
      ["beras", "1 piring nasi"], ["dada ayam", "80 gr"], ["telur ayam", "1 butir"],
      ["bawang merah", "4 butir"], ["bawang putih", "2 siung"], ["kecap manis", "2 sdm"],
      ["sawi hijau", "2 lembar"], ["daun bawang", "1 batang"]
    ],
    langkah: [
      "Iris kecil ayam, tumis sampai matang.",
      "Haluskan bawang, tumis sampai harum, orak-arik telur.",
      "Masukkan nasi dan kecap manis, aduk rata.",
      "Masukkan sawi dan ayam, aduk api besar.",
      "Taburi daun bawang, sajikan dengan kerupuk."
    ],
    kcal: 450, protg: 20, tags: ["cepat", "anak_friendly", "klasik"]
  }),
  m({
    id: "nasi-goreng-seafood",
    name: "Nasi Goreng Seafood",
    cat: "one_dish", cui: "chinese_indo", pro: "udang", met: "goreng", rich: 2,
    menit: 25, harga: "agak_mahal",
    bahan: [
      ["beras", "1 piring nasi"], ["udang", "80 gr"], ["cumi", "80 gr"],
      ["telur ayam", "1 butir"], ["bawang putih", "3 siung"], ["saus tiram", "1 sdm"],
      ["sawi hijau", "2 lembar"], ["daun bawang", "1 batang"]
    ],
    langkah: [
      "Tumis bawang putih, masukkan udang dan cumi sampai matang.",
      "Pinggirkan, orak-arik telur.",
      "Masukkan nasi dan saus tiram, aduk rata.",
      "Masukkan sawi hijau, aduk api besar.",
      "Taburi daun bawang, angkat."
    ],
    kcal: 460, protg: 22, tags: ["gurih", "cepat"]
  }),
  m({
    id: "nasi-goreng-kambing-praktis",
    name: "Nasi Goreng Rempah",
    cat: "one_dish", pro: "daging_sapi", met: "goreng", rich: 2, spice: 1, menit: 25,
    harga: "sedang",
    bahan: [
      ["beras", "1 piring nasi"], ["daging giling", "60 gr"], ["bawang bombay", "1/4 buah"],
      ["bawang putih", "2 siung"], ["kecap manis", "1 sdm"], ["kayu manis", "1 batang kecil"],
      ["kapulaga", "2 butir"], ["daun bawang", "1 batang"]
    ],
    langkah: [
      "Tumis bawang putih dan bombay dengan kayu manis dan kapulaga.",
      "Masukkan daging giling, masak sampai matang.",
      "Masukkan nasi dan kecap manis, aduk rata.",
      "Masak api besar sampai nasi wangi rempah.",
      "Taburi daun bawang dan bawang goreng."
    ],
    kcal: 460, protg: 18, tags: ["gurih", "hangat"]
  }),
  m({
    id: "nasi-goreng-terasi",
    name: "Nasi Goreng Terasi Petai",
    cat: "one_dish", pro: "telur", met: "goreng", rich: 2, spice: 2, menit: 20,
    bahan: [
      ["beras", "1 piring nasi"], ["telur ayam", "1 butir"], ["terasi", "1/2 sdt"],
      ["petai", "1/2 papan"], ["cabe merah", "3 buah"], ["bawang merah", "4 butir"],
      ["bawang putih", "2 siung"], ["kecap manis", "1 sdm"]
    ],
    langkah: [
      "Ulek cabe, bawang, dan terasi.",
      "Tumis bumbu dengan petai sampai harum.",
      "Orak-arik telur, masukkan nasi.",
      "Bumbui kecap manis, aduk rata api besar.",
      "Masak sampai wangi terasi, angkat."
    ],
    kcal: 440, protg: 14, tags: ["pedas", "gurih", "ekonomis"]
  }),
  m({
    id: "nasi-goreng-jawa",
    name: "Nasi Goreng Jawa",
    cat: "one_dish", pro: "ayam", met: "goreng", rich: 2, spice: 1, menit: 25,
    harga: "sedang",
    bahan: [
      ["beras", "1 piring nasi"], ["dada ayam", "60 gr"], ["telur ayam", "1 butir"],
      ["cabe merah", "3 buah"], ["bawang merah", "4 butir"], ["kecap manis", "2 sdm"],
      ["kol", "50 gr"], ["tomat", "1/2 buah"]
    ],
    langkah: [
      "Ulek cabe dan bawang, tumis sampai harum.",
      "Masukkan ayam iris, masak sampai matang, orak-arik telur.",
      "Masukkan nasi, kecap manis, dan kol.",
      "Aduk rata api besar sampai bumbu meresap.",
      "Masukkan tomat, aduk sebentar, angkat."
    ],
    kcal: 450, protg: 18, tags: ["pedas", "manis", "klasik"]
  }),
  m({
    id: "nasi-goreng-kecombrang",
    name: "Nasi Goreng Ikan Asin",
    cat: "one_dish", pro: "ikan", met: "goreng", rich: 2, spice: 1, menit: 20,
    bahan: [
      ["beras", "1 piring nasi"], ["ikan asin", "40 gr"], ["telur ayam", "1 butir"],
      ["cabe rawit", "4 buah"], ["bawang merah", "4 butir"], ["bawang putih", "2 siung"],
      ["daun bawang", "1 batang"], ["garam", "secukupnya"]
    ],
    langkah: [
      "Goreng ikan asin, potong kecil.",
      "Ulek cabe dan bawang, tumis sampai harum.",
      "Orak-arik telur, masukkan nasi.",
      "Masukkan ikan asin, aduk rata.",
      "Taburi daun bawang, angkat."
    ],
    kcal: 430, protg: 16, tags: ["pedas", "gurih", "ekonomis", "ikan_asin"]
  }),
  m({
    id: "bubur-ayam",
    name: "Bubur Ayam Komplit",
    cat: "one_dish", pro: "ayam", met: "rebus", rich: 2, kuah: true, menit: 60,
    sulit: "sedang", harga: "sedang",
    bahan: [
      ["beras", "100 gr"], ["dada ayam", "100 gr"], ["daun bawang", "1 batang"],
      ["seledri", "1 batang"], ["kecap asin", "1 sdm"], ["kerupuk", "secukupnya"],
      ["kacang kedelai", "2 sdm"], ["bawang putih", "2 siung"]
    ],
    langkah: [
      "Masak beras dengan banyak air jadi bubur, aduk sesekali.",
      "Rebus ayam, suwir; goreng kacang kedelai sampai garing.",
      "Buat kaldu dari air rebusan ayam dan bawang putih goreng.",
      "Sajikan bubur dengan ayam suwir dan kaldu.",
      "Taburi daun bawang, seledri, kacang, dan kerupuk."
    ],
    kcal: 350, protg: 18, tags: ["berkuah", "hangat", "anak_friendly", "klasik"]
  }),
  m({
    id: "bubur-kacang-hijau",
    name: "Bubur Kacang Hijau",
    cat: "one_dish", pro: "none", met: "rebus", rich: 2, kuah: true, menit: 60,
    sulit: "sedang",
    bahan: [
      ["kacang hijau", "150 gr"], ["santan kelapa", "150 ml"], ["gula merah", "3 sdm"],
      ["daun pandan", "2 lembar"], ["jahe", "2 cm"], ["garam", "sejumput"]
    ],
    langkah: [
      "Rendam kacang hijau, rebus dengan jahe dan pandan sampai empuk.",
      "Masukkan gula merah, masak sampai larut.",
      "Tuang sebagian santan, aduk.",
      "Masak sampai kuah agak kental.",
      "Sajikan dengan santan kental dan sejumput garam."
    ],
    kcal: 320, protg: 12, tags: ["manis", "hangat", "berkuah", "anak_friendly"]
  }),
  m({
    id: "nasi-tim-ayam",
    name: "Nasi Tim Ayam",
    cat: "one_dish", cui: "chinese_indo", pro: "ayam", met: "kukus", rich: 1, menit: 60,
    sulit: "sedang", harga: "sedang",
    bahan: [
      ["beras", "100 gr"], ["dada ayam", "100 gr"], ["jamur kancing", "50 gr"],
      ["bawang putih", "2 siung"], ["kecap asin", "1 sdm"], ["saus tiram", "1/2 sdm"],
      ["daun bawang", "1 batang"], ["jahe", "1 cm"]
    ],
    langkah: [
      "Tumis ayam cincang dan jamur dengan bawang putih dan jahe.",
      "Bumbui kecap asin dan saus tiram.",
      "Tata ayam di dasar mangkuk, tambahkan beras dan air.",
      "Kukus sampai nasi matang lembut.",
      "Balik ke piring, taburi daun bawang."
    ],
    kcal: 340, protg: 20, tags: ["hangat", "anak_friendly", "gurih"]
  }),
  m({
    id: "lontong-sayur",
    name: "Lontong Sayur Labu",
    cat: "one_dish", pro: "telur", met: "santan", rich: 3, santan: true, kuah: true,
    spice: 1, menit: 50, sulit: "sedang",
    bahan: [
      ["lontong", "2 buah"], ["labu siam", "1 buah"], ["santan kelapa", "200 ml"],
      ["telur ayam", "2 butir"], ["cabe merah", "3 buah"], ["bawang merah", "5 butir"],
      ["lengkuas", "2 cm"], ["daun salam", "2 lembar"]
    ],
    langkah: [
      "Iris korek api labu siam.",
      "Haluskan cabe dan bawang, tumis dengan lengkuas dan daun salam.",
      "Tuang santan, masukkan labu siam.",
      "Masak sampai labu empuk dan kuah gurih.",
      "Sajikan lontong dengan sayur labu dan telur rebus."
    ],
    kcal: 380, protg: 14, tags: ["bersantan", "berkuah", "klasik"]
  }),
  m({
    id: "ketoprak",
    name: "Ketoprak",
    cat: "one_dish", pro: "tempe_tahu", met: "rebus", rich: 2, spice: 1, menit: 30,
    bahan: [
      ["lontong", "1 buah"], ["bihun", "50 gr"], ["tahu", "2 buah"], ["tauge", "50 gr"],
      ["kacang tanah", "100 gr"], ["kecap manis", "2 sdm"], ["bawang putih", "2 siung"],
      ["kerupuk", "secukupnya"]
    ],
    langkah: [
      "Goreng tahu, seduh bihun dan tauge.",
      "Ulek kacang goreng, cabe, bawang putih, dan gula merah.",
      "Encerkan bumbu kacang dengan air dan kecap manis.",
      "Tata lontong, bihun, tahu, dan tauge di piring.",
      "Siram bumbu kacang, taburi kerupuk dan bawang goreng."
    ],
    kcal: 400, protg: 16, tags: ["gurih", "klasik", "ekonomis"]
  }),
  // ── Mie / bihun / kwetiau ────────────────────────────────────────────
  m({
    id: "mie-goreng",
    name: "Mie Goreng Jawa",
    cat: "one_dish", pro: "ayam", met: "goreng", rich: 2, menit: 25,
    harga: "sedang",
    bahan: [
      ["mie telur", "1 keping"], ["dada ayam", "60 gr"], ["telur ayam", "1 butir"],
      ["sawi hijau", "2 lembar"], ["kol", "50 gr"], ["bawang putih", "3 siung"],
      ["kecap manis", "2 sdm"], ["saus tiram", "1 sdm"]
    ],
    langkah: [
      "Rebus mie sampai matang, tiriskan.",
      "Tumis bawang putih, masukkan ayam sampai matang.",
      "Orak-arik telur, masukkan sawi dan kol.",
      "Masukkan mie, kecap manis, dan saus tiram.",
      "Aduk rata api besar sampai bumbu meresap."
    ],
    kcal: 430, protg: 18, tags: ["gurih", "anak_friendly", "klasik"]
  }),
  m({
    id: "mie-goreng-seafood",
    name: "Mie Goreng Seafood",
    cat: "one_dish", cui: "chinese_indo", pro: "udang", met: "goreng", rich: 2, menit: 30,
    harga: "agak_mahal",
    bahan: [
      ["mie telur", "1 keping"], ["udang", "70 gr"], ["cumi", "70 gr"], ["telur ayam", "1 butir"],
      ["sawi hijau", "3 lembar"], ["bawang putih", "3 siung"], ["saus tiram", "2 sdm"],
      ["daun bawang", "1 batang"]
    ],
    langkah: [
      "Rebus mie, tiriskan.",
      "Tumis bawang putih, masukkan udang dan cumi.",
      "Orak-arik telur, masukkan sawi.",
      "Masukkan mie dan saus tiram, aduk api besar.",
      "Taburi daun bawang, angkat."
    ],
    kcal: 450, protg: 22, tags: ["gurih", "cepat"]
  }),
  m({
    id: "mie-rebus-jawa",
    name: "Mie Rebus Jawa",
    cat: "one_dish", pro: "ayam", met: "rebus", rich: 2, kuah: true, menit: 30,
    harga: "sedang",
    bahan: [
      ["mie telur", "1 keping"], ["dada ayam", "60 gr"], ["telur ayam", "1 butir"],
      ["sawi hijau", "2 lembar"], ["kol", "50 gr"], ["bawang putih", "3 siung"],
      ["kemiri", "2 butir"], ["tomat", "1/2 buah"]
    ],
    langkah: [
      "Haluskan bawang putih dan kemiri, tumis sampai harum.",
      "Tuang air, masukkan ayam suwir, buat kuah.",
      "Rebus mie dan sayuran.",
      "Masukkan mie ke mangkuk, tuang kuah.",
      "Beri telur rebus dan tomat, taburi bawang goreng."
    ],
    kcal: 400, protg: 18, tags: ["berkuah", "hangat", "klasik"]
  }),
  m({
    id: "mie-ayam",
    name: "Mie Ayam",
    cat: "one_dish", pro: "ayam", met: "rebus", rich: 2, kuah: true, menit: 60,
    sulit: "butuh_niat", harga: "sedang",
    bahan: [
      ["mie telur", "1 keping"], ["dada ayam", "100 gr"], ["sawi hijau", "3 lembar"],
      ["bawang putih", "4 siung"], ["kecap manis", "2 sdm"], ["kecap asin", "1 sdm"],
      ["saus tiram", "1 sdm"], ["daun bawang", "1 batang"]
    ],
    langkah: [
      "Tumis ayam dadu dengan bawang putih, kecap, dan saus tiram sampai meresap.",
      "Rebus mie dan sawi, tiriskan.",
      "Buat minyak ayam dari bawang putih dan kaldu.",
      "Aduk mie dengan minyak ayam dan kecap di mangkuk.",
      "Beri tumisan ayam, sawi, dan kuah kaldu terpisah."
    ],
    kcal: 460, protg: 22, tags: ["gurih", "hangat", "klasik", "anak_friendly"]
  }),
  m({
    id: "bihun-goreng",
    name: "Bihun Goreng",
    cat: "one_dish", pro: "telur", met: "goreng", rich: 2, menit: 25,
    bahan: [
      ["bihun", "100 gr"], ["telur ayam", "1 butir"], ["wortel", "1/2 buah"],
      ["kol", "50 gr"], ["sawi hijau", "2 lembar"], ["bawang putih", "3 siung"],
      ["kecap manis", "2 sdm"], ["daun bawang", "1 batang"]
    ],
    langkah: [
      "Seduh bihun sampai lunak, tiriskan.",
      "Tumis bawang putih, orak-arik telur.",
      "Masukkan wortel, kol, dan sawi.",
      "Masukkan bihun dan kecap manis, aduk rata.",
      "Taburi daun bawang, angkat."
    ],
    kcal: 380, protg: 12, tags: ["gurih", "anak_friendly", "ekonomis"]
  }),
  m({
    id: "kwetiau-goreng",
    name: "Kwetiau Goreng",
    cat: "one_dish", cui: "chinese_indo", pro: "udang", met: "goreng", rich: 2, menit: 25,
    harga: "sedang",
    bahan: [
      ["kwetiau", "150 gr"], ["udang", "60 gr"], ["telur ayam", "1 butir"],
      ["sawi hijau", "3 lembar"], ["tauge", "50 gr"], ["bawang putih", "3 siung"],
      ["kecap manis", "2 sdm"], ["saus tiram", "1 sdm"]
    ],
    langkah: [
      "Tumis bawang putih, masukkan udang sampai matang.",
      "Orak-arik telur di sisi wajan.",
      "Masukkan kwetiau, kecap manis, dan saus tiram.",
      "Masukkan sawi dan tauge, aduk cepat api besar.",
      "Angkat saat sayur masih renyah."
    ],
    kcal: 440, protg: 18, tags: ["gurih", "cepat"]
  }),
  m({
    id: "kwetiau-siram",
    name: "Kwetiau Siram Ayam",
    cat: "one_dish", cui: "chinese_indo", pro: "ayam", met: "tumis", rich: 2, kuah: true,
    menit: 30, harga: "sedang",
    bahan: [
      ["kwetiau", "150 gr"], ["dada ayam", "80 gr"], ["sawi hijau", "3 lembar"],
      ["bawang putih", "3 siung"], ["saus tiram", "2 sdm"], ["tepung maizena", "1 sdm"],
      ["telur ayam", "1 butir"], ["daun bawang", "1 batang"]
    ],
    langkah: [
      "Goreng kwetiau sebentar, tata di piring.",
      "Tumis bawang putih dan ayam sampai matang.",
      "Masukkan sawi, saus tiram, dan air.",
      "Kentalkan dengan maizena, tuang telur kocok.",
      "Siram saus ke atas kwetiau, taburi daun bawang."
    ],
    kcal: 450, protg: 20, tags: ["gurih", "berkuah", "hangat"]
  }),
  m({
    id: "ifumie-siram",
    name: "Ifumie Siram Seafood",
    cat: "one_dish", cui: "chinese_indo", pro: "udang", met: "goreng", rich: 2, kuah: true,
    menit: 35, sulit: "sedang", harga: "agak_mahal",
    bahan: [
      ["mie telur", "1 keping"], ["udang", "60 gr"], ["cumi", "60 gr"], ["sawi hijau", "3 lembar"],
      ["wortel", "1/2 buah"], ["bawang putih", "3 siung"], ["saus tiram", "2 sdm"],
      ["tepung maizena", "1 sdm"]
    ],
    langkah: [
      "Goreng mie sampai garing membentuk sarang, tata di piring.",
      "Tumis bawang putih, masukkan udang dan cumi.",
      "Masukkan wortel dan sawi, tuang air dan saus tiram.",
      "Kentalkan dengan larutan maizena.",
      "Siram saus seafood ke atas ifumie."
    ],
    kcal: 470, protg: 21, tags: ["gurih", "berkuah", "weekend"]
  }),
  m({
    id: "mie-tektek",
    name: "Mie Tek-Tek",
    cat: "one_dish", pro: "ayam", met: "goreng", rich: 2, menit: 25,
    harga: "sedang",
    bahan: [
      ["mie telur", "1 keping"], ["dada ayam", "60 gr"], ["telur ayam", "1 butir"],
      ["kol", "50 gr"], ["sawi hijau", "2 lembar"], ["bawang putih", "3 siung"],
      ["kecap manis", "2 sdm"], ["merica", "1/4 sdt"]
    ],
    langkah: [
      "Rebus mie, tiriskan.",
      "Tumis bawang putih, masukkan ayam iris.",
      "Orak-arik telur, masukkan kol dan sawi.",
      "Masukkan mie, kecap manis, dan merica.",
      "Aduk rata api besar, sajikan panas."
    ],
    kcal: 430, protg: 18, tags: ["gurih", "anak_friendly"]
  }),
  m({
    id: "laksa-praktis",
    name: "Laksa Ayam Praktis",
    cat: "one_dish", pro: "ayam", met: "santan", rich: 3, santan: true, kuah: true,
    spice: 2, menit: 45, sulit: "sedang", harga: "sedang",
    bahan: [
      ["bihun", "100 gr"], ["dada ayam", "100 gr"], ["santan kelapa", "150 ml"],
      ["tauge", "50 gr"], ["kunyit", "2 cm"], ["cabe merah", "3 buah"],
      ["serai", "1 batang"], ["daun jeruk", "2 lembar"]
    ],
    langkah: [
      "Rebus ayam, suwir, simpan kaldu.",
      "Haluskan kunyit dan cabe, tumis dengan serai dan daun jeruk.",
      "Masukkan bumbu ke kaldu, tuang santan.",
      "Seduh bihun dan tauge di mangkuk.",
      "Tuang kuah laksa dan ayam suwir, taburi bawang goreng."
    ],
    kcal: 420, protg: 20, tags: ["berkuah", "bersantan", "pedas", "hangat"]
  }),
  m({
    id: "capcay-goreng-nasi",
    name: "Capcay Goreng Komplit",
    cat: "one_dish", cui: "chinese_indo", pro: "udang", met: "tumis", rich: 2, menit: 30,
    harga: "sedang",
    bahan: [
      ["sawi hijau", "3 lembar"], ["wortel", "1 buah"], ["kembang kol", "50 gr"],
      ["udang", "60 gr"], ["bakso sapi", "4 butir"], ["bawang putih", "3 siung"],
      ["saus tiram", "1 sdm"], ["tepung maizena", "1 sdt"]
    ],
    langkah: [
      "Tumis bawang putih, masukkan udang dan bakso.",
      "Masukkan wortel dan kembang kol, beri sedikit air.",
      "Masukkan sawi dan saus tiram.",
      "Kentalkan dengan maizena.",
      "Sajikan dengan nasi hangat."
    ],
    kcal: 320, protg: 18, tags: ["gurih", "berkuah", "anak_friendly"]
  }),
  // ── Western / pasta ──────────────────────────────────────────────────
  m({
    id: "spaghetti-bolognese",
    name: "Spaghetti Bolognese",
    cat: "one_dish", cui: "western_simple", pro: "daging_sapi", met: "rebus", rich: 2,
    menit: 40, sulit: "sedang", harga: "sedang",
    bahan: [
      ["spaghetti", "150 gr"], ["daging giling", "150 gr"], ["saus tomat", "5 sdm"],
      ["tomat", "2 buah"], ["bawang bombay", "1/2 buah"], ["bawang putih", "3 siung"],
      ["oregano kering", "1/2 sdt"], ["keju parut", "2 sdm"]
    ],
    langkah: [
      "Rebus spaghetti dengan sedikit garam dan minyak sampai al dente.",
      "Tumis bawang putih dan bombay, masukkan daging giling.",
      "Masukkan tomat cincang, saus tomat, dan oregano.",
      "Masak sampai saus mengental, bumbui garam dan merica.",
      "Sajikan saus di atas spaghetti, taburi keju parut."
    ],
    kcal: 480, protg: 22, tags: ["anak_friendly", "gurih"]
  }),
  m({
    id: "spaghetti-aglio-olio",
    name: "Spaghetti Aglio Olio",
    cat: "one_dish", cui: "western_simple", pro: "none", met: "tumis", rich: 2, spice: 2,
    menit: 25, harga: "sedang",
    bahan: [
      ["spaghetti", "150 gr"], ["bawang putih", "5 siung"], ["cabe rawit", "4 buah"],
      ["minyak goreng", "3 sdm"], ["daun bawang", "1 batang"], ["garam", "secukupnya"],
      ["merica", "1/4 sdt"]
    ],
    langkah: [
      "Rebus spaghetti sampai al dente, sisakan sedikit air rebusan.",
      "Iris tipis bawang putih dan cabe rawit.",
      "Tumis bawang putih dengan minyak sampai harum keemasan.",
      "Masukkan cabe, spaghetti, dan sedikit air rebusan.",
      "Bumbui garam dan merica, taburi daun bawang."
    ],
    kcal: 400, protg: 10, tags: ["pedas", "cepat", "gurih"]
  }),
  m({
    id: "spaghetti-carbonara-praktis",
    name: "Spaghetti Carbonara Praktis",
    cat: "one_dish", cui: "western_simple", pro: "telur", met: "tumis", rich: 3, menit: 30,
    sulit: "sedang", harga: "sedang",
    bahan: [
      ["spaghetti", "150 gr"], ["telur ayam", "2 butir"], ["susu cair", "100 ml"],
      ["sosis", "2 buah"], ["bawang putih", "3 siung"], ["keju parut", "3 sdm"],
      ["merica", "1/2 sdt"], ["margarin", "1 sdm"]
    ],
    langkah: [
      "Rebus spaghetti sampai al dente.",
      "Tumis bawang putih dan sosis dengan margarin.",
      "Kocok telur dengan susu, keju, dan merica.",
      "Matikan api, masukkan spaghetti, tuang campuran telur.",
      "Aduk cepat sampai saus creamy tanpa telur menggumpal."
    ],
    kcal: 520, protg: 20, tags: ["gurih", "anak_friendly"]
  }),
  m({
    id: "spaghetti-saus-tuna",
    name: "Spaghetti Saus Tuna",
    cat: "one_dish", cui: "western_simple", pro: "ikan", met: "tumis", rich: 2, menit: 30,
    harga: "sedang",
    bahan: [
      ["spaghetti", "150 gr"], ["tuna kaleng", "1 kaleng"], ["saus tomat", "4 sdm"],
      ["tomat", "1 buah"], ["bawang bombay", "1/2 buah"], ["bawang putih", "3 siung"],
      ["oregano kering", "1/2 sdt"], ["cabe rawit", "3 buah"]
    ],
    langkah: [
      "Rebus spaghetti sampai al dente.",
      "Tumis bawang putih dan bombay sampai harum.",
      "Masukkan tuna, tomat cincang, dan saus tomat.",
      "Bumbui oregano, cabe, garam, dan merica.",
      "Aduk spaghetti dengan saus, sajikan."
    ],
    kcal: 460, protg: 22, tags: ["gurih", "praktis"]
  }),
  m({
    id: "makaroni-schotel",
    name: "Makaroni Schotel Panggang",
    cat: "one_dish", cui: "western_simple", pro: "telur", met: "panggang", rich: 3,
    menit: 60, sulit: "butuh_niat", harga: "sedang",
    bahan: [
      ["makaroni", "150 gr"], ["telur ayam", "2 butir"], ["susu cair", "200 ml"],
      ["sosis", "3 buah"], ["keju parut", "4 sdm"], ["bawang bombay", "1/2 buah"],
      ["margarin", "1 sdm"], ["merica", "1/2 sdt"]
    ],
    langkah: [
      "Rebus makaroni sampai empuk, tiriskan.",
      "Tumis bombay dan sosis dengan margarin.",
      "Kocok telur, susu, keju, garam, dan merica.",
      "Campur makaroni, tumisan, dan adonan telur di pinggan.",
      "Panggang atau kukus sampai set, taburi keju, panggang sampai keemasan."
    ],
    kcal: 500, protg: 20, tags: ["gurih", "anak_friendly", "weekend"]
  }),
  m({
    id: "macaroni-brulee-kuah",
    name: "Makaroni Kuah Susu",
    cat: "one_dish", cui: "western_simple", pro: "ayam", met: "rebus", rich: 2, kuah: true,
    menit: 30, harga: "sedang",
    bahan: [
      ["makaroni", "100 gr"], ["dada ayam", "80 gr"], ["susu cair", "150 ml"],
      ["wortel", "1/2 buah"], ["bawang bombay", "1/4 buah"], ["bawang putih", "2 siung"],
      ["keju parut", "2 sdm"], ["merica", "1/4 sdt"]
    ],
    langkah: [
      "Rebus makaroni sampai empuk, tiriskan.",
      "Tumis bawang putih, bombay, dan ayam.",
      "Masukkan wortel, tuang susu dan sedikit air.",
      "Masukkan makaroni dan keju, masak sampai creamy.",
      "Bumbui merica dan garam, angkat."
    ],
    kcal: 420, protg: 20, tags: ["berkuah", "anak_friendly", "gurih"]
  }),
  m({
    id: "fusilli-tumis-sosis",
    name: "Fusilli Tumis Sosis",
    cat: "one_dish", cui: "western_simple", pro: "none", met: "tumis", rich: 2, menit: 25,
    harga: "sedang",
    bahan: [
      ["fusilli", "150 gr"], ["sosis", "3 buah"], ["saus tomat", "4 sdm"],
      ["paprika", "1/2 buah"], ["bawang bombay", "1/2 buah"], ["bawang putih", "3 siung"],
      ["oregano kering", "1/2 sdt"], ["keju parut", "2 sdm"]
    ],
    langkah: [
      "Rebus fusilli sampai al dente.",
      "Tumis bawang putih, bombay, dan sosis iris.",
      "Masukkan paprika dan saus tomat.",
      "Masukkan fusilli dan oregano, aduk rata.",
      "Taburi keju parut, sajikan."
    ],
    kcal: 460, protg: 15, tags: ["gurih", "anak_friendly"]
  }),
  m({
    id: "nasi-goreng-keju-sosis",
    name: "Nasi Goreng Sosis Keju",
    cat: "one_dish", cui: "western_simple", pro: "none", met: "goreng", rich: 2, menit: 20,
    harga: "sedang",
    bahan: [
      ["beras", "1 piring nasi"], ["sosis", "2 buah"], ["telur ayam", "1 butir"],
      ["keju parut", "2 sdm"], ["bawang bombay", "1/4 buah"], ["bawang putih", "2 siung"],
      ["saus tomat", "2 sdm"], ["daun bawang", "1 batang"]
    ],
    langkah: [
      "Tumis bawang putih dan bombay, masukkan sosis iris.",
      "Orak-arik telur, masukkan nasi.",
      "Bumbui saus tomat dan garam.",
      "Masukkan keju parut, aduk rata.",
      "Taburi daun bawang, sajikan."
    ],
    kcal: 470, protg: 16, tags: ["gurih", "anak_friendly"]
  }),
  m({
    id: "roti-bakar-telur",
    name: "Roti Bakar Telur Sosis",
    cat: "one_dish", cui: "western_simple", pro: "telur", met: "panggang", rich: 2,
    menit: 15, harga: "sedang",
    bahan: [
      ["roti tawar", "4 lembar"], ["telur ayam", "2 butir"], ["sosis", "2 buah"],
      ["margarin", "2 sdm"], ["keju parut", "2 sdm"], ["saus tomat", "2 sdm"],
      ["merica", "1/4 sdt"]
    ],
    langkah: [
      "Buat telur dadar tipis dan goreng sosis iris.",
      "Olesi roti dengan margarin.",
      "Isi roti dengan telur, sosis, dan keju.",
      "Panggang di teflon sampai keemasan kedua sisi.",
      "Sajikan dengan saus tomat."
    ],
    kcal: 420, protg: 16, tags: ["cepat", "anak_friendly", "gurih"]
  }),
  m({
    id: "nasi-uduk-praktis-one",
    name: "Nasi Kuning Rice Cooker",
    cat: "one_dish", pro: "telur", met: "santan", rich: 2, santan: true, menit: 45,
    sulit: "sedang",
    bahan: [
      ["beras", "200 gr"], ["santan instan", "100 ml"], ["kunyit", "3 cm"],
      ["serai", "1 batang"], ["daun salam", "2 lembar"], ["daun jeruk", "2 lembar"],
      ["telur ayam", "2 butir"], ["bawang goreng", "2 sdm"]
    ],
    langkah: [
      "Cuci beras, beri air perasan kunyit dan santan encer.",
      "Tambahkan serai, daun salam, dan daun jeruk.",
      "Masak di rice cooker sampai matang.",
      "Aduk nasi, buang serai dan daun.",
      "Sajikan dengan telur dadar iris dan bawang goreng."
    ],
    kcal: 400, protg: 12, tags: ["bersantan", "hangat", "anak_friendly"]
  }),
  m({
    id: "gado-gado-lontong",
    name: "Pecel Lontong",
    cat: "one_dish", pro: "tempe_tahu", met: "rebus", rich: 2, spice: 2, menit: 35,
    sulit: "sedang",
    bahan: [
      ["lontong", "2 buah"], ["kangkung", "1/2 ikat"], ["tauge", "50 gr"],
      ["tempe", "1/2 papan"], ["kacang tanah", "100 gr"], ["cabe rawit", "4 buah"],
      ["kencur", "1 cm"], ["gula merah", "1 sdm"]
    ],
    langkah: [
      "Rebus kangkung dan tauge; goreng tempe.",
      "Goreng kacang, ulek dengan cabe, kencur, dan gula merah.",
      "Encerkan bumbu pecel dengan air hangat.",
      "Tata lontong, sayuran, dan tempe di piring.",
      "Siram bumbu pecel, taburi kerupuk."
    ],
    kcal: 420, protg: 16, tags: ["pedas", "klasik", "ekonomis", "urap_lalap"]
  }),
  m({
    id: "nasi-liwet-magic-com",
    name: "Nasi Liwet Rice Cooker Teri",
    cat: "one_dish", pro: "ikan", met: "rebus", rich: 2, menit: 45, sulit: "sedang",
    bahan: [
      ["beras", "200 gr"], ["ikan teri", "40 gr"], ["bawang merah", "4 butir"],
      ["bawang putih", "3 siung"], ["serai", "1 batang"], ["daun salam", "2 lembar"],
      ["cabe rawit", "5 buah"], ["petai", "1/2 papan"]
    ],
    langkah: [
      "Tumis bawang, cabe, petai, dan teri sampai harum.",
      "Cuci beras, campur dengan tumisan di rice cooker.",
      "Tambahkan serai, daun salam, dan air secukupnya.",
      "Masak sampai matang.",
      "Aduk rata, sajikan dengan lalapan."
    ],
    kcal: 420, protg: 14, tags: ["gurih", "hangat", "ekonomis"]
  }),
  m({
    id: "bihun-kuah-bakso",
    name: "Bihun Kuah Bakso",
    cat: "one_dish", pro: "daging_sapi", met: "rebus", rich: 1, kuah: true, menit: 25,
    harga: "sedang",
    bahan: [
      ["bihun", "100 gr"], ["bakso sapi", "6 butir"], ["sawi hijau", "2 lembar"],
      ["tauge", "50 gr"], ["bawang putih", "3 siung"], ["daun bawang", "1 batang"],
      ["seledri", "1 batang"], ["merica", "1/4 sdt"]
    ],
    langkah: [
      "Buat kaldu dari bawang putih goreng dan air.",
      "Bumbui merica, garam, dan kaldu bubuk.",
      "Masukkan bakso, masak sampai mengapung.",
      "Seduh bihun, tauge, dan sawi di mangkuk.",
      "Tuang kuah bakso, taburi daun bawang dan seledri."
    ],
    kcal: 340, protg: 16, tags: ["berkuah", "hangat", "anak_friendly", "praktis"]
  }),
  m({
    id: "soun-goreng",
    name: "Soun Goreng Ayam",
    cat: "one_dish", pro: "ayam", met: "goreng", rich: 2, menit: 25,
    harga: "sedang",
    bahan: [
      ["soun", "100 gr"], ["dada ayam", "60 gr"], ["telur ayam", "1 butir"],
      ["wortel", "1/2 buah"], ["kol", "50 gr"], ["bawang putih", "3 siung"],
      ["kecap manis", "2 sdm"], ["daun bawang", "1 batang"]
    ],
    langkah: [
      "Seduh soun sampai lunak, tiriskan.",
      "Tumis bawang putih dan ayam iris.",
      "Orak-arik telur, masukkan wortel dan kol.",
      "Masukkan soun dan kecap manis, aduk rata.",
      "Taburi daun bawang, angkat."
    ],
    kcal: 380, protg: 16, tags: ["gurih", "anak_friendly", "ekonomis"]
  }),
  m({
    id: "nasi-goreng-cabe-garam",
    name: "Nasi Goreng Cabe Garam Telur Asin",
    cat: "one_dish", cui: "chinese_indo", pro: "telur", met: "goreng", rich: 2, spice: 1,
    menit: 20, harga: "sedang",
    bahan: [
      ["beras", "1 piring nasi"], ["telur asin", "1 butir"], ["telur ayam", "1 butir"],
      ["bawang putih", "3 siung"], ["cabe rawit", "3 buah"], ["daun bawang", "1 batang"],
      ["kaldu bubuk", "1/2 sdt"], ["merica", "1/4 sdt"]
    ],
    langkah: [
      "Kukus dan haluskan telur asin.",
      "Tumis bawang putih dan cabe, orak-arik telur ayam.",
      "Masukkan nasi dan telur asin halus.",
      "Bumbui kaldu dan merica, aduk rata api besar.",
      "Taburi daun bawang, angkat."
    ],
    kcal: 440, protg: 15, tags: ["gurih", "cepat"]
  }),
  m({
    id: "kwetiau-kuah",
    name: "Kwetiau Kuah Ayam",
    cat: "one_dish", cui: "chinese_indo", pro: "ayam", met: "rebus", rich: 1, kuah: true,
    menit: 30, harga: "sedang",
    bahan: [
      ["kwetiau", "150 gr"], ["dada ayam", "80 gr"], ["sawi hijau", "3 lembar"],
      ["tauge", "50 gr"], ["bawang putih", "3 siung"], ["daun bawang", "1 batang"],
      ["merica", "1/4 sdt"], ["kaldu bubuk", "1/2 sdt"]
    ],
    langkah: [
      "Rebus ayam, suwir, simpan kaldu.",
      "Goreng bawang putih halus, masukkan ke kaldu.",
      "Bumbui merica, garam, dan kaldu.",
      "Seduh kwetiau, tauge, dan sawi di mangkuk.",
      "Tuang kuah dan ayam suwir, taburi daun bawang."
    ],
    kcal: 400, protg: 18, tags: ["berkuah", "hangat", "anak_friendly"]
  }),
  m({
    id: "bakmi-jawa-godog",
    name: "Bakmi Godog Jawa",
    cat: "one_dish", pro: "ayam", met: "rebus", rich: 2, kuah: true, menit: 30,
    sulit: "sedang", harga: "sedang",
    bahan: [
      ["mie basah", "150 gr"], ["dada ayam", "60 gr"], ["telur ayam", "1 butir"],
      ["sawi hijau", "2 lembar"], ["kol", "50 gr"], ["bawang putih", "3 siung"],
      ["kemiri", "2 butir"], ["daun bawang", "1 batang"]
    ],
    langkah: [
      "Haluskan bawang putih dan kemiri, tumis sampai harum.",
      "Masukkan ayam suwir, tuang air jadi kuah.",
      "Kocok telur, masukkan ke kuah membentuk serabut.",
      "Masukkan mie, sawi, dan kol.",
      "Masak sampai mie empuk, taburi daun bawang."
    ],
    kcal: 420, protg: 18, tags: ["berkuah", "hangat", "klasik"]
  }),
  m({
    id: "omurice-praktis",
    name: "Nasi Goreng Omelet (Omurice)",
    cat: "one_dish", cui: "western_simple", pro: "telur", met: "goreng", rich: 2, menit: 25,
    harga: "sedang",
    bahan: [
      ["beras", "1 piring nasi"], ["telur ayam", "2 butir"], ["dada ayam", "50 gr"],
      ["wortel", "1/2 buah"], ["saus tomat", "3 sdm"], ["bawang bombay", "1/4 buah"],
      ["bawang putih", "2 siung"], ["margarin", "1 sdm"]
    ],
    langkah: [
      "Tumis bawang, ayam, dan wortel; masukkan nasi dan saus tomat.",
      "Aduk rata jadi nasi goreng merah, sisihkan.",
      "Buat telur dadar tipis lebar dengan margarin.",
      "Taruh nasi goreng di atas dadar, lipat menyelimuti.",
      "Beri hiasan saus tomat di atasnya."
    ],
    kcal: 460, protg: 18, tags: ["anak_friendly", "gurih"]
  }),
  m({
    id: "mie-nyemek",
    name: "Mie Nyemek Telur",
    cat: "one_dish", pro: "telur", met: "rebus", rich: 2, kuah: true, spice: 2, menit: 20,
    bahan: [
      ["mie telur", "1 keping"], ["telur ayam", "1 butir"], ["sawi hijau", "2 lembar"],
      ["cabe rawit", "5 buah"], ["bawang merah", "3 butir"], ["bawang putih", "2 siung"],
      ["kecap manis", "1 sdm"], ["tomat", "1/2 buah"]
    ],
    langkah: [
      "Tumis bawang dan cabe sampai harum.",
      "Tuang air, masukkan mie dan sawi.",
      "Masukkan telur, aduk membentuk serabut.",
      "Bumbui kecap manis dan garam.",
      "Masak sampai kuah menyusut setengah (nyemek), angkat."
    ],
    kcal: 380, protg: 14, tags: ["pedas", "berkuah", "hangat", "ekonomis"]
  }),
  m({
    id: "nasi-bakar-teri",
    name: "Nasi Bakar Teri Kemangi",
    cat: "one_dish", pro: "ikan", met: "bakar", rich: 2, spice: 2, menit: 40,
    sulit: "sedang",
    bahan: [
      ["beras", "1 piring nasi"], ["ikan teri", "40 gr"], ["kemangi", "1 genggam"],
      ["cabe rawit", "5 buah"], ["bawang merah", "4 butir"], ["bawang putih", "2 siung"],
      ["daun salam", "1 lembar"], ["daun pisang", "untuk membungkus"]
    ],
    langkah: [
      "Goreng teri; ulek cabe dan bawang, tumis jadi bumbu.",
      "Aduk nasi dengan bumbu, teri, dan kemangi.",
      "Bungkus nasi dengan daun pisang.",
      "Bakar bungkusan di teflon sampai daun harum kecokelatan.",
      "Sajikan hangat dari bungkusnya."
    ],
    kcal: 420, protg: 14, tags: ["pedas", "gurih", "ekonomis"]
  }),
  m({
    id: "sandwich-telur-praktis",
    name: "Sandwich Telur Sayur",
    cat: "one_dish", cui: "western_simple", pro: "telur", met: "goreng", rich: 2, menit: 15,
    harga: "sedang",
    bahan: [
      ["roti tawar", "4 lembar"], ["telur ayam", "2 butir"], ["selada", "4 lembar"],
      ["timun", "1/2 buah"], ["tomat", "1 buah"], ["margarin", "1 sdm"],
      ["saus tomat", "2 sdm"], ["merica", "1/4 sdt"]
    ],
    langkah: [
      "Buat telur dadar bumbui garam dan merica.",
      "Olesi roti dengan margarin dan saus.",
      "Susun telur, selada, timun, dan tomat.",
      "Tutup dengan roti, tekan perlahan.",
      "Potong diagonal, sajikan."
    ],
    kcal: 360, protg: 14, tags: ["cepat", "anak_friendly", "seger"]
  })
];
