import type { Menu } from "../types";
import { m } from "../menuHelpers";

/** Sayur — pendamping. Baca TAGGING.md sebelum menambah. */
export const SAYUR: Menu[] = [
  m({
    id: "tumis-kangkung",
    name: "Tumis Kangkung",
    cat: "sayur", pro: "none", met: "tumis", rich: 1, spice: 1, menit: 15,
    bahan: [
      ["kangkung", "1 ikat"], ["bawang merah", "3 butir"], ["bawang putih", "2 siung"],
      ["cabe merah", "2 buah"], ["terasi", "1/4 sdt"], ["garam", "secukupnya"]
    ],
    langkah: [
      "Petik kangkung, cuci bersih.",
      "Iris bawang dan cabe, tumis dengan terasi sampai harum.",
      "Masukkan kangkung, aduk cepat api besar.",
      "Bumbui garam dan sedikit air.",
      "Masak sebentar sampai layu tapi tetap hijau, angkat."
    ],
    kcal: 90, protg: 3, tags: ["cepat", "seger", "ekonomis", "tumis_hijau"]
  }),
  m({
    id: "tumis-kangkung-tauco",
    name: "Tumis Kangkung Tauco",
    cat: "sayur", pro: "none", met: "tumis", rich: 1, spice: 1, menit: 15,
    bahan: [
      ["kangkung", "1 ikat"], ["tauco", "1 sdm"], ["bawang putih", "3 siung"],
      ["cabe rawit", "3 buah"], ["bawang merah", "2 butir"], ["garam", "secukupnya"]
    ],
    langkah: [
      "Cuci kangkung, potong-potong.",
      "Tumis bawang putih, bawang merah, dan cabe sampai harum.",
      "Masukkan tauco, aduk sebentar.",
      "Masukkan kangkung, aduk cepat api besar.",
      "Bumbui garam bila perlu, angkat saat masih hijau."
    ],
    kcal: 100, protg: 4, tags: ["cepat", "gurih", "ekonomis", "tumis_hijau"]
  }),
  m({
    id: "cah-kangkung-terasi",
    name: "Cah Kangkung Terasi Pedas",
    cat: "sayur", pro: "none", met: "tumis", rich: 1, spice: 2, menit: 15,
    bahan: [
      ["kangkung", "1 ikat"], ["cabe rawit", "6 buah"], ["cabe merah", "2 buah"],
      ["terasi", "1/2 sdt"], ["bawang merah", "4 butir"], ["bawang putih", "2 siung"],
      ["tomat", "1/2 buah"], ["garam", "secukupnya"]
    ],
    langkah: [
      "Ulek kasar cabe, bawang, dan terasi.",
      "Tumis bumbu sampai matang harum.",
      "Masukkan tomat, aduk sampai layu.",
      "Masukkan kangkung, aduk cepat api besar.",
      "Bumbui garam, angkat saat masih renyah."
    ],
    kcal: 100, protg: 3, tags: ["pedas", "seger", "ekonomis", "tumis_hijau"]
  }),
  m({
    id: "tumis-buncis-wortel",
    name: "Tumis Buncis Wortel",
    cat: "sayur", pro: "none", met: "tumis", rich: 1, menit: 15,
    bahan: [
      ["buncis", "100 gr"], ["wortel", "1 buah"], ["bawang putih", "2 siung"],
      ["bawang merah", "3 butir"], ["saus tiram", "1/2 sdm"], ["garam", "secukupnya"]
    ],
    langkah: [
      "Potong buncis serong, iris wortel korek api.",
      "Tumis bawang putih dan bawang merah sampai harum.",
      "Masukkan wortel dulu, aduk sebentar.",
      "Masukkan buncis dan sedikit air, tutup sebentar.",
      "Bumbui saus tiram dan garam, aduk, angkat saat masih renyah."
    ],
    kcal: 90, protg: 3, tags: ["cepat", "anak_friendly", "ekonomis"]
  }),
  m({
    id: "tumis-buncis-teri",
    name: "Tumis Buncis Teri",
    cat: "sayur", pro: "none", met: "tumis", rich: 1, spice: 1, menit: 20,
    bahan: [
      ["buncis", "150 gr"], ["ikan teri", "30 gr"], ["cabe merah", "2 buah"],
      ["bawang merah", "4 butir"], ["bawang putih", "2 siung"], ["garam", "secukupnya"]
    ],
    langkah: [
      "Goreng teri sampai garing, sisihkan.",
      "Potong buncis serong.",
      "Tumis bawang dan cabe iris sampai harum.",
      "Masukkan buncis, aduk sampai layu, beri sedikit air.",
      "Masukkan teri goreng, bumbui garam, aduk, angkat."
    ],
    kcal: 130, protg: 8, tags: ["gurih", "ekonomis"]
  }),
  m({
    id: "tumis-labu-siam",
    name: "Tumis Labu Siam",
    cat: "sayur", pro: "none", met: "tumis", rich: 1, menit: 15,
    bahan: [
      ["labu siam", "1 buah"], ["cabe merah", "2 buah"], ["bawang merah", "4 butir"],
      ["bawang putih", "2 siung"], ["daun salam", "1 lembar"], ["garam", "secukupnya"]
    ],
    langkah: [
      "Iris korek api labu siam, remas dengan sedikit garam, bilas.",
      "Iris bawang dan cabe.",
      "Tumis bumbu dengan daun salam sampai harum.",
      "Masukkan labu siam, aduk, beri sedikit air.",
      "Masak sampai empuk, bumbui garam, angkat."
    ],
    kcal: 80, protg: 2, tags: ["cepat", "ekonomis", "anak_friendly"]
  }),
  m({
    id: "oseng-labu-siam-pedas",
    name: "Oseng Labu Siam Pedas",
    cat: "sayur", pro: "none", met: "tumis", rich: 1, spice: 2, menit: 18,
    bahan: [
      ["labu siam", "1 buah"], ["cabe rawit", "5 buah"], ["cabe merah", "2 buah"],
      ["bawang merah", "4 butir"], ["bawang putih", "2 siung"], ["ebi", "1 sdm"],
      ["garam", "secukupnya"]
    ],
    langkah: [
      "Iris korek api labu siam, remas garam, bilas.",
      "Rendam ebi, tumbuk kasar.",
      "Tumis bawang, cabe, dan ebi sampai harum.",
      "Masukkan labu siam, aduk, beri sedikit air.",
      "Masak sampai empuk, koreksi rasa, angkat."
    ],
    kcal: 100, protg: 4, tags: ["pedas", "ekonomis"]
  }),
  m({
    id: "tumis-tauge-tahu",
    name: "Tumis Tauge Tahu",
    cat: "sayur", pro: "tempe_tahu", met: "tumis", rich: 1, menit: 15,
    bahan: [
      ["tauge", "150 gr"], ["tahu", "2 buah"], ["daun bawang", "1 batang"],
      ["bawang putih", "3 siung"], ["cabe merah", "1 buah"], ["kecap asin", "1/2 sdm"],
      ["garam", "secukupnya"]
    ],
    langkah: [
      "Goreng tahu, potong dadu.",
      "Tumis bawang putih dan irisan cabe sampai harum.",
      "Masukkan tahu dan tauge, aduk cepat api besar.",
      "Bumbui kecap asin dan garam.",
      "Masukkan daun bawang, aduk sebentar, angkat saat tauge masih renyah."
    ],
    kcal: 120, protg: 9, tags: ["cepat", "seger", "ekonomis"]
  }),
  m({
    id: "tumis-tauge-ikan-asin",
    name: "Tumis Tauge Ikan Asin",
    cat: "sayur", pro: "none", met: "tumis", rich: 1, spice: 1, menit: 15,
    bahan: [
      ["tauge", "150 gr"], ["ikan asin", "30 gr"], ["cabe merah", "2 buah"],
      ["bawang merah", "3 butir"], ["bawang putih", "2 siung"], ["daun bawang", "1 batang"]
    ],
    langkah: [
      "Goreng ikan asin, potong kecil.",
      "Tumis bawang dan cabe iris sampai harum.",
      "Masukkan ikan asin, aduk sebentar.",
      "Masukkan tauge, aduk cepat api besar.",
      "Tambahkan daun bawang, angkat saat masih renyah."
    ],
    kcal: 120, protg: 7, tags: ["gurih", "cepat", "ekonomis"]
  }),
  m({
    id: "sayur-bening-bayam",
    name: "Sayur Bening Bayam Jagung",
    cat: "sayur", pro: "none", met: "rebus", rich: 1, kuah: true, segar: true, menit: 15,
    bahan: [
      ["bayam", "1 ikat"], ["jagung manis", "1 buah"], ["bawang merah", "3 butir"],
      ["temu kunci", "secukupnya"], ["garam", "secukupnya"], ["gula pasir", "1/2 sdt"]
    ],
    langkah: [
      "Didihkan air, masukkan irisan bawang merah.",
      "Masukkan pipilan jagung, rebus sampai setengah empuk.",
      "Masukkan bayam.",
      "Bumbui garam dan sedikit gula.",
      "Masak sebentar, angkat segera supaya bayam tetap hijau."
    ],
    kcal: 70, protg: 3, tags: ["seger", "berkuah", "ekonomis", "sayur_bening", "anak_friendly"]
  }),
  m({
    id: "sayur-bening-bayam-labu",
    name: "Sayur Bening Bayam Labu Kuning",
    cat: "sayur", pro: "none", met: "rebus", rich: 1, kuah: true, segar: true, menit: 18,
    bahan: [
      ["bayam", "1 ikat"], ["labu kuning", "100 gr"], ["jagung manis", "1/2 buah"],
      ["bawang merah", "3 butir"], ["bawang putih", "1 siung"], ["garam", "secukupnya"]
    ],
    langkah: [
      "Didihkan air dengan irisan bawang merah dan bawang putih.",
      "Masukkan labu kuning potong dadu dan jagung.",
      "Rebus sampai labu setengah empuk.",
      "Masukkan bayam, bumbui garam dan sedikit gula.",
      "Masak sebentar, angkat."
    ],
    kcal: 80, protg: 3, tags: ["seger", "berkuah", "ekonomis", "sayur_bening"]
  }),
  m({
    id: "sayur-asem",
    name: "Sayur Asem Jakarta",
    cat: "sayur", pro: "none", met: "rebus", rich: 1, kuah: true, segar: true, menit: 30,
    bahan: [
      ["kacang panjang", "5 batang"], ["labu siam", "1/2 buah"], ["jagung manis", "1/2 buah"],
      ["melinjo", "2 sdm"], ["asam jawa", "1 sdm"], ["cabe merah", "2 buah"],
      ["bawang merah", "4 butir"], ["kacang tanah", "2 sdm"]
    ],
    langkah: [
      "Haluskan bawang merah dan cabe, rebus dengan air dan melinjo.",
      "Masukkan jagung dan kacang tanah, rebus sampai empuk.",
      "Masukkan labu siam dan kacang panjang.",
      "Bumbui asam jawa, garam, dan gula merah.",
      "Masak sampai semua empuk dan kuah asam segar."
    ],
    kcal: 90, protg: 4, tags: ["seger", "berkuah", "klasik", "ekonomis", "sayur_asem"]
  }),
  m({
    id: "sayur-asem-kangkung",
    name: "Sayur Asem Kangkung",
    cat: "sayur", pro: "none", met: "rebus", rich: 1, kuah: true, segar: true, menit: 25,
    bahan: [
      ["kangkung", "1/2 ikat"], ["jagung manis", "1/2 buah"], ["labu siam", "1/2 buah"],
      ["asam jawa", "1 sdm"], ["cabe merah", "2 buah"], ["bawang merah", "4 butir"],
      ["bawang putih", "2 siung"], ["gula merah", "1 sdt"]
    ],
    langkah: [
      "Haluskan bawang dan cabe, rebus dengan air.",
      "Masukkan jagung dan labu siam, rebus sampai empuk.",
      "Bumbui asam jawa, gula merah, dan garam.",
      "Masukkan kangkung terakhir.",
      "Masak sebentar, angkat."
    ],
    kcal: 80, protg: 3, tags: ["seger", "berkuah", "ekonomis", "sayur_asem"]
  }),
  m({
    id: "sayur-lodeh",
    name: "Sayur Lodeh Komplit",
    cat: "sayur", pro: "none", met: "santan", rich: 3, santan: true, kuah: true,
    spice: 1, menit: 40, sulit: "sedang",
    bahan: [
      ["labu siam", "1/2 buah"], ["kacang panjang", "5 batang"], ["terong", "1 buah"],
      ["melinjo", "2 sdm"], ["santan kelapa", "150 ml"], ["cabe merah", "3 buah"],
      ["bawang merah", "5 butir"], ["lengkuas", "2 cm"], ["daun salam", "2 lembar"]
    ],
    langkah: [
      "Haluskan bawang merah, bawang putih, dan cabe.",
      "Rebus air dengan bumbu, lengkuas, dan daun salam.",
      "Masukkan sayuran yang keras dulu (melinjo, labu siam).",
      "Masukkan kacang panjang dan terong.",
      "Tuang santan, masak api kecil sampai matang, jangan sampai pecah."
    ],
    kcal: 160, protg: 4, tags: ["bersantan", "berkuah", "klasik", "ekonomis"]
  }),
  m({
    id: "lodeh-terong",
    name: "Lodeh Terong Kacang Panjang",
    cat: "sayur", pro: "none", met: "santan", rich: 3, santan: true, kuah: true,
    spice: 1, menit: 35, sulit: "sedang",
    bahan: [
      ["terong", "2 buah"], ["kacang panjang", "6 batang"], ["santan kelapa", "150 ml"],
      ["cabe merah", "3 buah"], ["bawang merah", "5 butir"], ["bawang putih", "2 siung"],
      ["lengkuas", "2 cm"], ["daun salam", "2 lembar"]
    ],
    langkah: [
      "Haluskan cabe dan bawang.",
      "Rebus air dengan bumbu, lengkuas, dan daun salam.",
      "Masukkan terong dan kacang panjang.",
      "Tuang santan, masak api kecil sambil diaduk.",
      "Masak sampai sayur empuk dan kuah gurih."
    ],
    kcal: 150, protg: 4, tags: ["bersantan", "berkuah", "ekonomis"]
  }),
  m({
    id: "bobor-bayam",
    name: "Bobor Bayam",
    cat: "sayur", pro: "none", met: "santan", rich: 2, santan: true, kuah: true, menit: 20,
    bahan: [
      ["bayam", "1 ikat"], ["santan kelapa", "100 ml"], ["jagung manis", "1/2 buah"],
      ["bawang merah", "4 butir"], ["bawang putih", "2 siung"], ["kencur", "1 cm"],
      ["daun salam", "1 lembar"], ["lengkuas", "1 cm"]
    ],
    langkah: [
      "Haluskan bawang dan kencur.",
      "Rebus air dengan bumbu, daun salam, dan lengkuas.",
      "Masukkan jagung, rebus sampai empuk.",
      "Tuang santan, masukkan bayam.",
      "Masak sebentar sampai bayam layu, angkat."
    ],
    kcal: 110, protg: 4, tags: ["bersantan", "berkuah", "ekonomis", "anak_friendly"]
  }),
  m({
    id: "gudeg-nangka",
    name: "Gudeg Nangka Muda",
    cat: "sayur", pro: "none", met: "santan", rich: 3, santan: true, menit: 90,
    sulit: "butuh_niat",
    bahan: [
      ["nangka muda", "300 gr"], ["santan kelapa", "200 ml"], ["gula merah", "3 sdm"],
      ["bawang merah", "6 butir"], ["bawang putih", "4 siung"], ["ketumbar", "1 sdt"],
      ["lengkuas", "3 cm"], ["daun salam", "3 lembar"]
    ],
    langkah: [
      "Rebus nangka muda sampai empuk, potong-potong.",
      "Haluskan bawang dan ketumbar.",
      "Rebus nangka dengan bumbu, gula merah, lengkuas, dan daun salam.",
      "Tuang santan, masak api kecil berjam-jam.",
      "Masak sampai kuah menyusut, cokelat, dan manis meresap."
    ],
    kcal: 220, protg: 5, tags: ["manis", "bersantan", "klasik", "weekend"]
  }),
  m({
    id: "tumis-terong-balado",
    name: "Terong Balado",
    cat: "sayur", pro: "none", met: "goreng", rich: 2, spice: 2, menit: 25,
    bahan: [
      ["terong", "2 buah"], ["cabe merah", "6 buah"], ["bawang merah", "5 butir"],
      ["tomat", "1 buah"], ["gula pasir", "1/2 sdt"], ["garam", "secukupnya"],
      ["minyak goreng", "untuk menggoreng"]
    ],
    langkah: [
      "Potong terong, goreng sampai layu keemasan, tiriskan.",
      "Ulek kasar cabe, bawang merah, dan tomat.",
      "Tumis sambal sampai matang berminyak.",
      "Bumbui garam dan gula.",
      "Masukkan terong, aduk perlahan sampai terbalut sambal."
    ],
    kcal: 140, protg: 3, tags: ["pedas", "klasik", "ekonomis"]
  }),
  m({
    id: "terong-goreng-tepung",
    name: "Terong Goreng Tepung Cabe Garam",
    cat: "sayur", pro: "none", met: "goreng", rich: 2, spice: 1, menit: 25,
    bahan: [
      ["terong", "2 buah"], ["tepung bumbu", "5 sdm"], ["cabe rawit", "3 buah"],
      ["bawang putih", "2 siung"], ["daun bawang", "1 batang"], ["garam", "secukupnya"]
    ],
    langkah: [
      "Iris terong tipis memanjang.",
      "Balur tepung bumbu, goreng sampai garing, tiriskan.",
      "Tumis bawang putih dan cabe rawit cincang.",
      "Masukkan terong goreng, bumbui garam.",
      "Taburi daun bawang, aduk cepat, angkat."
    ],
    kcal: 180, protg: 4, tags: ["pedas", "gurih", "ekonomis", "anak_friendly"]
  }),
  m({
    id: "cah-sawi-putih",
    name: "Cah Sawi Putih Bakso",
    cat: "sayur", pro: "none", met: "tumis", rich: 1, menit: 15,
    bahan: [
      ["sawi putih", "1/2 buah"], ["bakso sapi", "4 butir"], ["bawang putih", "3 siung"],
      ["saus tiram", "1 sdm"], ["daun bawang", "1 batang"], ["garam", "secukupnya"]
    ],
    langkah: [
      "Potong sawi putih, iris bakso.",
      "Tumis bawang putih sampai harum.",
      "Masukkan bakso, aduk sebentar.",
      "Masukkan sawi putih dan saus tiram.",
      "Masak sampai sawi layu, taburi daun bawang, angkat."
    ],
    kcal: 130, protg: 8, tags: ["cepat", "anak_friendly", "gurih"]
  }),
  m({
    id: "cah-sawi-hijau",
    name: "Cah Sawi Hijau Bawang Putih",
    cat: "sayur", pro: "none", met: "tumis", rich: 1, menit: 12,
    bahan: [
      ["sawi hijau", "1 ikat"], ["bawang putih", "4 siung"], ["kaldu bubuk", "1/2 sdt"],
      ["garam", "secukupnya"], ["minyak goreng", "2 sdm"]
    ],
    langkah: [
      "Potong sawi hijau, cuci bersih.",
      "Cincang bawang putih, tumis sampai harum keemasan.",
      "Masukkan sawi, aduk cepat api besar.",
      "Bumbui garam dan kaldu bubuk.",
      "Angkat saat sawi masih hijau renyah."
    ],
    kcal: 70, protg: 3, tags: ["cepat", "seger", "ekonomis", "tumis_hijau"]
  }),
  m({
    id: "cah-pakcoy",
    name: "Cah Pakcoy Bawang Putih",
    cat: "sayur", pro: "none", met: "tumis", rich: 1, menit: 12,
    bahan: [
      ["pakcoy", "3 buah"], ["bawang putih", "4 siung"], ["saus tiram", "1/2 sdm"],
      ["kaldu bubuk", "1/2 sdt"], ["garam", "secukupnya"], ["minyak goreng", "2 sdm"]
    ],
    langkah: [
      "Belah pakcoy, cuci bersih.",
      "Tumis bawang putih cincang sampai harum.",
      "Masukkan pakcoy, aduk cepat.",
      "Bumbui saus tiram, kaldu, dan garam.",
      "Masak sebentar, angkat saat masih hijau."
    ],
    kcal: 70, protg: 3, tags: ["cepat", "seger", "tumis_hijau", "anak_friendly"]
  }),
  m({
    id: "cah-brokoli-ayam",
    name: "Cah Brokoli Ayam",
    cat: "sayur", cui: "chinese_indo", pro: "ayam", met: "tumis", rich: 1, menit: 20,
    harga: "sedang",
    bahan: [
      ["brokoli", "1/2 buah"], ["dada ayam", "80 gr"], ["bawang putih", "3 siung"],
      ["saus tiram", "1 sdm"], ["wortel", "1/2 buah"], ["tepung maizena", "1/2 sdt"],
      ["garam", "secukupnya"]
    ],
    langkah: [
      "Rebus brokoli sebentar, tiriskan; iris ayam tipis.",
      "Tumis bawang putih, masukkan ayam sampai berubah warna.",
      "Masukkan wortel, aduk.",
      "Masukkan brokoli dan saus tiram plus sedikit air.",
      "Kentalkan dengan larutan maizena, angkat."
    ],
    kcal: 160, protg: 14, tags: ["gurih", "anak_friendly"]
  }),
  m({
    id: "cah-kembang-kol",
    name: "Cah Kembang Kol Wortel",
    cat: "sayur", cui: "chinese_indo", pro: "none", met: "tumis", rich: 1, menit: 18,
    bahan: [
      ["kembang kol", "1/2 buah"], ["wortel", "1 buah"], ["bawang putih", "3 siung"],
      ["saus tiram", "1 sdm"], ["daun bawang", "1 batang"], ["tepung maizena", "1/2 sdt"],
      ["garam", "secukupnya"]
    ],
    langkah: [
      "Potong kembang kol per kuntum, iris wortel.",
      "Tumis bawang putih sampai harum.",
      "Masukkan wortel dan kembang kol, beri sedikit air, tutup.",
      "Bumbui saus tiram dan garam.",
      "Kentalkan sedikit, taburi daun bawang, angkat."
    ],
    kcal: 90, protg: 4, tags: ["gurih", "anak_friendly", "ekonomis"]
  }),
  m({
    id: "capcay-kuah",
    name: "Capcay Kuah Sederhana",
    cat: "sayur", cui: "chinese_indo", pro: "none", met: "tumis", rich: 1, kuah: true,
    menit: 25,
    bahan: [
      ["sawi hijau", "3 lembar"], ["wortel", "1 buah"], ["kol", "50 gr"],
      ["bakso sapi", "4 butir"], ["bawang putih", "3 siung"], ["saus tiram", "1 sdm"],
      ["tepung maizena", "1 sdt"], ["daun bawang", "1 batang"]
    ],
    langkah: [
      "Potong-potong semua sayur, iris bakso.",
      "Tumis bawang putih, masukkan bakso.",
      "Masukkan wortel, lalu sayuran lain dan sedikit air.",
      "Bumbui saus tiram dan garam.",
      "Kentalkan dengan maizena, taburi daun bawang."
    ],
    kcal: 140, protg: 8, tags: ["berkuah", "anak_friendly", "gurih"]
  }),
  m({
    id: "tumis-kacang-panjang",
    name: "Tumis Kacang Panjang",
    cat: "sayur", pro: "none", met: "tumis", rich: 1, spice: 1, menit: 15,
    bahan: [
      ["kacang panjang", "1 ikat"], ["cabe merah", "2 buah"], ["bawang merah", "4 butir"],
      ["bawang putih", "2 siung"], ["daun salam", "1 lembar"], ["garam", "secukupnya"]
    ],
    langkah: [
      "Potong kacang panjang 3 cm.",
      "Iris bawang dan cabe, tumis dengan daun salam.",
      "Masukkan kacang panjang, aduk.",
      "Beri sedikit air, tutup sebentar.",
      "Bumbui garam, masak sampai matang tapi renyah."
    ],
    kcal: 90, protg: 3, tags: ["cepat", "ekonomis"]
  }),
  m({
    id: "oseng-kacang-panjang-tempe",
    name: "Oseng Kacang Panjang Tempe",
    cat: "sayur", pro: "tempe_tahu", met: "tumis", rich: 2, spice: 1, menit: 20,
    bahan: [
      ["kacang panjang", "1/2 ikat"], ["tempe", "1/2 papan"], ["cabe merah", "3 buah"],
      ["bawang merah", "4 butir"], ["bawang putih", "2 siung"], ["kecap manis", "1 sdm"],
      ["daun salam", "1 lembar"], ["garam", "secukupnya"]
    ],
    langkah: [
      "Potong tempe dadu, goreng setengah kering.",
      "Potong kacang panjang, iris cabe dan bawang.",
      "Tumis bumbu sampai harum, masukkan tempe.",
      "Masukkan kacang panjang dan kecap manis.",
      "Masak sampai matang, bumbui garam, angkat."
    ],
    kcal: 180, protg: 11, tags: ["pedas", "manis", "ekonomis"]
  }),
  m({
    id: "urap-sayur",
    name: "Urap Sayuran",
    cat: "sayur", pro: "none", met: "rebus", rich: 1, spice: 1, segar: true, menit: 30,
    sulit: "sedang",
    bahan: [
      ["kangkung", "1/2 ikat"], ["tauge", "50 gr"], ["kacang panjang", "3 batang"],
      ["kelapa parut", "100 gr"], ["cabe merah", "3 buah"], ["kencur", "1 cm"],
      ["bawang putih", "2 siung"], ["daun jeruk", "2 lembar"]
    ],
    langkah: [
      "Rebus semua sayuran terpisah sampai matang, tiriskan.",
      "Haluskan cabe, kencur, bawang putih, dan garam.",
      "Campur bumbu dengan kelapa parut dan daun jeruk iris.",
      "Kukus atau sangrai kelapa berbumbu sebentar.",
      "Campur sayuran dengan kelapa urap, aduk rata."
    ],
    kcal: 150, protg: 5, tags: ["seger", "klasik", "ekonomis", "urap_lalap"]
  }),
  m({
    id: "pecel-sayur",
    name: "Pecel Sayur Bumbu Kacang",
    cat: "sayur", pro: "none", met: "rebus", rich: 2, spice: 2, segar: true, menit: 30,
    sulit: "sedang",
    bahan: [
      ["kangkung", "1/2 ikat"], ["tauge", "50 gr"], ["kacang panjang", "3 batang"],
      ["kacang tanah", "100 gr"], ["cabe rawit", "4 buah"], ["kencur", "1 cm"],
      ["gula merah", "1 sdm"], ["asam jawa", "1/2 sdt"]
    ],
    langkah: [
      "Rebus sayuran sampai matang, tiriskan.",
      "Goreng kacang tanah, ulek dengan cabe, kencur, dan bawang putih.",
      "Bumbui gula merah, asam jawa, dan garam.",
      "Encerkan bumbu kacang dengan air hangat.",
      "Siram sayuran dengan bumbu pecel."
    ],
    kcal: 220, protg: 9, tags: ["pedas", "seger", "klasik", "ekonomis", "urap_lalap"]
  }),
  m({
    id: "karedok",
    name: "Karedok Sayuran Mentah",
    cat: "sayur", pro: "none", met: "rebus", rich: 2, spice: 2, segar: true, menit: 25,
    bahan: [
      ["timun", "1 buah"], ["tauge", "50 gr"], ["kacang panjang", "3 batang"],
      ["kol", "50 gr"], ["kacang tanah", "100 gr"], ["cabe rawit", "4 buah"],
      ["kencur", "1 cm"], ["gula merah", "1 sdm"]
    ],
    langkah: [
      "Iris tipis timun, kacang panjang, dan kol; siapkan tauge.",
      "Goreng kacang tanah, ulek dengan cabe dan kencur.",
      "Bumbui gula merah, garam, dan terasi bila suka.",
      "Encerkan bumbu dengan air matang.",
      "Aduk sayuran mentah dengan bumbu kacang, sajikan segera."
    ],
    kcal: 200, protg: 8, tags: ["pedas", "seger", "klasik", "ekonomis", "urap_lalap"]
  }),
  m({
    id: "plecing-kangkung",
    name: "Plecing Kangkung",
    cat: "sayur", pro: "none", met: "rebus", rich: 1, spice: 3, segar: true, menit: 20,
    bahan: [
      ["kangkung", "1 ikat"], ["cabe rawit", "8 buah"], ["tomat", "1 buah"],
      ["terasi", "1/2 sdt"], ["bawang putih", "2 siung"], ["jeruk limau", "1 buah"],
      ["garam", "secukupnya"]
    ],
    langkah: [
      "Rebus kangkung sebentar, tiriskan, tata di piring.",
      "Ulek cabe rawit, tomat, terasi bakar, dan bawang putih.",
      "Bumbui garam dan gula.",
      "Beri perasan jeruk limau ke sambal.",
      "Siram sambal plecing di atas kangkung rebus."
    ],
    kcal: 90, protg: 4, tags: ["pedas", "seger", "ekonomis", "tumis_hijau"]
  }),
  m({
    id: "trancam",
    name: "Trancam Kelapa Muda",
    cat: "sayur", pro: "none", met: "rebus", rich: 1, spice: 1, segar: true, menit: 25,
    bahan: [
      ["tauge", "50 gr"], ["timun", "1 buah"], ["kacang panjang", "3 batang"],
      ["kemangi", "1 genggam"], ["kelapa parut", "80 gr"], ["cabe rawit", "3 buah"],
      ["kencur", "1 cm"], ["daun jeruk", "2 lembar"]
    ],
    langkah: [
      "Iris tipis semua sayuran mentah.",
      "Ulek cabe, kencur, bawang putih, dan garam.",
      "Campur bumbu dengan kelapa parut segar dan daun jeruk.",
      "Campurkan sayuran mentah dengan kelapa berbumbu.",
      "Tambah kemangi, aduk, sajikan segera."
    ],
    kcal: 130, protg: 4, tags: ["seger", "ekonomis", "urap_lalap"]
  }),
  m({
    id: "sayur-lompong",
    name: "Bening Daun Kelor Jagung",
    cat: "sayur", pro: "none", met: "rebus", rich: 1, kuah: true, segar: true, menit: 15,
    bahan: [
      ["daun kelor", "2 genggam"], ["jagung manis", "1/2 buah"], ["bawang merah", "3 butir"],
      ["bawang putih", "1 siung"], ["garam", "secukupnya"], ["gula pasir", "1/2 sdt"]
    ],
    langkah: [
      "Didihkan air dengan irisan bawang.",
      "Masukkan pipilan jagung, rebus sampai empuk.",
      "Masukkan daun kelor.",
      "Bumbui garam dan gula.",
      "Masak sebentar, angkat."
    ],
    kcal: 70, protg: 4, tags: ["seger", "berkuah", "ekonomis", "sayur_bening"]
  }),
  m({
    id: "gori-lodeh",
    name: "Sayur Tempe Lombok Ijo",
    cat: "sayur", pro: "tempe_tahu", met: "santan", rich: 2, santan: true, kuah: true,
    spice: 2, menit: 30,
    bahan: [
      ["tempe", "1/2 papan"], ["cabe hijau", "8 buah"], ["santan instan", "80 ml"],
      ["bawang merah", "5 butir"], ["bawang putih", "2 siung"], ["lengkuas", "2 cm"],
      ["daun salam", "2 lembar"], ["garam", "secukupnya"]
    ],
    langkah: [
      "Potong tempe dadu, iris serong cabe hijau dan bawang.",
      "Tumis bawang dengan lengkuas dan daun salam.",
      "Masukkan tempe dan cabe hijau, aduk.",
      "Tuang santan encer, masak api kecil.",
      "Masak sampai kuah agak menyusut dan gurih pedas."
    ],
    kcal: 200, protg: 12, tags: ["pedas", "bersantan", "berkuah", "ekonomis"]
  }),
  m({
    id: "oseng-pare-teri",
    name: "Oseng Pare Teri",
    cat: "sayur", pro: "none", met: "tumis", rich: 1, spice: 2, menit: 20,
    bahan: [
      ["pare", "1 buah"], ["ikan teri", "30 gr"], ["cabe merah", "3 buah"],
      ["bawang merah", "4 butir"], ["bawang putih", "2 siung"], ["gula merah", "1/2 sdt"],
      ["garam", "secukupnya"]
    ],
    langkah: [
      "Iris tipis pare, remas dengan garam, bilas untuk kurangi pahit.",
      "Goreng teri sampai garing.",
      "Tumis bawang dan cabe iris sampai harum.",
      "Masukkan pare, aduk sampai layu.",
      "Masukkan teri dan gula merah, aduk, angkat."
    ],
    kcal: 120, protg: 7, tags: ["pedas", "gurih", "ekonomis"]
  }),
  m({
    id: "tumis-oyong-soun",
    name: "Tumis Oyong Soun",
    cat: "sayur", pro: "none", met: "tumis", rich: 1, kuah: true, menit: 20,
    bahan: [
      ["oyong", "2 buah"], ["soun", "50 gr"], ["wortel", "1/2 buah"],
      ["bawang putih", "3 siung"], ["ebi", "1 sdm"], ["daun bawang", "1 batang"],
      ["garam", "secukupnya"]
    ],
    langkah: [
      "Kupas dan potong oyong, seduh soun sampai lunak.",
      "Rendam ebi, tumbuk; tumis dengan bawang putih.",
      "Masukkan wortel dan oyong, beri sedikit air.",
      "Masukkan soun, bumbui garam.",
      "Masak sampai oyong empuk, taburi daun bawang."
    ],
    kcal: 120, protg: 4, tags: ["berkuah", "ekonomis", "anak_friendly"]
  }),
  m({
    id: "tumis-jamur-tiram",
    name: "Tumis Jamur Tiram Pedas",
    cat: "sayur", pro: "none", met: "tumis", rich: 1, spice: 2, menit: 18,
    bahan: [
      ["jamur tiram", "200 gr"], ["cabe rawit", "5 buah"], ["bawang merah", "4 butir"],
      ["bawang putih", "2 siung"], ["kecap manis", "1 sdm"], ["daun bawang", "1 batang"],
      ["garam", "secukupnya"]
    ],
    langkah: [
      "Suwir jamur tiram, remas untuk kurangi air.",
      "Iris cabe dan bawang, tumis sampai harum.",
      "Masukkan jamur, aduk sampai layu.",
      "Bumbui kecap manis dan garam.",
      "Masak sampai agak kering, taburi daun bawang."
    ],
    kcal: 110, protg: 6, tags: ["pedas", "gurih", "ekonomis"]
  }),
  m({
    id: "sayur-daun-singkong",
    name: "Sayur Daun Singkong Santan",
    cat: "sayur", pro: "none", met: "santan", rich: 3, santan: true, kuah: true,
    spice: 1, menit: 45, sulit: "sedang",
    bahan: [
      ["daun singkong", "1 ikat"], ["santan kelapa", "150 ml"], ["cabe merah", "3 buah"],
      ["bawang merah", "5 butir"], ["bawang putih", "2 siung"], ["lengkuas", "2 cm"],
      ["serai", "1 batang"], ["daun salam", "2 lembar"]
    ],
    langkah: [
      "Rebus daun singkong sampai empuk, tiriskan.",
      "Haluskan cabe dan bawang.",
      "Tumis bumbu dengan lengkuas, serai, dan daun salam.",
      "Tuang santan, masukkan daun singkong.",
      "Masak api kecil sampai kuah gurih meresap."
    ],
    kcal: 170, protg: 6, tags: ["bersantan", "berkuah", "klasik", "ekonomis"]
  }),
  m({
    id: "buntil-daun-singkong",
    name: "Buntil Daun Pepaya",
    cat: "sayur", pro: "none", met: "santan", rich: 3, santan: true, kuah: true,
    spice: 2, menit: 60, sulit: "butuh_niat",
    bahan: [
      ["daun pepaya", "5 lembar"], ["kelapa parut", "100 gr"], ["ikan teri", "30 gr"],
      ["santan kelapa", "150 ml"], ["cabe rawit", "6 buah"], ["bawang merah", "5 butir"],
      ["kencur", "2 cm"], ["daun salam", "2 lembar"]
    ],
    langkah: [
      "Rebus daun pepaya sampai empuk, tiriskan.",
      "Campur kelapa parut, teri, dan bumbu halus jadi isian.",
      "Bungkus isian dengan daun pepaya, ikat.",
      "Rebus buntil dalam kuah santan berbumbu.",
      "Masak sampai kuah menyusut dan buntil matang."
    ],
    kcal: 240, protg: 9, tags: ["pedas", "bersantan", "berkuah", "weekend"]
  }),
  m({
    id: "tumis-genjer",
    name: "Tumis Genjer Terasi",
    cat: "sayur", pro: "none", met: "tumis", rich: 1, spice: 2, menit: 15,
    bahan: [
      ["genjer", "1 ikat"], ["cabe rawit", "5 buah"], ["terasi", "1/2 sdt"],
      ["bawang merah", "4 butir"], ["bawang putih", "2 siung"], ["tomat", "1/2 buah"],
      ["garam", "secukupnya"]
    ],
    langkah: [
      "Petik genjer, cuci bersih, potong-potong.",
      "Ulek kasar cabe, bawang, dan terasi.",
      "Tumis bumbu sampai matang harum.",
      "Masukkan genjer dan tomat, aduk api besar.",
      "Bumbui garam, masak sampai layu, angkat."
    ],
    kcal: 90, protg: 3, tags: ["pedas", "seger", "ekonomis"]
  }),
  m({
    id: "tumis-daun-pepaya",
    name: "Tumis Daun Pepaya Teri",
    cat: "sayur", pro: "none", met: "tumis", rich: 1, spice: 2, menit: 30,
    bahan: [
      ["daun pepaya", "5 lembar"], ["ikan teri", "30 gr"], ["cabe merah", "4 buah"],
      ["bawang merah", "5 butir"], ["bawang putih", "2 siung"], ["tomat", "1 buah"],
      ["garam", "secukupnya"]
    ],
    langkah: [
      "Rebus daun pepaya dengan sedikit garam, buang air, iris.",
      "Goreng teri sampai garing.",
      "Tumis bawang dan cabe iris sampai harum.",
      "Masukkan daun pepaya dan tomat.",
      "Masukkan teri, bumbui garam, aduk, angkat."
    ],
    kcal: 130, protg: 8, tags: ["pedas", "gurih", "ekonomis"]
  }),
  m({
    id: "tumis-toge-ikan-asin-cabe",
    name: "Tumis Kembang Kol Sosis",
    cat: "sayur", cui: "western_simple", pro: "none", met: "tumis", rich: 1, menit: 18,
    harga: "sedang",
    bahan: [
      ["kembang kol", "1/2 buah"], ["sosis", "2 buah"], ["wortel", "1/2 buah"],
      ["bawang putih", "3 siung"], ["saus tomat", "1 sdm"], ["daun bawang", "1 batang"],
      ["garam", "secukupnya"]
    ],
    langkah: [
      "Potong kembang kol, iris sosis dan wortel.",
      "Tumis bawang putih sampai harum.",
      "Masukkan sosis, aduk sebentar.",
      "Masukkan wortel dan kembang kol, beri sedikit air.",
      "Bumbui saus tomat dan garam, taburi daun bawang."
    ],
    kcal: 160, protg: 7, tags: ["anak_friendly", "gurih"]
  }),
  m({
    id: "orak-arik-buncis",
    name: "Orak-Arik Buncis Telur",
    cat: "sayur", pro: "telur", met: "tumis", rich: 1, menit: 15,
    bahan: [
      ["buncis", "100 gr"], ["telur ayam", "1 butir"], ["wortel", "1/2 buah"],
      ["bawang putih", "2 siung"], ["bawang merah", "3 butir"], ["garam", "secukupnya"],
      ["merica", "1/4 sdt"]
    ],
    langkah: [
      "Iris tipis buncis dan wortel.",
      "Tumis bawang sampai harum.",
      "Masukkan wortel dan buncis, beri sedikit air, masak sampai empuk.",
      "Pinggirkan sayur, orak-arik telur di sisi wajan.",
      "Aduk rata, bumbui garam dan merica, angkat."
    ],
    kcal: 130, protg: 8, tags: ["cepat", "anak_friendly", "ekonomis"]
  }),
  m({
    id: "tumis-rebung",
    name: "Tumis Rebung Cabe Hijau",
    cat: "sayur", pro: "none", met: "tumis", rich: 1, spice: 2, menit: 25,
    bahan: [
      ["rebung", "200 gr"], ["cabe hijau", "5 buah"], ["bawang merah", "4 butir"],
      ["bawang putih", "2 siung"], ["ebi", "1 sdm"], ["daun salam", "1 lembar"],
      ["garam", "secukupnya"]
    ],
    langkah: [
      "Rebus rebung iris sampai empuk, buang air, tiriskan.",
      "Rendam ebi, tumbuk kasar.",
      "Tumis bawang, cabe hijau, dan ebi dengan daun salam.",
      "Masukkan rebung, aduk rata.",
      "Bumbui garam, masak sampai meresap, angkat."
    ],
    kcal: 110, protg: 4, tags: ["pedas", "gurih", "ekonomis"]
  }),
  m({
    id: "gado-gado-sayur",
    name: "Gado-Gado Siram",
    cat: "one_dish", pro: "tempe_tahu", met: "rebus", rich: 2, spice: 1, segar: true,
    menit: 35, sulit: "sedang",
    bahan: [
      ["kentang", "1 buah"], ["tauge", "50 gr"], ["kol", "50 gr"], ["tahu", "2 buah"],
      ["telur ayam", "2 butir"], ["kacang tanah", "100 gr"], ["lontong", "1 buah"],
      ["kerupuk", "secukupnya"]
    ],
    langkah: [
      "Rebus kentang, tauge, dan kol; rebus telur, goreng tahu.",
      "Goreng kacang, ulek dengan cabe, bawang putih, dan gula merah.",
      "Encerkan bumbu kacang dengan air matang sampai kekentalan pas.",
      "Tata lontong, sayuran, tahu, dan telur di piring.",
      "Siram bumbu kacang, taburi kerupuk dan bawang goreng."
    ],
    kcal: 380, protg: 16, tags: ["seger", "klasik", "ekonomis"]
  }),
  m({
    id: "sayur-kol-goreng",
    name: "Tumis Kol Wortel Sederhana",
    cat: "sayur", pro: "none", met: "tumis", rich: 1, menit: 12,
    bahan: [
      ["kol", "1/4 buah"], ["wortel", "1 buah"], ["bawang putih", "3 siung"],
      ["bawang merah", "3 butir"], ["kaldu bubuk", "1/2 sdt"], ["garam", "secukupnya"]
    ],
    langkah: [
      "Iris kol dan wortel korek api.",
      "Tumis bawang putih dan bawang merah sampai harum.",
      "Masukkan wortel dulu, aduk sebentar.",
      "Masukkan kol, beri sedikit air, aduk cepat.",
      "Bumbui garam dan kaldu, angkat saat masih renyah."
    ],
    kcal: 80, protg: 3, tags: ["cepat", "ekonomis", "anak_friendly"]
  }),
  m({
    id: "tumis-labu-kuning",
    name: "Tumis Labu Kuning Santan",
    cat: "sayur", pro: "none", met: "santan", rich: 2, santan: true, kuah: true, menit: 25,
    bahan: [
      ["labu kuning", "250 gr"], ["santan instan", "80 ml"], ["cabe merah", "2 buah"],
      ["bawang merah", "4 butir"], ["bawang putih", "2 siung"], ["daun salam", "1 lembar"],
      ["lengkuas", "1 cm"]
    ],
    langkah: [
      "Potong dadu labu kuning.",
      "Tumis bawang dan cabe iris dengan daun salam dan lengkuas.",
      "Masukkan labu, aduk rata.",
      "Tuang santan encer, masak sampai labu empuk.",
      "Bumbui garam, koreksi rasa, angkat."
    ],
    kcal: 140, protg: 3, tags: ["bersantan", "berkuah", "manis", "ekonomis"]
  }),
  m({
    id: "tumis-taoge-tahu-ikan-asin",
    name: "Tumis Sawi Asin Tahu",
    cat: "sayur", cui: "chinese_indo", pro: "tempe_tahu", met: "tumis", rich: 1, menit: 15,
    bahan: [
      ["sawi putih", "1/2 buah"], ["tahu kuning", "2 buah"], ["bawang putih", "3 siung"],
      ["cabe rawit", "3 buah"], ["kecap asin", "1/2 sdm"], ["daun bawang", "1 batang"],
      ["garam", "secukupnya"]
    ],
    langkah: [
      "Potong sawi dan goreng tahu, potong dadu.",
      "Tumis bawang putih dan cabe rawit sampai harum.",
      "Masukkan tahu, aduk sebentar.",
      "Masukkan sawi, aduk cepat, bumbui kecap asin dan garam.",
      "Taburi daun bawang, angkat saat sawi masih renyah."
    ],
    kcal: 130, protg: 9, tags: ["cepat", "gurih", "ekonomis"]
  }),
  m({
    id: "lalapan-sambal-terasi",
    name: "Lalapan Sambal Terasi",
    cat: "sayur", pro: "none", met: "rebus", rich: 1, spice: 3, segar: true, menit: 15,
    bahan: [
      ["timun", "1 buah"], ["selada", "5 lembar"], ["kemangi", "1 genggam"],
      ["kol", "50 gr"], ["cabe rawit", "8 buah"], ["terasi", "1/2 sdt"],
      ["tomat", "1 buah"], ["jeruk limau", "1 buah"]
    ],
    langkah: [
      "Cuci bersih semua lalapan, tata di piring.",
      "Bakar terasi sampai harum.",
      "Ulek cabe rawit, terasi, tomat, garam, dan gula.",
      "Beri perasan jeruk limau.",
      "Sajikan lalapan dengan sambal terasi."
    ],
    kcal: 60, protg: 2, tags: ["pedas", "seger", "ekonomis", "urap_lalap"]
  }),
  m({
    id: "cah-jamur-pakcoy",
    name: "Cah Jamur Pakcoy",
    cat: "sayur", cui: "chinese_indo", pro: "none", met: "tumis", rich: 1, menit: 18,
    bahan: [
      ["jamur tiram", "100 gr"], ["pakcoy", "3 buah"], ["bawang putih", "3 siung"],
      ["saus tiram", "1 sdm"], ["tepung maizena", "1/2 sdt"], ["daun bawang", "1 batang"],
      ["garam", "secukupnya"]
    ],
    langkah: [
      "Suwir jamur, potong pakcoy.",
      "Tumis bawang putih sampai harum.",
      "Masukkan jamur, aduk sampai layu.",
      "Masukkan pakcoy dan saus tiram plus sedikit air.",
      "Kentalkan dengan maizena, taburi daun bawang, angkat."
    ],
    kcal: 90, protg: 5, tags: ["gurih", "cepat", "tumis_hijau"]
  }),
  m({
    id: "asem-asem-buncis",
    name: "Asem-Asem Buncis",
    cat: "sayur", pro: "none", met: "rebus", rich: 1, kuah: true, segar: true, spice: 1,
    menit: 25,
    bahan: [
      ["buncis", "150 gr"], ["tomat", "1 buah"], ["belimbing wuluh", "3 buah"],
      ["bawang merah", "4 butir"], ["bawang putih", "2 siung"], ["cabe rawit", "3 buah"],
      ["gula merah", "1/2 sdt"], ["garam", "secukupnya"]
    ],
    langkah: [
      "Potong buncis, iris bawang, tomat, dan belimbing wuluh.",
      "Tumis bawang dan cabe sampai harum.",
      "Tuang air, didihkan.",
      "Masukkan buncis, tomat, dan belimbing wuluh.",
      "Bumbui gula merah dan garam, masak sampai kuah asam segar."
    ],
    kcal: 90, protg: 4, tags: ["seger", "berkuah", "ekonomis", "sayur_asem"]
  }),
  m({
    id: "tumis-nangka-muda",
    name: "Oseng Nangka Muda Pedas",
    cat: "sayur", pro: "none", met: "tumis", rich: 2, spice: 2, menit: 40,
    sulit: "sedang",
    bahan: [
      ["nangka muda", "250 gr"], ["cabe merah", "5 buah"], ["bawang merah", "5 butir"],
      ["bawang putih", "3 siung"], ["lengkuas", "2 cm"], ["daun salam", "2 lembar"],
      ["gula merah", "1 sdt"], ["garam", "secukupnya"]
    ],
    langkah: [
      "Rebus nangka muda sampai empuk, potong-potong.",
      "Haluskan cabe dan bawang, tumis dengan lengkuas dan daun salam.",
      "Masukkan nangka, aduk rata.",
      "Bumbui gula merah dan garam, beri sedikit air.",
      "Masak sampai bumbu meresap, angkat."
    ],
    kcal: 130, protg: 4, tags: ["pedas", "ekonomis"]
  }),
  m({
    id: "acar-kuning-sayur",
    name: "Acar Kuning Sayur",
    cat: "sayur", pro: "none", met: "tumis", rich: 1, segar: true, spice: 1, menit: 20,
    bahan: [
      ["wortel", "1 buah"], ["timun", "1 buah"], ["kol", "50 gr"], ["cabe rawit", "5 buah utuh"],
      ["kunyit", "1 cm"], ["bawang merah", "4 butir"], ["cuka", "1 sdm"], ["gula pasir", "1 sdm"]
    ],
    langkah: [
      "Potong korek api wortel dan timun, iris kol.",
      "Haluskan kunyit dan bawang, tumis sampai harum.",
      "Tuang air, cuka, gula, dan garam.",
      "Masukkan sayuran dan cabe rawit utuh.",
      "Masak sebentar sampai layu tapi renyah, angkat."
    ],
    kcal: 80, protg: 2, tags: ["seger", "ekonomis", "acar"]
  })
];
