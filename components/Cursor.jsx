"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Cursor() {
  const dot = useRef(null);
  const ring = useRef(null);

  useEffect(() => {
    if (window.matchMedia("(max-width: 900px)").matches) return;
    const xDot = gsap.quickTo(dot.current, "x", { duration: 0.12, ease: "power3" });
    const yDot = gsap.quickTo(dot.current, "y", { duration: 0.12, ease: "power3" });
    const xRing = gsap.quickTo(ring.current, "x", { duration: 0.45, ease: "power3" });
    const yRing = gsap.quickTo(ring.current, "y", { duration: 0.45, ease: "power3" });

    const move = (e) => {
      xDot(e.clientX); yDot(e.clientY);
      xRing(e.clientX); yRing(e.clientY);
    };
    const over = (e) => {
      if (e.target.closest("a, button, [data-hover]")) {
        ring.current?.classList.add("hovered");
        dot.current?.classList.add("hovered");
      }
    };
    const out = (e) => {
      if (e.target.closest("a, button, [data-hover]")) {
        ring.current?.classList.remove("hovered");
        dot.current?.classList.remove("hovered");
      }
    };
    window.addEventListener("mousemove", move);
    window.addEventListener("mouseover", over);
    window.addEventListener("mouseout", out);
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", over);
      window.removeEventListener("mouseout", out);
    };
  }, []);

  return (
    <>
      <div ref={dot} className="cursor-dot" />
    </>
  );
}
