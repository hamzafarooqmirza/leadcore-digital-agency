import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteShell } from "@/components/layout/SiteShell";
import { industries } from "@/lib/site";
import { ArrowRight, Building2 } from "lucide-react";

export const Route = createFileRoute("/industries")({
  head: () => ({
    meta: [
      { title: "Industries We Serve | LeadCore Digital" },
      { name: "description", content: "We help cleaning companies, car recovery, real estate, AC repair, auto repair, e-commerce, healthcare and more grow with digital marketing." },
      { property: "og:title", content: "Industries We Serve" },
      { property: "og:description", content: "Digital marketing specialists across high-intent service verticals." },
      { property: "og:url", content: "/industries" },
    ],
    links: [{ rel: "canonical", href: "/industries" }],
  }),
  component: Industries,
});

function Industries() {
  return (
    <SiteShell>
      <section className="container mx-auto max-w-7xl px-4 sm:px-6 pt-20 pb-10">
        <span className="text-xs uppercase tracking-[0.18em] text-gold font-semibold">Industries</span>
        <h1 className="mt-3 font-display text-4xl sm:text-5xl font-bold">
          Industries We <span className="text-gradient-gold">Serve</span>
        </h1>
        <p className="mt-5 text-lg text-muted-foreground max-w-2xl">
          Deep expertise across high-intent service businesses. We know what works in your vertical.
        </p>
      </section>

      <section className="container mx-auto max-w-7xl px-4 sm:px-6 pb-20">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {industries.map((ind) => (
            <div key={ind} className="card-elevated rounded-2xl p-6 hover:border-gold/60 transition">
              <Building2 className="h-6 w-6 text-gold" />
              <h3 className="mt-4 font-display text-lg font-semibold">{ind}</h3>
              <p className="mt-1 text-sm text-muted-foreground">
                Custom lead-generation strategies tailored for the {ind.toLowerCase()} market.
              </p>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Link to="/contact" className="inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3 text-sm font-semibold text-gold-foreground glow-gold">
            Discuss Your Industry <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </SiteShell>
  );
}
