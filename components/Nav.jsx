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
  const [isMobile,  setIsMobile]  = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth <= 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

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

  useEffect(() => {
    document.body.style.overflow = (menuOpen && isMobile) ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen, isMobile]);

  return (
    <nav
      style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 500,
        padding: "1.6rem 2.5rem",
        display: "flex", alignItems: "center", justifyContent: "space-between",
        background: scrolled ? "rgba(8,9,14,0.7)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(255,255,255,0.05)" : "none",
        transition: "background 0.4s, backdrop-filter 0.4s, border-color 0.4s",
      }}
    >
      <a
        href="#"
        style={{
          fontFamily: '"JetBrains Mono", monospace',
          fontSize: "0.68rem", letterSpacing: "0.16em",
          textTransform: "uppercase", color: "#f0ede8",
          textDecoration: "none",
        }}
      >
        WHYED
      </a>

      {/* Links desktop */}
      {!isMobile && (
        <div style={{ display: "flex", alignItems: "center", gap: "2.5rem" }}>
          {links.map(({ href, label }) => (
            <a
              key={href} href={href}
              style={{
                fontFamily: '"JetBrains Mono", monospace',
                fontSize: "0.62rem", letterSpacing: "0.13em",
                textTransform: "uppercase", color: "#9ea1ac",
                textDecoration: "none", transition: "color 0.2s",
              }}
              onMouseEnter={e => (e.currentTarget.style.color = "#f0ede8")}
              onMouseLeave={e => (e.currentTarget.style.color = "#9ea1ac")}
            >
              {label}
            </a>
          ))}
          <span style={{
            fontFamily: '"JetBrains Mono", monospace',
            fontSize: "0.58rem", letterSpacing: "0.1em", color: "#6e717c",
          }}>
            CET {time}
          </span>
        </div>
      )}

      {/* Hamburger mobile */}
      {isMobile && (
        <>
          <button
            aria-label="Menu"
            onClick={() => setMenuOpen(v => !v)}
            style={{
              color: "#f0ede8", background: "none", border: "none",
              cursor: "pointer", padding: 0, zIndex: 501,
            }}
          >
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
              {menuOpen ? (
                <><line x1="4" y1="4" x2="18" y2="18" /><line x1="18" y1="4" x2="4" y2="18" /></>
              ) : (
                <><line x1="3" y1="7" x2="19" y2="7" /><line x1="3" y1="11" x2="19" y2="11" /><line x1="3" y1="15" x2="19" y2="15" /></>
              )}
            </svg>
          </button>

          {menuOpen && (
            <div style={{
              position: "fixed", inset: 0, background: "var(--void)",
              zIndex: 499, display: "flex", flexDirection: "column",
              justifyContent: "center", alignItems: "center", gap: "3rem",
            }}>
              {links.map(({ href, label }) => (
                <a key={href} href={href} onClick={() => setMenuOpen(false)}
                  style={{
                    fontFamily: '"JetBrains Mono", monospace', fontSize: "1.2rem",
                    letterSpacing: "0.13em", textTransform: "uppercase",
                    color: "#f0ede8", textDecoration: "none",
                  }}
                >{label}</a>
              ))}
            </div>
          )}
        </>
      )}
    </nav>
  );
}
