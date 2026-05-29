# DESIGN.md — WhyEd Portfolio

## Brand Identity
- **Nome:** WhyEd (Edoardo Porcu, @whyed)
- **Ruolo:** Ingegnere del Suono × Sviluppatore Audio-Tech
- **Sede:** Cagliari, Sardinia → London → Worldwide
- **Identità:** Artigiano del suono + builder software. Il suono come materia prima, il codice come strumento.
- **Tagline:** "Costruisco suono che pensa — strumenti che ascoltano, rispondono, ricordano."

## Palette Cromatica
| Token | Valore | Uso |
|-------|--------|-----|
| `--void` | `#08090e` | Sfondo principale |
| `--void2` | `#0e1018` | Sfondo secondario / pannelli |
| `--paper` | `#f0ede8` | Testo principale (caldo, non bianco puro) |
| `--dim` | `#6a6860` | Testo secondario |
| `--faint` | `#2a2c34` | Testo terziario, dettagli, bordi |
| `--signal` | `#c94b25` | Accento rosso — segnale, dati chiave, highlight |
| `--signal2` | `#e8603a` | Accento rosso chiaro — variante |
| `--line` | `rgba(255,255,255,0.06)` | Bordi sottili |
| `--line2` | `rgba(255,255,255,0.1)` | Bordi medi |

## Tipografia
| Ruolo | Font | Uso |
|-------|------|-----|
| Display | Bebas Neue | Titoli grandi, hero, section headings |
| Serif Italic | DM Serif Display (italic) | Contrasto elegante, tagline, sottotitoli |
| Body | Outfit 300/400/500 | Testo corpo, descrizioni |
| Mono | JetBrains Mono | Label, dati, codice, eyebrow, coordinate |

## Dials (Bibbia Design — Sequenza Obbligatoria)
- **DESIGN_VARIANCE: 8** → Asimmetrico, masonry, CSS Grid frazioni, grandi vuoti
- **MOTION_INTENSITY: 6** → GSAP useGSAP + ScrollTrigger, cubic-bezier, transform/opacity only
- **VISUAL_DENSITY: 4** → Spaziatura normale, sezioni ampie, non cockpit

## Regole Progettuali
- MAI `Inter` come font — bannato
- MAI `#000000` puro — usa `--void` (#08090e)
- MAI layout a 3 card orizzontali — usa lista editoriale o asimmetrico
- Tutto left-aligned: hero, sezioni, testo — NO centrato
- Il rosso `--signal` va usato sparingly: accenti, status, highlight numerici
- Grain overlay fisso `z-index: 9000`, pointer-events: none
- Grid-bg atmosferico `z-index: 0` — mai su scroll container
- `min-height: 100dvh` per sezioni full-viewport — MAI `100vh`
- Animazioni: `transform` e `opacity` only — mai `width/height/top/left`
- `useGSAP` (non useEffect) per tutte le animazioni GSAP — obbligatorio in Next.js Strict Mode

## Struttura Sezioni (Lingua: IT/EN bilanciato)
1. **Hero** — IT eyebrow, nome EN/IT, tagline IT
2. **Marquee** — skill/tool tags EN (internazionale)
3. **Lavori · Dev** — titoli EN (nomi propri), descrizioni IT
4. **Lavori · Musica** — titoli EN/IT, descrizioni IT
5. **Cronologia** — interamente IT
6. **Studio** — IT con termini tecnici EN dove necessario
7. **Ecosistema Why** — IT
8. **R&D Lab** — IT/EN mix
9. **Profilo** — IT
10. **Contatti** — IT/EN

## Anti-Pattern da Evitare
- NON usare template "portfolio generici futuristici"
- NON usare purple/blue neon glows
- NON usare card tutte uguali in griglia 3×n
- NON usare foto stock o placeholder Unsplash
- NON aggiungere sezioni non richieste (es: "testimonials", "pricing")
