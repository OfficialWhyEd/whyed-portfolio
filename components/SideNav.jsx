"use client";
import { useState } from "react";
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
  const [active, setActive]     = useState(0);
  const [hovered, setHovered]   = useState(false);
  const [scrollPct, setScrollPct] = useState(0);

  useGSAP(() => {
    ScrollTrigger.create({
      start: "top top",
      end: "bottom bottom",
      onUpdate: (self) => setScrollPct(self.progress),
    });

    sections.forEach(({ id }, i) => {
      const el = document.getElementById(id);
      if (!el) return;
      ScrollTrigger.create({
        trigger: el,
        start: "top 55%",
        end: "bottom 55%",
        onEnter:     () => setActive(i),
        onEnterBack: () => setActive(i),
      });
    });
  });

  const scrollTo = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  const N     = sections.length;
  const GAP   = 44;
  const TOTAL = GAP * (N - 1);

  return (
    <nav
      className="side-nav"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: "fixed",
        right: "24px",
        top: "50%",
        transform: "translateY(-50%)",
        zIndex: 400,
        display: "flex",
        alignItems: "center",
        padding: "28px 0 28px 72px",
      }}
    >
      <div style={{
        position: "relative",
        height: `${TOTAL}px`,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}>

        {/* Track — sfondo */}
        <div style={{
          position: "absolute",
          right: 0,
          top: 0,
          bottom: 0,
          width: "1px",
          background: hovered
            ? "rgba(255,255,255,0.1)"
            : "rgba(255,255,255,0.05)",
          transition: "background 0.5s",
        }} />

        {/* Progresso scroll — riempie dall'alto */}
        <div style={{
          position: "absolute",
          right: 0,
          top: 0,
          width: "1px",
          height: `${scrollPct * 100}%`,
          background: "var(--signal)",
          boxShadow: "0 0 8px rgba(201,75,37,0.7), 0 0 2px rgba(201,75,37,1)",
          transition: "height 0.12s linear",
        }} />

        {sections.map((s, i) => {
          const isActive = i === active;
          const isPast   = i < active;
          const d        = `${i * 20}ms`;

          return (
            <div
              key={s.id}
              onClick={() => scrollTo(s.id)}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-end",
                gap: "10px",
                cursor: "pointer",
              }}
            >
              {/* Numero sezione */}
              <span style={{
                fontFamily: '"JetBrains Mono", monospace',
                fontSize: "0.4rem",
                letterSpacing: "0.12em",
                color: isActive ? "var(--signal)" : "rgba(255,255,255,0.32)",
                userSelect: "none",
                lineHeight: 1,
                flexShrink: 0,
                opacity: hovered ? 1 : 0,
                transform: hovered ? "translateX(0)" : "translateX(6px)",
                transition: `opacity 0.2s ease ${d}, transform 0.3s cubic-bezier(0.16,1,0.3,1) ${d}`,
              }}>
                {String(i + 1).padStart(2, "0")}
              </span>

              {/* Label */}
              <span style={{
                fontFamily: '"JetBrains Mono", monospace',
                fontSize: "0.5rem",
                letterSpacing: "0.13em",
                textTransform: "uppercase",
                color: isActive ? "var(--paper)" : "rgba(255,255,255,0.55)",
                whiteSpace: "nowrap",
                lineHeight: 1,
                userSelect: "none",
                flexShrink: 0,
                opacity: isActive ? 1 : hovered ? 1 : 0,
                transform: (isActive || hovered) ? "translateX(0)" : "translateX(8px)",
                transition: `opacity 0.22s ease ${d}, transform 0.3s cubic-bezier(0.16,1,0.3,1) ${d}, color 0.3s`,
              }}>
                {s.label}
              </span>

              {/* Tick marker */}
              <div style={{
                flexShrink: 0,
                height: isActive ? "2px" : "1px",
                width: isActive ? "22px" : isPast ? "10px" : "5px",
                background: isActive
                  ? "var(--signal)"
                  : isPast
                  ? "rgba(201,75,37,0.5)"
                  : "rgba(255,255,255,0.22)",
                boxShadow: isActive
                  ? "0 0 12px rgba(201,75,37,1), 0 0 24px rgba(201,75,37,0.4)"
                  : "none",
                transition: "all 0.4s cubic-bezier(0.16,1,0.3,1)",
                position: "relative",
                zIndex: 1,
              }} />
            </div>
          );
        })}
      </div>
    </nav>
  );
}
