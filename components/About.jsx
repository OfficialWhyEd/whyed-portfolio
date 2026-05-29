"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Reveal from "./Reveal";

gsap.registerPlugin(ScrollTrigger);

const stats = [
  { n: 13,  suffix: "",  label: "AGE STARTED"       },
  { n: 15,  suffix: "",  label: "PROJECTS BUILT"    },
  { n: 5,   suffix: "",  label: "macOS APPS"        },
  { n: 783, suffix: "M", label: "TOKENS / 30 DAYS"  },
];

const stack = [
  "Logic Pro X", "Pro Tools", "Ableton Live",
  "JUCE / C++", "React", "Next.js", "Tauri",
  "Node.js", "Python", "OpenCL / DSP",
  "Claude Code", "GSAP", "Electron",
];

function AnimatedStat({ n, suffix, label }) {
  const numRef = useRef(null);
  useEffect(() => {
    const el = numRef.current;
    const obj = { v: 0 };
    const st = ScrollTrigger.create({
      trigger: el,
      start: "top 88%",
      once: true,
      onEnter: () =>
        gsap.to(obj, {
          v: n,
          duration: 1.8,
          ease: "power3.out",
          onUpdate: () => (el.textContent = Math.round(obj.v) + suffix),
        }),
    });
    return () => st.kill();
  }, [n, suffix]);

  return (
    <div style={{ borderTop: "1px solid var(--line)", paddingTop: "1.2rem" }}>
      <div
        ref={numRef}
        className="display glow-signal"
        style={{
          fontSize: "clamp(2.8rem, 5vw, 4.5rem)",
          color: "var(--signal)",
          lineHeight: 1,
        }}
      >
        0{suffix}
      </div>
      <div
        style={{
          fontFamily: '"JetBrains Mono", monospace',
          fontSize: "0.58rem",
          letterSpacing: "0.16em",
          textTransform: "uppercase",
          color: "var(--faint)",
          marginTop: "0.5rem",
        }}
      >
        {label}
      </div>
    </div>
  );
}

export default function About() {
  return (
    <section
      id="about"
      style={{ padding: "8rem 2.5rem", position: "relative" }}
    >
      <Reveal>
        <div
          style={{
            fontFamily: '"JetBrains Mono", monospace',
            fontSize: "0.6rem",
            letterSpacing: "0.16em",
            textTransform: "uppercase",
            color: "var(--signal)",
            marginBottom: "2.5rem",
          }}
        >
          /// 03 — PROFILE
        </div>
      </Reveal>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 420px), 1fr))",
          gap: "5rem",
        }}
      >
        {/* Bio column */}
        <Reveal>
          <h2
            className="display"
            style={{
              fontSize: "clamp(2.8rem, 7vw, 7rem)",
              color: "var(--paper)",
              lineHeight: 0.9,
              marginBottom: "2.5rem",
            }}
          >
            FROM CAGLIARI<br />
            TO THE CONSOLE<br />
            <span
              style={{
                fontFamily: '"DM Serif Display", serif',
                fontStyle: "italic",
                color: "var(--dim)",
                fontSize: "0.75em",
              }}
            >
              & the code.
            </span>
          </h2>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "1.4rem",
              maxWidth: "38rem",
              color: "var(--dim)",
              lineHeight: 1.7,
              fontWeight: 300,
              fontSize: "0.95rem",
            }}
          >
            <p>
              Iniziato a <span style={{ color: "var(--paper)", fontWeight: 500 }}>13 anni</span>.
              Formato alla{" "}
              <span style={{ color: "var(--paper)", fontWeight: 500 }}>London School of Sound</span>{" "}
              (2017–18): acustica, tracking, mix, mastering.
              Nel 2023 apro il mio studio a Cagliari.
            </p>
            <p>
              Filosofia lenta: la musica come canale per emozioni che sfuggono alle parole.
              Mix in-the-box per precisione chirurgica, calore analogico in fase di ripresa.
            </p>
            <p>
              Oggi unisco due mondi — l&apos;orecchio del fonico e la mente del developer.
              Costruisco strumenti audio con{" "}
              <span style={{ color: "var(--paper)", fontWeight: 500 }}>personalità interna</span>:
              plugin che ascoltano, ricordano, propongono.
            </p>
            <p>
              15 progetti avviati. 5 app macOS in produzione. 783M token consumati in 30 giorni
              costruendo il{" "}
              <span style={{ color: "var(--signal)", fontWeight: 500 }}>Why Ecosystem</span>.
            </p>
          </div>
        </Reveal>

        {/* Stats + stack column */}
        <Reveal delay={0.12}>
          {/* Stats grid */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "1.8rem",
              marginBottom: "3rem",
            }}
          >
            {stats.map((s) => (
              <AnimatedStat key={s.label} {...s} />
            ))}
          </div>

          {/* Stack */}
          <div
            style={{
              fontFamily: '"JetBrains Mono", monospace',
              fontSize: "0.6rem",
              letterSpacing: "0.16em",
              textTransform: "uppercase",
              color: "var(--faint)",
              marginBottom: "1rem",
            }}
          >
            STACK
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
            {stack.map((s) => (
              <span
                key={s}
                data-hover
                style={{
                  fontFamily: '"JetBrains Mono", monospace',
                  fontSize: "0.62rem",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "var(--dim)",
                  border: "1px solid var(--line)",
                  padding: "0.35rem 0.7rem",
                  transition: "border-color 0.2s, color 0.2s",
                  cursor: "default",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "rgba(201,75,37,0.4)";
                  e.currentTarget.style.color = "var(--paper)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "var(--line)";
                  e.currentTarget.style.color = "var(--dim)";
                }}
              >
                {s}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
