import type { Menu } from "../types";
import { m } from "../menuHelpers";

/** Rumahan tambahan — semua pasar-sourceable, memperkaya variasi. Baca TAGGING.md. */
export const RUMAHAN_TAMBAHAN: Menu[] = [
  // ── Lauk utama ───────────────────────────────────────────────────────
  m({
    id: "semur-jengkol",
    name: "Semur Jengkol",
    cat: "lauk_utama", pro: "tempe_tahu", met: "rebus", rich: 2, kuah: true, menit: 70,
    sulit: "butuh_niat",
    bahan: [
      ["jengkol", "200 gr"], ["kecap manis", "3 sdm"], ["bawang merah", "5 butir"],
      ["bawang putih", "3 siung"], ["kemiri", "2 butir"], ["lengkuas", "2 cm"],
      ["daun salam", "2 lembar"], ["gula merah", "1 sdt"]
    ],
    langkah: [
      "Rebus jengkol sampai empuk, geprek pipih.",
      "Haluskan bawang dan kemiri, tumis dengan lengkuas dan daun salam.",
      "Masukkan jengkol, kecap manis, dan gula merah.",
      "Tuang air, masak api kecil sampai bumbu meresap.",
      "Masak sampai kuah mengental, angkat."
    ],
    kcal: 260, protg: 10, tags: ["manis", "berkuah", "klasik", "ekonomis"]
  }),
  m({
    id: "dendeng-balado",
    name: "Dendeng Balado",
    cat: "lauk_utama", pro: "daging_sapi", met: "goreng", rich: 2, spice: 3, menit: 60,
    sulit: "butuh_niat", harga: "agak_mahal",
    bahan: [
      ["daging sapi", "200 gr"], ["cabe merah", "8 buah"], ["bawang merah", "5 butir"],
      ["bawang putih", "3 siung"], ["tomat", "1 buah"], ["jeruk nipis", "1/2 buah"],
      ["ketumbar", "1/2 sdt"], ["garam", "secukupnya"]
    ],
    langkah: [
      "Iris tipis lebar daging, rebus dengan ketumbar sampai empuk.",
      "Jemur atau keringkan daging, lalu goreng sampai kering.",
      "Ulek kasar cabe, bawang, dan tomat.",
      "Tumis sambal sampai matang berminyak.",
      "Masukkan dendeng, aduk sampai terbalut sambal."
    ],
    kcal: 380, protg: 28, tags: ["pedas", "kering", "klasik", "weekend"]
  }),
  m({
    id: "ayam-kecap-pedas",
    name: "Ayam Kecap Pedas Manis",
    cat: "lauk_utama", pro: "ayam", met: "tumis", rich: 2, spice: 2, menit: 30,
    harga: "sedang",
    bahan: [
      ["ayam", "200 gr"], ["kecap manis", "3 sdm"], ["cabe rawit", "6 buah"],
      ["bawang merah", "4 butir"], ["bawang putih", "3 siung"], ["jahe", "1 cm"],
      ["tomat", "1/2 buah"], ["daun bawang", "1 batang"]
    ],
    langkah: [
      "Goreng ayam setengah matang, sisihkan.",
      "Iris bawang, cabe, dan jahe, tumis sampai harum.",
      "Masukkan ayam dan kecap manis.",
      "Tambah sedikit air, masak sampai kuah mengental.",
      "Masukkan tomat dan daun bawang, aduk, angkat."
    ],
    kcal: 340, protg: 26, tags: ["pedas", "manis", "klasik"]
  }),
  m({
    id: "pais-ayam-kukus",
    name: "Pais Ayam Bumbu Kuning",
    cat: "lauk_utama", pro: "ayam", met: "kukus", rich: 2, spice: 1, menit: 55,
    sulit: "sedang", harga: "sedang",
    bahan: [
      ["ayam", "200 gr"], ["kunyit", "2 cm"], ["kemiri", "3 butir"],
      ["bawang merah", "5 butir"], ["bawang putih", "3 siung"], ["cabe rawit", "4 buah"],
      ["kemangi", "1 genggam"], ["daun pisang", "untuk membungkus"]
    ],
    langkah: [
      "Haluskan kunyit, kemiri, dan bawang.",
      "Balur ayam dengan bumbu halus sampai rata.",
      "Bungkus ayam di daun pisang dengan kemangi dan cabe.",
      "Kukus sekitar 35 menit sampai ayam empuk.",
      "Bakar sebentar bungkusan supaya harum."
    ],
    kcal: 300, protg: 25, tags: ["gurih", "kering", "klasik"]
  }),
  m({
    id: "gulai-telur",
    name: "Gulai Telur",
    cat: "lauk_utama", pro: "telur", met: "santan", rich: 3, santan: true, kuah: true,
    spice: 1, menit: 40,
    bahan: [
      ["telur ayam", "4 butir"], ["santan kelapa", "150 ml"], ["cabe merah", "4 buah"],
      ["bawang merah", "5 butir"], ["bawang putih", "3 siung"], ["kunyit", "2 cm"],
      ["serai", "1 batang"], ["daun jeruk", "2 lembar"]
    ],
    langkah: [
      "Rebus telur, kupas, goreng sebentar.",
      "Haluskan cabe, bawang, dan kunyit.",
      "Tumis bumbu dengan serai dan daun jeruk sampai harum.",
      "Tuang santan, masak sampai mendidih pelan.",
      "Masukkan telur, masak sampai kuah gurih meresap."
    ],
    kcal: 320, protg: 15, tags: ["bersantan", "berkuah", "gurih", "lauk_telur"]
  }),
  m({
    id: "telur-bumbu-rujak",
    name: "Telur Bumbu Rujak",
    cat: "lauk_utama", pro: "telur", met: "santan", rich: 2, santan: true, spice: 2,
    menit: 30,
    bahan: [
      ["telur ayam", "4 butir"], ["santan instan", "80 ml"], ["cabe merah", "5 buah"],
      ["bawang merah", "5 butir"], ["bawang putih", "2 siung"], ["gula merah", "1 sdm"],
      ["asam jawa", "1/2 sdt"], ["daun jeruk", "2 lembar"]
    ],
    langkah: [
      "Rebus telur, kupas, goreng sebentar.",
      "Haluskan cabe dan bawang, tumis dengan daun jeruk.",
      "Masukkan santan, gula merah, dan asam jawa.",
      "Masukkan telur, masak sampai bumbu mengental.",
      "Koreksi rasa pedas manis asam, angkat."
    ],
    kcal: 290, protg: 14, tags: ["pedas", "manis", "bersantan", "lauk_telur"]
  }),
  m({
    id: "pindang-serani",
    name: "Pindang Serani Ikan",
    cat: "lauk_utama", pro: "ikan", met: "rebus", rich: 1, kuah: true, segar: true,
    spice: 2, menit: 35, harga: "sedang",
    bahan: [
      ["ikan bandeng", "1/2 ekor"], ["cabe rawit", "6 buah"], ["tomat", "1 buah"],
      ["belimbing wuluh", "3 buah"], ["bawang merah", "4 butir"], ["jahe", "2 cm"],
      ["kunyit", "1 cm"], ["kemangi", "1 genggam"]
    ],
    langkah: [
      "Iris bawang, jahe, kunyit, dan cabe.",
      "Rebus air dengan bumbu iris sampai harum.",
      "Masukkan ikan, tomat, dan belimbing wuluh.",
      "Masak sampai ikan matang dan kuah asam pedas.",
      "Masukkan kemangi, koreksi rasa, angkat."
    ],
    kcal: 220, protg: 22, tags: ["pedas", "seger", "berkuah", "hangat"]
  }),
  m({
    id: "ikan-asin-cabe-ijo",
    name: "Ikan Asin Jambal Cabe Ijo",
    cat: "lauk_utama", pro: "ikan", met: "goreng", rich: 2, spice: 2, menit: 20,
    bahan: [
      ["ikan asin", "100 gr"], ["cabe hijau", "8 buah"], ["tomat hijau", "2 buah"],
      ["bawang merah", "5 butir"], ["bawang putih", "2 siung"], ["gula pasir", "1/2 sdt"],
      ["minyak goreng", "3 sdm"]
    ],
    langkah: [
      "Goreng ikan asin sampai garing, potong-potong.",
      "Ulek kasar cabe hijau, tomat hijau, dan bawang.",
      "Tumis sambal ijo sampai layu harum.",
      "Masukkan ikan asin, aduk rata.",
      "Bumbui sedikit gula, aduk, angkat."
    ],
    kcal: 210, protg: 18, tags: ["pedas", "gurih", "ekonomis", "ikan_asin"]
  }),
  m({
    id: "cumi-masak-hitam",
    name: "Cumi Masak Hitam",
    cat: "lauk_utama", pro: "udang", met: "tumis", rich: 2, kuah: true, spice: 1, menit: 30,
    sulit: "sedang", harga: "sedang",
    bahan: [
      ["cumi", "200 gr"], ["cabe merah", "3 buah"], ["bawang merah", "5 butir"],
      ["bawang putih", "3 siung"], ["jahe", "1 cm"], ["kecap manis", "1 sdm"],
      ["tomat", "1 buah"], ["daun salam", "1 lembar"]
    ],
    langkah: [
      "Bersihkan cumi, sisakan kantung tintanya.",
      "Iris bawang dan cabe, tumis dengan jahe sampai harum.",
      "Masukkan cumi dan tinta, aduk cepat.",
      "Bumbui kecap manis, garam, dan sedikit air.",
      "Masak sebentar sampai matang, jangan alot, angkat."
    ],
    kcal: 240, protg: 20, tags: ["gurih", "berkuah", "klasik"]
  }),
  m({
    id: "kalio-ayam",
    name: "Kalio Ayam",
    cat: "lauk_utama", pro: "ayam", met: "santan", rich: 3, santan: true, kuah: true,
    spice: 2, menit: 60, sulit: "sedang", harga: "sedang",
    bahan: [
      ["ayam", "200 gr"], ["santan kelapa", "200 ml"], ["cabe merah", "6 buah"],
      ["bawang merah", "6 butir"], ["bawang putih", "3 siung"], ["lengkuas", "2 cm"],
      ["serai", "1 batang"], ["daun jeruk", "3 lembar"]
    ],
    langkah: [
      "Haluskan cabe dan bawang.",
      "Tumis bumbu dengan lengkuas, serai, dan daun jeruk.",
      "Masukkan ayam, aduk sampai berubah warna.",
      "Tuang santan, masak api kecil sambil diaduk.",
      "Masak sampai kuah kental berminyak (belum sekering rendang)."
    ],
    kcal: 400, protg: 26, tags: ["pedas", "bersantan", "berkuah", "weekend"]
  }),
  m({
    id: "ayam-masak-habang",
    name: "Ayam Masak Habang",
    cat: "lauk_utama", pro: "ayam", met: "tumis", rich: 2, spice: 2, menit: 45,
    sulit: "sedang", harga: "sedang",
    bahan: [
      ["ayam", "200 gr"], ["cabe merah", "8 buah"], ["bawang merah", "6 butir"],
      ["bawang putih", "3 siung"], ["gula merah", "1 sdm"], ["kecap manis", "1 sdm"],
      ["kayu manis", "1 batang kecil"], ["garam", "secukupnya"]
    ],
    langkah: [
      "Goreng ayam sampai setengah matang, sisihkan.",
      "Haluskan cabe merah dan bawang.",
      "Tumis bumbu dengan kayu manis sampai matang berminyak.",
      "Masukkan gula merah dan kecap, masak sampai mengental.",
      "Masukkan ayam, aduk sampai terbalut bumbu merah."
    ],
    kcal: 360, protg: 26, tags: ["pedas", "manis", "klasik"]
  }),
  m({
    id: "sate-lilit-ayam",
    name: "Sate Lilit Ayam",
    cat: "lauk_utama", pro: "ayam", met: "bakar", rich: 2, spice: 2, menit: 50,
    sulit: "butuh_niat", harga: "sedang",
    bahan: [
      ["dada ayam", "200 gr"], ["kelapa parut", "50 gr"], ["cabe merah", "4 buah"],
      ["bawang merah", "5 butir"], ["bawang putih", "3 siung"], ["kunyit", "1 cm"],
      ["kencur", "1 cm"], ["serai", "3 batang"]
    ],
    langkah: [
      "Cincang halus ayam, campur dengan kelapa parut.",
      "Haluskan cabe, bawang, kunyit, dan kencur; campur ke ayam.",
      "Lilitkan adonan di batang serai.",
      "Bakar sate di teflon atau panggangan sambil dibalik.",
      "Bakar sampai matang harum kecokelatan."
    ],
    kcal: 300, protg: 24, tags: ["pedas", "gurih", "weekend"]
  }),
  m({
    id: "ayam-bakar-madu-praktis",
    name: "Ayam Bakar Kecap Manis Pedas",
    cat: "lauk_utama", pro: "ayam", met: "bakar", rich: 2, spice: 2, menit: 50,
    sulit: "sedang", harga: "sedang",
    bahan: [
      ["ayam", "200 gr"], ["kecap manis", "3 sdm"], ["cabe rawit", "5 buah"],
      ["bawang putih", "4 siung"], ["bawang merah", "3 butir"], ["jahe", "1 cm"],
      ["jeruk nipis", "1/2 buah"], ["margarin", "1 sdm"]
    ],
    langkah: [
      "Ungkep ayam dengan bawang putih, jahe, dan garam sampai empuk.",
      "Haluskan cabe dan bawang merah, campur dengan kecap dan margarin.",
      "Bakar ayam sambil olesi bumbu kecap pedas.",
      "Balik-balik sampai bumbu meresap dan harum.",
      "Beri perasan jeruk nipis sebelum disajikan."
    ],
    kcal: 350, protg: 26, tags: ["pedas", "manis", "ayam_bakar", "weekend"]
  }),
  m({
    id: "ati-ampela-balado",
    name: "Ati Ampela Balado",
    cat: "lauk_utama", pro: "ayam", met: "goreng", rich: 2, spice: 2, menit: 40,
    bahan: [
      ["hati ampela", "3 pasang"], ["cabe merah", "6 buah"], ["bawang merah", "5 butir"],
      ["bawang putih", "2 siung"], ["tomat", "1 buah"], ["jahe", "1 cm"],
      ["gula pasir", "1/2 sdt"], ["garam", "secukupnya"]
    ],
    langkah: [
      "Rebus hati ampela dengan jahe, potong dadu, goreng sebentar.",
      "Ulek kasar cabe, bawang, dan tomat.",
      "Tumis sambal sampai matang berminyak.",
      "Masukkan hati ampela, aduk rata.",
      "Bumbui gula garam, masak sampai meresap."
    ],
    kcal: 240, protg: 22, tags: ["pedas", "ekonomis", "klasik"]
  }),
  m({
    id: "telur-petis",
    name: "Telur Ceplok Bumbu Petis",
    cat: "lauk_utama", pro: "telur", met: "goreng", rich: 2, spice: 2, menit: 20,
    bahan: [
      ["telur ayam", "3 butir"], ["petis udang", "1 sdt"], ["cabe rawit", "5 buah"],
      ["bawang merah", "4 butir"], ["bawang putih", "2 siung"], ["kecap manis", "1 sdm"],
      ["tomat", "1/2 buah"], ["garam", "secukupnya"]
    ],
    langkah: [
      "Ceplok telur sampai matang, sisihkan.",
      "Ulek cabe, bawang, dan petis.",
      "Tumis bumbu petis sampai harum.",
      "Bumbui kecap manis dan sedikit air.",
      "Masukkan telur ceplok, aduk sampai terbalut bumbu."
    ],
    kcal: 260, protg: 15, tags: ["pedas", "gurih", "ekonomis", "lauk_telur"]
  }),
  m({
    id: "tahu-tempe-kari",
    name: "Kari Tahu Tempe",
    cat: "lauk_utama", pro: "tempe_tahu", met: "santan", rich: 3, santan: true, kuah: true,
    spice: 1, menit: 35,
    bahan: [
      ["tahu", "3 buah"], ["tempe", "1/2 papan"], ["santan kelapa", "150 ml"],
      ["cabe merah", "3 buah"], ["bawang merah", "5 butir"], ["kunyit", "2 cm"],
      ["ketumbar", "1/2 sdt"], ["serai", "1 batang"]
    ],
    langkah: [
      "Potong dan goreng tahu tempe sebentar.",
      "Haluskan cabe, bawang, kunyit, dan ketumbar.",
      "Tumis bumbu dengan serai sampai harum.",
      "Tuang santan, masukkan tahu tempe.",
      "Masak api kecil sampai kuah kari gurih meresap."
    ],
    kcal: 300, protg: 16, tags: ["bersantan", "berkuah", "ekonomis", "tahu_tempe"]
  }),
  m({
    id: "semur-tahu-telur-puyuh",
    name: "Semur Tahu Telur Puyuh",
    cat: "lauk_utama", pro: "telur", met: "rebus", rich: 2, kuah: true, menit: 35,
    bahan: [
      ["tahu", "4 buah"], ["telur puyuh", "12 butir"], ["kecap manis", "3 sdm"],
      ["bawang merah", "4 butir"], ["bawang putih", "2 siung"], ["kemiri", "2 butir"],
      ["pala", "1/4 sdt"], ["daun salam", "1 lembar"]
    ],
    langkah: [
      "Goreng tahu, rebus dan kupas telur puyuh.",
      "Haluskan bawang dan kemiri, tumis dengan daun salam.",
      "Tuang air, kecap manis, dan pala.",
      "Masukkan tahu dan telur puyuh.",
      "Masak sampai kuah kental dan bumbu meresap."
    ],
    kcal: 280, protg: 16, tags: ["manis", "berkuah", "ekonomis", "lauk_telur"]
  }),
  m({
    id: "pepes-ayam-jamur",
    name: "Pepes Ayam Jamur",
    cat: "lauk_utama", pro: "ayam", met: "kukus", rich: 2, spice: 1, menit: 55,
    sulit: "sedang", harga: "sedang",
    bahan: [
      ["dada ayam", "150 gr"], ["jamur tiram", "80 gr"], ["cabe rawit", "4 buah"],
      ["bawang merah", "5 butir"], ["bawang putih", "2 siung"], ["kemiri", "2 butir"],
      ["kemangi", "1 genggam"], ["daun pisang", "untuk membungkus"]
    ],
    langkah: [
      "Potong kecil ayam, suwir jamur.",
      "Haluskan cabe, bawang, dan kemiri, campur dengan ayam dan jamur.",
      "Tambahkan kemangi.",
      "Bungkus di daun pisang, kukus 30 menit.",
      "Bakar sebentar bungkusan supaya harum."
    ],
    kcal: 240, protg: 20, tags: ["gurih", "kering"]
  }),
  m({
    id: "oseng-mercon",
    name: "Oseng Mercon Tetelan",
    cat: "lauk_utama", pro: "daging_sapi", met: "tumis", rich: 2, spice: 3, menit: 45,
    sulit: "sedang", harga: "sedang",
    bahan: [
      ["tetelan sapi", "200 gr"], ["cabe rawit", "15 buah"], ["cabe merah", "5 buah"],
      ["bawang merah", "6 butir"], ["bawang putih", "3 siung"], ["kecap manis", "1 sdm"],
      ["daun jeruk", "3 lembar"], ["gula merah", "1/2 sdt"]
    ],
    langkah: [
      "Rebus tetelan sampai empuk, potong dadu.",
      "Ulek kasar cabe dan bawang.",
      "Tumis sambal dengan daun jeruk sampai matang.",
      "Masukkan tetelan, kecap, dan gula merah.",
      "Masak sampai bumbu meresap dan pedas menyatu."
    ],
    kcal: 340, protg: 22, tags: ["pedas", "klasik"]
  }),
  // ── Sayur ────────────────────────────────────────────────────────────
  m({
    id: "tumis-buncis-tempe",
    name: "Tumis Buncis Tempe",
    cat: "sayur", pro: "tempe_tahu", met: "tumis", rich: 2, spice: 1, menit: 20,
    bahan: [
      ["buncis", "150 gr"], ["tempe", "1/2 papan"], ["cabe merah", "2 buah"],
      ["bawang merah", "4 butir"], ["bawang putih", "2 siung"], ["kecap manis", "1 sdm"],
      ["daun salam", "1 lembar"], ["garam", "secukupnya"]
    ],
    langkah: [
      "Potong dadu tempe, goreng setengah kering.",
      "Potong buncis serong, iris bawang dan cabe.",
      "Tumis bumbu dengan daun salam sampai harum.",
      "Masukkan buncis dan tempe, aduk.",
      "Bumbui kecap dan garam, masak sampai matang, angkat."
    ],
    kcal: 180, protg: 11, tags: ["gurih", "ekonomis", "tahu_tempe"]
  }),
  m({
    id: "tumis-pare-telur",
    name: "Tumis Pare Telur",
    cat: "sayur", pro: "telur", met: "tumis", rich: 1, spice: 1, menit: 20,
    bahan: [
      ["pare", "1 buah"], ["telur ayam", "1 butir"], ["cabe merah", "2 buah"],
      ["bawang merah", "4 butir"], ["bawang putih", "2 siung"], ["garam", "secukupnya"],
      ["gula pasir", "1/4 sdt"]
    ],
    langkah: [
      "Iris tipis pare, remas garam, bilas untuk kurangi pahit.",
      "Tumis bawang dan cabe sampai harum.",
      "Masukkan pare, aduk sampai layu.",
      "Pinggirkan, orak-arik telur di sisi wajan.",
      "Aduk rata, bumbui garam dan gula, angkat."
    ],
    kcal: 130, protg: 8, tags: ["gurih", "ekonomis"]
  }),
  m({
    id: "tumis-daun-singkong-teri",
    name: "Tumis Daun Singkong Teri",
    cat: "sayur", pro: "none", met: "tumis", rich: 1, spice: 2, menit: 25,
    bahan: [
      ["daun singkong", "1 ikat"], ["ikan teri", "30 gr"], ["cabe merah", "4 buah"],
      ["bawang merah", "5 butir"], ["bawang putih", "2 siung"], ["tomat", "1 buah"],
      ["garam", "secukupnya"]
    ],
    langkah: [
      "Rebus daun singkong sampai empuk, tiriskan, iris kasar.",
      "Goreng teri sampai garing.",
      "Tumis bawang dan cabe iris sampai harum.",
      "Masukkan daun singkong dan tomat.",
      "Masukkan teri, bumbui garam, aduk, angkat."
    ],
    kcal: 150, protg: 9, tags: ["pedas", "gurih", "ekonomis"]
  }),
  m({
    id: "lodeh-nangka",
    name: "Lodeh Nangka Muda",
    cat: "sayur", pro: "none", met: "santan", rich: 3, santan: true, kuah: true, spice: 1,
    menit: 50, sulit: "sedang",
    bahan: [
      ["nangka muda", "250 gr"], ["santan kelapa", "150 ml"], ["cabe merah", "3 buah"],
      ["bawang merah", "5 butir"], ["bawang putih", "2 siung"], ["lengkuas", "2 cm"],
      ["daun salam", "2 lembar"], ["ebi", "1 sdm"]
    ],
    langkah: [
      "Rebus nangka muda sampai empuk, potong-potong.",
      "Haluskan cabe dan bawang, tumis dengan lengkuas dan daun salam.",
      "Masukkan ebi tumbuk dan nangka.",
      "Tuang santan, masak api kecil.",
      "Masak sampai kuah gurih dan nangka empuk."
    ],
    kcal: 170, protg: 5, tags: ["bersantan", "berkuah", "ekonomis"]
  }),
  m({
    id: "tumis-wortel-jagung-muda",
    name: "Tumis Wortel Jagung Muda",
    cat: "sayur", pro: "none", met: "tumis", rich: 1, menit: 15,
    bahan: [
      ["wortel", "2 buah"], ["jagung muda", "100 gr"], ["bawang putih", "3 siung"],
      ["bawang merah", "3 butir"], ["saus tiram", "1/2 sdm"], ["daun bawang", "1 batang"],
      ["garam", "secukupnya"]
    ],
    langkah: [
      "Iris wortel dan jagung muda serong.",
      "Tumis bawang putih dan bawang merah sampai harum.",
      "Masukkan wortel dan jagung muda, beri sedikit air.",
      "Bumbui saus tiram dan garam.",
      "Masak sampai empuk renyah, taburi daun bawang."
    ],
    kcal: 100, protg: 3, tags: ["cepat", "anak_friendly", "ekonomis"]
  }),
  m({
    id: "tumis-kacang-panjang-teri",
    name: "Tumis Kacang Panjang Teri",
    cat: "sayur", pro: "none", met: "tumis", rich: 1, spice: 2, menit: 20,
    bahan: [
      ["kacang panjang", "1 ikat"], ["ikan teri", "30 gr"], ["cabe merah", "4 buah"],
      ["bawang merah", "4 butir"], ["bawang putih", "2 siung"], ["tomat", "1/2 buah"],
      ["garam", "secukupnya"]
    ],
    langkah: [
      "Goreng teri sampai garing, sisihkan.",
      "Potong kacang panjang, iris cabe dan bawang.",
      "Tumis bumbu sampai harum, masukkan kacang panjang.",
      "Beri sedikit air, masak sampai matang.",
      "Masukkan teri dan tomat, aduk, angkat."
    ],
    kcal: 140, protg: 8, tags: ["pedas", "gurih", "ekonomis"]
  }),
  m({
    id: "terong-bumbu-kecap",
    name: "Terong Bumbu Kecap",
    cat: "sayur", pro: "none", met: "tumis", rich: 2, spice: 1, menit: 25,
    bahan: [
      ["terong", "2 buah"], ["kecap manis", "2 sdm"], ["cabe merah", "3 buah"],
      ["bawang merah", "4 butir"], ["bawang putih", "2 siung"], ["tomat", "1/2 buah"],
      ["daun salam", "1 lembar"], ["garam", "secukupnya"]
    ],
    langkah: [
      "Potong terong, goreng setengah layu, tiriskan.",
      "Iris bawang dan cabe, tumis dengan daun salam.",
      "Masukkan kecap manis dan sedikit air.",
      "Masukkan terong dan tomat.",
      "Masak sampai bumbu meresap, angkat."
    ],
    kcal: 150, protg: 3, tags: ["manis", "ekonomis"]
  }),
  m({
    id: "pepes-jamur",
    name: "Pepes Jamur Tiram",
    cat: "sayur", pro: "none", met: "kukus", rich: 1, spice: 2, menit: 45, sulit: "sedang",
    bahan: [
      ["jamur tiram", "200 gr"], ["cabe rawit", "5 buah"], ["bawang merah", "4 butir"],
      ["bawang putih", "2 siung"], ["kemangi", "1 genggam"], ["tomat", "1/2 buah"],
      ["daun salam", "1 lembar"], ["daun pisang", "untuk membungkus"]
    ],
    langkah: [
      "Suwir jamur tiram, remas untuk kurangi air.",
      "Iris cabe, bawang, dan tomat; campur dengan jamur.",
      "Tambahkan kemangi dan garam.",
      "Bungkus di daun pisang dengan daun salam.",
      "Kukus 25 menit, lalu bakar sebentar supaya harum."
    ],
    kcal: 110, protg: 6, tags: ["pedas", "seger", "ekonomis"]
  }),
  m({
    id: "sayur-menir",
    name: "Sayur Menir Bayam Jagung",
    cat: "sayur", pro: "none", met: "rebus", rich: 1, kuah: true, segar: true, menit: 20,
    bahan: [
      ["bayam", "1 ikat"], ["jagung manis", "1 buah"], ["oyong", "1 buah"],
      ["kacang hijau", "2 sdm"], ["bawang merah", "3 butir"], ["kencur", "1 cm"],
      ["temu kunci", "secukupnya"], ["garam", "secukupnya"]
    ],
    langkah: [
      "Rebus kacang hijau sampai setengah empuk.",
      "Serut jagung, masukkan ke rebusan dengan bumbu.",
      "Masukkan oyong, masak sampai empuk.",
      "Masukkan bayam terakhir.",
      "Bumbui garam dan gula, angkat segera."
    ],
    kcal: 100, protg: 5, tags: ["seger", "berkuah", "ekonomis", "sayur_bening"]
  }),
  m({
    id: "tumis-kol-telur",
    name: "Tumis Kol Telur",
    cat: "sayur", pro: "telur", met: "tumis", rich: 1, menit: 15,
    bahan: [
      ["kol", "1/4 buah"], ["telur ayam", "1 butir"], ["wortel", "1/2 buah"],
      ["bawang putih", "3 siung"], ["bawang merah", "3 butir"], ["kecap asin", "1/2 sdm"],
      ["garam", "secukupnya"]
    ],
    langkah: [
      "Iris kol dan wortel.",
      "Tumis bawang sampai harum, orak-arik telur.",
      "Masukkan wortel dan kol, aduk cepat.",
      "Bumbui kecap asin dan garam.",
      "Masak sampai layu renyah, angkat."
    ],
    kcal: 130, protg: 8, tags: ["cepat", "anak_friendly", "ekonomis"]
  }),
  m({
    id: "oseng-jagung-muda",
    name: "Oseng Jagung Muda Tahu",
    cat: "sayur", pro: "tempe_tahu", met: "tumis", rich: 1, spice: 1, menit: 20,
    bahan: [
      ["jagung muda", "150 gr"], ["tahu", "2 buah"], ["cabe merah", "2 buah"],
      ["bawang merah", "4 butir"], ["bawang putih", "2 siung"], ["saus tiram", "1/2 sdm"],
      ["daun bawang", "1 batang"], ["garam", "secukupnya"]
    ],
    langkah: [
      "Belah jagung muda, goreng tahu dan potong dadu.",
      "Tumis bawang dan cabe sampai harum.",
      "Masukkan jagung muda, beri sedikit air.",
      "Masukkan tahu dan saus tiram.",
      "Masak sampai matang, taburi daun bawang."
    ],
    kcal: 150, protg: 9, tags: ["gurih", "ekonomis"]
  }),
  m({
    id: "tumis-genjer-teri",
    name: "Tumis Genjer Teri",
    cat: "sayur", pro: "none", met: "tumis", rich: 1, spice: 2, menit: 18,
    bahan: [
      ["genjer", "1 ikat"], ["ikan teri", "30 gr"], ["cabe rawit", "5 buah"],
      ["bawang merah", "4 butir"], ["bawang putih", "2 siung"], ["tomat", "1/2 buah"],
      ["garam", "secukupnya"]
    ],
    langkah: [
      "Petik genjer, potong-potong; goreng teri.",
      "Iris cabe dan bawang, tumis sampai harum.",
      "Masukkan genjer dan tomat, aduk api besar.",
      "Masukkan teri, bumbui garam.",
      "Masak sampai layu, angkat."
    ],
    kcal: 120, protg: 8, tags: ["pedas", "gurih", "ekonomis"]
  }),
  m({
    id: "cah-taoge-tahu-kucai",
    name: "Cah Tauge Tahu Kucai",
    cat: "sayur", pro: "tempe_tahu", met: "tumis", rich: 1, menit: 15,
    bahan: [
      ["tauge", "150 gr"], ["tahu kuning", "2 buah"], ["daun kucai", "5 batang"],
      ["bawang putih", "3 siung"], ["kecap asin", "1/2 sdm"], ["garam", "secukupnya"],
      ["merica", "1/4 sdt"]
    ],
    langkah: [
      "Goreng tahu kuning, potong dadu.",
      "Potong kucai 3 cm.",
      "Tumis bawang putih sampai harum.",
      "Masukkan tahu, tauge, dan kucai, aduk cepat.",
      "Bumbui kecap asin, garam, dan merica, angkat."
    ],
    kcal: 130, protg: 9, tags: ["cepat", "seger", "ekonomis"]
  }),
  m({
    id: "gulai-daun-singkong",
    name: "Gulai Daun Singkong",
    cat: "sayur", pro: "none", met: "santan", rich: 3, santan: true, kuah: true, spice: 2,
    menit: 45, sulit: "sedang",
    bahan: [
      ["daun singkong", "1 ikat"], ["santan kelapa", "150 ml"], ["cabe merah", "5 buah"],
      ["bawang merah", "5 butir"], ["bawang putih", "3 siung"], ["kunyit", "2 cm"],
      ["serai", "1 batang"], ["daun jeruk", "2 lembar"]
    ],
    langkah: [
      "Rebus daun singkong sampai empuk, tiriskan.",
      "Haluskan cabe, bawang, dan kunyit.",
      "Tumis bumbu dengan serai dan daun jeruk.",
      "Tuang santan, masukkan daun singkong.",
      "Masak api kecil sampai kuah gulai gurih meresap."
    ],
    kcal: 200, protg: 6, tags: ["pedas", "bersantan", "berkuah", "ekonomis"]
  }),
  // ── Pelengkap ────────────────────────────────────────────────────────
  m({
    id: "perkedel-tahu",
    name: "Perkedel Tahu",
    cat: "pelengkap", pro: "tempe_tahu", met: "goreng", rich: 2, menit: 25,
    bahan: [
      ["tahu", "4 buah"], ["telur ayam", "1 butir"], ["daun bawang", "1 batang"],
      ["bawang putih", "2 siung"], ["wortel", "1/2 buah"], ["merica", "1/4 sdt"],
      ["garam", "secukupnya"]
    ],
    langkah: [
      "Hancurkan tahu, peras airnya.",
      "Campur dengan telur, wortel parut, daun bawang, dan bumbu.",
      "Aduk rata sampai bisa dibentuk.",
      "Bentuk bulat pipih.",
      "Goreng sampai keemasan garing."
    ],
    kcal: 170, protg: 11, tags: ["gurih", "ekonomis", "anak_friendly", "tahu_tempe"]
  }),
  m({
    id: "bakwan-udang",
    name: "Bakwan Udang",
    cat: "pelengkap", pro: "udang", met: "goreng", rich: 2, menit: 25, harga: "sedang",
    bahan: [
      ["udang", "80 gr"], ["tauge", "50 gr"], ["tepung terigu", "6 sdm"],
      ["daun bawang", "1 batang"], ["bawang putih", "2 siung"], ["seledri", "1 batang"],
      ["ketumbar", "1/2 sdt"], ["garam", "secukupnya"]
    ],
    langkah: [
      "Buat adonan tepung dengan bawang putih dan ketumbar halus.",
      "Masukkan tauge, daun bawang, dan seledri.",
      "Tata udang di atas sesendok adonan.",
      "Goreng dalam minyak panas sampai keemasan.",
      "Tiriskan, sajikan dengan cabe rawit."
    ],
    kcal: 200, protg: 9, tags: ["gurih", "anak_friendly"]
  }),
  m({
    id: "rempeyek-teri",
    name: "Rempeyek Teri",
    cat: "pelengkap", pro: "ikan", met: "goreng", rich: 2, menit: 40, sulit: "sedang",
    bahan: [
      ["tepung beras", "150 gr"], ["ikan teri", "60 gr"], ["kemiri", "2 butir"],
      ["ketumbar", "1/2 sdt"], ["bawang putih", "2 siung"], ["daun jeruk", "3 lembar"],
      ["kunyit", "1/2 cm"], ["garam", "secukupnya"]
    ],
    langkah: [
      "Haluskan kemiri, ketumbar, bawang putih, dan kunyit.",
      "Campur tepung beras, bumbu, air, dan irisan daun jeruk.",
      "Aduk teri ke adonan encer.",
      "Tuang tipis di pinggir wajan panas.",
      "Goreng sampai garing keemasan, tiriskan."
    ],
    kcal: 230, protg: 9, tags: ["gurih", "kering", "ekonomis"]
  }),
  m({
    id: "bakwan-kentang",
    name: "Bakwan Kentang Suwir",
    cat: "pelengkap", pro: "none", met: "goreng", rich: 2, menit: 25,
    bahan: [
      ["kentang", "2 buah"], ["tepung terigu", "3 sdm"], ["telur ayam", "1 butir"],
      ["daun bawang", "1 batang"], ["bawang putih", "2 siung"], ["merica", "1/4 sdt"],
      ["garam", "secukupnya"]
    ],
    langkah: [
      "Serut kentang halus memanjang, remas dengan garam, tiriskan.",
      "Campur dengan tepung, telur, daun bawang, dan bumbu.",
      "Ambil sesendok, pipihkan.",
      "Goreng dalam minyak panas sampai keemasan.",
      "Tiriskan, sajikan hangat."
    ],
    kcal: 180, protg: 5, tags: ["gurih", "ekonomis", "anak_friendly"]
  }),
  m({
    id: "sambal-tumpang",
    name: "Sambal Tumpang Tempe",
    cat: "pelengkap", pro: "tempe_tahu", met: "santan", rich: 2, santan: true, kuah: true,
    spice: 2, menit: 35, sulit: "sedang",
    bahan: [
      ["tempe", "1 papan"], ["santan instan", "100 ml"], ["cabe rawit", "8 buah"],
      ["bawang merah", "5 butir"], ["bawang putih", "3 siung"], ["kencur", "1 cm"],
      ["daun salam", "2 lembar"], ["lengkuas", "2 cm"]
    ],
    langkah: [
      "Gunakan tempe yang agak lama (semangit), rebus sebentar.",
      "Haluskan cabe, bawang, dan kencur.",
      "Rebus tempe dengan bumbu, daun salam, dan lengkuas.",
      "Tuang santan, masak sambil tempe dihancurkan.",
      "Masak sampai kuah kental, sajikan untuk siraman sayuran."
    ],
    kcal: 240, protg: 14, tags: ["pedas", "bersantan", "berkuah", "ekonomis"]
  }),
  m({
    id: "telur-gabus-praktis",
    name: "Telur Puyuh Kecap",
    cat: "pelengkap", pro: "telur", met: "rebus", rich: 2, menit: 25,
    bahan: [
      ["telur puyuh", "15 butir"], ["kecap manis", "3 sdm"], ["bawang merah", "4 butir"],
      ["bawang putih", "2 siung"], ["cabe merah", "2 buah"], ["daun salam", "1 lembar"],
      ["gula merah", "1/2 sdt"]
    ],
    langkah: [
      "Rebus dan kupas telur puyuh, goreng sebentar.",
      "Iris bawang dan cabe, tumis dengan daun salam.",
      "Masukkan kecap manis, gula merah, dan sedikit air.",
      "Masukkan telur puyuh.",
      "Masak sampai kuah mengental dan meresap."
    ],
    kcal: 200, protg: 13, tags: ["manis", "anak_friendly", "ekonomis", "lauk_telur"]
  }),
  m({
    id: "oseng-tempe-teri-kacang",
    name: "Oseng Kentang Ati Ampela",
    cat: "pelengkap", pro: "ayam", met: "tumis", rich: 2, spice: 1, menit: 35,
    bahan: [
      ["hati ampela", "2 pasang"], ["kentang", "2 buah"], ["kecap manis", "2 sdm"],
      ["cabe merah", "3 buah"], ["bawang merah", "4 butir"], ["bawang putih", "2 siung"],
      ["daun salam", "1 lembar"], ["garam", "secukupnya"]
    ],
    langkah: [
      "Rebus hati ampela, potong dadu; goreng kentang dadu.",
      "Iris cabe dan bawang, tumis dengan daun salam.",
      "Masukkan hati ampela, aduk.",
      "Bumbui kecap manis dan garam.",
      "Masukkan kentang goreng, aduk sampai meresap."
    ],
    kcal: 260, protg: 16, tags: ["manis", "ekonomis", "klasik"]
  }),
  m({
    id: "tempe-orek-basah-kecap",
    name: "Orek Tempe Kacang Panjang",
    cat: "pelengkap", pro: "tempe_tahu", met: "tumis", rich: 2, spice: 1, menit: 25,
    bahan: [
      ["tempe", "1 papan"], ["kacang panjang", "5 batang"], ["kecap manis", "2 sdm"],
      ["cabe merah", "3 buah"], ["bawang merah", "4 butir"], ["bawang putih", "2 siung"],
      ["daun salam", "1 lembar"], ["garam", "secukupnya"]
    ],
    langkah: [
      "Potong dadu tempe, goreng setengah kering.",
      "Potong kacang panjang, iris cabe dan bawang.",
      "Tumis bumbu dengan daun salam sampai harum.",
      "Masukkan kacang panjang dan tempe.",
      "Bumbui kecap dan garam, masak sampai matang."
    ],
    kcal: 240, protg: 15, tags: ["manis", "ekonomis", "orek_tempe"]
  }),
  m({
    id: "sambal-teri-kacang",
    name: "Sambal Teri Kacang",
    cat: "pelengkap", pro: "ikan", met: "goreng", rich: 2, spice: 3, menit: 25,
    bahan: [
      ["ikan teri", "50 gr"], ["kacang tanah", "60 gr"], ["cabe rawit", "10 buah"],
      ["bawang merah", "5 butir"], ["bawang putih", "2 siung"], ["terasi", "1/2 sdt"],
      ["gula merah", "1/2 sdt"], ["jeruk limau", "1 buah"]
    ],
    langkah: [
      "Goreng teri dan kacang sampai garing.",
      "Goreng cabe, bawang, dan terasi.",
      "Ulek kasar dengan gula merah dan garam.",
      "Campur teri dan kacang ke sambal.",
      "Beri perasan jeruk limau, aduk, sajikan."
    ],
    kcal: 280, protg: 15, tags: ["pedas", "gurih", "ekonomis", "teri_kacang", "sambal"]
  }),
  m({
    id: "gimbal-udang",
    name: "Bakwan Jagung Udang",
    cat: "pelengkap", pro: "udang", met: "goreng", rich: 2, menit: 25, harga: "sedang",
    bahan: [
      ["jagung manis", "1 buah"], ["udang", "60 gr"], ["tepung terigu", "4 sdm"],
      ["telur ayam", "1 butir"], ["daun bawang", "1 batang"], ["bawang putih", "2 siung"],
      ["ketumbar", "1/2 sdt"], ["garam", "secukupnya"]
    ],
    langkah: [
      "Pipil jagung, cincang udang kasar.",
      "Buat adonan tepung dengan telur dan bumbu halus.",
      "Campur jagung, udang, dan daun bawang.",
      "Goreng sesendok demi sesendok dalam minyak panas.",
      "Goreng sampai keemasan garing, tiriskan."
    ],
    kcal: 200, protg: 9, tags: ["gurih", "anak_friendly"]
  })
];
