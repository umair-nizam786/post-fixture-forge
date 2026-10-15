import { createFileRoute, useSearch } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Layout } from "@/components/portcall/Layout";

type Status = "loading" | "ready" | "already" | "invalid" | "success" | "error";

export const Route = createFileRoute("/unsubscribe")({
  validateSearch: (search: Record<string, unknown>) => ({
    token: typeof search.token === "string" ? search.token : "",
  }),
  head: () => ({
    meta: [
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { title: "Unsubscribe - Portcall" },
      { name: "description", content: "Manage your Portcall email subscription." },
      { property: "og:title", content: "Unsubscribe - Portcall" },
      { property: "og:description", content: "Manage your Portcall email subscription." },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: UnsubscribePage,
});

function UnsubscribePage() {
  const { token } = useSearch({ from: "/unsubscribe" });
  const [status, setStatus] = useState<Status>("loading");

  useEffect(() => {
    if (!token) {
      setStatus("invalid");
      return;
    }
    fetch(`/email/unsubscribe?token=${encodeURIComponent(token)}`)
      .then(async (r) => {
        const data = await r.json().catch(() => ({}));
        if (!r.ok) return setStatus("invalid");
        if (data.valid === false && data.reason === "already_unsubscribed")
          return setStatus("already");
        if (data.valid) return setStatus("ready");
        setStatus("invalid");
      })
      .catch(() => setStatus("invalid"));
  }, [token]);

  async function confirm() {
    setStatus("loading");
    try {
      const r = await fetch("/email/unsubscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ token }),
      });
      const data = await r.json().catch(() => ({}));
      if (data.success) setStatus("success");
      else if (data.reason === "already_unsubscribed") setStatus("already");
      else setStatus("error");
    } catch {
      setStatus("error");
    }
  }

  return (
    <Layout>
      <section className="px-6 py-24">
        <div className="mx-auto max-w-md rounded-2xl border border-navy/10 bg-white p-10 text-center">
          {status === "loading" && <p className="text-navy/60">Loading…</p>}
          {status === "ready" && (
            <>
              <h1 className="text-2xl font-bold tracking-tight">Unsubscribe</h1>
              <p className="mt-3 text-sm text-navy/60">
                You will stop receiving emails from Portcall.
              </p>
              <button
                onClick={confirm}
                className="mt-6 w-full rounded-xl bg-navy py-3 text-sm font-semibold text-cloud hover:bg-slate"
              >
                Confirm unsubscribe
              </button>
            </>
          )}
          {status === "success" && (
            <>
              <h1 className="text-2xl font-bold tracking-tight">You're unsubscribed</h1>
              <p className="mt-3 text-sm text-navy/60">
                You won't receive further emails from Portcall.
              </p>
            </>
          )}
          {status === "already" && (
            <>
              <h1 className="text-2xl font-bold tracking-tight">Already unsubscribed</h1>
              <p className="mt-3 text-sm text-navy/60">
                This address is already opted out.
              </p>
            </>
          )}
          {status === "invalid" && (
            <>
              <h1 className="text-2xl font-bold tracking-tight">Invalid link</h1>
              <p className="mt-3 text-sm text-navy/60">
                This unsubscribe link is invalid or has expired.
              </p>
            </>
          )}
          {status === "error" && (
            <>
              <h1 className="text-2xl font-bold tracking-tight">Something went wrong</h1>
              <p className="mt-3 text-sm text-navy/60">Please try again later.</p>
            </>
          )}
        </div>
      </section>
    </Layout>
  );
}