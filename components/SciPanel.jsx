// Decorative HUD/sci-fi panel overlays — traced from the Sci-Fi Panels FREE SAMPLE asset pack
// Used at low opacity as ambient texture elements

export function SciPanelHorizontal({ className = "" }) {
  return (
    <svg
      className={`sci-panel ${className}`}
      viewBox="0 0 800 130"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M16 0 L784 0 L800 16 L800 114 L784 130 L16 130 L0 114 L0 16 Z" stroke="currentColor" strokeWidth="0.8"/>
      <path d="M0 30 L20 10" stroke="currentColor" strokeWidth="0.8"/>
      <path d="M800 30 L780 10" stroke="currentColor" strokeWidth="0.8"/>
      <rect x="340" y="0" width="40" height="4" fill="currentColor"/>
      <rect x="420" y="0" width="60" height="4" fill="currentColor"/>
      <circle cx="40" cy="100" r="8" stroke="currentColor" strokeWidth="0.8"/>
      <circle cx="760" cy="100" r="8" stroke="currentColor" strokeWidth="0.8"/>
      <path d="M60 65 L80 65" stroke="currentColor" strokeWidth="0.8"/>
      <path d="M740 65 L720 65" stroke="currentColor" strokeWidth="0.8"/>
      <rect x="340" y="55" width="8" height="8" fill="none" stroke="currentColor" strokeWidth="0.8" strokeDasharray="2 2"/>
      <rect x="360" y="55" width="14" height="8" fill="none" stroke="currentColor" strokeWidth="0.8" strokeDasharray="2 2"/>
      <path d="M420 50 L422 52 L422 78 L420 80" stroke="currentColor" strokeWidth="0.8"/>
      <path d="M460 50 L458 52 L458 78 L460 80" stroke="currentColor" strokeWidth="0.8"/>
      <circle cx="440" cy="65" r="3" fill="currentColor"/>
      <circle cx="450" cy="65" r="2" fill="currentColor"/>
    </svg>
  );
}

export function SciPanelFrame({ className = "" }) {
  return (
    <svg
      className={`sci-panel ${className}`}
      viewBox="0 0 440 520"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M30 0 L410 0 L440 30 L440 490 L410 520 L30 520 L0 490 L0 30 Z" stroke="currentColor" strokeWidth="0.8"/>
      <path d="M0 50 L30 20" stroke="currentColor" strokeWidth="0.8"/>
      <path d="M440 50 L410 20" stroke="currentColor" strokeWidth="0.8"/>
      <path d="M0 470 L30 500" stroke="currentColor" strokeWidth="0.8"/>
      <path d="M440 470 L410 500" stroke="currentColor" strokeWidth="0.8"/>
      <path d="M100 0 L100 30" stroke="currentColor" strokeWidth="0.8"/>
      <path d="M340 0 L340 30" stroke="currentColor" strokeWidth="0.8"/>
      {/* Dot array top-left */}
      {[0,4,8,12,16,20,24].map(x => (
        <circle key={x} cx={50+x} cy={50} r="1.2" fill="currentColor"/>
      ))}
      {/* Dot array top-right */}
      {[0,4,8].map(x => (
        <circle key={x} cx={380+x} cy={50} r="1.2" fill="currentColor"/>
      ))}
      {/* Dashed inner rect */}
      <path
        d="M60 90 L62 88 L378 88 L380 90 L380 430 L378 432 L62 432 L60 430 Z"
        stroke="currentColor" strokeWidth="0.6" strokeDasharray="6 4"
      />
      {/* Bottom dots */}
      {[0,4,8,12].map(x => (
        <rect key={x} x={194+x*8} y={500} width="4" height="4" fill="currentColor"/>
      ))}
      <circle cx={20} cy={490} r={6} stroke="currentColor" strokeWidth="0.8"/>
      <circle cx={420} cy={490} r={6} stroke="currentColor" strokeWidth="0.8"/>
    </svg>
  );
}

export function SciPanelWide({ className = "" }) {
  return (
    <svg
      className={`sci-panel ${className}`}
      viewBox="0 0 900 280"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* outer shape with stepped top-right */}
      <path d="M0 0 L700 0 L760 0 L900 0 L900 280 L0 280 Z" stroke="currentColor" strokeWidth="0.6"/>
      <path d="M0 40 L900 40" stroke="currentColor" strokeWidth="0.6"/>
      <path d="M0 240 L900 240" stroke="currentColor" strokeWidth="0.6"/>
      {/* Grid top section */}
      <rect x="20" y="12" width="12" height="12" fill="currentColor"/>
      <rect x="36" y="12" width="12" height="12" fill="currentColor"/>
      <rect x="52" y="12" width="12" height="12" fill="currentColor"/>
      <rect x="20" y="26" width="12" height="12" fill="currentColor"/>
      <rect x="36" y="26" width="12" height="12" fill="currentColor"/>
      <rect x="52" y="26" width="12" height="12" fill="currentColor"/>
      <path d="M80 12 L82 14" stroke="currentColor" strokeWidth="0.8"/>
      <path d="M86 12 L88 14" stroke="currentColor" strokeWidth="0.8"/>
      {/* Content area divider */}
      <path d="M0 140 L400 140" stroke="currentColor" strokeWidth="0.6"/>
      <path d="M440 140 L900 140" stroke="currentColor" strokeWidth="0.6"/>
      {/* Right side indent detail */}
      <path d="M700 40 L700 0" stroke="currentColor" strokeWidth="0.6"/>
      <path d="M700 40 L760 40" stroke="currentColor" strokeWidth="0.6"/>
      {/* Dashed sub-panel */}
      <path d="M20 60 L22 58 L220 58 L220 130 L18 130 L18 62 Z"
        stroke="currentColor" strokeWidth="0.6" strokeDasharray="5 3"/>
      {/* Dots left */}
      <circle cx="16" cy="160" r="3" fill="currentColor"/>
      <circle cx="16" cy="200" r="3" fill="currentColor"/>
      {/* Diagonal accent */}
      <path d="M480 200 L540 260" stroke="currentColor" strokeWidth="0.6"/>
      <path d="M560 260 L600 260" stroke="currentColor" strokeWidth="0.6"/>
    </svg>
  );
}
