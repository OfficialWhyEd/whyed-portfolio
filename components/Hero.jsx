"use client";
import { useRef, useState, useCallback } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { SciPanelHorizontal } from "./SciPanel";
import BackgroundBeams from "./BackgroundBeams";

export default function Hero({ ready }) {
  const root   = useRef(null);
  const nameEl = useRef(null);
  const spotRef = useRef(null);
  const [spotPos, setSpotPos] = useState({ x: -9999, y: -9999 });

  const onMouseMove = useCallback((e) => {
    const rect = root.current?.getBoundingClientRect();
    if (!rect) return;
    setSpotPos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    const x = (e.clientX / window.innerWidth - 0.5) * 22;
    const y = (e.clientY / window.innerHeight - 0.5) * 13;
    gsap.to(nameEl.current, { x, y, duration: 1.1, ease: "power2.out" });
  }, []);

  useGSAP(() => {
    if (!ready) return;

    const tl = gsap.timeline({ defaults: { ease: "power4.out" } });
    tl.from(".h-eyebrow span", {
      opacity: 0, y: 14, stagger: 0.07, duration: 0.7,
    })
      .from(".h-first", {
        yPercent: 108, duration: 1.3, ease: "power4.out",
      }, "-=0.3")
      .from(".h-second", {
        yPercent: 108, duration: 1.15, ease: "power4.out",
      }, "-=0.95")
      .from(".h-tags span", {
        opacity: 0, x: -16, stagger: 0.09, duration: 0.7,
      }, "-=0.5")
      .from(".h-tagline", {
        opacity: 0, y: 12, duration: 0.9,
      }, "-=0.45")
      .from(".h-coord", {
        opacity: 0, duration: 0.9, stagger: 0.12,
      }, "-=0.6");

    const el = root.current;
    el?.addEventListener("mousemove", onMouseMove);
    return () => el?.removeEventListener("mousemove", onMouseMove);
  }, { scope: root, dependencies: [ready] });

  return (
    <section
      id="top"
      ref={root}
      style={{
        position: "relative",
        minHeight: "100dvh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "8rem 2.5rem 2.5rem",
        overflow: "hidden",
      }}
    >
      {/* Atmospheric beams */}
      <BackgroundBeams />

      {/* Cursor spotlight */}
      <div
        ref={spotRef}
        style={{
          position: "absolute",
          width: "600px",
          height: "600px",
          borderRadius: "50%",
          background: `radial-gradient(circle, rgba(201,75,37,0.055) 0%, transparent 70%)`,
          transform: "translate(-50%, -50%)",
          left: spotPos.x,
          top: spotPos.y,
          pointerEvents: "none",
          zIndex: 1,
          transition: "left 0.08s linear, top 0.08s linear",
        }}
      />

      {/* Eyebrow row */}
      <div
        className="h-eyebrow eyebrow"
        style={{
          display: "flex",
          gap: "2.5rem",
          flexWrap: "wrap",
          position: "relative",
          zIndex: 2,
        }}
      >
        <span>EDOARDO PORCU</span>
        <span style={{ color: "var(--signal)" }}>// INGEGNERE DEL SUONO × COSTRUTTORE AI</span>
        <span style={{ marginLeft: "auto" }}>ELMAS, SARDEGNA</span>
      </div>

      {/* Name block */}
      <div
        ref={nameEl}
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          paddingTop: "1.5rem",
          paddingBottom: "1rem",
          position: "relative",
          zIndex: 2,
          willChange: "transform",
        }}
      >
        <div style={{ overflow: "hidden", lineHeight: 0.88 }}>
          <h1
            className="h-first display"
            style={{
              fontSize: "clamp(5.5rem, 18vw, 22rem)",
              color: "var(--paper)",
              letterSpacing: "-0.01em",
              display: "block",
            }}
          >
            EDOARDO
          </h1>
        </div>
        <div style={{ overflow: "hidden", lineHeight: 0.88, marginTop: "-0.04em" }}>
          <h1
            className="h-second"
            style={{
              fontFamily: '"DM Serif Display", serif',
              fontStyle: "italic",
              fontSize: "clamp(4.2rem, 13.5vw, 17rem)",
              color: "var(--paper)",
              opacity: 0.65,
              letterSpacing: "-0.02em",
              display: "block",
            }}
          >
            Porcu.
          </h1>
        </div>

        {/* Tags + tagline row */}
        <div
          style={{
            marginTop: "clamp(1.5rem, 4vw, 3.5rem)",
            display: "flex",
            alignItems: "flex-start",
            gap: "4rem",
            flexWrap: "wrap",
          }}
        >
          <div className="h-tags" style={{ display: "flex", flexDirection: "column", gap: "0.45rem" }}>
            {[
              ["CA", "Ingegnere del Suono"],
              ["IT", "Sviluppatore Audio-Tech"],
              ["WW", "Costruttore Ecosistema Why"],
            ].map(([code, role]) => (
              <span
                key={code}
                style={{
                  fontFamily: '"JetBrains Mono", monospace',
                  fontSize: "0.7rem",
                  letterSpacing: "0.13em",
                  textTransform: "uppercase",
                  color: "var(--dim)",
                  display: "flex",
                  gap: "0.7em",
                }}
              >
                <span style={{ color: "var(--signal)" }}>({code})</span>
                {role}
              </span>
            ))}
          </div>

          <p
            className="h-tagline"
            style={{
              fontFamily: '"DM Serif Display", serif',
              fontStyle: "italic",
              fontSize: "clamp(0.95rem, 1.8vw, 1.4rem)",
              color: "var(--dim)",
              maxWidth: "28rem",
              lineHeight: 1.55,
              borderLeft: "1px solid var(--line2)",
              paddingLeft: "1.5rem",
            }}
          >
            "La musica viene prima di tutto —{" "}
            <span
              style={{
                color: "var(--paper)",
                fontStyle: "normal",
                fontFamily: '"Outfit", sans-serif',
                fontSize: "0.9em",
                fontWeight: 300,
              }}
            >
              pianoforte a 3 anni, studio a Londra, codice dal 2024.
            </span>
            "
          </p>
        </div>
      </div>

      {/* Sci-fi panel */}
      <div
        style={{
          position: "absolute",
          bottom: "4.5rem",
          left: 0,
          right: 0,
          zIndex: 1,
          pointerEvents: "none",
        }}
      >
        <SciPanelHorizontal style={{ width: "100%" }} />
      </div>

      {/* Coordinates */}
      <div
        className="h-coord"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-end",
          paddingTop: "4rem",
          position: "relative",
          zIndex: 2,
        }}
      >
        <span
          style={{
            fontFamily: '"JetBrains Mono", monospace',
            fontSize: "0.6rem",
            letterSpacing: "0.15em",
            color: "var(--faint)",
            textTransform: "uppercase",
          }}
        >
          39.2542° N — 9.0474° E — ELMAS
        </span>
        <span
          style={{
            fontFamily: '"JetBrains Mono", monospace',
            fontSize: "0.6rem",
            letterSpacing: "0.15em",
            color: "var(--faint)",
            textTransform: "uppercase",
          }}
        >
          ↓ LAVORI
        </span>
      </div>
    </section>
  );
}
