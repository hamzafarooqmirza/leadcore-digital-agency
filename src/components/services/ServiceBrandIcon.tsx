import type * as React from "react";
import {
  Search, MonitorSmartphone, LineChart, ShoppingBag,
  Users, PhoneCall, ShieldCheck, Sparkles,
} from "lucide-react";

type IconProps = { className?: string };

/* ---------- Brand SVG marks (simplified, recognizable) ---------- */

export function GoogleAdsMark({ className }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden>
      <path fill="#FBBC04" d="M6.5 33.5 19.8 10.5a4 4 0 1 1 6.93 4l-13.3 23a4 4 0 1 1-6.93-4z"/>
      <path fill="#4285F4" d="M28.2 14.5a4 4 0 0 1 5.46-1.47l7.5 4.33a4 4 0 0 1 1.47 5.46l-13.3 23a4 4 0 0 1-6.93-4z"/>
      <circle fill="#34A853" cx="11" cy="37" r="5.5"/>
    </svg>
  );
}

export function GoogleBusinessMark({ className }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden>
      <path fill="#4285F4" d="M24 4c-7.5 0-13.5 6-13.5 13.5C10.5 30 24 44 24 44s13.5-14 13.5-26.5C37.5 10 31.5 4 24 4z"/>
      <circle cx="24" cy="17.5" r="5.5" fill="#fff"/>
    </svg>
  );
}

export function FacebookMark({ className }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden>
      <path fill="#1877F2" d="M44 24c0-11-9-20-20-20S4 13 4 24c0 10 7.3 18.2 16.8 19.8V29.8H15.8V24h5V19.5c0-5 3-7.7 7.5-7.7 2.2 0 4.5.4 4.5.4v5h-2.5c-2.5 0-3.3 1.5-3.3 3.1V24h5.6l-.9 5.8h-4.7V43.8C36.7 42.2 44 34 44 24z"/>
    </svg>
  );
}

export function InstagramMark({ className }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden>
      <defs>
        <linearGradient id="ig-grad" x1="0" y1="44" x2="44" y2="0">
          <stop offset="0" stopColor="#FEDA77"/>
          <stop offset=".25" stopColor="#F58529"/>
          <stop offset=".5" stopColor="#DD2A7B"/>
          <stop offset=".75" stopColor="#8134AF"/>
          <stop offset="1" stopColor="#515BD4"/>
        </linearGradient>
      </defs>
      <rect x="4" y="4" width="40" height="40" rx="10" fill="url(#ig-grad)"/>
      <circle cx="24" cy="24" r="8" fill="none" stroke="#fff" strokeWidth="3"/>
      <circle cx="34" cy="14" r="2.5" fill="#fff"/>
    </svg>
  );
}

export function YoutubeMark({ className }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden>
      <rect x="3" y="10" width="42" height="28" rx="7" fill="#FF0000"/>
      <path d="M20 18l12 6-12 6z" fill="#fff"/>
    </svg>
  );
}

export function GoogleShoppingMark({ className }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden>
      <path fill="#FBBC04" d="M10 16h28l-3 22a4 4 0 0 1-4 3.5H17a4 4 0 0 1-4-3.5z"/>
      <path d="M17 18v-4a7 7 0 0 1 14 0v4" fill="none" stroke="#34A853" strokeWidth="3" strokeLinecap="round"/>
      <circle cx="19" cy="26" r="2.2" fill="#4285F4"/>
      <circle cx="29" cy="26" r="2.2" fill="#EA4335"/>
    </svg>
  );
}

export function PerformanceMaxMark({ className }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden>
      <circle cx="24" cy="24" r="20" fill="none" stroke="#4285F4" strokeWidth="3"/>
      <circle cx="24" cy="24" r="13" fill="none" stroke="#34A853" strokeWidth="3"/>
      <circle cx="24" cy="24" r="6" fill="#FBBC04"/>
      <path d="M24 4v8M24 36v8M4 24h8M36 24h8" stroke="#EA4335" strokeWidth="3" strokeLinecap="round"/>
    </svg>
  );
}

/* ---------- Mapping ---------- */

type Brand = { Mark: (p: IconProps) => React.ReactElement; tint: string };

export const serviceBrand: Record<string, Brand> = {
  "google-ads-management":               { Mark: GoogleAdsMark,        tint: "from-[#4285F4]/15 to-[#FBBC04]/15" },
  "google-my-business-optimization":     { Mark: GoogleBusinessMark,   tint: "from-[#4285F4]/15 to-[#34A853]/15" },
  "website-design-development":          { Mark: (p) => <MonitorSmartphone {...p} />, tint: "from-gold/15 to-[#4285F4]/10" },
  "seo":                                 { Mark: (p) => <Search {...p} />, tint: "from-[#34A853]/15 to-gold/10" },
  "facebook-ads-management":             { Mark: FacebookMark,         tint: "from-[#1877F2]/20 to-[#1877F2]/5" },
  "instagram-ads-management":            { Mark: InstagramMark,        tint: "from-[#DD2A7B]/15 to-[#F58529]/15" },
  "youtube-ads-management":              { Mark: YoutubeMark,          tint: "from-[#FF0000]/15 to-[#FF0000]/5" },
  "ppc-management":                      { Mark: (p) => <LineChart {...p} />, tint: "from-gold/15 to-[#34A853]/10" },
  "google-conversion-tracking":          { Mark: (p) => <LineChart {...p} />, tint: "from-[#4285F4]/15 to-[#FBBC04]/10" },
  "performance-max-campaigns":           { Mark: PerformanceMaxMark,   tint: "from-[#4285F4]/15 to-[#EA4335]/10" },
  "shopping-ads-management":             { Mark: GoogleShoppingMark,   tint: "from-[#FBBC04]/20 to-[#34A853]/10" },
  "lead-generation-campaigns":           { Mark: (p) => <Users {...p} />, tint: "from-gold/20 to-gold/5" },
  "call-generation-campaigns":           { Mark: (p) => <PhoneCall {...p} />, tint: "from-[#34A853]/20 to-gold/10" },
  "google-ads-suspended-account-recovery": { Mark: (p) => <ShieldCheck {...p} />, tint: "from-[#EA4335]/15 to-gold/10" },
};

export function getServiceBrand(slug: string): Brand {
  return serviceBrand[slug] ?? { Mark: (p) => <Sparkles {...p} />, tint: "from-gold/15 to-gold/5" };
}
