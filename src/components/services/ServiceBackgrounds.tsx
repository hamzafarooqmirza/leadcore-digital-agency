import type * as React from "react";
/* Subtle, service-specific SVG background illustrations.
   Rendered at low opacity + blur behind card content. */

type Props = { className?: string };

const STROKE = "currentColor";

/* Google Ads / PPC / Performance Max — dashboard with bar chart + line */
export function BgDashboard({ className }: Props) {
  return (
    <svg viewBox="0 0 400 260" className={className} aria-hidden>
      <rect
        x="20"
        y="20"
        width="360"
        height="220"
        rx="14"
        fill="none"
        stroke={STROKE}
        strokeWidth="1.5"
      />
      <line x1="20" y1="60" x2="380" y2="60" stroke={STROKE} strokeWidth="1" />
      <circle cx="38" cy="40" r="4" fill={STROKE} />
      <circle cx="52" cy="40" r="4" fill={STROKE} />
      <circle cx="66" cy="40" r="4" fill={STROKE} />
      {[0, 1, 2, 3, 4, 5, 6].map((i) => (
        <rect
          key={i}
          x={50 + i * 42}
          y={200 - (20 + (i % 3) * 30 + ((i * 7) % 40))}
          width="22"
          height={20 + (i % 3) * 30 + ((i * 7) % 40)}
          rx="3"
          fill={STROKE}
          opacity="0.55"
        />
      ))}
      <polyline
        points="50,150 92,120 134,135 176,90 218,105 260,70 302,80 344,50"
        fill="none"
        stroke={STROKE}
        strokeWidth="2"
      />
      {[
        [50, 150],
        [92, 120],
        [134, 135],
        [176, 90],
        [218, 105],
        [260, 70],
        [302, 80],
        [344, 50],
      ].map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r="3" fill={STROKE} />
      ))}
    </svg>
  );
}

/* SEO — ranking chart with magnifier */
export function BgSeo({ className }: Props) {
  return (
    <svg viewBox="0 0 400 260" className={className} aria-hidden>
      <polyline
        points="30,210 90,180 150,190 210,140 270,120 330,70 380,55"
        fill="none"
        stroke={STROKE}
        strokeWidth="2"
      />
      <polyline points="30,210 380,210" stroke={STROKE} strokeWidth="1" />
      {[1, 2, 3, 4, 5, 6, 7].map((i) => (
        <line
          key={i}
          x1={30 + i * 50}
          y1="210"
          x2={30 + i * 50}
          y2="215"
          stroke={STROKE}
          strokeWidth="1"
        />
      ))}
      <circle cx="300" cy="110" r="44" fill="none" stroke={STROKE} strokeWidth="2.5" />
      <line
        x1="334"
        y1="142"
        x2="370"
        y2="180"
        stroke={STROKE}
        strokeWidth="3"
        strokeLinecap="round"
      />
      <text x="285" y="118" fontSize="28" fontWeight="700" fill={STROKE}>
        #1
      </text>
    </svg>
  );
}

/* Facebook Ads — feed cards with thumbs up */
export function BgFacebook({ className }: Props) {
  return (
    <svg viewBox="0 0 400 260" className={className} aria-hidden>
      <rect
        x="40"
        y="40"
        width="200"
        height="80"
        rx="8"
        fill="none"
        stroke={STROKE}
        strokeWidth="1.5"
      />
      <circle cx="62" cy="62" r="10" fill={STROKE} opacity="0.5" />
      <rect x="80" y="56" width="80" height="6" rx="2" fill={STROKE} opacity="0.5" />
      <rect x="80" y="68" width="50" height="5" rx="2" fill={STROKE} opacity="0.4" />
      <rect x="50" y="86" width="180" height="24" rx="4" fill={STROKE} opacity="0.25" />
      <rect
        x="40"
        y="140"
        width="200"
        height="80"
        rx="8"
        fill="none"
        stroke={STROKE}
        strokeWidth="1.5"
      />
      <circle cx="62" cy="162" r="10" fill={STROKE} opacity="0.5" />
      <rect x="80" y="156" width="80" height="6" rx="2" fill={STROKE} opacity="0.5" />
      <rect x="50" y="186" width="180" height="24" rx="4" fill={STROKE} opacity="0.25" />
      <g transform="translate(290,90)">
        <path
          d="M0 30 V60 a4 4 0 0 0 4 4 H30 a6 6 0 0 0 6-5 l4-20 a4 4 0 0 0 -4-5 H22 l3-12 a6 6 0 0 0 -10-5 L0 30 Z"
          fill={STROKE}
          opacity="0.55"
        />
      </g>
    </svg>
  );
}

/* Instagram — grid of squares + heart */
export function BgInstagram({ className }: Props) {
  return (
    <svg viewBox="0 0 400 260" className={className} aria-hidden>
      {[0, 1, 2].map((r) =>
        [0, 1, 2, 3].map((c) => (
          <rect
            key={`${r}-${c}`}
            x={40 + c * 60}
            y={30 + r * 60}
            width="50"
            height="50"
            rx="6"
            fill="none"
            stroke={STROKE}
            strokeWidth="1.5"
          />
        )),
      )}
      <rect x="40" y="30" width="50" height="50" rx="6" fill={STROKE} opacity="0.45" />
      <rect x="160" y="90" width="50" height="50" rx="6" fill={STROKE} opacity="0.3" />
      <rect x="220" y="150" width="50" height="50" rx="6" fill={STROKE} opacity="0.4" />
      <path
        d="M325 195 c-18-14 -30-26 -30-42 a16 16 0 0 1 30-8 a16 16 0 0 1 30 8 c0 16 -12 28 -30 42 Z"
        fill={STROKE}
        opacity="0.55"
      />
    </svg>
  );
}

/* YouTube — play button + waveform */
export function BgYoutube({ className }: Props) {
  return (
    <svg viewBox="0 0 400 260" className={className} aria-hidden>
      <rect
        x="60"
        y="50"
        width="180"
        height="120"
        rx="14"
        fill="none"
        stroke={STROKE}
        strokeWidth="2"
      />
      <path d="M135 90 L185 115 L135 140 Z" fill={STROKE} opacity="0.7" />
      <rect x="60" y="186" width="180" height="6" rx="3" fill={STROKE} opacity="0.3" />
      <circle cx="140" cy="189" r="6" fill={STROKE} />
      {Array.from({ length: 14 }).map((_, i) => (
        <rect
          key={i}
          x={270 + i * 8}
          y={130 - ((i * 13) % 40)}
          width="4"
          height={20 + ((i * 17) % 60)}
          rx="1"
          fill={STROKE}
          opacity="0.55"
        />
      ))}
    </svg>
  );
}

/* Website Design — browser mockup */
export function BgWebsite({ className }: Props) {
  return (
    <svg viewBox="0 0 400 260" className={className} aria-hidden>
      <rect
        x="30"
        y="30"
        width="340"
        height="200"
        rx="12"
        fill="none"
        stroke={STROKE}
        strokeWidth="2"
      />
      <line x1="30" y1="60" x2="370" y2="60" stroke={STROKE} strokeWidth="1.5" />
      <circle cx="48" cy="45" r="4" fill={STROKE} />
      <circle cx="62" cy="45" r="4" fill={STROKE} />
      <circle cx="76" cy="45" r="4" fill={STROKE} />
      <rect x="50" y="80" width="140" height="14" rx="3" fill={STROKE} opacity="0.5" />
      <rect x="50" y="102" width="100" height="8" rx="2" fill={STROKE} opacity="0.35" />
      <rect x="50" y="118" width="120" height="8" rx="2" fill={STROKE} opacity="0.35" />
      <rect x="50" y="142" width="60" height="22" rx="4" fill={STROKE} opacity="0.6" />
      <rect
        x="220"
        y="80"
        width="130"
        height="120"
        rx="8"
        fill="none"
        stroke={STROKE}
        strokeWidth="1.5"
      />
      <rect x="234" y="94" width="102" height="60" rx="4" fill={STROKE} opacity="0.25" />
      <rect x="234" y="162" width="80" height="6" rx="2" fill={STROKE} opacity="0.4" />
      <rect x="234" y="174" width="60" height="6" rx="2" fill={STROKE} opacity="0.3" />
    </svg>
  );
}

/* Google My Business — map pin grid */
export function BgMap({ className }: Props) {
  return (
    <svg viewBox="0 0 400 260" className={className} aria-hidden>
      <rect
        x="30"
        y="30"
        width="340"
        height="200"
        rx="12"
        fill="none"
        stroke={STROKE}
        strokeWidth="1.5"
      />
      <path
        d="M30 100 Q 150 80 250 130 T 370 150"
        fill="none"
        stroke={STROKE}
        strokeWidth="1.2"
        opacity="0.5"
      />
      <path
        d="M30 170 Q 130 200 220 180 T 370 200"
        fill="none"
        stroke={STROKE}
        strokeWidth="1.2"
        opacity="0.5"
      />
      <path
        d="M120 30 Q 140 130 100 230"
        fill="none"
        stroke={STROKE}
        strokeWidth="1.2"
        opacity="0.4"
      />
      <path
        d="M280 30 Q 260 120 300 230"
        fill="none"
        stroke={STROKE}
        strokeWidth="1.2"
        opacity="0.4"
      />
      {[
        [120, 90],
        [230, 140],
        [300, 80],
        [160, 180],
      ].map(([x, y], i) => (
        <g key={i} transform={`translate(${x},${y})`}>
          <path
            d="M0 0 c-10 0 -18 8 -18 18 c0 13 18 30 18 30 s18-17 18-30 c0-10 -8-18 -18-18 Z"
            fill={STROKE}
            opacity="0.55"
          />
          <circle cx="0" cy="18" r="5" fill="#0a0a0a" />
        </g>
      ))}
    </svg>
  );
}

/* Shopping — bag + tag */
export function BgShopping({ className }: Props) {
  return (
    <svg viewBox="0 0 400 260" className={className} aria-hidden>
      <path
        d="M120 90 h120 l-12 130 a10 10 0 0 1 -10 9 H142 a10 10 0 0 1 -10-9 Z"
        fill="none"
        stroke={STROKE}
        strokeWidth="2"
      />
      <path d="M150 90 v-14 a30 30 0 0 1 60 0 v14" fill="none" stroke={STROKE} strokeWidth="2" />
      <circle cx="165" cy="120" r="4" fill={STROKE} />
      <circle cx="195" cy="120" r="4" fill={STROKE} />
      <g transform="translate(270,140) rotate(20)">
        <path d="M0 0 h60 l30 30 -60 60 -30-30 Z" fill="none" stroke={STROKE} strokeWidth="2" />
        <circle cx="48" cy="22" r="6" fill={STROKE} />
      </g>
    </svg>
  );
}

/* Lead Gen — funnel */
export function BgFunnel({ className }: Props) {
  return (
    <svg viewBox="0 0 400 260" className={className} aria-hidden>
      <path
        d="M80 50 H320 L230 130 V210 L170 180 V130 Z"
        fill="none"
        stroke={STROKE}
        strokeWidth="2"
      />
      <line x1="100" y1="80" x2="300" y2="80" stroke={STROKE} strokeWidth="1.2" opacity="0.5" />
      <line x1="130" y1="105" x2="270" y2="105" stroke={STROKE} strokeWidth="1.2" opacity="0.4" />
      {[
        [60, 70],
        [340, 60],
        [50, 130],
        [350, 140],
        [70, 200],
      ].map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r="6" fill={STROKE} opacity="0.5" />
      ))}
      <path
        d="M200 220 l0 20 M190 232 l10 8 10-8"
        fill="none"
        stroke={STROKE}
        strokeWidth="2"
        opacity="0.6"
      />
    </svg>
  );
}

/* Call Gen — phone waves */
export function BgCalls({ className }: Props) {
  return (
    <svg viewBox="0 0 400 260" className={className} aria-hidden>
      <g transform="translate(160,80)">
        <path
          d="M10 0 h40 a10 10 0 0 1 10 10 l8 30 a8 8 0 0 1 -4 9 l-14 8 a60 60 0 0 0 30 30 l8-14 a8 8 0 0 1 9-4 l30 8 a10 10 0 0 1 10 10 v40 a10 10 0 0 1 -10 10 C 50 137 -7 80 0 10 A 10 10 0 0 1 10 0 Z"
          fill={STROKE}
          opacity="0.55"
        />
      </g>
      {[40, 60, 80].map((r, i) => (
        <path
          key={i}
          d={`M60 130 a${r} ${r} 0 0 1 ${r * 2} 0`}
          fill="none"
          stroke={STROKE}
          strokeWidth="2"
          opacity={0.6 - i * 0.15}
        />
      ))}
      {[40, 60, 80].map((r, i) => (
        <path
          key={i}
          d={`M340 130 a${r} ${r} 0 0 0 -${r * 2} 0`}
          fill="none"
          stroke={STROKE}
          strokeWidth="2"
          opacity={0.6 - i * 0.15}
        />
      ))}
    </svg>
  );
}

/* Conversion Tracking — radar/target with data points */
export function BgTracking({ className }: Props) {
  return (
    <svg viewBox="0 0 400 260" className={className} aria-hidden>
      <g transform="translate(200,130)">
        {[100, 75, 50, 25].map((r) => (
          <circle key={r} cx="0" cy="0" r={r} fill="none" stroke={STROKE} strokeWidth="1.2" />
        ))}
        <line x1="-110" y1="0" x2="110" y2="0" stroke={STROKE} strokeWidth="1" />
        <line x1="0" y1="-110" x2="0" y2="110" stroke={STROKE} strokeWidth="1" />
        <path d="M0 0 L100 -40 A 108 108 0 0 0 60 -90 Z" fill={STROKE} opacity="0.25" />
      </g>
      {[
        [120, 80],
        [260, 180],
        [300, 90],
        [170, 200],
        [230, 70],
      ].map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r="4" fill={STROKE} />
      ))}
    </svg>
  );
}

/* Recovery — shield + checkmark */
export function BgShield({ className }: Props) {
  return (
    <svg viewBox="0 0 400 260" className={className} aria-hidden>
      <path
        d="M200 30 L300 70 V140 C 300 190 250 220 200 235 C 150 220 100 190 100 140 V70 Z"
        fill="none"
        stroke={STROKE}
        strokeWidth="2"
      />
      <path
        d="M160 135 l30 30 l60-60"
        fill="none"
        stroke={STROKE}
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="80" cy="60" r="4" fill={STROKE} opacity="0.5" />
      <circle cx="330" cy="80" r="4" fill={STROKE} opacity="0.5" />
      <circle cx="350" cy="200" r="4" fill={STROKE} opacity="0.5" />
      <circle cx="60" cy="200" r="4" fill={STROKE} opacity="0.5" />
    </svg>
  );
}

export const serviceBg: Record<string, (p: Props) => React.ReactElement> = {
  "google-ads-management": BgDashboard,
  "google-my-business-optimization": BgMap,
  "website-design-development": BgWebsite,
  seo: BgSeo,
  "facebook-ads-management": BgFacebook,
  "instagram-ads-management": BgInstagram,
  "youtube-ads-management": BgYoutube,
  "ppc-management": BgDashboard,
  "google-conversion-tracking": BgTracking,
  "performance-max-campaigns": BgDashboard,
  "shopping-ads-management": BgShopping,
  "lead-generation-campaigns": BgFunnel,
  "call-generation-campaigns": BgCalls,
  "google-ads-suspended-account-recovery": BgShield,
};

export function getServiceBg(slug: string) {
  return serviceBg[slug] ?? BgDashboard;
}
