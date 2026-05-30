"use client";
import { useEffect, useState } from "react";

const links = [
  { href: "#lavori",      label: "Lavori"     },
  { href: "#cronologia",  label: "Cronologia" },
  { href: "#ecosistema",  label: "Ecosistema" },
  { href: "#profilo",     label: "Profilo"    },
  { href: "#contatti",    label: "Contatti"   },
];

export default function Nav() {
  const [scrolled,  setScrolled]  = useState(false);
  const [time,      setTime]      = useState("");
  const [menuOpen,  setMenuOpen]  = useState(false);

  useEffect(() => {
    const tick = () =>
      setTime(
        new Date().toLocaleTimeString("it-IT", {
          hour: "2-digit", minute: "2-digit", second: "2-digit",
          timeZone: "Europe/Rome",
        })
      );
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* blocca lo scroll quando il menu mobile è aperto */
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <nav
      style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 500,
        mixBlendMode: "difference",
        padding: "1.6rem 2.5rem",
        display: "flex", alignItems: "center", justifyContent: "space-between",
        opacity: scrolled ? 0.65 : 1,
        transition: "opacity 0.4s",
      }}
    >
      <a
        href="#"
        style={{
          fontFamily: '"JetBrains Mono", monospace',
          fontSize: "0.68rem", letterSpacing: "0.16em",
          textTransform: "uppercase", color: "var(--paper)",
          textDecoration: "none",
        }}
      >
        WHYED
      </a>

      {/* Links desktop + mobile overlay */}
      <div className={`nav-links${menuOpen ? " open" : ""}`}>
        {links.map(({ href, label }) => (
          <a
            key={href} href={href}
            onClick={() => setMenuOpen(false)}
            style={{
              fontFamily: '"JetBrains Mono", monospace',
              fontSize: "0.62rem", letterSpacing: "0.13em",
              textTransform: "uppercase", color: "var(--faint)",
              textDecoration: "none", transition: "color 0.2s",
            }}
            onMouseEnter={e => (e.currentTarget.style.color = "var(--paper)")}
            onMouseLeave={e => (e.currentTarget.style.color = "var(--faint)")}
          >
            {label}
          </a>
        ))}
        <span
          style={{
            fontFamily: '"JetBrains Mono", monospace',
            fontSize: "0.58rem", letterSpacing: "0.1em", color: "var(--faint)",
          }}
        >
          CET {time}
        </span>
      </div>

      {/* Hamburger mobile */}
      <button
        className="nav-hamburger"
        aria-label="Menu"
        onClick={() => setMenuOpen(v => !v)}
        style={{ color: "var(--paper)", zIndex: 501 }}
      >
        <svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
          {menuOpen ? (
            <>
              <line x1="4" y1="4" x2="18" y2="18" />
              <line x1="18" y1="4" x2="4" y2="18" />
            </>
          ) : (
            <>
              <line x1="3" y1="7"  x2="19" y2="7"  />
              <line x1="3" y1="11" x2="19" y2="11" />
              <line x1="3" y1="15" x2="19" y2="15" />
            </>
          )}
        </svg>
      </button>
    </nav>
  );
}
