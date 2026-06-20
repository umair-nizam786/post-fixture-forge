import { createFileRoute } from "@tanstack/react-router";
import { PersonaPage } from "@/components/portcall/PersonaPage";

export const Route = createFileRoute("/charterers")({
  head: () => ({
    meta: [
      { title: "For Charterers - Portcall" },
      {
        name: "description",
        content:
          "Transparent voyage visibility without chasing updates. Free access for charterers, through your operating partners.",
      },
      { property: "og:title", content: "Portcall for Charterers" },
      {
        property: "og:description",
        content: "Stay aligned with operators through a shared voyage timeline.",
      },
      { property: "og:url", content: "/charterers" },
    ],
    links: [{ rel: "canonical", href: "/charterers" }],
  }),
  component: () => (
    <PersonaPage
      kicker="Charterer"
      headline={<><span className="text-teal">Stay aligned</span>. Stop chasing updates.</>}
      sub="Access a shared voyage timeline that captures what happened, when it happened, and why; through your operating partners, at no cost to you."
      bullets={[
        {
          title: "Real-time voyage visibility",
          body:
            "See accurate operational updates as they happen, not days later through a forwarded email thread.",
        },
        {
          title: "Shared timeline of events",
          body:
            "One source of truth for milestones, documents, and operational notes across every voyage.\u00a0",
        },
        {
          title: "Easier collaboration",
          body:
            "Communicate with operators in context; against the voyage, against the event, against the record.",
        },
      ]}
      commercial={{
        title: "Free for charterers. Always.",
        body:
          "Charterers receive collaboration access through participating operators at no cost. The platform improves the relationship; it doesn't add another line item to it.",
      }}
      ctaPrimary={{ label: "Preview the voyage experience", to: "/request-access" }}
    />
  ),
});