import type { Menu } from "../types";
import { m } from "../menuHelpers";

/**
 * Nasi spesial — nasi berbumbu jadi anchor tema. WAJIB pairTags >= 2.
 * pairTags = arketipe pendamping yang cocok (dipasangkan dengan tags menu lauk/sayur).
 * Baca TAGGING.md.
 */
export const NASI_SPESIAL: Menu[] = [
  m({
    id: "nasi-uduk",
    name: "Nasi Uduk",
    cat: "nasi_spesial", pro: "none", met: "rebus", rich: 2, santan: true, menit: 45,
    sulit: "sedang",
    bahan: [
      ["beras", "200 gr"], ["santan kelapa", "150 ml"], ["serai", "1 batang"],
      ["daun salam", "2 lembar"], ["daun jeruk", "2 lembar"], ["bawang merah", "3 butir"],
      ["garam", "secukupnya"]
    ],
    langkah: [
      "Cuci beras, tiriskan.",
      "Rebus santan dengan serai, daun salam, daun jeruk, dan garam.",
      "Aron beras dengan santan sampai terserap.",
      "Kukus nasi sampai matang dan pulen.",
      "Sajikan dengan taburan bawang goreng."
    ],
    kcal: 380, protg: 7, tags: ["bersantan", "gurih", "klasik", "weekend"],
    pair: ["ayam_goreng", "orek_tempe", "sambal", "teri_kacang", "lauk_telur", "urap_lalap"]
  }),
  m({
    id: "nasi-liwet-sunda",
    name: "Nasi Liwet Sunda",
    cat: "nasi_spesial", pro: "ikan", met: "rebus", rich: 2, menit: 50, sulit: "sedang",
    bahan: [
      ["beras", "200 gr"], ["ikan teri", "40 gr"], ["serai", "1 batang"],
      ["daun salam", "2 lembar"], ["lengkuas", "2 cm"], ["bawang merah", "4 butir"],
      ["cabe rawit", "5 buah"], ["petai", "1/2 papan"]
    ],
    langkah: [
      "Tumis bawang, cabe, dan teri sampai harum.",
      "Cuci beras, campur dengan tumisan di panci atau rice cooker.",
      "Tambahkan serai, daun salam, lengkuas, dan air.",
      "Masak sampai nasi matang dan wangi.",
      "Sajikan hangat dengan lalapan dan sambal."
    ],
    kcal: 400, protg: 12, tags: ["gurih", "klasik", "weekend"],
    pair: ["tahu_tempe", "sayur_asem", "sambal", "ikan_asin", "urap_lalap", "ayam_goreng"]
  }),
  m({
    id: "nasi-kuning",
    name: "Nasi Kuning",
    cat: "nasi_spesial", pro: "none", met: "rebus", rich: 2, santan: true, menit: 50,
    sulit: "sedang",
    bahan: [
      ["beras", "200 gr"], ["santan kelapa", "150 ml"], ["kunyit", "3 cm"],
      ["serai", "1 batang"], ["daun salam", "2 lembar"], ["daun jeruk", "2 lembar"],
      ["daun pandan", "1 lembar"], ["garam", "secukupnya"]
    ],
    langkah: [
      "Peras kunyit dengan sedikit air, campur ke santan.",
      "Aron beras dengan santan kunyit, serai, dan daun-daun.",
      "Masak sampai santan terserap.",
      "Kukus sampai matang dan pulen.",
      "Sajikan dengan aneka lauk untuk tumpeng."
    ],
    kcal: 390, protg: 7, tags: ["bersantan", "gurih", "klasik", "weekend"],
    pair: ["ayam_goreng", "orek_tempe", "lauk_telur", "serundeng", "sambal_goreng_kentang", "urap_lalap"]
  }),
  m({
    id: "nasi-hainam",
    name: "Nasi Hainam",
    cat: "nasi_spesial", cui: "chinese_indo", pro: "none", met: "rebus", rich: 2, menit: 45,
    sulit: "sedang",
    bahan: [
      ["beras", "200 gr"], ["jahe", "3 cm"], ["bawang putih", "4 siung"],
      ["daun bawang", "1 batang"], ["margarin", "1 sdm"], ["minyak wijen", "1/2 sdt"],
      ["kaldu bubuk", "1/2 sdt"], ["garam", "secukupnya"]
    ],
    langkah: [
      "Tumis jahe dan bawang putih cincang dengan margarin sampai harum.",
      "Masukkan beras, aduk sebentar.",
      "Pindahkan ke rice cooker, beri air kaldu dan minyak wijen.",
      "Masak sampai matang dan harum.",
      "Aduk, taburi daun bawang, sajikan."
    ],
    kcal: 400, protg: 7, tags: ["gurih", "hangat", "weekend"],
    pair: ["ayam_rebus", "ayam_bakar", "tumis_hijau", "sup_bening", "acar"]
  }),
  m({
    id: "nasi-bakar-komplit",
    name: "Nasi Bakar Ayam Kemangi",
    cat: "nasi_spesial", pro: "ayam", met: "bakar", rich: 2, spice: 2, menit: 55,
    sulit: "sedang", harga: "sedang",
    bahan: [
      ["beras", "200 gr"], ["dada ayam", "80 gr"], ["kemangi", "1 genggam"],
      ["cabe rawit", "6 buah"], ["bawang merah", "4 butir"], ["bawang putih", "2 siung"],
      ["daun salam", "1 lembar"], ["daun pisang", "untuk membungkus"]
    ],
    langkah: [
      "Tumis bumbu halus, masukkan ayam suwir, masak sampai matang.",
      "Aduk nasi dengan tumisan ayam dan kemangi.",
      "Bungkus nasi dengan daun pisang, semat lidi.",
      "Bakar bungkusan di teflon sampai daun harum.",
      "Sajikan hangat."
    ],
    kcal: 420, protg: 16, tags: ["pedas", "gurih", "weekend"],
    pair: ["ayam_goreng", "tahu_tempe", "sambal", "urap_lalap", "lauk_telur"]
  }),
  m({
    id: "nasi-ulam",
    name: "Nasi Ulam Betawi",
    cat: "nasi_spesial", pro: "none", met: "rebus", rich: 2, spice: 1, menit: 45,
    sulit: "sedang",
    bahan: [
      ["beras", "200 gr"], ["kelapa parut", "80 gr"], ["kemangi", "1 genggam"],
      ["kacang tanah", "2 sdm"], ["bawang merah", "4 butir"], ["cabe merah", "2 buah"],
      ["daun jeruk", "2 lembar"], ["garam", "secukupnya"]
    ],
    langkah: [
      "Sangrai kelapa parut dengan bumbu halus jadi serundeng.",
      "Masak nasi putih pulen seperti biasa.",
      "Aduk nasi hangat dengan serundeng dan kemangi.",
      "Tambahkan kacang goreng tumbuk.",
      "Sajikan dengan lauk pelengkap."
    ],
    kcal: 410, protg: 9, tags: ["gurih", "seger", "klasik", "weekend"],
    pair: ["lauk_telur", "tahu_tempe", "sambal", "ikan_asin", "urap_lalap"]
  }),
  m({
    id: "nasi-goreng-liwet-anchor",
    name: "Nasi Kebuli Praktis",
    cat: "nasi_spesial", pro: "daging_sapi", met: "santan", rich: 3, santan: true,
    spice: 1, menit: 70, sulit: "butuh_niat", harga: "agak_mahal",
    bahan: [
      ["beras", "200 gr"], ["daging sapi", "100 gr"], ["santan instan", "100 ml"],
      ["bawang bombay", "1/2 buah"], ["jahe", "2 cm"], ["kayu manis", "1 batang kecil"],
      ["kapulaga", "3 butir"], ["cengkeh", "3 butir"]
    ],
    langkah: [
      "Tumis bombay dan jahe dengan rempah sampai harum.",
      "Masukkan daging, masak sampai berubah warna.",
      "Masukkan beras, aduk, tuang kaldu dan santan.",
      "Masak sampai air terserap, lalu kukus sampai pulen.",
      "Sajikan dengan acar dan emping."
    ],
    kcal: 460, protg: 16, tags: ["bersantan", "gurih", "hangat", "weekend"],
    pair: ["acar", "ayam_goreng", "sambal", "lauk_telur", "urap_lalap"]
  }),
  m({
    id: "nasi-lengko",
    name: "Nasi Lengko Cirebon",
    cat: "nasi_spesial", pro: "tempe_tahu", met: "rebus", rich: 2, spice: 1, menit: 30,
    bahan: [
      ["beras", "1 piring nasi"], ["tempe", "1/2 papan"], ["tahu", "2 buah"],
      ["tauge", "50 gr"], ["timun", "1/2 buah"], ["kacang tanah", "80 gr"],
      ["kecap manis", "2 sdm"], ["daun kucai", "secukupnya"]
    ],
    langkah: [
      "Goreng tempe dan tahu, potong dadu.",
      "Rebus tauge sebentar, iris timun.",
      "Ulek kacang goreng jadi bumbu, encerkan dengan air.",
      "Tata nasi dengan tempe, tahu, tauge, dan timun.",
      "Siram bumbu kacang dan kecap manis, taburi kucai dan bawang goreng."
    ],
    kcal: 430, protg: 17, tags: ["gurih", "seger", "ekonomis", "klasik"],
    pair: ["sambal", "kerupuk", "tahu_tempe", "urap_lalap"]
  }),
  m({
    id: "nasi-tutug-oncom",
    name: "Nasi Tutug Oncom",
    cat: "nasi_spesial", pro: "tempe_tahu", met: "rebus", rich: 2, spice: 2, menit: 35,
    bahan: [
      ["beras", "1 piring nasi"], ["oncom", "100 gr"], ["cabe rawit", "5 buah"],
      ["kencur", "1 cm"], ["bawang merah", "4 butir"], ["bawang putih", "2 siung"],
      ["daun kemangi", "1 genggam"], ["garam", "secukupnya"]
    ],
    langkah: [
      "Bakar atau goreng oncom, hancurkan.",
      "Ulek cabe, kencur, dan bawang, tumis dengan oncom.",
      "Aduk nasi hangat dengan oncom berbumbu sampai rata.",
      "Tambahkan kemangi iris.",
      "Sajikan dengan lalapan dan sambal."
    ],
    kcal: 400, protg: 13, tags: ["pedas", "gurih", "ekonomis", "klasik"],
    pair: ["ayam_goreng", "ikan_asin", "sambal", "urap_lalap", "tahu_tempe"]
  }),
  m({
    id: "nasi-liwet-teri-anchor",
    name: "Nasi Liwet Teri Cabe",
    cat: "nasi_spesial", pro: "ikan", met: "rebus", rich: 2, spice: 2, menit: 50,
    sulit: "sedang",
    bahan: [
      ["beras", "200 gr"], ["ikan teri", "50 gr"], ["cabe rawit", "6 buah"],
      ["bawang merah", "5 butir"], ["bawang putih", "3 siung"], ["serai", "1 batang"],
      ["daun salam", "2 lembar"], ["daun jeruk", "2 lembar"]
    ],
    langkah: [
      "Tumis bawang, cabe, dan teri sampai harum.",
      "Campur beras dengan tumisan di rice cooker.",
      "Tambahkan serai, daun salam, daun jeruk, dan air.",
      "Masak sampai matang dan wangi.",
      "Aduk, sajikan dengan lalapan."
    ],
    kcal: 400, protg: 13, tags: ["pedas", "gurih", "ekonomis", "weekend"],
    pair: ["tahu_tempe", "sayur_asem", "sambal", "urap_lalap", "lauk_telur"]
  }),
  m({
    id: "nasi-jamblang-praktis",
    name: "Nasi Jagung Komplit",
    cat: "nasi_spesial", pro: "none", met: "kukus", rich: 1, menit: 40, sulit: "sedang",
    bahan: [
      ["beras", "150 gr"], ["jagung manis", "2 buah"], ["daun salam", "1 lembar"],
      ["serai", "1 batang"], ["garam", "secukupnya"], ["bawang merah", "3 butir"]
    ],
    langkah: [
      "Serut jagung manis halus.",
      "Campur beras dengan jagung serut.",
      "Aron dengan air, serai, dan daun salam.",
      "Kukus sampai matang dan pulen.",
      "Sajikan dengan lauk dan sayur sederhana."
    ],
    kcal: 340, protg: 8, tags: ["gurih", "ekonomis", "klasik"],
    pair: ["ikan_asin", "sambal", "tahu_tempe", "urap_lalap", "lauk_telur"]
  }),
  m({
    id: "nasi-goreng-kunyit-anchor",
    name: "Nasi Samin Rempah",
    cat: "nasi_spesial", pro: "ayam", met: "rebus", rich: 2, menit: 55, sulit: "butuh_niat",
    harga: "sedang",
    bahan: [
      ["beras", "200 gr"], ["dada ayam", "80 gr"], ["bawang bombay", "1/2 buah"],
      ["jahe", "2 cm"], ["kayu manis", "1 batang kecil"], ["cengkeh", "3 butir"],
      ["margarin", "2 sdm"], ["kaldu bubuk", "1/2 sdt"]
    ],
    langkah: [
      "Tumis bombay dan jahe dengan margarin dan rempah.",
      "Masukkan ayam, masak sampai matang.",
      "Masukkan beras, aduk sampai berlapis minyak rempah.",
      "Pindah ke rice cooker, beri air kaldu, masak matang.",
      "Aduk, sajikan dengan acar."
    ],
    kcal: 440, protg: 15, tags: ["gurih", "hangat", "weekend"],
    pair: ["acar", "ayam_bakar", "sambal", "sup_bening", "urap_lalap"]
  })
];
