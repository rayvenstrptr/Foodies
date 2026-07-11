import type { Menu } from "../types";
import { m } from "../menuHelpers";

/** Lauk utama — daging sapi & tempe/tahu. Baca TAGGING.md sebelum menambah. */
export const LAUK_DAGING_TEMPE: Menu[] = [
  // ── Daging sapi ──────────────────────────────────────────────────────
  m({
    id: "semur-daging",
    name: "Semur Daging Sapi",
    cat: "lauk_utama", pro: "daging_sapi", met: "rebus", rich: 2, kuah: true,
    menit: 70, sulit: "butuh_niat", harga: "agak_mahal",
    bahan: [
      ["daging sapi", "200 gr"], ["kecap manis", "3 sdm"], ["bawang merah", "5 butir"],
      ["bawang putih", "3 siung"], ["kemiri", "3 butir"], ["pala", "1/4 sdt"],
      ["cengkeh", "3 butir"], ["kayu manis", "1 batang kecil"], ["garam", "secukupnya"]
    ],
    langkah: [
      "Potong dadu daging, rebus sampai empuk.",
      "Haluskan bawang dan kemiri, tumis sampai harum.",
      "Masukkan daging, kecap manis, pala, cengkeh, dan kayu manis.",
      "Tuang kaldu rebusan, masak api kecil.",
      "Masak sampai kuah kental dan bumbu meresap."
    ],
    kcal: 380, protg: 28, tags: ["klasik", "manis", "berkuah", "weekend"]
  }),
  m({
    id: "rendang-daging",
    name: "Rendang Daging",
    cat: "lauk_utama", pro: "daging_sapi", met: "santan", rich: 3, santan: true,
    spice: 2, menit: 120, sulit: "butuh_niat", harga: "agak_mahal",
    bahan: [
      ["daging sapi", "250 gr"], ["santan kelapa", "300 ml"], ["cabe merah", "10 buah"],
      ["bawang merah", "8 butir"], ["bawang putih", "4 siung"], ["lengkuas", "3 cm"],
      ["serai", "2 batang"], ["daun jeruk", "4 lembar"], ["daun kunyit", "1 lembar"]
    ],
    langkah: [
      "Haluskan cabe, bawang, dan lengkuas.",
      "Rebus santan dengan bumbu, serai, daun jeruk, dan daun kunyit sambil diaduk.",
      "Masukkan daging, masak api sedang sambil sesekali diaduk.",
      "Kecilkan api saat santan mulai berminyak.",
      "Aduk terus sampai kering, berwarna cokelat gelap, dan berminyak."
    ],
    kcal: 450, protg: 29, tags: ["pedas", "bersantan", "klasik", "weekend"]
  }),
  m({
    id: "empal-gepuk",
    name: "Empal Gepuk Manis",
    cat: "lauk_utama", pro: "daging_sapi", met: "goreng", rich: 2, menit: 75,
    sulit: "butuh_niat", harga: "agak_mahal",
    bahan: [
      ["daging sapi", "200 gr"], ["santan kelapa", "100 ml"], ["gula merah", "2 sdm"],
      ["ketumbar", "1 sdt"], ["bawang putih", "4 siung"], ["lengkuas", "2 cm"],
      ["asam jawa", "1 sdt"], ["daun salam", "2 lembar"], ["garam", "secukupnya"]
    ],
    langkah: [
      "Rebus daging sampai empuk, potong melebar serat.",
      "Pukul-pukul daging supaya pipih dan empuk.",
      "Ungkep dengan santan, gula merah, ketumbar, bawang putih, dan lengkuas.",
      "Masak sampai bumbu meresap dan mengering.",
      "Goreng sebentar sampai kecokelatan."
    ],
    kcal: 400, protg: 28, tags: ["manis", "klasik", "weekend"]
  }),
  m({
    id: "daging-lada-hitam",
    name: "Daging Lada Hitam",
    cat: "lauk_utama", cui: "chinese_indo", pro: "daging_sapi", met: "tumis", rich: 2,
    menit: 30, harga: "agak_mahal",
    bahan: [
      ["daging sapi", "150 gr"], ["merica", "1 sdt"], ["saus tiram", "2 sdm"],
      ["bawang bombay", "1/2 buah"], ["bawang putih", "3 siung"], ["paprika", "1/2 buah"],
      ["kecap manis", "1 sdm"], ["tepung maizena", "1 sdt"]
    ],
    langkah: [
      "Iris tipis daging melawan serat, lumuri maizena.",
      "Tumis bawang putih dan bombay sampai harum.",
      "Masukkan daging, masak cepat api besar sampai berubah warna.",
      "Bumbui merica tumbuk kasar, saus tiram, dan kecap manis.",
      "Masukkan paprika, aduk sebentar, angkat."
    ],
    kcal: 320, protg: 26, tags: ["gurih", "cepat"]
  }),
  m({
    id: "tumis-daging-kecap",
    name: "Tumis Daging Cabe Hijau",
    cat: "lauk_utama", pro: "daging_sapi", met: "tumis", rich: 2, spice: 2, menit: 30,
    harga: "agak_mahal",
    bahan: [
      ["daging sapi", "150 gr"], ["cabe hijau", "6 buah"], ["bawang merah", "5 butir"],
      ["bawang putih", "2 siung"], ["kecap manis", "1 sdm"], ["tomat hijau", "1 buah"],
      ["daun salam", "1 lembar"], ["garam", "secukupnya"]
    ],
    langkah: [
      "Iris tipis daging, iris serong cabe dan bawang.",
      "Tumis bawang dengan daun salam sampai harum.",
      "Masukkan daging, masak sampai berubah warna.",
      "Masukkan cabe hijau dan tomat, bumbui kecap dan garam.",
      "Masak sampai daging empuk dan bumbu meresap."
    ],
    kcal: 300, protg: 25, tags: ["pedas", "gurih"]
  }),
  m({
    id: "oseng-daging-buncis",
    name: "Oseng Daging Cincang Buncis",
    cat: "lauk_utama", pro: "daging_sapi", met: "tumis", rich: 2, menit: 25,
    harga: "sedang",
    bahan: [
      ["daging giling", "100 gr"], ["buncis", "100 gr"], ["bawang putih", "2 siung"],
      ["bawang bombay", "1/4 buah"], ["saus tiram", "1 sdm"], ["kecap manis", "1 sdm"],
      ["merica", "1/4 sdt"], ["garam", "secukupnya"]
    ],
    langkah: [
      "Potong buncis serong tipis.",
      "Tumis bawang putih dan bombay sampai harum.",
      "Masukkan daging giling, masak sampai berubah warna.",
      "Masukkan buncis, saus tiram, kecap, dan merica.",
      "Masak sampai buncis matang tapi tetap renyah."
    ],
    kcal: 260, protg: 20, tags: ["praktis", "anak_friendly", "gurih"]
  }),
  m({
    id: "sapi-lada-garam",
    name: "Sapi Cah Lada Garam",
    cat: "lauk_utama", cui: "chinese_indo", pro: "daging_sapi", met: "tumis", rich: 2,
    menit: 30, harga: "agak_mahal",
    bahan: [
      ["daging sapi", "150 gr"], ["bawang putih", "4 siung"], ["daun bawang", "2 batang"],
      ["cabe rawit", "3 buah"], ["merica", "1/2 sdt"], ["tepung maizena", "2 sdm"],
      ["kaldu bubuk", "1/2 sdt"], ["garam", "secukupnya"]
    ],
    langkah: [
      "Iris daging tipis, balur maizena, goreng sebentar, tiriskan.",
      "Tumis bawang putih cincang dan cabe rawit iris sampai harum.",
      "Masukkan daging goreng, aduk cepat.",
      "Bumbui merica, garam, dan kaldu bubuk.",
      "Taburi daun bawang, angkat."
    ],
    kcal: 340, protg: 25, tags: ["gurih", "pedas"]
  }),
  m({
    id: "bistik-daging-jawa",
    name: "Bistik Daging Jawa",
    cat: "lauk_utama", pro: "daging_sapi", met: "rebus", rich: 2, kuah: true,
    menit: 45, sulit: "sedang", harga: "agak_mahal",
    bahan: [
      ["daging sapi", "150 gr"], ["kecap manis", "2 sdm"], ["bawang bombay", "1/2 buah"],
      ["bawang putih", "2 siung"], ["pala", "1/4 sdt"], ["merica", "1/4 sdt"],
      ["wortel", "1 buah"], ["kentang", "1 buah"]
    ],
    langkah: [
      "Iris tipis daging, pukul-pukul supaya empuk.",
      "Tumis bawang putih dan bombay sampai harum.",
      "Masukkan daging, kecap, pala, merica, dan air.",
      "Masak sampai daging empuk dan kuah agak kental.",
      "Sajikan dengan wortel dan kentang rebus."
    ],
    kcal: 330, protg: 25, tags: ["manis", "berkuah", "anak_friendly"]
  }),
  m({
    id: "sop-iga-sapi",
    name: "Sop Iga Sapi",
    cat: "sup", pro: "daging_sapi", met: "rebus", rich: 3, kuah: true, menit: 90,
    sulit: "butuh_niat", harga: "agak_mahal",
    bahan: [
      ["iga sapi", "250 gr"], ["wortel", "1 buah"], ["kentang", "1 buah"],
      ["daun bawang", "1 batang"], ["seledri", "1 batang"], ["bawang putih", "3 siung"],
      ["pala", "1/4 sdt"], ["merica", "1/2 sdt"], ["bawang bombay", "1/4 buah"]
    ],
    langkah: [
      "Rebus iga sampai empuk, buang buih kotorannya.",
      "Tumis bawang putih dan bombay, masukkan ke kaldu.",
      "Bumbui pala, merica, dan garam.",
      "Masukkan wortel dan kentang, masak sampai empuk.",
      "Taburi daun bawang dan seledri sebelum disajikan."
    ],
    kcal: 350, protg: 26, tags: ["berkuah", "hangat", "klasik", "weekend"]
  }),
  m({
    id: "rawon-daging",
    name: "Rawon Daging",
    cat: "sup", pro: "daging_sapi", met: "rebus", rich: 3, kuah: true, spice: 1,
    menit: 90, sulit: "butuh_niat", harga: "agak_mahal",
    bahan: [
      ["daging sapi", "200 gr"], ["kluwek", "4 buah"], ["bawang merah", "6 butir"],
      ["bawang putih", "3 siung"], ["kemiri", "3 butir"], ["kunyit", "1 cm"],
      ["serai", "1 batang"], ["daun jeruk", "3 lembar"], ["tauge", "50 gr"]
    ],
    langkah: [
      "Rebus daging sampai empuk, potong dadu, simpan kaldu.",
      "Haluskan bawang, kemiri, kunyit, dan kluwek.",
      "Tumis bumbu dengan serai dan daun jeruk sampai harum.",
      "Masukkan bumbu ke kaldu dan daging, masak sampai meresap.",
      "Sajikan dengan tauge pendek dan sambal."
    ],
    kcal: 360, protg: 27, tags: ["berkuah", "klasik", "hangat", "weekend"]
  }),
  m({
    id: "tongseng-daging",
    name: "Tongseng Daging",
    cat: "lauk_utama", pro: "daging_sapi", met: "santan", rich: 3, santan: true,
    kuah: true, spice: 2, menit: 45, sulit: "sedang", harga: "agak_mahal",
    bahan: [
      ["daging sapi", "150 gr"], ["santan kelapa", "100 ml"], ["kol", "50 gr"],
      ["tomat", "1 buah"], ["cabe rawit", "4 buah"], ["kecap manis", "2 sdm"],
      ["bawang merah", "4 butir"], ["bawang putih", "2 siung"], ["serai", "1 batang"]
    ],
    langkah: [
      "Iris tipis daging, tumis bumbu halus bawang sampai harum.",
      "Masukkan daging dan serai, aduk sampai berubah warna.",
      "Tuang santan dan air, masak sampai daging empuk.",
      "Masukkan kol, tomat, cabe rawit, dan kecap manis.",
      "Masak sebentar sampai kol layu, angkat."
    ],
    kcal: 380, protg: 25, tags: ["pedas", "manis", "bersantan", "berkuah"]
  }),
  m({
    id: "sambal-goreng-ati",
    name: "Sambal Goreng Ati Kentang",
    cat: "lauk_utama", pro: "ayam", met: "tumis", rich: 2, spice: 2, menit: 40,
    sulit: "sedang",
    bahan: [
      ["hati ampela", "2 pasang"], ["kentang", "1 buah"], ["cabe merah", "5 buah"],
      ["bawang merah", "5 butir"], ["bawang putih", "2 siung"], ["santan instan", "50 ml"],
      ["lengkuas", "2 cm"], ["daun salam", "2 lembar"], ["gula merah", "1 sdt"]
    ],
    langkah: [
      "Rebus hati ampela, potong dadu; goreng kentang dadu sampai keemasan.",
      "Haluskan cabe dan bawang, tumis dengan lengkuas dan daun salam.",
      "Masukkan hati ampela, aduk rata dengan bumbu.",
      "Tuang santan dan gula merah, masak sampai meresap.",
      "Masukkan kentang goreng, aduk perlahan, angkat."
    ],
    kcal: 300, protg: 20, tags: ["pedas", "klasik", "sambal_goreng_kentang"]
  }),
  m({
    id: "bakso-kuah",
    name: "Bakso Sapi Kuah",
    cat: "sup", pro: "daging_sapi", met: "rebus", rich: 2, kuah: true, menit: 30,
    harga: "sedang",
    bahan: [
      ["bakso sapi", "8 butir"], ["bihun", "50 gr"], ["sawi hijau", "2 lembar"],
      ["daun bawang", "1 batang"], ["bawang putih", "3 siung"], ["seledri", "1 batang"],
      ["merica", "1/4 sdt"], ["kaldu bubuk", "1/2 sdt"]
    ],
    langkah: [
      "Goreng bawang putih halus, masukkan ke air mendidih untuk kaldu.",
      "Bumbui merica, garam, dan kaldu bubuk.",
      "Masukkan bakso, masak sampai mengapung.",
      "Seduh bihun dan sawi hijau di mangkuk.",
      "Tuang kuah bakso, taburi daun bawang dan seledri."
    ],
    kcal: 280, protg: 18, tags: ["berkuah", "hangat", "anak_friendly", "praktis"]
  }),
  m({
    id: "krengsengan-daging",
    name: "Krengsengan Daging",
    cat: "lauk_utama", pro: "daging_sapi", met: "tumis", rich: 2, spice: 1, menit: 45,
    sulit: "sedang", harga: "agak_mahal",
    bahan: [
      ["daging sapi", "150 gr"], ["kecap manis", "3 sdm"], ["petis udang", "1 sdt"],
      ["bawang merah", "5 butir"], ["bawang putih", "3 siung"], ["cabe rawit", "4 buah"],
      ["tomat", "1 buah"], ["garam", "secukupnya"]
    ],
    langkah: [
      "Rebus daging sampai empuk, potong dadu.",
      "Haluskan bawang dan cabe, tumis sampai harum.",
      "Masukkan daging, kecap manis, dan petis.",
      "Tuang sedikit kaldu, masak sampai kuah mengental pekat.",
      "Masukkan potongan tomat, aduk, angkat."
    ],
    kcal: 350, protg: 26, tags: ["manis", "gurih", "klasik"]
  }),
  // ── Tempe & tahu ─────────────────────────────────────────────────────
  m({
    id: "orek-tempe-kering",
    name: "Orek Tempe Kering Manis",
    cat: "lauk_utama", pro: "tempe_tahu", met: "goreng", rich: 2, menit: 30,
    bahan: [
      ["tempe", "1 papan"], ["kecap manis", "3 sdm"], ["gula merah", "1 sdm"],
      ["cabe merah", "3 buah"], ["bawang merah", "4 butir"], ["bawang putih", "2 siung"],
      ["daun salam", "1 lembar"], ["lengkuas", "2 cm"]
    ],
    langkah: [
      "Potong tempe korek api, goreng sampai kering, sisihkan.",
      "Iris cabe dan bawang, tumis dengan daun salam dan lengkuas.",
      "Masukkan kecap manis dan gula merah, masak sampai berbusa.",
      "Masukkan tempe goreng, aduk cepat sampai terbalut.",
      "Masak sampai kering mengilap, angkat."
    ],
    kcal: 280, protg: 16, tags: ["manis", "kering", "ekonomis", "orek_tempe", "anak_friendly"]
  }),
  m({
    id: "tempe-orek-basah",
    name: "Tempe Orek Basah Pedas",
    cat: "lauk_utama", pro: "tempe_tahu", met: "tumis", rich: 2, spice: 2, menit: 25,
    bahan: [
      ["tempe", "1 papan"], ["cabe rawit", "6 buah"], ["kecap manis", "2 sdm"],
      ["bawang merah", "4 butir"], ["bawang putih", "2 siung"], ["daun salam", "1 lembar"],
      ["lengkuas", "1 cm"], ["garam", "secukupnya"]
    ],
    langkah: [
      "Potong tempe dadu kecil, goreng setengah kering.",
      "Iris cabe rawit dan bawang, tumis sampai harum.",
      "Masukkan tempe, kecap manis, dan sedikit air.",
      "Masak sampai bumbu meresap tapi masih sedikit basah.",
      "Koreksi rasa, angkat."
    ],
    kcal: 260, protg: 16, tags: ["pedas", "manis", "ekonomis", "orek_tempe"]
  }),
  m({
    id: "tempe-bacem",
    name: "Tempe Bacem",
    cat: "lauk_utama", pro: "tempe_tahu", met: "rebus", rich: 2, menit: 45,
    sulit: "sedang",
    bahan: [
      ["tempe", "1 papan"], ["gula merah", "2 sdm"], ["kecap manis", "1 sdm"],
      ["bawang putih", "3 siung"], ["ketumbar", "1/2 sdt"], ["lengkuas", "2 cm"],
      ["daun salam", "2 lembar"], ["asam jawa", "1 sdt"]
    ],
    langkah: [
      "Potong tempe kotak tebal.",
      "Haluskan bawang putih dan ketumbar.",
      "Rebus tempe dengan bumbu, gula merah, kecap, lengkuas, dan daun salam.",
      "Masak api kecil sampai air menyusut habis dan bumbu meresap.",
      "Goreng sebentar sebelum disajikan."
    ],
    kcal: 270, protg: 16, tags: ["manis", "klasik", "ekonomis", "tahu_tempe"]
  }),
  m({
    id: "tahu-bacem",
    name: "Tahu Bacem",
    cat: "lauk_utama", pro: "tempe_tahu", met: "rebus", rich: 2, menit: 45,
    sulit: "sedang",
    bahan: [
      ["tahu", "4 buah"], ["gula merah", "2 sdm"], ["kecap manis", "1 sdm"],
      ["bawang putih", "3 siung"], ["ketumbar", "1/2 sdt"], ["lengkuas", "2 cm"],
      ["daun salam", "2 lembar"], ["asam jawa", "1 sdt"]
    ],
    langkah: [
      "Siapkan tahu putih padat, potong segitiga.",
      "Haluskan bawang putih dan ketumbar.",
      "Rebus tahu dengan bumbu, gula merah, kecap, lengkuas, dan daun salam.",
      "Masak sampai air habis dan warna cokelat meresap.",
      "Goreng sebentar sebelum disajikan."
    ],
    kcal: 200, protg: 14, tags: ["manis", "klasik", "ekonomis", "tahu_tempe"]
  }),
  m({
    id: "tempe-mendoan",
    name: "Tempe Mendoan",
    cat: "pelengkap", pro: "tempe_tahu", met: "goreng", rich: 2, menit: 25,
    bahan: [
      ["tempe", "1 papan iris tipis"], ["tepung terigu", "5 sdm"], ["tepung beras", "2 sdm"],
      ["daun bawang", "2 batang"], ["ketumbar", "1/2 sdt"], ["bawang putih", "2 siung"],
      ["kunyit", "1/2 cm"], ["garam", "secukupnya"]
    ],
    langkah: [
      "Iris tempe tipis lebar.",
      "Buat adonan tepung dengan bawang putih, ketumbar, kunyit halus, dan air.",
      "Masukkan irisan daun bawang ke adonan.",
      "Celup tempe, goreng setengah matang supaya lemas khas mendoan.",
      "Angkat, sajikan dengan sambal kecap rawit."
    ],
    kcal: 250, protg: 12, tags: ["gurih", "ekonomis", "tahu_tempe"]
  }),
  m({
    id: "tahu-tempe-goreng",
    name: "Tahu Tempe Goreng",
    cat: "pelengkap", pro: "tempe_tahu", met: "goreng", rich: 2, menit: 20,
    bahan: [
      ["tahu", "3 buah"], ["tempe", "1/2 papan"], ["bawang putih", "3 siung"],
      ["ketumbar", "1/2 sdt"], ["garam", "secukupnya"], ["minyak goreng", "untuk menggoreng"]
    ],
    langkah: [
      "Potong tahu dan tempe sesuai selera.",
      "Haluskan bawang putih, ketumbar, dan garam, larutkan dengan sedikit air.",
      "Rendam tahu tempe dalam air bumbu 10 menit.",
      "Goreng dalam minyak panas sampai keemasan.",
      "Tiriskan, sajikan dengan cabe rawit."
    ],
    kcal: 230, protg: 15, tags: ["cepat", "ekonomis", "tahu_tempe", "anak_friendly"]
  }),
  m({
    id: "tahu-tek-praktis",
    name: "Tahu Bumbu Kecap",
    cat: "lauk_utama", pro: "tempe_tahu", met: "goreng", rich: 2, spice: 1, menit: 20,
    bahan: [
      ["tahu", "4 buah"], ["kecap manis", "2 sdm"], ["bawang merah", "3 butir"],
      ["cabe rawit", "3 buah"], ["bawang putih", "1 siung"], ["daun bawang", "1 batang"],
      ["garam", "secukupnya"]
    ],
    langkah: [
      "Goreng tahu sampai kecokelatan, potong dadu.",
      "Iris bawang merah, cabe rawit, dan bawang putih.",
      "Tumis bumbu iris sampai harum.",
      "Masukkan kecap manis dan sedikit air.",
      "Masukkan tahu, aduk, taburi daun bawang, angkat."
    ],
    kcal: 210, protg: 14, tags: ["cepat", "manis", "ekonomis", "tahu_tempe"]
  }),
  m({
    id: "tahu-cabe-garam",
    name: "Tahu Cabe Garam",
    cat: "pelengkap", cui: "chinese_indo", pro: "tempe_tahu", met: "goreng", rich: 2,
    spice: 1, menit: 25,
    bahan: [
      ["tahu", "4 buah"], ["tepung maizena", "3 sdm"], ["bawang putih", "3 siung"],
      ["cabe rawit", "3 buah"], ["daun bawang", "1 batang"], ["merica", "1/4 sdt"],
      ["garam", "secukupnya"]
    ],
    langkah: [
      "Potong tahu dadu, balur maizena, goreng garing.",
      "Cincang bawang putih dan cabe rawit.",
      "Tumis bawang putih dan cabe sampai harum.",
      "Masukkan tahu goreng, bumbui merica dan garam.",
      "Taburi daun bawang, aduk cepat, angkat."
    ],
    kcal: 240, protg: 14, tags: ["pedas", "gurih", "ekonomis", "tahu_tempe"]
  }),
  m({
    id: "tempe-penyet",
    name: "Tempe Penyet Sambal",
    cat: "lauk_utama", pro: "tempe_tahu", met: "goreng", rich: 2, spice: 2, sambal: true,
    menit: 25,
    bahan: [
      ["tempe", "1 papan"], ["cabe rawit", "6 buah"], ["cabe merah", "2 buah"],
      ["terasi", "1/2 sdt"], ["tomat", "1/2 buah"], ["bawang putih", "1 siung"],
      ["garam", "secukupnya"], ["gula pasir", "1/4 sdt"]
    ],
    langkah: [
      "Potong tempe, goreng sampai keemasan.",
      "Ulek cabe, terasi bakar, bawang putih, dan tomat.",
      "Bumbui sambal dengan garam dan gula.",
      "Penyet tempe goreng di atas sambal.",
      "Sajikan langsung dari cobek."
    ],
    kcal: 260, protg: 16, tags: ["pedas", "ekonomis", "tahu_tempe"]
  }),
  m({
    id: "kering-tempe-teri",
    name: "Kering Tempe Teri Kacang",
    cat: "lauk_utama", pro: "tempe_tahu", met: "goreng", rich: 2, spice: 1, menit: 40,
    sulit: "sedang",
    bahan: [
      ["tempe", "1 papan"], ["ikan teri", "30 gr"], ["kacang tanah", "2 sdm"],
      ["gula merah", "2 sdm"], ["cabe merah", "3 buah"], ["bawang merah", "4 butir"],
      ["bawang putih", "2 siung"], ["asam jawa", "1/2 sdt"]
    ],
    langkah: [
      "Potong tempe korek api, goreng kering; goreng teri dan kacang terpisah.",
      "Haluskan cabe dan bawang, tumis sampai harum.",
      "Masukkan gula merah dan asam jawa, masak sampai mengkaramel.",
      "Masukkan tempe, teri, dan kacang.",
      "Aduk cepat sampai terbalut dan kering, angkat."
    ],
    kcal: 320, protg: 18, tags: ["manis", "kering", "ekonomis", "teri_kacang"]
  }),
  m({
    id: "tahu-telur-bumbu-kacang",
    name: "Tahu Telur Bumbu Kacang",
    cat: "lauk_utama", pro: "tempe_tahu", met: "goreng", rich: 2, spice: 1, menit: 30,
    bahan: [
      ["tahu", "3 buah"], ["telur ayam", "2 butir"], ["kacang tanah", "3 sdm"],
      ["kecap manis", "2 sdm"], ["cabe rawit", "2 buah"], ["bawang putih", "1 siung"],
      ["tauge", "50 gr"], ["seledri", "1 batang"]
    ],
    langkah: [
      "Potong tahu dadu, campur dengan telur kocok bergaram.",
      "Goreng adonan tahu telur jadi dadar tebal, tiriskan.",
      "Ulek kacang goreng, cabe, dan bawang putih; encerkan dengan kecap dan air.",
      "Tata tahu telur dengan tauge segar.",
      "Siram bumbu kacang, taburi seledri."
    ],
    kcal: 340, protg: 20, tags: ["gurih", "ekonomis", "tahu_tempe"]
  }),
  m({
    id: "sapo-tahu",
    name: "Sapo Tahu Sayur",
    cat: "lauk_utama", cui: "chinese_indo", pro: "tempe_tahu", met: "tumis", rich: 2,
    kuah: true, menit: 30, sulit: "sedang", harga: "sedang",
    bahan: [
      ["tahu kuning", "2 buah"], ["telur puyuh", "6 butir"], ["sawi hijau", "3 lembar"],
      ["wortel", "1/2 buah"], ["bawang putih", "3 siung"], ["saus tiram", "1 sdm"],
      ["tepung maizena", "1 sdt"], ["daun bawang", "1 batang"]
    ],
    langkah: [
      "Goreng tahu sebentar, rebus telur puyuh, kupas.",
      "Tumis bawang putih sampai harum.",
      "Masukkan wortel dan sawi, tuang air dan saus tiram.",
      "Masukkan tahu dan telur puyuh, didihkan.",
      "Kentalkan dengan larutan maizena, taburi daun bawang."
    ],
    kcal: 280, protg: 18, tags: ["berkuah", "gurih", "anak_friendly"]
  }),
  m({
    id: "pepes-tahu",
    name: "Pepes Tahu Kemangi",
    cat: "lauk_utama", pro: "tempe_tahu", met: "kukus", rich: 1, spice: 1, menit: 45,
    sulit: "sedang",
    bahan: [
      ["tahu", "3 buah"], ["telur ayam", "1 butir"], ["kemangi", "1 genggam"],
      ["cabe rawit", "4 buah"], ["bawang merah", "4 butir"], ["bawang putih", "2 siung"],
      ["kemiri", "2 butir"], ["daun salam", "2 lembar"]
    ],
    langkah: [
      "Hancurkan tahu, campur dengan telur dan bumbu halus.",
      "Masukkan kemangi dan cabe rawit iris.",
      "Bungkus adonan di daun pisang dengan daun salam.",
      "Kukus sekitar 25 menit sampai set.",
      "Bakar sebentar bungkusan supaya harum."
    ],
    kcal: 190, protg: 14, tags: ["seger", "ekonomis", "tahu_tempe"]
  }),
  m({
    id: "oncom-tumis-kemangi",
    name: "Tumis Oncom Kemangi",
    cat: "lauk_utama", pro: "tempe_tahu", met: "tumis", rich: 1, spice: 2, menit: 20,
    bahan: [
      ["oncom", "150 gr"], ["kemangi", "1 genggam"], ["cabe rawit", "5 buah"],
      ["bawang merah", "4 butir"], ["bawang putih", "2 siung"], ["kencur", "1 cm"],
      ["daun salam", "1 lembar"], ["garam", "secukupnya"]
    ],
    langkah: [
      "Hancurkan oncom kasar dengan tangan.",
      "Iris cabe dan bawang, tumis dengan kencur dan daun salam.",
      "Masukkan oncom, aduk sampai matang.",
      "Bumbui garam, masak sampai agak kering.",
      "Matikan api, masukkan kemangi, aduk sebentar."
    ],
    kcal: 180, protg: 13, tags: ["pedas", "seger", "ekonomis"]
  }),
  m({
    id: "tempe-mendol",
    name: "Perkedel Tempe (Mendol)",
    cat: "pelengkap", pro: "tempe_tahu", met: "goreng", rich: 2, spice: 1, menit: 30,
    bahan: [
      ["tempe", "1 papan"], ["cabe rawit", "3 buah"], ["bawang merah", "3 butir"],
      ["bawang putih", "2 siung"], ["kencur", "1 cm"], ["ketumbar", "1/2 sdt"],
      ["daun jeruk", "2 lembar"], ["garam", "secukupnya"]
    ],
    langkah: [
      "Kukus tempe sebentar, lalu haluskan kasar.",
      "Ulek cabe, bawang, kencur, dan ketumbar.",
      "Campur tempe dengan bumbu dan irisan daun jeruk.",
      "Bentuk lonjong padat.",
      "Goreng sampai kecokelatan garing di luar."
    ],
    kcal: 220, protg: 14, tags: ["gurih", "ekonomis", "tahu_tempe"]
  }),
  m({
    id: "tahu-gejrot-praktis",
    name: "Tahu Gejrot",
    cat: "pelengkap", pro: "tempe_tahu", met: "goreng", rich: 1, spice: 2, segar: true,
    menit: 20,
    bahan: [
      ["tahu kulit", "6 buah"], ["gula merah", "2 sdm"], ["asam jawa", "1/2 sdt"],
      ["cabe rawit", "4 buah"], ["bawang merah", "3 butir"], ["bawang putih", "1 siung"],
      ["kecap manis", "1 sdm"], ["garam", "secukupnya"]
    ],
    langkah: [
      "Goreng tahu kulit sampai kering, potong-potong.",
      "Rebus gula merah, asam jawa, dan air jadi kuah, saring.",
      "Ulek cabe, bawang merah, dan bawang putih.",
      "Campur ulekan ke kuah gula asam, tambah kecap.",
      "Siram tahu dengan kuah gejrot."
    ],
    kcal: 180, protg: 11, tags: ["pedas", "seger", "manis", "ekonomis"]
  }),
  m({
    id: "botok-tempe",
    name: "Botok Tempe Teri",
    cat: "lauk_utama", pro: "tempe_tahu", met: "kukus", rich: 2, spice: 1, menit: 50,
    sulit: "sedang",
    bahan: [
      ["tempe", "1/2 papan"], ["kelapa parut", "50 gr"], ["ikan teri", "20 gr"],
      ["cabe rawit", "5 buah"], ["bawang merah", "4 butir"], ["bawang putih", "2 siung"],
      ["daun salam", "2 lembar"], ["petai", "1/2 papan"]
    ],
    langkah: [
      "Hancurkan tempe, campur dengan kelapa parut dan teri.",
      "Ulek bawang dan cabe, campurkan ke adonan.",
      "Tambahkan petai iris dan daun salam.",
      "Bungkus di daun pisang membentuk botok.",
      "Kukus sekitar 30 menit sampai matang."
    ],
    kcal: 260, protg: 16, tags: ["pedas", "gurih", "ekonomis"]
  })
];
