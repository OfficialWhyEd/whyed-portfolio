# WHYED // Portfolio

Portfolio futuristico per **Edoardo Porcu (WhyEd)** — sound engineer × audio-tech AI developer.
Costruito con **Next.js 14 (App Router) + GSAP + Lenis**.

## Stack
- **Next.js 14.2** — App Router, React Server/Client Components
- **GSAP 3.12** — timeline, ScrollTrigger, quickTo (cursor), counter
- **Lenis** — smooth scroll sincronizzato con ScrollTrigger
- **Tailwind CSS** — utility + design tokens custom
- Font: Chakra Petch (display) · Space Mono (mono) · Archivo (body)

## Avvio rapido

```bash
npm install
npm run dev      # http://localhost:3000
```

Build di produzione:

```bash
npm run build
npm run start
```

## Struttura

```
app/
  layout.js        # font CDN + metadata SEO/OG
  page.js          # orchestrazione sezioni + stato preloader
  globals.css      # design system: grain, scanline, grid, cursor, glow, glitch
components/
  Preloader.jsx    # boot sequence 000→100 con log tecnico
  Cursor.jsx       # cursore custom (dot + ring magnetico)
  SmoothScroll.jsx # Lenis + GSAP ticker
  Atmosphere.jsx   # grain / scanlines / grid / vignette
  Nav.jsx          # nav mix-blend + clock CET live
  Hero.jsx         # split-reveal, parallax mouse, waveform
  Marquee.jsx      # marquee infinito GSAP
  Work.jsx         # discografia, card corner-bracket
  Lab.jsx          # terminale plugin-AI + status modules
  About.jsx        # counter animati + stack tecnico
  Contact.jsx      # CTA gigante + link social
  Reveal.jsx       # wrapper ScrollTrigger riutilizzabile
lib/
  projects.js      # dati discografia (modifica qui i contenuti)
```

## Personalizzazione veloce

- **Contenuti progetti** → `lib/projects.js`
- **Link social / email** → array `links` in `components/Contact.jsx`
- **Palette** → variabili CSS in `app/globals.css` (`--signal`, `--plasma`, `--cyan`) e `tailwind.config.js`
- **Testo hero** → `components/Hero.jsx`
- **Moduli Lab / log terminale** → `components/Lab.jsx`

## Note

- Il cursore custom si disattiva automaticamente sotto i 900px (touch).
- Rispetta `prefers-reduced-motion`: glitch e reveal vengono neutralizzati.
- I font sono caricati via CDN Google Fonts (`app/layout.js`). Per build
  totalmente offline puoi reintrodurre `next/font/google` quando hai rete.
- Deploy consigliato: **Vercel** (`vercel` → done) o qualsiasi host Node.

---
© 2026 Edoardo Porcu · WhyEd
