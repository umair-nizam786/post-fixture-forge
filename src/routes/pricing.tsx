import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout } from "@/components/portcall/Layout";
import { useState } from "react";

export const Route = createFileRoute("/pricing")({
  head: () => ({
    meta: [
      { title: "Pricing - Portcall" },
      {
        name: "description",
        content:
          "Simple voyage-based pricing. From $479 per voyage for operators. Free for charterers and brokers.",
      },
      { property: "og:title", content: "Portcall pricing" },
      {
        property: "og:description",
        content: "Voyage-based pricing that scales with your operations.",
      },
      { property: "og:url", content: "/pricing" },
    ],
    links: [{ rel: "canonical", href: "/pricing" }],
  }),
  component: PricingPage,
});

function PricingPage() {
  return (
    <Layout>
      <section className="bg-navy px-6 py-24 text-cloud">
        <div className="mx-auto max-w-4xl text-center">
          <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-teal">
            Pricing
          </p>
          <h1 className="mt-3 text-balance text-4xl font-extrabold tracking-tight md:text-5xl">
            Pricing that scales with your operations.
          </h1>
          <p className="mt-5 text-pretty text-lg text-cloud/70">
            Portcall is priced around voyage execution, not seats. Charterers
            and brokers collaborate at no cost.
          </p>
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-2">
          <article className="relative rounded-2xl border-2 border-navy bg-white p-10">
            <span className="absolute -top-3 left-8 rounded-full bg-navy px-3 py-1 font-mono text-[10px] font-bold uppercase tracking-wider text-cloud">
              Pay per voyage
            </span>
            <div className="flex items-baseline gap-1.5">
              <span className="text-5xl font-extrabold tracking-tight">$479</span>
              <span className="font-mono text-[11px] uppercase tracking-wider text-navy/40">
                / voyage
              </span>
            </div>
            <p className="mt-2 text-sm text-navy/60">
              For shipowners and operators executing voyages on the platform.
            </p>
            <ul className="mt-8 space-y-3 text-sm">
              {[
                "Voyage workspace",
                "Charterer & broker collaboration",
                "Timeline tracking",
                "Document management",
                "AI-powered analytics",
                "Claims-ready records",
                "Unlimited collaborator seats",
              ].map((b) => (
                <li key={b} className="flex items-center gap-3 whitespace-pre-line">
                  <span className="size-1.5 rounded-full bg-teal" />
                  {b}
                </li>
              ))}
            </ul>

            <MoreFeatures />

            <a
              href="https://buy.stripe.com/00wcN4gTr3Dt4Co6YE5Vu00"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-10 block rounded-xl bg-navy py-3.5 text-center text-sm font-semibold text-cloud hover:bg-slate"
            >
              Launch your voyage
            </a>
          </article>

          <article className="rounded-2xl border border-navy/10 bg-cloud p-10">
            <span className="rounded bg-teal/10 px-2 py-0.5 font-mono text-[10px] font-bold uppercase tracking-wider text-teal">
              TRY THE PLATFORM
            </span>
            <div className="mt-4 flex items-baseline gap-1.5">
              <span className="text-5xl font-extrabold tracking-tight">Free</span>
              <span className="font-mono text-[11px] uppercase tracking-wider text-navy/40">
                / FIRST 5 VOYAGES
              </span>
            </div>
            <p className="mt-2 text-sm text-navy/60">
              Experience your first voyage workflow before committing.
            </p>
            <ul className="mt-8 space-y-3 text-sm text-navy/80">
              {[
                "Timeline preview",
                "Basic event logging",
                "Single voyage workspace",
                "Charterer invite link",
              ].map((b) => (
                <li key={b} className="flex items-center gap-3">
                  <span className="size-1.5 rounded-full bg-navy/30" />
                  {b}
                </li>
              ))}
            </ul>
            <Link
              to="/request-access"
              className="mt-10 block rounded-xl border border-navy/20 bg-white py-3.5 text-center text-sm font-semibold text-navy hover:bg-navy/[0.04]"
            >
              Try for free
            </Link>
          </article>
        </div>

        {/* Persona pricing table */}
        <div className="mx-auto mt-20 max-w-5xl rounded-2xl border border-navy/10 bg-white">
          <div className="border-b border-navy/10 px-8 py-6">
            <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.25em] text-navy/40">
              {"\n"}
            </p>
            <h2 className="mt-2 text-xl font-bold tracking-tight">
              Pricing by role
            </h2>
          </div>
          <PricingRow
            role="Shipowner / Operator"
            note="The executor. Pay per voyage executed through the platform."
            price="From $479 / voyage"
          />
          <PricingRow
            role="Charterer"
            note="The beneficiary. Free access through participating operators."
            price="$0"
            accent
          />
          <PricingRow
            role="Shipbroker"
            note="The facilitator. Collaboration access to voyage workspaces."
            price="$0"
            accent
          />
          <PricingRow
            role="Agent"
            note="The local expert. Free access as an operational contributor."
            price="$0"
            accent
            last
          />
        </div>
      </section>
    </Layout>
  );
}

function MoreFeatures() {
  const [open, setOpen] = useState(false);
  const items = [
    "AIS based voyage tracking from vessel start port",
    "Automated, dynamic laytime calculations",
    "Email Integration for auto populating voyage events",
  ];

  return (
    <div className="mt-4">
      {!open && (
        <button
          onClick={() => setOpen(true)}
          className="flex items-center gap-2 text-sm font-medium text-navy/60 hover:text-navy transition-colors"
        >
          <span className="size-1.5 rounded-full bg-navy/30" />
          More
        </button>
      )}
      {open && (
        <ul className="space-y-3 text-sm animate-in fade-in slide-in-from-top-1 duration-200">
          {items.map((item) => (
            <li key={item} className="flex items-center gap-3">
              <span className="size-1.5 rounded-full bg-teal" />
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

function PricingRow({
  role,
  note,
  price,
  accent,
  last,
}: {
  role: string;
  note: string;
  price: string;
  accent?: boolean;
  last?: boolean;
}) {
  return (
    <div
      className={`grid grid-cols-1 gap-3 px-8 py-6 md:grid-cols-[1.2fr_2fr_1fr] md:items-center ${
        last ? "" : "border-b border-navy/10"
      }`}
    >
      <div className="font-semibold">{role}</div>
      <div className="text-sm text-navy/60">{note}</div>
      <div
        className={`font-mono text-sm font-semibold uppercase tracking-wider md:text-right ${
          accent ? "text-teal" : "text-navy"
        }`}
      >
        {price}
      </div>
    </div>
  );
}