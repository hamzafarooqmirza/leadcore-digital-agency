import { adsResults, type ResultItem } from "@/lib/results";
import { TrendingUp } from "lucide-react";

export function ResultsGallery({
  items = adsResults,
  columns = 3,
}: {
  items?: ResultItem[];
  columns?: 2 | 3 | 4;
}) {
  const gridCols =
    columns === 2 ? "md:grid-cols-2" : columns === 4 ? "md:grid-cols-2 lg:grid-cols-4" : "md:grid-cols-2 lg:grid-cols-3";
  return (
    <div className={`grid ${gridCols} gap-6`}>
      {items.map((r) => (
        <ResultCard key={r.src} item={r} />
      ))}
    </div>
  );
}

export function ResultCard({ item }: { item: ResultItem }) {
  return (
    <figure className="group card-elevated rounded-2xl overflow-hidden flex flex-col hover:border-gold/60 hover:-translate-y-0.5 transition">
      <div className="relative bg-surface border-b border-border p-3 flex items-center justify-center">
        <img
          src={item.src}
          alt={item.headline}
          loading="lazy"
          className="max-h-[420px] w-full h-auto object-contain"
        />
        <div className="absolute top-3 left-3 inline-flex items-center gap-1.5 rounded-full bg-background/85 backdrop-blur px-3 py-1 text-xs font-semibold text-gold border border-gold/30">
          <TrendingUp className="h-3 w-3" /> {item.metric}
        </div>
      </div>
      <figcaption className="p-5 flex-1 flex flex-col">
        <h3 className="font-display text-lg font-semibold">{item.headline}</h3>
        <p className="mt-2 text-sm text-muted-foreground flex-1">{item.description}</p>
        <div className="mt-4 flex flex-wrap gap-1.5">
          {item.tags.map((t) => (
            <span key={t} className="rounded-full border border-border bg-surface px-2.5 py-0.5 text-[11px] text-muted-foreground">
              {t}
            </span>
          ))}
        </div>
      </figcaption>
    </figure>
  );
}
