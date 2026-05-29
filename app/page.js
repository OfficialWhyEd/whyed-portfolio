"use client";
import { useState } from "react";
import SmoothScroll from "../components/SmoothScroll";
import Atmosphere from "../components/Atmosphere";
import Cursor from "../components/Cursor";
import Preloader from "../components/Preloader";
import Nav from "../components/Nav";
import Hero from "../components/Hero";
import Marquee from "../components/Marquee";
import Work from "../components/Work";
import Timeline from "../components/Timeline";
import Studio from "../components/Studio";
import Ecosystem from "../components/Ecosystem";
import Lab from "../components/Lab";
import About from "../components/About";
import Contact from "../components/Contact";

export default function Home() {
  const [ready, setReady] = useState(false);

  return (
    <>
      {!ready && <Preloader onComplete={() => setReady(true)} />}
      <Cursor />
      <Atmosphere />
      <Nav />
      <SmoothScroll>
        <main className="relative z-10">
          <Hero ready={ready} />
          <Marquee
            items={["MIX", "MASTER", "SOUND DESIGN", "DSP", "VOCE", "AI AUDIO", "VST3", "PLUGIN"]}
            accent
          />
          <Work />
          <Timeline />
          <Studio />
          <Ecosystem />
          <Lab />
          <Marquee items={["LOGIC PRO", "ABLETON", "PRO TOOLS", "OPENCL", "CLAUDE CODE", "JUCE", "TAURI", "REMOTION"]} />
          <About />
          <Contact />
        </main>
      </SmoothScroll>
    </>
  );
}
