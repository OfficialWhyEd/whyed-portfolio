"use client";
import Reveal from "./Reveal";

const links = [
  { label: "INSTAGRAM",   handle: "@whyed.music",          href: "https://instagram.com/whyed.music" },
  { label: "SOUNDBETTER", handle: "soundbetter.com/whyed", href: "https://soundbetter.com/profiles/650221-whyed" },
  { label: "GITHUB",      handle: "OfficialWhyEd",         href: "https://github.com/OfficialWhyEd" },
  { label: "EMAIL",       handle: "edoardello@gmail.com",  href: "mailto:edoardello@gmail.com" },
  { label: "TELEFONO",    handle: "+39 351 792 1092",       href: "tel:+393517921092" },
];

export default function Contact() {
  return (
    <footer
      id="contatti"
      style={{ padding: "8rem 2.5rem 3rem", position: "relative" }}
    >
      <Reveal>
        <div
          style={{
            fontFamily: '"JetBrains Mono", monospace',
            fontSize: "0.6rem",
            letterSpacing: "0.16em",
            textTransform: "uppercase",
            color: "var(--signal)",
            marginBottom: "2rem",
          }}
        >
          /// 07 — CONTATTI
        </div>

        <h2
          className="display"
          style={{
            fontSize: "clamp(3.5rem, 16vw, 18rem)",
            color: "var(--paper)",
            lineHeight: 0.88,
            marginBottom: "1rem",
          }}
        >
          PARLIAMO<br />
          <span style={{ color: "var(--signal)" }}>INSIEME.</span>
        </h2>

        <p
          style={{
            fontFamily: '"DM Serif Display", serif',
            fontStyle: "italic",
            fontSize: "clamp(1rem, 2vw, 1.4rem)",
            color: "var(--dim)",
            marginTop: "1.5rem",
            marginBottom: "4rem",
          }}
        >
          Aperto a mix/mastering, sound design, collaborazioni audio-tech e sviluppo plugin.
        </p>
      </Reveal>

      {/* Links */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: "0",
          borderTop: "1px solid var(--line)",
          marginBottom: "4rem",
        }}
      >
        {links.map((l, i) => (
          <Reveal key={l.label} delay={i * 0.06}>
            <a
              href={l.href}
              target={l.href.startsWith("http") ? "_blank" : undefined}
              rel="noreferrer"
              data-hover
              style={{
                display: "block",
                padding: "1.8rem 0",
                borderRight: i < links.length - 1 ? "1px solid var(--line)" : "none",
                borderBottom: "1px solid var(--line)",
                textDecoration: "none",
                transition: "background 0.25s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(201,75,37,0.04)")}
              onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
            >
              <div
                style={{
                  fontFamily: '"JetBrains Mono", monospace',
                  fontSize: "0.58rem",
                  letterSpacing: "0.16em",
                  textTransform: "uppercase",
                  color: "var(--faint)",
                  marginBottom: "0.6rem",
                }}
              >
                {l.label}
              </div>
              <div
                style={{
                  fontFamily: '"JetBrains Mono", monospace',
                  fontSize: "0.8rem",
                  color: "var(--dim)",
                  transition: "color 0.2s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "var(--paper)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "var(--dim)")}
              >
                {l.handle} →
              </div>
            </a>
          </Reveal>
        ))}
      </div>

      {/* Footer bar */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "1rem",
          paddingTop: "2rem",
          borderTop: "1px solid var(--line)",
        }}
      >
        <span
          style={{
            fontFamily: '"JetBrains Mono", monospace',
            fontSize: "0.58rem",
            letterSpacing: "0.14em",
            color: "var(--faint)",
            textTransform: "uppercase",
          }}
        >
          © {new Date().getFullYear()} EDOARDO PORCU — WHYED
        </span>
        <span
          style={{
            fontFamily: '"JetBrains Mono", monospace',
            fontSize: "0.58rem",
            letterSpacing: "0.14em",
            color: "var(--faint)",
            textTransform: "uppercase",
          }}
        >
          CAGLIARI · 39.2238° N · 9.1217° E
        </span>
        <a
          href="#top"
          data-hover
          style={{
            fontFamily: '"JetBrains Mono", monospace',
            fontSize: "0.58rem",
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            color: "var(--signal)",
            textDecoration: "none",
          }}
        >
          ↑ TORNA SU
        </a>
      </div>
    </footer>
  );
}
