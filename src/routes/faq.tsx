import { createFileRoute } from "@tanstack/react-router";
import { SiteShell } from "@/components/layout/SiteShell";
import { Sparkles } from "lucide-react";

const faqs = [
  {
    q: "How much does Google Ads cost?",
    a: "There's no fixed cost — it depends on your industry, location and competition. We work with budgets starting from as little as £/$ 300/month and scale as ROI grows. During your free consultation we'll recommend an honest starting budget.",
  },
  {
    q: "How long does SEO take?",
    a: "SEO is a long-term play. Most clients see meaningful traction in 3–6 months, with compounding results from month 6 onward. We focus on technical SEO, content and authority building from day one.",
  },
  {
    q: "Do you build websites?",
    a: "Yes. We design and develop premium, conversion-focused websites optimized for speed, SEO and lead generation.",
  },
  {
    q: "Do you manage social media advertising?",
    a: "Absolutely. We run Facebook, Instagram, YouTube and TikTok ad campaigns with full creative, copy and targeting handled in-house.",
  },
  {
    q: "Can you recover suspended Google Ads accounts?",
    a: "Yes. Our suspended-account recovery service has a high success rate. We review your account, fix the violation and submit a proper appeal.",
  },
  {
    q: "How do I get started?",
    a: "Easiest path: book a free audit or chat with us on WhatsApp at +92 333 5858774. We'll review your situation and propose a custom plan within 24 hours.",
  },
];

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "FAQ — Digital Marketing Questions Answered | LeadCore Digital" },
      {
        name: "description",
        content:
          "Frequently asked questions about Google Ads cost, SEO timelines, website design, social media advertising and how to get started with LeadCore Digital.",
      },
      { property: "og:title", content: "FAQ | LeadCore Digital" },
      { property: "og:description", content: "Answers to common digital marketing questions." },
      { property: "og:url", content: "/faq" },
    ],
    links: [{ rel: "canonical", href: "/faq" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }),
      },
    ],
  }),
  component: FAQ,
});

function FAQ() {
  return (
    <SiteShell>
      <section className="container mx-auto max-w-3xl px-4 sm:px-6 pt-20 pb-16">
        <span className="text-xs uppercase tracking-[0.18em] text-gold font-semibold">FAQ</span>
        <h1 className="mt-3 font-display text-4xl sm:text-5xl font-bold">
          Frequently Asked <span className="text-gradient-gold">Questions</span>
        </h1>
        <p className="mt-5 text-lg text-muted-foreground">
          Quick answers to the questions we hear most often.
        </p>
        <div className="mt-12 space-y-3">
          {faqs.map((f) => (
            <details
              key={f.q}
              className="group rounded-2xl border border-border bg-surface p-5 open:border-gold/40"
            >
              <summary className="cursor-pointer list-none flex justify-between items-center font-semibold gap-4">
                {f.q}
                <Sparkles className="h-4 w-4 text-gold group-open:rotate-45 transition shrink-0" />
              </summary>
              <p className="mt-3 text-sm text-muted-foreground">{f.a}</p>
            </details>
          ))}
        </div>
      </section>
    </SiteShell>
  );
}
