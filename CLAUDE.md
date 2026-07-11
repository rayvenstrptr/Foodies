# CLAUDE.md — MasakApa

Guidance for Claude working in this repo. For product/architecture rationale see
[README.md](README.md) and [DECISIONS.md](DECISIONS.md); don't duplicate them here.

## What this is

**MasakApa** answers "masak apa hari ini?" (what should I cook today?) for non-technical
Indonesian home cooks — typically a mom on a phone. It recommends **balanced sets**
(nasi + lauk + sayur + pelengkap), not loose recipes. It is not a food diary or calorie
counter. **Zero required input**: it works on first open with a default 1-person family.

## Run / build / verify

```bash
npm run dev            # http://localhost:5689  (port set in vite.config.ts)
npm run build          # tsc -b && vite build  → PWA
npm run preview        # serves the build on 5689
npm test               # Vitest — pure engine tests
npm run validate:data  # seed-data validator (335 menus, 30 sets)
```

A dev server may already be running in the background on 5689. Always verify UI changes
at **390px width** (mobile-first; that is the design target).

## Layout of the code

| Area | Location |
| --- | --- |
| App shell + routes (HashRouter) | [src/App.tsx](src/App.tsx) |
| Recommendation engine (pure, tested — do not couple to UI) | [src/engine/](src/engine/) |
| Versioned storage (the ONLY localStorage access) | [src/lib/storage.ts](src/lib/storage.ts) |
| Global store / context | [src/lib/store.tsx](src/lib/store.tsx) |
| Seed data (335 menus, 30 sets, ingredient dictionary) | [src/data/](src/data/) |
| 6 screens | [src/screens/](src/screens/) |

## Design system (READ THIS BEFORE A DESIGN MAKEOVER)

The visual layer is small and centralized — change it here, not screen-by-screen:

- **Theme tokens** — [src/index.css](src/index.css): Tailwind v4 `@theme` block. Warm
  kitchen palette (`--color-warm-*`, `--color-cream`, `--color-leaf-*`), Inter font, base
  text color `#3f2d1d`. This is the single source of truth for color; redesign starts here.
- **UI primitives** — [src/components/ui.tsx](src/components/ui.tsx): `Card`, `Tag`,
  `PrimaryButton`, `GhostButton` (chips), `SectionTitle`, `EmptyState`, `Stepper`. Screens
  compose these; restyling them propagates everywhere.
- **App shell** — [src/App.tsx](src/App.tsx) centers a `max-w-md` column on `bg-cream`;
  [src/components/BottomNav.tsx](src/components/BottomNav.tsx) is the fixed 5-tab bottom nav.
- **Styling approach**: Tailwind v4 utility classes inline; no CSS modules, no component
  library. Current look = rounded-2xl cards, soft shadows, `ring-warm-100` borders, emoji
  as iconography.

### Constraints a redesign MUST preserve

- **Mobile-first, single `max-w-md` column.** Designed and tested at **390px**. No desktop
  layout is expected.
- **UI copy stays in Bahasa Indonesia**, warm and non-technical. Don't translate labels.
- **Keep the PWA manifest colors in sync.** `theme_color` (`#b45309`) and `background_color`
  (`#fffbeb`) live in [vite.config.ts](vite.config.ts) — update them if the palette changes.
- **Emoji icons** (`icon.svg`, `icon-maskable.svg`) are hand-authored SVG; keep them
  self-contained (no raster tooling).
- **No new runtime dependencies without reason.** Runtime is zero-network / offline-first;
  don't add fonts, CDNs, or icon packs that break offline. Inline/​bundle any new asset.
- **Accessibility & touch**: keep tap targets generous, respect `safe-area-inset-bottom`,
  keep `aria-label`s on icon-only controls (see `Stepper`).
- **Don't touch the engine or storage for visual work.** The engine is pure and covered by
  tests; `src/lib/storage.ts` is the only module allowed to read/write localStorage.

## Conventions

- TypeScript strict; React 19; React Router v7 with **HashRouter** (static-host/offline safe).
- Keep the engine deterministic and UI-free; add engine behavior via tests in
  [src/engine/engine.test.ts](src/engine/engine.test.ts).
- After editing seed data, run `npm run validate:data`. After engine changes, run `npm test`.
