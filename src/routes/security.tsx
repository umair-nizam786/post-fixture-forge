import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/portcall/Layout";

export const Route = createFileRoute("/security")({
  head: () => ({
    meta: [
      { title: "Security — Portcall" },
      {
        name: "description",
        content:
          "Security information for Portcall.",
      },
      { property: "og:title", content: "Security — Portcall" },
      {
        property: "og:description",
        content: "Security information for Portcall.",
      },
      { property: "og:url", content: "/security" },
    ],
    links: [{ rel: "canonical", href: "/security" }],
  }),
  component: SecurityPage,
});

function SecurityPage() {
  return (
    <Layout>
      <section className="flex flex-col items-center justify-center px-6 py-32 text-center">
        <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-teal">
          Trust
        </p>
        <h1 className="mt-3 text-balance text-4xl font-extrabold tracking-tight md:text-5xl">
          Security
        </h1>
        <p className="mt-5 text-pretty text-lg text-navy/70">
          Coming soon.
        </p>
      </section>
    </Layout>
  );
}
