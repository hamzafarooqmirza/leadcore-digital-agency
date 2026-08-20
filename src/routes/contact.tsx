import { createFileRoute } from "@tanstack/react-router";
import { SiteShell } from "@/components/layout/SiteShell";
import { site, whatsappUrl } from "@/lib/site";
import { Phone, Mail, MapPin, MessageCircle, Clock, ArrowRight } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact LeadCore Digital — Book Your Free Consultation" },
      { name: "description", content: "Get in touch with LeadCore Digital. WhatsApp +92 333 5858774, email leadcoredigitalpk@gmail.com. Book your free digital marketing consultation today." },
      { property: "og:title", content: "Contact LeadCore Digital" },
      { property: "og:description", content: "Book a free consultation with LeadCore Digital." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: Contact,
});

function Contact() {
  const [sent, setSent] = useState(false);
  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const msg = `Hi LeadCore Digital, my name is ${fd.get("name")} (${fd.get("email")}). ${fd.get("message")}`;
    window.open(whatsappUrl(msg), "_blank");
    setSent(true);
  }
  return (
    <SiteShell>
      <section className="container mx-auto max-w-7xl px-4 sm:px-6 pt-20 pb-20 grid lg:grid-cols-2 gap-12">
        <div>
          <span className="text-xs uppercase tracking-[0.18em] text-gold font-semibold">Contact</span>
          <h1 className="mt-3 font-display text-4xl sm:text-5xl font-bold leading-tight">
            Let's Build Your <span className="text-gradient-gold">Growth Engine</span>
          </h1>
          <p className="mt-5 text-lg text-muted-foreground">
            Reach out for a free consultation. We'll respond within hours — not days.
          </p>

          <div className="mt-10 space-y-4">
            <ContactRow I={Phone} label="Call us" value={site.phone} href={`tel:${site.phoneRaw}`} />
            <ContactRow I={MessageCircle} label="WhatsApp" value="Chat with us instantly" href={whatsappUrl()} external />
            <ContactRow I={Mail} label="Email" value={site.email} href={`mailto:${site.email}`} />
            <ContactRow I={MapPin} label="Location" value={site.location} />
            <ContactRow I={Clock} label="Business Hours" value="Mon–Sat · 9:00 AM – 8:00 PM (PKT)" />
          </div>
        </div>

        <form onSubmit={onSubmit} className="card-elevated rounded-3xl p-7 lg:p-8 space-y-4 h-fit">
          <h2 className="font-display text-xl font-bold">Book a Consultation</h2>
          <Field name="name" label="Full Name" required />
          <Field name="email" label="Email" type="email" required />
          <Field name="phone" label="Phone" type="tel" />
          <label className="block">
            <span className="text-xs uppercase tracking-wider text-muted-foreground">How can we help? *</span>
            <textarea name="message" required rows={4} className="mt-1.5 w-full rounded-xl border border-border bg-background px-4 py-2.5 text-sm focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/20" />
          </label>
          <button type="submit" className="w-full inline-flex justify-center items-center gap-2 rounded-full bg-gold px-6 py-3 text-sm font-semibold text-gold-foreground hover:brightness-110 glow-gold">
            Send Message <ArrowRight className="h-4 w-4" />
          </button>
          {sent && <p className="text-xs text-emerald-400 text-center">Redirecting to WhatsApp — see you there.</p>}
        </form>
      </section>

      <section className="container mx-auto max-w-7xl px-4 sm:px-6 pb-20">
        <div className="rounded-3xl overflow-hidden border border-border">
          <iframe
            title="LeadCore Digital location"
            src="https://www.google.com/maps?q=Pakistan&output=embed"
            className="w-full h-[360px]"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>
    </SiteShell>
  );
}

function ContactRow({ I, label, value, href, external }: { I: any; label: string; value: string; href?: string; external?: boolean }) {
  const content = (
    <div className="flex items-start gap-4 rounded-2xl border border-border bg-surface p-4 hover:border-gold/50 transition">
      <div className="h-10 w-10 rounded-xl bg-gold/10 border border-gold/20 flex items-center justify-center text-gold"><I className="h-5 w-5" /></div>
      <div>
        <div className="text-xs uppercase tracking-wider text-muted-foreground">{label}</div>
        <div className="text-sm font-semibold">{value}</div>
      </div>
    </div>
  );
  return href ? <a href={href} {...(external ? { target: "_blank", rel: "noreferrer" } : {})}>{content}</a> : content;
}

function Field({ name, label, type = "text", required }: { name: string; label: string; type?: string; required?: boolean }) {
  return (
    <label className="block">
      <span className="text-xs uppercase tracking-wider text-muted-foreground">{label}{required && " *"}</span>
      <input name={name} type={type} required={required} className="mt-1.5 w-full rounded-xl border border-border bg-background px-4 py-2.5 text-sm focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/20" />
    </label>
  );
}
