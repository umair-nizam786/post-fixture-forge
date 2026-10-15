import { Link } from "@tanstack/react-router";
import { Logo } from "./Logo";
import { ComingSoonDialog } from "./ComingSoonDialog";

const personas = [
  { to: "/operators", label: "Operator" },
  { to: "/charterers", label: "Charterer" },
  { to: "/brokers", label: "Broker" },
  { to: "/agents", label: "Agent" },
] as const;

export function Nav() {
  return (
    <nav className="sticky top-0 z-50 w-full border-b border-navy/5 bg-cloud/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <div className="flex items-center gap-8">
          <Logo />
          <div className="hidden h-7 w-px bg-navy/10 lg:block" />
          <div className="hidden items-center gap-1 rounded-full bg-navy/5 p-1 lg:flex">
            {personas.map((p) => (
              <Link
                key={p.to}
                to={p.to}
                className="rounded-full px-3.5 py-1.5 text-xs font-semibold text-navy/60 transition-colors hover:text-navy"
                activeProps={{
                  className:
                    "rounded-full bg-white px-3.5 py-1.5 text-xs font-semibold text-navy shadow-sm ring-1 ring-navy/5",
                }}
              >
                {p.label}
              </Link>
            ))}
          </div>
          <Link
            to="/pricing"
            className="hidden text-xs font-medium text-navy/70 transition-colors hover:text-navy lg:block"
          >
            Pricing
          </Link>
        </div>
        <div className="flex items-center gap-3">
          <ComingSoonDialog>
            <button className="hidden text-xs font-medium text-navy/70 transition-colors hover:text-navy sm:block">
              Sign in
            </button>
          </ComingSoonDialog>
          <Link
            to="/review"
            className="rounded-full bg-navy px-4 py-2 text-xs font-semibold text-cloud transition-colors hover:bg-slate"
          >
            <span className="uppercase">COMMERCIAL REVIEW</span>
          </Link>
        </div>
      </div>
    </nav>
  );
}