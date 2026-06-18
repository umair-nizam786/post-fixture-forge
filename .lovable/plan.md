# Portcall Marketing Site

Building the v3 "Split-canvas narrative" direction — best fit for "mission control" feel: navy narrative left, white product workspace right, persona switcher promoted to primary nav.

## Pages & Routes

- `/` — Home (hero, problem-collapse, product, persona switcher, pricing, trust, final CTA)
- `/pricing` — Pricing detail (voyage-based pricing, free 5-event trial form, Calendly link)
- `/operators`, `/charterers`, `/brokers` — Persona deep-dives with tailored value props and CTAs
- `/request-access` — Form (name, company, email, phone, company type) → confirmation with "Schedule a call"

All routes get per-page `head()` titles, descriptions, OG tags.

## Brand Tokens (locked)

In `src/styles.css`:
- `--navy: #071A2B`, `--slate: #172B3A`, `--cloud: #F8FAFC`, `--signal: #2563EB`, `--teal: #14B8A6`
- Fonts: Inter (sans) + IBM Plex Mono via `<link>` in `__root.tsx`
- Mono used for voyage IDs, timestamps, status chips

## Components

- `Logo` — voyage-timeline mark (line through circular nodes) + PORTCALL wordmark
- `Nav` — sticky, blurred, with inline persona switcher (Operator/Charterer/Broker)
- `Hero` — split-canvas: navy narrative left, white workspace mock right (animated timeline + mono event log)
- `ProblemCollapse` — Email/WhatsApp/Calls/PDFs/Excel chips converging into one voyage timeline
- `FeatureGrid` — Voyage Workspace, Timeline Intelligence, Charterer Collaboration, AI Intelligence, Claims Readiness
- `PersonaTabs` — interactive switcher swaps headline, bullets, pricing line, CTA in place
- `Pricing` — two cards: Pay-per-voyage ($479) + Try-free (5 events)
- `TrialFormModal` — collects name/company/email/phone/company-type → confirmation + Calendly link
- `TrustRow` — Enterprise security, API-first, Maritime integrations, Global scalability
- `FinalCTA` + `Footer`

Persona state lives in URL search params so messaging persists across navigation.

## Copy Guardrails

- Use the brief's exact persona messaging — no "eliminate disputes", no "instant activation", no "unlimited free trial"
- Voyage IDs and timestamps in IBM Plex Mono
- CTAs: "Request early access", "See how it works", "Explore a demo voyage", "Try for free", "Request pricing", "Schedule a call"

## Tech Notes

- TanStack Start file-based routes under `src/routes/`
- No backend yet — trial form posts to a placeholder server function logging the submission; we can wire Lovable Cloud + email later if you want
- Motion: subtle CSS keyframes (fade-up, timeline draw, pulsing nodes) — no heavy libs needed
- SEO: unique title/description per route, single H1, semantic sections

## Out of Scope (this pass)

- Real Calendly account (link is a placeholder you can swap)
- Live product demo / dashboard auth
- CMS — copy lives in React components for now; easy to lift into Cloud later
