"use client";
import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const sections = [
  { id: "top",        label: "Intro"      },
  { id: "lavori",     label: "Lavori"     },
  { id: "cronologia", label: "Storia"     },
  { id: "studio",     label: "Studio"     },
  { id: "ecosistema", label: "Ecosistema" },
  { id: "lab",        label: "Lab R&D"    },
  { id: "profilo",    label: "Profilo"    },
  { id: "contatti",   label: "Contatti"   },
];

export default function SideNav() {
  const [active, setActive] = useState(0);
  const [hovered, setHovered] = useState(false);
  const [scrollPct, setScrollPct] = useState(0);

  useGSAP(() => {
    // Progresso scroll globale
    ScrollTrigger.create({
      start: "top top",
      end: "bottom bottom",
      onUpdate: (self) => setScrollPct(self.progress),
    });

    // Sezione attiva
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

  const N = sections.length;
  // Spacing uniforme tra i dot
  const DOT_GAP = 40; // px tra ogni dot
  const TOTAL = DOT_GAP * (N - 1);

  return (
    <nav
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: "fixed",
        right: "28px",
        top: "50%",
        transform: "translateY(-50%)",
        zIndex: 400,
        display: "flex",
        alignItems: "center",
        gap: 0,
        // Zona hover ampia per comodità
        padding: "20px 0 20px 32px",
      }}
    >
      {/* Track container — larghezza fissa */}
      <div style={{ position: "relative", height: `${TOTAL}px`, display: "flex", flexDirection: "column", justifyContent: "space-between" }}>

        {/* Linea sfondo — piena altezza */}
        <div style={{
          position: "absolute",
          left: "50%",
          top: 0,
          bottom: 0,
          width: "1px",
          transform: "translateX(-50%)",
          background: hovered ? "rgba(255,255,255,0.12)" : "rgba(255,255,255,0.05)",
          transition: "background 0.5s ease",
        }} />

        {/* Linea progresso — cresce dall'alto */}
        <div style={{
          position: "absolute",
          left: "50%",
          top: 0,
          width: "1px",
          transform: "translateX(-50%)",
          height: `${scrollPct * 100}%`,
          background: "var(--signal)",
          transition: "height 0.15s linear",
          boxShadow: hovered ? "0 0 6px rgba(201,75,37,0.5)" : "none",
        }} />

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
                gap: "10px",
              }}
            >
              {/* Label — slide in da destra quando hover */}
              <div style={{
                opacity: hovered ? 1 : 0,
                transform: hovered ? "translateX(0)" : "translateX(10px)",
                transition: `opacity 0.2s ease ${i * 25}ms, transform 0.3s cubic-bezier(0.16,1,0.3,1) ${i * 25}ms`,
                textAlign: "right",
                cursor: "pointer",
                userSelect: "none",
                lineHeight: 1,
              }}
              onClick={() => scrollTo(s.id)}
              >
                <span style={{
                  fontFamily: '"JetBrains Mono", monospace',
                  fontSize: "0.52rem",
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  color: isActive ? "var(--paper)" : "#9ea1ac",
                  whiteSpace: "nowrap",
                  transition: "color 0.3s",
                  display: "block",
                }}>
                  {s.label}
                </span>
              </div>

              {/* Dot */}
              <div
                onClick={() => scrollTo(s.id)}
                style={{
                  position: "relative",
                  flexShrink: 0,
                  width: isActive ? (hovered ? "8px" : "6px") : (isPast ? "4px" : "3px"),
                  height: isActive ? (hovered ? "8px" : "6px") : (isPast ? "4px" : "3px"),
                  borderRadius: "50%",
                  background: isActive
                    ? "var(--signal)"
                    : isPast
                    ? "rgba(255,255,255,0.5)"
                    : "rgba(255,255,255,0.25)",
                  transition: "all 0.4s cubic-bezier(0.16,1,0.3,1)",
                  cursor: "pointer",
                  zIndex: 1,
                  boxShadow: isActive
                    ? "0 0 10px rgba(201,75,37,0.8), 0 0 3px rgba(201,75,37,0.5)"
                    : "none",
                }}
              >
                {/* Pulse ring — solo dot attivo + hover */}
                {isActive && hovered && (
                  <span style={{
                    position: "absolute",
                    inset: "-6px",
                    borderRadius: "50%",
                    border: "1px solid rgba(201,75,37,0.6)",
                    animation: "sn-pulse 1.8s ease-out infinite",
                  }} />
                )}
              </div>
            </div>
          );
        })}
      </div>

      <style>{`
        @keyframes sn-pulse {
          0%   { transform: scale(1); opacity: 0.7; }
          100% { transform: scale(3); opacity: 0; }
        }
      `}</style>
    </nav>
  );
}
