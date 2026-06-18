import { Link } from "@tanstack/react-router";
import logoAsset from "@/assets/logo-icon.png.asset.json";

export function Logo({ tone = "dark" }: { tone?: "dark" | "light" }) {
  const text = tone === "dark" ? "text-navy" : "text-cloud";
  return (
    <Link to="/" className="flex items-center gap-2.5" aria-label="Portcall home">
      <img
        src={logoAsset.url}
        alt=""
        width={195}
        height={206}
        className="h-7 w-auto"
        aria-hidden="true"
      />
      <span className={`font-sans text-[13px] font-bold uppercase tracking-[0.18em] ${text}`}>
        Portcall
      </span>
    </Link>
  );
}