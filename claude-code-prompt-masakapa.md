# Build "MasakApa" — daily cooking inspiration app for Indonesian home cooks

You are building a complete, working v1 of a web app called **MasakApa** (working name). Build it in the current (empty) folder. Read this entire spec before writing any code, then follow the milestones in order.

## The problem

Home cooks (target: Indonesian moms and household cooks) run out of ideas for daily meals. Simple homey food becomes boring and repeats every week — not because they can't cook more, but because "lupa aja kalau kita bisa masak ini." This app is an **inspiration engine**: it answers "masak apa hari ini?" and "masak apa minggu ini?".

It is NOT a meal tracker, food diary, or calorie counter. The user must never be required to log anything.

## Product principles (do not violate these)

1. **Inspiration over tracking.** Zero mandatory input. Everything the app remembers, it remembers automatically.
2. **Composition, not just recipes.** An Indonesian home meal is a SET: nasi (implied) + 1 lauk utama + 1 sayur + optional pelengkap. The app recommends balanced sets, not isolated dishes. Balancing is the killer feature: if the lauk is heavy (gulai, bersantan), the sayur must be light (bening, tumis ringan).
3. **Pasar-prioritized (not absolute).** Ingredients default to what's commonly available in an Indonesian traditional market (pasar). A minority of menus (~10%) may depend on supermarket items (spaghetti, keju, butter, saus tiram) for variety — the engine deprioritizes them and the UI labels them ("perlu ke supermarket"), but they're welcome now and then. Never: hard-to-find imports or fancy substitutes (quinoa, kale, fresh basil → use kemangi).
4. **Bahasa Indonesia UI**, casual/warm tone ("Masak apa hari ini?"), mobile-first.

## Tech stack (fixed — do not substitute)

- Vite + React + TypeScript, single-page app
- Tailwind CSS
- PWA (vite-plugin-pwa): installable, works offline after first load
- ALL data client-side in `localStorage`. No backend, no auth, no API keys, no network calls at runtime.
- Wrap all storage access in one module (`src/lib/storage.ts`) with a versioned schema (`schemaVersion: 1`) and a migration stub, so a backend can replace it later without touching UI code.
- Seed data as static TypeScript modules in `src/data/`.
- Vitest for engine unit tests.

## Data model

### Menu (the core entity — seed data)

```ts
type Menu = {
  id: string;
  name: string;                      // "Gulai Ayam", "Tumis Labu Siam"
  category: "lauk_utama" | "sayur" | "pelengkap" | "sup" | "one_dish" | "nasi_spesial";
  // one_dish = complete meals: nasi goreng, mie goreng, capcay + nasi, pasta
  // nasi_spesial = flavored rice bases that anchor a themed set: nasi liwet, nasi uduk, nasi kuning, nasi hainam, nasi bakar
  cuisine: "indonesia" | "chinese_indo" | "western_simple";
  protein: "ayam" | "ikan" | "udang" | "telur" | "tempe_tahu" | "daging_sapi" | "none";
  method: "goreng" | "tumis" | "rebus" | "kukus" | "bakar" | "santan" | "panggang";
  richness: 1 | 2 | 3;               // 1 ringan, 2 sedang, 3 berat
  bersantan: boolean;
  berkuah: boolean;
  segar: boolean;                    // fresh/light character (bening, urap, lalapan)
  spiceBase: 0 | 1 | 2 | 3;          // heat as normally cooked
  sambalSeparable: boolean;          // can be served not-spicy with sambal on the side
  effortMinutes: number;             // realistic active cooking time
  difficulty: "gampang" | "sedang" | "butuh_niat";
  priceTier: "ekonomis" | "sedang" | "agak_mahal";
  ingredients: Ingredient[];
  steps: string[];                   // 5–8 simple steps in Bahasa, incl. bumbu halus notation
  nutrition: { kcalPerServing: number; proteinGram: number }; // rough estimates only
  tags: string[];                    // "pedas", "berkuah", "seger", "cepat", "anak_friendly", ...
  pairTags?: string[];               // for nasi_spesial: what companions fit ("ayam_rebus", "tumis_hijau", "sambal_jahe")
};

type Ingredient = {
  name: string;                      // canonical, matches the ingredient dictionary
  qtyPerServing: string;             // human hint: "100 gr", "1/2 buah", "secukupnya"
  shoppingCategory: "sayuran_bumbu_segar" | "protein" | "bumbu_dapur" | "sembako" | "lainnya";
  perishable: boolean;
  staple: boolean;                   // assumed always at home (garam, minyak, kecap) — excluded from shopping list by default
  availability: "pasar" | "supermarket"; // supermarket = not typically found in a traditional market
};
```

Also create `src/data/ingredients.ts`: a canonical ingredient dictionary (name + aliases) so ingredient-mode autocomplete and shopping-list merging work on consistent names.

### Household profile

```ts
type Household = {
  members: Member[];
  defaultServings: number;
  dishesPerMeal: 2 | 3 | 4;          // 2 = lauk+sayur (default), 3 adds pelengkap, 4 adds sup
  weekdayEffortCapMinutes: number;   // default 45
};
type Member = {
  name: string;
  ageGroup: "anak" | "dewasa" | "lansia";
  allergies: string[];               // ingredient names — HARD filter
  dislikes: string[];                // menu ids or ingredient names — soft penalty
  spiceTolerance: 0 | 1 | 2 | 3;
  eatingToday: boolean;              // toggled on the Today screen
};
```

### Automatic history (this is NOT logging)

Every time the app generates/shows a recommendation, it silently stores `{ date, menuIds }`. The user never confirms whether they cooked it. Purpose: recency penalty so suggestions stay fresh. Also store `favorites: string[]` and `banned: string[]` (set via optional one-tap ❤️ / 🚫 on any menu — the only manual inputs in the app, both optional).

## The recommendation engine (the heart — build this carefully)

Pure TypeScript module in `src/engine/`, no React imports, fully unit-tested. Expose it behind an interface (`RecommendationEngine`) so a future LLM-backed implementation can be swapped in without UI changes.

### Composing one day

A daily set = 1 `lauk_utama` + 1 `sayur` + optional 1 `pelengkap` (+ optional `sup`), sized by `dishesPerMeal` — OR a single `one_dish`. (`sup` can also take the lauk or sayur slot depending on its protein/richness.) The number of dishes is adjustable per generation on the Today screen, defaulting from the household setting.

**Carb slot:** nasi putih is implied by default (zero effort, not a Menu entity). Occasionally a `nasi_spesial` takes the carb slot and turns the day into a themed course — companions must then match its `pairTags` (nasi hainam → ayam panggang/rebus + tumis sayur hijau; nasi liwet → tahu/tempe goreng + sayur asem) and its `effortMinutes` counts toward the effort cap. Surface nasi_spesial via the "Yang Spesial" chip, weekend defaults, or occasional rotation — not every day.

**Hard filters (never violate):**
- Any ingredient in any eating member's `allergies` → menu excluded.
- Menu in `banned` → excluded.
- `spiceBase` > lowest `spiceTolerance` among eating members → excluded, UNLESS `sambalSeparable` (then include and note "sambal dipisah ya" in the explanation).

**Balance constraints within a day (hard):**
- Max 1 `bersantan` menu per set.
- If lauk `richness === 3` → sayur must be `richness === 1` or `segar`.
- No same `method` twice in one set (no goreng + goreng).
- Lauk and pelengkap must not share the same `protein`.
- Total `effortMinutes` of the set ≤ effort cap (weekday default 45; user chip "Lagi santai" removes the cap; chip "Cepet" caps at 30).

**Weekly constraints (Mon–Fri plan, hard):**
- No exact menu repeated within the week.
- No same `protein` for the lauk on consecutive days.
- ≥ 3 distinct proteins across the week; at least one ikan-based and one tempe_tahu-forward day.
- Week average priceTier ≤ "sedang" unless the user picks otherwise.

**Scoring (soft — rank valid candidates):**
- Recency penalty: menu appears in history within last 14 days → strong penalty (decaying with age). This is the anti-repeat mechanism.
- Preference chips of the day (Pedas / Berkuah / Seger / Cepet / Ekonomis / Yang Spesial) boost matching menus; "Yang Spesial" strongly boosts nasi_spesial anchors and curated sets.
- Favorites get a small boost; member `dislikes` a penalty.
- Variety bonus across the week: mix of methods and cuisines.
- **Ingredient-reuse bonus (weekly plan):** prefer plans where a perishable ingredient spans ≥ 2 menus in the week (1 ekor ayam → 2 menus, 1 pack santan → 2 days). This saves money and reduces waste — weight it meaningfully.
- **Pasar preference (soft):** menus whose non-staple ingredients are all `pasar` score higher. Supermarket-dependent menus get a mild penalty plus a "perlu ke supermarket" label, and a weekly plan defaults to at most 1 of them (relaxable via setting) — variety is welcome, dependency is not.

**Explanations:** every generated set MUST return a short Bahasa reason string, e.g. *"Gulai ayam itu berat dan bersantan, jadi sayurnya bening bayam biar seimbang."* Always displayed. This is a trust feature.

**Determinism with variety:** use a seeded RNG; each "Ganti" tap re-rolls only that slot and must return a different valid menu while keeping the rest of the set fixed (re-validate balance constraints against the locked items).

### Ingredient mode ("Ada Bahan Apa?")

Input: list of on-hand ingredients (chips with autocomplete from the dictionary). Output: menus ranked by coverage = owned/needed (ignore `staple` items; weight perishable matches higher). Show per result: *"Bahan cukup 80% — tinggal beli daun jeruk sama serai."* Can also compose a balanced set from the results.

### Curated sets (courses)

`src/data/sets.ts`: **25–35 hand-authored named combos** — complete courses that Indonesians recognize as a unit, e.g. Paket Nasi Liwet (nasi liwet + tahu & tempe goreng + sayur asem + sambal terasi), Paket Nasi Hainam (nasi hainam + ayam panggang + tumis pakcoy), Paket Nasi Uduk (nasi uduk + ayam goreng + orek tempe + sambal kacang), Paket Soto Ayam Komplit (soto + perkedel + kerupuk). Each references existing menu ids. The engine may surface a curated set instead of a composed one (boosted on weekends and by the "Yang Spesial" chip). Same hard filters, effort cap, and recency rules apply — a curated set counts as one entry in history.

## Seed data requirements (quality here = product quality)

Generate **≥ 300 menus** in `src/data/menus.ts`. Generate in batches of ~40 grouped by category, run `npm run validate:data` between batches, and dedupe by name similarity. Tagging quality must NOT drift in later batches — re-read the tagging rules before each batch; a mistagged menu is worse than a missing one. Distribution:
- ~70% Indonesian home cooking (masakan rumahan): tumis kangkung/buncis/labu siam/tauge, sayur bening bayam, sayur asem, sayur lodeh, urap, pecel, ayam goreng lengkuas, ayam bakar kecap, ayam kecap, semur ayam/daging/telur, balado telur/terong/ikan, pepes tahu/ikan, ikan goreng, pesmol, gulai ayam, opor, soto ayam bening, sop ayam/sayuran, telur dadar/mata sapi kecap, orek tempe, tahu bacem, sambal goreng kentang ati (offal optional), perkedel, botok, garang asem, etc.
- ~20% Chinese-Indonesian: capcay, fuyunghai, ayam kecap mentega, cah brokoli ayam (brokoli is pasar-available), sapo tahu, mie goreng, nasi goreng, bihun goreng, ayam koloke sederhana.
- ~10% simple western/pasta: spaghetti bolognese, aglio olio, macaroni schotel sederhana, sosis tumis paprika (paprika optional — prefer cabe hijau besar).

Also include 8–12 `nasi_spesial` entries (nasi liwet, nasi uduk, nasi kuning, nasi hainam, nasi bakar, nasi ulam, etc.) with sensible `pairTags`.

Rules for seed data:
- Tag every ingredient's `availability` honestly. ~90% of menus should be fully pasar-sourceable; up to ~10% may need supermarket items (pasta and some western/chinese menus naturally will). When an exotic ingredient has a pasar substitute, use the substitute (basil → kemangi).
- Tag accurately — the engine is only as good as the tags. `effortMinutes` must be realistic (semur ≠ 15 minutes).
- Nutrition values are rough estimates; the UI must always label them **"perkiraan kasar"**.
- Include a small validation script (`npm run validate:data`) that checks: schema shape, no duplicate ids, category/method consistency (e.g. bersantan ⇒ method or tags coherent), effortMinutes > 0, at least N menus per category.

## Screens (all Bahasa Indonesia, mobile-first, test at 390px width)

1. **Hari Ini** (home) — big friendly button "Masak apa hari ini?". Result: set card (lauk + sayur + pelengkap) with the reason line, total effort minutes, price tier, rough nutrition per serving. Controls: per-item "Ganti", "Ganti semua", preference chips (Pedas / Berkuah / Seger / Cepet / Ekonomis / Yang Spesial / Lagi santai), servings stepper, "Siapa makan hari ini?" member toggles (drives allergy/spice filters). Tap a menu → detail.
2. **Minggu Ini** — Senin–Jumat grid. "Susun menu seminggu" generates the full plan honoring weekly constraints. Lock a day, swap per item or per day. Prominent button → "Buat Daftar Belanja".
3. **Daftar Belanja** — consolidated from the week plan, quantities scaled by servings, merged via the ingredient dictionary, grouped by pasar section (Sayuran & Bumbu Segar / Protein / Bumbu Dapur / Sembako). Checkboxes; "sudah punya" moves an item out. **"Salin untuk WhatsApp"** button: copies a clean plain-text version (moms share shopping lists via WA).
4. **Ada Bahan Apa?** — ingredient chips input with autocomplete → ranked menu results with coverage % and "tinggal beli: …".
5. **Keluarga** — manage members: name, age group, allergies, dislikes, spice tolerance; default servings; weekday effort cap.
6. **Semua Menu** — browse/filter the catalog (category, cuisine, protein, price, effort). Menu detail page: photo placeholder, ingredients with quantities, steps, nutrition ("perkiraan kasar"), ❤️ Favorit / 🚫 Jangan tawarin lagi.

Bottom tab navigation. Keep the visual style warm and simple — think kitchen, not dashboard.

## Non-goals (do not build)

- No accounts, login, or server. No runtime network calls.
- No meal logging or diary of what was actually cooked. History is automatic suggestion-memory only.
- No precise nutrition tracking or calorie goals.
- No cuisines beyond the scope above; nothing requiring hard-to-find ingredients or advanced technique.
- No ML/self-learning. The "learning" is just favorites/banned + recency penalty.

## Definition of done

1. `npm run dev` works; `npm run build` passes; PWA installable and loads offline after first visit.
2. `npm run validate:data` passes on the full seed set.
3. Engine unit tests (Vitest) cover at minimum: allergy hard-filter, spice filter + sambalSeparable exception, max-1-santan rule, heavy-lauk→light-sayur rule, no duplicate method in a set, weekly protein rotation, no repeats within a week, 14-day recency penalty effect, ingredient-reuse bonus preference, swap keeps locked items valid, nasi_spesial pairing respects pairTags, curated sets respect hard filters.
4. All UI copy in Bahasa Indonesia; nutrition always labeled "perkiraan kasar".
5. Spot-check 30 random seed menus at the end: availability flags correct, sane tags, realistic effort.
6. localStorage schema versioned; storage module is the only place that touches localStorage.

## Milestones (build in this order, verify each before moving on)

1. **Data layer:** types, ingredient dictionary, seed menus, validation script. Run validation.
2. **Engine:** composition + weekly planner + ingredient mode + scoring, with the full test suite. Run tests.
3. **UI:** all six screens wired to the engine and storage.
4. **Polish:** PWA setup, WhatsApp copy formatting, empty states (first-run: friendly prompt to set up Keluarga, but app must work with a sensible default profile without setup), final QA pass against the Definition of done.

Work autonomously through all milestones. If a spec detail is ambiguous, choose the option that best serves a non-technical Indonesian mom on a phone, and note the decision in a `DECISIONS.md`.
