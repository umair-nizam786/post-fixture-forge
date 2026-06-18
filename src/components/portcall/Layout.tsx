import type { ReactNode } from "react";
import { Footer } from "./Footer";
import { Nav } from "./Nav";

export function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-cloud text-navy selection:bg-signal/20">
      <Nav />
      <main>{children}</main>
      <Footer />
    </div>
  );
}