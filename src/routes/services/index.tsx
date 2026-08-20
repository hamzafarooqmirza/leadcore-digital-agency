import { createFileRoute } from "@tanstack/react-router";
import { SiteShell } from "@/components/layout/SiteShell";
import { services } from "@/lib/site";
import { ServiceCard } from "@/components/services/ServiceCard";

export const Route = createFileRoute("/services/")({
  head: () => ({
    meta: [
      { title: "Digital Marketing Services — Google Ads, SEO & More | LeadCore Digital" },
      { name: "description", content: "Explore our digital marketing services: Google Ads, SEO, web design, Facebook & Instagram ads, lead generation, PPC and conversion tracking." },
      { property: "og:title", content: "Services — LeadCore Digital" },
      { property: "og:description", content: "End-to-end digital marketing services built to drive measurable growth." },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: ServicesIndex,
});

function ServicesIndex() {
  return (
    <SiteShell>
      <section className="container mx-auto max-w-7xl px-4 sm:px-6 pt-20 pb-10">
        <span className="text-xs uppercase tracking-[0.18em] text-gold font-semibold">Services</span>
        <h1 className="mt-3 font-display text-4xl sm:text-5xl font-bold">
          Marketing Services That <span className="text-gradient-gold">Drive Growth</span>
        </h1>
        <p className="mt-5 text-lg text-muted-foreground max-w-2xl">
          From paid ads to SEO to high-converting websites — pick the engine you need or combine them for compounding results.
        </p>
      </section>

      <section className="container mx-auto max-w-7xl px-4 sm:px-6 pb-20">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s) => (
            <ServiceCard key={s.slug} slug={s.slug} title={s.title} short={s.short} />
          ))}
        </div>
      </section>
    </SiteShell>
  );
}
