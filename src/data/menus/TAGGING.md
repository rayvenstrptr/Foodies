# Aturan tagging seed data — BACA ULANG SEBELUM SETIAP BATCH

Kualitas tag = kualitas produk. Menu yang salah tag lebih buruk daripada menu yang tidak ada.

## richness
- **1 ringan**: bening, tumis ringan tanpa protein berat, kukus, lalapan, acar, sup bening sayur.
- **2 sedang**: kebanyakan goreng/tumis berprotein, semur, pepes, soto bening, telur.
- **3 berat**: gulai, opor, lodeh santan kental, rawon, deep-fried berlemak besar, soto santan, iga.

## segar
`true` hanya untuk karakter seger/light: bening, asem-asem, urap, lalapan, karedok, acar, pecel, sup asam, plecing. Gorengan & santan TIDAK segar.

## spiceBase (pedas saat dimasak normal)
- 0: bening, sop anak, semur, opor manis, capcay.
- 1: tumis rumahan pakai cabe iris, soto, gulai ringan.
- 2: balado umum, rica ringan, sambal goreng, cabe ijo.
- 3: rica-rica, plecing, oseng mercon, sambal-forward.
Aturan: spiceBase >= 2 wajib tag "pedas".

## sambalSeparable
`true` kalau lazim disajikan versi tidak pedas + sambal terpisah (ayam/ikan/tempe goreng + sambal, lalapan, pecel-style, penyet yang bisa dipisah). `false` kalau pedasnya menyatu di bumbu (balado, rica, oseng mercon).

## effortMinutes (waktu aktif realistis)
- Tumis/bening/cah/dadar: 10–20. Sambal ulek: 10–15.
- Goreng ungkep ayam/bacem: 40–50. Semur: 45–60. Gulai/opor: 50–65.
- Pepes/botok: 45–60. Presto/empal/rawon/mie ayam: 60–90 (butuh_niat).
- difficulty: gampang <= ~45 mnt & teknik simpel; butuh_niat >= ~40 mnt ATAU teknik ribet.

## priceTier (porsi keluarga)
- ekonomis: tempe/tahu/telur/sayur/teri/tumis.
- sedang: ayam, ikan kembung/nila/lele/tongkol, bakso, cumi kecil.
- agak_mahal: udang, gurame/kakap/bawal, daging sapi/iga, menu keju/butter.

## method
Teknik dominan satu saja. Gulai/opor/lodeh/bobor => "santan" (dan bersantan=true).
bersantan=true tapi method lain (mis. nasi uduk = rebus/kukus) => wajib tag "bersantan".

## category
- sayur = hidangan sayur pendamping (tumis/cah/bening/urap/asem/lodeh/balado terong).
- pelengkap = gorengan kecil, sambal, acar, teri kacang, perkedel, bacem.
- sup = kuah protein-forward (sop ayam/daging, soto, rawon).
- one_dish = lengkap tanpa lauk lain (nasgor, mie, kwetiau, bubur, gado-gado, pasta).
- nasi_spesial = nasi berbumbu jadi anchor tema; WAJIB pairTags >= 2.

## Kosakata tags (jangan mengarang di luar ini)
Karakter: pedas, berkuah, seger, cepat (<=20 mnt), anak_friendly, bersantan, klasik,
praktis, hangat, manis, kering, gurih, protein_tinggi, ekonomis, weekend.
Arketipe pendamping (untuk pairing nasi_spesial — pasang di menu pendamping):
ayam_goreng, ayam_bakar, ayam_rebus, ayam_suwir, ikan_goreng, ikan_asin, lauk_telur,
tahu_tempe, orek_tempe, sambal, acar, perkedel, tumis_hijau, sayur_asem, sayur_bening,
urap_lalap, sambal_goreng_kentang, sup_bening, teri_kacang, serundeng.

## availability
Ditentukan kamus bahan — JANGAN override. Menu wajib supermarket cuma kalau memang
esensial (pasta, keju, sosis, saus tiram, mentega, susu). Cah rumahan pakai
kecap asin + kaldu, BUKAN saus tiram, biar tetap pasar. Substitusi eksotis: basil→kemangi,
paprika→cabe hijau besar (paprika opsional).

## Disiplin batch
1. Baca ulang file ini.
2. Tulis ~40 menu satu kategori.
3. `npx tsx scripts/validate-data.ts --partial` — beresin error/warning dulu.
4. Cek dupe nama (validator pakai kunci kata terurut).
