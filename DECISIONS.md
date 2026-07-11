# DECISIONS.md — MasakApa v1

Keputusan desain untuk hal-hal yang ambigu di spec. Prinsip pemandu: pilih opsi
yang paling melayani seorang ibu Indonesia non-teknis yang pakai HP.

## Arsitektur & penyimpanan

- **localStorage-only, schema berversi.** Semua akses localStorage lewat satu modul
  [`src/lib/storage.ts`](src/lib/storage.ts) dengan `schemaVersion: 1` dan `migrate()`
  stub. UI tidak pernah menyentuh localStorage langsung → backend bisa menggantikannya
  nanti tanpa mengubah UI.
- **Engine di balik interface.** `RecommendationEngine` ([`src/engine/types.ts`](src/engine/types.ts))
  bisa diganti implementasi LLM-backed tanpa menyentuh UI. `createEngine()` mengembalikan
  implementasi lokal deterministik.
- **HashRouter** (bukan BrowserRouter) supaya PWA jalan dari hosting statis / offline
  tanpa perlu rewrite server.
- **Zero network saat runtime.** Semua data di-bundle. Service worker (workbox) mem-precache
  shell → offline penuh setelah kunjungan pertama.

## Data & tagging

- **`Ingredient.qtyPerServing` sebenarnya "per resep (~4 porsi)".** Jumlah bahan ditulis
  sebagai porsi keluarga, bukan benar-benar per-1-orang. Konsekuensinya daftar belanja
  di-scale relatif ke `BASE_SERVINGS = 4` ([`src/lib/shopping.ts`](src/lib/shopping.ts)):
  pada 4 porsi = apa adanya, 8 porsi = ×2. Kalau tidak, "bawang merah 4 butir" × 4 porsi
  × banyak menu jadi ratusan butir yang tidak masuk akal.
- **Distribusi cuisine: 77% Indonesia / 17% Chinese-Indo / 6% Western** (target spec
  70/20/10). Western sengaja ditahan ~6% karena pasta/keju/sosis inheren butuh supermarket,
  sedangkan aturan kualitas data mengharuskan **~90% menu pasar-sourceable** (supermarket
  ≤ ~15%). Prioritas: mempertahankan sifat pasar-first di atas mengejar angka 10% western.
  Chinese-Indo dinaikkan dengan lauk pasar-friendly (kecap asin/tauco/ebi, bukan saus tiram).
- **≥ 300 menu** (final: **335**), semua kategori di atas minimum, 30 curated sets.
  `npm run validate:data` mengecek shape, duplikat id, dupe nama (kunci kata terurut),
  koherensi santan/pedas/kategori, effort > 0, dan minimum per kategori.

## Engine — komposisi & keseimbangan

- **Reserve effort (`MIN_SLOT_EFFORT = 15`).** Saat memilih lauk untuk set komposit,
  engine menyisakan ~15 menit untuk sayur wajib. Tanpa ini, lauk 45 menit memakan seluruh
  cap 45 menit → sayur gagal dipilih → set gagal. Ini bug yang sempat bikin ~57% hasil
  jatuh ke `one_dish`; setelah fix jadi ~12% (sesuai niat).
- **Aturan "no same method" mengecualikan anchor nasi_spesial.** Nasi (uduk/liwet/kuning)
  adalah slot karbo, bukan "lauk" — jadi metodenya tidak dihitung bentrok. Aturan
  **max-1-santan tetap menghitung anchor** (nasi uduk bersantan → pendamping tidak boleh
  bersantan lagi), supaya tidak santan bertumpuk.
- **Effort cap per chip:** `Cepet` = 30 mnt, `Lagi santai` = tanpa batas, `Yang Spesial`
  menaikkan cap ke ≥ 90 mnt (minta "yang spesial" ⇒ rela masak lebih niat). Default hari
  kerja = 45 mnt (dari profil keluarga).
- **Curated set & nasi_spesial** juga tunduk pada cap. Di hari kerja default (45 mnt)
  kebanyakan paket multi-lauk baru muncul lewat chip `Yang Spesial`/`Lagi santai` — sesuai
  spec (paket = akhir pekan/spesial).
- **Mode harian:** ~12% `one_dish`, ~8% nasi_spesial (lebih tinggi di akhir pekan), sisanya
  set komposit — via seeded roll. `Yang Spesial` kuat memunculkan curated set / nasi_spesial.
- **Determinisme + variasi:** seeded RNG (mulberry32). Setiap "Ganti" me-roll ulang hanya
  slot itu dengan seed berbeda, mengecualikan menu lama, dan tetap memvalidasi keseimbangan
  terhadap item yang terkunci.

## Riwayat (bukan diary)

- Setiap set yang **ditampilkan** (generate, ganti-item, susun minggu) diam-diam dicatat
  `{date, menuIds}`. User tidak pernah konfirmasi "sudah masak". Dipakai untuk penalti
  recency (peluruhan linear 14 hari). Riwayat dibatasi 160 entri terakhir.

## Profil default (jalan tanpa setup)

- Profil awal = 1 anggota "Keluarga", tahan pedas sedang (2), 4 porsi, 2 lauk. App langsung
  bisa dipakai tanpa mengisi apa pun. Kalau tidak ada anggota yang "makan hari ini", filter
  alergi/pedas dianggap toleran (semua boleh).

## PWA

- Ikon berbasis **SVG** (`icon.svg` + `icon-maskable.svg` dengan safe-zone) supaya
  sepenuhnya self-contained tanpa perlu tooling raster. Chrome/Android menerima ikon SVG
  untuk install.

## Nutrisi

- Selalu dilabeli **"perkiraan kasar"** di setiap tempat yang menampilkannya. Bukan alat
  hitung kalori.
