import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout } from "@/components/portcall/Layout";

export const Route = createFileRoute("/status")({
  head: () => ({
    meta: [
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { title: "Status - Portcall" },
      {
        name: "description",
        content:
          "System status for Portcall.",
      },
      { property: "og:title", content: "Status - Portcall" },
      {
        property: "og:description",
        content: "System status for Portcall.",
      },
      { property: "og:url", content: "/status" },
    ],
    links: [{ rel: "canonical", href: "/status" }],
  }),
  component: StatusPage,
});

function StatusPage() {
  return (
    <Layout>
      <section className="flex flex-col items-center justify-center px-6 py-32 text-center">
        <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-teal">
          Trust
        </p>
        <h1 className="mt-3 text-balance text-4xl font-extrabold tracking-tight md:text-5xl">
          Status
        </h1>
        <p className="mt-5 text-pretty text-lg text-navy/70">
          Coming soon.
        </p>
        <Link
          to="/request-access"
          className="mt-8 rounded-full bg-navy px-5 py-2.5 text-xs font-semibold text-cloud transition-colors hover:bg-slate"
        >
          REQUEST EARLY ACCESS
        </Link>
      </section>
    </Layout>
  );
}
