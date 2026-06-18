import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { z } from "zod";
import { Layout } from "@/components/portcall/Layout";

export const Route = createFileRoute("/request-access")({
  head: () => ({
    meta: [
      { title: "Request early access — Portcall" },
      {
        name: "description",
        content:
          "Become a Portcall design partner. Tell us about your operations and we'll schedule a call to activate your workspace.",
      },
      { property: "og:title", content: "Request early access — Portcall" },
      {
        property: "og:description",
        content: "Tell us about your operations.",
      },
      { property: "og:url", content: "/request-access" },
      { name: "robots", content: "noindex" },
    ],
    links: [{ rel: "canonical", href: "/request-access" }],
  }),
  component: RequestAccessPage,
});

const schema = z.object({
  name: z.string().trim().min(1, "Required").max(100),
  company: z.string().trim().min(1, "Required").max(120),
  email: z.string().trim().email("Invalid email").max(255),
  phone: z.string().trim().min(4, "Required").max(40),
  companyType: z.enum(["operator", "charterer", "broker"], {
    message: "Select a company type",
  }),
});

type FormState = {
  name: string;
  company: string;
  email: string;
  phone: string;
  companyType: "" | "operator" | "charterer" | "broker";
};

const CALENDLY_URL = "https://calendly.com/portcall/intro";

function RequestAccessPage() {
  const [form, setForm] = useState<FormState>({
    name: "",
    company: "",
    email: "",
    phone: "",
    companyType: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  function update<K extends keyof FormState>(k: K, v: FormState[K]) {
    setForm((f) => ({ ...f, [k]: v }));
  }

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    const result = schema.safeParse(form);
    if (!result.success) {
      const next: Record<string, string> = {};
      for (const issue of result.error.issues) {
        next[issue.path[0] as string] = issue.message;
      }
      setErrors(next);
      return;
    }
    setErrors({});
    setSubmitted(true);
  }

  return (
    <Layout>
      <section className="bg-navy px-6 py-20 text-cloud">
        <div className="mx-auto max-w-3xl text-center">
          <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-teal">
            Early access
          </p>
          <h1 className="mt-3 text-balance text-4xl font-extrabold tracking-tight md:text-5xl">
            Tell us about your operations.
          </h1>
          <p className="mt-4 text-cloud/70">
            We'll review and schedule a short call to activate your workspace.
          </p>
        </div>
      </section>

      <section className="px-6 py-16">
        <div className="mx-auto max-w-2xl">
          {submitted ? (
            <Confirmation onReset={() => setSubmitted(false)} />
          ) : (
            <form
              onSubmit={onSubmit}
              noValidate
              className="rounded-2xl border border-navy/10 bg-white p-8 md:p-10"
            >
              <div className="grid gap-5 md:grid-cols-2">
                <Field
                  label="Full name"
                  value={form.name}
                  onChange={(v) => update("name", v)}
                  error={errors.name}
                  autoComplete="name"
                />
                <Field
                  label="Company name"
                  value={form.company}
                  onChange={(v) => update("company", v)}
                  error={errors.company}
                  autoComplete="organization"
                />
                <Field
                  label="Email address"
                  type="email"
                  value={form.email}
                  onChange={(v) => update("email", v)}
                  error={errors.email}
                  autoComplete="email"
                />
                <Field
                  label="Phone number"
                  type="tel"
                  value={form.phone}
                  onChange={(v) => update("phone", v)}
                  error={errors.phone}
                  autoComplete="tel"
                />
                <div className="md:col-span-2">
                  <label className="font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-navy/50">
                    Company type
                  </label>
                  <select
                    value={form.companyType}
                    onChange={(e) =>
                      update("companyType", e.target.value as FormState["companyType"])
                    }
                    className="mt-2 w-full rounded-lg border border-navy/15 bg-white px-3.5 py-3 text-sm text-navy focus:border-signal focus:outline-none focus:ring-2 focus:ring-signal/20"
                  >
                    <option value="">Select…</option>
                    <option value="operator">Shipowner / Operator</option>
                    <option value="charterer">Ship Charterer</option>
                    <option value="broker">Shipbroker</option>
                  </select>
                  {errors.companyType ? (
                    <p className="mt-1.5 text-xs text-red-600">{errors.companyType}</p>
                  ) : null}
                </div>
              </div>

              <a
                href="https://calendly.com/umair-portcall/30min"
                target="_blank"
                rel="noreferrer"
                className="mt-8 block w-full rounded-xl bg-navy py-4 text-center text-sm font-semibold text-cloud transition-colors hover:bg-slate"
              >
                Let's speak!
              </a>
              <p className="mt-3 text-center text-xs text-navy/50">
                By submitting, you agree to be contacted about Portcall early access.
              </p>
            </form>
          )}
        </div>
      </section>
    </Layout>
  );
}

function Field({
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

function Confirmation({ onReset }: { onReset: () => void }) {
  return (
    <div className="rounded-2xl border border-navy/10 bg-white p-10 text-center">
      <div className="mx-auto flex size-12 items-center justify-center rounded-full bg-teal/10">
        <span className="size-3 rounded-full bg-teal" />
      </div>
      <h2 className="mt-5 text-2xl font-bold tracking-tight">
        Thanks for your interest.
      </h2>
      <p className="mx-auto mt-3 max-w-md text-navy/60">
        Schedule a short call to walk through your operations and activate your
        workspace.
      </p>
      <a
        href={CALENDLY_URL}
        target="_blank"
        rel="noreferrer"
        className="mt-8 inline-block rounded-xl bg-signal px-6 py-3.5 text-sm font-semibold text-cloud hover:bg-signal/90"
      >
        Schedule a call
      </a>
      <p className="mt-6 font-mono text-[10px] uppercase tracking-[0.2em] text-navy/40">
        Or reply to the confirmation email · We respond within 1 business day
      </p>
      <button
        onClick={onReset}
        className="mt-6 text-xs font-medium text-navy/50 hover:text-navy"
      >
        Submit another request
      </button>
    </div>
  );
}