# Portcall — Design System

A reference for the visual language used across the Portcall marketing site.

## Aesthetic Direction

**Split-canvas narrative** — a "mission control" feel for maritime voyage coordination. Navy narrative surfaces paired with a light operational workspace. Precise, technical, calm. Anti-generic: no purple gradients, no rounded SaaS softness.

- Tone: editorial + operational. Confident, restrained, slightly industrial.
- Density: generous whitespace in narrative areas; controlled density in product/log surfaces.
- Motion: subtle — fade-up on entrance, line-draw for timelines, soft pulse for active nodes.

## Color Palette

Brand tokens defined in `src/styles.css` under `@theme`. Use via Tailwind utilities: `bg-navy`, `text-cloud`, `ring-signal`, etc.

| Token | Hex | Role |
| --- | --- | --- |
| `--color-navy` | `#071A2B` | Primary surface for narrative panels, nav CTA, footer. Deep maritime navy. |
| `--color-slate` | `#172B3A` | Secondary dark — hover states, layered navy surfaces. |
| `--color-cloud` | `#F8FAFC` | App background, text on navy. Cool near-white. |
| `--color-signal` | `#2563EB` | Primary action accent, links, key data points. |
| `--color-teal` | `#14B8A6` | Secondary accent — status chips, success/active states. |

Opacity conventions: `navy/5` for hairlines and chip backgrounds, `navy/10` for dividers, `navy/60–70` for secondary text on light, `cloud/70` for secondary text on navy.

Semantic shadcn tokens (`--background`, `--foreground`, `--primary`, `--muted`, etc.) are kept for component primitives, but brand surfaces use the Portcall tokens directly.

## Typography

Loaded via `<link>` in `src/routes/__root.tsx` (Google Fonts).

- **Sans / UI / Body** — `Inter` (300, 400, 500, 600, 700, 800). Default `font-sans`.
- **Mono / Data** — `IBM Plex Mono` (400, 500, 600). Applied via `font-mono` for voyage IDs, timestamps, event log entries, status chips, and any technical data.

Type scale (Tailwind):
- Display / Hero: `text-5xl` → `text-7xl`, `font-bold`, tight tracking
- Section heading: `text-3xl` → `text-4xl`, `font-semibold`
- Eyebrow: `text-xs uppercase tracking-widest font-semibold`
- Body: `text-sm` / `text-base`
- Data / mono chips: `text-xs font-mono`

Never serif. Never substitute Poppins or system defaults.

## Layout & Spacing

- Container: `max-w-7xl mx-auto px-6`
- Section vertical rhythm: `py-20` to `py-28`
- Common grid splits: `lg:grid-cols-2` for split-canvas, `lg:grid-cols-3` for feature grids
- Radii: `rounded-full` for pills/CTAs, `rounded-2xl` for cards, `rounded-md` for inputs
- Borders: 1px hairlines using `border-navy/5` or `border-navy/10`

## Components

- **Logo** — voyage-timeline mark: a horizontal line through circular nodes + `PORTCALL` wordmark
- **Nav** — sticky, blurred (`bg-cloud/85 backdrop-blur-md`), inline persona switcher pill, navy CTA pill on the right
- **Hero** — split-canvas: navy narrative on the left, light workspace mock on the right with animated timeline + mono event log
- **PersonaTabs** — pill switcher that swaps headline, bullets, pricing line, and CTA in place
- **Pricing cards** — pay-per-voyage and free operational-contributor access
- **TrustRow** — quiet row of capability statements with subtle dividers
- **Footer** — navy surface, columned link groups (Product, Company including Pricing, Legal)
- **Status chips** — mono, small, with colored dot (`bg-teal`, `bg-signal`) and uppercase label

## Motion

Keyframes defined in `src/styles.css`. Use sparingly.

- `.pc-fade-up` — 0.7s ease-out fade + 12px rise. Hero and section reveals.
- `.pc-draw-line` — 1.1s left-origin scaleX. Timeline stroke in the hero.
- `.pc-pulse-soft` — 2.2s opacity loop. Active/current voyage node.

## Iconography & Imagery

- Icons: `lucide-react`, stroke 1.5–2, sized `size-4` / `size-5`. Never filled or duotone.
- No stock photography. Product surfaces are diagrammatic: timelines, event logs, mono data rows.

## Voice in UI

- Voyage IDs and timestamps always in mono.
- Status labels uppercase, short (`AT BERTH`, `EOSP`, `NOR TENDERED`).
- CTAs: "Request early access", "See how it works", "Explore a demo voyage", "Try for free", "Request pricing", "Schedule a call".

## Forbidden

- Purple/indigo gradients on white (generic AI aesthetic).
- Default fonts beyond Inter; never Poppins, never system serif.
- Hardcoded color hex values in components — always go through Tailwind tokens.
- Em-dashes in browser tab titles (use `-` or `|`).
- Filled lucide icons, duotone illustrations, stock photos.
