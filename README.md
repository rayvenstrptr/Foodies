# MasakApa 🍚

Mesin inspirasi masak harian untuk ibu & juru masak rumahan Indonesia. Jawaban buat
pertanyaan **"masak apa hari ini?"** dan **"masak apa minggu ini?"** — bukan pencatat
makan, bukan penghitung kalori. Nol input wajib.

Aplikasi merekomendasikan **set seimbang** (nasi + lauk + sayur + pelengkap), bukan resep
lepas: kalau lauknya berat/bersantan, sayurnya dibikin ringan/seger biar imbang.

## Menjalankan

```bash
npm install
npm run dev          # http://localhost:5173
npm run build        # tsc -b && vite build (menghasilkan PWA)
npm run preview      # cek hasil build
npm test             # unit test engine (Vitest)
npm run validate:data # validasi seed data (335 menu, 30 paket)
```

## Tech

- Vite + React + TypeScript, single-page app, PWA (installable, offline setelah kunjungan
  pertama)
- Tailwind CSS, mobile-first (diuji di 390px)
- **Semua data client-side di `localStorage`** — tanpa backend, auth, API key, atau network
  call saat runtime

## Struktur

| Area | Lokasi |
| --- | --- |
| Model & tipe | `src/data/types.ts` |
| Kamus bahan (kanonik + alias) | `src/data/ingredients.ts` |
| 335 seed menu (per kategori) | `src/data/menus/` → `src/data/menus.ts` |
| 30 paket kurasi | `src/data/sets.ts` |
| Validator data | `scripts/validate-data.ts` |
| Engine rekomendasi (murni, teruji) | `src/engine/` |
| Storage berversi (satu-satunya akses localStorage) | `src/lib/storage.ts` |
| 6 layar UI | `src/screens/` |

## Layar

1. **Hari Ini** — "Masak apa hari ini?" → set seimbang + alasan, chip preferensi
   (Pedas/Berkuah/Seger/Cepet/Ekonomis/Yang Spesial/Lagi santai), "Ganti" per item,
   "Siapa makan hari ini?", stepper porsi & jumlah lauk.
2. **Minggu Ini** — rencana Senin–Jumat, kunci hari, ganti per item/hari, → Daftar Belanja.
3. **Daftar Belanja** — konsolidasi dari rencana minggu, dikelompokkan per seksi pasar,
   checkbox "sudah punya", **Salin untuk WhatsApp**.
4. **Ada Bahan Apa?** — input bahan → menu diperingkat coverage + "tinggal beli: …".
5. **Keluarga** — anggota, alergi (filter wajib), tidak-suka, tahan pedas, porsi, cap waktu.
6. **Semua Menu** — telusuri/saring katalog + halaman detail (bahan, langkah, favorit/blokir).

Keputusan desain yang tidak trivial didokumentasikan di [DECISIONS.md](DECISIONS.md).
