import { createFileRoute } from "@tanstack/react-router";
import { SiteShell } from "@/components/layout/SiteShell";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { useState } from "react";
import { whatsappUrl } from "@/lib/site";

export const Route = createFileRoute("/audit")({
  head: () => ({
    meta: [
      { title: "Get Your Free Digital Marketing Audit | LeadCore Digital" },
      { name: "description", content: "Free Google Ads, SEO, website, conversion tracking and lead generation audit from LeadCore Digital. No obligation. Real insights." },
      { property: "og:title", content: "Free Digital Marketing Audit | LeadCore Digital" },
      { property: "og:description", content: "Get a free professional audit of your marketing — no obligation." },
      { property: "og:url", content: "/audit" },
    ],
    links: [{ rel: "canonical", href: "/audit" }],
  }),
  component: Audit,
});

function Audit() {
  const [submitted, setSubmitted] = useState(false);

  const audits = [
    "Google Ads Audit",
    "SEO Audit",
    "Website Audit",
    "Conversion Tracking Audit",
    "Lead Generation Audit",
  ];

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const name = fd.get("name");
    const msg = `Hi LeadCore Digital, I'd like a free audit. Name: ${name}, Business: ${fd.get("business")}, Website: ${fd.get("url")}.`;
    window.open(whatsappUrl(msg), "_blank");
    setSubmitted(true);
  }

  return (
    <SiteShell>
      <section className="container mx-auto max-w-6xl px-4 sm:px-6 pt-20 pb-20 grid lg:grid-cols-2 gap-12">
        <div>
          <span className="text-xs uppercase tracking-[0.18em] text-gold font-semibold">Free Audit</span>
          <h1 className="mt-3 font-display text-4xl sm:text-5xl font-bold leading-tight">
            Get Your Free <span className="text-gradient-gold">Digital Marketing Audit</span>
          </h1>
          <p className="mt-5 text-lg text-muted-foreground">
            We'll review your current marketing setup and deliver a detailed action plan — no cost, no obligation.
          </p>
          <ul className="mt-8 space-y-3">
            {audits.map((a) => (
              <li key={a} className="flex items-center gap-3 text-sm">
                <CheckCircle2 className="h-5 w-5 text-gold" /> {a}
              </li>
            ))}
          </ul>
        </div>

        <form onSubmit={onSubmit} className="card-elevated rounded-3xl p-7 lg:p-8 space-y-4 h-fit">
          <h2 className="font-display text-xl font-bold">Request your audit</h2>
          {(["name", "Full Name"] as const).map(() => null)}
          <Field name="name" label="Full Name" required />
          <Field name="phone" label="Phone" type="tel" required />
          <Field name="email" label="Email" type="email" required />
          <Field name="url" label="Website URL" type="url" placeholder="https://" />
          <Field name="business" label="Business Type" />
          <button
            type="submit"
            className="w-full inline-flex justify-center items-center gap-2 rounded-full bg-gold px-6 py-3 text-sm font-semibold text-gold-foreground hover:brightness-110 glow-gold"
          >
            Request Free Audit <ArrowRight className="h-4 w-4" />
          </button>
          {submitted && (
            <p className="text-xs text-emerald-400 text-center">Opening WhatsApp — we'll respond within hours.</p>
          )}
          <p className="text-xs text-muted-foreground text-center">We respect your privacy. No spam, ever.</p>
        </form>
      </section>
    </SiteShell>
  );
}

function Field({ name, label, type = "text", required, placeholder }: { name: string; label: string; type?: string; required?: boolean; placeholder?: string }) {
  return (
    <label className="block">
      <span className="text-xs uppercase tracking-wider text-muted-foreground">{label}{required && " *"}</span>
      <input
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="mt-1.5 w-full rounded-xl border border-border bg-background px-4 py-2.5 text-sm focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/20"
      />
    </label>
  );
}
