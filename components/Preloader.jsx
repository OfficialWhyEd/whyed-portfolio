"use client";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

export default function Preloader({ onComplete }) {
  const root  = useRef(null);
  const lineRef = useRef(null);
  const [pct, setPct] = useState(0);

  useEffect(() => {
    const obj = { v: 0 };
    const tl = gsap.timeline({
      onComplete: () => {
        gsap.to(root.current, {
          yPercent: -105,
          duration: 1.05,
          ease: "expo.out",
          onStart: () => setTimeout(onComplete, 380),
        });
      },
    });
    tl.to(obj, {
      v: 100,
      duration: 2.4,
      ease: "power2.inOut",
      onUpdate: () => {
        const val = Math.round(obj.v);
        setPct(val);
        if (lineRef.current) {
          lineRef.current.style.width = val + "%";
        }
      },
    });
    return () => tl.kill();
  }, [onComplete]);

  const lines = [
    "init audio_engine.core",
    "mount whyed//identity",
    "calibrate signal_path",
    "load why_ecosystem.v2",
  ];

  return (
    <div
      ref={root}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 10001,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "2.5rem",
        background: "var(--void)",
      }}
    >
      {/* Top bar */}
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <span
          style={{
            fontFamily: '"JetBrains Mono", monospace',
            fontSize: "0.6rem",
            letterSpacing: "0.16em",
            textTransform: "uppercase",
            color: "var(--faint)",
          }}
        >
          WHYED_OS
        </span>
        <span
          style={{
            fontFamily: '"JetBrains Mono", monospace',
            fontSize: "0.6rem",
            letterSpacing: "0.16em",
            textTransform: "uppercase",
            color: "var(--faint)",
          }}
        >
          v2.6.0
        </span>
      </div>

      {/* Center: counter + log */}
      <div>
        {/* Log lines */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "0.3rem",
            marginBottom: "3rem",
          }}
        >
          {lines.map((l, i) => (
            <div
              key={i}
              style={{
                fontFamily: '"JetBrains Mono", monospace',
                fontSize: "0.7rem",
                letterSpacing: "0.06em",
                color: pct > i * 25 ? "var(--dim)" : "var(--faint)",
                opacity: pct > i * 22 ? 1 : 0.25,
                transition: "opacity 0.4s, color 0.4s",
                display: "flex",
                gap: "0.8em",
              }}
            >
              <span style={{ color: pct > i * 25 ? "var(--signal)" : "var(--faint)" }}>
                {pct > i * 25 ? "✓" : "›"}
              </span>
              {l}
            </div>
          ))}
        </div>

        {/* Big number */}
        <div
          className="display"
          style={{
            fontSize: "clamp(6rem, 20vw, 16rem)",
            color: "var(--paper)",
            lineHeight: 1,
            letterSpacing: "-0.02em",
          }}
        >
          <span style={{ color: "var(--signal)" }}>
            {String(pct).padStart(3, "0")}
          </span>
          <span
            style={{
              fontSize: "0.25em",
              color: "var(--faint)",
              marginLeft: "0.3em",
              verticalAlign: "middle",
              fontFamily: '"JetBrains Mono", monospace',
              letterSpacing: "0.1em",
            }}
          >
            %
          </span>
        </div>

        {/* Progress line */}
        <div
          style={{
            marginTop: "1.5rem",
            height: "1px",
            background: "var(--faint)",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <div
            ref={lineRef}
            style={{
              position: "absolute",
              left: 0,
              top: 0,
              height: "100%",
              width: "0%",
              background: "linear-gradient(90deg, var(--signal), var(--signal2))",
              transition: "width 0.1s linear",
              boxShadow: "0 0 12px var(--signal)",
            }}
          />
        </div>
      </div>

      {/* Bottom bar */}
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <span
          style={{
            fontFamily: '"JetBrains Mono", monospace',
            fontSize: "0.6rem",
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            color: "var(--faint)",
          }}
        >
          BOOTING INTERFACE
        </span>
        <span
          style={{
            fontFamily: '"JetBrains Mono", monospace',
            fontSize: "0.6rem",
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            color: "var(--faint)",
          }}
        >
          CAGLIARI · 39.2238° N
        </span>
      </div>
    </div>
  );
}
