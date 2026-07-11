import type { Menu } from "../types";
import { m } from "../menuHelpers";

/**
 * Chinese-Indonesian tambahan — mayoritas pasar-sourceable (pakai kecap asin,
 * tauco, ebi, kaldu; bukan saus tiram) biar mix cuisine naik tanpa jebol batas
 * supermarket. Baca TAGGING.md.
 */
export const CHINESE_TAMBAHAN: Menu[] = [
  m({
    id: "cah-tauge-ikan-asin-cabe",
    name: "Cah Tauge Ikan Asin",
    cat: "sayur", cui: "chinese_indo", pro: "none", met: "tumis", rich: 1, spice: 1,
    menit: 15,
    bahan: [
      ["tauge", "150 gr"], ["ikan asin", "30 gr"], ["daun kucai", "5 batang"],
      ["bawang putih", "3 siung"], ["cabe merah", "2 buah"], ["kecap asin", "1/2 sdm"],
      ["garam", "secukupnya"]
    ],
    langkah: [
      "Goreng ikan asin, potong kecil.",
      "Tumis bawang putih dan cabe sampai harum.",
      "Masukkan ikan asin, aduk sebentar.",
      "Masukkan tauge dan kucai, aduk cepat api besar.",
      "Bumbui kecap asin, angkat saat masih renyah."
    ],
    kcal: 120, protg: 7, tags: ["cepat", "gurih", "ekonomis"]
  }),
  m({
    id: "telur-bumbu-tauco",
    name: "Telur Cah Tauco",
    cat: "lauk_utama", cui: "chinese_indo", pro: "telur", met: "tumis", rich: 2, menit: 20,
    bahan: [
      ["telur ayam", "3 butir"], ["tauco", "1 sdm"], ["cabe merah", "2 buah"],
      ["bawang putih", "3 siung"], ["bawang merah", "3 butir"], ["daun bawang", "1 batang"],
      ["gula pasir", "1/2 sdt"]
    ],
    langkah: [
      "Buat telur orak-arik setengah matang, sisihkan.",
      "Tumis bawang putih, bawang merah, dan cabe sampai harum.",
      "Masukkan tauco, aduk, beri sedikit gula.",
      "Masukkan telur, aduk rata dengan bumbu.",
      "Taburi daun bawang, angkat."
    ],
    kcal: 220, protg: 14, tags: ["gurih", "ekonomis", "lauk_telur"]
  }),
  m({
    id: "tumis-buncis-tauco",
    name: "Tumis Buncis Tauco",
    cat: "sayur", cui: "chinese_indo", pro: "none", met: "tumis", rich: 1, menit: 18,
    bahan: [
      ["buncis", "150 gr"], ["tauco", "1 sdm"], ["daging giling", "50 gr"],
      ["bawang putih", "3 siung"], ["cabe merah", "2 buah"], ["daun bawang", "1 batang"],
      ["gula pasir", "1/2 sdt"]
    ],
    langkah: [
      "Potong buncis serong.",
      "Tumis bawang putih dan cabe, masukkan daging giling.",
      "Masukkan tauco dan gula, aduk.",
      "Masukkan buncis, beri sedikit air, masak sampai matang.",
      "Taburi daun bawang, angkat."
    ],
    kcal: 160, protg: 10, tags: ["gurih", "ekonomis"]
  }),
  m({
    id: "cah-labu-siam-ebi",
    name: "Cah Labu Siam Ebi",
    cat: "sayur", cui: "chinese_indo", pro: "none", met: "tumis", rich: 1, menit: 18,
    bahan: [
      ["labu siam", "1 buah"], ["ebi", "1 sdm"], ["bawang putih", "3 siung"],
      ["cabe merah", "2 buah"], ["daun bawang", "1 batang"], ["kaldu bubuk", "1/2 sdt"],
      ["garam", "secukupnya"]
    ],
    langkah: [
      "Iris korek api labu siam, remas garam, bilas.",
      "Rendam ebi, tumbuk kasar.",
      "Tumis bawang putih, cabe, dan ebi sampai harum.",
      "Masukkan labu siam, beri sedikit air.",
      "Bumbui kaldu dan garam, masak sampai empuk, taburi daun bawang."
    ],
    kcal: 90, protg: 4, tags: ["gurih", "ekonomis", "cepat"]
  }),
  m({
    id: "ayam-kung-pao-sederhana",
    name: "Ayam Kung Pao Sederhana",
    cat: "lauk_utama", cui: "chinese_indo", pro: "ayam", met: "tumis", rich: 2, spice: 2,
    menit: 30, harga: "sedang",
    bahan: [
      ["dada ayam", "150 gr"], ["kacang tanah", "3 sdm"], ["cabe merah", "4 buah"],
      ["bawang putih", "3 siung"], ["kecap manis", "1 sdm"], ["kecap asin", "1 sdt"],
      ["jahe", "1 cm"], ["daun bawang", "1 batang"]
    ],
    langkah: [
      "Potong dadu ayam, lumuri sedikit maizena.",
      "Goreng kacang tanah, sisihkan.",
      "Tumis bawang putih, jahe, dan cabe sampai harum.",
      "Masukkan ayam, masak sampai matang, bumbui kecap.",
      "Masukkan kacang dan daun bawang, aduk, angkat."
    ],
    kcal: 340, protg: 26, tags: ["pedas", "gurih"]
  }),
  m({
    id: "sapi-cah-tauco",
    name: "Sapi Cah Tauco Cabe Hijau",
    cat: "lauk_utama", cui: "chinese_indo", pro: "daging_sapi", met: "tumis", rich: 2,
    spice: 2, menit: 30, harga: "agak_mahal",
    bahan: [
      ["daging sapi", "150 gr"], ["tauco", "1 sdm"], ["cabe hijau", "5 buah"],
      ["bawang putih", "3 siung"], ["jahe", "1 cm"], ["kecap manis", "1 sdm"],
      ["daun bawang", "1 batang"], ["tepung maizena", "1 sdt"]
    ],
    langkah: [
      "Iris tipis daging, lumuri maizena.",
      "Tumis bawang putih, jahe, dan cabe hijau.",
      "Masukkan daging, masak api besar sampai berubah warna.",
      "Masukkan tauco dan kecap manis.",
      "Aduk sampai matang, taburi daun bawang."
    ],
    kcal: 320, protg: 25, tags: ["pedas", "gurih"]
  }),
  m({
    id: "cah-sawi-asin-daging",
    name: "Cah Sawi Asin Daging",
    cat: "sayur", cui: "chinese_indo", pro: "daging_sapi", met: "tumis", rich: 2, menit: 20,
    harga: "sedang",
    bahan: [
      ["sawi putih", "1/2 buah"], ["daging giling", "60 gr"], ["bawang putih", "3 siung"],
      ["jahe", "1 cm"], ["kecap asin", "1 sdm"], ["daun bawang", "1 batang"],
      ["merica", "1/4 sdt"]
    ],
    langkah: [
      "Potong sawi putih.",
      "Tumis bawang putih dan jahe, masukkan daging giling.",
      "Masak sampai daging matang.",
      "Masukkan sawi, bumbui kecap asin dan merica.",
      "Masak sampai sawi layu, taburi daun bawang."
    ],
    kcal: 180, protg: 12, tags: ["gurih", "cepat"]
  }),
  m({
    id: "bakmi-ayam-jamur",
    name: "Bakmi Ayam Jamur Kecap",
    cat: "one_dish", cui: "chinese_indo", pro: "ayam", met: "rebus", rich: 2, menit: 45,
    sulit: "sedang", harga: "sedang",
    bahan: [
      ["mie telur", "1 keping"], ["dada ayam", "100 gr"], ["jamur tiram", "60 gr"],
      ["sawi hijau", "3 lembar"], ["bawang putih", "4 siung"], ["kecap manis", "2 sdm"],
      ["kecap asin", "1 sdm"], ["daun bawang", "1 batang"]
    ],
    langkah: [
      "Tumis ayam dadu dan jamur dengan bawang putih dan kecap sampai meresap.",
      "Rebus mie dan sawi, tiriskan.",
      "Buat minyak bawang putih untuk aduk mie.",
      "Aduk mie dengan kecap asin dan minyak bawang.",
      "Beri tumisan ayam jamur, sawi, dan kuah kaldu terpisah."
    ],
    kcal: 450, protg: 22, tags: ["gurih", "hangat", "anak_friendly"]
  }),
  m({
    id: "pangsit-rebus-ayam",
    name: "Pangsit Rebus Kuah",
    cat: "one_dish", cui: "chinese_indo", pro: "ayam", met: "rebus", rich: 1, kuah: true,
    menit: 40, sulit: "sedang", harga: "sedang",
    bahan: [
      ["dada ayam", "100 gr"], ["kulit pangsit", "15 lembar"], ["sawi hijau", "3 lembar"],
      ["bawang putih", "4 siung"], ["daun bawang", "1 batang"], ["seledri", "1 batang"],
      ["merica", "1/4 sdt"], ["kecap asin", "1 sdm"]
    ],
    langkah: [
      "Cincang ayam, bumbui, isikan ke kulit pangsit, bentuk.",
      "Buat kaldu dari bawang putih goreng dan air.",
      "Rebus pangsit sampai mengapung matang.",
      "Rebus sawi sebentar.",
      "Sajikan pangsit dan sawi dengan kuah, taburi daun bawang dan seledri."
    ],
    kcal: 300, protg: 16, tags: ["berkuah", "hangat", "anak_friendly"]
  }),
  m({
    id: "lumpia-basah",
    name: "Lumpia Basah Rebung",
    cat: "one_dish", cui: "chinese_indo", pro: "telur", met: "tumis", rich: 2, menit: 40,
    sulit: "sedang",
    bahan: [
      ["kulit lumpia", "6 lembar"], ["rebung", "150 gr"], ["telur ayam", "1 butir"],
      ["tauge", "50 gr"], ["bawang putih", "3 siung"], ["kecap manis", "2 sdm"],
      ["ebi", "1 sdm"], ["daun bawang", "1 batang"]
    ],
    langkah: [
      "Rebus rebung iris, buang air, tiriskan.",
      "Tumis bawang putih dan ebi, orak-arik telur.",
      "Masukkan rebung dan tauge, bumbui kecap manis.",
      "Masak sampai matang jadi isian.",
      "Bungkus isian dengan kulit lumpia, sajikan dengan saus."
    ],
    kcal: 320, protg: 12, tags: ["gurih", "manis"]
  }),
  m({
    id: "tahu-cah-jamur-kecap",
    name: "Tahu Cah Jamur Kecap",
    cat: "lauk_utama", cui: "chinese_indo", pro: "tempe_tahu", met: "tumis", rich: 2,
    kuah: true, menit: 25,
    bahan: [
      ["tahu", "3 buah"], ["jamur tiram", "80 gr"], ["bawang putih", "3 siung"],
      ["kecap manis", "1 sdm"], ["kecap asin", "1 sdt"], ["daun bawang", "1 batang"],
      ["tepung maizena", "1 sdt"], ["merica", "1/4 sdt"]
    ],
    langkah: [
      "Goreng tahu, potong dadu; suwir jamur.",
      "Tumis bawang putih sampai harum.",
      "Masukkan jamur, aduk sampai layu.",
      "Masukkan tahu, kecap, dan sedikit air.",
      "Kentalkan dengan maizena, taburi daun bawang."
    ],
    kcal: 240, protg: 15, tags: ["gurih", "berkuah", "ekonomis", "tahu_tempe"]
  }),
  m({
    id: "cah-kailan-bawang-putih",
    name: "Cah Caisim Bawang Putih",
    cat: "sayur", cui: "chinese_indo", pro: "none", met: "tumis", rich: 1, menit: 12,
    bahan: [
      ["sawi hijau", "1 ikat"], ["bawang putih", "4 siung"], ["kaldu bubuk", "1/2 sdt"],
      ["kecap asin", "1/2 sdm"], ["garam", "secukupnya"], ["minyak goreng", "2 sdm"]
    ],
    langkah: [
      "Potong caisim, cuci bersih.",
      "Tumis bawang putih cincang sampai harum keemasan.",
      "Masukkan caisim, aduk cepat api besar.",
      "Bumbui kecap asin, kaldu, dan garam.",
      "Angkat saat masih hijau renyah."
    ],
    kcal: 70, protg: 3, tags: ["cepat", "seger", "tumis_hijau", "ekonomis"]
  }),
  m({
    id: "sup-tahu-telur-jamur",
    name: "Sup Tahu Jamur Telur",
    cat: "sup", cui: "chinese_indo", pro: "tempe_tahu", met: "rebus", rich: 1, kuah: true,
    menit: 25,
    bahan: [
      ["tahu", "3 buah"], ["jamur tiram", "80 gr"], ["telur ayam", "1 butir"],
      ["sawi hijau", "2 lembar"], ["bawang putih", "3 siung"], ["daun bawang", "1 batang"],
      ["merica", "1/4 sdt"], ["kaldu bubuk", "1/2 sdt"]
    ],
    langkah: [
      "Tumis bawang putih halus, tuang air.",
      "Masukkan jamur dan tahu dadu.",
      "Bumbui merica, garam, dan kaldu.",
      "Masukkan sawi, tuang telur kocok sambil diaduk.",
      "Taburi daun bawang, angkat."
    ],
    kcal: 170, protg: 12, tags: ["berkuah", "hangat", "ekonomis", "anak_friendly"]
  }),
  m({
    id: "ayam-jamur-kecap-hioko",
    name: "Ayam Kecap Jamur Hioko",
    cat: "lauk_utama", cui: "chinese_indo", pro: "ayam", met: "rebus", rich: 2, kuah: true,
    menit: 40, sulit: "sedang", harga: "sedang",
    bahan: [
      ["ayam", "200 gr"], ["jamur tiram", "60 gr"], ["kecap manis", "3 sdm"],
      ["kecap asin", "1 sdm"], ["bawang putih", "4 siung"], ["jahe", "2 cm"],
      ["merica", "1/4 sdt"], ["daun bawang", "1 batang"]
    ],
    langkah: [
      "Tumis bawang putih dan jahe sampai harum.",
      "Masukkan ayam, masak sampai berubah warna.",
      "Tuang air, kecap manis, kecap asin, dan merica.",
      "Masukkan jamur, masak sampai kuah mengental.",
      "Taburi daun bawang, angkat."
    ],
    kcal: 340, protg: 26, tags: ["manis", "gurih", "berkuah", "anak_friendly"]
  }),
  m({
    id: "tim-tahu-telur-ayam",
    name: "Tim Tahu Telur Ayam",
    cat: "lauk_utama", cui: "chinese_indo", pro: "telur", met: "kukus", rich: 1, menit: 30,
    bahan: [
      ["tahu", "3 buah"], ["telur ayam", "2 butir"], ["daging giling", "50 gr"],
      ["bawang putih", "2 siung"], ["daun bawang", "1 batang"], ["kecap asin", "1 sdm"],
      ["merica", "1/4 sdt"], ["wortel", "1/2 buah"]
    ],
    langkah: [
      "Hancurkan tahu, campur dengan telur dan daging giling.",
      "Tambahkan bawang putih, wortel parut, dan bumbu.",
      "Tuang ke mangkuk tahan panas.",
      "Kukus sekitar 20 menit sampai set.",
      "Taburi daun bawang, sajikan hangat."
    ],
    kcal: 240, protg: 16, tags: ["gurih", "anak_friendly", "lauk_telur"]
  }),
  m({
    id: "mie-tiaw-kuah-ayam",
    name: "Mie Kwetiau Kuah Ayam Jamur",
    cat: "one_dish", cui: "chinese_indo", pro: "ayam", met: "rebus", rich: 1, kuah: true,
    menit: 30, harga: "sedang",
    bahan: [
      ["kwetiau", "150 gr"], ["dada ayam", "80 gr"], ["jamur tiram", "50 gr"],
      ["sawi hijau", "3 lembar"], ["bawang putih", "4 siung"], ["daun bawang", "1 batang"],
      ["merica", "1/4 sdt"], ["kaldu bubuk", "1/2 sdt"]
    ],
    langkah: [
      "Rebus ayam, suwir, simpan kaldu.",
      "Goreng bawang putih halus, masukkan ke kaldu.",
      "Masukkan jamur, bumbui merica dan kaldu.",
      "Seduh kwetiau dan sawi di mangkuk.",
      "Tuang kuah, ayam, dan jamur; taburi daun bawang."
    ],
    kcal: 400, protg: 20, tags: ["berkuah", "hangat", "anak_friendly"]
  }),
  m({
    id: "cah-brokoli-bakso",
    name: "Cah Brokoli Bakso",
    cat: "sayur", cui: "chinese_indo", pro: "daging_sapi", met: "tumis", rich: 1, menit: 18,
    harga: "sedang",
    bahan: [
      ["brokoli", "1/2 buah"], ["bakso sapi", "5 butir"], ["bawang putih", "3 siung"],
      ["kecap asin", "1 sdm"], ["tepung maizena", "1/2 sdt"], ["daun bawang", "1 batang"],
      ["merica", "1/4 sdt"]
    ],
    langkah: [
      "Rebus brokoli sebentar, tiriskan; iris bakso.",
      "Tumis bawang putih sampai harum.",
      "Masukkan bakso, aduk sebentar.",
      "Masukkan brokoli, kecap asin, dan sedikit air.",
      "Kentalkan dengan maizena, taburi daun bawang."
    ],
    kcal: 160, protg: 11, tags: ["gurih", "anak_friendly"]
  }),
  m({
    id: "orak-arik-sawi-telur",
    name: "Orak-Arik Sawi Putih Telur",
    cat: "sayur", cui: "chinese_indo", pro: "telur", met: "tumis", rich: 1, menit: 15,
    bahan: [
      ["sawi putih", "1/2 buah"], ["telur ayam", "1 butir"], ["bawang putih", "3 siung"],
      ["cabe merah", "1 buah"], ["kecap asin", "1/2 sdm"], ["garam", "secukupnya"],
      ["merica", "1/4 sdt"]
    ],
    langkah: [
      "Iris sawi putih.",
      "Tumis bawang putih dan cabe sampai harum.",
      "Masukkan sawi, aduk sampai layu.",
      "Pinggirkan, orak-arik telur.",
      "Aduk rata, bumbui kecap asin, garam, dan merica."
    ],
    kcal: 140, protg: 9, tags: ["cepat", "gurih", "ekonomis"]
  }),
  m({
    id: "udang-cah-tauge",
    name: "Udang Cah Tauge Kucai",
    cat: "lauk_utama", cui: "chinese_indo", pro: "udang", met: "tumis", rich: 1, menit: 20,
    harga: "agak_mahal",
    bahan: [
      ["udang", "150 gr"], ["tauge", "100 gr"], ["daun kucai", "5 batang"],
      ["bawang putih", "3 siung"], ["jahe", "1 cm"], ["kecap asin", "1 sdm"],
      ["merica", "1/4 sdt"]
    ],
    langkah: [
      "Kupas udang, lumuri sedikit garam.",
      "Tumis bawang putih dan jahe sampai harum.",
      "Masukkan udang, masak sampai memerah.",
      "Masukkan tauge dan kucai, aduk cepat.",
      "Bumbui kecap asin dan merica, angkat saat tauge renyah."
    ],
    kcal: 200, protg: 20, tags: ["cepat", "gurih", "protein_tinggi"]
  }),
  m({
    id: "sup-wonton-bakso-ikan",
    name: "Sup Bakso Ikan Sawi",
    cat: "sup", cui: "chinese_indo", pro: "ikan", met: "rebus", rich: 1, kuah: true,
    menit: 30, harga: "sedang",
    bahan: [
      ["ikan tenggiri", "120 gr"], ["tepung tapioka", "4 sdm"], ["sawi hijau", "3 lembar"],
      ["bawang putih", "3 siung"], ["daun bawang", "1 batang"], ["seledri", "1 batang"],
      ["merica", "1/4 sdt"], ["kaldu bubuk", "1/2 sdt"]
    ],
    langkah: [
      "Haluskan ikan, campur tapioka dan bumbu jadi adonan bakso.",
      "Bentuk bakso, rebus sampai mengapung.",
      "Buat kaldu dari bawang putih goreng.",
      "Masukkan sawi, bumbui merica dan kaldu.",
      "Sajikan dengan daun bawang dan seledri."
    ],
    kcal: 200, protg: 16, tags: ["berkuah", "hangat", "anak_friendly"]
  }),
  m({
    id: "kwetiau-siram-sapi",
    name: "Kwetiau Siram Sapi Sawi",
    cat: "one_dish", cui: "chinese_indo", pro: "daging_sapi", met: "tumis", rich: 2,
    kuah: true, menit: 35, sulit: "sedang", harga: "agak_mahal",
    bahan: [
      ["kwetiau", "150 gr"], ["daging sapi", "80 gr"], ["sawi hijau", "3 lembar"],
      ["bawang putih", "3 siung"], ["kecap asin", "1 sdm"], ["kecap manis", "1 sdm"],
      ["tepung maizena", "1 sdm"], ["telur ayam", "1 butir"]
    ],
    langkah: [
      "Goreng kwetiau sebentar, tata di piring.",
      "Iris tipis daging, tumis dengan bawang putih.",
      "Masukkan sawi, kecap asin, kecap manis, dan air.",
      "Kentalkan dengan maizena, tuang telur kocok.",
      "Siram saus ke atas kwetiau."
    ],
    kcal: 460, protg: 22, tags: ["gurih", "berkuah", "hangat"]
  }),
  m({
    id: "tumis-jamur-tahu-kecap",
    name: "Tumis Jamur Tahu Kecap",
    cat: "sayur", cui: "chinese_indo", pro: "tempe_tahu", met: "tumis", rich: 1, menit: 18,
    bahan: [
      ["jamur tiram", "150 gr"], ["tahu", "2 buah"], ["bawang putih", "3 siung"],
      ["cabe merah", "2 buah"], ["kecap manis", "1 sdm"], ["kecap asin", "1 sdt"],
      ["daun bawang", "1 batang"]
    ],
    langkah: [
      "Goreng tahu, potong dadu; suwir jamur.",
      "Tumis bawang putih dan cabe sampai harum.",
      "Masukkan jamur, aduk sampai layu.",
      "Masukkan tahu, kecap manis, dan kecap asin.",
      "Masak sampai matang, taburi daun bawang."
    ],
    kcal: 180, protg: 12, tags: ["gurih", "manis", "ekonomis", "tahu_tempe"]
  }),
  m({
    id: "ayam-cah-paprika-kecap",
    name: "Ayam Cah Cabe Hijau Besar",
    cat: "lauk_utama", cui: "chinese_indo", pro: "ayam", met: "tumis", rich: 2, spice: 1,
    menit: 25, harga: "sedang",
    bahan: [
      ["dada ayam", "150 gr"], ["cabe hijau", "4 buah"], ["bawang bombay", "1/4 buah"],
      ["bawang putih", "3 siung"], ["kecap manis", "1 sdm"], ["kecap asin", "1 sdt"],
      ["jahe", "1 cm"], ["tepung maizena", "1 sdt"]
    ],
    langkah: [
      "Potong dadu ayam, lumuri maizena.",
      "Tumis bawang putih, bombay, dan jahe sampai harum.",
      "Masukkan ayam, masak sampai berubah warna.",
      "Masukkan cabe hijau besar iris, kecap manis, dan kecap asin.",
      "Aduk sampai matang, angkat."
    ],
    kcal: 300, protg: 24, tags: ["gurih", "manis"]
  })
];
