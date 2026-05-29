"use client";
import { useRef, useState, useCallback } from "react";

const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#*";

function scramble(text, progress) {
  return text
    .split("")
    .map((char, i) => {
      if (char === " ") return " ";
      if (i < Math.floor(progress * text.length)) return char;
      return CHARS[Math.floor(Math.random() * CHARS.length)];
    })
    .join("");
}

export default function HyperText({ text, style = {}, className = "" }) {
  const [display, setDisplay] = useState(text);
  const rafRef = useRef(null);
  const startRef = useRef(null);
  const duration = 480;

  const animate = useCallback(() => {
    const now = Date.now();
    const elapsed = now - startRef.current;
    const progress = Math.min(elapsed / duration, 1);

    setDisplay(scramble(text, progress));

    if (progress < 1) {
      rafRef.current = requestAnimationFrame(animate);
    } else {
      setDisplay(text);
    }
  }, [text]);

  const start = useCallback(() => {
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    startRef.current = Date.now();
    rafRef.current = requestAnimationFrame(animate);
  }, [animate]);

  const stop = useCallback(() => {
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    setDisplay(text);
  }, [text]);

  return (
    <span
      className={className}
      style={{ ...style, display: "inline-block", fontVariantNumeric: "tabular-nums" }}
      onMouseEnter={start}
      onMouseLeave={stop}
    >
      {display}
    </span>
  );
}
