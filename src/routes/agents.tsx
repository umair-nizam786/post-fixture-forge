import { createFileRoute } from "@tanstack/react-router";
import { PersonaPage } from "@/components/portcall/PersonaPage";

export const Route = createFileRoute("/agents")({
  head: () => ({
    meta: [
      { title: "For Port Agents — Portcall" },
      {
        name: "description",
        content:
          "From local port knowledge to global voyage visibility. Capture, structure, and share critical port information with principals in real time.",
      },
      { property: "og:title", content: "Portcall for Port Agents" },
      {
        property: "og:description",
        content: "Become the trusted source of truth for every voyage.",
      },
      { property: "og:url", content: "/agents" },
    ],
    links: [{ rel: "canonical", href: "/agents" }],
  }),
  component: () => (
    <PersonaPage
      kicker="Port Agent"
      headline={<>From local port knowledge to <span className="text-teal">global voyage visibility</span>.</>}
      sub="Port Agents keep global trade moving. They coordinate the critical moments that determine whether a voyage stays on schedule. Portcall enables agents to capture operational events, share real-time updates, and provide principals with a complete view of every port call — reducing uncertainty and improving execution."
      bullets={[
        {
          title: "Real-time operational updates",
          body:
            "Keep principals informed with accurate, timely operational intelligence on vessel status, port activities, delays, milestones, and exceptions.",
        },
        {
          title: "Complete port call timeline",
          body:
            "From arrival to departure, every operational milestone is captured in one place. Create a trusted record of events that supports better decision-making and reduces disputes.",
        },
        {
          title: "Faster escalation and decision-making",
          body:
            "Turn operational updates into actionable information before small issues become costly delays. Identify exceptions early and communicate them clearly.",
        },
      ]}
      commercial={{
        title: "Collaboration access at no cost.",
        body:
          "Port Agents join voyage workspaces as operational contributors; no seat fees, no per-voyage charges. Your local intelligence becomes part of the shared record.",
      }}
      ctaPrimary={{ label: "Become a data partner", to: "/request-access" }}
      ctaSecondary={{ label: "See how it works", to: "/pricing" }}
    />
  ),
});
