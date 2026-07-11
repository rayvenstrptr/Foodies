# Handoff: MasakApa "Dapur Hangat" Design Makeover

## Overview
Full visual redesign of MasakApa — a daily meal-inspiration app for Indonesian home cooks ("masak apa hari ini?"). The chosen direction is **Dapur Hangat**: warm & homey with a refined terracotta palette, photo-forward menu cards, line-icon navigation, and a floating pill nav bar. All 6 screens are covered: Hari Ini, Minggu Ini, Daftar Belanja, Ada Bahan Apa?, Semua Menu (+ Menu Detail), Keluarga.

## About the Design Files
The file in this bundle (\`MasakApa Makeover.dc.html\`) is a **design reference created in HTML** — a mockup showing intended look, not production code. The task is to **recreate these designs in the existing MasakApa codebase** (React + react-router + Tailwind CSS v4, see the \`Foodies\` repo: \`src/screens/*.tsx\`, \`src/components/ui.tsx\`, \`src/index.css\`) using its established patterns. Map the design tokens below into the Tailwind \`@theme\` block in \`src/index.css\` and refactor the shared components (\`Tag\`, \`Chip\`, \`Card\`, \`PrimaryButton\`, \`Stepper\`, \`BottomNav\`, \`DaySetCard\`) rather than styling screens ad hoc.

## Fidelity
**High-fidelity.** Recreate pixel-perfectly: exact colors, radii, type sizes, and spacing are listed below and present inline in the HTML mock. Exceptions: photo areas are placeholders (diagonal-stripe blocks labeled "foto") — wire them to real menu photos when available, with the placeholder pattern as the no-photo fallback.

## Relevant mock ids (inside the HTML file, canvas sections)
- \`#1a\` Hari Ini (home) — the origin of the design system
- \`#2a\` Minggu Ini · \`#2b\` Daftar Belanja · \`#2c\` Ada Bahan · \`#2d\` Semua Menu · \`#2e\` Menu Detail · \`#2f\` Keluarga
- Section \`#t0\` (\`#0a\`–\`#0g\`) is the **old/current UI** recreated for comparison — do NOT implement it.

## Design Tokens

### Colors
- Page background: \`#faf3e7\` (warm cream)
- Card surface: \`#fffdf8\`, card border: \`#efe0c8\` (inputs/chips use \`#e9d7bc\`), inner divider: \`#f5ead6\`, dashed dividers/borders: \`#dcc79f\`
- Tinted section / card header: \`#f9efdd\`; chip/thumb tint: \`#f3e5cd\`
- Primary (terracotta): \`#b8502e\`; text-on-primary: \`#fff8ef\`; deep heading accent: \`#7a3c1e\`
- Ink (headings/body): \`#33251a\`; secondary text: \`#6b4c33\`; body-muted: \`#8a6d4c\` / \`#4d3a26\`; muted: \`#9c7c56\`; faint: \`#b08a5e\` / \`#a3814f\`; inactive nav: \`#ab8f6b\`
- Green (vegetables/success): \`#5c7d4a\`; green tint: \`#e5eedd\`/\`#dde8d2\`; mid-match badge: \`#8fa76b\`; low-match badge: \`#d9a441\`
- Spicy tag: bg \`#fbe3dc\`, text \`#a63d20\`
- Dark chip (selected ingredient/protein): bg \`#33251a\`, text \`#faf3e7\`

### Typography
- Family: **Plus Jakarta Sans** (Google Fonts), fallback Inter/system-ui
- H1: 28px / 34px, weight 800, letter-spacing -0.02em (Menu Detail title: 24/29)
- Kicker above H1: 13px, 600, primary color (e.g. "Selamat sore 👋")
- Section headers: 12px, 800, uppercase, letter-spacing .1em, terracotta
- Card item title: 15–15.5px, 700; slot label (LAUK/SAYUR): 10.5–11px, 700, uppercase, ls .08em
- Meta text: 12–12.5px, muted; chips 11–13.5px, 600–700

### Shape & elevation
- Cards: radius 24px (small cards 20px), 1px border \`#efe0c8\`, shadow \`0 2px 8px rgba(139,90,43,.06)\`
- Buttons & chips: fully rounded (9999px)
- Primary button: bg terracotta, shadow \`0 6px 16px rgba(184,80,46,.3)\`, 14–16px vertical padding, weight 800
- Photo thumbs: 48–64px square, radius 14–16px
- Bottom nav: floating, inset 12px from edges/bottom, radius 24px, card bg + border, shadow \`0 8px 24px rgba(139,90,43,.12)\`; active tab = pill bg \`#f9efdd\`, terracotta icon+label (10.5px/700); inactive \`#ab8f6b\`

### Iconography
- **Navigation + all interactive controls: line SVG icons** (stroke 2–2.2, round caps), never emoji. Set used in mock: bowl (Hari Ini), calendar (Minggu), basket (Bahan), book (Menu), people (Keluarga), refresh/swap, shuffle, lock open/closed, cart, chat bubble, search, heart, ban, back chevron. Recommend lucide-react equivalents: utensils/soup, calendar-days, shopping-basket, book-open, users, refresh-cw, shuffle, lock/lock-open, shopping-cart, message-circle, search, heart, ban, chevron-left.
- **Content emoji stay** (mood chips 🌶️🍜🥬⚡💰✨, kickers, spice-level 🌶️🌶️).

## Screens

### Hari Ini (#1a)
- Kicker "Selamat sore 👋" + H1 "Masak apa hari ini?" (two lines)
- Mood chips row (wrap): selected = terracotta bg/white text; unselected = card bg + \`#e9d7bc\` border
- Context summary card ("Hari ini · 4 porsi · 3 lauk · Ibu, Ayah, Adek") with "Ubah" chip — replaces the old inline who/portion/lauk controls; tapping opens those controls (sheet or expand)
- Suggestion card: 3 rows (Lauk/Sayur/Pelengkap), each = 56px photo thumb + slot label + name (15.5/700) + time, 36px circular refresh button \`#f3e5cd\`; footer strip \`#f9efdd\` with 💡 reasoning sentence + outlined stat chips (⏱ / 💰 / kkal)
- Full-width pill CTA "Kasih ide lain 🍳"
- Vegetable thumbs use green tint; protein thumbs warm tint

### Minggu Ini (#2a)
- Two half-width pill buttons: primary "Susun ulang" (refresh icon), secondary "Belanja" (cart icon)
- Day cards: header strip \`#f9efdd\` with day name (15/800, \`#7a3c1e\`) + lock chip (locked = solid terracotta w/ lock icon; unlocked = outlined w/ lock-open icon) + shuffle icon chip; then dish rows (48px thumbs) as on Hari Ini; footer = stat chips row on \`#f9efdd\` chips
- Tags on dishes: "pedas" (spicy colors), "santan" (\`#f3e5cd\`/\`#8a6d4c\`)

### Daftar Belanja (#2b)
- Progress card: 8px progress bar (track \`#f3e5cd\`, fill green) + "2 dari 9 item dicoret · untuk 4 porsi"
- Category groups with uppercase terracotta headers (emoji allowed: 🥬 🍗 🧂), one card per group
- Item rows: 26px rounded-square checkbox (unchecked: 2px \`#dcc79f\` border; checked: green bg + white ✓), name 14.5/600 + qty muted inline; checked rows: opacity .45 + line-through
- Sticky bottom CTA: "Salin untuk WhatsApp" with chat icon

### Ada Bahan (#2c)
- Pill search input w/ search icon; selected ingredient chips = dark \`#33251a\` pills with ✕
- Result cards: 64px photo thumb + name + match % pill (90%+ green \`#5c7d4a\`, ~75% \`#8fa76b\`, ~55% \`#d9a441\`) + meta + status line ("Semua bahan sudah ada! 🎉" in green, or "Tinggal beli: **bold list**")

### Semua Menu (#2d)
- Pill search; filter chip rows (horizontal scroll): selected type = terracotta, selected protein = dark ink
- **2-column photo card grid** (was list): 96px photo header + name 13.5/700 + meta 11px; favorite = white circle overlay w/ filled terracotta heart; excluded = ban overlay + card opacity .55

### Menu Detail (#2e)
- 210px hero photo; overlaid 38px circular white buttons: back chevron (left), heart (right)
- Title card overlapping hero by -24px: kicker "LAUK UTAMA · AYAM", title, chip row (⏱ 🎚 💰 🥥)
- Buttons: primary pill "＋ Masak hari ini" + outlined ban icon button
- "Bahan" card: rows with dashed separators, qty right-aligned muted; footnote 11.5px
- "Cara masak" card: 26px terracotta numbered circles, 14px/1.5 steps
- Nutrition strip on \`#f9efdd\`: Energi / Protein values + right-aligned disclaimer

### Keluarga (#2f)
- Member card: 44px initial avatar (\`#f3e5cd\`), name + summary line, "Hapus" text button in terracotta
- Segmented pill groups: Umur (Anak/Dewasa/Lansia), Tahan pedas (🚫 / 🌶️ ×1–3)
- Alergi chips (spicy tint) & Nggak-suka chips (warm tint) with ✕; add = dashed-border pill "＋ Tambah"
- "＋ Tambah anggota" = full-width dashed 2px \`#dcc79f\` pill
- Pengaturan Masak card: stepper (34px circular \`#f3e5cd\` +/− buttons), lauk-count pills, time-limit pills (30'/45'/60'/90')
- "Reset semua data" = underlined muted text link, centered

## Interactions & Behavior
- All existing app logic is unchanged (store, engine, routing) — this is a reskin plus these UX deltas:
  - Hari Ini: who/porsi/lauk controls collapse into summary card + "Ubah" (bottom sheet or inline expand)
  - Semua Menu: list → 2-col grid; Menu Detail gets "＋ Masak hari ini" action (adds to today's set)
- Buttons/chips: press state = darken ~6% (e.g. terracotta → \`#a64627\`); transitions 150ms ease
- Checkbox toggle, chip select, swap/shuffle all behave as in current code
- Bottom nav floats over content: give scroll containers ~110px bottom padding

## State Management
No new state beyond current app. Photo per menu: add optional \`photo\` field to Menu data; fall back to striped placeholder tint (warm for lauk/pelengkap, green for sayur).

## Assets
- Google Font: Plus Jakarta Sans (weights 400/600/700/800)
- Icons: line SVGs inlined in the mock; use lucide-react in the codebase
- No raster assets; photos to be supplied later

## Files
- \`MasakApa Makeover.dc.html\` — canvas with all mocks (sections: t2 + 1a = final design; t1 = explorations; t0 = old UI baseline)
