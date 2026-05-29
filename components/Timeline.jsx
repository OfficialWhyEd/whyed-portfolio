"use client";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Reveal from "./Reveal";

gsap.registerPlugin(ScrollTrigger);

const events = [
  {
    year: "2012",
    label: "ORIGINE",
    title: "I primi beat",
    desc: "Inizia a produrre musica a 13 anni. Niente scuola, niente teoria — solo orecchio, curiosità e una DAW aperta h24.",
  },
  {
    year: "2016–19",
    label: "LIVE",
    title: "DJ & Producer",
    desc: "Attività live come DJ/producer — eventi privati, club, feste in Sardegna. Il palco come laboratorio di sound design in tempo reale.",
  },
  {
    year: "2017–18",
    label: "LONDRA",
    title: "London School of Sound",
    desc: "Certificate of Completion. Acustica, tracking, mix, mastering in ambiente professionale. L'approccio scientifico al suono.",
  },
  {
    year: "2019–22",
    label: "MILANO",
    title: "Social Media & Digital PM",
    desc: "Social Media Manager e Producer per ITALY Properties. Poi Digital Project Manager per Rare Game (e-commerce + AI integration). Prima esposizione a sistemi AI applicati.",
  },
  {
    year: "2022",
    label: "OPERA",
    title: "Say I'm Different",
    desc: "25 tracce, 53 minuti. Un'opera monumentale tra elettronica d'avanguardia e indie pop. Produzione, mix e mastering interamente in-the-box.",
  },
  {
    year: "2023",
    label: "STUDIO",
    title: "Studio a Cagliari",
    desc: "Apre il suo studio fisico. Mixing e mastering freelance: album indie 3 tracce, EP pop-rock 5 tracce, collaborazioni nazionali.",
  },
  {
    year: "2024",
    label: "DEVELOPER",
    title: "WhyCremisi — il primo plugin",
    desc: "Nasce il Why Ecosystem. Primo plugin VST3 con AI integrata. La svolta: il suono non basta — servono strumenti che pensano.",
  },
  {
    year: "2025–26",
    label: "ECOSISTEMA",
    title: "15 progetti, 783M token",
    desc: "WhyPost, WhyCalendar, WhyCavalry, WhyEmuGBA, CLACK, Raincast, Screenpipe, HyperFrames... L'ecosistema cresce. Top 0.1% usage Claude Pro globale.",
  },
];

export default function Timeline() {
  const root = useRef(null);

  useGSAP(() => {
    const items = root.current?.querySelectorAll(".tl-item");
    if (!items) return;
    items.forEach((el, i) => {
      gsap.from(el, {
        opacity: 0,
        x: i % 2 === 0 ? -40 : 40,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: el,
          start: "top 85%",
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
        {/* Vertical line */}
        <div
          style={{
            position: "absolute",
            left: "clamp(3rem, 8vw, 7rem)",
            top: 0,
            bottom: 0,
            width: "1px",
            background: "var(--line2)",
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
                style={{
                  position: "absolute",
                  right: "-5px",
                  top: "0.5rem",
                  width: "9px",
                  height: "9px",
                  borderRadius: "50%",
                  background: i === events.length - 1 ? "var(--signal)" : "var(--faint)",
                  border: "1px solid var(--line2)",
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
                }}
              >
                {ev.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
