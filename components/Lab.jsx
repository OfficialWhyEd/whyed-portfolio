"use client";
import { useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Reveal from "./Reveal";

gsap.registerPlugin(ScrollTrigger);

const log = [
  "> whycremisi.spawn('reverb_01')",
  "  ↳ personality: contemplative",
  "  ↳ binding OSC :: udp://9001",
  "> agent.listen(signal_path)",
  "  ↳ analyzing transient density…",
  "> flight_recorder.write(event)",
  "  ↳ JSONL append-only :: O(1)",
  "> ai.query(claude, 'analizza il mix')",
  "  ↳ suggest: -3.2dB @ 4kHz · widen 12%",
  "  ↳ awaiting human confirm ✦",
];

const modules = [
  { name: "WHYCREMISI",   label: "Plugin VST3+AU · 6 AI Provider",      status: "ATTIVO", v: "2.6" },
  { name: "FLIGHT REC.",  label: "JSONL append-only · O(1) per evento",  status: "ATTIVO", v: "1.0" },
  { name: "BOTFACE",      label: "Mascotte SVG · 9 stati emotivi",       status: "ATTIVO", v: "0.9" },
  { name: "OSC BRIDGE",   label: "UDP 9000/9001 · Ableton + REAPER",    status: "BETA",   v: "0.7" },
];

export default function Lab() {
  const root = useRef(null);
  const termRef = useRef(null);
  const started = useRef(false);
  const [lines, setLines] = useState([]);

  useGSAP(() => {
    ScrollTrigger.create({
      trigger: termRef.current,
      start: "top 72%",
      once: true,
      onEnter: () => {
        if (started.current) return;
        started.current = true;
        log.forEach((l, i) => {
          setTimeout(() => setLines(prev => [...prev, l]), i * 280);
        });
      },
    });
  }, { scope: root });

  return (
    <section id="lab" ref={root} style={{ padding: "8rem 2.5rem", position: "relative" }}>
      <Reveal>
        <div
          style={{
            fontFamily: '"JetBrains Mono", monospace',
            fontSize: "0.6rem",
            letterSpacing: "0.16em",
            textTransform: "uppercase",
            color: "var(--signal2)",
            marginBottom: "1rem",
          }}
        >
          /// 04 — LABORATORIO R&amp;D
        </div>
        <h2
          className="display"
          style={{ fontSize: "clamp(2.5rem, 8vw, 7rem)", color: "var(--paper)", marginBottom: "4rem", lineHeight: 0.9 }}
        >
          PLUGIN<br />
          <span style={{ color: "var(--signal)" }}>CON UN&apos;ANIMA</span>
        </h2>
      </Reveal>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1.25fr 0.75fr",
          gap: "1.5rem",
          alignItems: "start",
        }}
      >
        {/* Terminale */}
        <Reveal>
          <div
            ref={termRef}
            style={{
              background: "rgba(255,255,255,0.02)",
              border: "1px solid var(--line)",
              clipPath: "polygon(0 0, calc(100% - 14px) 0, 100% 14px, 100% 100%, 14px 100%, 0 calc(100% - 14px))",
              padding: "1.5rem 2rem",
              minHeight: "360px",
              fontFamily: '"JetBrains Mono", monospace',
              fontSize: "0.78rem",
            }}
          >
            {/* Barra titolo */}
            <div style={{ display: "flex", gap: "0.5rem", marginBottom: "1.4rem", alignItems: "center" }}>
              <span style={{ width: "10px", height: "10px", borderRadius: "50%", background: "var(--signal2)" }} />
              <span style={{ width: "10px", height: "10px", borderRadius: "50%", background: "var(--signal)" }} />
              <span style={{ width: "10px", height: "10px", borderRadius: "50%", background: "#4a9eba" }} />
              <span style={{ marginLeft: "auto", fontFamily: '"JetBrains Mono", monospace', fontSize: "0.56rem", letterSpacing: "0.12em", color: "var(--dim)" }}>
                whyed_dsp — ttyS0
              </span>
            </div>

            {/* Log lines */}
            <div style={{ display: "flex", flexDirection: "column", gap: "0.25rem" }}>
              {lines.map((l, i) => (
                <div
                  key={i}
                  style={{
                    color: l.startsWith(">") ? "var(--signal)" : "var(--dim)",
                    lineHeight: 1.5,
                  }}
                >
                  {l}
                </div>
              ))}
              {/* Cursore lampeggiante */}
              <span
                style={{
                  display: "inline-block",
                  width: "8px",
                  height: "16px",
                  background: "var(--signal)",
                  verticalAlign: "middle",
                  animation: "pulse 1s infinite",
                }}
              />
            </div>
          </div>
        </Reveal>

        {/* Moduli */}
        <Reveal delay={0.1}>
          <div>
            <p
              style={{
                fontFamily: '"Outfit", sans-serif',
                fontWeight: 300,
                fontSize: "0.88rem",
                color: "var(--dim)",
                lineHeight: 1.7,
                marginBottom: "2rem",
              }}
            >
              Ogni plugin ha una <span style={{ color: "var(--paper)", fontWeight: 500 }}>personalità interna</span>.
              Non è un effetto audio — è un sistema cognitivo che osserva, registra,
              parla con 6 provider AI e controlla il DAW via OSC.
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: "0.6rem" }}>
              {modules.map(m => (
                <div
                  key={m.name}
                  data-hover
                  style={{
                    background: "rgba(255,255,255,0.02)",
                    border: "1px solid var(--line)",
                    padding: "1rem 1.2rem",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: "1rem",
                    transition: "border-color 0.2s",
                  }}
                  onMouseEnter={e => e.currentTarget.style.borderColor = "rgba(201,75,37,0.4)"}
                  onMouseLeave={e => e.currentTarget.style.borderColor = "var(--line)"}
                >
                  <div>
                    <div style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: "0.7rem", color: "var(--paper)", letterSpacing: "0.06em" }}>
                      {m.name}
                    </div>
                    <div style={{ fontFamily: '"Outfit", sans-serif', fontSize: "0.72rem", color: "var(--dim)", fontWeight: 300, marginTop: "0.15rem" }}>
                      {m.label}
                    </div>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: "0.8rem", flexShrink: 0 }}>
                    <span style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: "0.54rem", color: "var(--faint)" }}>
                      v{m.v}
                    </span>
                    <span style={{
                      fontFamily: '"JetBrains Mono", monospace',
                      fontSize: "0.54rem",
                      letterSpacing: "0.1em",
                      color: m.status === "ATTIVO" ? "var(--signal)" : "#4a9eba",
                    }}>
                      ● {m.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
