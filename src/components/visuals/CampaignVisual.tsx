import { PhoneCall, TrendingUp, Target, LineChart as LineChartIcon } from "lucide-react";

/* Stylized "campaign performance" dashboard illustration used in place of a
   real screenshot on results/project cards. Deterministically varied by
   `seed` so a grid of cards doesn't repeat the exact same shape twice. */

const ICONS = [PhoneCall, TrendingUp, Target, LineChartIcon];

function barHeights(seed: number, count: number) {
  return Array.from({ length: count }, (_, i) => {
    const n = Math.sin(seed * 12.9898 + i * 78.233) * 43758.5453;
    const frac = n - Math.floor(n);
    return 28 + Math.round(frac * 92);
  });
}

function linePoints(seed: number, count: number, width: number, height: number) {
  const heights = barHeights(seed + 100, count);
  const step = width / (count - 1);
  return heights
    .map((h, i) => `${Math.round(i * step)},${Math.round(height - (h / 120) * height)}`)
    .join(" ");
}

export function CampaignVisual({ seed, className }: { seed: number; className?: string }) {
  const Icon = ICONS[seed % ICONS.length];
  const barCount = 8;
  const chartW = 320;
  const chartH = 120;
  const bars = barHeights(seed, barCount);
  const points = linePoints(seed, barCount, chartW, chartH);

  return (
    <svg
      viewBox="0 0 400 260"
      className={className}
      role="img"
      aria-label="Campaign performance overview"
    >
      <defs>
        <linearGradient
          id={`cv-bg-${seed}`}
          x1="0"
          y1="0"
          x2="400"
          y2="260"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#1a1810" />
          <stop offset="1" stopColor="#0e0d0a" />
        </linearGradient>
        <linearGradient
          id={`cv-bar-${seed}`}
          x1="0"
          y1="120"
          x2="0"
          y2="0"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#a9781f" />
          <stop offset="1" stopColor="#f3dfa0" />
        </linearGradient>
        <linearGradient
          id={`cv-line-${seed}`}
          x1="0"
          y1="0"
          x2="320"
          y2="0"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#f3dfa0" />
          <stop offset="1" stopColor="#d4af37" />
        </linearGradient>
      </defs>

      <rect width="400" height="260" fill={`url(#cv-bg-${seed})`} />
      <rect
        x="0.5"
        y="0.5"
        width="399"
        height="259"
        fill="none"
        stroke="#d4af37"
        strokeOpacity="0.14"
      />

      {/* window chrome dots, for a "dashboard" feel */}
      <circle cx="26" cy="26" r="4" fill="#d4af37" fillOpacity="0.35" />
      <circle cx="40" cy="26" r="4" fill="#d4af37" fillOpacity="0.35" />
      <circle cx="54" cy="26" r="4" fill="#d4af37" fillOpacity="0.35" />

      {/* icon badge */}
      <circle cx="366" cy="26" r="16" fill="#d4af37" fillOpacity="0.12" />
      <foreignObject x="356" y="16" width="20" height="20">
        <Icon color="#d4af37" size={20} strokeWidth={2} />
      </foreignObject>

      {/* bar chart */}
      <g transform="translate(40, 150)">
        {bars.map((h, i) => (
          <rect
            key={i}
            x={i * 40}
            y={120 - h}
            width="22"
            height={h}
            rx="3"
            fill={`url(#cv-bar-${seed})`}
            fillOpacity="0.85"
          />
        ))}
      </g>

      {/* trend line overlay */}
      <g transform="translate(40, 150)">
        <polyline
          points={points}
          fill="none"
          stroke={`url(#cv-line-${seed})`}
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          opacity="0.9"
        />
        {points.split(" ").map((p, i) => {
          const [x, y] = p.split(",");
          return <circle key={i} cx={x} cy={y} r="3" fill="#f3dfa0" />;
        })}
      </g>

      <line x1="40" y1="150" x2="360" y2="150" stroke="#d4af37" strokeOpacity="0.25" />
    </svg>
  );
}
