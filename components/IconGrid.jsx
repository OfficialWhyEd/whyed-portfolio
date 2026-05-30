"use client";
import { useState } from "react";

/* Colori brand originali */
const ICONS = {
  // DAW & Audio
  ableton:          { label: "Ableton Live",    color: "#FF7500", bg: "#1a0e00" },
  logic:            { label: "Logic Pro X",     color: "#F56300", bg: "#1a0e00" },
  protools:         { label: "Pro Tools",       color: "#7ACB10", bg: "#0a1200" },
  audacity:         { label: "Audacity",        color: "#0000CC", bg: "#000010" },
  reason:           { label: "Reason Studios",  color: "#DD4B39", bg: "#1a0800" },
  applemusic:       { label: "Apple Music",     color: "#FA243C", bg: "#1a0005" },
  spotify:          { label: "Spotify",         color: "#1ED760", bg: "#001a07" },
  soundcloud:       { label: "SoundCloud",      color: "#FF5500", bg: "#1a0d00" },
  // Adobe Suite
  adobephotoshop:   { label: "Photoshop",       color: "#31A8FF", bg: "#001826" },
  adobepremierepro: { label: "Premiere Pro",    color: "#9999FF", bg: "#0a001a" },
  adobeaftereffects:{ label: "After Effects",   color: "#9999FF", bg: "#0a001a" },
  adobeillustrator: { label: "Illustrator",     color: "#FF9A00", bg: "#1a0e00" },
  adobeaudition:    { label: "Audition",        color: "#00E4BB", bg: "#001a14" },
  // Video editing
  finalcutpro:      { label: "Final Cut Pro",   color: "#e0e0e0", bg: "#111"    },
  cinema4d:         { label: "Cinema 4D",       color: "#5ACEF9", bg: "#00141a" },
  // Dev
  react:            { label: "React",           color: "#61DAFB", bg: "#00141a" },
  nextdotjs:        { label: "Next.js",         color: "#e0e0e0", bg: "#111"    },
  typescript:       { label: "TypeScript",      color: "#3178C6", bg: "#000e1a" },
  python:           { label: "Python",          color: "#3776AB", bg: "#000e1a" },
  nodedotjs:        { label: "Node.js",         color: "#5FA04E", bg: "#001200" },
  rust:             { label: "Rust",            color: "#F74C00", bg: "#1a0a00" },
  cplusplus:        { label: "C++",             color: "#00599C", bg: "#000e1a" },
  juce:             { label: "JUCE",            color: "#FF3366", bg: "#1a001a" },
  // Tools
  electron:         { label: "Electron",        color: "#47848F", bg: "#001214" },
  tauri:            { label: "Tauri",           color: "#24C8D8", bg: "#001a1c" },
  vite:             { label: "Vite",            color: "#9135FF", bg: "#100019" },
  gsap:             { label: "GSAP",            color: "#0AE448", bg: "#001a09" },
  framer:           { label: "Framer Motion",   color: "#0055FF", bg: "#00001a" },
  remotion:         { label: "Remotion",        color: "#FF4B4B", bg: "#1a0000" },
  figma:            { label: "Figma",           color: "#F24E1E", bg: "#1a0a00" },
  // Business / Marketing
  shopify:          { label: "Shopify",         color: "#7AB55C", bg: "#0a1200" },
  googleanalytics:  { label: "Google Analytics",color: "#E37400", bg: "#1a0e00" },
  wordpress:        { label: "WordPress",       color: "#21759B", bg: "#000e14" },
  autocad:          { label: "AutoCAD",         color: "#E51050", bg: "#1a000a" },
  // Office
  microsoftexcel:   { label: "Excel",           color: "#217346", bg: "#001200" },
  microsoftword:    { label: "Word",            color: "#2B579A", bg: "#000e1a" },
  // AI
  anthropic:        { label: "Claude / Anthropic", color: "#D4A27F", bg: "#1a0e07" },
  openai:           { label: "OpenAI",          color: "#74AA9C", bg: "#001a16" },
  // Social / Platform
  github:           { label: "GitHub",          color: "#e0e0e0", bg: "#111"    },
  instagram:        { label: "Instagram",       color: "#FF0069", bg: "#1a0014" },
  tiktok:           { label: "TikTok",          color: "#e0e0e0", bg: "#111"    },
  youtube:          { label: "YouTube",         color: "#FF0000", bg: "#1a0000" },
};

function Icon({ id, label, color, bg }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "0.5rem",
        cursor: "default",
      }}
    >
      <div
        style={{
          width: "48px",
          height: "48px",
          borderRadius: "12px",
          background: hovered ? bg : "rgba(255,255,255,0.03)",
          border: `1px solid ${hovered ? `${color}44` : "var(--line)"}`,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          transition: "all 0.3s cubic-bezier(0.16,1,0.3,1)",
          transform: hovered ? "translateY(-3px) scale(1.08)" : "translateY(0) scale(1)",
        }}
      >
        <img
          src={`/icons/${id}.svg`}
          alt={label}
          style={{
            width: "24px",
            height: "24px",
            filter: hovered
              ? `invert(1) sepia(1) saturate(5) hue-rotate(${getHue(color)}deg) brightness(1.2)`
              : "invert(0.35) brightness(0.8)",
            transition: "filter 0.3s ease",
          }}
        />
      </div>
      <span
        style={{
          fontFamily: '"JetBrains Mono", monospace',
          fontSize: "0.44rem",
          letterSpacing: "0.1em",
          textTransform: "uppercase",
          color: hovered ? color : "var(--faint)",
          whiteSpace: "nowrap",
          transition: "color 0.3s",
          maxWidth: "56px",
          textAlign: "center",
          overflow: "hidden",
          textOverflow: "ellipsis",
        }}
      >
        {label.split(" ")[0]}
      </span>
    </div>
  );
}

/* Approssima hue da hex color per il filtro CSS */
function getHue(hex) {
  const r = parseInt(hex.slice(1,3),16)/255;
  const g = parseInt(hex.slice(3,5),16)/255;
  const b = parseInt(hex.slice(5,7),16)/255;
  const max = Math.max(r,g,b), min = Math.min(r,g,b);
  if (max === min) return 0;
  let h;
  if (max === r) h = ((g-b)/(max-min)) % 6;
  else if (max === g) h = (b-r)/(max-min) + 2;
  else h = (r-g)/(max-min) + 4;
  return Math.round(h * 60);
}

export default function IconGrid({ filter }) {
  const entries = Object.entries(ICONS).filter(([id]) =>
    !filter || filter.includes(id)
  );

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "1rem",
        alignItems: "flex-start",
      }}
    >
      {entries.map(([id, { label, color, bg }]) => (
        <Icon key={id} id={id} label={label} color={color} bg={bg} />
      ))}
    </div>
  );
}
