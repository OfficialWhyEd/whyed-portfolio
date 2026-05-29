"use client";
import { useRef, useState, useCallback } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const sections = [
  { id: "top",        label: "Intro",     num: "00" },
  { id: "lavori",     label: "Lavori",    num: "01" },
  { id: "cronologia", label: "Storia",    num: "02" },
  { id: "studio",     label: "Studio",    num: "03" },
  { id: "ecosistema", label: "Ecosistema",num: "04" },
  { id: "lab",        label: "Lab",       num: "05" },
  { id: "profilo",    label: "Profilo",   num: "06" },
  { id: "contatti",   label: "Contatti",  num: "07" },
];

export default function SideNav() {
  const [active, setActive] = useState(0);
  const [expanded, setExpanded] = useState(false);
  const navRef = useRef(null);

  useGSAP(() => {
    sections.forEach(({ id }, i) => {
      const el = document.getElementById(id);
      if (!el) return;
      ScrollTrigger.create({
        trigger: el,
        start: "top 55%",
        end: "bottom 55%",
        onEnter: () => setActive(i),
        onEnterBack: () => setActive(i),
      });
    });
  });

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const TRACK_H = (sections.length - 1) * 36; // px totali della linea

  return (
    <nav
      ref={navRef}
      onMouseEnter={() => setExpanded(true)}
      onMouseLeave={() => setExpanded(false)}
      style={{
        position: "fixed",
        right: 0,
        top: "50%",
        transform: "translateY(-50%)",
        zIndex: 400,
        padding: "1.5rem 1.2rem 1.5rem 2rem",
        display: "flex",
        alignItems: "center",
        gap: 0,
        cursor: "default",
      }}
      aria-label="Navigazione sezioni"
    >
      {/* Contenitore dots + linea */}
      <div style={{ position: "relative", display: "flex", flexDirection: "column", alignItems: "center" }}>

        {/* Linea verticale di sfondo */}
        <div
          style={{
            position: "absolute",
            left: "50%",
            transform: "translateX(-50%)",
            top: 0,
            width: "1px",
            height: `${TRACK_H}px`,
            background: "var(--line2)",
            transition: "opacity 0.4s",
            opacity: expanded ? 1 : 0.4,
          }}
        />

        {/* Linea progresso */}
        <div
          style={{
            position: "absolute",
            left: "50%",
            transform: "translateX(-50%)",
            top: 0,
            width: "1px",
            height: `${(active / (sections.length - 1)) * TRACK_H}px`,
            background: "var(--signal)",
            transition: "height 0.6s cubic-bezier(0.16,1,0.3,1)",
          }}
        />

        {/* Dots */}
        {sections.map((s, i) => {
          const isActive = i === active;
          const isPast = i < active;

          return (
            <div
              key={s.id}
              style={{
                position: "relative",
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-end",
                height: i === 0 ? "auto" : "36px",
                gap: "0.6rem",
              }}
            >
              {/* Label — appare solo se expanded */}
              <div
                style={{
                  opacity: expanded ? 1 : 0,
                  transform: expanded ? "translateX(0)" : "translateX(8px)",
                  transition: `opacity 0.25s ease ${i * 0.03}s, transform 0.3s cubic-bezier(0.16,1,0.3,1) ${i * 0.03}s`,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-end",
                  pointerEvents: expanded ? "auto" : "none",
                  cursor: "pointer",
                }}
                onClick={() => scrollTo(s.id)}
              >
                <span
                  style={{
                    fontFamily: '"JetBrains Mono", monospace',
                    fontSize: "0.54rem",
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    color: isActive ? "var(--paper)" : "var(--faint)",
                    whiteSpace: "nowrap",
                    transition: "color 0.3s",
                    lineHeight: 1.2,
                  }}
                >
                  {s.label}
                </span>
                <span
                  style={{
                    fontFamily: '"JetBrains Mono", monospace',
                    fontSize: "0.4rem",
                    color: isActive ? "var(--signal)" : "var(--faint)",
                    letterSpacing: "0.08em",
                    transition: "color 0.3s",
                  }}
                >
                  {s.num}
                </span>
              </div>

              {/* Dot */}
              <div
                onClick={() => scrollTo(s.id)}
                style={{
                  width: isActive ? (expanded ? "9px" : "7px") : (isPast ? "4px" : "3px"),
                  height: isActive ? (expanded ? "9px" : "7px") : (isPast ? "4px" : "3px"),
                  borderRadius: "50%",
                  background: isActive ? "var(--signal)" : isPast ? "var(--dim)" : "var(--faint)",
                  flexShrink: 0,
                  transition: "all 0.4s cubic-bezier(0.16,1,0.3,1)",
                  cursor: "pointer",
                  zIndex: 1,
                  boxShadow: isActive ? "0 0 8px rgba(201,75,37,0.7)" : "none",
                  position: "relative",
                }}
              >
                {/* Pulse solo sul dot attivo quando espanso */}
                {isActive && expanded && (
                  <span style={{
                    position: "absolute",
                    inset: "-5px",
                    borderRadius: "50%",
                    border: "1px solid var(--signal)",
                    animation: "sn-pulse 1.6s ease-out infinite",
                    opacity: 0,
                  }} />
                )}
              </div>
            </div>
          );
        })}
      </div>

      <style>{`
        @keyframes sn-pulse {
          0%   { transform: scale(1);   opacity: 0.6; }
          100% { transform: scale(2.8); opacity: 0; }
        }
      `}</style>
    </nav>
  );
}
