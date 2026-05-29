"use client";

// Inspired by Aceternity UI's background beams
// Pure SVG + CSS, no external deps
export default function BackgroundBeams({ className = "" }) {
  const beams = [
    "M500,800 L-200,0",
    "M500,800 L0,0",
    "M500,800 L200,0",
    "M500,800 L350,0",
    "M500,800 L500,0",
    "M500,800 L650,0",
    "M500,800 L800,0",
    "M500,800 L1000,0",
    "M500,800 L1200,0",
  ];

  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        overflow: "hidden",
        pointerEvents: "none",
        zIndex: 0,
      }}
      className={className}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1000 800"
        preserveAspectRatio="xMidYMid slice"
        style={{ width: "100%", height: "100%", position: "absolute", inset: 0 }}
      >
        <defs>
          {beams.map((_, i) => (
            <linearGradient
              key={i}
              id={`beam-grad-${i}`}
              gradientUnits="userSpaceOnUse"
              x1="500" y1="800" x2={[-200,0,200,350,500,650,800,1000,1200][i]} y2="0"
            >
              <stop offset="0%" stopColor="rgba(201,75,37,0)" />
              <stop offset="40%" stopColor="rgba(201,75,37,0)" />
              <stop offset="60%" stopColor="rgba(201,75,37,0.15)" />
              <stop offset="80%" stopColor="rgba(240,237,232,0.08)" />
              <stop offset="100%" stopColor="rgba(240,237,232,0)" />
            </linearGradient>
          ))}
          {beams.map((_, i) => (
            <linearGradient
              key={`bg-${i}`}
              id={`beam-base-${i}`}
              gradientUnits="userSpaceOnUse"
              x1="500" y1="800" x2={[-200,0,200,350,500,650,800,1000,1200][i]} y2="0"
            >
              <stop offset="0%" stopColor="rgba(255,255,255,0)" />
              <stop offset="100%" stopColor="rgba(255,255,255,0.018)" />
            </linearGradient>
          ))}
        </defs>

        {/* Base dim beams — always visible */}
        {beams.map((d, i) => (
          <path
            key={`base-${i}`}
            d={d}
            stroke={`url(#beam-base-${i})`}
            strokeWidth="0.6"
            fill="none"
          />
        ))}

        {/* Animated traveling light on each beam */}
        {beams.map((d, i) => (
          <path
            key={`anim-${i}`}
            d={d}
            stroke={`url(#beam-grad-${i})`}
            strokeWidth="1.2"
            fill="none"
            strokeDasharray="280 1000"
            strokeDashoffset="1000"
            style={{
              animation: `beam-travel 6s ${i * 0.7}s ease-in-out infinite`,
            }}
          />
        ))}
      </svg>

      <style>{`
        @keyframes beam-travel {
          0%   { stroke-dashoffset: 1000; opacity: 0; }
          10%  { opacity: 1; }
          70%  { stroke-dashoffset: -400; opacity: 0.8; }
          100% { stroke-dashoffset: -800; opacity: 0; }
        }
      `}</style>
    </div>
  );
}
