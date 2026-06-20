import { createFileRoute } from "@tanstack/react-router";
import { PersonaPage } from "@/components/portcall/PersonaPage";

export const Route = createFileRoute("/operators")({
  head: () => ({
    meta: [
      { title: "For Shipowners & Operators - Portcall" },
      {
        name: "description",
        content:
          "Deliver a transparent voyage execution experience for every charterer. Simple voyage-based pricing from $479 per voyage.",
      },
      { property: "og:title", content: "Portcall for Shipowners & Operators" },
      {
        property: "og:description",
        content: "Delight your customers.",
      },
      { property: "og:url", content: "/operators" },
    ],
    links: [{ rel: "canonical", href: "/operators" }],
  }),
  component: () => (
    <PersonaPage
      kicker="Shipowner / Operator"
      headline={<><span className="text-teal">Delight</span> your customers.</>}
      sub="Deliver a transparent, shared execution experience for every charterer. Reduce manual follow-ups and maintain a reliable record of voyage events."
      bullets={[
        {
          title: "Better charterer experience",
          body:
            "Give customers confidence through a shared voyage workspace that captures every important operational event, update, and milestone.",
        },
        {
          title: "Fewer manual follow-ups",
          body:
            "Automated event summaries and shared timelines replace the chase across email, WhatsApp, and calls.",
        },
        {
          title: "Stronger evidence trail",
          body:
            "Create a clearer operational record that supports faster resolution when questions arise.",
        },
      ]}
      commercial={{
        title: "From $479 per voyage. Unlimited collaborator seats.",
        body:
          "You pay only for voyages executed through the platform. No seat licenses. Charterers and brokers collaborate at no additional cost.",
      }}
      ctaPrimary={{ label: "Improve voyage execution", to: "/request-access" }}
      ctaSecondary={{ label: "See how it works", to: "/pricing" }}
    />
  ),
});