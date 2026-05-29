"use client";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Reveal from "./Reveal";

gsap.registerPlugin(ScrollTrigger);

const log = [
  "> plugin.spawn('reverb_01')",
  "  ↳ personality: contemplative",
  "  ↳ binding API :: OpenCL-inspired",
  "> agent.listen(signal_path)",
  "  ↳ analyzing transient density…",
  "> suggest: -3.2dB @ 4kHz · widen 12%",
  "  ↳ awaiting human confirm ✦",
];

const modules = [
  { name: "NEURAL_DSP", status: "ACTIVE", v: "0.9" },
  { name: "AGENT_BUS", status: "BETA", v: "0.4" },
  { name: "RECALL_ENGINE", status: "DEV", v: "0.2" },
];

export default function Lab() {
  const termRef = useRef(null);
  const [lines, setLines] = useState([]);

  useEffect(() => {
    const el = termRef.current;
    ScrollTrigger.create({
      trigger: el,
      start: "top 70%",
      once: true,
      onEnter: () => {
        log.forEach((l, i) => {
          setTimeout(() => setLines((prev) => [...prev, l]), i * 320);
        });
      },
    });
  }, []);

  return (
    <section id="lab" className="px-6 md:px-10 py-28 relative">
      <Reveal className="mb-16">
        <div className="eyebrow text-plasma mb-4">/// 04 — LABORATORIO R&D</div>
        <h2 className="display text-chrome" style={{ fontSize: "clamp(2.5rem, 8vw, 7rem)" }}>
          PLUGIN<br />
          <span className="glitch text-signal" data-text="CON UN'ANIMA">CON UN&apos;ANIMA</span>
        </h2>
      </Reveal>

      <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-6">
        <Reveal>
          <div ref={termRef} className="corner panel p-6 md:p-8 font-mono text-sm min-h-[340px]">
            <div className="flex gap-2 mb-5">
              <span className="w-3 h-3 rounded-full" style={{background:"var(--signal2)"}} />
              <span className="w-3 h-3 rounded-full" style={{background:"var(--signal)"}} />
              <span className="w-3 h-3 rounded-full" style={{background:"#4a9eba"}} />
              <span className="ml-auto eyebrow text-ash">whyed_dsp — ttyS0</span>
            </div>
            <div className="space-y-1">
              {lines.map((l, i) => (
                <div
                  key={i}
                  className={l.startsWith(">") ? "text-signal" : "text-ash"}
                >
                  {l}
                </div>
              ))}
              <span className="inline-block w-2 h-4 bg-signal animate-pulse align-middle" />
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="space-y-4">
            <p className="text-ash leading-relaxed">
              Ogni plugin ha una <span className="text-chrome">personalità interna</span>.
              Non è un effetto audio — è un agente che osserva il signal path,
              registra ogni azione in un flight recorder JSONL, parla con 6 provider AI,
              controlla il DAW via OSC. WhyCremisi in produzione.
            </p>
            {modules.map((m) => (
              <div
                key={m.name}
                data-hover
                className="panel corner flex items-center justify-between p-4 group hover:border-signal transition-colors"
              >
                <span className="mono text-chrome">{m.name}</span>
                <div className="flex items-center gap-4">
                  <span className="mono text-xs text-ash">v{m.v}</span>
                  <span
                    className={`mono text-xs ${
                      m.status === "ACTIVE"
                        ? "text-signal"
                        : m.status === "BETA"
                        ? "text-cyan"
                        : "text-plasma"
                    }`}
                  >
                    ● {m.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
