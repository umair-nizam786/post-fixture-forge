import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { z } from "zod";
import { Layout } from "@/components/portcall/Layout";
import heroShot from "@/assets/ops-agent-hero.png";
import panelShot from "@/assets/ops-agent-panel.png";

export const Route = createFileRoute("/ops-agent")({
  head: () => ({
    meta: [
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { title: "Portcall Ops Agent - Free for operations teams" },
      {
        name: "description",
        content:
          "The Portcall Ops Agent sits beside your inbox in Outlook. It knows the voyage behind every email and the charter parties behind the voyage. Free for operations teams.",
      },
      { property: "og:title", content: "Portcall Ops Agent - Free for operations teams" },
      {
        property: "og:description",
        content:
          "Every voyage email, read against the charter party. The Ops Agent flags what doesn't match and drafts your reply in your team's own words. Free for operations teams.",
      },
      { property: "og:url", content: "/ops-agent" },
    ],
    links: [{ rel: "canonical", href: "/ops-agent" }],
  }),
  component: OpsAgentPage,
});

const WHATSAPP_URL = "https://wa.me/971585810774";
const WHATSAPP_DISPLAY = "+971 58 581 0774";

const formSchema = z.object({
  name: z.string().trim().min(1, "Required").max(100),
  email: z.string().trim().email("Invalid email").max(255),
  company: z.string().trim().min(1, "Required").max(120),
  whatsapp: z.string().trim().max(40),
});

type FormState = { name: string; email: string; company: string; whatsapp: string };

const faqs = [
  {
    q: "Is it really free?",
    a: "Yes. No card, no contract and no trial clock. Your whole operations team can use it.",
  },
  {
    q: "Why do we need to talk to you first?",
    a: "Because we set it up with you. Twenty minutes together means your charter parties are loaded for live voyages, the agent know how your team writes, and it gets things right from the first email.",
  },
  {
    q: "Does it send emails on its own?",
    a: "No. It drafts replies. You read them, change what you want and send them yourself.",
  },
  {
    q: "What do you need from us?",
    a: "Microsoft 365 with Outlook, your IT admin's approval to install the add-in, and the charter parties for the voyages you want it on.",
  },
  {
    q: "Who is it built for?",
    a: "Dry bulk operators, owners, and charterers on voyage charters, including operators with a time charter behind the voyage.",
  },
  {
    q: "Will the drafts sound like us?",
    a: "Yes. During setup the agent learns how your team writes, from greetings to shorthand, so a draft reads like it came from your desk. The more you use it, the less you edit.",
  },
];

function Eyebrow({ children }: { children: string }) {
  return (
    <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.25em] text-teal">
      {children}
    </p>
  );
}

function OpsAgentPage() {
  return (
    <Layout>
      {/* Hero */}
      <section className="bg-navy px-6 py-24 text-cloud lg:py-32">
        <div className="mx-auto max-w-4xl text-center">
          <Eyebrow>Portcall Ops Agent · Free for operations teams</Eyebrow>
          <h1 className="mt-5 text-balance text-4xl font-extrabold leading-[1.05] tracking-tight md:text-6xl">
            Every voyage email, read against the{" "}
            <span className="text-teal">charter party</span>.
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg text-cloud/70">
            The Portcall Ops Agent sits beside your inbox in Outlook. It knows the
            voyage behind every email and the charter parties behind the voyage. It
            flags what doesn't match, and it drafts your reply in your team's own
            words.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <a
              href="#get-it-free"
              className="rounded-lg bg-signal px-6 py-3.5 text-sm font-semibold text-cloud hover:bg-signal/90"
            >
              Get it free
            </a>
            <a
              href="#walkthrough"
              className="rounded-lg border border-white/15 bg-white/5 px-6 py-3.5 text-sm font-semibold text-cloud hover:bg-white/10"
            >
              See it on a real email
            </a>
          </div>
          <p className="mt-8 font-mono text-[11px] uppercase tracking-[0.2em] text-cloud/40">
            Onboarding 5 dry bulk operating companies in November 2026 · No card, no
            contract
          </p>
        </div>
        <div className="mx-auto mt-14 max-w-5xl">
          <div className="overflow-hidden rounded-xl border border-white/10 shadow-2xl shadow-navy/50">
            <img
              src={heroShot}
              alt="A voyage email open in Outlook with the Portcall Ops Agent panel beside it, flagging approval needed and drafting the reply"
              className="block w-full"
              loading="eager"
            />
          </div>
          <p className="mt-4 text-center font-mono text-[11px] uppercase tracking-[0.2em] text-cloud/40">
            The Ops Agent panel beside a live voyage email in Outlook
          </p>
        </div>
      </section>

      {/* One email, start to finish */}
      <section id="walkthrough" className="bg-white px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-[1fr_340px] lg:items-start lg:gap-16">
            <div className="max-w-3xl">
              <Eyebrow>One email, start to finish</Eyebrow>
              <h2 className="mt-4 text-balance text-3xl font-bold tracking-tight md:text-4xl">
                12:13. The master's time sheet arrives.
              </h2>
              <p className="mt-5 text-navy/70">
                Crane No.4 broke down at Salalah. Two stoppages on the 19th, 0405 to
                0600 and 0600 to 0740. Four people in To, thirteen in Cc.
              </p>
              <p className="mt-4 text-navy/70">
                Answering it properly means opening the fixture, finding the breakdown
                clause in the voyage charter party, checking the off-hire clause in the
                time charter, pulling up the agent's report from yesterday, adding up
                the hours and deciding who goes on the reply.
              </p>
              <p className="mt-4 font-semibold text-navy">
                The Ops Agent does that work in the pane beside the email.
              </p>
            </div>
            <div className="overflow-hidden rounded-xl border border-navy/10 bg-white shadow-xl shadow-navy/5 lg:sticky lg:top-8">
              <img
                src={panelShot}
                alt="The Portcall Ops Agent panel: approval status, one-line summary, voyage context and the drafted reply"
                className="block w-full"
                loading="lazy"
              />
            </div>
          </div>
          <div className="mt-12 grid gap-px overflow-hidden rounded-2xl bg-navy/10 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                n: "1",
                t: "What it needs from you",
                b: "Approval needed, act today. You see the status before you read a line.",
              },
              {
                n: "2",
                t: "What it means",
                b: "One line on what the email says, linked to what came before. Here, the master is confirming the breakdown the agent already reported.",
              },
              {
                n: "3",
                t: "Which voyage, which contract",
                b: "MV Aurora, limestone loading at Salalah, TC side, Corvane as charterers. The agent knows which charter party this email touches.",
              },
              {
                n: "4",
                t: "The reply, written",
                b: "Reply-all to the right 17 people. Times read from the master's table, total worked out at 3 hrs 35 min, and the next step tied to the off-hire position.",
              },
            ].map((s) => (
              <div key={s.n} className="flex flex-col gap-3 bg-white p-8">
                <span className="font-mono text-[11px] font-semibold uppercase tracking-wider text-navy/40">
                  {s.n}
                </span>
                <h3 className="text-lg font-bold tracking-tight">{s.t}</h3>
                <p className="text-sm leading-relaxed text-navy/60">{s.b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What it does on every email */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <Eyebrow>What it does on every email</Eyebrow>
            <h2 className="mt-4 text-balance text-3xl font-bold tracking-tight md:text-4xl">
              It knows the voyage. It checks the CP. It writes the reply.
            </h2>
          </div>
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            <div className="flex flex-col rounded-2xl border border-navy/10 bg-white p-8">
              <h3 className="text-lg font-bold tracking-tight">
                Every voyage carries its context.
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-navy/60">
                Each email is matched to its voyage, with the fixture and the voyage
                charter party behind it. If you're the operator, the agent also
                carries the time charter with your head owners, so it knows which
                side of the business an email touches.
              </p>
              <div className="mt-auto flex flex-wrap gap-2 pt-6">
                {["Voyage CP", "TC CP", "Voyage timeline", "B/L", "SOF"].map((c) => (
                  <span
                    key={c}
                    className="rounded-full bg-navy/5 px-3 py-1.5 font-mono text-[10px] font-semibold uppercase tracking-wider text-navy/70"
                  >
                    {c}
                  </span>
                ))}
              </div>
            </div>
            <div className="flex flex-col rounded-2xl border border-navy/10 bg-white p-8">
              <h3 className="text-lg font-bold tracking-tight">
                Discrepancies against the CP, flagged.
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-navy/60">
                When an email says something your charter party doesn't allow or
                doesn't cover, the agent flags it on that email, on the day, while
                it's still cheap to fix.
              </p>
              <div className="mt-auto pt-6">
                <div className="rounded-xl border border-navy/10 bg-cloud p-4">
                  <p className="font-mono text-[10px] font-semibold uppercase tracking-wider text-navy/40">
                    Example · Crane No.4 · 19 Oct
                  </p>
                  <p className="mt-2 font-mono text-xs text-navy">
                    Stopped 0405 to 0740 LT · 3 hrs 35 min
                  </p>
                  <ul className="mt-3 space-y-1.5 text-xs text-navy/60">
                    <li>Voyage CP · ship's gear breakdown: check whether the time counts as laytime</li>
                    <li>TC · time lost may put the vessel off-hire</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="flex flex-col rounded-2xl border border-navy/10 bg-white p-8">
              <h3 className="text-lg font-bold tracking-tight">
                Your reply, drafted in your words.
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-navy/60">
                When we set it up, the agent learns how your ops team writes: the
                greetings, the shorthand, the way you put a position to a master or a
                charterer. Every draft comes out that way, to the right people, with
                the facts from the thread and the charter party position behind it.
                Read it, change what you like, and send it from Outlook.
              </p>
              <div className="mt-auto pt-6">
                <div className="rounded-xl border border-navy/10 bg-cloud p-4">
                  <p className="font-mono text-[10px] font-semibold uppercase tracking-wider text-navy/40">
                    Draft · Reply all · 4 To, 13 Cc
                  </p>
                  <p className="mt-2 text-xs leading-relaxed text-navy/70">
                    Tks for your time sheet. Noted Crane No.4 stopped at 0405 LT on 19
                    Oct and resumed at 0740 LT, total 3 hrs 35 min. We are checking
                    this against the agent's SOF and will revert on the off-hire
                    position.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Where it lives */}
      <section className="bg-navy px-6 py-24 text-cloud">
        <div className="mx-auto max-w-7xl lg:grid lg:grid-cols-2 lg:gap-16">
          <div>
            <Eyebrow>Where it lives</Eyebrow>
            <h2 className="mt-4 text-balance text-3xl font-bold tracking-tight md:text-4xl">
              Inside Outlook. Nothing new to learn.
            </h2>
            <p className="mt-5 max-w-lg text-cloud/70">
              The Ops Agent opens next to the email you're reading. Your team keeps
              working the way it does today, with the voyage and both charter parties
              one glance away.
            </p>
          </div>
          <ul className="mt-10 space-y-6 lg:mt-0">
            {[
              "Installed once through your Microsoft 365 admin, for the whole operations team.",
              "Switch from this email to the whole voyage in one click.",
              "Works next to everything your team already uses. Nothing to migrate.",
            ].map((b) => (
              <li key={b} className="flex gap-4">
                <span className="mt-2 size-2 shrink-0 rounded-full bg-teal" />
                <p className="text-cloud/80">{b}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Your data */}
      <section className="bg-white px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <Eyebrow>Your data</Eyebrow>
            <h2 className="mt-4 text-balance text-3xl font-bold tracking-tight md:text-4xl">
              Your email stays yours.
            </h2>
          </div>
          <div className="mt-12 grid gap-px overflow-hidden rounded-2xl bg-navy/10 md:grid-cols-3">
            {[
              {
                t: "Never shared",
                b: "Nothing you receive is shown to counterparties or to anyone outside your company.",
              },
              {
                t: "You decide what goes out",
                b: "The agent drafts. Every reply is sent by you.",
              },
              {
                t: "Terms before setup",
                b: "One page on what we access, where it's stored and how to switch it off, agreed before you install.",
              },
            ].map((c) => (
              <div key={c.t} className="flex flex-col gap-3 bg-white p-8">
                <h3 className="text-lg font-bold tracking-tight">{c.t}</h3>
                <p className="text-sm leading-relaxed text-navy/60">{c.b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why it's free */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-7xl lg:grid lg:grid-cols-2 lg:gap-16">
          <div>
            <Eyebrow>Why it's free</Eyebrow>
            <h2 className="mt-4 text-balance text-3xl font-bold tracking-tight md:text-4xl">
              Free, because we want it on every ops desk.
            </h2>
            <p className="mt-5 text-navy/70">
              Portcall is building one trusted record for every voyage. The Ops Agent
              is the easiest way for an operations team to start, so we're giving it
              away.
            </p>
            <p className="mt-4 text-navy/70">
              Portcall earns from voyage reviews and live voyage records, which some
              teams add later. The Ops Agent stays free either way.
            </p>
          </div>
          <div className="mt-10 rounded-3xl bg-navy p-10 text-cloud lg:mt-0">
            <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-teal">
              Founding batch open
            </p>
            <p className="mt-4 text-5xl font-extrabold tracking-tight">5</p>
            <p className="mt-1 font-mono text-xs uppercase tracking-[0.2em] text-cloud/60">
              dry bulk operating companies · onboarding in November 2026
            </p>
            <p className="mt-6 text-sm text-cloud/70">
              We set up every team ourselves, so we onboard in batches. Founding
              companies get a direct line to the people building the agent, and what
              they ask for gets built first.
            </p>
            <ul className="mt-6 space-y-2.5 border-t border-white/10 pt-6 text-sm text-cloud/80">
              <li>Your whole operations team included</li>
              <li>Your charter parties loaded for you</li>
              <li>No card, no contract</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Getting started */}
      <section className="bg-white px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <Eyebrow>Getting started</Eyebrow>
            <h2 className="mt-4 text-balance text-3xl font-bold tracking-tight md:text-4xl">
              Three steps to your first email.
            </h2>
          </div>
          <div className="mt-12 grid gap-px overflow-hidden rounded-2xl bg-navy/10 md:grid-cols-3">
            {[
              {
                n: "01",
                t: "Tell us who you are",
                b: "Name, work email, company. One minute.",
              },
              {
                n: "02",
                t: "Talk to us for 20 minutes",
                b: "We show the agent on one of your live voyages and agree where to start.",
              },
              {
                n: "03",
                t: "Start using it",
                b: "We install it with your IT team, load your charter parties and let the agent learn how your team writes. You're live within a week.",
              },
            ].map((s) => (
              <div key={s.n} className="flex flex-col gap-3 bg-white p-8">
                <span className="font-mono text-[11px] font-semibold uppercase tracking-wider text-navy/40">
                  {s.n}
                </span>
                <h3 className="text-lg font-bold tracking-tight">{s.t}</h3>
                <p className="text-sm leading-relaxed text-navy/60">{s.b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Form */}
      <section id="get-it-free" className="px-6 py-24">
        <div className="mx-auto max-w-2xl">
          <div className="text-center">
            <Eyebrow>Get the Ops Agent free</Eyebrow>
            <h2 className="mt-4 text-balance text-3xl font-bold tracking-tight md:text-4xl">
              Leave your details and we'll call to set it up with you.
            </h2>
          </div>
          <OpsAgentForm />
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white px-6 py-24">
        <div className="mx-auto max-w-3xl">
          <Eyebrow>Questions operators ask</Eyebrow>
          <div className="mt-8 divide-y divide-navy/10 rounded-2xl border border-navy/10 bg-white">
            {faqs.map((f) => (
              <details key={f.q} className="group px-6 py-5">
                <summary className="cursor-pointer list-none text-sm font-semibold text-navy marker:hidden">
                  {f.q}
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-navy/60">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-navy px-6 py-24 text-cloud">
        <div className="mx-auto max-w-3xl text-center">
          <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-teal">
            Portcall Ops Agent
          </p>
          <h2 className="mt-4 text-balance text-3xl font-bold tracking-tight md:text-5xl">
            Your next voyage email, already in context.
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-cloud/70">
            Free for operations teams. We're onboarding 5 dry bulk operating
            companies in November 2026.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <a
              href="#get-it-free"
              className="rounded-lg bg-signal px-6 py-3.5 text-sm font-semibold text-cloud hover:bg-signal/90"
            >
              Get it free
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
              className="rounded-lg border border-white/15 bg-white/5 px-6 py-3.5 text-sm font-semibold text-cloud hover:bg-white/10"
            >
              Message us on WhatsApp
            </a>
          </div>
          <p className="mt-10 font-mono text-[11px] uppercase tracking-[0.2em] text-cloud/40">
            PORTCALL · ONE VOYAGE. ONE RECORD
          </p>
        </div>
      </section>
    </Layout>
  );
}

function OpsAgentForm() {
  const [form, setForm] = useState<FormState>({ name: "", email: "", company: "", whatsapp: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  function update<K extends keyof FormState>(k: K, v: FormState[K]) {
    setForm((f) => ({ ...f, [k]: v }));
  }

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    const result = formSchema.safeParse(form);
    if (!result.success) {
      const next: Record<string, string> = {};
      for (const issue of result.error.issues) {
        next[issue.path[0] as string] = issue.message;
      }
      setErrors(next);
      return;
    }
    setErrors({});
    setSubmitError(null);
    setSubmitting(true);
    let ok = false;
    try {
      const res = await fetch("/api/public/access-request", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: result.data.name,
          company: result.data.company,
          email: result.data.email,
          phone: result.data.whatsapp,
          companyType: "operator",
          source: "ops-agent",
        }),
      });
      ok = res.ok;
    } catch {
      ok = false;
    }
    setSubmitting(false);
    if (!ok) {
      setSubmitError("Something went wrong. Please try again.");
      return;
    }
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="mt-10 rounded-2xl border border-navy/10 bg-white p-10 text-center">
        <div className="mx-auto flex size-12 items-center justify-center rounded-full bg-teal/10">
          <span className="size-3 rounded-full bg-teal" />
        </div>
        <h3 className="mt-5 text-2xl font-bold tracking-tight">Thanks — we've got it.</h3>
        <p className="mx-auto mt-3 max-w-md text-navy/60">
          We reply within one business day to set up the Ops Agent with your team.
        </p>
        <button
          onClick={() => setSubmitted(false)}
          className="mt-6 text-xs font-medium text-navy/50 hover:text-navy"
        >
          Submit another request
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      noValidate
      className="mt-10 rounded-2xl border border-navy/10 bg-white p-8 md:p-10"
    >
      <div className="grid gap-5 md:grid-cols-2">
        <FormField
          label="Your name"
          value={form.name}
          onChange={(v) => update("name", v)}
          error={errors.name}
          autoComplete="name"
        />
        <FormField
          label="Work email"
          type="email"
          value={form.email}
          onChange={(v) => update("email", v)}
          error={errors.email}
          autoComplete="email"
        />
        <FormField
          label="Company"
          value={form.company}
          onChange={(v) => update("company", v)}
          error={errors.company}
          autoComplete="organization"
        />
        <FormField
          label="WhatsApp number (optional)"
          type="tel"
          value={form.whatsapp}
          onChange={(v) => update("whatsapp", v)}
          error={errors.whatsapp}
          autoComplete="tel"
        />
      </div>
      <button
        type="submit"
        disabled={submitting}
        className="mt-8 block w-full rounded-xl bg-navy py-4 text-center text-sm font-semibold text-cloud transition-colors hover:bg-slate disabled:opacity-60"
      >
        {submitting ? "Sending…" : "Get it free"}
      </button>
      {submitError ? (
        <p className="mt-3 text-center text-xs text-red-600">{submitError}</p>
      ) : null}
      <p className="mt-3 text-center text-xs text-navy/50">
        We reply within one business day. Prefer WhatsApp?{" "}
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noreferrer"
          className="font-medium text-signal hover:underline"
        >
          Message Umair on {WHATSAPP_DISPLAY}
        </a>
        .
      </p>
    </form>
  );
}

function FormField({
  label,
  value,
  onChange,
  error,
  type = "text",
  autoComplete,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  error?: string;
  type?: string;
  autoComplete?: string;
}) {
  return (
    <div>
      <label className="font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-navy/50">
        {label}
      </label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        autoComplete={autoComplete}
        className="mt-2 w-full rounded-lg border border-navy/15 bg-white px-3.5 py-3 text-sm text-navy placeholder:text-navy/30 focus:border-signal focus:outline-none focus:ring-2 focus:ring-signal/20"
      />
      {error ? <p className="mt-1.5 text-xs text-red-600">{error}</p> : null}
    </div>
  );
}
