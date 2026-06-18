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
              UNIFIED VOYAGE RECORD SYSTEM
            </span>
          </div>
          <h1 className="text-balance text-4xl font-extrabold leading-[1.05] tracking-tight md:text-5xl lg:text-6xl">
            End voyage disputes with{" "}
            <span className="text-teal">single, trusted record.</span>
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
  const channels = ["Email", "WhatsApp", "Calls", "Teams"];
  const partners = [
    "Shipowner / Operator",
    "Port Agent",
    "Ship Master",
    "Shipbroker",
  ];
  const documents = ["Fixture Note", "Charterparty", "SOFs", "NORs"];

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
          See accurate operational updates as they happen, not days later through a forwarded email thread. Get notified on WhatsApp.
        </p>
      </div>

      {/* Scattered inputs */}
      <div className="mt-16 grid gap-10 md:grid-cols-3 md:gap-12">
        {/* Channels */}
        <div className="flex flex-col gap-4">
          <p className="text-center font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-navy/40">
            Channels
          </p>
          <div className="flex flex-wrap justify-center gap-2 md:flex-col md:items-stretch">
          {channels.map((c) => (
              <div
                key={c}
                className="flex items-center rounded-xl border border-navy/10 bg-white px-4 py-3 shadow-sm transition-transform hover:-translate-y-0.5"
              >
                <span className="text-sm font-semibold text-navy">{c}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Partners */}
        <div className="flex flex-col gap-4">
          <p className="text-center font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-navy/40">
            Partners
          </p>
          <div className="flex flex-wrap justify-center gap-2 md:flex-col md:items-stretch">
            {partners.map((p) => (
              <div
                key={p}
                className="flex items-center rounded-xl border border-navy/10 bg-white px-4 py-3 shadow-sm transition-transform hover:-translate-y-0.5"
              >
                <span className="text-sm font-semibold text-navy">{p}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Documents */}
        <div className="flex flex-col gap-4">
          <p className="text-center font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-navy/40">
            Documents
          </p>
          <div className="flex flex-wrap justify-center gap-2 md:flex-col md:items-stretch">
            {documents.map((d) => (
              <div
                key={d}
                className="flex items-center rounded-xl border border-navy/10 bg-white px-4 py-3 shadow-sm transition-transform hover:-translate-y-0.5"
              >
                <span className="text-sm font-semibold text-navy">{d}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Convergence */}
      <div className="relative my-14 flex flex-col items-center">
        <div className="absolute inset-x-0 top-1/2 -z-10 -translate-y-1/2">
          <div className="mx-auto h-px w-40 bg-gradient-to-r from-transparent via-teal/30 to-transparent md:w-64" />
        </div>
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-teal text-cloud shadow-xl shadow-teal/25 ring-4 ring-teal/10">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
            <path d="M12 5v14m0 0l-5-5m5 5l5-5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <p className="mt-4 font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-teal">
          TURNED INTO A SINGLE SOURCE OF TRUTH
        </p>
      </div>

      {/* Solution */}
      <div className="flex justify-center">
        <div className="relative w-full max-w-3xl overflow-hidden rounded-2xl bg-navy p-8 text-center text-cloud md:p-14">
          {/* ambient glow */}
          <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-teal/10 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-signal/10 blur-3xl" />

          <div className="relative">
            <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-teal">
              Portcall
            </p>
            <p className="mt-5 text-2xl font-bold tracking-tight md:text-4xl">
              One shared voyage execution workspace.
            </p>
            <p className="mx-auto mt-4 max-w-lg text-pretty text-base text-cloud/60">
              Communicate with operators in context; against the voyage, against the event, against the record.
            </p>

            {/* No-brainer value props */}
            <div className="mt-10 grid gap-6 border-t border-white/10 pt-10 sm:grid-cols-3">
              {[
                ["Single source of truth", "One timeline. Zero conflicting versions."],
                ["Built-in accountability", "Every action timestamped and attributed."],
                ["Shared by design", "All parties see the same record, instantly."],
              ].map(([title, desc]) => (
                <div key={title} className="text-center">
                  <div className="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-teal/15">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="text-teal">
                      <path d="M3 8l3.5 3.5L13 4" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <p className="text-sm font-semibold text-cloud">{title}</p>
                  <p className="mt-1.5 text-xs leading-relaxed text-cloud/50">{desc}</p>
                </div>
              ))}
            </div>
          </div>
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
    headline: "Delight your customers.",
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
      "Access shared voyage timelines through your operating partners. Understand what happened, when it happened, and why, without another inbox to manage.",
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
      "Maintain stronger alignment between commercial parties through a shared execution workflow. Your insight empowers the fixture.",
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
              {active === "operator" ? (
                <Link
                  to="/pricing"
                  className="rounded-lg border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-cloud hover:bg-white/10"
                >
                  View pricing
                </Link>
              ) : null}
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
    { kicker: "Architecture", value: "MCP & API-first platform" },
    { kicker: "Integrations", value: "Maritime systems ready" },
  ];
  return (
    <section className="border-y border-navy/5 bg-white px-6 py-14">
      <div className="mx-auto grid max-w-7xl place-items-center gap-8 text-center md:grid-cols-3">
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
