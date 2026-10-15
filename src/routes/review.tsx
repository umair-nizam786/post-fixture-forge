import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowRight, Check, CheckCheck, Clock3, FileText, LockKeyhole, Mail, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/portcall/Layout";
import { CommercialReviewEvidence } from "@/components/portcall/CommercialReviewEvidence";

const BOOKING_URL = "https://calendly.com/umair-portcall/30min";
const description = "Turn your last 12 months of voyage correspondence into a clear commercial record. Evidence-linked findings, a specialist-checked management review, and one voyage reviewed free.";

export const Route = createFileRoute("/review")({
  head: () => ({
    meta: [
      { title: "Voyage Commercial Review - Portcall" },
      { name: "description", content: description },
      { name: "robots", content: "noindex, nofollow" },
      { property: "og:title", content: "Voyage Commercial Review - Portcall" },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: CommercialReviewPage,
});

function ReviewCTA() {
  return (
    <Button
      asChild
      size="lg"
      className="h-auto min-h-12 whitespace-normal rounded-full bg-navy px-7 py-3 text-sm font-semibold text-cloud shadow-[0_12px_30px_-12px_rgba(7,26,43,0.45)] backdrop-blur transition-all hover:-translate-y-0.5 hover:bg-slate hover:shadow-[0_18px_36px_-14px_rgba(7,26,43,0.5)]"
    >
      <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer">
        Review one voyage free <ArrowRight />
      </a>
    </Button>
  );
}

function Lume() {
  return <span className="pc-lume mt-1.5 size-1.5 shrink-0 rounded-full bg-teal" aria-hidden="true" />;
}

function CommercialReviewPage() {
  return (
    <Layout>
      {/* Hero — gallery white, ghost correspondence pattern */}
      <section className="relative overflow-hidden bg-white px-6 pb-16 pt-16 md:pt-24">
        <div className="pc-ghost-mail pointer-events-none absolute inset-x-0 top-0 h-72" aria-hidden="true" />
        <div className="relative mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-navy/45">Portcall / Voyage Commercial Review</p>
            <h1 className="mt-6 text-balance font-display text-4xl font-semibold leading-[1.08] tracking-tight text-navy sm:text-5xl lg:text-6xl">
              Every voyage, with <span className="text-teal">the whole story behind it.</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-pretty text-base leading-relaxed text-navy/60 md:text-lg">
              For the first time, every email on every voyage can be read and understood. Portcall turns your last 12 months of correspondence into one clear record: what was agreed, what was argued, what is still owed, and the email that proves each one.
            </p>
            <div className="mt-8"><ReviewCTA /></div>
            <p className="mt-3 text-xs leading-relaxed text-navy/45">Pick a voyage still being argued. Back within a week, no contract.</p>
          </div>
          <div className="mt-12 md:mt-14">
            <div className="rounded-xl bg-white p-1.5 shadow-[0_30px_70px_-30px_rgba(7,26,43,0.25)] ring-1 ring-navy/10">
              <CommercialReviewEvidence />
            </div>
          </div>
          <p className="mt-4 text-center font-mono text-[10px] uppercase tracking-wider text-navy/40">A finding. The source email. The line that matters.</p>
        </div>
      </section>

      {/* Chaos vs record */}
      <section className="border-t border-navy/5 bg-cloud px-6 py-16 md:py-24">
        <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-2 md:gap-12">
          <div className="pc-card-lift rounded-xl border border-navy/10 bg-white p-8 md:p-10">
            <Eyebrow>What tracking cannot tell you</Eyebrow>
            <h2 className="mt-4 font-display text-3xl font-semibold leading-tight tracking-tight text-navy md:text-4xl">You know the amounts.<br />The reasons are harder to find.</h2>
            <p className="mt-5 text-base leading-relaxed text-navy/60">The reasons sit in thousands of emails, and in the heads of the people who handled each voyage. When a charterer pushes back, someone spends days rebuilding what happened.</p>
          </div>
          <div className="pc-card-lift rounded-xl border border-teal/25 bg-white p-8 md:mt-8 md:p-10">
            <div className="flex items-center gap-2.5">
              <Lume />
              <Eyebrow>What is possible now</Eyebrow>
            </div>
            <h3 className="mt-4 font-display text-2xl font-semibold leading-tight tracking-tight text-navy md:text-3xl">Any voyage from last year.<br />Fully explained.</h3>
            <p className="mt-5 text-base leading-relaxed text-navy/60">Every event in order. Every position each side took. Every concession, and the email behind it. Not just one voyage at a time, but across all 100.</p>
            <p className="mt-5 text-sm font-medium text-navy">Backload the voyages. Bring the record forward.</p>
          </div>
        </div>
      </section>

      {/* Findings */}
      <section className="bg-white px-6 py-16 md:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-8 md:grid-cols-[1.3fr_1fr] md:items-end">
            <div>
              <Eyebrow>One review · 10 voyages · anonymized</Eyebrow>
              <h2 className="mt-4 max-w-xl font-display text-3xl font-semibold leading-tight tracking-tight text-navy md:text-4xl">Not all value is lost.<br />Some has never been raised.</h2>
            </div>
            <div className="flex items-start gap-3">
              <Lume />
              <div>
                <p className="font-mono text-4xl font-medium text-navy md:text-5xl">USD 385K</p>
                <p className="mt-2 text-sm text-navy/55">still open across the reviewed voyages.</p>
              </div>
            </div>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              ["04", "Voyages without a laytime statement", "Paperwork that had never been sent."],
              ["01", "Demurrage rate never declared", "An unresolved commercial starting point."],
              ["01", "Wrong clause conceded", "A position given away in correspondence."],
              ["↻", "The same port, days lost again", "A recurring pattern across voyages."],
            ].map(([number, title, detail]) => (
              <div key={title} className="pc-card-lift rounded-xl border border-navy/10 bg-white p-6">
                <span className="font-mono text-2xl text-teal">{number}</span>
                <h3 className="mt-4 text-sm font-semibold leading-relaxed text-navy">{title}</h3>
                <p className="mt-2 text-xs leading-relaxed text-navy/55">{detail}</p>
              </div>
            ))}
          </div>
          <p className="mt-4 text-xs leading-relaxed text-navy/45">An anonymized review, not a promise of recovery. Open amounts are not the same as recoverable amounts.</p>
        </div>
      </section>

      {/* Deliverables */}
      <section className="border-t border-navy/5 bg-cloud px-6 py-16 md:py-24">
        <div className="mx-auto max-w-6xl">
          <Eyebrow>Your review, delivered</Eyebrow>
          <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-navy md:text-4xl">The management picture.<br />The record behind every voyage.</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <div className="pc-card-lift rounded-xl border border-navy/10 bg-white p-8 md:p-10">
              <FileText className="size-6 text-navy/40" />
              <h3 className="mt-4 font-display text-xl font-semibold tracking-tight text-navy">01 / The management review</h3>
              <ul className="mt-5 space-y-4">
                {["What is open, stuck, conceded, or never raised.", "Time lost, grouped by cause and recurring pattern.", "What to change in the next fixtures."].map(text => <ReviewItem key={text}>{text}</ReviewItem>)}
              </ul>
            </div>
            <div className="pc-card-lift rounded-xl border border-navy/10 bg-white p-8 md:p-10">
              <Mail className="size-6 text-navy/40" />
              <h3 className="mt-4 font-display text-xl font-semibold tracking-tight text-navy">02 / Every voyage, on the record</h3>
              <ul className="mt-5 space-y-4">
                {["An ordered timeline of events, positions, and concessions.", "Findings linked to their supporting correspondence.", "A claims specialist checks every finding before you see it.", "1 year of access to your voyage records, unlimited if you continue."].map(text => <ReviewItem key={text}>{text}</ReviewItem>)}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Privacy & access — kept light */}
      <section className="bg-white px-6 py-16 md:py-24">
        <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-2 md:gap-12">
          <div className="pc-card-lift rounded-xl border border-navy/10 bg-white p-8 md:p-10">
            <Eyebrow>Your commercial judgment stays yours</Eyebrow>
            <h2 className="mt-4 font-display text-3xl font-semibold leading-tight tracking-tight text-navy md:text-4xl">You decide<br /><span className="text-teal">what to raise.</span></h2>
            <p className="mt-5 text-base leading-relaxed text-navy/60">Findings come only to you. Settled stays settled. Much of the value is paperwork never sent, and lessons for the next fixture.</p>
            <p className="mt-6 flex items-center gap-2.5 text-sm font-medium text-navy/80"><Lume /> Shown by voyage and process. Never by person.</p>
          </div>
          <div className="pc-card-lift rounded-xl border border-navy/10 bg-white p-8 md:p-10">
            <Eyebrow>Nothing to replace. Nothing to install.</Eyebrow>
            <ul className="mt-6 divide-y divide-navy/5">
              {[[LockKeyhole, "Your mailboxes. Read-only access.", "You choose which mailboxes are included."], [ShieldCheck, "NDA before access.", "Your data is deleted when the review ends."], [CheckCheck, "Evidence, not assumptions.", "Facts that exist only on WhatsApp are marked as gaps, not guessed."]].map(([Icon, title, detail]) => {
                const ItemIcon = Icon as typeof LockKeyhole;
                return (
                  <li key={String(title)} className="flex gap-4 py-5 first:pt-0">
                    <ItemIcon className="mt-1 size-5 shrink-0 text-teal" />
                    <div>
                      <h3 className="text-sm font-semibold text-navy">{String(title)}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-navy/55">{String(detail)}</p>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </section>

      <ReviewPricing />

      {/* Founder */}
      <section className="border-t border-navy/5 bg-cloud px-6 py-16 md:py-20">
        <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-[1fr_1.4fr] md:gap-20">
          <div>
            <Eyebrow>The person behind the review</Eyebrow>
            <h2 className="mt-4 font-display text-2xl font-semibold tracking-tight text-navy">Umair Nizam, MICS</h2>
            <p className="mt-2 text-sm text-navy/50">Founder, Portcall · Maritime technology</p>
          </div>
          <div>
            <p className="font-display text-xl font-medium leading-relaxed tracking-tight text-navy md:text-2xl">The free voyage is your reference check.</p>
            <p className="mt-4 text-base leading-relaxed text-navy/60">Start with one voyage you know well. See the record, inspect the evidence, and speak directly with Umair before deciding whether to review the rest.</p>
            <Button asChild variant="link" className="mt-4 h-auto p-0 text-navy">
              <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer">Speak with Umair <ArrowRight /></a>
            </Button>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-white px-6 py-16 md:py-24">
        <div className="mx-auto max-w-3xl rounded-2xl border border-navy/10 bg-white px-6 py-14 text-center shadow-[0_30px_70px_-35px_rgba(7,26,43,0.3)] md:px-14">
          <div className="flex items-center justify-center gap-2.5">
            <Lume />
            <Eyebrow>Start with the voyage still being argued</Eyebrow>
          </div>
          <h2 className="mt-4 text-balance font-display text-3xl font-semibold tracking-tight text-navy md:text-4xl">One voyage. The whole record.<br />Then you decide.</h2>
          <div className="mt-8"><ReviewCTA /></div>
          <p className="mt-3 text-xs text-navy/45">Back within a week. No contract.</p>
        </div>
      </section>
    </Layout>
  );
}

function Eyebrow({ children }: { children: React.ReactNode }) {
  return <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-navy/45">{children}</p>;
}

function ReviewItem({ children }: { children: React.ReactNode }) {
  return <li className="flex items-start gap-3 text-sm leading-relaxed text-navy/60"><Check className="mt-0.5 size-4 shrink-0 text-teal" /><span>{children}</span></li>;
}

function ReviewPricing() {
  const [voyages, setVoyages] = useState<50 | 100>(50);
  return (
    <section className="border-t border-navy/5 bg-cloud px-6 py-16 md:py-24">
      <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-2 md:gap-20">
        <div>
          <Eyebrow>A defined review. A clear fee.</Eyebrow>
          <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-navy md:text-4xl">Start with your<br />last 12 months.</h2>
          <p className="mt-5 max-w-md text-base leading-relaxed text-navy/60">Backload your voyages and their correspondence. Get the management review, the evidence, and 1 year of access, unlimited if you continue.</p>
          <div className="mt-7 flex items-start gap-3">
            <Clock3 className="mt-0.5 size-5 shrink-0 text-teal" />
            <p className="max-w-md text-sm leading-relaxed text-navy/60">Continue with Portcall’s ongoing service within 90 days, and your review fee is credited in full.</p>
          </div>
        </div>
        <div className="pc-card-lift rounded-xl border border-navy/10 bg-white p-6 shadow-[0_24px_60px_-30px_rgba(7,26,43,0.25)] md:p-8">
          <div className="flex w-fit gap-1 rounded-full border border-navy/10 bg-cloud/80 p-1 backdrop-blur" role="group" aria-label="Review size">
            {([50, 100] as const).map(count => (
              <Button
                key={count}
                variant="ghost"
                aria-pressed={voyages === count}
                onClick={() => setVoyages(count)}
                className={`rounded-full px-4 text-xs ${voyages === count ? "bg-navy text-cloud hover:bg-slate hover:text-cloud" : "text-navy/55"}`}
              >
                {count} voyages
              </Button>
            ))}
          </div>
          <p className="mt-7 text-xs text-navy/45">From</p>
          <p className="mt-1 font-mono text-4xl font-medium text-navy">USD {voyages === 50 ? "9,500" : "15,000"}</p>
          <p className="mt-2 text-sm text-navy/55">for {voyages} voyages</p>
          <div className="my-6 border-y border-navy/5 py-5">
            <p className="flex items-center gap-2 text-sm font-semibold text-navy"><ShieldCheck className="size-4 text-teal" /> Less than 5× the fee found? No charge.</p>
            <p className="mt-2 text-xs leading-relaxed text-navy/55">Start with one voyage free before committing to the full review.</p>
          </div>
          <ReviewCTA />
        </div>
      </div>
    </section>
  );
}
