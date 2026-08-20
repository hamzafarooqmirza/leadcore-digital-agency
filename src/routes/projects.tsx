import { createFileRoute } from "@tanstack/react-router";
import { SiteShell } from "@/components/layout/SiteShell";
import { ResultsGallery } from "@/components/results/ResultsGallery";
import { adsResults } from "@/lib/results";
import { ProjectsGrid } from "@/components/projects/ProjectsGrid";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects & Client Case Studies | LeadCore Digital" },
      { name: "description", content: "Explore LeadCore Digital's portfolio — Google Ads, PPC, Lead Generation and Performance Max case studies with real client results and metrics." },
      { property: "og:title", content: "Projects | LeadCore Digital" },
      { property: "og:description", content: "Premium portfolio of digital marketing projects delivering measurable results for international clients." },
      { property: "og:url", content: "/projects" },
    ],
    links: [{ rel: "canonical", href: "/projects" }],
  }),
  component: Projects,
});

function Projects() {
  return (
    <SiteShell>
      <section className="container mx-auto max-w-7xl px-4 sm:px-6 pt-20 pb-10">
        <span className="text-xs uppercase tracking-[0.18em] text-gold font-semibold">Portfolio</span>
        <h1 className="mt-3 font-display text-4xl sm:text-5xl font-bold">
          Featured <span className="text-gradient-gold">Client Projects</span>
        </h1>
        <p className="mt-5 text-lg text-muted-foreground max-w-2xl">
          A curated look at real campaigns we've built and scaled — every project below is a live client account with verified performance data.
        </p>
      </section>

      <section className="container mx-auto max-w-7xl px-4 sm:px-6 pb-16">
        <ProjectsGrid />
      </section>

      <section className="container mx-auto max-w-7xl px-4 sm:px-6 pb-20">
        <div className="mb-8">
          <span className="text-xs uppercase tracking-[0.18em] text-gold font-semibold">Proof Of Performance</span>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl font-bold">Additional Google Ads Results</h2>
          <p className="mt-3 text-muted-foreground max-w-2xl">
            More campaign screenshots from live client accounts — calls generated, cost per lead and campaign efficiency.
          </p>
        </div>
        <ResultsGallery items={adsResults} columns={3} />
      </section>
    </SiteShell>
  );
}
