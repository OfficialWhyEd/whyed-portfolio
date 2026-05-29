"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Reveal from "./Reveal";
import IconGrid from "./IconGrid";

gsap.registerPlugin(ScrollTrigger);

const stats = [
  { n: 13,  suffix: "",   label: "Anni — ha iniziato" },
  { n: 15,  suffix: "",   label: "Progetti costruiti"  },
  { n: 5,   suffix: "",   label: "App macOS native"    },
  { n: 783, suffix: "M",  label: "Token AI / 30 giorni" },
];

const stack = [
  "Logic Pro X", "Pro Tools", "Ableton Live",
  "JUCE / C++", "React", "Next.js", "Tauri",
  "Node.js", "Python", "Rust", "OpenCL / DSP",
  "Claude Code", "GSAP", "Electron", "Remotion",
  "TypeScript", "Framer Motion", "Vite",
];

const piattaforme = [
  "Spotify", "Apple Music", "SoundCloud", "SoundBetter", "Audius",
];

function AnimatedStat({ n, suffix, label }) {
  const numRef = useRef(null);

  useGSAP(() => {
    const el = numRef.current;
    const obj = { v: 0 };
    ScrollTrigger.create({
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
  });

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
    <section id="profilo" style={{ padding: "8rem 2.5rem", position: "relative" }}>
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
          /// 06 — PROFILO
        </div>
      </Reveal>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 420px), 1fr))",
          gap: "5rem",
        }}
      >
        {/* Colonna bio */}
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
            DA CAGLIARI<br />
            ALLA CONSOLE<br />
            <span
              style={{
                fontFamily: '"DM Serif Display", serif',
                fontStyle: "italic",
                color: "var(--dim)",
                fontSize: "0.75em",
              }}
            >
              & al codice.
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
              Iniziato a <span style={{ color: "var(--paper)", fontWeight: 500 }}>13 anni</span>,
              Elmas (Sardegna). Formato alla{" "}
              <span style={{ color: "var(--paper)", fontWeight: 500 }}>London School of Sound</span>{" "}
              (giugno 2018): acustica, tracking, mix, mastering in contesto professionale londinese.
              Studio aperto a Elmas, Cagliari, nel 2023.
            </p>
            <p>
              Filosofia lenta: la musica come canale per emozioni che sfuggono alle parole.
              Produzione in-the-box per recall rapido e precisione chirurgica —
              calore analogico riservato alla fase di ripresa voci e acustici.
              Confronto costante con riferimenti commerciali, 10 revisioni standard, 2–4 settimane di consegna.
            </p>
            <p>
              La svolta nel 2024: l'orecchio del fonico non basta più. Serve codice.
              Nasce il Why Ecosystem — strumenti audio con{" "}
              <span style={{ color: "var(--paper)", fontWeight: 500 }}>personalità interna</span>:
              plugin che ascoltano il signal path, ricordano le sessioni, propongono soluzioni,
              dialogano via AI.
            </p>
            <p>
              15 progetti avviati. 5 app macOS native in produzione. 783 milioni di token consumati
              in 30 giorni costruendo il{" "}
              <span style={{ color: "var(--signal)", fontWeight: 500 }}>Why Ecosystem</span> —
              top 0.1% usage globale Claude Pro.
              Ogni sistema gira localmente, a costo zero, sul MacBook Intel di Elmas, Sardegna.
            </p>
            <p>
              Collaborazioni: RAGEWINGS (rock/metal, Sardegna), Carlo/Aura (Linux backend per WhyCremisi),
              Aramald Productions (videoclip). Piattaforme attive:{" "}
              {piattaforme.join(" · ")}.
            </p>
          </div>
        </Reveal>

        {/* Colonna stats + stack */}
        <Reveal delay={0.12}>
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
            STACK TECNICO
          </div>
          {/* Icone brand con colori originali */}
          <div style={{ marginBottom: "1.5rem" }}>
            <IconGrid filter={["react", "nextdotjs", "typescript", "nodedotjs", "python", "rust", "cplusplus", "juce", "electron", "tauri", "vite", "gsap", "framer", "remotion", "anthropic", "github"]} />
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem", marginBottom: "3rem" }}>
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

          {/* Formazione */}
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
            FORMAZIONE
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {[
              { year: "giu 2018", name: "London School of Sound", detail: "Certificate of Completion · Mixing, Mastering, Acustica · Londra" },
              { year: "2019",    name: "European Bartender School", detail: "Londra — formazione internazionale" },
              { year: "2017–19",  name: "Istituto Amerigo Vespucci", detail: "Diploma scuola secondaria · Elmas, Sardegna" },
              { year: "nov–dic 2019", name: "European Bartender School", detail: "Londra — Certificate of Completion" },
              { year: "2013→",   name: "Autodidatta", detail: "Produzione, DAW, sound design — orecchio come guida" },
            ].map((f) => (
              <div
                key={f.name}
                style={{
                  padding: "1rem 0",
                  borderBottom: "1px solid var(--line)",
                }}
              >
                <div style={{ display: "flex", alignItems: "baseline", gap: "1rem", marginBottom: "0.2rem" }}>
                  <span
                    style={{
                      fontFamily: '"JetBrains Mono", monospace',
                      fontSize: "0.58rem",
                      color: "var(--signal)",
                      letterSpacing: "0.1em",
                      flexShrink: 0,
                    }}
                  >
                    {f.year}
                  </span>
                  <span
                    style={{
                      fontFamily: '"JetBrains Mono", monospace',
                      fontSize: "0.72rem",
                      color: "var(--paper)",
                      letterSpacing: "0.06em",
                    }}
                  >
                    {f.name}
                  </span>
                </div>
                <div
                  style={{
                    fontFamily: '"Outfit", sans-serif',
                    fontSize: "0.8rem",
                    color: "var(--dim)",
                    fontWeight: 300,
                    paddingLeft: "4.5rem",
                  }}
                >
                  {f.detail}
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
