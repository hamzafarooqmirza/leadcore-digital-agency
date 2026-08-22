import { Link } from "@tanstack/react-router";
import { LogoMark } from "@/components/layout/LogoMark";

export function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <Link to="/" className="flex items-center gap-3 group">
      <LogoMark className="h-9 w-9 shrink-0 transition-transform group-hover:scale-105" />
      {!compact && (
        <div className="leading-tight">
          <div className="font-display font-bold text-base tracking-tight">
            LEADCORE <span className="text-gold">DIGITAL</span>
          </div>
          <div className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
            Digital Marketing Agency
          </div>
        </div>
      )}
    </Link>
  );
}
