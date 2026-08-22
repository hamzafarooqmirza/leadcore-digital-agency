import { Link } from "@tanstack/react-router";
import { Logo } from "./Logo";
import { Menu, X, Phone } from "lucide-react";
import { useState } from "react";
import { site } from "@/lib/site";

const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/projects", label: "Case Studies" },
  { to: "/industries", label: "Industries" },
  { to: "/blog", label: "Blog" },
  { to: "/faq", label: "FAQ" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 backdrop-blur-xl bg-background/70 border-b border-border">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 h-16 flex items-center justify-between">
        <Logo />
        <nav className="hidden lg:flex items-center gap-7">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              activeProps={{ className: "text-gold" }}
              activeOptions={{ exact: n.to === "/" }}
            >
              {n.label}
            </Link>
          ))}
        </nav>
        <div className="hidden md:flex items-center gap-3">
          <a
            href={`tel:${site.phoneRaw}`}
            className="text-sm text-muted-foreground hover:text-gold flex items-center gap-2"
          >
            <Phone className="h-4 w-4" /> {site.phone}
          </a>
          <Link
            to="/audit"
            className="inline-flex items-center rounded-full bg-gold px-4 py-2 text-xs font-semibold text-gold-foreground hover:brightness-110 transition"
          >
            Free Audit
          </Link>
        </div>
        <button
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden p-2 text-foreground"
          aria-label="Toggle menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>
      {open && (
        <div className="lg:hidden border-t border-border bg-background">
          <div className="px-4 py-4 flex flex-col gap-1">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className="px-3 py-2 rounded-md text-sm text-muted-foreground hover:bg-surface hover:text-foreground"
                activeProps={{ className: "text-gold" }}
                activeOptions={{ exact: n.to === "/" }}
              >
                {n.label}
              </Link>
            ))}
            <Link
              to="/audit"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex justify-center items-center rounded-full bg-gold px-4 py-2.5 text-sm font-semibold text-gold-foreground"
            >
              Get Free Audit
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
