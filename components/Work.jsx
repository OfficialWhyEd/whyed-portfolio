"use client";
import { useState, useCallback, useRef, useEffect } from "react";
import { devProjects, musicProjects } from "../lib/projects";
import Reveal from "./Reveal";
import HyperText from "./HyperText";

/* ── Immagini per progetto — screens[] include tutte le immagini disponibili ── */
const images = {
  "001": { screens: ["/projects/whycremisi.jpg",    "/projects/whycremisi-live.png", "/projects/whycremisi-2.jpg"],          fit: "contain", bg: "#050505", pad: true  },
  "002": { screens: ["/projects/whypost-dashboard.jpg", "/projects/whypost-2.png",  "/projects/whypost-3.png"],             fit: "cover",   bg: "#0a120e", pad: false },
  "003": { screens: ["/projects/whycalendar-dark.png",  "/projects/whycalendar-live.png", "/projects/whycalendar-screen.png"], fit: "cover", bg: "#040c10", pad: false, icon: "/projects/whycalendar.png" },
  "004": { screens: ["/projects/whyemugba.png",     "/projects/whyemugba-2.png",    "/projects/whyemugba-3.png"],            fit: "contain", bg: "#cc0008", pad: true  },
  "005": { screens: ["/projects/whycavalry.jpg",    "/projects/whycavalry-live.png", "/projects/whycavalry-2.png"],          fit: "contain", bg: "#1a2e30", pad: true  },
  "007": { screens: ["/projects/hyperframes.png",   "/projects/hyperframes-2.png"],                                         fit: "contain", bg: "#f5f5f5", pad: true  },
  "009": { screens: ["/projects/whygrommit-openclaw-monitor.png", "/projects/whygrommit-openclaw-monitor-2.png"],           fit: "cover",   bg: "#050a0a", pad: false },
  "010": { screens: ["/projects/whycremisi-2.jpg",  "/projects/whycremisi-live.png"],                                       fit: "contain", bg: "#050505", pad: true  },
};

/* ── Palette visiva (fallback SVG) ── */
const visuals = {
  "001": { hue: "#c94b25", pattern: "waveform" },
  "002": { hue: "#2a8a5a", pattern: "flow"     },
  "003": { hue: "#2c7a9a", pattern: "grid"     },
  "004": { hue: "#5a9a3c", pattern: "pixel"    },
  "005": { hue: "#9a6a3c", pattern: "lines"    },
  "006": { hue: "#7a4a9a", pattern: "dots"     },
  "007": { hue: "#3c5a9a", pattern: "bars"     },
  "008": { hue: "#c94b25", pattern: "karaoke"  },
  "009": { hue: "#3a8a7a", pattern: "scan"     },
  "010": { hue: "#8a3a7a", pattern: "osc"      },
  "M01": { hue: "#9a3a7a", pattern: "spectrum" },
  "M02": { hue: "#9a2a2a", pattern: "metal"    },
  "M03": { hue: "#3a5a7a", pattern: "lofi"     },
  "M04": { hue: "#2a6a7a", pattern: "synth"    },
  "M05": { hue: "#7a4a2a", pattern: "collab"   },
};

/* ── SVG Thumbnails ── */
function ProjectThumb({ id, hue, pattern, h = 180 }) {
  const ps = {
    waveform: (
      <svg viewBox="0 0 400 180" width="100%" height="100%" preserveAspectRatio="xMidYMid slice">
        <rect width="400" height="180" fill={`${hue}18`} />
        {[0, 1, 2, 3].map(i => (
          <polyline key={i}
            points={Array.from({ length: 80 }, (_, j) => {
              const x = (j / 79) * 400;
              const y = 90 + Math.sin((j + i * 9) * 0.28) * (40 - i * 9) + Math.sin((j + i * 2) * 0.7) * (18 - i * 4);
              return `${x},${y}`;
            }).join(" ")}
            fill="none" stroke={hue} strokeWidth={2.2 - i * 0.5} strokeOpacity={0.85 - i * 0.2} />
        ))}
        <rect x="0" y="0" width="400" height="30" fill={`${hue}22`} />
        <text x="16" y="20" fill={hue} fontFamily="JetBrains Mono" fontSize="9" opacity="0.9">SIGNAL · ACTIVE · OSC:9001</text>
        <circle cx="374" cy="18" r="5" fill={hue} opacity="0.9">
          <animate attributeName="opacity" values="1;0.2;1" dur="1.4s" repeatCount="indefinite" />
        </circle>
        <text x="16" y={h - 8} fill={hue} fontFamily="JetBrains Mono" fontSize="8" opacity="0.5">BotFace · 9 stati · JUCE 8</text>
      </svg>
    ),
    flow: (
      <svg viewBox="0 0 400 180" width="100%" height="100%" preserveAspectRatio="xMidYMid slice">
        <rect width="400" height="180" fill={`${hue}18`} />
        {[0,1,2,3,4].map(i => (
          <g key={i}>
            <rect x={16 + i * 76} y={70} width={64} height={40} rx="6"
              fill={`${hue}${i === 2 ? "35" : "18"}`} stroke={hue} strokeWidth="1.2" strokeOpacity="0.6" />
            <text x={48 + i * 76} y={94} fill={hue} fontFamily="JetBrains Mono"
              fontSize="8" textAnchor="middle" opacity="0.9">
              {["EXEL","SCRIPT","CLACK","SAFE","PUB"][i]}
            </text>
          </g>
        ))}
        {[0,1,2,3].map(i => (
          <path key={i} d={`M ${80+i*76},90 L ${92+i*76},90`}
            stroke={hue} strokeWidth="1.5" strokeOpacity="0.7"
            markerEnd={`url(#arr${i})`} />
        ))}
        <text x="16" y="24" fill={hue} fontFamily="JetBrains Mono" fontSize="9" opacity="0.9">PIPELINE · 15 AGENTI · ZERO COSTO</text>
      </svg>
    ),
    grid: (
      <svg viewBox="0 0 400 180" width="100%" height="100%" preserveAspectRatio="xMidYMid slice">
        <rect width="400" height="180" fill={`${hue}18`} />
        {Array.from({length:6},(_, i)=>Array.from({length:4},(_, j)=>(
          <rect key={`${i}-${j}`} x={16+i*64} y={24+j*36} width={56} height={28} rx="4"
            fill={`${hue}${i+j===4?"40":"18"}`} stroke={hue} strokeWidth="0.8" strokeOpacity="0.5"/>
        )))}
        <text x="16" y="174" fill={hue} fontFamily="JetBrains Mono" fontSize="8" opacity="0.6">TAURI · RUST · GOOGLE CALENDAR · AI</text>
      </svg>
    ),
    pixel: (
      <svg viewBox="0 0 400 180" width="100%" height="100%" preserveAspectRatio="xMidYMid slice">
        <rect width="400" height="180" fill="#080e08" />
        {Array.from({length:20},(_, i)=>Array.from({length:9},(_, j)=>{
          const v=Math.random()>0.55;
          return v?<rect key={`${i}-${j}`} x={4+i*20} y={8+j*18} width={16} height={14}
            fill={hue} opacity={0.15+Math.random()*0.7}/>:null;
        }))}
        <text x="16" y="174" fill={hue} fontFamily="JetBrains Mono" fontSize="8" opacity="0.8">mGBA WASM · MCP :9876 · CLAUDE GIOCA</text>
      </svg>
    ),
    lines: (
      <svg viewBox="0 0 400 180" width="100%" height="100%" preserveAspectRatio="xMidYMid slice">
        <rect width="400" height="180" fill={`${hue}18`} />
        {Array.from({length:10},(_, i)=>(
          <line key={i} x1={0} y1={18*i} x2={400} y2={18*i}
            stroke={hue} strokeWidth="0.5" strokeOpacity={0.08+i*0.04}/>
        ))}
        <path d="M 20,150 L 80,90 L 140,110 L 200,50 L 260,70 L 320,30 L 380,60"
          fill="none" stroke={hue} strokeWidth="2.5" strokeOpacity="0.9"/>
        <path d="M 20,150 L 80,90 L 140,110 L 200,50 L 260,70 L 320,30 L 380,60 L 380,180 L 20,180 Z"
          fill={hue} opacity="0.08"/>
        <text x="16" y="20" fill={hue} fontFamily="JetBrains Mono" fontSize="8" opacity="0.7">MCP SERVER · 17 TOOLS · CAVALRY BRIDGE</text>
      </svg>
    ),
    dots: (
      <svg viewBox="0 0 400 180" width="100%" height="100%" preserveAspectRatio="xMidYMid slice">
        <rect width="400" height="180" fill={`${hue}18`} />
        {Array.from({length:16},(_, i)=>Array.from({length:6},(_, j)=>(
          <circle key={`${i}-${j}`} cx={24+i*24} cy={20+j*28} r={2+Math.random()*5}
            fill={hue} opacity={0.08+Math.random()*0.5}/>
        )))}
        <text x="16" y="172" fill={hue} fontFamily="JetBrains Mono" fontSize="8" opacity="0.7">APP DA TESTO · TAURI + REACT · ISTANTANEO</text>
      </svg>
    ),
    bars: (
      <svg viewBox="0 0 400 180" width="100%" height="100%" preserveAspectRatio="xMidYMid slice">
        <rect width="400" height="180" fill={`${hue}18`} />
        {Array.from({length:20},(_, i)=>{
          const bh=20+Math.abs(Math.sin(i*0.6)*110);
          return <rect key={i} x={6+i*20} y={160-bh} width={14} height={bh}
            fill={hue} opacity={0.15+Math.abs(Math.sin(i*0.4))*0.7}/>;
        })}
        <text x="16" y="20" fill={hue} fontFamily="JetBrains Mono" fontSize="8" opacity="0.7">HEYGEN API · BUN RUNTIME · VIDEO AUTO</text>
      </svg>
    ),
    karaoke: (
      <svg viewBox="0 0 400 180" width="100%" height="100%" preserveAspectRatio="xMidYMid slice">
        <rect width="400" height="180" fill={`${hue}18`} />
        <text x="20" y="70" fill={hue} fontFamily="JetBrains Mono" fontSize="13" fontWeight="600" opacity="1">COSTRUISCI · SUONO · CHE</text>
        <rect x="20" y="78" width="220" height="2.5" fill={hue} opacity="0.9"/>
        <text x="20" y="106" fill={`${hue}99`} fontFamily="JetBrains Mono" fontSize="12">PENSA · E · RISPONDE</text>
        <text x="20" y="134" fill={`${hue}44`} fontFamily="JetBrains Mono" fontSize="12">RICORDA · SEMPRE</text>
        <text x="16" y="170" fill={hue} fontFamily="JetBrains Mono" fontSize="8" opacity="0.6">KARAOKE · SFX · MEMORIA EDITORIALE</text>
      </svg>
    ),
    scan: (
      <svg viewBox="0 0 400 180" width="100%" height="100%" preserveAspectRatio="xMidYMid slice">
        <rect width="400" height="180" fill={`${hue}18`} />
        {Array.from({length:9},(_, i)=>(
          <line key={i} x1={0} y1={20*i} x2={400} y2={20*i}
            stroke={hue} strokeWidth="0.5" strokeOpacity={0.06+i*0.02}/>
        ))}
        <rect x="0" y="0" width="400" height="2" fill={hue} opacity="0.5">
          <animate attributeName="y" values="0;178;0" dur="2.5s" repeatCount="indefinite"/>
        </rect>
        <text x="90" y="100" fill={hue} fontFamily="JetBrains Mono" fontSize="11" opacity="0.7" textAnchor="middle">SCREEN</text>
        <text x="90" y="120" fill={hue} fontFamily="JetBrains Mono" fontSize="11" opacity="0.4" textAnchor="middle">CONTEXT</text>
        <text x="16" y="170" fill={hue} fontFamily="JetBrains Mono" fontSize="8" opacity="0.6">SCREENPIPE · MCP · VISIONE PASSIVA</text>
      </svg>
    ),
    osc: (
      <svg viewBox="0 0 400 180" width="100%" height="100%" preserveAspectRatio="xMidYMid slice">
        <rect width="400" height="180" fill={`${hue}18`} />
        <circle cx="200" cy="90" r="64" fill="none" stroke={hue} strokeWidth="1.2" strokeOpacity="0.35"/>
        <circle cx="200" cy="90" r="42" fill="none" stroke={hue} strokeWidth="1" strokeOpacity="0.45"/>
        <circle cx="200" cy="90" r="20" fill={hue} opacity="0.25"/>
        {[0,45,90,135,180,225,270,315].map(a=>(
          <line key={a}
            x1={200+42*Math.cos(a*Math.PI/180)} y1={90+42*Math.sin(a*Math.PI/180)}
            x2={200+64*Math.cos(a*Math.PI/180)} y2={90+64*Math.sin(a*Math.PI/180)}
            stroke={hue} strokeWidth="2" strokeOpacity="0.6"/>
        ))}
        <text x="16" y="24" fill={hue} fontFamily="JetBrains Mono" fontSize="8" opacity="0.8">VST3 · 6 PROVIDER AI · OSC UDP · MULTI</text>
      </svg>
    ),
    spectrum: (
      <svg viewBox="0 0 400 180" width="100%" height="100%" preserveAspectRatio="xMidYMid slice">
        <rect width="400" height="180" fill={`${hue}18`} />
        {Array.from({length:44},(_, i)=>{
          const bh=8+Math.abs(Math.sin(i*0.35)*90)+Math.abs(Math.sin(i*0.8)*40);
          return <rect key={i} x={3+i*9} y={160-bh} width={7} height={bh}
            fill={hue} opacity={0.25+Math.abs(Math.sin(i*0.28))*0.65}/>;
        })}
        <text x="16" y="24" fill={hue} fontFamily="JetBrains Mono" fontSize="9" opacity="0.9">SAY I'M DIFFERENT · 25 TRACCE · 53:00</text>
      </svg>
    ),
    metal: (
      <svg viewBox="0 0 400 180" width="100%" height="100%" preserveAspectRatio="xMidYMid slice">
        <rect width="400" height="180" fill={`${hue}18`} />
        {Array.from({length:8},(_, i)=>(
          <line key={i} x1={0} y1={i*25} x2={400} y2={i*25+8}
            stroke={hue} strokeWidth={4-i*0.4} strokeOpacity={0.08+i*0.03}/>
        ))}
        <text x="24" y="85" fill={hue} fontFamily="JetBrains Mono" fontSize="22" fontWeight="bold" opacity="0.9">STARS</text>
        <text x="24" y="112" fill={`${hue}88`} fontFamily="JetBrains Mono" fontSize="13">feat. WhyEd · RAGEWINGS</text>
        <text x="16" y="168" fill={hue} fontFamily="JetBrains Mono" fontSize="8" opacity="0.6">ROCK/METAL · 2024 · VIDEO UFFICIALE</text>
      </svg>
    ),
    lofi: (
      <svg viewBox="0 0 400 180" width="100%" height="100%" preserveAspectRatio="xMidYMid slice">
        <rect width="400" height="180" fill={`${hue}18`} />
        {Array.from({length:6},(_, i)=>(
          <polyline key={i}
            points={Array.from({length:32},(_, j)=>`${j*13},${90+Math.sin((j+i*5)*0.5)*(22-i*3)}`).join(" ")}
            fill="none" stroke={hue} strokeWidth="1.2" strokeOpacity={0.25+i*0.06}/>
        ))}
        <text x="20" y="50" fill={hue} fontFamily="JetBrains Mono" fontSize="10" opacity="0.7">MY LOOSING DREAMS</text>
        <text x="20" y="68" fill={`${hue}88`} fontFamily="JetBrains Mono" fontSize="8">Artwork: Ilya Kuvshinov</text>
        <text x="16" y="170" fill={hue} fontFamily="JetBrains Mono" fontSize="8" opacity="0.5">LO-FI · 2019 · CAGLIARI</text>
      </svg>
    ),
    synth: (
      <svg viewBox="0 0 400 180" width="100%" height="100%" preserveAspectRatio="xMidYMid slice">
        <rect width="400" height="180" fill={`${hue}18`} />
        {Array.from({length:25},(_, i)=>{
          const isBlack=[1,3,6,8,10].includes(i%12);
          return !isBlack
            ?<rect key={i} x={i*16} y={50} width={14} height={80}
              fill="none" stroke={hue} strokeWidth="1" strokeOpacity="0.5"/>
            :<rect key={i} x={i*16-2} y={50} width={10} height={50}
              fill={hue} opacity="0.45"/>;
        })}
        <text x="16" y="168" fill={hue} fontFamily="JetBrains Mono" fontSize="8" opacity="0.6">EDM · LATIN · SOUND DESIGN · 2020–22</text>
      </svg>
    ),
    collab: (
      <svg viewBox="0 0 400 180" width="100%" height="100%" preserveAspectRatio="xMidYMid slice">
        <rect width="400" height="180" fill={`${hue}18`} />
        <circle cx="140" cy="90" r="50" fill="none" stroke={hue} strokeWidth="1.5" strokeOpacity="0.6"/>
        <circle cx="260" cy="90" r="50" fill="none" stroke={hue} strokeWidth="1.5" strokeOpacity="0.6"/>
        <path d="M 172,60 Q 200,90 172,120" fill={hue} opacity="0.18"/>
        <path d="M 228,60 Q 200,90 228,120" fill={hue} opacity="0.18"/>
        <text x="104" y="94" fill={hue} fontFamily="JetBrains Mono" fontSize="10" textAnchor="middle" opacity="0.8">WhyEd</text>
        <text x="296" y="94" fill={hue} fontFamily="JetBrains Mono" fontSize="10" textAnchor="middle" opacity="0.8">COLLAB</text>
        <text x="200" y="170" fill={hue} fontFamily="JetBrains Mono" fontSize="8" textAnchor="middle" opacity="0.6">2018 · PRIMA TRACCIA PUBBLICA</text>
      </svg>
    ),
  };
  return (
    <div style={{width:"100%",height:"100%",overflow:"hidden"}}>
      {ps[pattern] || ps.waveform}
    </div>
  );
}

/* ── Card con 3D tilt + gallery cycling ── */
function ProjectCard({ p, i, featured = false, wide = false }) {
  const cardRef = useRef(null);
  const [hovered, setHovered] = useState(false);
  const [imgIdx, setImgIdx] = useState(0);
  const vis = visuals[p.id] || { hue: "#c94b25", pattern: "waveform" };
  const imgData = images[p.id];
  const screens = imgData?.screens || [];

  // Auto-ciclo immagini ogni 3.5s sempre, indipendente dall'hover
  useEffect(() => {
    if (screens.length <= 1) return;
    const id = setInterval(() => setImgIdx(n => (n + 1) % screens.length), 3500);
    return () => clearInterval(id);
  }, [screens.length]);

  const onMouseMove = useCallback((e) => {
    const el = cardRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    el.style.transform = `perspective(900px) rotateY(${x * 12}deg) rotateX(${-y * 10}deg) translateZ(8px)`;
  }, []);

  const onMouseLeave = useCallback(() => {
    setHovered(false);
    if (cardRef.current) {
      cardRef.current.style.transform = "perspective(900px) rotateY(0deg) rotateX(0deg) translateZ(0px)";
    }
  }, []);

  const thumbH = featured ? 320 : wide ? 220 : 180;

  return (
    <Reveal delay={i * 0.05}>
      <article
        ref={cardRef}
        data-hover
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={onMouseLeave}
        onMouseMove={onMouseMove}
        style={{
          position: "relative",
          background: "rgba(255,255,255,0.015)",
          border: `1px solid ${hovered ? `${vis.hue}66` : "var(--line)"}`,
          clipPath: "polygon(0 0, calc(100% - 16px) 0, 100% 16px, 100% 100%, 16px 100%, 0 calc(100% - 16px))",
          transition: "border-color 0.3s ease, transform 0.15s ease",
          cursor: "pointer",
        }}
      >
        {/* Spotlight interno */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: `radial-gradient(circle at 50% 0%, ${vis.hue}10 0%, transparent 60%)`,
            pointerEvents: "none",
            zIndex: 1,
            opacity: hovered ? 1 : 0,
            transition: "opacity 0.4s",
          }}
        />

        {/* Thumbnail */}
        <div
          className="work-card-thumb"
          style={{
            height: `${thumbH}px`,
            borderBottom: `1px solid ${hovered ? `${vis.hue}55` : "var(--line)"}`,
            transition: "border-color 0.3s, transform 0.5s cubic-bezier(0.16,1,0.3,1)",
            overflow: "hidden",
            position: "relative",
            background: imgData?.bg || "var(--void2)",
            transform: hovered ? "scale(1.02)" : "scale(1)",
          }}
        >
          {screens.length > 0 ? (
            <>
              {screens.map((src, di) => (
                <img
                  key={src}
                  src={src}
                  alt={di === 0 ? p.title : ""}
                  style={{
                    position: "absolute",
                    inset: 0,
                    width: "100%",
                    height: "100%",
                    objectFit: imgData.fit,
                    objectPosition: "center top",
                    display: "block",
                    padding: imgData.pad ? "1.5rem" : "0",
                    opacity: di === imgIdx ? 1 : 0,
                    transition: "opacity 0.8s cubic-bezier(0.4,0,0.2,1), transform 0.6s cubic-bezier(0.16,1,0.3,1)",
                    transform: hovered ? "scale(1.03)" : "scale(1)",
                    zIndex: di === imgIdx ? 1 : 0,
                  }}
                />
              ))}
              {/* Dot gallery indicator */}
              {screens.length > 1 && (
                <div style={{
                  position: "absolute",
                  bottom: "0.7rem",
                  right: "0.7rem",
                  display: "flex",
                  gap: "4px",
                  zIndex: 3,
                }}>
                  {screens.map((_, di) => (
                    <div
                      key={di}
                      onClick={e => { e.stopPropagation(); setImgIdx(di); }}
                      style={{
                        width: di === imgIdx ? "14px" : "4px",
                        height: "4px",
                        borderRadius: "2px",
                        background: di === imgIdx ? vis.hue : "rgba(255,255,255,0.35)",
                        transition: "all 0.3s cubic-bezier(0.16,1,0.3,1)",
                        cursor: "pointer",
                      }}
                    />
                  ))}
                </div>
              )}
            </>
          ) : (
            <ProjectThumb id={p.id} hue={vis.hue} pattern={vis.pattern} h={thumbH} />
          )}
          {/* Overlay sfumato in basso */}
          <div
            style={{
              position: "absolute",
              bottom: 0,
              left: 0,
              right: 0,
              height: "60px",
              background: "linear-gradient(to bottom, transparent, rgba(8,9,14,0.9))",
              pointerEvents: "none",
            }}
          />
          {/* Icona app nell'angolo in basso a sinistra */}
          {imgData?.icon && (
            <div style={{
              position: "absolute",
              bottom: "0.8rem",
              left: "0.8rem",
              width: "44px",
              height: "44px",
              borderRadius: "10px",
              overflow: "hidden",
              border: "1px solid rgba(255,255,255,0.15)",
              boxShadow: "0 4px 16px rgba(0,0,0,0.6)",
              zIndex: 2,
            }}>
              <img
                src={imgData.icon}
                alt="App icon"
                style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
              />
            </div>
          )}
          {/* Status dot alive */}
          <div style={{
            position: "absolute",
            top: "0.9rem",
            right: "0.9rem",
            display: "flex",
            alignItems: "center",
            gap: "0.4rem",
            background: "rgba(8,9,14,0.75)",
            border: `1px solid ${vis.hue}33`,
            padding: "0.2rem 0.5rem 0.2rem 0.4rem",
            backdropFilter: "blur(4px)",
          }}>
            <span className="card-alive-dot" style={{ color: vis.hue }} />
            <span style={{
              fontFamily: '"JetBrains Mono", monospace',
              fontSize: "0.46rem",
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: vis.hue,
            }}>LIVE</span>
          </div>
        </div>

        {/* Contenuto */}
        <div style={{ padding: featured ? "2rem 2.4rem 2.4rem" : "1.4rem 1.8rem 1.8rem", position: "relative", zIndex: 2 }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: "0.6rem" }}>
            <span style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: "0.54rem", color: vis.hue, letterSpacing: "0.14em" }}>
              {p.id}
            </span>
            <span style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: "0.54rem", color: "var(--faint)", letterSpacing: "0.1em" }}>
              {p.year}
            </span>
          </div>

          <h3
            className="display"
            style={{
              fontSize: featured ? "clamp(2rem, 4vw, 3.2rem)" : "clamp(1.5rem, 2.5vw, 2rem)",
              color: hovered ? vis.hue : "var(--paper)",
              lineHeight: 1,
              marginBottom: "0.4rem",
              transition: "color 0.3s",
            }}
          >
            <HyperText text={p.title} />
          </h3>

          <div style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: "0.54rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--faint)", marginBottom: "0.9rem" }}>
            {p.type}
          </div>

          <p style={{ fontFamily: '"Outfit", sans-serif', fontWeight: 300, fontSize: "0.84rem", color: "var(--dim)", lineHeight: 1.65, marginBottom: "1.2rem" }}>
            {p.desc}
          </p>

          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "0.5rem" }}>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.3rem" }}>
              {p.tags.slice(0, featured ? 6 : 4).map(t => (
                <span key={t} style={{
                  fontFamily: '"JetBrains Mono", monospace', fontSize: "0.5rem", letterSpacing: "0.12em",
                  textTransform: "uppercase", color: "var(--faint)", border: "1px solid var(--line)", padding: "0.2rem 0.5rem",
                }}>
                  {t}
                </span>
              ))}
            </div>
            <span style={{
              fontFamily: '"JetBrains Mono", monospace', fontSize: "0.56rem",
              color: hovered ? vis.hue : "var(--dim)", letterSpacing: "0.08em",
              textTransform: "uppercase", transition: "color 0.3s", flexShrink: 0,
            }}>
              {p.role} →
            </span>
          </div>
        </div>
      </article>
    </Reveal>
  );
}

/* pattern asimmetrico DESIGN_VARIANCE 8: span 2 ogni 3 item */
const spanPattern = [2, 1, 1, 2, 1, 1, 2, 1, 1, 1, 1, 1];

/* ── Sezione con layout bento ── */
function Section({ label, sectionNum, projects }) {
  const [featured, ...rest] = projects;

  return (
    <div style={{ marginBottom: "7rem" }}>
      <Reveal>
        <div style={{ display: "flex", alignItems: "baseline", gap: "1.5rem", marginBottom: "3rem" }}>
          <span style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: "0.58rem", letterSpacing: "0.16em", textTransform: "uppercase", color: "var(--signal)" }}>
            /// {sectionNum}
          </span>
          <h2 className="display" style={{ fontSize: "clamp(2rem, 6vw, 5.5rem)", color: "var(--paper)" }}>
            {label}
          </h2>
        </div>
      </Reveal>

      {/* Featured card (prima, intera larghezza) */}
      {featured && (
        <div style={{ marginBottom: "1.2rem" }}>
          <ProjectCard p={featured} i={0} featured />
        </div>
      )}

      {/* Griglia asimmetrica 3 colonne */}
      <div className="work-grid" style={{
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gap: "1.2rem",
      }}>
        {rest.map((p, i) => {
          const span = spanPattern[i] ?? 1;
          return (
            <div key={p.id} className="work-grid-item" style={{ gridColumn: `span ${span}` }}>
              <ProjectCard p={p} i={i + 1} wide={span === 2} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default function Work() {
  return (
    <section id="lavori" style={{ padding: "8rem 2.5rem", position: "relative" }}>
      <Section label="PROGETTI SOFTWARE" sectionNum="01 — SVILUPPO" projects={devProjects} />
      <Section label="MUSICA & DISCOGRAFIA" sectionNum="02 — AUDIO" projects={musicProjects} />
    </section>
  );
}
