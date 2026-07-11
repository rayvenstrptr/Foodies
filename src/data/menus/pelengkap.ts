import type { Menu } from "../types";
import { m } from "../menuHelpers";

/** Pelengkap — gorengan kecil, sambal, acar, perkedel, teri. Baca TAGGING.md. */
export const PELENGKAP: Menu[] = [
  m({
    id: "sambal-terasi",
    name: "Sambal Terasi Matang",
    cat: "pelengkap", pro: "none", met: "goreng", rich: 1, spice: 3, menit: 15,
    bahan: [
      ["cabe merah", "6 buah"], ["cabe rawit", "6 buah"], ["terasi", "1 sdt"],
      ["tomat", "1 buah"], ["bawang merah", "3 butir"], ["gula merah", "1/2 sdt"],
      ["garam", "secukupnya"]
    ],
    langkah: [
      "Goreng sebentar cabe, bawang, dan tomat.",
      "Bakar atau goreng terasi sampai harum.",
      "Ulek semua bahan dengan garam dan gula merah.",
      "Tumis sambal sampai matang dan berminyak.",
      "Koreksi rasa, angkat."
    ],
    kcal: 60, protg: 2, tags: ["pedas", "klasik", "ekonomis", "sambal"]
  }),
  m({
    id: "sambal-bawang",
    name: "Sambal Bawang",
    cat: "pelengkap", pro: "none", met: "goreng", rich: 1, spice: 3, menit: 10,
    bahan: [
      ["cabe rawit", "15 buah"], ["bawang putih", "4 siung"], ["bawang merah", "3 butir"],
      ["garam", "secukupnya"], ["minyak goreng", "3 sdm"]
    ],
    langkah: [
      "Goreng sebentar cabe rawit, bawang putih, dan bawang merah.",
      "Ulek kasar dengan garam.",
      "Panaskan minyak sampai betul-betul panas.",
      "Siram minyak panas ke atas sambal.",
      "Aduk rata, sajikan."
    ],
    kcal: 70, protg: 1, tags: ["pedas", "ekonomis", "sambal"]
  }),
  m({
    id: "sambal-tomat",
    name: "Sambal Tomat",
    cat: "pelengkap", pro: "none", met: "goreng", rich: 1, spice: 2, menit: 15,
    bahan: [
      ["cabe merah", "5 buah"], ["cabe rawit", "5 buah"], ["tomat", "2 buah"],
      ["bawang merah", "4 butir"], ["bawang putih", "2 siung"], ["gula pasir", "1/2 sdt"],
      ["garam", "secukupnya"]
    ],
    langkah: [
      "Goreng cabe, tomat, dan bawang sampai layu.",
      "Ulek dengan garam dan gula.",
      "Tumis kembali sampai matang berminyak.",
      "Koreksi rasa asam manis pedasnya.",
      "Angkat, sajikan."
    ],
    kcal: 55, protg: 2, tags: ["pedas", "ekonomis", "sambal"]
  }),
  m({
    id: "sambal-kecap",
    name: "Sambal Kecap",
    cat: "pelengkap", pro: "none", met: "rebus", rich: 1, spice: 2, segar: true, menit: 5,
    bahan: [
      ["cabe rawit", "8 buah"], ["bawang merah", "3 butir"], ["kecap manis", "3 sdm"],
      ["tomat", "1/2 buah"], ["jeruk limau", "1 buah"]
    ],
    langkah: [
      "Iris halus cabe rawit dan bawang merah.",
      "Iris kecil tomat.",
      "Campur dengan kecap manis.",
      "Beri perasan jeruk limau.",
      "Aduk rata, sajikan sebagai cocolan."
    ],
    kcal: 50, protg: 1, tags: ["pedas", "manis", "seger", "cepat", "sambal"]
  }),
  m({
    id: "sambal-ijo",
    name: "Sambal Ijo Padang",
    cat: "pelengkap", pro: "none", met: "kukus", rich: 1, spice: 2, menit: 20,
    bahan: [
      ["cabe hijau", "10 buah"], ["tomat hijau", "2 buah"], ["bawang merah", "5 butir"],
      ["bawang putih", "2 siung"], ["garam", "secukupnya"], ["jeruk nipis", "1/2 buah"]
    ],
    langkah: [
      "Kukus cabe hijau, tomat hijau, dan bawang sampai layu.",
      "Ulek kasar semua dengan garam.",
      "Tumis sambal sampai matang harum.",
      "Beri perasan jeruk nipis.",
      "Aduk, angkat."
    ],
    kcal: 55, protg: 2, tags: ["pedas", "klasik", "ekonomis", "sambal"]
  }),
  m({
    id: "sambal-matah",
    name: "Sambal Matah",
    cat: "pelengkap", pro: "none", met: "rebus", rich: 1, spice: 3, segar: true, menit: 15,
    bahan: [
      ["bawang merah", "8 butir"], ["cabe rawit", "10 buah"], ["serai", "2 batang"],
      ["daun jeruk", "4 lembar"], ["terasi", "1/4 sdt"], ["jeruk limau", "1 buah"],
      ["garam", "secukupnya"], ["minyak goreng", "3 sdm"]
    ],
    langkah: [
      "Iris tipis bawang merah, cabe rawit, serai, dan daun jeruk.",
      "Campur dengan garam dan terasi goreng halus.",
      "Panaskan minyak sampai panas, siramkan ke bahan.",
      "Beri perasan jeruk limau.",
      "Aduk rata, sajikan segar."
    ],
    kcal: 80, protg: 1, tags: ["pedas", "seger", "sambal"]
  }),
  m({
    id: "perkedel-kentang",
    name: "Perkedel Kentang",
    cat: "pelengkap", pro: "none", met: "goreng", rich: 2, menit: 35,
    bahan: [
      ["kentang", "3 buah"], ["telur ayam", "1 butir"], ["daun bawang", "1 batang"],
      ["seledri", "1 batang"], ["bawang merah", "3 butir"], ["bawang putih", "2 siung"],
      ["pala", "1/4 sdt"], ["merica", "1/4 sdt"]
    ],
    langkah: [
      "Kukus atau goreng kentang, haluskan.",
      "Goreng bawang merah dan bawang putih, campur ke kentang.",
      "Tambah daun bawang, seledri, pala, merica, dan garam.",
      "Bentuk bulat pipih, celup ke kuning telur.",
      "Goreng sampai keemasan garing."
    ],
    kcal: 180, protg: 5, tags: ["gurih", "anak_friendly", "klasik", "perkedel"]
  }),
  m({
    id: "perkedel-jagung",
    name: "Perkedel Jagung (Bakwan Jagung)",
    cat: "pelengkap", pro: "none", met: "goreng", rich: 2, menit: 25,
    bahan: [
      ["jagung manis", "2 buah"], ["tepung terigu", "4 sdm"], ["telur ayam", "1 butir"],
      ["daun bawang", "1 batang"], ["bawang putih", "2 siung"], ["ketumbar", "1/2 sdt"],
      ["garam", "secukupnya"]
    ],
    langkah: [
      "Pipil jagung, memarkan sebagian.",
      "Haluskan bawang putih dan ketumbar.",
      "Campur jagung, tepung, telur, bumbu, dan daun bawang.",
      "Ambil sesendok adonan, goreng dalam minyak panas.",
      "Goreng sampai keemasan garing, tiriskan."
    ],
    kcal: 160, protg: 4, tags: ["gurih", "anak_friendly", "ekonomis", "perkedel"]
  }),
  m({
    id: "bakwan-sayur",
    name: "Bakwan Sayur",
    cat: "pelengkap", pro: "none", met: "goreng", rich: 2, menit: 25,
    bahan: [
      ["kol", "50 gr"], ["wortel", "1 buah"], ["tauge", "50 gr"], ["tepung terigu", "6 sdm"],
      ["daun bawang", "1 batang"], ["bawang putih", "2 siung"], ["ketumbar", "1/2 sdt"],
      ["garam", "secukupnya"]
    ],
    langkah: [
      "Iris halus kol, wortel, dan daun bawang; siapkan tauge.",
      "Buat adonan tepung dengan bawang putih dan ketumbar halus.",
      "Campur sayuran ke adonan sampai rata.",
      "Goreng sesendok demi sesendok dalam minyak panas.",
      "Goreng sampai keemasan, tiriskan."
    ],
    kcal: 170, protg: 4, tags: ["gurih", "anak_friendly", "ekonomis"]
  }),
  m({
    id: "tempe-goreng-tepung",
    name: "Tempe Goreng Tepung",
    cat: "pelengkap", pro: "tempe_tahu", met: "goreng", rich: 2, menit: 20,
    bahan: [
      ["tempe", "1 papan"], ["tepung terigu", "5 sdm"], ["bawang putih", "2 siung"],
      ["ketumbar", "1/2 sdt"], ["kunyit", "1/2 cm"], ["garam", "secukupnya"]
    ],
    langkah: [
      "Iris tempe tipis.",
      "Buat adonan tepung dengan bawang putih, ketumbar, dan kunyit halus.",
      "Celup tempe ke adonan.",
      "Goreng dalam minyak panas sampai keemasan garing.",
      "Tiriskan, sajikan hangat."
    ],
    kcal: 200, protg: 12, tags: ["gurih", "ekonomis", "tahu_tempe", "anak_friendly"]
  }),
  m({
    id: "tahu-isi",
    name: "Tahu Isi Sayur",
    cat: "pelengkap", pro: "tempe_tahu", met: "goreng", rich: 2, menit: 35,
    sulit: "sedang",
    bahan: [
      ["tahu", "5 buah"], ["wortel", "1 buah"], ["tauge", "50 gr"], ["kol", "50 gr"],
      ["tepung terigu", "6 sdm"], ["bawang putih", "2 siung"], ["ketumbar", "1/2 sdt"],
      ["garam", "secukupnya"]
    ],
    langkah: [
      "Goreng tahu setengah matang, sayat, keluarkan sebagian isi.",
      "Tumis wortel, kol, dan tauge dengan bumbu jadi isian.",
      "Isi tahu dengan tumisan sayur.",
      "Celup ke adonan tepung berbumbu.",
      "Goreng sampai keemasan garing."
    ],
    kcal: 220, protg: 12, tags: ["gurih", "ekonomis", "tahu_tempe", "anak_friendly"]
  }),
  m({
    id: "teri-kacang-goreng",
    name: "Teri Kacang Goreng",
    cat: "pelengkap", pro: "ikan", met: "goreng", rich: 2, menit: 20,
    bahan: [
      ["ikan teri", "50 gr"], ["kacang tanah", "100 gr"], ["bawang putih", "2 siung"],
      ["daun jeruk", "3 lembar"], ["garam", "secukupnya"], ["minyak goreng", "untuk menggoreng"]
    ],
    langkah: [
      "Goreng kacang tanah sampai matang, tiriskan.",
      "Goreng teri sampai garing.",
      "Goreng irisan bawang putih dan daun jeruk sampai harum.",
      "Campur teri, kacang, dan bawang goreng.",
      "Bumbui garam, aduk, sajikan."
    ],
    kcal: 260, protg: 14, tags: ["gurih", "kering", "ekonomis", "teri_kacang"]
  }),
  m({
    id: "kering-tempe",
    name: "Kering Tempe Manis",
    cat: "pelengkap", pro: "tempe_tahu", met: "goreng", rich: 2, spice: 1, menit: 35,
    sulit: "sedang",
    bahan: [
      ["tempe", "1 papan"], ["gula merah", "2 sdm"], ["cabe merah", "3 buah"],
      ["bawang merah", "4 butir"], ["bawang putih", "2 siung"], ["asam jawa", "1/2 sdt"],
      ["daun jeruk", "2 lembar"], ["garam", "secukupnya"]
    ],
    langkah: [
      "Iris tempe korek api, goreng sampai kering, tiriskan.",
      "Haluskan cabe dan bawang, tumis dengan daun jeruk.",
      "Masukkan gula merah dan asam jawa, masak sampai mengkaramel.",
      "Masukkan tempe goreng, aduk cepat.",
      "Masak sampai terbalut dan kering mengilap, angkat."
    ],
    kcal: 280, protg: 15, tags: ["manis", "kering", "ekonomis", "orek_tempe"]
  }),
  m({
    id: "kentang-mustofa",
    name: "Kentang Mustofa",
    cat: "pelengkap", pro: "none", met: "goreng", rich: 2, spice: 1, menit: 40,
    sulit: "sedang",
    bahan: [
      ["kentang", "3 buah"], ["cabe merah", "3 buah"], ["bawang merah", "4 butir"],
      ["bawang putih", "2 siung"], ["gula merah", "1 sdm"], ["daun jeruk", "2 lembar"],
      ["asam jawa", "1/2 sdt"], ["garam", "secukupnya"]
    ],
    langkah: [
      "Serut kentang halus memanjang, rendam air, tiriskan kering.",
      "Goreng kentang sampai kering keemasan, tiriskan.",
      "Haluskan cabe dan bawang, tumis dengan daun jeruk.",
      "Masukkan gula merah dan asam, masak sampai mengkaramel.",
      "Masukkan kentang goreng, aduk sampai terbalut kering."
    ],
    kcal: 240, protg: 3, tags: ["pedas", "manis", "kering", "ekonomis"]
  }),
  m({
    id: "acar-timun-wortel",
    name: "Acar Timun Wortel",
    cat: "pelengkap", pro: "none", met: "rebus", rich: 1, segar: true, menit: 15,
    bahan: [
      ["timun", "1 buah"], ["wortel", "1 buah"], ["cabe rawit", "5 buah utuh"],
      ["bawang merah", "3 butir"], ["cuka", "1 sdm"], ["gula pasir", "1 sdm"],
      ["garam", "secukupnya"]
    ],
    langkah: [
      "Potong dadu timun dan wortel.",
      "Iris bawang merah, biarkan cabe rawit utuh.",
      "Larutkan cuka, gula, dan garam dengan sedikit air matang.",
      "Campur sayuran dengan larutan acar.",
      "Diamkan sebentar sebelum disajikan."
    ],
    kcal: 45, protg: 1, tags: ["seger", "cepat", "ekonomis", "acar"]
  }),
  m({
    id: "rempeyek-kacang",
    name: "Rempeyek Kacang",
    cat: "pelengkap", pro: "none", met: "goreng", rich: 2, menit: 40, sulit: "sedang",
    bahan: [
      ["tepung beras", "150 gr"], ["kacang tanah", "100 gr"], ["kemiri", "2 butir"],
      ["ketumbar", "1/2 sdt"], ["bawang putih", "2 siung"], ["daun jeruk", "3 lembar"],
      ["kelapa parut", "2 sdm"], ["garam", "secukupnya"]
    ],
    langkah: [
      "Haluskan kemiri, ketumbar, dan bawang putih.",
      "Campur tepung beras, bumbu, santan encer, dan irisan daun jeruk.",
      "Masukkan kacang tanah cincang kasar.",
      "Tuang tipis adonan di pinggir wajan panas.",
      "Goreng sampai garing keemasan, tiriskan."
    ],
    kcal: 220, protg: 6, tags: ["gurih", "kering", "ekonomis"]
  }),
  m({
    id: "kerupuk-udang",
    name: "Kerupuk Udang Goreng",
    cat: "pelengkap", pro: "none", met: "goreng", rich: 1, menit: 10,
    bahan: [
      ["kerupuk", "10 keping"], ["minyak goreng", "untuk menggoreng"], ["garam", "sejumput"]
    ],
    langkah: [
      "Panaskan minyak banyak dengan api sedang.",
      "Pastikan kerupuk kering supaya mengembang sempurna.",
      "Goreng kerupuk satu-satu sampai mengembang.",
      "Balik cepat supaya matang merata.",
      "Tiriskan, simpan di wadah kedap udara."
    ],
    kcal: 120, protg: 2, tags: ["kering", "cepat", "ekonomis", "anak_friendly"]
  }),
  m({
    id: "emping-goreng",
    name: "Emping Melinjo Goreng",
    cat: "pelengkap", pro: "none", met: "goreng", rich: 1, menit: 10,
    bahan: [
      ["emping", "100 gr"], ["minyak goreng", "untuk menggoreng"], ["garam", "sejumput"]
    ],
    langkah: [
      "Panaskan minyak banyak sampai panas.",
      "Goreng emping cepat sampai mengembang dan keemasan.",
      "Jangan sampai gosong, emping cepat matang.",
      "Angkat dan tiriskan.",
      "Taburi sedikit garam bila suka."
    ],
    kcal: 130, protg: 3, tags: ["kering", "cepat", "ekonomis"]
  }),
  m({
    id: "telur-ceplok-balado",
    name: "Telur Puyuh Balado",
    cat: "pelengkap", pro: "telur", met: "goreng", rich: 2, spice: 2, menit: 25,
    bahan: [
      ["telur puyuh", "15 butir"], ["cabe merah", "5 buah"], ["bawang merah", "4 butir"],
      ["tomat", "1/2 buah"], ["gula pasir", "1/2 sdt"], ["garam", "secukupnya"]
    ],
    langkah: [
      "Rebus telur puyuh, kupas, goreng sebentar.",
      "Ulek kasar cabe, bawang, dan tomat.",
      "Tumis sambal sampai matang berminyak.",
      "Bumbui garam dan gula.",
      "Masukkan telur puyuh, aduk sampai terbalut sambal."
    ],
    kcal: 190, protg: 12, tags: ["pedas", "anak_friendly", "lauk_telur"]
  }),
  m({
    id: "orek-tahu-kering",
    name: "Orek Tahu Kering",
    cat: "pelengkap", pro: "tempe_tahu", met: "goreng", rich: 2, menit: 30,
    bahan: [
      ["tahu", "4 buah"], ["kecap manis", "2 sdm"], ["cabe merah", "2 buah"],
      ["bawang merah", "4 butir"], ["bawang putih", "2 siung"], ["daun salam", "1 lembar"],
      ["gula merah", "1/2 sdt"]
    ],
    langkah: [
      "Potong tahu dadu kecil, goreng sampai kering.",
      "Iris cabe dan bawang, tumis dengan daun salam.",
      "Masukkan kecap manis dan gula merah.",
      "Masukkan tahu goreng, aduk cepat.",
      "Masak sampai terbalut dan agak kering, angkat."
    ],
    kcal: 200, protg: 13, tags: ["manis", "ekonomis", "tahu_tempe"]
  }),
  m({
    id: "ikan-asin-goreng",
    name: "Ikan Asin Goreng Cabe",
    cat: "pelengkap", pro: "ikan", met: "goreng", rich: 2, spice: 2, menit: 15,
    bahan: [
      ["ikan asin", "80 gr"], ["cabe merah", "3 buah"], ["cabe rawit", "3 buah"],
      ["bawang merah", "3 butir"], ["tomat", "1/2 buah"], ["minyak goreng", "3 sdm"]
    ],
    langkah: [
      "Rendam ikan asin sebentar untuk kurangi asin, tiriskan.",
      "Goreng ikan asin sampai garing, sisihkan.",
      "Iris cabe dan bawang, tumis sampai harum.",
      "Masukkan tomat, aduk sampai layu.",
      "Masukkan ikan asin, aduk cepat, angkat."
    ],
    kcal: 180, protg: 15, tags: ["pedas", "gurih", "ekonomis", "ikan_asin"]
  }),
  m({
    id: "serundeng-kelapa",
    name: "Serundeng Kelapa",
    cat: "pelengkap", pro: "none", met: "goreng", rich: 1, menit: 30, sulit: "sedang",
    bahan: [
      ["kelapa parut", "150 gr"], ["ketumbar", "1 sdt"], ["bawang putih", "3 siung"],
      ["bawang merah", "3 butir"], ["gula merah", "1 sdm"], ["lengkuas", "2 cm"],
      ["daun salam", "2 lembar"], ["garam", "secukupnya"]
    ],
    langkah: [
      "Haluskan ketumbar, bawang putih, dan bawang merah.",
      "Sangrai kelapa parut dengan bumbu, lengkuas, dan daun salam.",
      "Aduk terus dengan api kecil.",
      "Masukkan gula merah dan garam.",
      "Sangrai sampai kering keemasan, angkat."
    ],
    kcal: 190, protg: 3, tags: ["gurih", "kering", "manis", "serundeng"]
  }),
  m({
    id: "telur-dadar-kering",
    name: "Telur Dadar Suwir Kering",
    cat: "pelengkap", pro: "telur", met: "goreng", rich: 2, menit: 15,
    bahan: [
      ["telur ayam", "2 butir"], ["bawang merah", "3 butir"], ["cabe merah", "1 buah"],
      ["daun bawang", "1 batang"], ["garam", "secukupnya"], ["minyak goreng", "3 sdm"]
    ],
    langkah: [
      "Kocok telur dengan garam.",
      "Buat dadar tipis-tipis di teflon.",
      "Gulung dan iris tipis dadar.",
      "Tumis bawang dan cabe, masukkan suwiran dadar.",
      "Aduk sampai agak kering, taburi daun bawang."
    ],
    kcal: 180, protg: 11, tags: ["gurih", "ekonomis", "lauk_telur"]
  }),
  m({
    id: "sambal-goreng-kentang",
    name: "Sambal Goreng Kentang",
    cat: "pelengkap", pro: "none", met: "goreng", rich: 2, spice: 2, menit: 30,
    bahan: [
      ["kentang", "3 buah"], ["cabe merah", "5 buah"], ["bawang merah", "5 butir"],
      ["bawang putih", "2 siung"], ["gula merah", "1 sdt"], ["daun salam", "1 lembar"],
      ["lengkuas", "1 cm"], ["garam", "secukupnya"]
    ],
    langkah: [
      "Potong dadu kecil kentang, goreng kering keemasan.",
      "Ulek cabe dan bawang, tumis dengan daun salam dan lengkuas.",
      "Masukkan gula merah, masak sampai matang.",
      "Masukkan kentang goreng, aduk cepat.",
      "Masak sampai terbalut sambal, angkat."
    ],
    kcal: 210, protg: 3, tags: ["pedas", "kering", "ekonomis", "sambal_goreng_kentang"]
  }),
  m({
    id: "tumis-teri-tempe",
    name: "Tumis Teri Tempe Kacang",
    cat: "pelengkap", pro: "tempe_tahu", met: "goreng", rich: 2, spice: 1, menit: 30,
    bahan: [
      ["tempe", "1/2 papan"], ["ikan teri", "40 gr"], ["kacang tanah", "50 gr"],
      ["cabe merah", "3 buah"], ["bawang merah", "4 butir"], ["kecap manis", "1 sdm"],
      ["gula merah", "1/2 sdt"], ["daun jeruk", "2 lembar"]
    ],
    langkah: [
      "Potong dadu kecil tempe, goreng kering.",
      "Goreng teri dan kacang sampai garing.",
      "Iris cabe dan bawang, tumis dengan daun jeruk.",
      "Masukkan kecap dan gula merah, masak sampai berbusa.",
      "Masukkan tempe, teri, dan kacang, aduk sampai kering."
    ],
    kcal: 280, protg: 16, tags: ["manis", "kering", "ekonomis", "teri_kacang"]
  }),
  m({
    id: "risoles-ragout-sederhana",
    name: "Risoles Ragout Sederhana",
    cat: "pelengkap", cui: "western_simple", pro: "none", met: "goreng", rich: 2,
    menit: 60, sulit: "butuh_niat", harga: "sedang",
    bahan: [
      ["tepung terigu", "150 gr"], ["telur ayam", "2 butir"], ["wortel", "1 buah"],
      ["kentang", "1 buah"], ["susu cair", "100 ml"], ["tepung roti", "100 gr"],
      ["daun bawang", "1 batang"], ["merica", "1/4 sdt"]
    ],
    langkah: [
      "Buat kulit dadar tipis dari terigu, telur, dan air.",
      "Tumis wortel dan kentang dadu, tuang susu, kentalkan jadi ragout.",
      "Isi kulit dengan ragout, lipat amplop.",
      "Celup ke telur, gulingkan ke tepung roti.",
      "Goreng sampai keemasan garing."
    ],
    kcal: 240, protg: 7, tags: ["gurih", "anak_friendly"]
  }),
  m({
    id: "kentang-goreng-ayam",
    name: "Nugget Ayam Homemade",
    cat: "pelengkap", cui: "western_simple", pro: "ayam", met: "goreng", rich: 2,
    menit: 50, sulit: "sedang", harga: "sedang",
    bahan: [
      ["dada ayam", "150 gr"], ["roti tawar", "2 lembar"], ["telur ayam", "1 butir"],
      ["tepung roti", "100 gr"], ["bawang putih", "2 siung"], ["keju parut", "2 sdm"],
      ["merica", "1/4 sdt"], ["garam", "secukupnya"]
    ],
    langkah: [
      "Haluskan ayam dengan roti tawar, bawang putih, keju, dan bumbu.",
      "Ratakan adonan di loyang, kukus sampai set.",
      "Potong-potong sesuai selera.",
      "Celup ke telur, balur tepung roti.",
      "Goreng sampai keemasan, sajikan dengan saus."
    ],
    kcal: 260, protg: 18, tags: ["anak_friendly", "gurih"]
  }),
  m({
    id: "sambal-tempe-penyet",
    name: "Sambal Korek",
    cat: "pelengkap", pro: "none", met: "goreng", rich: 1, spice: 3, menit: 10,
    bahan: [
      ["cabe rawit", "12 buah"], ["bawang putih", "3 siung"], ["garam", "secukupnya"],
      ["gula pasir", "1/4 sdt"], ["minyak goreng", "3 sdm"]
    ],
    langkah: [
      "Ulek cabe rawit dan bawang putih mentah dengan garam gula.",
      "Taruh di cobek.",
      "Panaskan minyak bekas menggoreng sampai panas betul.",
      "Siram minyak panas ke sambal.",
      "Aduk, sajikan untuk penyet."
    ],
    kcal: 70, protg: 1, tags: ["pedas", "cepat", "ekonomis", "sambal"]
  }),
  m({
    id: "acar-kuning-timun",
    name: "Acar Kuning Cepat",
    cat: "pelengkap", pro: "none", met: "tumis", rich: 1, segar: true, menit: 15,
    bahan: [
      ["timun", "1 buah"], ["wortel", "1 buah"], ["nanas", "secukupnya"],
      ["kunyit", "1 cm"], ["bawang merah", "3 butir"], ["cuka", "1 sdm"],
      ["gula pasir", "1 sdm"], ["cabe rawit", "4 buah utuh"]
    ],
    langkah: [
      "Potong dadu timun dan wortel.",
      "Haluskan kunyit, tumis dengan bawang.",
      "Tuang air, cuka, gula, dan garam.",
      "Masukkan sayuran dan cabe rawit utuh.",
      "Masak sebentar, angkat, sajikan dingin."
    ],
    kcal: 60, protg: 1, tags: ["seger", "cepat", "acar"]
  }),
  m({
    id: "abon-taburan",
    name: "Kentang Balado Kering",
    cat: "pelengkap", pro: "none", met: "goreng", rich: 2, spice: 2, menit: 30,
    bahan: [
      ["kentang", "3 buah"], ["cabe merah", "4 buah"], ["bawang merah", "4 butir"],
      ["bawang putih", "2 siung"], ["gula pasir", "1/2 sdt"], ["daun jeruk", "2 lembar"],
      ["garam", "secukupnya"]
    ],
    langkah: [
      "Potong dadu kecil kentang, goreng kering.",
      "Ulek kasar cabe dan bawang.",
      "Tumis sambal dengan daun jeruk sampai matang.",
      "Bumbui garam dan gula.",
      "Masukkan kentang, aduk sampai terbalut, angkat."
    ],
    kcal: 210, protg: 3, tags: ["pedas", "kering", "ekonomis", "sambal_goreng_kentang"]
  }),
  m({
    id: "tumis-teri-medan-kacang",
    name: "Teri Medan Kacang Pedas",
    cat: "pelengkap", pro: "ikan", met: "goreng", rich: 2, spice: 2, menit: 25,
    bahan: [
      ["ikan teri", "60 gr"], ["kacang tanah", "80 gr"], ["cabe merah", "4 buah"],
      ["bawang merah", "4 butir"], ["gula merah", "1 sdt"], ["asam jawa", "1/2 sdt"],
      ["daun jeruk", "2 lembar"]
    ],
    langkah: [
      "Goreng teri dan kacang terpisah sampai garing.",
      "Ulek cabe dan bawang, tumis dengan daun jeruk.",
      "Masukkan gula merah dan asam, masak sampai mengkaramel.",
      "Masukkan teri dan kacang.",
      "Aduk cepat sampai terbalut kering, angkat."
    ],
    kcal: 290, protg: 15, tags: ["pedas", "kering", "ekonomis", "teri_kacang"]
  }),
  m({
    id: "sambal-tumpang-praktis",
    name: "Sambal Goreng Tempe",
    cat: "pelengkap", pro: "tempe_tahu", met: "goreng", rich: 2, spice: 2, menit: 30,
    bahan: [
      ["tempe", "1 papan"], ["cabe merah", "5 buah"], ["bawang merah", "5 butir"],
      ["bawang putih", "2 siung"], ["gula merah", "1 sdt"], ["lengkuas", "1 cm"],
      ["daun salam", "1 lembar"], ["garam", "secukupnya"]
    ],
    langkah: [
      "Potong dadu tempe, goreng setengah kering.",
      "Ulek cabe dan bawang, tumis dengan lengkuas dan daun salam.",
      "Masukkan gula merah, masak sampai matang.",
      "Masukkan tempe, aduk rata.",
      "Masak sampai bumbu meresap, angkat."
    ],
    kcal: 240, protg: 15, tags: ["pedas", "ekonomis", "tahu_tempe"]
  }),
  m({
    id: "dadar-jagung-teri",
    name: "Dadar Jagung Teri",
    cat: "pelengkap", pro: "telur", met: "goreng", rich: 2, menit: 20,
    bahan: [
      ["jagung manis", "1 buah"], ["telur ayam", "2 butir"], ["ikan teri", "20 gr"],
      ["daun bawang", "1 batang"], ["tepung terigu", "2 sdm"], ["bawang merah", "3 butir"],
      ["garam", "secukupnya"]
    ],
    langkah: [
      "Pipil jagung, goreng teri sampai garing.",
      "Kocok telur dengan tepung dan garam.",
      "Campur jagung, teri, daun bawang, dan bawang merah iris.",
      "Tuang adonan ke teflon berminyak.",
      "Masak kedua sisi sampai keemasan, angkat."
    ],
    kcal: 200, protg: 11, tags: ["gurih", "ekonomis", "lauk_telur"]
  }),
  m({
    id: "kerupuk-bawang",
    name: "Bawang Goreng Taburan",
    cat: "pelengkap", pro: "none", met: "goreng", rich: 1, menit: 20,
    bahan: [
      ["bawang merah", "10 butir"], ["tepung tapioka", "1 sdm"], ["garam", "sejumput"],
      ["minyak goreng", "untuk menggoreng"]
    ],
    langkah: [
      "Iris tipis bawang merah rata.",
      "Taburi sedikit tepung tapioka dan garam.",
      "Goreng dalam minyak sedang sambil diaduk.",
      "Angkat saat mulai keemasan (akan makin gelap setelah diangkat).",
      "Tiriskan, simpan kedap udara."
    ],
    kcal: 90, protg: 1, tags: ["gurih", "kering", "ekonomis"]
  })
];
