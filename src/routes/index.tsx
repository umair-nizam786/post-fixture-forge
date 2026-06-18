import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Layout } from "@/components/portcall/Layout";
import { VoyageWorkspace } from "@/components/portcall/VoyageWorkspace";
import { ComingSoonDialog } from "@/components/portcall/ComingSoonDialog";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Portcall — The collaboration system for maritime fixture execution" },
      {
        name: "description",
        content:
          "Connect every voyage, customer, and operational event in one shared workspace. The voyage timeline becomes the trusted source of truth for what actually happened.",
      },
      { property: "og:title", content: "Portcall — Mission control for maritime execution" },
      {
        property: "og:description",
        content: "One shared workspace for shipowners, charterers, and brokers.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <Layout>
      <Hero />
      <ProblemCollapse />
      <ProductGrid />
      <PersonaTabs />
      <TrustRow />
      <FinalCTA />
    </Layout>
  );
}

/* ---------- Hero ---------- */
function Hero() {
  return (
    <section className="relative flex flex-col overflow-hidden lg:flex-row">
      {/* Left – Navy narrative */}
      <div className="relative z-10 flex flex-1 flex-col justify-center bg-navy px-8 py-24 text-cloud lg:px-16 lg:py-32">
        <div className="pc-fade-up max-w-xl">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1">
            <span className="size-1.5 rounded-full bg-teal pc-pulse-soft" />
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-cloud/70">
              Post-Fixture Execution Layer
            </span>
          </div>
          <h1 className="text-balance text-4xl font-extrabold leading-[1.05] tracking-tight md:text-5xl lg:text-6xl">
            Mission control for{" "}
            <span className="text-teal">post-fixture</span> maritime execution.
          </h1>
          <p className="mt-8 max-w-md text-pretty text-lg text-cloud/70 whitespace-pre-line">
            Connect every voyage, counterparties, and operational events in one shared workspace.{"\u00a0"}{"\n"}
            Stop chasing threads, start executing on evidence.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <Link
              to="/request-access"
              className="group inline-flex items-center gap-2 rounded-lg bg-signal px-5 py-3.5 text-sm font-semibold text-cloud transition-colors hover:bg-signal/90"
            >
              TRY THE PLATFORM
              <span className="transition-transform group-hover:translate-x-0.5">→</span>
            </Link>
            <ComingSoonDialog>
              <button className="rounded-lg border border-white/15 bg-white/5 px-5 py-3.5 text-sm font-semibold text-cloud backdrop-blur-sm transition-colors hover:bg-white/10">
                See how it works
              </button>
            </ComingSoonDialog>
          </div>

          <dl className="mt-14 grid max-w-md grid-cols-3 gap-6 border-t border-white/10 pt-8">
            {[
              ["Voyage workspaces", "One per fixture"],
              ["Event types", "120+ tracked"],
              ["Parties connected", "SHIPOWNER ·OPERATOR CHARTERER · BROKER"],
            ].map(([v, l]) => (
              <div key={l}>
                <dt className="font-mono text-[10px] uppercase tracking-wider text-cloud/40">
                  {l}
                </dt>
                <dd className="mt-1 text-sm font-semibold text-cloud">{v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>

      {/* Right – product */}
      <div className="relative flex flex-col justify-center bg-cloud px-8 py-20 lg:w-[54%] lg:px-12 lg:py-32">
        <div
          className="pc-fade-up"
          style={{ animationDelay: "180ms" }}
        >
          <VoyageWorkspace />
          <p className="mt-6 max-w-md font-mono text-[10px] uppercase tracking-[0.2em] text-navy/40 whitespace-pre-line">
            LIVE VOYAGE WORKSPACE{"\n"}SHARED BETWEEN OWNER, CHARTERER, AND BROKER
          </p>
        </div>
      </div>
    </section>
  );
}

/* ---------- Problem Collapse ---------- */
function ProblemCollapse() {
  const channels = [
    { label: "Email", icon: "M" },
    { label: "WhatsApp", icon: "W" },
    { label: "Calls", icon: "C" },
    { label: "Teams", icon: "T" },
  ];
  const partners = [
    { label: "Shipowner / Operator", icon: "S" },
    { label: "Port Agent", icon: "P" },
    { label: "Master", icon: "M" },
    { label: "Shipbroker", icon: "B" },
  ];

  return (
    <section className="mx-auto max-w-7xl px-6 py-28">
      <div className="flex flex-col items-center text-center">
        <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.25em] text-navy/40">
          The fragmentation gap
        </span>
        <h2 className="mt-4 max-w-2xl text-balance text-3xl font-bold tracking-tight text-navy md:text-4xl">
          After the fixture, execution scatters across channels and partners.
        </h2>
        <p className="mt-4 max-w-xl text-pretty text-navy/60">
          Information fragments. Accountability blurs. Disputes find space to grow.
        </p>
      </div>

      <div className="mt-16 grid gap-8 lg:grid-cols-3 lg:items-start">
        {/* Channels */}
        <div className="flex flex-col gap-4">
          <p className="text-center font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-navy/40">
            Channels
          </p>
          <div className="flex flex-col gap-3">
            {channels.map((c) => (
              <div
                key={c.label}
                className="flex items-center gap-4 rounded-xl border border-navy/10 bg-white p-4 shadow-sm"
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-navy/5 font-mono text-sm font-bold text-navy/70">
                  {c.icon}
                </span>
                <span className="text-sm font-semibold text-navy">{c.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Center connector */}
        <div className="relative flex flex-col items-center justify-center gap-4 py-4 lg:py-12">
          {/* Desktop connecting lines */}
          <div className="hidden lg:block">
            <svg width="200" height="200" viewBox="0 0 200 200" className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-4 overflow-visible">
              {/* Left lines from channels */}
              <path d="M -40 30 Q 60 30 60 100" stroke="#e2e8f0" strokeWidth="1.5" fill="none" />
              <path d="M -40 55 Q 60 55 60 100" stroke="#e2e8f0" strokeWidth="1.5" fill="none" />
              <path d="M -40 80 Q 60 80 60 100" stroke="#e2e8f0" strokeWidth="1.5" fill="none" />
              <path d="M -40 105 Q 60 105 60 100" stroke="#e2e8f0" strokeWidth="1.5" fill="none" />
              {/* Right lines from partners */}
              <path d="M 240 45 Q 140 45 140 100" stroke="#e2e8f0" strokeWidth="1.5" fill="none" />
              <path d="M 240 75 Q 140 75 140 100" stroke="#e2e8f0" strokeWidth="1.5" fill="none" />
              <path d="M 240 105 Q 140 105 140 100" stroke="#e2e8f0" strokeWidth="1.5" fill="none" />
            </svg>
          </div>

          {/* Down arrow indicator */}
          <div className="flex flex-col items-center gap-2">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-teal/10">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="text-teal">
                <path d="M10 4v12m0 0l-4-4m4 4l4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <span className="font-mono text-[9px] uppercase tracking-wider text-teal/80">
              Converge
            </span>
          </div>
        </div>

        {/* Partners */}
        <div className="flex flex-col gap-4">
          <p className="text-center font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-navy/40">
            Partners
          </p>
          <div className="flex flex-col gap-3">
            {partners.map((p) => (
              <div
                key={p.label}
                className="flex items-center gap-4 rounded-xl border border-navy/10 bg-white p-4 shadow-sm"
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-navy/5 font-mono text-sm font-bold text-navy/70">
                  {p.icon}
                </span>
                <span className="text-sm font-semibold text-navy">{p.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Solution */}
      <div className="mt-12 flex justify-center">
        <div className="w-full max-w-2xl rounded-2xl bg-navy p-8 text-center text-cloud ring-8 ring-teal/10">
          <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-teal">
            Portcall
          </p>
          <p className="mt-3 text-2xl font-bold tracking-tight">
            One shared voyage execution workspace.
          </p>
          <p className="mt-2 text-sm text-cloud/60">
            Every event, timestamped and visible to every party.
          </p>
        </div>
      </div>
    </section>
  );
}

/* ---------- Product Grid ---------- */
function ProductGrid() {
  const features = [
    {
      kicker: "01",
      title: "Voyage workspace",
      body:
        "One place for every voyage. All parties, all documents, all events, recorded for a single fixture.",
      accent: "navy",
    },
    {
      kicker: "02",
      title: "Timeline intelligence",
      body:
        "Track every operational event with timestamps, source, and supporting documents. The timeline is the record.",
      accent: "signal",
    },
    {
      kicker: "03",
      title: "Charterer & broker collaboration",
      body:
        "Give customers visibility without constant follow-ups. Charterers see what they need, when they need it.",
      accent: "teal",
    },
    {
      kicker: "04",
      title: "AI-powered analytics",
      body:
        "Find useful insights from voyage level and portfolio level analytics, on your private account or WhatsApp.",
      accent: "signal",
    },
    {
      kicker: "05",
      title: "Claims-ready records",
      body:
        "Build a clearer evidence trail as the voyage unfolds. Support faster resolution when questions arise.",
      accent: "navy",
    },
    {
      kicker: "06",
      title: "Operational record",
      body:
        "A trusted, shared account of what actually happened, referenceable long after the voyage ends.",
      accent: "teal",
    },
  ];
  return (
    <section id="how-it-works" className="bg-white px-6 py-28">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.25em] text-signal">
              The product
            </span>
            <h2 className="mt-3 max-w-2xl text-balance text-3xl font-bold tracking-tight md:text-4xl">
              Built around voyages
            </h2>
          </div>
          <Link
            to="/pricing"
            className="text-sm font-semibold text-signal hover:underline"
          >
            Explore a demo voyage →
          </Link>
        </div>

        <div className="mt-14 grid gap-px overflow-hidden rounded-2xl bg-navy/10 md:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <div
              key={f.kicker}
              className="group flex flex-col gap-4 bg-white p-8 transition-colors hover:bg-cloud"
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-[11px] font-semibold uppercase tracking-wider text-navy/40">
                  {f.kicker}
                </span>
                <span
                  className={`size-1.5 rounded-full ${
                    f.accent === "signal"
                      ? "bg-signal"
                      : f.accent === "teal"
                      ? "bg-teal"
                      : "bg-navy"
                  }`}
                />
              </div>
              <h3 className="text-lg font-bold tracking-tight text-navy whitespace-pre-line">{f.title}</h3>
              <p className="text-sm leading-relaxed text-navy/60">{f.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Persona Tabs ---------- */
type PersonaKey = "operator" | "charterer" | "broker";

const personaContent: Record<
  PersonaKey,
  {
    kicker: string;
    headline: string;
    body: string;
    bullets: string[];
    pricing: string;
    cta: { label: string; to: string };
  }
> = {
  operator: {
    kicker: "Shipowner / Operator",
    headline: "Delight your customer experience.",
    body:
      "Deliver a transparent execution experience for every charterer. Reduce manual follow-ups and maintain a reliable record of voyage events.",
    bullets: [
      "Structured voyage visibility for your charterers",
      "Automated event summaries from operational data",
      "Claims-ready records",
    ],
    pricing: "Simple voyage-based pricing. From $479 per voyage.",
    cta: { label: "Improve voyage execution", to: "/operators" },
  },
  charterer: {
    kicker: "Charterer",
    headline: "Stay aligned without chasing updates.",
    body:
      "Access shared voyage timelines through your operating partners. Understand what happened, when it happened, and why — without another inbox to manage.",
    bullets: [
      "Real-time voyage visibility from the operator",
      "Shared timeline of events and milestones",
      "Clearer operational communication, fewer follow-ups",
    ],
    pricing: "Free for charterers. Access through your operating partners.",
    cta: { label: "Preview the voyage experience", to: "/charterers" },
  },
  broker: {
    kicker: "Shipbroker",
    headline: "Stay connected throughout execution.",
    body:
      "Maintain stronger alignment between commercial parties through a shared execution workflow. Visibility doesn't end at the fixture.",
    bullets: [
      "Post-fixture visibility for both counterparties",
      "Better communication during execution",
      "Easier understanding of voyage progress",
    ],
    pricing: "Collaboration access at no cost to brokers.",
    cta: { label: "See the workflow", to: "/brokers" },
  },
};

function PersonaTabs() {
  const [active, setActive] = useState<PersonaKey>("operator");
  const p = personaContent[active];
  const tabs: { key: PersonaKey; label: string }[] = [
    { key: "operator", label: "Operator" },
    { key: "charterer", label: "Charterer" },
    { key: "broker", label: "Broker" },
  ];
  return (
    <section className="bg-navy px-6 py-28 text-cloud">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col items-start gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.25em] text-teal">
              Built for the ecosystem
            </span>
            <h2 className="mt-3 max-w-2xl text-balance text-3xl font-bold tracking-tight md:text-4xl">
              Different role. Same voyage. Same record of truth.
            </h2>
          </div>
          <div className="flex gap-1 rounded-full border border-white/10 bg-white/5 p-1">
            {tabs.map((t) => (
              <button
                key={t.key}
                onClick={() => setActive(t.key)}
                className={`rounded-full px-4 py-1.5 text-xs font-semibold transition-colors ${
                  active === t.key
                    ? "bg-cloud text-navy"
                    : "text-cloud/60 hover:text-cloud"
                }`}
              >
                {t.label}
              </button>
            ))}
          </div>
        </div>

        <div key={active} className="pc-fade-up mt-12 grid gap-12 lg:grid-cols-2">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-cloud/40">
              {p.kicker}
            </p>
            <h3 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
              {p.headline}
            </h3>
            <p className="mt-5 max-w-lg text-cloud/70">{p.body}</p>
            <ul className="mt-8 space-y-3">
              {p.bullets.map((b) => (
                <li key={b} className="flex items-start gap-3 text-sm text-cloud/85 whitespace-pre-line">
                  <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-teal" />
                  {b}
                </li>
              ))}
            </ul>
            <div className="mt-10 flex flex-wrap gap-3">
              <Link
                to={p.cta.to}
                className="rounded-lg bg-signal px-5 py-3 text-sm font-semibold text-cloud transition-colors hover:bg-signal/90"
              >
                {p.cta.label}
              </Link>
              <Link
                to="/pricing"
                className="rounded-lg border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-cloud hover:bg-white/10"
              >
                View pricing
              </Link>
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-slate/60 p-8">
            <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-cloud/40">
              Commercial
            </p>
            <p className="mt-3 text-xl font-semibold text-cloud">{p.pricing}</p>

            <div className="mt-8 space-y-3 border-t border-white/10 pt-6">
              <Row label="Voyage workspace" value="Included" />
              <Row label="Timeline intelligence" value="Included" />
              <Row label="AI insights" value="Included" />
              <Row label={<span>Claims-ready records</span>} value="Included" />
              <Row
                label="Collaborator seats"
                value="Unlimited"
                accent
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Row({
  label,
  value,
  accent,
}: {
  label: React.ReactNode;
  value: string;
  accent?: boolean;
}) {
  return (
    <div className="flex items-center justify-between text-sm">
      <span className="text-cloud/60 flex flex-col">{label}</span>
      <span
        className={`font-mono text-[11px] uppercase tracking-wider ${
          accent ? "text-teal" : "text-cloud"
        }`}
      >
        {value}
      </span>
    </div>
  );
}


/* ---------- Trust Row ---------- */
function TrustRow() {
  const items = [
    { kicker: "Security", value: "Enterprise-grade encryption" },
    { kicker: "Architecture", value: "API-first platform" },
    { kicker: "Integrations", value: "Maritime systems ready" },
    { kicker: "Reach", value: "Global scalability" },
  ];
  return (
    <section className="border-y border-navy/5 bg-white px-6 py-14">
      <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-4">
        {items.map((i) => (
          <div key={i.kicker}>
            <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-navy/40">
              {i.kicker}
            </p>
            <p className="mt-2 text-sm font-semibold text-navy">{i.value}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ---------- Final CTA ---------- */
function FinalCTA() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24">
      <div className="relative overflow-hidden rounded-3xl bg-navy px-8 py-20 text-center text-cloud lg:px-16">
        <div className="pointer-events-none absolute inset-x-0 top-0 mx-auto h-px max-w-md bg-gradient-to-r from-transparent via-teal to-transparent" />
        <h2 className="text-balance text-3xl font-bold tracking-tight md:text-5xl">
          Experience seamless voyage execution.
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-cloud/60">
          Become a design partner. Help shape the operating system for global
          trade execution.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link
            to="/request-access"
            className="rounded-xl bg-signal px-7 py-4 text-sm font-semibold text-cloud transition-transform hover:scale-[1.02]"
          >
            TRY THE PLATFORM
          </Link>
          <Link
            to="/request-access"
            className="rounded-xl border border-white/15 bg-white/5 px-7 py-4 text-sm font-semibold text-cloud backdrop-blur-sm hover:bg-white/10"
          >
            Schedule a demo
          </Link>
        </div>
      </div>
    </section>
  );
}
