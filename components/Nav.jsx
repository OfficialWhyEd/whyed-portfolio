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
  const [scrolled, setScrolled] = useState(false);
  const [time, setTime]         = useState("");

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
          textTransform: "uppercase", color: "#f0ede8",
          textDecoration: "none",
        }}
      >
        WHYED
      </a>

      <div style={{ display: "flex", alignItems: "center", gap: "2.5rem" }}>
        {links.map(({ href, label }) => (
          <a
            key={href} href={href}
            style={{
              fontFamily: '"JetBrains Mono", monospace',
              fontSize: "0.62rem", letterSpacing: "0.13em",
              textTransform: "uppercase", color: "#4a4c54",
              textDecoration: "none", transition: "color 0.2s",
            }}
            onMouseEnter={e => (e.currentTarget.style.color = "#f0ede8")}
            onMouseLeave={e => (e.currentTarget.style.color = "#4a4c54")}
          >
            {label}
          </a>
        ))}
        <span
          style={{
            fontFamily: '"JetBrains Mono", monospace',
            fontSize: "0.58rem", letterSpacing: "0.1em", color: "#2e3038",
          }}
        >
          CET {time}
        </span>
      </div>
    </nav>
  );
}
