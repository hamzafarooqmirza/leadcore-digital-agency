/* LeadCore Digital brand mark — a rising growth arrow inside a rounded
   diamond, doubling as an abstract "L". Gold-on-dark to match the site's
   premium theme. Reused for the header/footer logo and the favicon. */
export function LogoMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" className={className} role="img" aria-label="LeadCore Digital">
      <defs>
        <linearGradient
          id="lc-mark-bg"
          x1="4"
          y1="36"
          x2="36"
          y2="4"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#1c1a14" />
          <stop offset="1" stopColor="#0c0b09" />
        </linearGradient>
        <linearGradient
          id="lc-mark-gold"
          x1="10"
          y1="30"
          x2="30"
          y2="8"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#f3dfa0" />
          <stop offset="0.55" stopColor="#d4af37" />
          <stop offset="1" stopColor="#a9781f" />
        </linearGradient>
      </defs>
      <rect x="1" y="1" width="38" height="38" rx="10" fill="url(#lc-mark-bg)" />
      <rect
        x="1"
        y="1"
        width="38"
        height="38"
        rx="10"
        fill="none"
        stroke="url(#lc-mark-gold)"
        strokeOpacity="0.35"
      />
      {/* Upward growth path forming an abstract "L" + arrow */}
      <path d="M13 27V14.5" stroke="url(#lc-mark-gold)" strokeWidth="3.4" strokeLinecap="round" />
      <path d="M13 27h9.5" stroke="url(#lc-mark-gold)" strokeWidth="3.4" strokeLinecap="round" />
      <path
        d="M13 22.5 20 16l4 4 6.5-7"
        fill="none"
        stroke="url(#lc-mark-gold)"
        strokeWidth="2.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M25 12.5h5.5V18"
        fill="none"
        stroke="url(#lc-mark-gold)"
        strokeWidth="2.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
