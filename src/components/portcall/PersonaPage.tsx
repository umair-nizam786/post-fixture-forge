import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { Layout } from "./Layout";
import { VoyageWorkspace } from "./VoyageWorkspace";

export type PersonaPageProps = {
  kicker: string;
  headline: ReactNode;
  sub: string;
  bullets: { title: string; body: string }[];
  commercial: { title: string; body: string };
  ctaPrimary: { label: string; to: string };
  ctaSecondary?: { label: string; to: string };
};

export function PersonaPage(p: PersonaPageProps) {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative flex flex-col overflow-hidden lg:flex-row">
        <div className="relative z-10 flex flex-1 flex-col justify-center bg-navy px-8 py-24 text-cloud lg:px-16 lg:py-32">
          <div className="pc-fade-up max-w-xl">
            <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-teal">
              {p.kicker}
            </p>
            <h1 className="mt-4 text-balance text-4xl font-extrabold leading-[1.05] tracking-tight md:text-5xl lg:text-6xl">
              {p.headline}
            </h1>
            <p className="mt-6 max-w-lg text-pretty text-lg text-cloud/70">{p.sub}</p>
            <div className="mt-10 flex flex-wrap gap-3">
              <Link
                to={p.ctaPrimary.to}
                className="rounded-lg bg-signal px-5 py-3.5 text-sm font-semibold text-cloud hover:bg-signal/90"
              >
                {p.ctaPrimary.label}
              </Link>
              {p.ctaSecondary ? (
                <Link
                  to={p.ctaSecondary.to}
                  className="rounded-lg border border-white/15 bg-white/5 px-5 py-3.5 text-sm font-semibold text-cloud hover:bg-white/10"
                >
                  {p.ctaSecondary.label}
                </Link>
              ) : null}
            </div>
          </div>
        </div>
        <div className="relative flex flex-col justify-center bg-cloud px-8 py-20 lg:w-[52%] lg:px-12 lg:py-32">
          <div className="pc-fade-up" style={{ animationDelay: "180ms" }}>
            <VoyageWorkspace />
          </div>
        </div>
      </section>

      {/* Value bullets */}
      <section className="bg-white px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <h2 className="max-w-2xl text-balance text-3xl font-bold tracking-tight md:text-4xl">
            What changes for your team.
          </h2>
          <div className="mt-12 grid gap-px overflow-hidden rounded-2xl bg-navy/10 md:grid-cols-3">
            {p.bullets.map((b, i) => (
              <div key={b.title} className="flex flex-col gap-3 bg-white p-8">
                <span className="font-mono text-[11px] font-semibold uppercase tracking-wider text-navy/40">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="text-lg font-bold tracking-tight">{b.title}</h3>
                <p className="text-sm leading-relaxed text-navy/60">{b.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Commercial */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-4xl rounded-3xl bg-navy p-10 text-cloud md:p-14">
          <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-teal">
            Commercial
          </p>
          <h3 className="mt-3 text-2xl font-bold tracking-tight md:text-3xl">
            {p.commercial.title}
          </h3>
          <p className="mt-4 max-w-2xl text-cloud/70">{p.commercial.body}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              to={p.ctaPrimary.to}
              className="rounded-lg bg-signal px-5 py-3 text-sm font-semibold text-cloud hover:bg-signal/90"
            >
              {p.ctaPrimary.label}
            </Link>
            {p.ctaSecondary ? (
              <Link
                to={p.ctaSecondary.to}
                className="rounded-lg border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-cloud hover:bg-white/10"
              >
                {p.ctaSecondary.label}
              </Link>
            ) : null}
          </div>
        </div>
      </section>
    </Layout>
  );
}