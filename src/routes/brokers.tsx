import { createFileRoute } from "@tanstack/react-router";
import { PersonaPage } from "@/components/portcall/PersonaPage";

export const Route = createFileRoute("/brokers")({
  head: () => ({
    meta: [
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { title: "For Shipbrokers - Portcall" },
      {
        name: "description",
        content:
          "Stay connected throughout voyage execution. Visibility doesn't end at the fixture.",
      },
      { property: "og:title", content: "Portcall for Shipbrokers" },
      {
        property: "og:description",
        content: "Maintain alignment between commercial parties post-fixture.",
      },
      { property: "og:url", content: "/brokers" },
    ],
    links: [{ rel: "canonical", href: "/brokers" }],
  }),
  component: () => (
    <PersonaPage
      kicker="Shipbroker"
      headline={<>Stay <span className="text-teal">connected</span> throughout execution.</>}
      sub="Maintain stronger alignment between commercial parties through a shared execution workflow. Your insight empowers the fixture."
      bullets={[
        {
          title: "Post-fixture control",
          body:
            "Stay in control of voyage progress, key milestones, and operational events for your fixtures.",
        },
        {
          title: "Better communication",
          body:
            "Coordinate between owner and charterer in a shared workspace instead of routing every question through email.",
        },
        {
          title: "Stronger relationships",
          body:
            "Be the broker that delivers a smoother post-fixture experience for both sides of the deal.",
        },
      ]}
      commercial={{
        title: "Collaboration access at no cost.",
        body:
          "Brokers join voyage workspaces as collaborators; no seat fees, no per-voyage charges.",
      }}
      ctaPrimary={{ label: "See the workflow", to: "/request-access" }}
    />
  ),
});