import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { getServiceBrand } from "./ServiceBrandIcon";
import { getServiceBg } from "./ServiceBackgrounds";

type Props = {
  slug: string;
  title: string;
  short: string;
};

export function ServiceCard({ slug, title, short }: Props) {
  const { Mark, tint } = getServiceBrand(slug);
  const Bg = getServiceBg(slug);
  return (
    <Link
      to="/services/$slug"
      params={{ slug }}
      className="group relative overflow-hidden card-elevated rounded-2xl p-6 hover:border-gold/60 hover:-translate-y-1 transition-all duration-300"
    >
      {/* Service-specific background illustration */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center text-gold opacity-[0.10] group-hover:opacity-[0.16] blur-[1.5px] group-hover:blur-[0.5px] transition-all duration-500">
        <Bg className="w-[115%] h-[115%]" />
      </div>

      {/* Decorative gradient backdrop */}
      <div className={`pointer-events-none absolute -top-16 -right-16 h-44 w-44 rounded-full bg-gradient-to-br ${tint} blur-2xl opacity-70 group-hover:opacity-100 transition-opacity`} />

      {/* Subtle grid pattern */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04] group-hover:opacity-[0.07] transition-opacity"
        style={{
          backgroundImage:
            "linear-gradient(currentColor 1px, transparent 1px), linear-gradient(90deg, currentColor 1px, transparent 1px)",
          backgroundSize: "22px 22px",
        }}
      />

      {/* Readability scrim */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/85 via-background/50 to-background/30" />

      <div className="relative">
        <div className="h-16 w-16 rounded-2xl bg-background/80 backdrop-blur border border-border shadow-sm flex items-center justify-center group-hover:border-gold/50 group-hover:shadow-[0_8px_30px_-12px_rgba(212,175,55,0.45)] transition-all">
          <Mark className="h-9 w-9" />
        </div>

        <h3 className="mt-6 font-display text-lg font-semibold leading-snug">{title}</h3>
        <p className="mt-2 text-sm text-muted-foreground">{short}</p>

        <div className="mt-6 inline-flex items-center gap-1.5 text-xs font-semibold text-gold">
          Learn more
          <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
        </div>
      </div>
    </Link>
  );
}
