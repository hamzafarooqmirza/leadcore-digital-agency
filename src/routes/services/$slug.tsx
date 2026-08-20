import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { SiteShell } from "@/components/layout/SiteShell";
import { services, whatsappUrl } from "@/lib/site";
import { adsResults } from "@/lib/results";
import { ResultsGallery } from "@/components/results/ResultsGallery";
import { ArrowRight, CheckCircle2, MessageCircle, Phone, Sparkles } from "lucide-react";

const RESULTS_SLUGS = new Set([
  "google-ads-management",
  "lead-generation-campaigns",
  "call-generation-campaigns",
  "ppc-management",
  "performance-max-campaigns",
  "google-conversion-tracking",
  "facebook-ads-management",
]);

export const Route = createFileRoute("/services/$slug")({
  loader: ({ params }) => {
    const svc = services.find((s) => s.slug === params.slug);
    if (!svc) throw notFound();
    return svc;
  },
  head: ({ loaderData }) => ({
    meta: [
      { title: `${loaderData?.title ?? "Service"} | LeadCore Digital` },
      { name: "description", content: `${loaderData?.title} — ${loaderData?.short} Get a free strategy call with LeadCore Digital.` },
      { property: "og:title", content: `${loaderData?.title} | LeadCore Digital` },
      { property: "og:description", content: loaderData?.short ?? "" },
      { property: "og:url", content: `/services/${loaderData?.slug}` },
    ],
    links: [{ rel: "canonical", href: `/services/${loaderData?.slug}` }],
  }),
  component: ServiceDetail,
  notFoundComponent: () => <SiteShell><div className="container max-w-3xl mx-auto px-6 py-32 text-center"><h1 className="text-3xl font-display font-bold">Service not found</h1><Link to="/services" className="mt-4 inline-block text-gold">Browse services →</Link></div></SiteShell>,
});

function ServiceDetail() {
  const svc = Route.useLoaderData();

  const benefits = [
    "Increased qualified leads & phone calls",
    "Higher return on ad spend (ROAS)",
    "Lower cost per acquisition",
    "Transparent weekly reporting",
    "Full conversion tracking setup",
    "Continuous A/B testing & optimization",
  ];

  const steps = [
    { t: "Business Analysis", d: "Deep-dive into your goals, audience and competitors." },
    { t: "Strategy Planning", d: "Custom roadmap with channels, budget and KPIs." },
    { t: "Campaign Setup", d: "Build out accounts, creatives, tracking and landing pages." },
    { t: "Optimization", d: "Daily monitoring, bid tuning and creative refresh." },
    { t: "Reporting & Growth", d: "Weekly reports with insights and next-step actions." },
  ];

  const faqs = [
    { q: `How quickly will I see results from ${svc.title}?`, a: "Most clients see measurable lift within the first 2–4 weeks. SEO compounds over 3–6 months." },
    { q: "What budget do I need to get started?", a: "We work with budgets of every size. We'll recommend an honest starting point during your free consultation." },
    { q: "Do you provide reporting?", a: "Yes — every client gets a transparent weekly report with leads, calls, spend and ROI." },
    { q: "How do I get started?", a: "Book a free audit or chat with us on WhatsApp. We'll review your situation and propose a plan within 24 hours." },
  ];

  return (
    <SiteShell>
      <section className="container mx-auto max-w-5xl px-4 sm:px-6 pt-20 pb-10">
        <Link to="/services" className="text-xs uppercase tracking-[0.18em] text-gold font-semibold">← All Services</Link>
        <h1 className="mt-4 font-display text-4xl sm:text-5xl font-bold">{svc.title}</h1>
        <p className="mt-5 text-lg text-muted-foreground max-w-3xl">{svc.short}</p>
        <div className="mt-7 flex flex-wrap gap-3">
          <Link to="/audit" className="inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3 text-sm font-semibold text-gold-foreground glow-gold">Get Free Audit <ArrowRight className="h-4 w-4" /></Link>
          <a href={whatsappUrl(`Hi, I'm interested in ${svc.title}.`)} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-6 py-3 text-sm font-semibold hover:border-gold"><MessageCircle className="h-4 w-4" /> WhatsApp</a>
        </div>
      </section>

      <section className="container mx-auto max-w-5xl px-4 sm:px-6 py-12 grid lg:grid-cols-2 gap-8">
        <div className="card-elevated rounded-2xl p-7">
          <h2 className="font-display text-2xl font-bold">Overview</h2>
          <p className="mt-3 text-muted-foreground">
            Our {svc.title} service is engineered for one thing: results. We combine certified expertise,
            data-driven optimization and creative excellence to drive measurable growth for your business.
          </p>
        </div>
        <div className="card-elevated rounded-2xl p-7">
          <h2 className="font-display text-2xl font-bold">Key Benefits</h2>
          <ul className="mt-4 space-y-2.5">
            {benefits.map((b) => (
              <li key={b} className="flex gap-2 text-sm text-muted-foreground">
                <CheckCircle2 className="h-5 w-5 text-gold shrink-0" /> {b}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="container mx-auto max-w-5xl px-4 sm:px-6 py-12">
        <h2 className="font-display text-3xl font-bold">Our Process</h2>
        <ol className="mt-8 grid md:grid-cols-5 gap-3">
          {steps.map((s, i) => (
            <li key={s.t} className="rounded-2xl border border-border bg-surface p-5">
              <div className="text-xs font-mono text-gold">STEP {i + 1}</div>
              <div className="mt-2 font-semibold">{s.t}</div>
              <p className="mt-1 text-xs text-muted-foreground">{s.d}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="container mx-auto max-w-5xl px-4 sm:px-6 py-12">
        <h2 className="font-display text-3xl font-bold">Results You Can Expect</h2>
        <div className="mt-8 grid md:grid-cols-3 gap-5">
          {[["+62%","Average lead increase"],["-40%","Average CPA reduction"],["3.2x","Average ROAS"]].map(([v,l]) => (
            <div key={l} className="card-elevated rounded-2xl p-6">
              <div className="text-4xl font-display font-bold text-gradient-gold">{v}</div>
              <div className="mt-2 text-sm text-muted-foreground">{l}</div>
            </div>
          ))}
        </div>
      </section>

      {RESULTS_SLUGS.has(svc.slug) && (
        <section className="container mx-auto max-w-6xl px-4 sm:px-6 py-12">
          <div className="mb-8">
            <span className="text-xs uppercase tracking-[0.18em] text-gold font-semibold">Proof Of Performance</span>
            <h2 className="mt-3 font-display text-3xl font-bold">Real {svc.title} Results</h2>
            <p className="mt-3 text-muted-foreground max-w-2xl">
              Actual campaign screenshots — calls generated, cost per lead and conversion efficiency from live client accounts.
            </p>
          </div>
          <ResultsGallery items={adsResults.slice(0, 6)} columns={3} />
        </section>
      )}

      <section className="container mx-auto max-w-5xl px-4 sm:px-6 py-12">
        <h2 className="font-display text-3xl font-bold">Frequently Asked Questions</h2>
        <div className="mt-6 space-y-3">
          {faqs.map((f) => (
            <details key={f.q} className="group rounded-2xl border border-border bg-surface p-5 open:border-gold/40">
              <summary className="cursor-pointer list-none flex justify-between items-center font-semibold">
                {f.q}
                <Sparkles className="h-4 w-4 text-gold group-open:rotate-45 transition" />
              </summary>
              <p className="mt-3 text-sm text-muted-foreground">{f.a}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="container mx-auto max-w-5xl px-4 sm:px-6 py-16">
        <div className="rounded-3xl card-elevated p-10 text-center relative overflow-hidden">
          <div className="absolute -top-24 left-1/2 -translate-x-1/2 h-64 w-[40rem] rounded-full bg-gold/20 blur-3xl" />
          <h3 className="relative font-display text-3xl font-bold">Ready to grow with {svc.title}?</h3>
          <p className="relative mt-3 text-muted-foreground">Book a free consultation — we'll map out your growth plan in 30 minutes.</p>
          <div className="relative mt-6 flex flex-wrap justify-center gap-3">
            <Link to="/contact" className="inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3 text-sm font-semibold text-gold-foreground glow-gold">Book Free Consultation</Link>
            <a href="tel:+923335858774" className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-6 py-3 text-sm font-semibold hover:border-gold"><Phone className="h-4 w-4" /> Call Now</a>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
