import type { Menu } from "../types";
import { m } from "../menuHelpers";

/** Lauk utama — ikan, udang, cumi, kerang. Baca TAGGING.md sebelum menambah. */
export const LAUK_IKAN_SEAFOOD: Menu[] = [
  m({
    id: "ikan-kembung-goreng",
    name: "Ikan Kembung Goreng",
    cat: "lauk_utama", pro: "ikan", met: "goreng", rich: 2, menit: 25,
    harga: "sedang",
    bahan: [
      ["ikan kembung", "1 ekor"], ["kunyit", "1 cm"], ["bawang putih", "2 siung"],
      ["jeruk nipis", "1/2 buah"], ["garam", "secukupnya"], ["minyak goreng", "untuk menggoreng"]
    ],
    langkah: [
      "Bersihkan ikan, lumuri jeruk nipis, diamkan 10 menit.",
      "Balur dengan bawang putih dan kunyit halus plus garam.",
      "Panaskan minyak sampai betul-betul panas.",
      "Goreng ikan sampai garing kedua sisi, jangan sering dibalik.",
      "Tiriskan, sajikan hangat."
    ],
    kcal: 220, protg: 22, tags: ["klasik", "ikan_goreng", "praktis"]
  }),
  m({
    id: "nila-goreng-bumbu-kuning",
    name: "Nila Goreng Bumbu Kuning",
    cat: "lauk_utama", pro: "ikan", met: "goreng", rich: 2, menit: 35,
    harga: "sedang",
    bahan: [
      ["ikan nila", "1 ekor"], ["kunyit", "2 cm"], ["ketumbar", "1/2 sdt"],
      ["bawang putih", "2 siung"], ["jahe", "1 cm"], ["jeruk nipis", "1/2 buah"],
      ["garam", "secukupnya"], ["minyak goreng", "untuk menggoreng"]
    ],
    langkah: [
      "Kerat-kerat badan ikan supaya bumbu meresap.",
      "Haluskan kunyit, ketumbar, bawang putih, jahe, dan garam.",
      "Balur ikan dengan bumbu dan air jeruk, diamkan 15 menit.",
      "Goreng dalam minyak panas sampai garing keemasan.",
      "Angkat dan tiriskan."
    ],
    kcal: 240, protg: 24, tags: ["klasik", "ikan_goreng"]
  }),
  m({
    id: "lele-goreng-lalapan",
    name: "Lele Goreng Lalapan",
    cat: "lauk_utama", pro: "ikan", met: "goreng", rich: 2, spice: 2, sambal: true,
    menit: 35,
    bahan: [
      ["ikan lele", "1 ekor"], ["kunyit", "1 cm"], ["bawang putih", "2 siung"],
      ["cabe merah", "4 buah"], ["cabe rawit", "3 buah"], ["terasi", "1/2 sdt"],
      ["tomat", "1 buah"], ["timun", "1/2 buah"], ["kemangi", "1 genggam"]
    ],
    langkah: [
      "Lumuri lele dengan kunyit, bawang putih halus, dan garam.",
      "Goreng dalam minyak panas sampai garing.",
      "Ulek cabe, terasi bakar, dan tomat jadi sambal terasi.",
      "Siapkan lalapan timun dan kemangi.",
      "Sajikan lele dengan sambal terpisah dan lalapan."
    ],
    kcal: 280, protg: 22, tags: ["pedas", "klasik", "ikan_goreng", "ekonomis"]
  }),
  m({
    id: "gurame-goreng-garing",
    name: "Gurame Goreng Garing",
    cat: "lauk_utama", pro: "ikan", met: "goreng", rich: 2, menit: 40,
    sulit: "sedang", harga: "agak_mahal",
    bahan: [
      ["ikan gurame", "1/4 ekor besar"], ["bawang putih", "3 siung"], ["kunyit", "1 cm"],
      ["jeruk nipis", "1/2 buah"], ["tepung beras", "2 sdm"], ["garam", "secukupnya"],
      ["minyak goreng", "untuk menggoreng"]
    ],
    langkah: [
      "Kerat gurame agak dalam, lumuri jeruk nipis dan garam.",
      "Balur bumbu bawang putih kunyit halus, lalu taburi tepung beras tipis.",
      "Panaskan minyak banyak sampai panas betul.",
      "Goreng ikan sampai garing sampai ke sirip.",
      "Tiriskan, sajikan dengan kecap rawit."
    ],
    kcal: 300, protg: 26, tags: ["weekend", "ikan_goreng", "gurih"]
  }),
  m({
    id: "pesmol-ikan-mas",
    name: "Pesmol Ikan Mas",
    cat: "lauk_utama", pro: "ikan", met: "goreng", rich: 2, kuah: true, segar: true,
    spice: 1, menit: 50, sulit: "sedang", harga: "sedang",
    bahan: [
      ["ikan mas", "1 ekor"], ["kunyit", "2 cm"], ["kemiri", "3 butir"],
      ["bawang merah", "5 butir"], ["bawang putih", "3 siung"], ["jahe", "1 cm"],
      ["cabe rawit", "5 buah utuh"], ["timun", "1/2 buah"], ["cuka", "1 sdt"]
    ],
    langkah: [
      "Goreng ikan mas sampai garing, sisihkan.",
      "Haluskan kunyit, kemiri, bawang, dan jahe; tumis sampai matang.",
      "Tuang air, masukkan cuka, gula, garam, dan cabe rawit utuh.",
      "Masukkan irisan timun dan ikan goreng.",
      "Masak sebentar sampai kuah kuning meresap."
    ],
    kcal: 290, protg: 24, tags: ["klasik", "seger", "berkuah"]
  }),
  m({
    id: "pepes-ikan-kembung",
    name: "Pepes Ikan Kembung",
    cat: "lauk_utama", pro: "ikan", met: "kukus", rich: 2, spice: 1, menit: 60,
    sulit: "butuh_niat", harga: "sedang",
    bahan: [
      ["ikan kembung", "1 ekor"], ["kemangi", "1 genggam"], ["cabe merah", "3 buah"],
      ["bawang merah", "4 butir"], ["bawang putih", "2 siung"], ["kemiri", "2 butir"],
      ["kunyit", "1 cm"], ["serai", "1 batang"], ["tomat", "1/2 buah"]
    ],
    langkah: [
      "Haluskan cabe, bawang, kemiri, dan kunyit.",
      "Balur ikan dengan bumbu halus sampai rata.",
      "Tata ikan di daun pisang dengan kemangi, tomat, dan serai.",
      "Bungkus rapat, kukus sekitar 30 menit.",
      "Bakar sebentar bungkusan di teflon supaya harum."
    ],
    kcal: 230, protg: 23, tags: ["klasik", "kering"]
  }),
  m({
    id: "ikan-bakar-kecap",
    name: "Ikan Bakar Kecap",
    cat: "lauk_utama", pro: "ikan", met: "bakar", rich: 2, spice: 1, menit: 45,
    sulit: "sedang", harga: "sedang",
    bahan: [
      ["ikan nila", "1 ekor"], ["kecap manis", "2 sdm"], ["bawang putih", "3 siung"],
      ["jahe", "1 cm"], ["jeruk nipis", "1/2 buah"], ["cabe rawit", "2 buah"],
      ["margarin", "1 sdm"], ["garam", "secukupnya"]
    ],
    langkah: [
      "Kerat ikan, lumuri jeruk nipis, garam, dan bawang putih halus.",
      "Campur kecap manis, margarin leleh, dan jahe parut jadi olesan.",
      "Bakar ikan di teflon sambil diolesi bumbu kecap.",
      "Balik hati-hati, bakar sampai matang dan harum.",
      "Sajikan dengan sambal kecap rawit."
    ],
    kcal: 270, protg: 24, tags: ["manis", "klasik"]
  }),
  m({
    id: "ikan-bakar-dabu-dabu",
    name: "Ikan Bakar Sambal Dabu-Dabu",
    cat: "lauk_utama", pro: "ikan", met: "bakar", rich: 2, spice: 2, sambal: true,
    segar: true, menit: 45, sulit: "sedang", harga: "sedang",
    bahan: [
      ["ikan kembung", "1 ekor"], ["cabe rawit", "4 buah"], ["cabe merah", "2 buah"],
      ["bawang merah", "3 butir"], ["tomat", "1 buah"], ["jeruk nipis", "1 buah"],
      ["kemangi", "1 genggam"], ["garam", "secukupnya"], ["minyak goreng", "2 sdm"]
    ],
    langkah: [
      "Lumuri ikan dengan garam dan jeruk nipis, bakar sampai matang.",
      "Iris kasar cabe, bawang merah, dan tomat.",
      "Campur irisan dengan garam, perasan jeruk, dan minyak panas.",
      "Tambahkan kemangi ke sambal dabu-dabu.",
      "Siram sambal segar di atas ikan bakar."
    ],
    kcal: 250, protg: 23, tags: ["pedas", "seger"]
  }),
  m({
    id: "balado-tongkol",
    name: "Balado Tongkol",
    cat: "lauk_utama", pro: "ikan", met: "goreng", rich: 2, spice: 2, menit: 30,
    bahan: [
      ["ikan tongkol", "150 gr"], ["cabe merah", "6 buah"], ["cabe rawit", "3 buah"],
      ["bawang merah", "4 butir"], ["tomat", "1/2 buah"], ["daun jeruk", "2 lembar"],
      ["gula pasir", "1/2 sdt"], ["garam", "secukupnya"]
    ],
    langkah: [
      "Goreng potongan tongkol sampai agak kering, sisihkan.",
      "Ulek kasar cabe, bawang merah, dan tomat.",
      "Tumis sambal dengan daun jeruk sampai matang berminyak.",
      "Bumbui garam dan gula.",
      "Masukkan tongkol goreng, aduk sampai terbalut sambal."
    ],
    kcal: 260, protg: 24, tags: ["pedas", "klasik", "ekonomis"]
  }),
  m({
    id: "tongkol-suwir-kemangi",
    name: "Tongkol Suwir Kemangi",
    cat: "lauk_utama", pro: "ikan", met: "tumis", rich: 2, spice: 2, menit: 30,
    bahan: [
      ["ikan tongkol", "150 gr"], ["kemangi", "1 genggam"], ["cabe rawit", "4 buah"],
      ["cabe merah", "3 buah"], ["bawang merah", "4 butir"], ["bawang putih", "2 siung"],
      ["daun jeruk", "2 lembar"], ["garam", "secukupnya"]
    ],
    langkah: [
      "Kukus atau goreng tongkol sebentar, lalu suwir-suwir.",
      "Iris cabe, bawang merah, dan bawang putih.",
      "Tumis bumbu iris dengan daun jeruk sampai harum.",
      "Masukkan tongkol suwir, aduk rata, bumbui garam.",
      "Matikan api, aduk kemangi sampai layu."
    ],
    kcal: 240, protg: 24, tags: ["pedas", "seger", "praktis", "ekonomis"]
  }),
  m({
    id: "oseng-pindang-cabe-ijo",
    name: "Oseng Pindang Cabe Ijo",
    cat: "lauk_utama", pro: "ikan", met: "tumis", rich: 2, spice: 2, menit: 25,
    bahan: [
      ["ikan pindang", "150 gr"], ["cabe hijau", "6 buah"], ["bawang merah", "4 butir"],
      ["bawang putih", "2 siung"], ["tomat hijau", "1 buah"], ["daun salam", "1 lembar"],
      ["gula merah", "1/2 sdt"], ["garam", "secukupnya"]
    ],
    langkah: [
      "Goreng ikan pindang sebentar, suwir kasar.",
      "Iris serong cabe hijau, bawang, dan tomat hijau.",
      "Tumis bumbu iris dengan daun salam sampai layu.",
      "Masukkan pindang, gula merah, dan garam.",
      "Aduk rata sampai bumbu meresap, angkat."
    ],
    kcal: 230, protg: 22, tags: ["pedas", "ekonomis", "praktis"]
  }),
  m({
    id: "gulai-ikan-patin",
    name: "Gulai Ikan Patin",
    cat: "lauk_utama", pro: "ikan", met: "santan", rich: 3, santan: true, kuah: true,
    spice: 1, menit: 55, sulit: "sedang", harga: "sedang",
    bahan: [
      ["ikan patin", "2 potong"], ["santan kelapa", "150 ml"], ["kunyit", "2 cm"],
      ["cabe merah", "4 buah"], ["bawang merah", "5 butir"], ["bawang putih", "3 siung"],
      ["serai", "1 batang"], ["asam kandis", "1 buah"], ["daun kunyit", "1 lembar"]
    ],
    langkah: [
      "Haluskan kunyit, cabe, dan bawang.",
      "Tumis bumbu dengan serai dan daun kunyit sampai harum.",
      "Tuang santan, masak sambil diaduk sampai mendidih pelan.",
      "Masukkan patin dan asam kandis.",
      "Masak api kecil sampai ikan matang dan kuah gurih."
    ],
    kcal: 380, protg: 24, tags: ["bersantan", "berkuah", "klasik", "weekend"]
  }),
  m({
    id: "ikan-kuah-kuning",
    name: "Ikan Kuah Kuning",
    cat: "lauk_utama", pro: "ikan", met: "rebus", rich: 1, kuah: true, segar: true,
    spice: 1, menit: 35, harga: "sedang",
    bahan: [
      ["ikan kakap", "2 potong"], ["kunyit", "2 cm"], ["jahe", "1 cm"],
      ["bawang merah", "4 butir"], ["bawang putih", "2 siung"], ["serai", "1 batang"],
      ["belimbing wuluh", "3 buah"], ["kemangi", "1 genggam"], ["tomat", "1/2 buah"]
    ],
    langkah: [
      "Haluskan kunyit, jahe, dan bawang; tumis dengan serai.",
      "Tuang air, didihkan.",
      "Masukkan ikan, belimbing wuluh, dan tomat.",
      "Masak api sedang sampai ikan matang.",
      "Masukkan kemangi, koreksi rasa asam-gurihnya."
    ],
    kcal: 200, protg: 24, tags: ["seger", "berkuah", "hangat"]
  }),
  m({
    id: "asam-padeh-tongkol",
    name: "Asam Padeh Tongkol",
    cat: "lauk_utama", pro: "ikan", met: "rebus", rich: 2, kuah: true, spice: 2,
    segar: true, menit: 50, sulit: "sedang",
    bahan: [
      ["ikan tongkol", "200 gr"], ["cabe merah", "8 buah"], ["bawang merah", "5 butir"],
      ["bawang putih", "3 siung"], ["kunyit", "1 cm"], ["asam kandis", "2 buah"],
      ["serai", "1 batang"], ["daun jeruk", "3 lembar"], ["daun kunyit", "1 lembar"]
    ],
    langkah: [
      "Haluskan cabe, bawang, dan kunyit.",
      "Rebus bumbu dengan air, serai, daun jeruk, dan daun kunyit.",
      "Masukkan tongkol dan asam kandis.",
      "Masak api sedang sampai kuah menyusut dan memerah.",
      "Koreksi rasa asam-pedasnya, angkat."
    ],
    kcal: 250, protg: 25, tags: ["pedas", "berkuah", "seger", "klasik"]
  }),
  m({
    id: "bandeng-goreng-kering",
    name: "Bandeng Goreng Kering",
    cat: "lauk_utama", pro: "ikan", met: "goreng", rich: 2, menit: 30,
    harga: "sedang",
    bahan: [
      ["ikan bandeng", "1/2 ekor"], ["kunyit", "1 cm"], ["bawang putih", "3 siung"],
      ["ketumbar", "1/2 sdt"], ["jeruk nipis", "1/2 buah"], ["garam", "secukupnya"],
      ["minyak goreng", "untuk menggoreng"]
    ],
    langkah: [
      "Belah bandeng, lumuri jeruk nipis dan garam.",
      "Balur bumbu kunyit, bawang putih, dan ketumbar halus.",
      "Diamkan 15 menit supaya meresap.",
      "Goreng dalam minyak panas sampai kering keemasan.",
      "Sajikan dengan sambal kecap."
    ],
    kcal: 260, protg: 24, tags: ["klasik", "ikan_goreng", "kering"]
  }),
  m({
    id: "mangut-lele",
    name: "Mangut Lele",
    cat: "lauk_utama", pro: "ikan", met: "santan", rich: 3, santan: true, kuah: true,
    spice: 2, menit: 55, sulit: "sedang",
    bahan: [
      ["ikan lele", "2 ekor"], ["santan kelapa", "150 ml"], ["cabe merah", "5 buah"],
      ["cabe rawit", "4 buah"], ["bawang merah", "5 butir"], ["bawang putih", "3 siung"],
      ["kunyit", "1 cm"], ["kencur", "1 cm"], ["daun salam", "2 lembar"]
    ],
    langkah: [
      "Goreng lele sampai agak kering, sisihkan.",
      "Haluskan cabe, bawang, kunyit, dan kencur.",
      "Tumis bumbu dengan daun salam sampai matang.",
      "Tuang santan, didihkan pelan sambil diaduk.",
      "Masukkan lele, masak sampai kuah gurih meresap."
    ],
    kcal: 380, protg: 23, tags: ["pedas", "bersantan", "berkuah", "klasik"]
  }),
  m({
    id: "ikan-woku",
    name: "Ikan Woku Belanga",
    cat: "lauk_utama", pro: "ikan", met: "rebus", rich: 2, kuah: true, spice: 3,
    segar: true, menit: 45, sulit: "sedang", harga: "sedang",
    bahan: [
      ["ikan kakap", "2 potong"], ["cabe rawit", "8 buah"], ["kunyit", "2 cm"],
      ["jahe", "2 cm"], ["kemiri", "2 butir"], ["serai", "2 batang"],
      ["daun jeruk", "3 lembar"], ["kemangi", "2 genggam"], ["tomat", "1 buah"]
    ],
    langkah: [
      "Haluskan cabe, kunyit, jahe, dan kemiri.",
      "Tumis bumbu dengan serai dan daun jeruk sampai harum betul.",
      "Tuang sedikit air, masukkan ikan.",
      "Masak sampai ikan matang dan kuah agak kental.",
      "Masukkan kemangi banyak dan tomat, aduk sebentar."
    ],
    kcal: 260, protg: 25, tags: ["pedas", "berkuah", "seger"]
  }),
  m({
    id: "sarden-tongkol-rumahan",
    name: "Sarden Tongkol Rumahan",
    cat: "lauk_utama", pro: "ikan", met: "rebus", rich: 2, kuah: true, spice: 1,
    menit: 35,
    bahan: [
      ["ikan tongkol", "150 gr"], ["saus tomat", "3 sdm"], ["tomat", "1 buah"],
      ["bawang bombay", "1/4 buah"], ["bawang putih", "2 siung"], ["cabe merah", "2 buah"],
      ["gula pasir", "1/2 sdt"], ["garam", "secukupnya"]
    ],
    langkah: [
      "Goreng tongkol setengah matang, sisihkan.",
      "Tumis bawang putih, bombay, dan irisan cabe.",
      "Masukkan saus tomat, potongan tomat, dan air.",
      "Masukkan tongkol, bumbui gula garam.",
      "Masak sampai kuah kental seperti sarden kalengan."
    ],
    kcal: 250, protg: 23, tags: ["praktis", "anak_friendly", "berkuah", "ekonomis"]
  }),
  m({
    id: "oseng-teri-pete",
    name: "Oseng Teri Pete",
    cat: "lauk_utama", pro: "ikan", met: "tumis", rich: 2, spice: 2, menit: 25,
    bahan: [
      ["ikan teri", "50 gr"], ["petai", "1 papan"], ["cabe merah", "5 buah"],
      ["cabe rawit", "3 buah"], ["bawang merah", "4 butir"], ["bawang putih", "2 siung"],
      ["gula merah", "1/2 sdt"], ["garam", "secukupnya"]
    ],
    langkah: [
      "Goreng teri sampai garing, sisihkan.",
      "Iris cabe, bawang, dan belah petai.",
      "Tumis bumbu iris dan petai sampai layu harum.",
      "Bumbui gula merah dan sedikit garam.",
      "Masukkan teri goreng, aduk cepat, angkat."
    ],
    kcal: 220, protg: 15, tags: ["pedas", "gurih", "ekonomis"]
  }),
  m({
    id: "tumis-cumi-pedas-manis",
    name: "Tumis Cumi Pedas Manis",
    cat: "lauk_utama", pro: "udang", met: "tumis", rich: 2, spice: 2, menit: 25,
    harga: "sedang",
    bahan: [
      ["cumi", "150 gr"], ["kecap manis", "1 sdm"], ["cabe merah", "4 buah"],
      ["bawang merah", "4 butir"], ["bawang putih", "2 siung"], ["jahe", "1 cm"],
      ["tomat", "1/2 buah"], ["daun bawang", "1 batang"]
    ],
    langkah: [
      "Bersihkan cumi, potong cincin, lumuri jeruk nipis sebentar.",
      "Tumis bawang, jahe, dan cabe sampai harum.",
      "Masukkan cumi, masak cepat dengan api besar.",
      "Bumbui kecap manis dan garam, jangan masak kelamaan biar tidak alot.",
      "Taburi daun bawang, angkat segera."
    ],
    kcal: 230, protg: 20, tags: ["pedas", "manis", "cepat"]
  }),
  m({
    id: "cumi-goreng-tepung",
    name: "Cumi Goreng Tepung",
    cat: "lauk_utama", pro: "udang", met: "goreng", rich: 2, menit: 30,
    harga: "sedang",
    bahan: [
      ["cumi", "150 gr"], ["tepung bumbu", "5 sdm"], ["tepung maizena", "1 sdm"],
      ["jeruk nipis", "1/2 buah"], ["merica", "1/4 sdt"], ["saus sambal", "2 sdm"],
      ["minyak goreng", "untuk menggoreng"]
    ],
    langkah: [
      "Potong cumi cincin, lumuri jeruk nipis dan merica.",
      "Balur campuran tepung bumbu dan maizena sampai kering.",
      "Panaskan minyak betul-betul panas.",
      "Goreng cumi sebentar saja sampai keemasan, jangan kelamaan.",
      "Tiriskan, sajikan dengan saus sambal."
    ],
    kcal: 290, protg: 19, tags: ["anak_friendly", "gurih"]
  }),
  m({
    id: "udang-goreng-bawang-putih",
    name: "Udang Goreng Bawang Putih",
    cat: "lauk_utama", pro: "udang", met: "goreng", rich: 2, menit: 20,
    harga: "agak_mahal",
    bahan: [
      ["udang", "150 gr"], ["bawang putih", "5 siung"], ["merica", "1/4 sdt"],
      ["jeruk nipis", "1/2 buah"], ["garam", "secukupnya"], ["minyak goreng", "3 sdm"]
    ],
    langkah: [
      "Lumuri udang dengan garam, merica, dan air jeruk.",
      "Cincang bawang putih agak kasar.",
      "Goreng bawang putih sampai keemasan harum, angkat separuh.",
      "Masukkan udang, masak cepat sampai berubah warna.",
      "Taburi bawang putih goreng, sajikan."
    ],
    kcal: 210, protg: 21, tags: ["cepat", "gurih", "protein_tinggi"]
  }),
  m({
    id: "udang-balado",
    name: "Udang Balado",
    cat: "lauk_utama", pro: "udang", met: "tumis", rich: 2, spice: 2, menit: 25,
    harga: "agak_mahal",
    bahan: [
      ["udang", "150 gr"], ["cabe merah", "6 buah"], ["cabe rawit", "3 buah"],
      ["bawang merah", "4 butir"], ["tomat", "1/2 buah"], ["daun jeruk", "2 lembar"],
      ["gula pasir", "1/2 sdt"], ["garam", "secukupnya"]
    ],
    langkah: [
      "Kupas udang, sisakan ekor, lumuri garam sebentar.",
      "Ulek kasar cabe, bawang merah, dan tomat.",
      "Tumis sambal dengan daun jeruk sampai matang.",
      "Masukkan udang, masak cepat sampai berubah warna.",
      "Bumbui gula garam, aduk rata, angkat."
    ],
    kcal: 230, protg: 21, tags: ["pedas", "klasik"]
  }),
  m({
    id: "udang-asam-manis",
    name: "Udang Asam Manis",
    cat: "lauk_utama", cui: "chinese_indo", pro: "udang", met: "tumis", rich: 2,
    menit: 30, harga: "agak_mahal",
    bahan: [
      ["udang", "150 gr"], ["saus tomat", "3 sdm"], ["bawang bombay", "1/4 buah"],
      ["bawang putih", "2 siung"], ["wortel", "1/2 buah"], ["gula pasir", "1 sdm"],
      ["cuka", "1 sdt"], ["tepung maizena", "1 sdt"]
    ],
    langkah: [
      "Kupas udang, lumuri garam dan merica.",
      "Tumis bawang putih dan bombay sampai harum.",
      "Masukkan udang dan irisan wortel, aduk sampai udang memerah.",
      "Tuang saus tomat, gula, cuka, dan sedikit air.",
      "Kentalkan dengan larutan maizena, angkat."
    ],
    kcal: 250, protg: 20, tags: ["manis", "anak_friendly"]
  }),
  m({
    id: "udang-saus-tiram",
    name: "Udang Saus Tiram",
    cat: "lauk_utama", cui: "chinese_indo", pro: "udang", met: "tumis", rich: 2,
    menit: 25, harga: "agak_mahal",
    bahan: [
      ["udang", "150 gr"], ["saus tiram", "2 sdm"], ["bawang putih", "3 siung"],
      ["bawang bombay", "1/4 buah"], ["jahe", "1 cm"], ["daun bawang", "1 batang"],
      ["merica", "1/4 sdt"]
    ],
    langkah: [
      "Tumis bawang putih, jahe, dan bombay sampai harum.",
      "Masukkan udang kupas, masak sampai berubah warna.",
      "Tuang saus tiram dan sedikit air.",
      "Masak sebentar sampai saus membalut udang.",
      "Taburi daun bawang dan merica, angkat."
    ],
    kcal: 220, protg: 21, tags: ["gurih", "cepat"]
  }),
  m({
    id: "oseng-kerang-pedas",
    name: "Oseng Kerang Pedas",
    cat: "lauk_utama", pro: "udang", met: "tumis", rich: 2, spice: 2, menit: 30,
    harga: "sedang",
    bahan: [
      ["kerang", "200 gr"], ["cabe merah", "5 buah"], ["cabe rawit", "4 buah"],
      ["bawang merah", "4 butir"], ["bawang putih", "2 siung"], ["jahe", "1 cm"],
      ["kecap manis", "1 sdm"], ["daun salam", "1 lembar"]
    ],
    langkah: [
      "Rebus kerang sebentar dengan jahe, buang air rebusannya.",
      "Iris cabe dan bawang, tumis dengan daun salam sampai harum.",
      "Masukkan kerang, aduk rata.",
      "Bumbui kecap manis dan garam.",
      "Masak sampai bumbu meresap, angkat."
    ],
    kcal: 210, protg: 18, tags: ["pedas", "gurih"]
  }),
  m({
    id: "ikan-asam-manis",
    name: "Ikan Asam Manis",
    cat: "lauk_utama", cui: "chinese_indo", pro: "ikan", met: "goreng", rich: 2,
    menit: 45, sulit: "sedang", harga: "agak_mahal",
    bahan: [
      ["ikan gurame", "1/4 ekor besar"], ["tepung maizena", "3 sdm"], ["tepung terigu", "3 sdm"],
      ["saus tomat", "4 sdm"], ["bawang bombay", "1/4 buah"], ["wortel", "1/2 buah"],
      ["timun", "1/2 buah"], ["gula pasir", "1 sdm"], ["cuka", "1 sdt"]
    ],
    langkah: [
      "Fillet ikan, potong dadu, balur tepung berbumbu.",
      "Goreng sampai garing keemasan, tata di piring.",
      "Tumis bombay, tuang saus tomat, gula, cuka, dan air.",
      "Masukkan wortel dan timun, kentalkan dengan maizena.",
      "Siram saus asam manis tepat sebelum disajikan."
    ],
    kcal: 340, protg: 24, tags: ["manis", "anak_friendly", "weekend"]
  })
];
