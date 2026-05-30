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
    desc: "Front-of-House Specialist — 051 Osteria, Quadrilatero di Bologna, di fronte alla Fontana del Nettuno (mag–set 2025). Come sempre: lavorare intensamente mentre lo scopo reale è produrre, conoscere artisti, costruire nuove collaborazioni musicali. WhyPost, WhyCalendar, CLACK attivi.",
  },
  {
    year: "2025",
    label: "MEDIA",
    title: "People Podcast — \"Il Fallimento come Elogio\"",
    desc: "Ospite al People Podcast: una conversazione pubblica sulla storia di riscatto, sul fallimento come strumento e sulla scelta di costruire un ecosistema personale invece di seguire le vie convenzionali. Una storia di riscatto raccontata in prima persona.",
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
  },
];

export default function Timeline() {
  const root    = useRef(null);
  const lineRef = useRef(null);

  useGSAP(() => {
    /* draw della linea verticale al scroll */
    if (lineRef.current) {
      gsap.fromTo(lineRef.current,
        { scaleY: 0, transformOrigin: "top center" },
        {
          scaleY: 1,
          ease: "none",
          scrollTrigger: {
            trigger: root.current,
            start: "top 80%",
            end:   "bottom 20%",
            scrub: 1,
          },
        }
      );
    }

    const items = root.current?.querySelectorAll(".tl-item");
    if (!items) return;
    items.forEach((el, i) => {
      gsap.from(el, {
        opacity: 0,
        x: -32,
        duration: 0.75,
        ease: "power3.out",
        scrollTrigger: {
          trigger: el,
          start: "top 87%",
          once: true,
        },
      });
    });
  }, { scope: root });

  return (
    <section
      id="cronologia"
      ref={root}
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
            marginBottom: "1rem",
          }}
        >
          /// 02 — CRONOLOGIA
        </div>
        <h2
          className="display"
          style={{
            fontSize: "clamp(3rem, 8vw, 8rem)",
            color: "var(--paper)",
            lineHeight: 0.9,
            marginBottom: "6rem",
          }}
        >
          LA STORIA<br />
          <span
            style={{
              fontFamily: '"DM Serif Display", serif',
              fontStyle: "italic",
              color: "var(--dim)",
              fontSize: "0.65em",
            }}
          >
            dal suono al codice.
          </span>
        </h2>
      </Reveal>

      {/* Timeline line */}
      <div
        style={{
          position: "relative",
          maxWidth: "1000px",
        }}
      >
        {/* Vertical line — animata al scroll */}
        <div
          ref={lineRef}
          style={{
            position: "absolute",
            left: "clamp(3rem, 8vw, 7rem)",
            top: 0,
            bottom: 0,
            width: "1px",
            background: "linear-gradient(to bottom, var(--signal), var(--line2) 60%)",
            transformOrigin: "top center",
          }}
        />

        {events.map((ev, i) => (
          <div
            key={ev.year}
            className="tl-item"
            style={{
              display: "grid",
              gridTemplateColumns: "clamp(3rem, 8vw, 7rem) 1fr",
              gap: "2.5rem",
              marginBottom: "3.5rem",
              alignItems: "start",
            }}
          >
            {/* Year column */}
            <div style={{ textAlign: "right", paddingRight: "2.5rem", position: "relative" }}>
              {/* Dot */}
              <div
                className={i === events.length - 1 ? "card-alive-dot" : ""}
                style={{
                  position: "absolute",
                  right: "-5px",
                  top: "0.5rem",
                  width: i === events.length - 1 ? "10px" : "8px",
                  height: i === events.length - 1 ? "10px" : "8px",
                  borderRadius: "50%",
                  background: i === events.length - 1 ? "var(--signal)" : "var(--faint)",
                  border: i === events.length - 1 ? "1px solid rgba(201,75,37,0.5)" : "1px solid var(--line2)",
                  color: "var(--signal)",
                  animation: i === events.length - 1 ? "alive-dot 2s ease-in-out infinite" : "none",
                }}
              />
              <span
                style={{
                  fontFamily: '"JetBrains Mono", monospace',
                  fontSize: "0.58rem",
                  letterSpacing: "0.1em",
                  color: "var(--faint)",
                  display: "block",
                }}
              >
                {ev.year}
              </span>
            </div>

            {/* Content column */}
            <div>
              <div
                style={{
                  fontFamily: '"JetBrains Mono", monospace',
                  fontSize: "0.52rem",
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  color: "var(--signal)",
                  marginBottom: "0.3rem",
                }}
              >
                {ev.label}
              </div>
              <h3
                className="display"
                style={{
                  fontSize: "clamp(1.2rem, 2.5vw, 2rem)",
                  color: "var(--paper)",
                  marginBottom: "0.6rem",
                  lineHeight: 1,
                }}
              >
                {ev.title}
              </h3>
              <p
                style={{
                  fontFamily: '"Outfit", sans-serif',
                  fontWeight: 300,
                  fontSize: "0.88rem",
                  color: "var(--dim)",
                  lineHeight: 1.68,
                  maxWidth: "38rem",
                  marginBottom: ev.image ? "1rem" : 0,
                }}
              >
                {ev.desc}
              </p>
              {ev.image && (
                <div style={{
                  maxWidth: "38rem",
                  borderRadius: "2px",
                  overflow: "hidden",
                  border: "1px solid var(--line2)",
                  marginTop: "0.8rem",
                }}>
                  <img
                    src={ev.image}
                    alt={ev.title}
                    style={{ width: "100%", display: "block", objectFit: "cover", maxHeight: "220px" }}
                  />
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
