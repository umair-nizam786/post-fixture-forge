import { Link } from "@tanstack/react-router";

export function Logo({ tone = "dark" }: { tone?: "dark" | "light" }) {
  const line = tone === "dark" ? "bg-navy" : "bg-cloud";
  const text = tone === "dark" ? "text-navy" : "text-cloud";
  const ringBg = tone === "dark" ? "bg-cloud" : "bg-navy";
  return (
    <Link to="/" className="flex items-center gap-2.5">
      <span className="relative flex items-center">
        <span className={`block h-[2px] w-10 ${line}`} />
        <span className={`-ml-1.5 block size-3 rounded-full border-2 border-navy ${ringBg}`} />
        <span className={`-ml-1.5 block size-3 rounded-full border-2 border-signal ${ringBg}`} />
        <span className={`-ml-1.5 block size-3 rounded-full border-2 border-teal ${ringBg}`} />
      </span>
      <span className={`font-sans text-[13px] font-bold uppercase tracking-[0.18em] ${text}`}>
        Portcall
      </span>
    </Link>
  );
}