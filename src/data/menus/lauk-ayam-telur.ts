import type { Menu } from "../types";
import { m } from "../menuHelpers";

/** Lauk utama — ayam & telur. Baca TAGGING.md sebelum menambah. */
export const LAUK_AYAM_TELUR: Menu[] = [
  m({
    id: "ayam-goreng-lengkuas",
    name: "Ayam Goreng Lengkuas",
    cat: "lauk_utama", pro: "ayam", met: "goreng", rich: 2, menit: 45,
    sulit: "sedang", harga: "sedang",
    bahan: [
      ["ayam", "200 gr"], ["lengkuas", "3 cm parut"], ["bawang putih", "2 siung"],
      ["bawang merah", "3 butir"], ["ketumbar", "1/2 sdt"], ["daun salam", "1 lembar"],
      ["garam", "secukupnya"], ["minyak goreng", "untuk menggoreng"]
    ],
    langkah: [
      "Haluskan bawang merah, bawang putih, dan ketumbar; campur dengan lengkuas parut.",
      "Ungkep ayam bersama bumbu, daun salam, garam, dan sedikit air.",
      "Masak sampai air menyusut dan ayam empuk, sekitar 25 menit.",
      "Panaskan minyak, goreng ayam sampai kuning keemasan.",
      "Goreng sisa lengkuas ungkepan sampai kering, taburkan di atas ayam."
    ],
    kcal: 300, protg: 26, tags: ["klasik", "gurih", "ayam_goreng"]
  }),
  m({
    id: "ayam-goreng-bumbu-kuning",
    name: "Ayam Goreng Bumbu Kuning",
    cat: "lauk_utama", pro: "ayam", met: "goreng", rich: 2, menit: 45,
    sulit: "sedang", harga: "sedang",
    bahan: [
      ["ayam", "200 gr"], ["kunyit", "3 cm"], ["bawang putih", "2 siung"],
      ["bawang merah", "4 butir"], ["kemiri", "2 butir"], ["jahe", "1 cm"],
      ["serai", "1 batang"], ["garam", "secukupnya"], ["minyak goreng", "untuk menggoreng"]
    ],
    langkah: [
      "Haluskan bawang merah, bawang putih, kunyit, kemiri, dan jahe.",
      "Ungkep ayam dengan bumbu halus, serai, garam, dan segelas air.",
      "Masak sampai bumbu meresap dan air menyusut.",
      "Goreng ayam dalam minyak panas sampai keemasan.",
      "Tiriskan, sajikan dengan nasi hangat."
    ],
    kcal: 300, protg: 26, tags: ["klasik", "ayam_goreng"]
  }),
  m({
    id: "ayam-goreng-serundeng",
    name: "Ayam Goreng Serundeng",
    cat: "lauk_utama", pro: "ayam", met: "goreng", rich: 2, menit: 55,
    sulit: "sedang", harga: "sedang",
    bahan: [
      ["ayam", "200 gr"], ["kelapa parut", "50 gr"], ["ketumbar", "1 sdt"],
      ["bawang putih", "2 siung"], ["bawang merah", "4 butir"], ["lengkuas", "2 cm"],
      ["daun jeruk", "2 lembar"], ["gula merah", "1 sdt"], ["garam", "secukupnya"]
    ],
    langkah: [
      "Haluskan bawang merah, bawang putih, ketumbar, dan lengkuas.",
      "Ungkep ayam dengan setengah bumbu sampai empuk, lalu goreng sebentar.",
      "Sangrai kelapa parut dengan sisa bumbu, daun jeruk, dan gula merah.",
      "Aduk terus dengan api kecil sampai kering keemasan.",
      "Taburkan serundeng di atas ayam goreng."
    ],
    kcal: 380, protg: 27, tags: ["klasik", "gurih", "ayam_goreng", "serundeng"]
  }),
  m({
    id: "ayam-goreng-kalasan",
    name: "Ayam Goreng Kalasan",
    cat: "lauk_utama", pro: "ayam", met: "goreng", rich: 3, santan: true, menit: 60,
    sulit: "sedang", harga: "sedang",
    bahan: [
      ["ayam", "200 gr"], ["santan kelapa", "100 ml"], ["gula merah", "1 sdm"],
      ["bawang putih", "3 siung"], ["ketumbar", "1 sdt"], ["lengkuas", "2 cm"],
      ["daun salam", "2 lembar"], ["garam", "secukupnya"]
    ],
    langkah: [
      "Haluskan bawang putih, ketumbar, dan lengkuas.",
      "Ungkep ayam bersama bumbu, santan, gula merah, daun salam, dan garam.",
      "Masak api kecil sampai bumbu meresap dan kuah menyusut, sekitar 40 menit.",
      "Goreng ayam sebentar sampai kecokelatan.",
      "Sajikan dengan sisa bumbu ungkep yang dikentalkan."
    ],
    kcal: 380, protg: 27, tags: ["klasik", "manis", "bersantan", "ayam_goreng", "weekend"]
  }),
  m({
    id: "ayam-goreng-ketumbar",
    name: "Ayam Goreng Ketumbar",
    cat: "lauk_utama", pro: "ayam", met: "goreng", rich: 2, menit: 40,
    harga: "sedang",
    bahan: [
      ["ayam", "200 gr"], ["ketumbar", "1 sdm"], ["bawang putih", "3 siung"],
      ["jahe", "1 cm"], ["jeruk nipis", "1/2 buah"], ["garam", "secukupnya"],
      ["minyak goreng", "untuk menggoreng"]
    ],
    langkah: [
      "Lumuri ayam dengan air jeruk nipis, diamkan 10 menit.",
      "Haluskan bawang putih, ketumbar, jahe, dan garam.",
      "Balur ayam dengan bumbu, diamkan 15 menit.",
      "Goreng dalam minyak panas sampai matang keemasan.",
      "Angkat dan tiriskan."
    ],
    kcal: 290, protg: 26, tags: ["gurih", "ayam_goreng", "praktis"]
  }),
  m({
    id: "ayam-bakar-kecap",
    name: "Ayam Bakar Kecap",
    cat: "lauk_utama", pro: "ayam", met: "bakar", rich: 2, spice: 1, menit: 50,
    sulit: "sedang", harga: "sedang",
    bahan: [
      ["ayam", "200 gr"], ["kecap manis", "2 sdm"], ["bawang putih", "3 siung"],
      ["bawang merah", "4 butir"], ["kemiri", "2 butir"], ["jahe", "1 cm"],
      ["jeruk nipis", "1/2 buah"], ["garam", "secukupnya"]
    ],
    langkah: [
      "Haluskan bawang merah, bawang putih, kemiri, dan jahe.",
      "Ungkep ayam dengan bumbu, kecap, garam, dan sedikit air sampai empuk.",
      "Bakar ayam di teflon atau panggangan sambil olesi sisa bumbu kecap.",
      "Balik-balik sampai harum dan kecokelatan.",
      "Sajikan dengan perasan jeruk nipis."
    ],
    kcal: 320, protg: 26, tags: ["klasik", "manis", "ayam_bakar"]
  }),
  m({
    id: "ayam-bakar-bumbu-rujak",
    name: "Ayam Bakar Bumbu Rujak",
    cat: "lauk_utama", pro: "ayam", met: "bakar", rich: 3, santan: true, spice: 2,
    menit: 60, sulit: "sedang", harga: "sedang",
    bahan: [
      ["ayam", "200 gr"], ["cabe merah", "4 buah"], ["santan kelapa", "100 ml"],
      ["bawang merah", "4 butir"], ["bawang putih", "2 siung"], ["kemiri", "2 butir"],
      ["gula merah", "1 sdm"], ["asam jawa", "1 sdt"], ["garam", "secukupnya"]
    ],
    langkah: [
      "Haluskan cabe, bawang merah, bawang putih, dan kemiri.",
      "Tumis bumbu sampai harum, masukkan ayam, santan, gula merah, dan asam.",
      "Ungkep sampai kuah mengental dan ayam empuk.",
      "Bakar ayam sambil olesi bumbu sampai sedikit gosong harum.",
      "Sajikan dengan sisa bumbu rujak."
    ],
    kcal: 390, protg: 27, tags: ["pedas", "manis", "bersantan", "ayam_bakar", "weekend"]
  }),
  m({
    id: "ayam-bakar-taliwang",
    name: "Ayam Bakar Taliwang",
    cat: "lauk_utama", pro: "ayam", met: "bakar", rich: 2, spice: 3, menit: 55,
    sulit: "sedang", harga: "sedang",
    bahan: [
      ["ayam", "250 gr"], ["cabe rawit", "6 buah"], ["cabe merah", "4 buah"],
      ["bawang merah", "5 butir"], ["bawang putih", "3 siung"], ["terasi", "1/2 sdt"],
      ["tomat", "1 buah"], ["gula merah", "1 sdt"], ["jeruk limau", "1 buah"]
    ],
    langkah: [
      "Haluskan cabe, bawang, terasi, dan tomat; tumis sampai matang.",
      "Bakar ayam setengah matang di teflon.",
      "Olesi ayam dengan bumbu, bakar lagi sambil dibolak-balik.",
      "Ulangi olesan 2-3 kali sampai bumbu meresap.",
      "Beri perasan jeruk limau sebelum disajikan."
    ],
    kcal: 340, protg: 28, tags: ["pedas", "ayam_bakar", "weekend"]
  }),
  m({
    id: "ayam-panggang-teflon",
    name: "Ayam Panggang Teflon",
    cat: "lauk_utama", pro: "ayam", met: "panggang", rich: 2, menit: 35,
    harga: "sedang",
    bahan: [
      ["paha ayam", "1 potong"], ["bawang putih", "2 siung"], ["jahe", "1 cm"],
      ["kecap asin", "1 sdm"], ["merica", "1/4 sdt"], ["jeruk nipis", "1/2 buah"],
      ["garam", "secukupnya"]
    ],
    langkah: [
      "Lumuri ayam dengan jeruk nipis, bawang putih parut, jahe, kecap asin, dan merica.",
      "Diamkan minimal 15 menit supaya meresap.",
      "Panaskan teflon dengan sedikit minyak.",
      "Panggang ayam api kecil-sedang, tutup teflon, 10 menit tiap sisi.",
      "Angkat saat kecokelatan dan matang sampai ke dalam."
    ],
    kcal: 280, protg: 27, tags: ["praktis", "ayam_bakar", "anak_friendly"]
  }),
  m({
    id: "ayam-masak-kecap",
    name: "Ayam Masak Kecap",
    cat: "lauk_utama", pro: "ayam", met: "tumis", rich: 2, menit: 30,
    harga: "sedang",
    bahan: [
      ["ayam", "200 gr"], ["kecap manis", "2 sdm"], ["bawang bombay", "1/4 buah"],
      ["bawang putih", "3 siung"], ["jahe", "1 cm"], ["tomat", "1/2 buah"],
      ["merica", "1/4 sdt"], ["garam", "secukupnya"]
    ],
    langkah: [
      "Potong ayam kecil, goreng setengah matang, sisihkan.",
      "Tumis bawang putih, bawang bombay, dan jahe sampai harum.",
      "Masukkan ayam, kecap manis, merica, dan sedikit air.",
      "Masak sampai kuah mengental dan ayam matang.",
      "Tambahkan irisan tomat, aduk sebentar, angkat."
    ],
    kcal: 310, protg: 25, tags: ["manis", "anak_friendly", "praktis"]
  }),
  m({
    id: "semur-ayam",
    name: "Semur Ayam Kentang",
    cat: "lauk_utama", pro: "ayam", met: "rebus", rich: 2, kuah: true, menit: 50,
    sulit: "sedang", harga: "sedang",
    bahan: [
      ["ayam", "200 gr"], ["kentang", "1 buah"], ["kecap manis", "2 sdm"],
      ["bawang merah", "4 butir"], ["bawang putih", "2 siung"], ["kemiri", "2 butir"],
      ["pala", "1/4 sdt"], ["cengkeh", "2 butir"], ["garam", "secukupnya"]
    ],
    langkah: [
      "Haluskan bawang merah, bawang putih, dan kemiri; tumis sampai harum.",
      "Masukkan ayam, aduk sampai berubah warna.",
      "Tuang air, kecap manis, pala, cengkeh, dan garam.",
      "Masukkan kentang, masak api kecil sampai empuk dan kuah menyusut.",
      "Koreksi rasa manis-gurih, sajikan hangat."
    ],
    kcal: 350, protg: 25, tags: ["klasik", "manis", "berkuah", "anak_friendly"]
  }),
  m({
    id: "opor-ayam",
    name: "Opor Ayam",
    cat: "lauk_utama", pro: "ayam", met: "santan", rich: 3, santan: true, kuah: true,
    menit: 60, sulit: "sedang", harga: "sedang",
    bahan: [
      ["ayam", "200 gr"], ["santan kelapa", "150 ml"], ["bawang merah", "5 butir"],
      ["bawang putih", "3 siung"], ["kemiri", "3 butir"], ["ketumbar", "1 sdt"],
      ["lengkuas", "2 cm"], ["serai", "1 batang"], ["daun salam", "2 lembar"]
    ],
    langkah: [
      "Haluskan bawang merah, bawang putih, kemiri, dan ketumbar.",
      "Tumis bumbu dengan lengkuas, serai, dan daun salam sampai harum.",
      "Masukkan ayam, aduk sampai berubah warna.",
      "Tuang santan, masak api kecil sambil sesekali diaduk.",
      "Masak sampai ayam empuk dan kuah gurih, koreksi rasa."
    ],
    kcal: 400, protg: 26, tags: ["klasik", "bersantan", "berkuah", "weekend"]
  }),
  m({
    id: "gulai-ayam",
    name: "Gulai Ayam",
    cat: "lauk_utama", pro: "ayam", met: "santan", rich: 3, santan: true, kuah: true,
    spice: 1, menit: 60, sulit: "sedang", harga: "sedang",
    bahan: [
      ["ayam", "200 gr"], ["santan kelapa", "150 ml"], ["cabe merah", "3 buah"],
      ["bawang merah", "5 butir"], ["bawang putih", "3 siung"], ["kunyit", "2 cm"],
      ["jahe", "1 cm"], ["serai", "1 batang"], ["daun jeruk", "2 lembar"]
    ],
    langkah: [
      "Haluskan cabe, bawang, kunyit, dan jahe.",
      "Tumis bumbu halus dengan serai dan daun jeruk sampai matang.",
      "Masukkan ayam, aduk rata dengan bumbu.",
      "Tuang santan, masak api kecil sampai kuah berminyak.",
      "Koreksi rasa, sajikan dengan taburan bawang goreng."
    ],
    kcal: 410, protg: 26, tags: ["klasik", "bersantan", "berkuah", "gurih"]
  }),
  m({
    id: "ayam-rica-rica",
    name: "Ayam Rica-Rica",
    cat: "lauk_utama", pro: "ayam", met: "tumis", rich: 2, spice: 3, menit: 40,
    sulit: "sedang", harga: "sedang",
    bahan: [
      ["ayam", "200 gr"], ["cabe rawit", "8 buah"], ["cabe merah", "5 buah"],
      ["bawang merah", "5 butir"], ["bawang putih", "3 siung"], ["jahe", "2 cm"],
      ["serai", "1 batang"], ["daun jeruk", "3 lembar"], ["jeruk nipis", "1/2 buah"]
    ],
    langkah: [
      "Haluskan kasar cabe, bawang, dan jahe.",
      "Tumis bumbu dengan serai dan daun jeruk sampai harum.",
      "Masukkan ayam, aduk sampai berubah warna.",
      "Tambah sedikit air, masak sampai ayam matang dan bumbu mengering.",
      "Beri perasan jeruk nipis, aduk, angkat."
    ],
    kcal: 330, protg: 27, tags: ["pedas", "gurih"]
  }),
  m({
    id: "ayam-woku-kemangi",
    name: "Ayam Woku Kemangi",
    cat: "lauk_utama", pro: "ayam", met: "tumis", rich: 2, spice: 3, kuah: true,
    menit: 45, sulit: "sedang", harga: "sedang",
    bahan: [
      ["ayam", "200 gr"], ["cabe rawit", "6 buah"], ["cabe merah", "4 buah"],
      ["kemangi", "1 genggam"], ["kunyit", "2 cm"], ["jahe", "2 cm"],
      ["serai", "2 batang"], ["daun jeruk", "3 lembar"], ["tomat", "1 buah"]
    ],
    langkah: [
      "Haluskan cabe, kunyit, jahe, dan sebagian tomat.",
      "Tumis bumbu dengan serai dan daun jeruk sampai harum betul.",
      "Masukkan ayam, aduk, tambah sedikit air.",
      "Masak sampai ayam matang dan kuah agak menyusut.",
      "Masukkan kemangi dan sisa tomat, aduk sebentar, angkat."
    ],
    kcal: 330, protg: 27, tags: ["pedas", "berkuah", "seger"]
  }),
  m({
    id: "ayam-suwir-balado",
    name: "Ayam Suwir Balado",
    cat: "lauk_utama", pro: "ayam", met: "tumis", rich: 2, spice: 2, menit: 40,
    harga: "sedang",
    bahan: [
      ["dada ayam", "150 gr"], ["cabe merah", "6 buah"], ["cabe rawit", "3 buah"],
      ["bawang merah", "4 butir"], ["bawang putih", "2 siung"], ["tomat", "1/2 buah"],
      ["daun jeruk", "2 lembar"], ["gula pasir", "1/2 sdt"], ["garam", "secukupnya"]
    ],
    langkah: [
      "Rebus dada ayam sampai matang, suwir-suwir.",
      "Haluskan kasar cabe, bawang, dan tomat.",
      "Tumis bumbu dengan daun jeruk sampai matang dan harum.",
      "Masukkan ayam suwir, aduk rata dengan bumbu balado.",
      "Bumbui garam dan gula, masak sampai agak kering."
    ],
    kcal: 280, protg: 26, tags: ["pedas", "ayam_suwir", "praktis"]
  }),
  m({
    id: "ayam-pop",
    name: "Ayam Pop",
    cat: "lauk_utama", pro: "ayam", met: "rebus", rich: 2, spice: 2, sambal: true,
    menit: 50, sulit: "sedang", harga: "sedang",
    bahan: [
      ["ayam", "250 gr"], ["kelapa muda", "air dari 1 butir"], ["bawang putih", "4 siung"],
      ["jahe", "2 cm"], ["jeruk nipis", "1/2 buah"], ["garam", "secukupnya"],
      ["cabe merah", "4 buah"], ["tomat", "1 buah"]
    ],
    langkah: [
      "Rebus ayam dalam air kelapa dengan bawang putih, jahe, dan garam sampai empuk.",
      "Angkat ayam, goreng sebentar saja supaya tetap pucat khas ayam pop.",
      "Haluskan cabe dan tomat, tumis jadi sambal pendamping.",
      "Sajikan ayam dengan sambal di pinggir.",
      "Beri perasan jeruk nipis sebelum makan."
    ],
    kcal: 320, protg: 27, tags: ["klasik", "pedas", "ayam_rebus", "weekend"]
  }),
  m({
    id: "ayam-rebus-jahe",
    name: "Ayam Rebus Jahe (Pek Cam Ke)",
    cat: "lauk_utama", cui: "chinese_indo", pro: "ayam", met: "rebus", rich: 2,
    menit: 45, sulit: "sedang", harga: "sedang",
    bahan: [
      ["ayam", "250 gr"], ["jahe", "4 cm"], ["daun bawang", "2 batang"],
      ["bawang putih", "3 siung"], ["kecap asin", "1 sdm"], ["minyak goreng", "2 sdm"],
      ["garam", "secukupnya"]
    ],
    langkah: [
      "Rebus ayam dengan jahe geprek, garam, dan 1 batang daun bawang sampai matang.",
      "Angkat, potong-potong, tata di piring.",
      "Iris halus jahe dan daun bawang sisa, taruh di atas ayam.",
      "Panaskan minyak sampai betul-betul panas, siramkan ke jahe daun bawang.",
      "Kucuri kecap asin, sajikan hangat."
    ],
    kcal: 300, protg: 27, tags: ["ayam_rebus", "anak_friendly", "gurih"]
  }),
  m({
    id: "ayam-kecap-mentega",
    name: "Ayam Kecap Mentega",
    cat: "lauk_utama", cui: "chinese_indo", pro: "ayam", met: "tumis", rich: 2,
    menit: 30, harga: "sedang",
    bahan: [
      ["ayam", "200 gr"], ["mentega", "1 sdm"], ["kecap manis", "2 sdm"],
      ["kecap asin", "1 sdt"], ["bawang bombay", "1/2 buah"], ["bawang putih", "2 siung"],
      ["merica", "1/4 sdt"], ["jeruk nipis", "1/2 buah"]
    ],
    langkah: [
      "Potong ayam kecil, lumuri jeruk nipis, goreng setengah matang.",
      "Lelehkan mentega, tumis bawang putih dan bombay sampai harum.",
      "Masukkan ayam, kecap manis, kecap asin, dan merica.",
      "Aduk sampai ayam terbalut saus mengkilap.",
      "Masak sebentar sampai bumbu meresap, angkat."
    ],
    kcal: 360, protg: 25, tags: ["manis", "gurih", "anak_friendly"]
  }),
  m({
    id: "ayam-koloke",
    name: "Ayam Koloke Sederhana",
    cat: "lauk_utama", cui: "chinese_indo", pro: "ayam", met: "goreng", rich: 2,
    menit: 45, sulit: "sedang", harga: "sedang",
    bahan: [
      ["dada ayam", "150 gr"], ["tepung terigu", "4 sdm"], ["tepung maizena", "2 sdm"],
      ["saus tomat", "3 sdm"], ["bawang bombay", "1/4 buah"], ["wortel", "1/2 buah"],
      ["timun", "1/2 buah"], ["gula pasir", "1 sdm"], ["cuka", "1 sdt"]
    ],
    langkah: [
      "Potong ayam dadu, balur tepung terigu dan maizena berbumbu.",
      "Goreng sampai garing keemasan, tiriskan.",
      "Tumis bombay, masukkan saus tomat, gula, cuka, dan sedikit air.",
      "Masukkan irisan wortel dan timun, masak sampai saus kental.",
      "Siram saus asam manis ke ayam goreng tepung."
    ],
    kcal: 380, protg: 24, tags: ["manis", "anak_friendly"]
  }),
  m({
    id: "ayam-cabe-ijo",
    name: "Ayam Cabe Ijo",
    cat: "lauk_utama", pro: "ayam", met: "goreng", rich: 2, spice: 2, menit: 45,
    sulit: "sedang", harga: "sedang",
    bahan: [
      ["ayam", "200 gr"], ["cabe hijau", "8 buah"], ["tomat hijau", "2 buah"],
      ["bawang merah", "5 butir"], ["bawang putih", "2 siung"], ["daun jeruk", "2 lembar"],
      ["jeruk nipis", "1/2 buah"], ["garam", "secukupnya"]
    ],
    langkah: [
      "Ungkep ayam dengan garam dan bawang putih, lalu goreng keemasan.",
      "Ulek kasar cabe hijau, tomat hijau, dan bawang merah.",
      "Tumis sambal ijo dengan daun jeruk sampai layu dan harum.",
      "Masukkan ayam goreng, aduk sampai terbalut sambal.",
      "Beri perasan jeruk nipis, angkat."
    ],
    kcal: 340, protg: 26, tags: ["pedas", "klasik"]
  }),
  m({
    id: "ayam-penyet",
    name: "Ayam Penyet Sambal Terasi",
    cat: "lauk_utama", pro: "ayam", met: "goreng", rich: 2, spice: 2, sambal: true,
    menit: 50, sulit: "sedang", harga: "sedang",
    bahan: [
      ["ayam", "250 gr"], ["cabe merah", "5 buah"], ["cabe rawit", "4 buah"],
      ["terasi", "1/2 sdt"], ["tomat", "1 buah"], ["bawang putih", "2 siung"],
      ["ketumbar", "1/2 sdt"], ["timun", "1/2 buah"], ["kemangi", "1 genggam"]
    ],
    langkah: [
      "Ungkep ayam dengan bawang putih, ketumbar, dan garam sampai empuk.",
      "Goreng ayam sampai keemasan.",
      "Ulek cabe, terasi bakar, tomat, dan sedikit garam gula jadi sambal.",
      "Penyet ayam di atas sambal dalam cobek.",
      "Sajikan dengan lalapan timun dan kemangi."
    ],
    kcal: 350, protg: 27, tags: ["pedas", "klasik", "ayam_goreng"]
  }),
  m({
    id: "ayam-geprek",
    name: "Ayam Geprek Sambal Bawang",
    cat: "lauk_utama", pro: "ayam", met: "goreng", rich: 2, spice: 3, sambal: true,
    menit: 40, harga: "sedang",
    bahan: [
      ["dada ayam", "150 gr"], ["tepung bumbu", "5 sdm"], ["telur ayam", "1 butir"],
      ["cabe rawit", "8 buah"], ["bawang putih", "3 siung"], ["garam", "secukupnya"],
      ["minyak goreng", "untuk menggoreng"]
    ],
    langkah: [
      "Celup ayam ke telur kocok, balur tepung bumbu sampai keriting.",
      "Goreng dalam minyak panas sampai crispy, tiriskan.",
      "Ulek kasar cabe rawit, bawang putih, dan garam.",
      "Siram sambal dengan sedikit minyak panas bekas menggoreng.",
      "Geprek ayam crispy di atas sambal bawang."
    ],
    kcal: 420, protg: 26, tags: ["pedas", "anak_friendly"]
  }),
  m({
    id: "ayam-saus-tiram",
    name: "Ayam Saus Tiram",
    cat: "lauk_utama", cui: "chinese_indo", pro: "ayam", met: "tumis", rich: 2,
    menit: 25, harga: "sedang",
    bahan: [
      ["dada ayam", "150 gr"], ["saus tiram", "2 sdm"], ["bawang bombay", "1/2 buah"],
      ["bawang putih", "3 siung"], ["jahe", "1 cm"], ["merica", "1/4 sdt"],
      ["daun bawang", "1 batang"], ["tepung maizena", "1 sdt"]
    ],
    langkah: [
      "Potong ayam dadu, lumuri merica dan sedikit maizena.",
      "Tumis bawang putih, jahe, dan bombay sampai harum.",
      "Masukkan ayam, aduk sampai berubah warna.",
      "Tambahkan saus tiram dan sedikit air, masak sampai kental.",
      "Taburi irisan daun bawang, angkat."
    ],
    kcal: 290, protg: 25, tags: ["praktis", "gurih", "anak_friendly"]
  }),
  m({
    id: "ayam-kacang-pedas",
    name: "Ayam Tumis Kacang Pedas",
    cat: "lauk_utama", cui: "chinese_indo", pro: "ayam", met: "tumis", rich: 2,
    spice: 2, menit: 30, harga: "sedang",
    bahan: [
      ["dada ayam", "150 gr"], ["kacang tanah", "2 sdm"], ["cabe merah", "4 buah"],
      ["bawang putih", "3 siung"], ["kecap manis", "1 sdm"], ["kecap asin", "1 sdt"],
      ["jahe", "1 cm"], ["daun bawang", "1 batang"]
    ],
    langkah: [
      "Goreng kacang tanah sampai matang, sisihkan.",
      "Tumis bawang putih, jahe, dan irisan cabe sampai harum.",
      "Masukkan ayam dadu, masak sampai berubah warna.",
      "Bumbui kecap manis dan kecap asin, aduk rata.",
      "Masukkan kacang goreng dan daun bawang, aduk, angkat."
    ],
    kcal: 350, protg: 27, tags: ["pedas", "gurih"]
  }),
  m({
    id: "sate-ayam-teflon",
    name: "Sate Ayam Teflon Bumbu Kacang",
    cat: "lauk_utama", pro: "ayam", met: "panggang", rich: 2, spice: 1, menit: 60,
    sulit: "butuh_niat", harga: "sedang",
    bahan: [
      ["dada ayam", "150 gr"], ["kacang tanah", "3 sdm"], ["kecap manis", "3 sdm"],
      ["bawang putih", "3 siung"], ["bawang merah", "3 butir"], ["cabe merah", "2 buah"],
      ["jeruk limau", "1 buah"], ["gula merah", "1 sdt"]
    ],
    langkah: [
      "Potong ayam dadu, rendam dalam kecap manis dan bawang putih parut.",
      "Tusuk-tusuk ayam dengan tusuk sate.",
      "Goreng kacang, ulek dengan cabe, bawang, dan gula merah; encerkan dengan air.",
      "Panggang sate di teflon sambil olesi bumbu kecap sampai matang.",
      "Siram bumbu kacang dan kucuri jeruk limau."
    ],
    kcal: 390, protg: 28, tags: ["klasik", "manis", "weekend"]
  }),
  m({
    id: "cah-ayam-jamur",
    name: "Cah Ayam Jamur",
    cat: "lauk_utama", cui: "chinese_indo", pro: "ayam", met: "tumis", rich: 2,
    menit: 25, harga: "sedang",
    bahan: [
      ["dada ayam", "100 gr"], ["jamur tiram", "100 gr"], ["bawang putih", "3 siung"],
      ["jahe", "1 cm"], ["kecap asin", "1 sdm"], ["kaldu bubuk", "1/2 sdt"],
      ["daun bawang", "1 batang"], ["merica", "1/4 sdt"]
    ],
    langkah: [
      "Suwir kasar jamur tiram, iris ayam tipis.",
      "Tumis bawang putih dan jahe sampai harum.",
      "Masukkan ayam, masak sampai berubah warna.",
      "Masukkan jamur, kecap asin, kaldu, dan merica; aduk cepat.",
      "Tambahkan daun bawang, masak sebentar, angkat."
    ],
    kcal: 250, protg: 22, tags: ["praktis", "gurih"]
  }),
  m({
    id: "hati-ampela-goreng",
    name: "Hati Ampela Goreng Bumbu Kuning",
    cat: "lauk_utama", pro: "ayam", met: "goreng", rich: 2, menit: 40,
    bahan: [
      ["hati ampela", "2 pasang"], ["kunyit", "2 cm"], ["bawang putih", "2 siung"],
      ["bawang merah", "3 butir"], ["ketumbar", "1/2 sdt"], ["daun salam", "1 lembar"],
      ["jahe", "1 cm"], ["garam", "secukupnya"]
    ],
    langkah: [
      "Rebus hati ampela dengan jahe sampai setengah empuk, buang airnya.",
      "Haluskan bawang, kunyit, dan ketumbar.",
      "Ungkep hati ampela dengan bumbu, daun salam, dan sedikit air.",
      "Masak sampai air menyusut dan bumbu meresap.",
      "Goreng sebentar sampai kecokelatan."
    ],
    kcal: 230, protg: 22, tags: ["klasik", "ekonomis"]
  }),
  m({
    id: "ayam-bumbu-bali",
    name: "Ayam Bumbu Bali",
    cat: "lauk_utama", pro: "ayam", met: "tumis", rich: 2, spice: 2, menit: 45,
    sulit: "sedang", harga: "sedang",
    bahan: [
      ["ayam", "200 gr"], ["cabe merah", "6 buah"], ["kecap manis", "1 sdm"],
      ["bawang merah", "5 butir"], ["bawang putih", "3 siung"], ["kemiri", "2 butir"],
      ["jahe", "1 cm"], ["tomat", "1 buah"], ["daun salam", "1 lembar"]
    ],
    langkah: [
      "Goreng ayam setengah matang, sisihkan.",
      "Haluskan cabe, bawang, kemiri, jahe, dan tomat.",
      "Tumis bumbu dengan daun salam sampai matang berminyak.",
      "Masukkan ayam, kecap manis, dan sedikit air.",
      "Masak sampai bumbu mengental dan meresap."
    ],
    kcal: 350, protg: 26, tags: ["pedas", "manis", "klasik"]
  }),
  m({
    id: "ayam-goreng-tepung",
    name: "Ayam Goreng Tepung Crispy",
    cat: "lauk_utama", cui: "western_simple", pro: "ayam", met: "goreng", rich: 2,
    menit: 35, harga: "sedang",
    bahan: [
      ["ayam", "200 gr"], ["tepung bumbu", "6 sdm"], ["telur ayam", "1 butir"],
      ["merica", "1/4 sdt"], ["bawang putih", "2 siung"], ["garam", "secukupnya"],
      ["minyak goreng", "untuk menggoreng"]
    ],
    langkah: [
      "Lumuri ayam dengan bawang putih parut, garam, dan merica.",
      "Celupkan ke telur kocok lalu balur tepung bumbu sambil dicubit-cubit.",
      "Panaskan minyak agak banyak dengan api sedang.",
      "Goreng ayam sampai kuning keemasan dan matang.",
      "Tiriskan di atas tisu supaya tetap renyah."
    ],
    kcal: 400, protg: 25, tags: ["anak_friendly", "ayam_goreng"]
  }),
  m({
    id: "ayam-katsu",
    name: "Ayam Katsu Sederhana",
    cat: "lauk_utama", cui: "western_simple", pro: "ayam", met: "goreng", rich: 2,
    menit: 40, harga: "sedang",
    bahan: [
      ["dada ayam", "150 gr"], ["tepung roti", "5 sdm"], ["tepung terigu", "3 sdm"],
      ["telur ayam", "1 butir"], ["merica", "1/4 sdt"], ["garam", "secukupnya"],
      ["saus tomat", "2 sdm"], ["kol", "50 gr"]
    ],
    langkah: [
      "Belah dada ayam melebar, pukul-pukul supaya tipis, bumbui garam merica.",
      "Balur terigu, celup telur, lalu balur tepung roti.",
      "Goreng dalam minyak sedang sampai keemasan.",
      "Iris tipis kol untuk pendamping segar.",
      "Potong katsu, sajikan dengan saus tomat dan irisan kol."
    ],
    kcal: 420, protg: 26, tags: ["anak_friendly"]
  }),
  m({
    id: "ayam-teriyaki-rumahan",
    name: "Ayam Teriyaki Rumahan",
    cat: "lauk_utama", cui: "western_simple", pro: "ayam", met: "tumis", rich: 2,
    menit: 25, harga: "sedang",
    bahan: [
      ["dada ayam", "150 gr"], ["kecap manis", "2 sdm"], ["kecap asin", "1 sdm"],
      ["minyak wijen", "1/2 sdt"], ["bawang bombay", "1/2 buah"], ["bawang putih", "2 siung"],
      ["jahe", "1 cm"], ["wijen", "1/2 sdt"]
    ],
    langkah: [
      "Iris ayam tipis melebar.",
      "Tumis bawang putih, jahe, dan bombay sampai layu.",
      "Masukkan ayam, masak sampai berubah warna.",
      "Bumbui kecap manis, kecap asin, dan minyak wijen; masak sampai saus mengental.",
      "Taburi wijen, sajikan."
    ],
    kcal: 320, protg: 26, tags: ["manis", "praktis", "anak_friendly"]
  }),
  // ── Telur ───────────────────────────────────────────────────────────
  m({
    id: "telur-dadar",
    name: "Telur Dadar Daun Bawang",
    cat: "lauk_utama", pro: "telur", met: "goreng", rich: 2, menit: 10,
    bahan: [
      ["telur ayam", "1 butir"], ["daun bawang", "1 batang"], ["bawang merah", "2 butir"],
      ["garam", "secukupnya"], ["merica", "sejumput"], ["minyak goreng", "2 sdm"]
    ],
    langkah: [
      "Kocok telur dengan garam dan merica.",
      "Masukkan irisan daun bawang dan bawang merah.",
      "Panaskan minyak di wajan.",
      "Tuang telur, masak sampai pinggirnya kering.",
      "Balik sekali, masak sebentar, angkat."
    ],
    kcal: 180, protg: 12, tags: ["cepat", "ekonomis", "anak_friendly", "lauk_telur", "klasik"]
  }),
  m({
    id: "telur-mata-sapi-kecap",
    name: "Telur Mata Sapi Kecap",
    cat: "lauk_utama", pro: "telur", met: "goreng", rich: 2, menit: 10,
    bahan: [
      ["telur ayam", "1 butir"], ["kecap manis", "1 sdm"], ["bawang merah", "2 butir"],
      ["cabe rawit", "1 buah"], ["minyak goreng", "2 sdm"]
    ],
    langkah: [
      "Ceplok telur sampai pinggirnya garing, angkat.",
      "Tumis irisan bawang merah sampai harum.",
      "Masukkan kecap manis dan sedikit air.",
      "Masukkan telur ceplok, balut dengan kuah kecap.",
      "Tambahkan irisan cabe rawit kalau suka, angkat."
    ],
    kcal: 200, protg: 11, tags: ["cepat", "manis", "ekonomis", "anak_friendly", "lauk_telur"]
  }),
  m({
    id: "telur-balado",
    name: "Telur Balado",
    cat: "lauk_utama", pro: "telur", met: "goreng", rich: 2, spice: 2, menit: 25,
    bahan: [
      ["telur ayam", "2 butir"], ["cabe merah", "6 buah"], ["cabe rawit", "2 buah"],
      ["bawang merah", "4 butir"], ["tomat", "1/2 buah"], ["gula pasir", "1/2 sdt"],
      ["garam", "secukupnya"], ["minyak goreng", "3 sdm"]
    ],
    langkah: [
      "Rebus telur, kupas, lalu goreng sebentar sampai berkulit.",
      "Ulek kasar cabe, bawang merah, dan tomat.",
      "Tumis sambal sampai matang dan berminyak.",
      "Bumbui garam dan gula.",
      "Masukkan telur, aduk sampai terbalut sambal."
    ],
    kcal: 250, protg: 13, tags: ["pedas", "klasik", "ekonomis", "lauk_telur"]
  }),
  m({
    id: "telur-pindang",
    name: "Telur Pindang",
    cat: "lauk_utama", pro: "telur", met: "rebus", rich: 1, menit: 45,
    bahan: [
      ["telur ayam", "2 butir"], ["daun salam", "2 lembar"], ["lengkuas", "2 cm"],
      ["bawang merah", "3 butir"], ["kecap manis", "1 sdm"], ["garam", "secukupnya"],
      ["gula merah", "1 sdt"]
    ],
    langkah: [
      "Rebus telur sampai matang, retakkan kulitnya perlahan.",
      "Rebus lagi bersama daun salam, lengkuas, bawang merah, kecap, dan gula merah.",
      "Masak api kecil sampai kuah menyusut dan telur kecokelatan.",
      "Diamkan dalam kuah supaya motif retakan cantik.",
      "Kupas dan sajikan."
    ],
    kcal: 170, protg: 12, tags: ["klasik", "manis", "ekonomis", "lauk_telur"]
  }),
  m({
    id: "semur-telur-kentang",
    name: "Semur Telur Kentang",
    cat: "lauk_utama", pro: "telur", met: "rebus", rich: 2, kuah: true, menit: 35,
    bahan: [
      ["telur ayam", "2 butir"], ["kentang", "1 buah"], ["kecap manis", "2 sdm"],
      ["bawang merah", "4 butir"], ["bawang putih", "2 siung"], ["kemiri", "2 butir"],
      ["pala", "1/4 sdt"], ["garam", "secukupnya"]
    ],
    langkah: [
      "Rebus telur, kupas; potong kentang dan goreng setengah matang.",
      "Haluskan bawang dan kemiri, tumis sampai harum.",
      "Tuang air, kecap manis, pala, dan garam.",
      "Masukkan telur dan kentang, masak api kecil.",
      "Masak sampai kuah kental kecokelatan."
    ],
    kcal: 280, protg: 13, tags: ["manis", "berkuah", "ekonomis", "anak_friendly", "lauk_telur"]
  }),
  m({
    id: "telur-dadar-padang",
    name: "Telur Dadar Padang",
    cat: "lauk_utama", pro: "telur", met: "goreng", rich: 2, spice: 1, menit: 15,
    bahan: [
      ["telur ayam", "2 butir"], ["kelapa parut", "2 sdm"], ["daun bawang", "1 batang"],
      ["cabe merah", "2 buah"], ["bawang merah", "3 butir"], ["seledri", "1 batang"],
      ["garam", "secukupnya"], ["minyak goreng", "4 sdm"]
    ],
    langkah: [
      "Kocok telur dengan garam sampai berbusa.",
      "Masukkan kelapa parut, irisan cabe, bawang, daun bawang, dan seledri.",
      "Panaskan minyak agak banyak di wajan kecil.",
      "Tuang adonan, masak api sedang sampai tebal mengembang.",
      "Balik hati-hati, masak sampai matang kedua sisi."
    ],
    kcal: 260, protg: 13, tags: ["klasik", "gurih", "lauk_telur"]
  }),
  m({
    id: "tumis-tomat-telur",
    name: "Tumis Tomat Telur",
    cat: "lauk_utama", cui: "chinese_indo", pro: "telur", met: "tumis", rich: 1,
    menit: 15, segar: true,
    bahan: [
      ["telur ayam", "2 butir"], ["tomat", "2 buah"], ["bawang putih", "2 siung"],
      ["daun bawang", "1 batang"], ["gula pasir", "1/2 sdt"], ["garam", "secukupnya"],
      ["kecap asin", "1/2 sdm"]
    ],
    langkah: [
      "Orak-arik telur setengah matang, sisihkan.",
      "Tumis bawang putih, masukkan potongan tomat.",
      "Masak sampai tomat layu berair, bumbui garam, gula, kecap asin.",
      "Masukkan telur orak-arik, aduk rata.",
      "Taburi daun bawang, angkat."
    ],
    kcal: 190, protg: 12, tags: ["cepat", "seger", "ekonomis", "anak_friendly", "lauk_telur"]
  }),
  m({
    id: "fuyunghai",
    name: "Fuyunghai Sayur",
    cat: "lauk_utama", cui: "chinese_indo", pro: "telur", met: "goreng", rich: 2,
    menit: 30,
    bahan: [
      ["telur ayam", "2 butir"], ["wortel", "1/2 buah"], ["kol", "50 gr"],
      ["daun bawang", "1 batang"], ["tepung terigu", "1 sdm"], ["saus tomat", "3 sdm"],
      ["bawang bombay", "1/4 buah"], ["gula pasir", "1 sdt"], ["cuka", "1/2 sdt"]
    ],
    langkah: [
      "Kocok telur dengan serutan wortel, irisan kol, daun bawang, dan terigu.",
      "Goreng adonan jadi dadar tebal sampai keemasan, tiriskan.",
      "Tumis bombay, tuang saus tomat, gula, cuka, dan air.",
      "Kentalkan saus dengan sedikit larutan maizena atau terigu.",
      "Siram saus asam manis ke atas fuyunghai."
    ],
    kcal: 280, protg: 13, tags: ["manis", "anak_friendly", "lauk_telur"]
  }),
  m({
    id: "martabak-telur-teflon",
    name: "Martabak Telur Teflon",
    cat: "lauk_utama", pro: "telur", met: "goreng", rich: 2, menit: 30,
    bahan: [
      ["telur ayam", "2 butir"], ["daun bawang", "2 batang"], ["daging giling", "50 gr"],
      ["bawang bombay", "1/4 buah"], ["merica", "1/4 sdt"], ["kaldu bubuk", "1/2 sdt"],
      ["garam", "secukupnya"], ["minyak goreng", "3 sdm"]
    ],
    langkah: [
      "Tumis daging giling dengan bombay sampai matang, dinginkan.",
      "Kocok telur dengan daun bawang, tumisan daging, dan bumbu.",
      "Panaskan minyak di teflon.",
      "Tuang adonan, masak api kecil sampai set.",
      "Lipat dua, masak sampai kedua sisi kecokelatan."
    ],
    kcal: 300, protg: 17, tags: ["gurih", "anak_friendly", "lauk_telur"]
  }),
  m({
    id: "omelet-sayur",
    name: "Omelet Sayur Keju",
    cat: "lauk_utama", cui: "western_simple", pro: "telur", met: "goreng", rich: 2,
    menit: 15,
    bahan: [
      ["telur ayam", "2 butir"], ["wortel", "1/2 buah"], ["jagung manis", "2 sdm pipilan"],
      ["keju parut", "1 sdm"], ["daun bawang", "1 batang"], ["merica", "sejumput"],
      ["garam", "secukupnya"], ["margarin", "1 sdm"]
    ],
    langkah: [
      "Kocok telur dengan garam dan merica.",
      "Masukkan serutan wortel, jagung, daun bawang, dan keju parut.",
      "Lelehkan margarin di teflon api kecil.",
      "Tuang adonan, tutup, masak sampai set.",
      "Lipat dua dan sajikan hangat."
    ],
    kcal: 260, protg: 14, tags: ["cepat", "anak_friendly", "lauk_telur"]
  })
];
