"use client";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Reveal from "./Reveal";

gsap.registerPlugin(ScrollTrigger);

const principles = [
  {
    num: "01",
    title: "Costo zero",
    desc: "Tutto gira su Claude Pro headless. Nessuna API key separata, nessun costo cloud ricorrente. Il vincolo ha generato architetture più efficienti dei SaaS equivalenti.",
  },
  {
    num: "02",
    title: "File Bridge",
    desc: "Primitiva di integrazione universale. Un file system condiviso come layer di comunicazione tra agenti, DAW, app native e strumenti senza API. Semplice, affidabile, testabile.",
  },
  {
    num: "03",
    title: "Flight Recorder",
    desc: "Memoria persistente JSONL append-only per ogni sistema. O(1) per evento. Ogni azione viene registrata, ogni sessione è ricostruibile. L'ecosistema non dimentica.",
  },
  {
    num: "04",
    title: "macOS Native",
    desc: "Tauri, JUCE, Electron — tecnologie native per Mac Intel. Nessuna web app travestita. Ogni app rispetta il paradigma del sistema operativo.",
  },
  {
    num: "05",
    title: "AI First by Design",
    desc: "L'intelligenza artificiale non è un layer opzionale — è il sistema nervoso centrale di ogni applicazione. Gli agenti specializzati battono l'agente generalista.",
  },
  {
    num: "06",
    title: "Mascotte come Sistema",
    desc: "Ogni app ha una mascotte animata SVG+Framer Motion che riflette lo stato interno. BotFace (WhyCremisi), WhySpidey (Calendar) — il brand è vivo e reattivo.",
  },
];

const agents = [
  { name: "EXEL", role: "Trend researcher · viralità TikTok/IG/YouTube", status: "ATTIVO" },
  { name: "SCRIPT", role: "Sceneggiatore · testi naturali, voce IA", status: "ATTIVO" },
  { name: "CLACK", role: "Editor video autonomo · karaoke · SFX", status: "ATTIVO" },
  { name: "PUBLISHER", role: "Pubblicazione automatica su 3 piattaforme", status: "ATTIVO" },
  { name: "ASSET", role: "Ricerca immagini/video royalty-free", status: "ATTIVO" },
  { name: "SAFETY", role: "Compliance e moderazione contenuti", status: "ATTIVO" },
  { name: "VOICE", role: "Sintesi vocale edge-tts · zero latenza", status: "ATTIVO" },
  { name: "ANALYST", role: "Analytics · engagement · ottimizzazione", status: "BETA" },
  { name: "MEMORY", role: "Memoria editoriale · stile coerente", status: "BETA" },
  { name: "CAPTAIN", role: "Orchestratore master · coordination", status: "ATTIVO" },
];

const metrics = [
  { n: "15", label: "Progetti software" },
  { n: "15", label: "Agenti AI autonomi" },
  { n: "5", label: "App macOS native" },
  { n: "783M", label: "Token / 30 giorni" },
  { n: "0€", label: "Costo operativo" },
  { n: "100%", label: "Open source" },
];

export default function Ecosystem() {
  const root = useRef(null);

  useGSAP(() => {
    gsap.from(".eco-metric", {
      opacity: 0,
      y: 24,
      stagger: 0.08,
      duration: 0.7,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".eco-metrics",
        start: "top 80%",
        once: true,
      },
    });
  }, { scope: root });

  return (
    <section id="ecosistema" ref={root} style={{ padding: "8rem 2.5rem", position: "relative" }}>
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
          /// 05 — ECOSISTEMA WHY
        </div>
        <h2
          className="display"
          style={{
            fontSize: "clamp(3rem, 8vw, 8rem)",
            color: "var(--paper)",
            lineHeight: 0.9,
            marginBottom: "1rem",
          }}
        >
          IL SISTEMA<br />
          <span
            style={{
              fontFamily: '"DM Serif Display", serif',
              fontStyle: "italic",
              color: "var(--dim)",
              fontSize: "0.65em",
            }}
          >
            che non dorme mai.
          </span>
        </h2>
        <p
          style={{
            fontFamily: '"Outfit", sans-serif',
            fontWeight: 300,
            fontSize: "clamp(0.9rem, 1.5vw, 1.1rem)",
            color: "var(--dim)",
            maxWidth: "44rem",
            lineHeight: 1.7,
            marginBottom: "5rem",
          }}
        >
          Quindici sistemi software distinti, tutti progettati e implementati su Mac Intel locale.
          L'ecosistema spazia dal controllo DAW via plugin VST3/AU al motion graphics programmabile,
          dall'automazione completa del content marketing al controllo AI di emulatori Game Boy Advance.
          Filosofia unificante: <span style={{ color: "var(--paper)" }}>macOS-native e AI-first by design</span>.
        </p>
      </Reveal>

      {/* Metriche */}
      <div
        className="eco-metrics"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(120px, 1fr))",
          gap: "0",
          borderTop: "1px solid var(--line)",
          borderLeft: "1px solid var(--line)",
          marginBottom: "6rem",
        }}
      >
        {metrics.map((m) => (
          <div
            key={m.label}
            className="eco-metric"
            style={{
              padding: "2rem 1.5rem",
              borderRight: "1px solid var(--line)",
              borderBottom: "1px solid var(--line)",
            }}
          >
            <div
              className="display glow-signal"
              style={{
                fontSize: "clamp(2rem, 4vw, 3.5rem)",
                color: "var(--signal)",
                lineHeight: 1,
                marginBottom: "0.4rem",
              }}
            >
              {m.n}
            </div>
            <div
              style={{
                fontFamily: '"JetBrains Mono", monospace',
                fontSize: "0.54rem",
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: "var(--faint)",
              }}
            >
              {m.label}
            </div>
          </div>
        ))}
      </div>

      {/* Principi architetturali */}
      <Reveal>
        <div
          style={{
            fontFamily: '"JetBrains Mono", monospace',
            fontSize: "0.58rem",
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: "var(--faint)",
            marginBottom: "2.5rem",
          }}
        >
          PRINCIPI ARCHITETTURALI
        </div>
      </Reveal>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 300px), 1fr))",
          gap: "0",
          borderTop: "1px solid var(--line)",
          marginBottom: "6rem",
        }}
      >
        {principles.map((p, i) => (
          <Reveal key={p.num} delay={i * 0.06}>
            <div
              style={{
                padding: "2.5rem",
                borderRight: i % 3 !== 2 ? "1px solid var(--line)" : "none",
                borderBottom: "1px solid var(--line)",
              }}
            >
              <div
                style={{
                  fontFamily: '"JetBrains Mono", monospace',
                  fontSize: "0.54rem",
                  color: "var(--signal)",
                  letterSpacing: "0.14em",
                  marginBottom: "0.8rem",
                }}
              >
                {p.num}
              </div>
              <h3
                className="display"
                style={{
                  fontSize: "clamp(1.2rem, 2.5vw, 1.8rem)",
                  color: "var(--paper)",
                  lineHeight: 1,
                  marginBottom: "0.8rem",
                }}
              >
                {p.title}
              </h3>
              <p
                style={{
                  fontFamily: '"Outfit", sans-serif',
                  fontWeight: 300,
                  fontSize: "0.85rem",
                  color: "var(--dim)",
                  lineHeight: 1.65,
                }}
              >
                {p.desc}
              </p>
            </div>
          </Reveal>
        ))}
      </div>

      {/* WhyPost Agenti */}
      <Reveal>
        <div
          style={{
            fontFamily: '"JetBrains Mono", monospace',
            fontSize: "0.58rem",
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: "var(--faint)",
            marginBottom: "2rem",
          }}
        >
          WHYPOST — SQUADRA AGENTI AI
        </div>
        <p
          style={{
            fontFamily: '"Outfit", sans-serif',
            fontWeight: 300,
            fontSize: "0.88rem",
            color: "var(--dim)",
            maxWidth: "40rem",
            lineHeight: 1.7,
            marginBottom: "2.5rem",
          }}
        >
          15 agenti Python specializzati che producono e pubblicano 5–7 video al giorno su Instagram,
          TikTok e YouTube Shorts. Pipeline completa: dall'ideazione alla pubblicazione, zero intervento umano.
        </p>
      </Reveal>

      <div style={{ borderTop: "1px solid var(--line)" }}>
        {agents.map((a) => (
          <div
            key={a.name}
            style={{
              display: "grid",
              gridTemplateColumns: "7rem 1fr auto",
              alignItems: "center",
              gap: "1.5rem",
              padding: "1.2rem 0",
              borderBottom: "1px solid var(--line)",
            }}
          >
            <span
              className="display"
              style={{
                fontSize: "clamp(1rem, 2vw, 1.4rem)",
                color: "var(--paper)",
                lineHeight: 1,
              }}
            >
              {a.name}
            </span>
            <span
              style={{
                fontFamily: '"Outfit", sans-serif',
                fontSize: "0.85rem",
                color: "var(--dim)",
                fontWeight: 300,
              }}
            >
              {a.role}
            </span>
            <span
              style={{
                fontFamily: '"JetBrains Mono", monospace',
                fontSize: "0.52rem",
                letterSpacing: "0.14em",
                color: a.status === "ATTIVO" ? "var(--signal)" : "#4a9eba",
                flexShrink: 0,
              }}
            >
              ● {a.status}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
