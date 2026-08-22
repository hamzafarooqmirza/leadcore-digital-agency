import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteShell } from "@/components/layout/SiteShell";
import { services, industries, whatsappUrl, site } from "@/lib/site";
import { adsResults } from "@/lib/results";
import { ResultsGallery } from "@/components/results/ResultsGallery";
import { ServiceCard } from "@/components/services/ServiceCard";
import {
  ArrowRight,
  Phone,
  MessageCircle,
  BadgeCheck,
  BarChart3,
  Target,
  Rocket,
  Globe,
  Search,
  MousePointerClick,
  Megaphone,
  ShoppingBag,
  PhoneCall,
  LineChart,
  ShieldCheck,
  Sparkles,
  Star,
  CheckCircle2,
  Zap,
  Users,
  TrendingUp,
  type LucideIcon,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "LeadCore Digital — Grow Your Business With Data-Driven Marketing" },
      {
        name: "description",
        content:
          "Generate more leads, calls and sales with Google Ads, SEO, web design, conversion tracking and social media marketing by LeadCore Digital.",
      },
      {
        property: "og:title",
        content: "LeadCore Digital — Your Growth Partner In Digital Marketing",
      },
      {
        property: "og:description",
        content:
          "Generate more leads, calls and sales with Google Ads, SEO, web design and social media marketing.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

const serviceIcons: Record<string, LucideIcon> = {
  "google-ads-management": Target,
  "google-my-business-optimization": Globe,
  "website-design-development": MousePointerClick,
  seo: Search,
  "facebook-ads-management": Megaphone,
  "instagram-ads-management": Sparkles,
  "youtube-ads-management": Rocket,
  "ppc-management": BarChart3,
  "google-conversion-tracking": LineChart,
  "performance-max-campaigns": Zap,
  "shopping-ads-management": ShoppingBag,
  "lead-generation-campaigns": Users,
  "call-generation-campaigns": PhoneCall,
  "google-ads-suspended-account-recovery": ShieldCheck,
};

function Home() {
  return (
    <SiteShell>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background" />
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 pt-20 pb-24 lg:pt-28 lg:pb-32 relative">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-3 py-1 text-xs font-medium text-gold">
              <Sparkles className="h-3 w-3" /> Certified Google Ads Specialists
            </span>
            <h1 className="mt-6 font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.05]">
              Grow Your Business With <span className="text-gradient-gold">Data-Driven</span>{" "}
              Digital Marketing
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-2xl">
              LeadCore Digital helps businesses generate more leads, calls and sales through Google
              Ads, SEO, Website Design, Conversion Tracking and Social Media Marketing.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3 text-sm font-semibold text-gold-foreground hover:brightness-110 transition glow-gold"
              >
                Get Free Consultation
                <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href={whatsappUrl()}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-6 py-3 text-sm font-semibold text-foreground hover:border-gold transition"
              >
                <MessageCircle className="h-4 w-4" /> Chat On WhatsApp
              </a>
            </div>
            <div className="mt-8 flex items-center gap-2 text-sm text-muted-foreground">
              <div className="flex">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-gold text-gold" />
                ))}
              </div>
              Trusted by 100+ businesses across Pakistan, UK & UAE
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 pb-16 relative">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { v: "100+", l: "Happy Clients" },
              { v: "500+", l: "Campaigns Managed" },
              { v: "1M+", l: "Ad Impressions Generated" },
              { v: "95%", l: "Client Satisfaction" },
            ].map((s) => (
              <div key={s.l} className="card-elevated rounded-2xl p-6 text-center">
                <div className="text-3xl lg:text-4xl font-display font-bold text-gradient-gold">
                  {s.v}
                </div>
                <div className="mt-2 text-xs uppercase tracking-wider text-muted-foreground">
                  {s.l}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="container mx-auto max-w-7xl px-4 sm:px-6 py-20">
        <SectionHead
          eyebrow="Our Services"
          title="Premium Marketing Built To Convert"
          desc="End-to-end digital marketing services engineered to drive measurable growth for your business."
        />
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s) => (
            <ServiceCard key={s.slug} slug={s.slug} title={s.title} short={s.short} />
          ))}
        </div>
      </section>

      {/* WHY US */}
      <section className="bg-surface border-y border-border">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 py-20">
          <SectionHead
            eyebrow="Why Choose Us"
            title="A Growth Partner You Can Trust"
            desc="We don't sell impressions — we deliver leads, calls and revenue."
          />
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {(
              [
                ["Certified Experts", "Google-certified marketing specialists.", BadgeCheck],
                ["Transparent Reporting", "Weekly reports with real numbers.", LineChart],
                ["ROI Focused", "Every campaign tuned for return.", TrendingUp],
                ["Google Ads Specialists", "Deep PPC & Performance Max expertise.", Target],
                ["Lead Generation Experts", "Proven lead funnels across niches.", Users],
                ["Fast Support", "Response within hours, not days.", Zap],
                ["Custom Strategies", "No copy-paste. Built for your business.", Sparkles],
                ["Affordable Solutions", "Premium results at honest prices.", ShieldCheck],
              ] satisfies [string, string, LucideIcon][]
            ).map(([t, d, I]) => (
              <div key={t} className="rounded-2xl p-5 bg-background/40 border border-border">
                <I className="h-5 w-5 text-gold" />
                <div className="mt-3 font-semibold">{t}</div>
                <p className="mt-1 text-sm text-muted-foreground">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* REAL GOOGLE ADS RESULTS */}
      <section id="results" className="container mx-auto max-w-7xl px-4 sm:px-6 py-20">
        <SectionHead
          eyebrow="Proof Of Performance"
          title="Real Google Ads Results"
          desc="See actual campaign performance, lead generation results, and advertising success achieved for businesses through our digital marketing strategies."
        />
        <div className="mt-12">
          <ResultsGallery items={adsResults.slice(0, 6)} columns={3} />
        </div>
        <div className="mt-10 text-center">
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/10 px-6 py-3 text-sm font-semibold text-gold hover:bg-gold hover:text-gold-foreground transition"
          >
            View All Case Studies <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* PROCESS */}
      <section className="bg-surface border-y border-border">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 py-20">
          <SectionHead
            eyebrow="Our Process"
            title="From Strategy To Scale"
            desc="A proven five-step framework we apply to every client engagement."
          />
          <ol className="mt-12 grid md:grid-cols-5 gap-4">
            {[
              "Business Analysis",
              "Strategy Planning",
              "Campaign Setup",
              "Optimization",
              "Reporting & Growth",
            ].map((step, i) => (
              <li
                key={step}
                className="relative rounded-2xl p-6 bg-background/40 border border-border"
              >
                <div className="text-xs font-mono text-gold">
                  STEP {String(i + 1).padStart(2, "0")}
                </div>
                <div className="mt-2 font-display font-semibold">{step}</div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* INDUSTRIES */}
      <section className="container mx-auto max-w-7xl px-4 sm:px-6 py-20">
        <SectionHead
          eyebrow="Industries We Serve"
          title="Specialists Across High-Intent Verticals"
          desc="We have a track record of generating leads across these industries."
        />
        <div className="mt-10 flex flex-wrap gap-3">
          {industries.map((ind) => (
            <span
              key={ind}
              className="rounded-full border border-border bg-surface px-4 py-2 text-sm text-muted-foreground hover:border-gold hover:text-gold transition"
            >
              {ind}
            </span>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-surface border-y border-border">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 py-20">
          <SectionHead
            eyebrow="Testimonials"
            title="What Our Clients Say"
            desc="Real stories from business owners who trusted LeadCore Digital."
          />
          <div className="mt-12 grid md:grid-cols-3 gap-5">
            {[
              {
                n: "James M.",
                b: "ResQ Tyres, UK",
                q: "LeadCore Digital transformed our Google Ads. We went from a handful of calls to 160+ in a single day.",
              },
              {
                n: "Sara A.",
                b: "Bright Clean Co.",
                q: "Transparent reporting, fast support and real results. Our cost per lead dropped 60% in 2 months.",
              },
              {
                n: "Hassan K.",
                b: "Premier Recovery",
                q: "Best agency we've worked with. Their PPC and call-tracking setup is next level.",
              },
            ].map((t) => (
              <div key={t.n} className="card-elevated rounded-2xl p-6">
                <div className="flex gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-gold text-gold" />
                  ))}
                </div>
                <p className="mt-4 text-sm text-foreground">"{t.q}"</p>
                <div className="mt-5 text-sm">
                  <div className="font-semibold">{t.n}</div>
                  <div className="text-muted-foreground">{t.b}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container mx-auto max-w-7xl px-4 sm:px-6 py-20">
        <div className="relative overflow-hidden rounded-3xl card-elevated p-10 lg:p-14 text-center">
          <div className="absolute -top-24 left-1/2 -translate-x-1/2 h-64 w-[40rem] rounded-full bg-gold/20 blur-3xl" />
          <div className="relative">
            <h2 className="font-display text-3xl sm:text-4xl font-bold">
              Ready to <span className="text-gradient-gold">scale your business?</span>
            </h2>
            <p className="mt-3 text-muted-foreground max-w-xl mx-auto">
              Get a free, no-obligation audit of your Google Ads, SEO and website — and discover how
              many more leads you could be generating.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Link
                to="/audit"
                className="inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3 text-sm font-semibold text-gold-foreground hover:brightness-110 glow-gold"
              >
                Get Your Free Audit <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href={`tel:${site.phoneRaw}`}
                className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-6 py-3 text-sm font-semibold hover:border-gold"
              >
                <Phone className="h-4 w-4" /> Call Now
              </a>
            </div>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}

export function SectionHead({
  eyebrow,
  title,
  desc,
}: {
  eyebrow: string;
  title: string;
  desc?: string;
}) {
  return (
    <div className="max-w-2xl">
      <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-gold">
        <span className="h-px w-8 bg-gold/60" /> {eyebrow}
      </div>
      <h2 className="mt-3 font-display text-3xl sm:text-4xl font-bold">{title}</h2>
      {desc && <p className="mt-3 text-muted-foreground">{desc}</p>}
    </div>
  );
}
