"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Marquee({ items, accent = false }) {
  const track = useRef(null);
  useEffect(() => {
    const el = track.current;
    const w = el.scrollWidth / 2;
    const tween = gsap.to(el, {
      x: -w,
      duration: 26,
      ease: "none",
      repeat: -1,
    });
    return () => tween.kill();
  }, []);

  const content = [...items, ...items];
  return (
    <div
      style={{
        overflow: "hidden",
        borderTop: "1px solid var(--line)",
        borderBottom: "1px solid var(--line)",
        padding: "1.2rem 0",
        userSelect: "none",
      }}
    >
      <div ref={track} className="marquee-track">
        {content.map((t, i) => (
          <span
            key={i}
            className="display"
            style={{
              fontSize: "clamp(2rem, 5vw, 4.5rem)",
              color: accent ? "var(--signal)" : "var(--faint)",
              margin: "0 2.5rem",
              lineHeight: 1,
            }}
          >
            {t}
            <span
              style={{
                color: accent ? "var(--signal2)" : "var(--faint)",
                marginLeft: "2rem",
                opacity: 0.5,
              }}
            >
              ✦
            </span>
          </span>
        ))}
      </div>
    </div>
  );
}
