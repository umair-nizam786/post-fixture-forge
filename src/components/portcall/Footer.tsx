import { Link } from "@tanstack/react-router";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="border-t border-navy/5 bg-cloud">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div className="max-w-sm space-y-4">
            <Logo />
            <p className="text-sm text-navy/60">
              The collaboration system for maritime fixture execution.
            </p>
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-navy/30">
              Built for global trade · © {new Date().getFullYear()}
            </p>
          </div>
          <div className="grid grid-cols-2 gap-10 sm:grid-cols-3">
            <FooterCol
              title="Product"
              links={[
                { to: "/operators", label: "Operators" },
                { to: "/charterers", label: "Charterers" },
                { to: "/brokers", label: "Brokers" },
                { to: "/agents", label: "Agents" },
              ]}
            />
            <FooterCol
              title="Company"
              links={[
                { to: "/request-access", label: "Request access" },
                { to: "/request-access", label: "Contact" },
              ]}
            />
            <FooterCol
              title="Trust"
              links={[
                { to: "/security", label: "Security" },
                { to: "/privacy", label: "Privacy" },
                { to: "/status", label: "Status" },
              ]}
            />
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({
  title,
  links,
}: {
  title: string;
  links: { to: string; label: string }[];
}) {
  return (
    <div className="space-y-3">
      <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-navy/40">
        {title}
      </p>
      <ul className="space-y-2">
        {links.map((l, i) => (
          <li key={i}>
            <Link to={l.to} className="text-sm text-navy/70 transition-colors hover:text-navy">
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}