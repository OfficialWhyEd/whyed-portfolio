"use client";
import { useRef, useState, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const sections = [
  { id: "top",         label: "Intro",         num: "00" },
  { id: "lavori",      label: "Lavori",         num: "01" },
  { id: "cronologia",  label: "Cronologia",     num: "02" },
  { id: "studio",      label: "Studio",         num: "03" },
  { id: "ecosistema",  label: "Ecosistema Why", num: "04" },
  { id: "lab",         label: "Laboratorio",    num: "05" },
  { id: "profilo",     label: "Profilo",        num: "06" },
  { id: "contatti",    label: "Contatti",       num: "07" },
];

export default function SideNav() {
  const [active, setActive] = useState("top");
  const [hovered, setHovered] = useState(null);
  const [progress, setProgress] = useState(0);
  const lineRef = useRef(null);
  const root = useRef(null);

  useGSAP(() => {
    // Traccia progresso scroll globale
    ScrollTrigger.create({
      start: "top top",
      end: "bottom bottom",
      onUpdate: (self) => setProgress(self.progress),
    });

    // Attiva la sezione corrente
    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (!el) return;
      ScrollTrigger.create({
        trigger: el,
        start: "top 50%",
        end: "bottom 50%",
        onEnter: () => setActive(id),
        onEnterBack: () => setActive(id),
      });
    });
  });

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth" });
  };

  const totalH = sections.length - 1;
  const activeIdx = sections.findIndex(s => s.id === active);

  return (
    <nav
      ref={root}
      style={{
        position: "fixed",
        right: "2rem",
        top: "50%",
        transform: "translateY(-50%)",
        zIndex: 400,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 0,
        pointerEvents: "none",
      }}
      aria-label="Navigazione sezioni"
    >
      {sections.map((s, i) => {
        const isActive = active === s.id;
        const isHovered = hovered === s.id;
        const isPast = i < activeIdx;

        return (
          <div
            key={s.id}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              position: "relative",
            }}
          >
            {/* Linea sopra (tranne il primo) */}
            {i > 0 && (
              <div
                style={{
                  width: "1px",
                  height: "32px",
                  background: isPast || isActive
                    ? "linear-gradient(to bottom, var(--signal), var(--signal))"
                    : "var(--line2)",
                  transition: "background 0.5s ease",
                  flexShrink: 0,
                }}
              />
            )}

            {/* Dot + Label row */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.7rem",
                position: "relative",
                pointerEvents: "auto",
                cursor: "pointer",
                flexDirection: "row-reverse", // label a sinistra del dot
              }}
              onClick={() => scrollTo(s.id)}
              onMouseEnter={() => setHovered(s.id)}
              onMouseLeave={() => setHovered(null)}
            >
              {/* Label + numero */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-end",
                  opacity: isActive || isHovered ? 1 : 0,
                  transform: isActive || isHovered ? "translateX(0)" : "translateX(6px)",
                  transition: "opacity 0.3s ease, transform 0.3s ease",
                  pointerEvents: "none",
                }}
              >
                <span
                  style={{
                    fontFamily: '"JetBrains Mono", monospace',
                    fontSize: "0.52rem",
                    letterSpacing: "0.14em",
                    textTransform: "uppercase",
                    color: isActive ? "var(--signal)" : "var(--dim)",
                    whiteSpace: "nowrap",
                    transition: "color 0.3s",
                    lineHeight: 1,
                    marginBottom: "0.15rem",
                  }}
                >
                  {s.label}
                </span>
                <span
                  style={{
                    fontFamily: '"JetBrains Mono", monospace',
                    fontSize: "0.42rem",
                    color: "var(--faint)",
                    letterSpacing: "0.1em",
                    lineHeight: 1,
                  }}
                >
                  {s.num}
                </span>
              </div>

              {/* Dot */}
              <div
                style={{
                  position: "relative",
                  width: isActive ? "10px" : isHovered ? "7px" : "5px",
                  height: isActive ? "10px" : isHovered ? "7px" : "5px",
                  borderRadius: "50%",
                  background: isActive
                    ? "var(--signal)"
                    : isPast
                    ? "var(--dim)"
                    : "var(--faint)",
                  transition: "width 0.35s cubic-bezier(0.16,1,0.3,1), height 0.35s cubic-bezier(0.16,1,0.3,1), background 0.35s ease",
                  flexShrink: 0,
                  boxShadow: isActive
                    ? "0 0 12px rgba(201,75,37,0.8), 0 0 4px rgba(201,75,37,0.6)"
                    : "none",
                }}
              >
                {/* Pulse ring sul dot attivo */}
                {isActive && (
                  <span
                    style={{
                      position: "absolute",
                      inset: "-5px",
                      borderRadius: "50%",
                      border: "1px solid var(--signal)",
                      animation: "sidenav-pulse 1.8s ease-out infinite",
                      opacity: 0,
                    }}
                  />
                )}
              </div>
            </div>
          </div>
        );
      })}

      {/* Indicatore progresso globale */}
      <div
        style={{
          marginTop: "1.5rem",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "0.4rem",
          pointerEvents: "none",
        }}
      >
        <div
          style={{
            width: "1px",
            height: "40px",
            background: "var(--line2)",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: `${progress * 100}%`,
              background: "var(--signal)",
              transition: "height 0.1s linear",
            }}
          />
        </div>
        <span
          style={{
            fontFamily: '"JetBrains Mono", monospace',
            fontSize: "0.42rem",
            color: "var(--faint)",
            letterSpacing: "0.1em",
            writingMode: "vertical-rl",
            textOrientation: "mixed",
          }}
        >
          {Math.round(progress * 100)}%
        </span>
      </div>

      <style>{`
        @keyframes sidenav-pulse {
          0%   { transform: scale(1);   opacity: 0.7; }
          100% { transform: scale(2.5); opacity: 0;   }
        }
      `}</style>
    </nav>
  );
}
