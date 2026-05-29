"use client";
import { useRef, useState, useCallback } from "react";
import { devProjects, musicProjects } from "../lib/projects";
import Reveal from "./Reveal";
import HyperText from "./HyperText";

function WorkItem({ p }) {
  const [open, setOpen] = useState(false);
  const [spotPos, setSpotPos] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);
  const ref = useRef(null);

  const onMove = useCallback((e) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    setSpotPos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  }, []);

  return (
    <article
      ref={ref}
      className="work-item"
      style={{ cursor: "pointer", position: "relative", overflow: "hidden" }}
      onClick={() => setOpen((v) => !v)}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onMouseMove={onMove}
      data-hover
    >
      {/* Spotlight glow on hover */}
      {hovered && (
        <div
          style={{
            position: "absolute",
            width: "400px",
            height: "400px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(201,75,37,0.06) 0%, transparent 70%)",
            transform: "translate(-50%, -50%)",
            left: spotPos.x,
            top: spotPos.y,
            pointerEvents: "none",
            zIndex: 0,
            transition: "left 0.05s, top 0.05s",
          }}
        />
      )}

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "3.5rem 1fr auto",
          gap: "1.5rem",
          alignItems: "baseline",
          position: "relative",
          zIndex: 1,
        }}
      >
        {/* Index */}
        <span
          style={{
            fontFamily: '"JetBrains Mono", monospace',
            fontSize: "0.6rem",
            letterSpacing: "0.12em",
            color: hovered ? "var(--signal)" : "var(--faint)",
            transition: "color 0.2s",
          }}
        >
          {p.id}
        </span>

        {/* Title + type */}
        <div>
          <h3
            className="display"
            style={{
              fontSize: "clamp(1.6rem, 3.5vw, 3rem)",
              color: "var(--paper)",
              lineHeight: 1,
              letterSpacing: "0.02em",
            }}
          >
            <HyperText text={p.title} />
          </h3>
          <div
            style={{
              fontFamily: '"JetBrains Mono", monospace',
              fontSize: "0.58rem",
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: "var(--faint)",
              marginTop: "0.35rem",
            }}
          >
            {p.type}
          </div>
        </div>

        {/* Year + indicator */}
        <div style={{ display: "flex", alignItems: "center", gap: "1.5rem", flexShrink: 0 }}>
          <span
            style={{
              fontFamily: '"JetBrains Mono", monospace',
              fontSize: "0.6rem",
              color: "var(--faint)",
              letterSpacing: "0.1em",
            }}
          >
            {p.year}
          </span>
          <span
            style={{
              fontFamily: '"JetBrains Mono", monospace',
              fontSize: "0.75rem",
              color: "var(--signal)",
              transition: "transform 0.35s cubic-bezier(0.16,1,0.3,1)",
              display: "inline-block",
              transform: open ? "rotate(45deg)" : "rotate(0deg)",
            }}
          >
            +
          </span>
        </div>
      </div>

      {/* Expanded detail */}
      <div
        style={{
          overflow: "hidden",
          maxHeight: open ? "280px" : "0",
          transition: "max-height 0.55s cubic-bezier(0.16,1,0.3,1)",
          position: "relative",
          zIndex: 1,
        }}
      >
        <div
          style={{
            paddingTop: "1.2rem",
            paddingLeft: "5rem",
            display: "grid",
            gridTemplateColumns: "1fr auto",
            gap: "2rem",
            alignItems: "start",
          }}
        >
          <div>
            <p
              style={{
                color: "var(--dim)",
                fontSize: "0.88rem",
                lineHeight: 1.68,
                fontFamily: '"Outfit", sans-serif',
                fontWeight: 300,
                maxWidth: "44rem",
              }}
            >
              {p.desc}
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem", marginTop: "0.9rem" }}>
              {p.tags.map((t) => (
                <span
                  key={t}
                  style={{
                    fontFamily: '"JetBrains Mono", monospace',
                    fontSize: "0.54rem",
                    letterSpacing: "0.14em",
                    textTransform: "uppercase",
                    color: "var(--faint)",
                    border: "1px solid var(--line)",
                    padding: "0.22rem 0.5rem",
                  }}
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
          <span
            style={{
              fontFamily: '"JetBrains Mono", monospace',
              fontSize: "0.58rem",
              color: "var(--dim)",
              textTransform: "uppercase",
              letterSpacing: "0.1em",
              flexShrink: 0,
              whiteSpace: "nowrap",
            }}
          >
            {p.role}
          </span>
        </div>
      </div>
    </article>
  );
}

function Section({ label, sectionNum, projects }) {
  return (
    <Reveal>
      <div style={{ marginBottom: "5rem" }}>
        <div
          style={{
            display: "flex",
            alignItems: "baseline",
            gap: "1.5rem",
            marginBottom: "2.5rem",
          }}
        >
          <span
            style={{
              fontFamily: '"JetBrains Mono", monospace',
              fontSize: "0.58rem",
              letterSpacing: "0.16em",
              textTransform: "uppercase",
              color: "var(--signal)",
            }}
          >
            /// {sectionNum}
          </span>
          <h2
            className="display"
            style={{
              fontSize: "clamp(2rem, 6vw, 5.5rem)",
              color: "var(--paper)",
            }}
          >
            {label}
          </h2>
        </div>
        <div className="work-list">
          {projects.map((p) => (
            <WorkItem key={p.id} p={p} />
          ))}
        </div>
      </div>
    </Reveal>
  );
}

export default function Work() {
  return (
    <section id="work" style={{ padding: "8rem 2.5rem", position: "relative" }}>
      <Section label="DEV PROJECTS" sectionNum="01 — SOFTWARE" projects={devProjects} />
      <Section label="MUSIC" sectionNum="02 — DISCOGRAPHY" projects={musicProjects} />
    </section>
  );
}
