import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteShell } from "@/components/layout/SiteShell";
import { SectionHead } from "./index";
import { ArrowRight, Award, Target, Users, TrendingUp } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About LeadCore Digital — Our Story & Mission" },
      {
        name: "description",
        content:
          "Learn about LeadCore Digital, a results-driven digital marketing agency helping businesses grow through Google Ads, SEO and conversion-focused websites.",
      },
      { property: "og:title", content: "About LeadCore Digital" },
      {
        property: "og:description",
        content: "We help businesses grow locally and globally with data-driven digital marketing.",
      },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: About,
});

function About() {
  return (
    <SiteShell>
      <section className="container mx-auto max-w-5xl px-4 sm:px-6 pt-20 pb-12">
        <span className="text-xs uppercase tracking-[0.18em] text-gold font-semibold">
          About Us
        </span>
        <h1 className="mt-3 font-display text-4xl sm:text-5xl font-bold leading-tight">
          We Build Marketing Engines That{" "}
          <span className="text-gradient-gold">Generate Real Revenue</span>
        </h1>
        <p className="mt-6 text-lg text-muted-foreground">
          LeadCore Digital is a premium digital marketing agency helping businesses across Pakistan,
          UK, UAE and beyond grow through Google Ads, SEO, conversion-focused websites and
          high-performance lead generation campaigns.
        </p>
      </section>

      <section className="container mx-auto max-w-5xl px-4 sm:px-6 py-12 grid md:grid-cols-2 gap-6">
        {[
          {
            I: Target,
            t: "Our Mission",
            d: "Help every business we work with generate more leads, calls and sales — predictably and profitably.",
          },
          {
            I: Award,
            t: "Our Values",
            d: "Transparency, accountability and obsession with ROI. We treat your budget like our own.",
          },
          {
            I: Users,
            t: "Our Team",
            d: "Google-certified strategists, copywriters, designers and developers working as one extension of your business.",
          },
          {
            I: TrendingUp,
            t: "Our Promise",
            d: "Real results, weekly reports and a partner who actually picks up the phone.",
          },
        ].map((c) => (
          <div key={c.t} className="card-elevated rounded-2xl p-6">
            <c.I className="h-6 w-6 text-gold" />
            <h3 className="mt-4 font-display text-xl font-semibold">{c.t}</h3>
            <p className="mt-2 text-muted-foreground">{c.d}</p>
          </div>
        ))}
      </section>

      <section className="container mx-auto max-w-5xl px-4 sm:px-6 py-20">
        <SectionHead eyebrow="By The Numbers" title="A Track Record That Speaks" />
        <div className="mt-10 grid grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            ["100+", "Happy Clients"],
            ["500+", "Campaigns Managed"],
            ["1M+", "Ad Impressions"],
            ["95%", "Satisfaction"],
          ].map(([v, l]) => (
            <div key={l} className="card-elevated rounded-2xl p-6 text-center">
              <div className="text-3xl font-display font-bold text-gradient-gold">{v}</div>
              <div className="mt-2 text-xs uppercase tracking-wider text-muted-foreground">{l}</div>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3 text-sm font-semibold text-gold-foreground hover:brightness-110 glow-gold"
          >
            Work With Us <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </SiteShell>
  );
}
