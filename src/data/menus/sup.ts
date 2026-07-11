import type { Menu } from "../types";
import { m } from "../menuHelpers";

/** Sup — kuah protein-forward: soto, sop, sayur berkuah utama. Baca TAGGING.md. */
export const SUP: Menu[] = [
  m({
    id: "soto-ayam-bening",
    name: "Soto Ayam Bening",
    cat: "sup", pro: "ayam", met: "rebus", rich: 2, kuah: true, menit: 50,
    sulit: "sedang", harga: "sedang",
    bahan: [
      ["ayam", "150 gr"], ["soun", "50 gr"], ["tauge", "50 gr"], ["kunyit", "2 cm"],
      ["bawang putih", "3 siung"], ["jahe", "1 cm"], ["serai", "1 batang"],
      ["daun jeruk", "2 lembar"], ["seledri", "1 batang"]
    ],
    langkah: [
      "Rebus ayam sampai matang, suwir; simpan kaldunya.",
      "Haluskan kunyit, bawang putih, dan jahe; tumis dengan serai dan daun jeruk.",
      "Masukkan bumbu ke kaldu, didihkan.",
      "Seduh soun dan tauge di mangkuk, beri ayam suwir.",
      "Tuang kuah panas, taburi seledri dan bawang goreng."
    ],
    kcal: 240, protg: 18, tags: ["berkuah", "hangat", "klasik", "sup_bening"]
  }),
  m({
    id: "soto-lamongan",
    name: "Soto Lamongan Koya",
    cat: "sup", pro: "ayam", met: "rebus", rich: 2, kuah: true, menit: 60,
    sulit: "sedang", harga: "sedang",
    bahan: [
      ["ayam", "150 gr"], ["soun", "50 gr"], ["kol", "50 gr"], ["kunyit", "2 cm"],
      ["kemiri", "3 butir"], ["bawang putih", "3 siung"], ["serai", "1 batang"],
      ["daun jeruk", "3 lembar"], ["kerupuk", "5 keping"]
    ],
    langkah: [
      "Rebus ayam sampai matang, suwir, simpan kaldu.",
      "Haluskan kunyit, kemiri, dan bawang; tumis dengan serai.",
      "Masukkan bumbu ke kaldu, masak sampai harum.",
      "Buat koya dari kerupuk udang dan bawang putih goreng yang dihaluskan.",
      "Sajikan soto dengan soun, kol, ayam, dan taburan koya."
    ],
    kcal: 280, protg: 19, tags: ["berkuah", "hangat", "klasik", "sup_bening"]
  }),
  m({
    id: "soto-betawi",
    name: "Soto Betawi Santan",
    cat: "sup", pro: "daging_sapi", met: "santan", rich: 3, santan: true, kuah: true,
    menit: 75, sulit: "butuh_niat", harga: "agak_mahal",
    bahan: [
      ["daging sapi", "200 gr"], ["santan kelapa", "200 ml"], ["kentang", "1 buah"],
      ["tomat", "1 buah"], ["bawang merah", "5 butir"], ["bawang putih", "3 siung"],
      ["jahe", "2 cm"], ["kayu manis", "1 batang kecil"], ["daun jeruk", "2 lembar"]
    ],
    langkah: [
      "Rebus daging sampai empuk, potong dadu, simpan kaldu.",
      "Haluskan bawang dan jahe, tumis sampai harum.",
      "Masukkan bumbu ke kaldu, tuang santan.",
      "Masukkan daging, masak api kecil sampai gurih.",
      "Sajikan dengan kentang, tomat, dan taburan bawang goreng."
    ],
    kcal: 400, protg: 24, tags: ["berkuah", "bersantan", "hangat", "weekend"]
  }),
  m({
    id: "soto-daging-bening",
    name: "Soto Daging Bening",
    cat: "sup", pro: "daging_sapi", met: "rebus", rich: 2, kuah: true, menit: 75,
    sulit: "butuh_niat", harga: "agak_mahal",
    bahan: [
      ["daging sapi", "200 gr"], ["tomat", "1 buah"], ["daun bawang", "1 batang"],
      ["bawang putih", "4 siung"], ["jahe", "2 cm"], ["serai", "1 batang"],
      ["kayu manis", "1 batang kecil"], ["cengkeh", "3 butir"], ["seledri", "1 batang"]
    ],
    langkah: [
      "Rebus daging sampai empuk, potong dadu, saring kaldu.",
      "Goreng bawang putih halus, masukkan ke kaldu.",
      "Tambahkan jahe geprek, serai, kayu manis, dan cengkeh.",
      "Masak sampai kaldu harum dan bening.",
      "Sajikan dengan tomat, daun bawang, dan seledri."
    ],
    kcal: 320, protg: 25, tags: ["berkuah", "hangat", "klasik", "sup_bening"]
  }),
  m({
    id: "soto-babat",
    name: "Soto Babat",
    cat: "sup", pro: "daging_sapi", met: "santan", rich: 3, santan: true, kuah: true,
    spice: 1, menit: 90, sulit: "butuh_niat", harga: "sedang",
    bahan: [
      ["tetelan sapi", "200 gr"], ["santan instan", "100 ml"], ["kunyit", "2 cm"],
      ["kemiri", "3 butir"], ["bawang merah", "5 butir"], ["bawang putih", "3 siung"],
      ["serai", "1 batang"], ["daun jeruk", "3 lembar"], ["daun bawang", "1 batang"]
    ],
    langkah: [
      "Rebus tetelan/babat sampai empuk, potong, simpan kaldu.",
      "Haluskan kunyit, kemiri, dan bawang; tumis dengan serai.",
      "Masukkan bumbu ke kaldu, tuang santan.",
      "Masak sampai kuah gurih dan bumbu meresap.",
      "Sajikan dengan daun bawang dan sambal."
    ],
    kcal: 350, protg: 22, tags: ["berkuah", "bersantan", "hangat"]
  }),
  m({
    id: "sop-ayam-sayuran",
    name: "Sop Ayam Sayuran",
    cat: "sup", pro: "ayam", met: "rebus", rich: 1, kuah: true, menit: 35,
    harga: "sedang",
    bahan: [
      ["ayam", "150 gr"], ["wortel", "1 buah"], ["kentang", "1 buah"], ["kembang kol", "50 gr"],
      ["daun bawang", "1 batang"], ["seledri", "1 batang"], ["bawang putih", "3 siung"],
      ["pala", "1/4 sdt"], ["merica", "1/4 sdt"]
    ],
    langkah: [
      "Rebus ayam sampai kaldu keluar dan ayam empuk.",
      "Goreng bawang putih halus, masukkan ke kaldu.",
      "Bumbui pala, merica, dan garam.",
      "Masukkan wortel, kentang, dan kembang kol, rebus sampai empuk.",
      "Taburi daun bawang dan seledri, angkat."
    ],
    kcal: 200, protg: 16, tags: ["berkuah", "hangat", "anak_friendly", "sup_bening"]
  }),
  m({
    id: "sop-bakso",
    name: "Sop Bakso Sayur",
    cat: "sup", pro: "daging_sapi", met: "rebus", rich: 1, kuah: true, menit: 25,
    harga: "sedang",
    bahan: [
      ["bakso sapi", "8 butir"], ["wortel", "1 buah"], ["kembang kol", "50 gr"],
      ["makaroni", "50 gr"], ["daun bawang", "1 batang"], ["bawang putih", "3 siung"],
      ["seledri", "1 batang"], ["merica", "1/4 sdt"]
    ],
    langkah: [
      "Goreng bawang putih halus untuk kaldu.",
      "Didihkan air, bumbui merica, garam, dan kaldu.",
      "Masukkan bakso, wortel, dan makaroni.",
      "Masukkan kembang kol, masak sampai empuk.",
      "Taburi daun bawang dan seledri."
    ],
    kcal: 250, protg: 15, tags: ["berkuah", "hangat", "anak_friendly", "praktis"]
  }),
  m({
    id: "sop-ayam-kampung",
    name: "Sop Ayam Kampung Jahe",
    cat: "sup", pro: "ayam", met: "rebus", rich: 2, kuah: true, menit: 70,
    sulit: "sedang", harga: "sedang",
    bahan: [
      ["ayam kampung", "200 gr"], ["wortel", "1 buah"], ["daun bawang", "1 batang"],
      ["bawang putih", "4 siung"], ["jahe", "3 cm"], ["seledri", "1 batang"],
      ["merica", "1/2 sdt"], ["pala", "1/4 sdt"]
    ],
    langkah: [
      "Rebus ayam kampung dengan jahe geprek sampai empuk.",
      "Goreng bawang putih halus, masukkan ke kaldu.",
      "Bumbui merica, pala, dan garam.",
      "Masukkan wortel, masak sampai empuk.",
      "Taburi daun bawang dan seledri, sajikan hangat."
    ],
    kcal: 240, protg: 20, tags: ["berkuah", "hangat", "sup_bening"]
  }),
  m({
    id: "sayur-sop",
    name: "Sayur Sop Komplit",
    cat: "sup", pro: "none", met: "rebus", rich: 1, kuah: true, menit: 30,
    bahan: [
      ["wortel", "2 buah"], ["kentang", "1 buah"], ["buncis", "50 gr"], ["kol", "50 gr"],
      ["jagung manis", "1/2 buah"], ["daun bawang", "1 batang"], ["bawang putih", "3 siung"],
      ["seledri", "1 batang"]
    ],
    langkah: [
      "Goreng bawang putih halus untuk kaldu sayur.",
      "Didihkan air, bumbui merica, garam, dan kaldu bubuk.",
      "Masukkan wortel, kentang, dan jagung.",
      "Masukkan buncis dan kol, rebus sampai empuk.",
      "Taburi daun bawang dan seledri."
    ],
    kcal: 130, protg: 4, tags: ["berkuah", "hangat", "ekonomis", "anak_friendly", "sup_bening"]
  }),
  m({
    id: "sop-kimlo",
    name: "Sop Kimlo",
    cat: "sup", cui: "chinese_indo", pro: "ayam", met: "rebus", rich: 2, kuah: true,
    menit: 45, sulit: "sedang", harga: "sedang",
    bahan: [
      ["dada ayam", "100 gr"], ["soun", "50 gr"], ["jamur kancing", "50 gr"],
      ["wortel", "1 buah"], ["telur puyuh", "8 butir"], ["bunga sedap malam", "secukupnya"],
      ["bawang putih", "3 siung"], ["daun bawang", "1 batang"]
    ],
    langkah: [
      "Rebus ayam, suwir, simpan kaldu.",
      "Goreng bawang putih halus, masukkan ke kaldu.",
      "Masukkan wortel, jamur, dan telur puyuh rebus.",
      "Masukkan soun dan bunga sedap malam.",
      "Bumbui, masak sampai matang, taburi daun bawang."
    ],
    kcal: 240, protg: 18, tags: ["berkuah", "hangat", "weekend"]
  }),
  m({
    id: "sop-kaki-praktis",
    name: "Sop Tetelan Bening",
    cat: "sup", pro: "daging_sapi", met: "rebus", rich: 2, kuah: true, menit: 80,
    sulit: "butuh_niat", harga: "sedang",
    bahan: [
      ["tetelan sapi", "200 gr"], ["wortel", "1 buah"], ["kentang", "1 buah"],
      ["tomat", "1 buah"], ["daun bawang", "1 batang"], ["bawang putih", "4 siung"],
      ["merica", "1/2 sdt"], ["pala", "1/4 sdt"]
    ],
    langkah: [
      "Rebus tetelan sampai empuk, buang buih kotorannya.",
      "Goreng bawang putih halus, masukkan ke kaldu.",
      "Bumbui merica, pala, dan garam.",
      "Masukkan wortel dan kentang, rebus sampai empuk.",
      "Masukkan tomat dan daun bawang, angkat."
    ],
    kcal: 320, protg: 22, tags: ["berkuah", "hangat", "sup_bening"]
  }),
  m({
    id: "sup-jagung-telur",
    name: "Sup Jagung Telur",
    cat: "sup", cui: "chinese_indo", pro: "telur", met: "rebus", rich: 1, kuah: true,
    menit: 20, harga: "ekonomis",
    bahan: [
      ["jagung manis", "2 buah"], ["telur ayam", "1 butir"], ["wortel", "1/2 buah"],
      ["bawang putih", "2 siung"], ["daun bawang", "1 batang"], ["tepung maizena", "1 sdm"],
      ["merica", "1/4 sdt"], ["kaldu bubuk", "1/2 sdt"]
    ],
    langkah: [
      "Serut jagung manis, sebagian diblender kasar.",
      "Tumis bawang putih, tuang air, masukkan jagung dan wortel.",
      "Bumbui merica, garam, dan kaldu.",
      "Kentalkan dengan larutan maizena.",
      "Tuang telur kocok sambil diaduk perlahan, taburi daun bawang."
    ],
    kcal: 150, protg: 8, tags: ["berkuah", "hangat", "anak_friendly", "ekonomis"]
  }),
  m({
    id: "sup-oyong-telur-puyuh",
    name: "Sup Oyong Soun Telur Puyuh",
    cat: "sup", pro: "telur", met: "rebus", rich: 1, kuah: true, menit: 25,
    bahan: [
      ["oyong", "2 buah"], ["soun", "50 gr"], ["telur puyuh", "8 butir"],
      ["wortel", "1/2 buah"], ["bawang putih", "3 siung"], ["daun bawang", "1 batang"],
      ["seledri", "1 batang"], ["merica", "1/4 sdt"]
    ],
    langkah: [
      "Rebus dan kupas telur puyuh.",
      "Tumis bawang putih halus, tuang air.",
      "Masukkan wortel dan telur puyuh, bumbui merica dan garam.",
      "Masukkan oyong dan soun.",
      "Masak sampai oyong empuk, taburi daun bawang dan seledri."
    ],
    kcal: 160, protg: 11, tags: ["berkuah", "hangat", "ekonomis", "anak_friendly"]
  }),
  m({
    id: "tekwan-praktis",
    name: "Sup Bakso Ikan Sederhana",
    cat: "sup", pro: "ikan", met: "rebus", rich: 1, kuah: true, menit: 30,
    harga: "sedang",
    bahan: [
      ["ikan tenggiri", "150 gr"], ["tepung tapioka", "5 sdm"], ["soun", "50 gr"],
      ["jamur kuping", "secukupnya"], ["bawang putih", "3 siung"], ["daun bawang", "1 batang"],
      ["merica", "1/4 sdt"], ["seledri", "1 batang"]
    ],
    langkah: [
      "Haluskan ikan, campur dengan tapioka dan bumbu jadi adonan bakso.",
      "Bentuk bakso ikan kecil, rebus sampai mengapung.",
      "Buat kaldu dari bawang putih goreng dan air rebusan.",
      "Masukkan soun dan jamur kuping.",
      "Sajikan dengan daun bawang dan seledri."
    ],
    kcal: 220, protg: 17, tags: ["berkuah", "hangat"]
  }),
  m({
    id: "sup-brenebon",
    name: "Sup Kacang Merah Iga",
    cat: "sup", pro: "daging_sapi", met: "rebus", rich: 2, kuah: true, menit: 90,
    sulit: "butuh_niat", harga: "agak_mahal",
    bahan: [
      ["iga sapi", "200 gr"], ["kacang merah", "100 gr"], ["wortel", "1 buah"],
      ["kentang", "1 buah"], ["bawang putih", "3 siung"], ["daun bawang", "1 batang"],
      ["pala", "1/4 sdt"], ["merica", "1/2 sdt"]
    ],
    langkah: [
      "Rendam kacang merah, rebus bersama iga sampai empuk.",
      "Goreng bawang putih halus, masukkan ke kaldu.",
      "Bumbui pala, merica, dan garam.",
      "Masukkan wortel dan kentang, rebus sampai empuk.",
      "Taburi daun bawang, sajikan hangat."
    ],
    kcal: 350, protg: 24, tags: ["berkuah", "hangat", "weekend"]
  }),
  m({
    id: "sayur-asem-bening-jagung",
    name: "Sup Kentang Wortel Ayam",
    cat: "sup", pro: "ayam", met: "rebus", rich: 1, kuah: true, menit: 30,
    harga: "sedang",
    bahan: [
      ["ayam", "100 gr"], ["kentang", "2 buah"], ["wortel", "1 buah"],
      ["daun bawang", "1 batang"], ["bawang putih", "3 siung"], ["bawang bombay", "1/4 buah"],
      ["merica", "1/4 sdt"], ["seledri", "1 batang"]
    ],
    langkah: [
      "Rebus ayam sampai kaldu keluar, suwir.",
      "Tumis bawang putih dan bombay, masukkan ke kaldu.",
      "Masukkan kentang dan wortel.",
      "Bumbui merica, garam, dan kaldu bubuk.",
      "Masak sampai empuk, taburi daun bawang dan seledri."
    ],
    kcal: 200, protg: 14, tags: ["berkuah", "hangat", "anak_friendly", "sup_bening"]
  }),
  m({
    id: "soto-mie-bogor",
    name: "Soto Mie Sederhana",
    cat: "sup", pro: "daging_sapi", met: "rebus", rich: 2, kuah: true, menit: 50,
    sulit: "sedang", harga: "sedang",
    bahan: [
      ["tetelan sapi", "150 gr"], ["mie basah", "150 gr"], ["kol", "50 gr"],
      ["tomat", "1 buah"], ["bawang putih", "3 siung"], ["kunyit", "1 cm"],
      ["daun bawang", "1 batang"], ["seledri", "1 batang"]
    ],
    langkah: [
      "Rebus tetelan sampai empuk, potong, simpan kaldu.",
      "Haluskan bawang putih dan kunyit, tumis, masukkan ke kaldu.",
      "Seduh mie, kol, dan tomat di mangkuk.",
      "Tuang kuah panas dan daging.",
      "Taburi daun bawang, seledri, dan bawang goreng."
    ],
    kcal: 320, protg: 18, tags: ["berkuah", "hangat", "klasik"]
  }),
  m({
    id: "sup-makaroni-ayam",
    name: "Sup Makaroni Ayam",
    cat: "sup", cui: "western_simple", pro: "ayam", met: "rebus", rich: 1, kuah: true,
    menit: 30, harga: "sedang",
    bahan: [
      ["makaroni", "80 gr"], ["dada ayam", "100 gr"], ["wortel", "1 buah"],
      ["bawang bombay", "1/4 buah"], ["bawang putih", "3 siung"], ["daun bawang", "1 batang"],
      ["merica", "1/4 sdt"], ["kaldu bubuk", "1/2 sdt"]
    ],
    langkah: [
      "Rebus ayam, suwir, simpan kaldu.",
      "Tumis bawang putih dan bombay, masukkan ke kaldu.",
      "Masukkan makaroni dan wortel.",
      "Bumbui merica, garam, dan kaldu.",
      "Masak sampai makaroni empuk, taburi daun bawang."
    ],
    kcal: 250, protg: 15, tags: ["berkuah", "hangat", "anak_friendly"]
  }),
  m({
    id: "sup-tahu-bakso-ikan",
    name: "Sup Tahu Wortel Sederhana",
    cat: "sup", pro: "tempe_tahu", met: "rebus", rich: 1, kuah: true, menit: 20,
    bahan: [
      ["tahu", "3 buah"], ["wortel", "1 buah"], ["daun bawang", "1 batang"],
      ["bawang putih", "3 siung"], ["seledri", "1 batang"], ["merica", "1/4 sdt"],
      ["kaldu bubuk", "1/2 sdt"]
    ],
    langkah: [
      "Potong dadu tahu dan wortel.",
      "Tumis bawang putih halus, tuang air.",
      "Masukkan wortel, masak sampai setengah empuk.",
      "Masukkan tahu, bumbui merica, garam, dan kaldu.",
      "Taburi daun bawang dan seledri, angkat."
    ],
    kcal: 130, protg: 9, tags: ["berkuah", "hangat", "ekonomis", "anak_friendly"]
  }),
  m({
    id: "sup-ikan-asam-pedas",
    name: "Sup Ikan Asam Pedas",
    cat: "sup", pro: "ikan", met: "rebus", rich: 2, kuah: true, segar: true, spice: 2,
    menit: 35, harga: "sedang",
    bahan: [
      ["ikan kakap", "2 potong"], ["tomat", "1 buah"], ["belimbing wuluh", "3 buah"],
      ["cabe rawit", "5 buah"], ["bawang merah", "4 butir"], ["jahe", "2 cm"],
      ["serai", "1 batang"], ["daun kemangi", "1 genggam"]
    ],
    langkah: [
      "Tumis bawang, jahe, dan serai sampai harum.",
      "Tuang air, didihkan, masukkan cabe rawit.",
      "Masukkan ikan, tomat, dan belimbing wuluh.",
      "Masak sampai ikan matang dan kuah asam pedas.",
      "Masukkan kemangi, koreksi rasa, angkat."
    ],
    kcal: 200, protg: 22, tags: ["berkuah", "seger", "pedas", "hangat"]
  }),
  m({
    id: "sup-daging-lada-hitam",
    name: "Sup Iga Lada Hitam",
    cat: "sup", cui: "chinese_indo", pro: "daging_sapi", met: "rebus", rich: 2,
    kuah: true, menit: 90, sulit: "butuh_niat", harga: "agak_mahal",
    bahan: [
      ["iga sapi", "250 gr"], ["merica", "1 sdt"], ["bawang bombay", "1/2 buah"],
      ["bawang putih", "4 siung"], ["wortel", "1 buah"], ["kentang", "1 buah"],
      ["daun bawang", "1 batang"], ["kecap asin", "1 sdm"]
    ],
    langkah: [
      "Rebus iga sampai empuk, buang buih.",
      "Tumis bawang putih dan bombay, masukkan ke kaldu.",
      "Bumbui merica hitam tumbuk kasar dan kecap asin.",
      "Masukkan wortel dan kentang, rebus sampai empuk.",
      "Taburi daun bawang, sajikan hangat."
    ],
    kcal: 360, protg: 25, tags: ["berkuah", "hangat", "gurih", "weekend"]
  }),
  m({
    id: "sayur-lodeh-kuah",
    name: "Lodeh Kluwih",
    cat: "sup", pro: "none", met: "santan", rich: 3, santan: true, kuah: true, spice: 1,
    menit: 45, sulit: "sedang",
    bahan: [
      ["kluwih", "250 gr"], ["santan kelapa", "150 ml"], ["cabe merah", "3 buah"],
      ["bawang merah", "5 butir"], ["bawang putih", "2 siung"], ["lengkuas", "2 cm"],
      ["daun salam", "2 lembar"], ["ebi", "1 sdm"]
    ],
    langkah: [
      "Potong-potong kluwih, rebus sebentar.",
      "Haluskan cabe dan bawang, tumis dengan lengkuas dan daun salam.",
      "Masukkan ebi tumbuk, aduk.",
      "Tuang santan dan kluwih, masak api kecil.",
      "Masak sampai kluwih empuk dan kuah gurih."
    ],
    kcal: 170, protg: 5, tags: ["berkuah", "bersantan", "klasik", "ekonomis"]
  }),
  m({
    id: "garang-asem-ayam",
    name: "Garang Asem Ayam",
    cat: "sup", pro: "ayam", met: "kukus", rich: 2, kuah: true, segar: true, spice: 2,
    menit: 60, sulit: "butuh_niat", harga: "sedang",
    bahan: [
      ["ayam", "200 gr"], ["santan instan", "80 ml"], ["belimbing wuluh", "4 buah"],
      ["cabe rawit", "6 buah"], ["bawang merah", "5 butir"], ["bawang putih", "3 siung"],
      ["tomat hijau", "1 buah"], ["daun salam", "2 lembar"]
    ],
    langkah: [
      "Potong ayam, campur dengan irisan bawang, cabe, dan belimbing wuluh.",
      "Tambahkan santan encer, tomat hijau, dan daun salam.",
      "Bungkus dengan daun pisang atau taruh di mangkuk tahan panas.",
      "Kukus sekitar 40 menit sampai ayam empuk.",
      "Sajikan hangat dengan kuah asam segarnya."
    ],
    kcal: 260, protg: 20, tags: ["berkuah", "seger", "pedas", "hangat", "weekend"]
  }),
  m({
    id: "sup-brokoli-jagung",
    name: "Sup Krim Jagung Brokoli",
    cat: "sup", cui: "western_simple", pro: "none", met: "rebus", rich: 2, kuah: true,
    menit: 25, harga: "sedang",
    bahan: [
      ["jagung manis", "2 buah"], ["brokoli", "1/2 buah"], ["susu cair", "150 ml"],
      ["bawang bombay", "1/4 buah"], ["bawang putih", "2 siung"], ["tepung terigu", "1 sdm"],
      ["margarin", "1 sdm"], ["merica", "1/4 sdt"]
    ],
    langkah: [
      "Blender jagung dengan sedikit air, saring.",
      "Tumis bawang putih dan bombay dengan margarin.",
      "Masukkan tepung terigu, aduk, tuang jagung dan susu.",
      "Masukkan brokoli potong kecil, masak sampai empuk.",
      "Bumbui merica dan garam, aduk sampai kental."
    ],
    kcal: 220, protg: 8, tags: ["berkuah", "hangat", "anak_friendly"]
  }),
  m({
    id: "sup-misoa-ayam",
    name: "Sup Misoa Ayam Telur",
    cat: "sup", cui: "chinese_indo", pro: "ayam", met: "rebus", rich: 1, kuah: true,
    menit: 25, harga: "sedang",
    bahan: [
      ["bihun", "60 gr"], ["dada ayam", "100 gr"], ["telur ayam", "1 butir"],
      ["sawi hijau", "2 lembar"], ["bawang putih", "3 siung"], ["jahe", "1 cm"],
      ["daun bawang", "1 batang"], ["merica", "1/4 sdt"]
    ],
    langkah: [
      "Rebus ayam, suwir, simpan kaldu.",
      "Tumis bawang putih dan jahe, masukkan ke kaldu.",
      "Bumbui merica, garam, dan kaldu bubuk.",
      "Masukkan bihun/misoa dan sawi hijau.",
      "Tuang telur kocok sambil diaduk, taburi daun bawang."
    ],
    kcal: 230, protg: 16, tags: ["berkuah", "hangat", "anak_friendly", "praktis"]
  }),
  m({
    id: "empal-gentong-praktis",
    name: "Sup Empal Santan Cirebon",
    cat: "sup", pro: "daging_sapi", met: "santan", rich: 3, santan: true, kuah: true,
    spice: 1, menit: 90, sulit: "butuh_niat", harga: "agak_mahal",
    bahan: [
      ["daging sapi", "200 gr"], ["santan kelapa", "150 ml"], ["kunyit", "2 cm"],
      ["kemiri", "3 butir"], ["bawang merah", "5 butir"], ["bawang putih", "3 siung"],
      ["serai", "1 batang"], ["daun salam", "2 lembar"], ["daun bawang", "1 batang"]
    ],
    langkah: [
      "Rebus daging sampai empuk, potong dadu, simpan kaldu.",
      "Haluskan kunyit, kemiri, dan bawang; tumis dengan serai.",
      "Masukkan bumbu ke kaldu, tuang santan.",
      "Masukkan daging, masak api kecil sampai gurih.",
      "Sajikan dengan daun bawang dan sambal cabe kering."
    ],
    kcal: 400, protg: 24, tags: ["berkuah", "bersantan", "hangat", "weekend"]
  })
];
