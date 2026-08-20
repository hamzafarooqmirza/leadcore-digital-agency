import { Link } from "@tanstack/react-router";
import { Logo } from "./Logo";
import { site, services, whatsappUrl } from "@/lib/site";
import { Mail, Phone, MapPin, MessageCircle, Facebook, Instagram, Linkedin, Youtube } from "lucide-react";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-border bg-surface">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 py-14 grid gap-10 lg:grid-cols-4">
        <div className="space-y-4">
          <Logo />
          <p className="text-sm text-muted-foreground max-w-xs">
            {site.tagline}. We help businesses generate more leads, calls and sales with data-driven marketing.
          </p>
          <div className="flex gap-3 pt-2">
            {[Facebook, Instagram, Linkedin, Youtube].map((Icon, i) => (
              <a key={i} href="#" aria-label="social" className="h-9 w-9 rounded-full border border-border flex items-center justify-center hover:border-gold hover:text-gold transition">
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-sm font-semibold mb-4 tracking-wide uppercase text-foreground">Quick Links</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            {[["/", "Home"], ["/about", "About Us"], ["/services", "Services"], ["/projects", "Case Studies"], ["/industries", "Industries"], ["/blog", "Blog"], ["/faq", "FAQ"], ["/audit", "Free Audit"], ["/contact", "Contact"]].map(([to, label]) => (
              <li key={to}><Link to={to} className="hover:text-gold">{label}</Link></li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold mb-4 tracking-wide uppercase text-foreground">Services</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            {services.slice(0, 8).map((s) => (
              <li key={s.slug}>
                <Link to="/services/$slug" params={{ slug: s.slug }} className="hover:text-gold">{s.title}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold mb-4 tracking-wide uppercase text-foreground">Contact</h4>
          <ul className="space-y-3 text-sm text-muted-foreground">
            <li className="flex items-start gap-3"><Phone className="h-4 w-4 mt-0.5 text-gold" /> <a href={`tel:${site.phoneRaw}`} className="hover:text-gold">{site.phone}</a></li>
            <li className="flex items-start gap-3"><MessageCircle className="h-4 w-4 mt-0.5 text-gold" /> <a href={whatsappUrl()} target="_blank" rel="noreferrer" className="hover:text-gold">WhatsApp Chat</a></li>
            <li className="flex items-start gap-3"><Mail className="h-4 w-4 mt-0.5 text-gold" /> <a href={`mailto:${site.email}`} className="hover:text-gold">{site.email}</a></li>
            <li className="flex items-start gap-3"><MapPin className="h-4 w-4 mt-0.5 text-gold" /> {site.location}</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} {site.name}. All rights reserved.</p>
          <p>Crafted to help businesses grow locally & globally.</p>
        </div>
      </div>
    </footer>
  );
}
