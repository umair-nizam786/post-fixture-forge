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
    links: [{ rel: "canonical", href: "https://portcall.tech/review" }],
  }),
  component: CommercialReviewPage,
});

function ReviewCTA({ dark = false }: { dark?: boolean }) {
  return <Button asChild size="lg" className={`h-auto min-h-12 whitespace-normal rounded-md px-6 py-3 text-sm font-semibold shadow-none ${dark ? "bg-navy text-cloud hover:bg-slate" : "bg-teal text-navy hover:bg-teal/85"}`}><a href={BOOKING_URL} target="_blank" rel="noopener noreferrer">Review one voyage free <ArrowRight /></a></Button>;
}

function CommercialReviewPage() {
  return (
    <Layout>
      <section className="bg-navy px-6 pb-14 pt-14 text-cloud md:pt-20">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="font-mono text-[11px] uppercase text-teal">Portcall / Voyage Commercial Review</p>
            <h1 className="mt-5 text-balance text-4xl font-semibold leading-[1.12] sm:text-5xl lg:text-6xl">Every voyage, with <span className="text-teal">the whole story behind it.</span></h1>
            <p className="mx-auto mt-6 max-w-2xl text-pretty text-base leading-relaxed text-cloud/75 md:text-lg">For the first time, every email on every voyage can be read and understood. Portcall turns your last 12 months of correspondence into one clear record: what was agreed, what was argued, what is still owed, and the email that proves each one.</p>
            <div className="mt-7"><ReviewCTA /></div>
            <p className="mt-3 text-xs leading-relaxed text-cloud/60">Pick a voyage still being argued. Back within a week, no contract.</p>
          </div>
          <div className="mt-10 md:mt-12"><CommercialReviewEvidence /></div>
          <p className="mt-4 text-center font-mono text-[10px] text-cloud/55">A finding. The source email. The line that matters.</p>
        </div>
      </section>

      <section className="border-b border-navy/10 px-6 py-16 md:py-24">
        <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-2 md:gap-20">
          <div><Eyebrow>What tracking cannot tell you</Eyebrow><h2 className="mt-4 text-3xl font-semibold leading-tight md:text-4xl">You know the amounts.<br />The reasons are harder to find.</h2><p className="mt-5 text-base leading-relaxed text-navy/65">The reasons sit in thousands of emails, and in the heads of the people who handled each voyage. When a charterer pushes back, someone spends days rebuilding what happened.</p></div>
          <div className="border-l-2 border-teal pl-6 md:mt-8 md:pl-8"><Eyebrow>What is possible now</Eyebrow><h3 className="mt-4 text-2xl font-semibold leading-tight md:text-3xl">Any voyage from last year.<br />Fully explained.</h3><p className="mt-5 text-base leading-relaxed text-navy/65">Every event in order. Every position each side took. Every concession, and the email behind it. Not just one voyage at a time, but across all 100.</p><p className="mt-5 text-sm font-medium">Backload the voyages. Bring the record forward.</p></div>
        </div>
      </section>

      <section className="bg-background px-6 py-16 md:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-8 md:grid-cols-[1.3fr_1fr] md:items-end"><div><Eyebrow>One review · 10 voyages · anonymized</Eyebrow><h2 className="mt-4 max-w-xl text-3xl font-semibold leading-tight md:text-4xl">Not all value is lost.<br />Some has never been raised.</h2></div><div className="border-l-2 border-teal pl-6"><p className="font-mono text-4xl font-medium md:text-5xl">USD 385K</p><p className="mt-2 text-sm text-navy/60">still open across the reviewed voyages.</p></div></div>
          <div className="mt-10 grid border-y border-navy/10 sm:grid-cols-2 lg:grid-cols-4">
            {[
              ["04", "Voyages without a laytime statement", "Paperwork that had never been sent."],
              ["01", "Demurrage rate never declared", "An unresolved commercial starting point."],
              ["01", "Wrong clause conceded", "A position given away in correspondence."],
              ["↻", "The same port, days lost again", "A recurring pattern across voyages."],
            ].map(([number, title, detail]) => <div key={title} className="border-b border-navy/10 py-7 pr-5 last:border-b-0 sm:px-5 lg:border-b-0 lg:border-r lg:first:pl-0 lg:last:border-r-0"><span className="font-mono text-2xl text-teal">{number}</span><h3 className="mt-4 text-sm font-semibold leading-relaxed">{title}</h3><p className="mt-2 text-xs leading-relaxed text-navy/60">{detail}</p></div>)}
          </div>
          <p className="mt-4 text-xs leading-relaxed text-navy/50">An anonymized review, not a promise of recovery. Open amounts are not the same as recoverable amounts.</p>
        </div>
      </section>

      <section className="px-6 py-16 md:py-24">
        <div className="mx-auto max-w-6xl">
          <Eyebrow>Your review, delivered</Eyebrow><h2 className="mt-4 text-3xl font-semibold md:text-4xl">The management picture.<br />The record behind every voyage.</h2>
          <div className="mt-10 grid gap-10 md:grid-cols-2 md:gap-16">
            <div className="border-t-2 border-navy pt-6"><FileText className="size-6 text-navy/60" /><h3 className="mt-4 text-xl font-semibold">01 / The management review</h3><ul className="mt-5 space-y-4">{["What is open, stuck, conceded, or never raised.", "Time lost, grouped by cause and recurring pattern.", "What to change in the next fixtures."].map(text => <ReviewItem key={text}>{text}</ReviewItem>)}</ul></div>
            <div className="border-t-2 border-teal pt-6"><Mail className="size-6 text-navy/60" /><h3 className="mt-4 text-xl font-semibold">02 / Every voyage, on the record</h3><ul className="mt-5 space-y-4">{["An ordered timeline of events, positions, and concessions.", "Findings linked to their supporting correspondence.", "A claims specialist checks every finding before you see it.", "90 days of access to your voyage records."].map(text => <ReviewItem key={text}>{text}</ReviewItem>)}</ul></div>
          </div>
        </div>
      </section>

      <section className="bg-navy px-6 py-16 text-cloud md:py-24">
        <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-2 md:gap-20">
          <div><Eyebrow light>Your commercial judgment stays yours</Eyebrow><h2 className="mt-4 text-3xl font-semibold leading-tight md:text-4xl">You decide<br /><span className="text-teal">what to raise.</span></h2><p className="mt-5 text-base leading-relaxed text-cloud/70">Findings come only to you. Settled stays settled. Much of the value is paperwork never sent, and lessons for the next fixture.</p><p className="mt-6 border-l-2 border-teal pl-4 text-sm text-cloud/85">Shown by voyage and process. Never by person.</p></div>
          <div><Eyebrow light>Nothing to replace. Nothing to install.</Eyebrow><ul className="mt-6 divide-y divide-cloud/10">{[[LockKeyhole, "Your mailboxes. Read-only access.", "You choose which mailboxes are included."], [ShieldCheck, "NDA before access.", "Your data is deleted when the review ends."], [CheckCheck, "Evidence, not assumptions.", "Facts that exist only on WhatsApp are marked as gaps, not guessed."]].map(([Icon, title, detail]) => { const ItemIcon = Icon as typeof LockKeyhole; return <li key={String(title)} className="flex gap-4 py-5 first:pt-0"><ItemIcon className="mt-1 size-5 shrink-0 text-teal" /><div><h3 className="text-sm font-semibold">{String(title)}</h3><p className="mt-2 text-sm leading-relaxed text-cloud/60">{String(detail)}</p></div></li>; })}</ul></div>
        </div>
      </section>

      <ReviewPricing />

      <section className="border-t border-navy/10 bg-background px-6 py-16 md:py-20">
        <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-[1fr_1.4fr] md:gap-20"><div><Eyebrow>The person behind the review</Eyebrow><h2 className="mt-4 text-2xl font-semibold">Umair Nizam</h2><p className="mt-2 text-sm text-navy/55">Founder, Portcall · Maritime technology</p></div><div><p className="text-xl font-medium leading-relaxed md:text-2xl">The free voyage is your reference check.</p><p className="mt-4 text-base leading-relaxed text-navy/65">Start with one voyage you know well. See the record, inspect the evidence, and speak directly with Umair before deciding whether to review the rest.</p><Button asChild variant="link" className="mt-4 h-auto p-0 text-navy"><a href={BOOKING_URL} target="_blank" rel="noopener noreferrer">Speak with Umair <ArrowRight /></a></Button></div></div>
      </section>

      <section className="bg-teal/10 px-6 py-16 md:py-20"><div className="mx-auto max-w-3xl text-center"><Eyebrow>Start with the voyage still being argued</Eyebrow><h2 className="mt-4 text-balance text-3xl font-semibold md:text-4xl">One voyage. The whole record.<br />Then you decide.</h2><div className="mt-7"><ReviewCTA dark /></div><p className="mt-3 text-xs text-navy/60">Back within a week. No contract.</p></div></section>
    </Layout>
  );
}

function Eyebrow({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return <p className={`font-mono text-[10px] uppercase ${light ? "text-teal" : "text-navy/55"}`}>{children}</p>;
}

function ReviewItem({ children }: { children: React.ReactNode }) {
  return <li className="flex items-start gap-3 text-sm leading-relaxed text-navy/65"><Check className="mt-0.5 size-4 shrink-0 text-teal" /><span>{children}</span></li>;
}

function ReviewPricing() {
  const [voyages, setVoyages] = useState<50 | 100>(50);
  return <section className="px-6 py-16 md:py-24"><div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-2 md:gap-20"><div><Eyebrow>A defined review. A clear fee.</Eyebrow><h2 className="mt-4 text-3xl font-semibold md:text-4xl">Start with your<br />last 12 months.</h2><p className="mt-5 max-w-md text-base leading-relaxed text-navy/65">Backload your voyages and their correspondence. Get the management review, the evidence, and 90 days of access.</p><div className="mt-7 flex items-start gap-3"><Clock3 className="mt-0.5 size-5 shrink-0 text-teal" /><p className="max-w-md text-sm leading-relaxed text-navy/65">Continue with Portcall’s ongoing service within 90 days, and your review fee is credited in full.</p></div></div><div className="rounded-lg border border-navy/15 bg-background p-6 md:p-8"><div className="flex w-fit gap-1 rounded-md border border-navy/10 bg-cloud p-1" role="group" aria-label="Review size">{([50, 100] as const).map(count => <Button key={count} variant="ghost" aria-pressed={voyages === count} onClick={() => setVoyages(count)} className={`rounded-sm px-4 text-xs ${voyages === count ? "bg-navy text-cloud hover:bg-slate hover:text-cloud" : "text-navy/60"}`}>{count} voyages</Button>)}</div><p className="mt-7 text-xs text-navy/50">From</p><p className="mt-1 font-mono text-4xl font-medium">USD {voyages === 50 ? "9,500" : "15,000"}</p><p className="mt-2 text-sm text-navy/60">for {voyages} voyages</p><div className="my-6 border-y border-navy/10 py-5"><p className="flex items-center gap-2 text-sm font-semibold"><ShieldCheck className="size-4 text-teal" /> Less than 5× the fee found? No charge.</p><p className="mt-2 text-xs leading-relaxed text-navy/60">Start with one voyage free before committing to the full review.</p></div><ReviewCTA dark /></div></div></section>;
}