import { projects, type ProjectItem } from "@/lib/projects";
import { ArrowRight, MapPin, Tag } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { whatsappUrl } from "@/lib/site";
import { CampaignVisual } from "@/components/visuals/CampaignVisual";

export function ProjectsGrid({ items = projects }: { items?: ProjectItem[] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {items.map((p) => (
        <ProjectCard key={p.id} project={p} />
      ))}
    </div>
  );
}

function ProjectCard({ project }: { project: ProjectItem }) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-xl border border-border bg-card shadow-[0_10px_40px_-15px_rgba(0,0,0,0.6)] transition-all duration-300 hover:-translate-y-1 hover:border-gold/60 hover:shadow-[0_20px_60px_-15px_rgba(212,175,55,0.35)]">
      {/* Thumbnail — fixed aspect for equal card heights */}
      <div className="relative aspect-[16/9] w-full overflow-hidden bg-surface border-b border-border">
        <CampaignVisual
          seed={project.seed}
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
        />
        <div className="absolute top-3 left-3 inline-flex items-center gap-1.5 rounded-full bg-background/85 backdrop-blur px-3 py-1 text-[11px] font-semibold text-gold border border-gold/30">
          <Tag className="h-3 w-3" /> {project.category}
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-center gap-1.5 text-[11px] uppercase tracking-wider text-muted-foreground">
          <MapPin className="h-3 w-3 text-gold" /> {project.market}
        </div>
        <h3 className="mt-2 font-display text-lg font-semibold leading-snug min-h-[3.5rem]">
          {project.title}
        </h3>
        <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{project.description}</p>

        {/* Metrics */}
        <div className="mt-5 grid grid-cols-2 gap-2">
          {project.metrics.map((m) => (
            <div
              key={m.label}
              className="rounded-lg border border-border bg-background/40 px-3 py-2"
            >
              <div className="text-[10px] uppercase tracking-wider text-muted-foreground">
                {m.label}
              </div>
              <div className="mt-0.5 font-display text-base font-bold text-gold">{m.value}</div>
            </div>
          ))}
        </div>

        {/* Tags */}
        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.tags.map((t) => (
            <span
              key={t}
              className="rounded-full border border-border bg-surface px-2.5 py-0.5 text-[11px] text-muted-foreground"
            >
              {t}
            </span>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-6 flex-1" />
        <Link
          to="/contact"
          className="mt-2 inline-flex items-center justify-center gap-2 rounded-lg border border-gold/40 bg-gold/10 px-4 py-2.5 text-sm font-semibold text-gold transition-all hover:bg-gold hover:text-background"
          aria-label={`View project: ${project.title}`}
        >
          View Project
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </article>
  );
}

export { whatsappUrl };
