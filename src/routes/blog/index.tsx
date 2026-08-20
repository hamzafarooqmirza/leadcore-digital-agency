import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteShell } from "@/components/layout/SiteShell";
import { ArrowRight, Calendar } from "lucide-react";

export const Route = createFileRoute("/blog/")({
  head: () => ({
    meta: [
      { title: "Digital Marketing Blog | LeadCore Digital" },
      { name: "description", content: "Insights, guides and case studies on Google Ads, SEO, web design, PPC and lead generation from LeadCore Digital." },
      { property: "og:title", content: "LeadCore Digital Blog" },
      { property: "og:description", content: "Actionable digital marketing insights and tutorials." },
      { property: "og:url", content: "/blog" },
    ],
    links: [{ rel: "canonical", href: "/blog" }],
  }),
  component: Blog,
});

const posts = [
  { slug: "google-ads-2026-guide", title: "The Complete Google Ads Guide For 2026", cat: "Google Ads", date: "May 28, 2026", excerpt: "Everything you need to know to launch profitable Google Ads campaigns in 2026." },
  { slug: "seo-fundamentals", title: "SEO Fundamentals Every Business Owner Must Know", cat: "SEO", date: "May 22, 2026", excerpt: "The non-negotiable SEO basics that drive long-term organic traffic." },
  { slug: "high-converting-websites", title: "10 Principles Of High-Converting Websites", cat: "Website Design", date: "May 15, 2026", excerpt: "What separates a website that sells from one that sits." },
  { slug: "facebook-ads-mastery", title: "Facebook Ads Mastery: Targeting In 2026", cat: "Facebook Ads", date: "May 10, 2026", excerpt: "How to find your perfect audience after iOS privacy changes." },
  { slug: "lead-gen-funnels", title: "Building Lead Generation Funnels That Print Money", cat: "Lead Generation", date: "May 4, 2026", excerpt: "The funnel architecture we use for 8-figure clients." },
  { slug: "ppc-budget-allocation", title: "PPC Budget Allocation: The 70/20/10 Rule", cat: "PPC Management", date: "Apr 28, 2026", excerpt: "How to split your paid media budget for maximum ROI." },
  { slug: "gmb-optimization", title: "Google My Business: The Ultimate Local SEO Hack", cat: "SEO", date: "Apr 21, 2026", excerpt: "Why GMB is the #1 lever for local service businesses." },
  { slug: "conversion-tracking", title: "Conversion Tracking: If You Can't Measure It, You Can't Scale It", cat: "Google Ads", date: "Apr 15, 2026", excerpt: "Setup guide for proper Google Ads conversion tracking." },
  { slug: "instagram-creative", title: "Instagram Ads: Creative That Stops The Scroll", cat: "Facebook Ads", date: "Apr 9, 2026", excerpt: "The creative frameworks behind our best-performing IG ads." },
  { slug: "performance-max", title: "Performance Max: The Pros, Cons & How To Win", cat: "Google Ads", date: "Apr 2, 2026", excerpt: "Honest take on Google's PMax campaigns from real account data." },
];

function Blog() {
  return (
    <SiteShell>
      <section className="container mx-auto max-w-7xl px-4 sm:px-6 pt-20 pb-10">
        <span className="text-xs uppercase tracking-[0.18em] text-gold font-semibold">Blog</span>
        <h1 className="mt-3 font-display text-4xl sm:text-5xl font-bold">
          Insights To <span className="text-gradient-gold">Grow Faster</span>
        </h1>
        <p className="mt-5 text-lg text-muted-foreground max-w-2xl">
          Actionable digital marketing tactics, frameworks and case studies — straight from our team.
        </p>
      </section>

      <section className="container mx-auto max-w-7xl px-4 sm:px-6 pb-20">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {posts.map((p) => (
            <Link
              key={p.slug}
              to="/blog/$slug"
              params={{ slug: p.slug }}
              className="group card-elevated rounded-2xl p-6 hover:border-gold/60 transition"
            >
              <div className="flex items-center gap-3 text-xs">
                <span className="rounded-full bg-gold/10 text-gold border border-gold/20 px-2.5 py-0.5">{p.cat}</span>
                <span className="text-muted-foreground flex items-center gap-1"><Calendar className="h-3 w-3" /> {p.date}</span>
              </div>
              <h3 className="mt-4 font-display text-lg font-semibold group-hover:text-gold transition">{p.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{p.excerpt}</p>
              <div className="mt-5 inline-flex items-center gap-1 text-xs font-semibold text-gold">
                Read article <ArrowRight className="h-3 w-3" />
              </div>
            </Link>
          ))}
        </div>
      </section>
    </SiteShell>
  );
}
