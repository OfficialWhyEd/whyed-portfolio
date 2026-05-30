"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Reveal from "./Reveal";
import IconGrid from "./IconGrid";

gsap.registerPlugin(ScrollTrigger);

const stats = [
  { n: 3,   suffix: "",   label: "Anni — pianoforte"  },
  { n: 15,  suffix: "",   label: "Progetti costruiti"  },
  { n: 5,   suffix: "",   label: "App macOS native"    },
  { n: 783, suffix: "M",  label: "Token AI / 30 giorni" },
];

const stack = [
  "Logic Pro X", "Pro Tools", "Ableton Live", "Cubase Pro", "Reason",
  "JUCE / C++", "React", "Next.js", "Tauri", "Electron",
  "Node.js", "Python", "Rust", "TypeScript", "OpenCL / DSP",
  "Claude Code", "GSAP", "Framer Motion", "Vite", "Remotion",
  "Premiere Pro", "After Effects", "Photoshop", "Illustrator", "Audition",
  "Final Cut Pro", "Cinema 4D", "Figma",
  "Shopify", "Google Analytics", "WordPress",
  "Excel", "Photoshop", "AutoCAD",
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
              La musica viene prima di tutto.{" "}
              <span style={{ color: "var(--paper)", fontWeight: 500 }}>Pianoforte a 3 anni</span> —
              poi chitarra alla Scuola Civica di Cagliari, canto.
              Voce altissima, formazione in inglese.{" "}
              <span style={{ color: "var(--paper)", fontWeight: 500 }}>Vincitore di The Voice ufficiale su Costa Crociere</span>{" "}
              — prima edizione.
              Tutti, amici e famiglia, lo hanno sempre conosciuto così: quello che fa musica.
              Non è una scelta di carriera. È quello che è sempre stato.
            </p>
            <p>
              A 13 anni scopre la produzione — l'orecchio formato da anni di musica classica
              incontra la DAW. Dal 2016 al 2019 formazione professionale intensiva a Londra:
              {" "}<span style={{ color: "var(--paper)", fontWeight: 500 }}>London School of Sound</span>{" "}
              e <span style={{ color: "var(--paper)", fontWeight: 500 }}>Garnish Music Production School</span>{" "}
              — Mix & Mastering, Sound Design, Music Business.
              La pandemia (2020) interrompe i corsi e la vita internazionale. Rientro a Cagliari, Elmas.
              Studio aperto nel 2023.
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
              Ogni sistema gira localmente, a costo zero, sul MacBook Intel di Cagliari, Elmas, Sardegna.
            </p>
            <p>
              Collaborazioni: RAGEWINGS (rock/metal, Sardegna), Carlo/Aura (Linux backend per WhyCremisi),
              Aramald Productions (videoclip). Piattaforme attive:{" "}
              {piattaforme.join(" · ")}.
            </p>

            {/* Esperienze professionali tech */}
            <div style={{ marginTop: "2.5rem" }}>
              <div style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: "0.58rem", letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--signal)", marginBottom: "1.4rem" }}>
                ESPERIENZE PROFESSIONALI
              </div>
              {[
                {
                  period: "ott 2022 – giu 2023",
                  role: "Digital Project Manager",
                  company: "Rare Game — Milano",
                  desc: "Aperto e-commerce profittevole nel settore videoludico. Integrazione AI per migliorare operazioni e customer experience. Prima esposizione sistematica a sistemi AI applicati al business.",
                },
                {
                  period: "mar 2019 – nov 2022",
                  role: "Social Media Manager & Producer",
                  company: "ITALY Properties — Milano",
                  desc: "Gestione completa della presenza digitale. Produzione contenuti, campagne marketing, community management. 3+ anni di digital marketing ad alto volume.",
                },
                {
                  period: "gen – dic 2022",
                  role: "Tecnico Specializzato + Sales Manager",
                  company: "ENEL — Cagliari",
                  desc: "Tecnico specializzato telecomunicazioni ed energia. Street Coach e Sales Team Manager per Enel Energia Mercato Libero. Gestione team, negoziazione B2C e B2B.",
                },
                {
                  period: "mag – ott 2023",
                  role: "Dealer Telecomunicazioni",
                  company: "Vodafone — Bologna",
                  desc: "Gestione stazioni dealer business, telecomunicazioni B2B. Ma come sempre in ogni città: il lavoro è il mezzo, lo scopo è produrre musica e conoscere nuove persone con cui farla.",
                },
                {
                  period: "mag – set 2025",
                  role: "Front-of-House Specialist",
                  company: "051 Osteria — Bologna, Quadrilatero",
                  desc: "Eccellenza operativa in contesto luxury. Gestione clientela internazionale, coordinamento flussi, supervisione team — di fronte alla Fontana del Nettuno. Produceva musica e costruiva collaborazioni in parallelo: lo scopo di ogni città è sempre stato fare incontrare il suono con le persone giuste.",
                },
              ].map((exp) => (
                <div key={exp.role + exp.period} style={{ borderBottom: "1px solid var(--line)", paddingBottom: "1.2rem", marginBottom: "1.2rem" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: "1rem", flexWrap: "wrap", marginBottom: "0.3rem" }}>
                    <span style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: "0.72rem", color: "var(--paper)", letterSpacing: "0.04em" }}>
                      {exp.role}
                    </span>
                    <span style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: "0.52rem", color: "var(--signal)", letterSpacing: "0.1em", flexShrink: 0 }}>
                      {exp.period}
                    </span>
                  </div>
                  <div style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: "0.58rem", color: "var(--faint)", letterSpacing: "0.08em", marginBottom: "0.4rem" }}>
                    {exp.company}
                  </div>
                  <p style={{ fontFamily: '"Outfit", sans-serif', fontWeight: 300, fontSize: "0.82rem", color: "var(--dim)", lineHeight: 1.6 }}>
                    {exp.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        {/* Colonna stats + stack */}
        <Reveal delay={0.12}>
          {/* Layout editoriale sfalsato — due ritratti sovrapposti */}
          <div style={{
            position: "relative",
            height: "580px",
            marginBottom: "3rem",
          }}>
            {/* Ritratto principale — crewneck, verde */}
            <div style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "68%",
              height: "88%",
              overflow: "hidden",
            }}>
              <img
                src="/edoardo-portrait-green.jpg"
                alt="Edoardo Porcu"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  objectPosition: "top center",
                  display: "block",
                }}
              />
              <div style={{
                position: "absolute",
                inset: 0,
                background: "linear-gradient(to bottom, transparent 60%, var(--void) 100%)",
                pointerEvents: "none",
              }} />
            </div>

            {/* Ritratto secondario — hoodie, sfalsato in basso a destra */}
            <div style={{
              position: "absolute",
              bottom: 0,
              right: 0,
              width: "52%",
              height: "72%",
              overflow: "hidden",
              outline: "1px solid var(--line2)",
            }}>
              <img
                src="/edoardo-portrait-green2.jpg"
                alt=""
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  objectPosition: "top center",
                  display: "block",
                }}
              />
              <div style={{
                position: "absolute",
                inset: 0,
                background: "linear-gradient(to top, transparent 60%, var(--void) 100%)",
                pointerEvents: "none",
              }} />
            </div>

            {/* Label */}
            <div style={{
              position: "absolute",
              bottom: "1rem",
              left: "1rem",
              fontFamily: '"JetBrains Mono", monospace',
              fontSize: "0.5rem",
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "var(--faint)",
              zIndex: 2,
            }}>
              EDOARDO PORCU — CAGLIARI / ELMAS, SARDEGNA
            </div>
          </div>

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
          {/* Icone dev stack */}
          <div style={{ marginBottom: "0.6rem" }}>
            <div style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: "0.54rem", letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--faint)", marginBottom: "0.8rem" }}>DEV</div>
            <IconGrid filter={["react", "nextdotjs", "typescript", "nodedotjs", "python", "rust", "cplusplus", "juce", "electron", "tauri", "vite", "gsap", "framer", "remotion", "anthropic", "github"]} />
          </div>
          {/* Icone creative */}
          <div style={{ marginBottom: "1.5rem", marginTop: "1.2rem" }}>
            <div style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: "0.54rem", letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--faint)", marginBottom: "0.8rem" }}>CREATIVE & BUSINESS</div>
            <IconGrid filter={["adobephotoshop", "adobepremierepro", "adobeaftereffects", "adobeillustrator", "adobeaudition", "finalcutpro", "cinema4d", "figma", "shopify", "googleanalytics", "wordpress", "microsoftexcel"]} />
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
              { year: "2003→",   name: "Scuola Civica di Cagliari", detail: "Pianoforte · Chitarra · Canto — formazione classica dalla prima infanzia" },
              { year: "~2015",   name: "The Voice — Costa Crociere", detail: "Vincitore prima edizione ufficiale · Voce altissima in inglese" },
              { year: "2016–19", name: "London School of Sound", detail: "Certificate of Completion · Mix, Mastering, Sound Design · Londra" },
              { year: "2016–19", name: "Garnish Music Production School", detail: "Mix & Mastering, Sound Design, Music Business · Londra" },
              { year: "2019",    name: "European Bartender School", detail: "Londra — formazione internazionale" },
              { year: "2017–19",  name: "Istituto Amerigo Vespucci", detail: "Diploma scuola secondaria · Cagliari, Elmas, Sardegna" },
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
