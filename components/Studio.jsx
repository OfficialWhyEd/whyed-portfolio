"use client";
import { useState } from "react";
import Reveal from "./Reveal";
import IconGrid from "./IconGrid";

function HardwareRow({ h, i }) {
  const [hov, setHov] = useState(false);
  return (
    <div
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        display: "grid",
        gridTemplateColumns: "1fr auto",
        alignItems: "baseline",
        padding: "1rem 0.6rem",
        margin: "0 -0.6rem",
        borderBottom: "1px solid var(--line)",
        background: hov ? "rgba(201,75,37,0.04)" : "transparent",
        transition: "background 0.2s",
        gap: "1rem",
      }}
    >
      <div>
        <div style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: "0.72rem", color: hov ? "var(--paper)" : "var(--paper)", letterSpacing: "0.06em", marginBottom: "0.2rem", transition: "color 0.2s" }}>
          {h.name}
        </div>
        <div style={{ fontFamily: '"Outfit", sans-serif', fontSize: "0.78rem", color: "var(--dim)", fontWeight: 300 }}>
          {h.detail}
        </div>
      </div>
      <span style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: "0.52rem", color: hov ? "var(--signal)" : "var(--faint)", letterSpacing: "0.1em", flexShrink: 0, transition: "color 0.2s" }}>
        {String(i + 1).padStart(2, "0")}
      </span>
    </div>
  );
}

const hardware = [
  { name: "Audient Interface", detail: "Conversione A/D + preamp microfonico" },
  { name: "Yamaha HS Monitors", detail: "Bilanciamento frequenze neutro — campo vicino" },
  { name: "Neumann U-87", detail: "Condensatore large-diaphragm — voce, strumenti" },
  { name: "Slate Microphone System", detail: "Modeling microfono — versatilità massima" },
  { name: "AKG Overhead Mics", detail: "Set stereo — batteria, ambiente, colore" },
  { name: "MIDI Keyboard", detail: "Composizione, arrangiamento, design sonoro" },
  { name: "MacBook Pro 15\" Mid 2015", detail: "i7 2.2GHz · 16GB RAM · Intel Iris Pro — sviluppo e produzione" },
];

const daw = [
  { name: "Logic Pro X", primary: true },
  { name: "Pro Tools", primary: false },
  { name: "Ableton Live", primary: false },
];

const skills = [
  "Pianoforte",
  "Chitarra",
  "Canto",
  "Mixing",
  "Mastering",
  "Produzione",
  "Sound Design",
  "Beat Making",
  "Remixing",
  "Game Audio",
  "Composizione",
  "Arrangiamento",
];

const genres = [
  "Dubstep", "Electronic", "House", "Techno",
  "Trap", "EDM", "Electronic Pop", "Lo-Fi", "Indie",
];

const refs = [
  { name: "Skrillex", role: "Sound Design · Complessità strutturale" },
  { name: "Fred again..", role: "Emotività · Texture · Sampling" },
  { name: "Four Tet", role: "Ambient · Minimalismo · Calore" },
];

export default function Studio() {
  return (
    <section id="studio" style={{ padding: "8rem 2.5rem", position: "relative" }}>
      <Reveal>
        <div
          style={{
            fontFamily: '"JetBrains Mono", monospace',
            fontSize: "0.6rem",
            letterSpacing: "0.16em",
            textTransform: "uppercase",
            color: "var(--signal)",
            marginBottom: "1rem",
          }}
        >
          /// 03 — STUDIO
        </div>
        <h2
          className="display"
          style={{
            fontSize: "clamp(3rem, 8vw, 8rem)",
            color: "var(--paper)",
            lineHeight: 0.9,
            marginBottom: "5rem",
          }}
        >
          STUDIO &<br />
          <span
            style={{
              fontFamily: '"DM Serif Display", serif',
              fontStyle: "italic",
              color: "var(--dim)",
              fontSize: "0.65em",
            }}
          >
            workflow.
          </span>
        </h2>
      </Reveal>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 360px), 1fr))",
          gap: "6rem",
        }}
      >
        {/* Hardware */}
        <Reveal>
          <div>
            <div style={{
              fontFamily: '"JetBrains Mono", monospace',
              fontSize: "0.58rem",
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "var(--dim)",
              marginBottom: "0.8rem",
              paddingTop: "0.6rem",
              borderTop: "1px solid var(--line2)",
            }}>
              HARDWARE
            </div>
            <div>
              {hardware.map((h, i) => (
                <HardwareRow key={h.name} h={h} i={i} />
              ))}
            </div>

            {/* DAW — icone reali */}
            <div style={{ marginTop: "3rem" }}>
              <div
                style={{
                  fontFamily: '"JetBrains Mono", monospace',
                  fontSize: "0.58rem",
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  color: "var(--faint)",
                  marginBottom: "1.2rem",
                }}
              >
                DAW
              </div>
              <IconGrid filter={["logic", "protools", "ableton"]} />
              <div style={{ marginTop: "1.5rem", display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
                {daw.map((d) => (
                  <span
                    key={d.name}
                    style={{
                      fontFamily: '"JetBrains Mono", monospace',
                      fontSize: "0.62rem",
                      letterSpacing: "0.1em",
                      color: d.primary ? "var(--signal)" : "var(--dim)",
                      border: `1px solid ${d.primary ? "rgba(201,75,37,0.4)" : "var(--line)"}`,
                      padding: "0.35rem 0.8rem",
                      textTransform: "uppercase",
                    }}
                  >
                    {d.name}
                    {d.primary && (
                      <span style={{ marginLeft: "0.5em", color: "var(--signal)" }}>●</span>
                    )}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </Reveal>

        {/* Skills + Generi + Riferimenti */}
        <Reveal delay={0.12}>
          {/* Skills */}
          <div>
            <div style={{
              fontFamily: '"JetBrains Mono", monospace',
              fontSize: "0.58rem",
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "var(--dim)",
              marginBottom: "0.8rem",
              paddingTop: "0.6rem",
              borderTop: "1px solid var(--line2)",
            }}>
              COMPETENZE
            </div>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "0.4rem",
                marginBottom: "3rem",
              }}
            >
              {skills.map((s) => (
                <span
                  key={s}
                  style={{
                    fontFamily: '"JetBrains Mono", monospace',
                    fontSize: "0.6rem",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    color: "var(--dim)",
                    border: "1px solid var(--line)",
                    padding: "0.3rem 0.7rem",
                  }}
                >
                  {s}
                </span>
              ))}
            </div>

            {/* Generi */}
            <div style={{
              fontFamily: '"JetBrains Mono", monospace',
              fontSize: "0.58rem",
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "var(--dim)",
              marginBottom: "0.8rem",
              paddingTop: "0.6rem",
              borderTop: "1px solid var(--line2)",
            }}>
              GENERI
            </div>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "0.4rem",
                marginBottom: "3rem",
              }}
            >
              {genres.map((g) => (
                <span
                  key={g}
                  style={{
                    fontFamily: '"Outfit", sans-serif',
                    fontSize: "0.8rem",
                    color: "var(--dim)",
                    fontWeight: 300,
                    borderBottom: "1px solid var(--line)",
                    paddingBottom: "0.1rem",
                    marginRight: "0.3rem",
                  }}
                >
                  {g}
                </span>
              ))}
            </div>

            {/* Riferimenti */}
            <div style={{
              fontFamily: '"JetBrains Mono", monospace',
              fontSize: "0.58rem",
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "var(--dim)",
              marginBottom: "0.8rem",
              paddingTop: "0.6rem",
              borderTop: "1px solid var(--line2)",
            }}>
              RIFERIMENTI ARTISTICI
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              {refs.map((r, i) => (
                <div key={r.name} style={{
                  borderTop: i === 0 ? "none" : "1px solid var(--line)",
                  paddingTop: "1.4rem",
                  paddingBottom: "1.4rem",
                }}>
                  <span className="display" style={{
                    fontSize: "clamp(2rem, 4.5vw, 3.8rem)",
                    color: "var(--paper)",
                    lineHeight: 0.92,
                    display: "block",
                    marginBottom: "0.4rem",
                    letterSpacing: "0.02em",
                  }}>
                    {r.name}
                  </span>
                  <span style={{
                    fontFamily: '"Outfit", sans-serif',
                    fontSize: "0.8rem",
                    color: "var(--dim)",
                    fontWeight: 300,
                    letterSpacing: "0.02em",
                  }}>
                    {r.role}
                  </span>
                </div>
              ))}
            </div>

            {/* Piattaforme con icone */}
            <div style={{ marginTop: "3rem" }}>
              <div style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: "0.58rem", letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--faint)", marginBottom: "1.2rem" }}>
                PIATTAFORME
              </div>
              <IconGrid filter={["spotify", "applemusic", "soundcloud", "youtube", "instagram", "tiktok"]} />
            </div>

            {/* Lingue */}
            <div style={{ marginTop: "3rem" }}>
              <div
                style={{
                  fontFamily: '"JetBrains Mono", monospace',
                  fontSize: "0.58rem",
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  color: "var(--faint)",
                  marginBottom: "1rem",
                }}
              >
                LINGUE
              </div>
              <div style={{ display: "flex", gap: "1.5rem" }}>
                {[
                  { lang: "Italiano", level: "Madrelingua" },
                  { lang: "Inglese", level: "C1 Avanzato" },
                  { lang: "Spagnolo", level: "Base" },
                ].map((l) => (
                  <div key={l.lang}>
                    <div
                      style={{
                        fontFamily: '"JetBrains Mono", monospace',
                        fontSize: "0.7rem",
                        color: "var(--paper)",
                        letterSpacing: "0.06em",
                      }}
                    >
                      {l.lang}
                    </div>
                    <div
                      style={{
                        fontFamily: '"Outfit", sans-serif',
                        fontSize: "0.72rem",
                        color: "var(--dim)",
                        fontWeight: 300,
                        marginTop: "0.2rem",
                      }}
                    >
                      {l.level}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
