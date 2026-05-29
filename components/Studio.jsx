"use client";
import Reveal from "./Reveal";

const hardware = [
  { name: "Audient Interface", detail: "Conversione A/D + preamp microfonico" },
  { name: "Yamaha HS Monitors", detail: "Bilanciamento frequenze neutro — campo vicino" },
  { name: "Neumann U-87", detail: "Condensatore large-diaphragm — voce, strumenti" },
  { name: "Slate Microphone System", detail: "Modeling microfono — versatilità massima" },
  { name: "AKG Overhead Mics", detail: "Set stereo — batteria, ambiente, colore" },
  { name: "MIDI Keyboard", detail: "Composizione, arrangiamento, design sonoro" },
  { name: "MacBook Pro Intel", detail: "x86_64 — ambiente primario di sviluppo e produzione" },
];

const daw = [
  { name: "Logic Pro X", primary: true },
  { name: "Pro Tools", primary: false },
  { name: "Ableton Live", primary: false },
];

const skills = [
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
            <div
              style={{
                fontFamily: '"JetBrains Mono", monospace',
                fontSize: "0.58rem",
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "var(--faint)",
                marginBottom: "1.5rem",
              }}
            >
              HARDWARE
            </div>
            <div>
              {hardware.map((h, i) => (
                <div
                  key={h.name}
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr auto",
                    alignItems: "baseline",
                    padding: "1rem 0",
                    borderBottom: "1px solid var(--line)",
                    gap: "1rem",
                  }}
                >
                  <div>
                    <div
                      style={{
                        fontFamily: '"JetBrains Mono", monospace',
                        fontSize: "0.72rem",
                        color: "var(--paper)",
                        letterSpacing: "0.06em",
                        marginBottom: "0.2rem",
                      }}
                    >
                      {h.name}
                    </div>
                    <div
                      style={{
                        fontFamily: '"Outfit", sans-serif',
                        fontSize: "0.78rem",
                        color: "var(--dim)",
                        fontWeight: 300,
                      }}
                    >
                      {h.detail}
                    </div>
                  </div>
                  <span
                    style={{
                      fontFamily: '"JetBrains Mono", monospace',
                      fontSize: "0.52rem",
                      color: "var(--faint)",
                      letterSpacing: "0.1em",
                      flexShrink: 0,
                    }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
              ))}
            </div>

            {/* DAW */}
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
                DAW
              </div>
              <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
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
              RIFERIMENTI ARTISTICI
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              {refs.map((r) => (
                <div
                  key={r.name}
                  style={{
                    display: "flex",
                    alignItems: "baseline",
                    gap: "1.5rem",
                    borderBottom: "1px solid var(--line)",
                    paddingBottom: "1rem",
                  }}
                >
                  <span
                    className="display"
                    style={{
                      fontSize: "clamp(1.2rem, 2vw, 1.6rem)",
                      color: "var(--paper)",
                      lineHeight: 1,
                      flexShrink: 0,
                    }}
                  >
                    {r.name}
                  </span>
                  <span
                    style={{
                      fontFamily: '"Outfit", sans-serif',
                      fontSize: "0.78rem",
                      color: "var(--dim)",
                      fontWeight: 300,
                    }}
                  >
                    {r.role}
                  </span>
                </div>
              ))}
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
