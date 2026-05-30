"use client";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Reveal from "./Reveal";

gsap.registerPlugin(ScrollTrigger);

const events = [
  {
    year: "2003",
    label: "INIZIO",
    title: "Pianoforte a 3 anni",
    desc: "La musica prima di tutto il resto. A 3 anni inizia al pianoforte. Poi chitarra alla Scuola Civica di Cagliari. Canto, voce altissima in inglese. Amici e famiglia lo conoscono da sempre così: quello che fa musica.",
  },
  {
    year: "2013",
    label: "PRODUZIONE",
    title: "I primi beat",
    desc: "A 13 anni scopre la produzione. L'orecchio formato da anni di pianoforte, chitarra e canto incontra la DAW.",
  },
  {
    year: "~2015",
    label: "VITTORIA",
    title: "The Voice — Costa Crociere",
    desc: "Vince la prima edizione ufficiale di The Voice organizzata su Costa Crociere. La conferma pubblica di una voce fuori dal comune — altissima, in inglese, riconosciuta su un palco vero davanti a centinaia di persone.",
  },
  {
    year: "2016–19",
    label: "FORMAZIONE",
    title: "Scuole di musica a Londra",
    desc: "Anni di formazione professionale intensiva: London School of Sound e Garnish Music Production School — Mix & Mastering, Sound Design, Music Business. Parallelo all'Istituto Amerigo Vespucci (diploma 2019). La base tecnica su cui è costruito tutto.",
  },
  {
    year: "2019–20",
    label: "LONDRA",
    title: "Lucky Voice Soho + Pandemia",
    desc: "Bartender al Lucky Voice Soho, Londra (2019–20). European Bartender School (nov–dic 2019). Don Quijote Spanish School (ott 2019). Il COVID-19 interrompe i corsi e la vita internazionale. Rientro in Sardegna.",
  },
  {
    year: "2019–22",
    label: "MILANO",
    title: "Social Media Manager & Producer",
    desc: "Social Media Manager e Producer per ITALY Properties (mar 2019 – nov 2022). Bartender in locali milanesi: Old Fashion, Mojito Bollate, Chupiteria The Social, Sphera Locura Navigli.",
  },
  {
    year: "2022",
    label: "OPERA + ENEL",
    title: "Say I'm Different + Tecnico Specializzato",
    desc: "25 tracce, 53 min — l'album. Contemporaneamente: Tecnico Specializzato e Street Coach/Sales Team Manager ENEL (Cagliari, gen–dic 2022). Poi Digital PM Rare Game Milano (ott 2022 – giu 2023): e-commerce gaming + AI.",
  },
  {
    year: "2023",
    label: "STUDIO",
    title: "Studio a Cagliari/Elmas + Vodafone Bologna",
    desc: "Apre lo studio fisico. Mixing e mastering freelance: album indie, EP pop-rock. Dealer Vodafone Bologna (mag–ott 2023) — ma il vero motivo era produrre, conoscere gente nuova, fare musica. Bartender Sphera Locura Milano (mar–giu 2023).",
  },
  {
    year: "2025",
    label: "BOLOGNA",
    title: "051 Osteria + Ecosistema",
    desc: "Front-of-House Specialist — 051 Osteria, Quadrilatero di Bologna, di fronte alla Fontana del Nettuno (mag–set 2025). Come sempre: lavorare intensamente mentre lo scopo reale è produrre, conoscere artisti, costruire nuove collaborazioni musicali.",
  },
  {
    year: "2025",
    label: "MEDIA",
    title: "People Podcast — \"Il Fallimento come Elogio\"",
    desc: "Ospite al People Podcast: una conversazione pubblica sulla storia di riscatto, sul fallimento come strumento e sulla scelta di costruire un ecosistema personale invece di seguire le vie convenzionali.",
    image: "/people-podcast.png",
  },
  {
    year: "2026",
    label: "DEVELOPER",
    title: "WhyCremisi — il primo plugin",
    desc: "Nasce il Why Ecosystem. Primo plugin VST3 con AI integrata — la svolta: il suono non basta, servono strumenti che pensano. RAGEWINGS: Stars feat. WhyEd (ott 2024). WhyCremisi prende forma e vita propria.",
  },
  {
    year: "2026",
    label: "ECOSISTEMA",
    title: "15 progetti — top 0.1% globale",
    desc: "783M token AI in 30 giorni. WhyEmuGBA, WhyCavalry, Designo, HyperFrames completati. Top 0.1% usage Claude Pro globale. L'ecosistema gira autonomamente da Cagliari, Elmas, Sardegna.",
    isLast: true,
  },
];

const LINE_LEFT = "var(--tl-left)";

export default function Timeline() {
  const root    = useRef(null);
  const lineRef = useRef(null);
  const scanRef = useRef(null);

  useGSAP(() => {
    if (!lineRef.current) return;

    /* Linea che cresce al scroll */
    gsap.fromTo(lineRef.current,
      { scaleY: 0, transformOrigin: "top center" },
      {
        scaleY: 1,
        ease: "none",
        scrollTrigger: {
          trigger: root.current,
          start: "top 75%",
          end:   "bottom 25%",
          scrub: 1.2,
        },
      }
    );

    /* Scan light che scende sulla linea */
    if (scanRef.current) {
      gsap.fromTo(scanRef.current,
        { top: "0%", opacity: 0 },
        {
          top: "100%",
          opacity: 1,
          ease: "none",
          scrollTrigger: {
            trigger: root.current,
            start: "top 75%",
            end:   "bottom 25%",
            scrub: 1.2,
          },
        }
      );
    }

    /* Ogni item entra da sinistra */
    root.current?.querySelectorAll(".tl-item").forEach((el) => {
      gsap.from(el, {
        opacity: 0,
        x: -24,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: { trigger: el, start: "top 88%", once: true },
      });
    });
  }, { scope: root });

  return (
    <section
      id="cronologia"
      ref={root}
      style={{ padding: "8rem 2.5rem", position: "relative" }}
    >
      <style>{`
        @keyframes ring-pulse {
          0%   { transform: scale(1);   opacity: 0.7; }
          60%  { transform: scale(2.2); opacity: 0;   }
          100% { transform: scale(2.2); opacity: 0;   }
        }
        @keyframes dot-live {
          0%, 100% { opacity: 1;   box-shadow: 0 0 0 0 rgba(201,75,37,0.7); }
          50%       { opacity: 0.7; box-shadow: 0 0 0 6px rgba(201,75,37,0); }
        }
        .tl-item:hover .tl-content {
          border-left-color: rgba(201,75,37,0.4) !important;
        }
      `}</style>

      <Reveal>
        <div style={{
          fontFamily: '"JetBrains Mono", monospace',
          fontSize: "0.6rem",
          letterSpacing: "0.16em",
          textTransform: "uppercase",
          color: "var(--signal)",
          marginBottom: "1rem",
        }}>
          /// 02 — CRONOLOGIA
        </div>
        <h2 className="display" style={{
          fontSize: "clamp(3rem, 8vw, 8rem)",
          color: "var(--paper)",
          lineHeight: 0.9,
          marginBottom: "6rem",
        }}>
          LA STORIA<br />
          <span style={{
            fontFamily: '"DM Serif Display", serif',
            fontStyle: "italic",
            color: "var(--dim)",
            fontSize: "0.65em",
          }}>
            dal suono al codice.
          </span>
        </h2>
      </Reveal>

      <div style={{ position: "relative", maxWidth: "960px" }}>

        {/* ── Linea verticale principale con glow ── */}
        <div
          ref={lineRef}
          style={{
            position: "absolute",
            left: LINE_LEFT,
            top: 0,
            bottom: 0,
            width: "2px",
            background: "linear-gradient(to bottom, var(--signal) 0%, rgba(201,75,37,0.5) 50%, rgba(201,75,37,0.1) 85%, transparent 100%)",
            boxShadow: "0 0 12px rgba(201,75,37,0.35), 0 0 4px rgba(201,75,37,0.6)",
            transformOrigin: "top center",
            zIndex: 1,
          }}
        />

        {/* ── Scan light in movimento ── */}
        <div
          ref={scanRef}
          style={{
            position: "absolute",
            left: LINE_LEFT,
            top: 0,
            width: "2px",
            height: "80px",
            background: "linear-gradient(to bottom, transparent, rgba(240,237,232,0.9), transparent)",
            filter: "blur(1px)",
            zIndex: 2,
            pointerEvents: "none",
            transform: "translateX(0)",
          }}
        />

        {/* ── Linea destra — simmetria ── */}
        <div style={{
          position: "absolute",
          right: 0,
          top: 0,
          bottom: 0,
          width: "1px",
          background: "linear-gradient(to bottom, transparent 0%, var(--line2) 10%, var(--line2) 90%, transparent 100%)",
          pointerEvents: "none",
        }} />

        {events.map((ev, i) => {
          const isLast = !!ev.isLast;
          const isPast = i < events.length - 3;

          return (
            <div
              key={`${ev.year}-${i}`}
              className="tl-item"
              style={{
                display: "grid",
                gridTemplateColumns: `${LINE_LEFT} 1fr`,
                marginBottom: isLast ? "0" : ["VITTORIA", "FORMAZIONE", "ECOSISTEMA", "DEVELOPER"].includes(ev.label) ? "5.5rem" : "3.5rem",
                alignItems: "start",
                position: "relative",
              }}
            >
              {/* ── Year column ── */}
              <div style={{
                textAlign: "right",
                paddingRight: "2rem",
                position: "relative",
                paddingTop: "0.15rem",
              }}>
                {/* Ring esterno — pulse per tutti, più forte sull'ultimo */}
                {!isPast && (
                  <div style={{
                    position: "absolute",
                    right: "-8px",
                    top: "0.35rem",
                    width: "14px",
                    height: "14px",
                    borderRadius: "50%",
                    border: `1px solid ${isLast ? "rgba(201,75,37,0.9)" : "rgba(201,75,37,0.4)"}`,
                    animation: `ring-pulse ${isLast ? "1.8s" : "3s"} ease-out infinite`,
                    pointerEvents: "none",
                  }} />
                )}
                {/* Dot centrale */}
                <div style={{
                  position: "absolute",
                  right: "-3px",
                  top: "0.55rem",
                  width: isLast ? "8px" : "6px",
                  height: isLast ? "8px" : "6px",
                  borderRadius: "50%",
                  background: isLast ? "var(--signal)" : isPast ? "var(--faint)" : "rgba(201,75,37,0.7)",
                  boxShadow: isLast ? "0 0 8px rgba(201,75,37,0.8)" : "none",
                  animation: isLast ? "dot-live 2s ease-in-out infinite" : "none",
                  zIndex: 3,
                }} />
                {/* Connettore orizzontale */}
                <div style={{
                  position: "absolute",
                  right: 0,
                  top: "0.78rem",
                  width: "1.8rem",
                  height: "1px",
                  background: isLast
                    ? "linear-gradient(to right, var(--signal), transparent)"
                    : "linear-gradient(to right, var(--line2), transparent)",
                }} />

                <span style={{
                  fontFamily: '"JetBrains Mono", monospace',
                  fontSize: "clamp(1rem, 1.8vw, 1.5rem)",
                  letterSpacing: "0.02em",
                  color: isLast ? "var(--signal)" : isPast ? "var(--dim)" : "var(--paper)",
                  display: "block",
                  lineHeight: 1,
                  fontVariantNumeric: "tabular-nums",
                  fontWeight: isLast ? 600 : 400,
                }}>
                  {ev.year}
                </span>
              </div>

              {/* ── Content column ── */}
              <div
                className="tl-content"
                style={{
                  paddingLeft: "2rem",
                  borderLeft: `1px solid ${isLast ? "rgba(201,75,37,0.2)" : "transparent"}`,
                  transition: "border-left-color 0.3s",
                }}
              >
                {/* Anno mobile — nascosto su desktop, visibile su mobile via CSS */}
                <span className="tl-year-mobile">
                  {ev.year}
                </span>

                {/* Label badge */}
                {(() => {
                  const accent = ev.label === "VITTORIA" ? "#c9a025"
                    : ev.label === "ECOSISTEMA" || ev.label === "DEVELOPER" ? "var(--signal)"
                    : ev.label === "FORMAZIONE" ? "#4a9eba"
                    : "var(--signal)";
                  return (
                    <div style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "0.4rem",
                      fontFamily: '"JetBrains Mono", monospace',
                      fontSize: "0.5rem",
                      letterSpacing: "0.2em",
                      textTransform: "uppercase",
                      color: accent,
                      border: `1px solid ${accent}40`,
                      borderRadius: "2px",
                      padding: "0.15rem 0.5rem",
                      marginBottom: "0.5rem",
                    }}>
                      <span style={{ width: "3px", height: "3px", borderRadius: "50%", background: accent, display: "inline-block", flexShrink: 0 }} />
                      {ev.label}
                    </div>
                  );
                })()}

                <h3 className="display" style={{
                  fontSize: ["VITTORIA","FORMAZIONE","ECOSISTEMA","DEVELOPER"].includes(ev.label)
                    ? "clamp(1.4rem, 2.8vw, 2.4rem)"
                    : "clamp(1.1rem, 2.2vw, 1.85rem)",
                  color: "var(--paper)",
                  marginBottom: "0.55rem",
                  lineHeight: 1.0,
                }}>
                  {ev.title}
                </h3>
                <p style={{
                  fontFamily: '"Outfit", sans-serif',
                  fontWeight: 300,
                  fontSize: "0.87rem",
                  color: "var(--dim)",
                  lineHeight: 1.72,
                  maxWidth: "36rem",
                  marginBottom: ev.image ? "1rem" : 0,
                }}>
                  {ev.desc}
                </p>
                {ev.image && (
                  <div style={{
                    maxWidth: "36rem",
                    borderRadius: "2px",
                    overflow: "hidden",
                    border: "1px solid var(--line2)",
                    marginTop: "0.8rem",
                  }}>
                    <img
                      src={ev.image}
                      alt={ev.title}
                      style={{ width: "100%", display: "block", objectFit: "cover", maxHeight: "200px" }}
                    />
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
