import { Link } from "@tanstack/react-router";

export function Logo({ tone = "dark" }: { tone?: "dark" | "light" }) {
  const arc = tone === "dark" ? "#071A2B" : "#F8FAFC";
  const bg = tone === "dark" ? "#F8FAFC" : "#071A2B";
  const text = tone === "dark" ? "text-navy" : "text-cloud";
  const signal = "#2563EB";
  const teal = "#14B8A6";
  return (
    <Link to="/" className="flex items-center gap-2.5" aria-label="Portcall home">
      <svg
        width="40"
        height="28"
        viewBox="0 0 64 44"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        {/* C-shape (open on the right) */}
        <path
          d="M44 8 A16 16 0 1 0 44 36"
          stroke={arc}
          strokeWidth="3.5"
          strokeLinecap="round"
          fill="none"
        />
        {/* Horizontal timeline */}
        <line x1="2" y1="22" x2="62" y2="22" stroke={signal} strokeWidth="2.5" strokeLinecap="round" />
        {/* Milestones: teal · signal · teal */}
        <circle cx="8" cy="22" r="3.5" fill={bg} stroke={teal} strokeWidth="2" />
        <circle cx="32" cy="22" r="4" fill={bg} stroke={signal} strokeWidth="2.25" />
        <circle cx="56" cy="22" r="3.5" fill={bg} stroke={teal} strokeWidth="2" />
      </svg>
      <span className={`font-sans text-[13px] font-bold uppercase tracking-[0.18em] ${text}`}>
        Portcall
      </span>
    </Link>
  );
}