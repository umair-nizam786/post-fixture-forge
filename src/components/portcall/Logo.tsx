import { Link } from "@tanstack/react-router";
import logoAsset from "@/assets/portcall-logo-icon.png.asset.json";

export function Logo({ tone = "dark" }: { tone?: "dark" | "light" }) {
  const text = tone === "dark" ? "text-navy" : "text-cloud";
  return (
    <Link to="/" className="flex items-center gap-2.5" aria-label="Portcall home">
      <img
        src={logoAsset.url}
        alt=""
        className="h-9 w-auto shrink-0"
        aria-hidden="true"
      />
      <span className={`font-sans text-[13px] font-bold uppercase tracking-[0.18em] ${text}`}>
        Portcall
      </span>
    </Link>
  );
}