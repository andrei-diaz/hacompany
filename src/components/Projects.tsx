"use client";

import { useCallback, useEffect, useState } from "react";

const projects = [
  {
    n: "01",
    name: "Lares",
    sub: "Plataforma inmobiliaria",
    stack: ["Next.js", "Supabase", "Mapbox"],
    year: "2025",
    kind: "App",
    grad: "linear-gradient(135deg, #ff4d1c, #5a1500)",
  },
  {
    n: "02",
    name: "Lupa",
    sub: "Dashboard analítico",
    stack: ["React", "Node", "PostgreSQL"],
    year: "2025",
    kind: "SaaS",
    grad: "linear-gradient(135deg, #d8ff00, #ff4d1c)",
  },
  {
    n: "03",
    name: "Estudio Vela",
    sub: "Sitio editorial",
    stack: ["Next.js", "Sanity"],
    year: "2024",
    kind: "Web",
    grad: "linear-gradient(135deg, #fff5ee, #ff7a52)",
  },
  {
    n: "04",
    name: "Pulso",
    sub: "App de tracking",
    stack: ["React Native", "Firebase"],
    year: "2024",
    kind: "Mobile",
    grad: "linear-gradient(135deg, #0a0a0a, #ff4d1c)",
  },
  {
    n: "05",
    name: "Mira",
    sub: "CMS para creadores",
    stack: ["Next.js", "tRPC"],
    year: "2023",
    kind: "SaaS",
    grad: "linear-gradient(135deg, #ff4d1c, #d8ff00)",
  },
];

function navBtnStyle(disabled: boolean): React.CSSProperties {
  return {
    width: 56,
    height: 56,
    borderRadius: "50%",
    background: disabled ? "rgba(10,10,10,0.08)" : "var(--ink)",
    color: disabled ? "rgba(10,10,10,0.3)" : "var(--paper)",
    border: "none",
    cursor: disabled ? "not-allowed" : "pointer",
    fontSize: 20,
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    transition: "transform 0.2s",
  };
}

export default function Projects() {
  const [active, setActive] = useState(2);

  const next = useCallback(
    () => setActive((a) => Math.min(projects.length - 1, a + 1)),
    []
  );
  const prev = useCallback(() => setActive((a) => Math.max(0, a - 1)), []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [next, prev]);

  return (
    <section
      id="proyectos"
      className="relative pt-32 pb-20 px-6 overflow-hidden"
      style={{ background: "var(--paper)", color: "var(--ink)" }}
    >
      <div className="max-w-[1280px] mx-auto">
        <div className="flex flex-wrap items-end justify-between gap-8 mb-12">
          <div>
            <h2
              className="font-display italic uppercase m-0"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(56px, 9vw, 128px)",
                letterSpacing: "-0.04em",
                lineHeight: 0.85,
              }}
            >
              Trabajo{" "}
              <span style={{ color: "var(--orange)" }}>seleccionado.</span>
            </h2>
          </div>
          <div className="flex gap-3">
            <button
              onClick={prev}
              disabled={active === 0}
              aria-label="Proyecto anterior"
              style={navBtnStyle(active === 0)}
            >
              ←
            </button>
            <button
              onClick={next}
              disabled={active === projects.length - 1}
              aria-label="Siguiente proyecto"
              style={navBtnStyle(active === projects.length - 1)}
            >
              →
            </button>
          </div>
        </div>
      </div>

      <div
        className="relative mb-10"
        style={{ height: 560, perspective: 1800 }}
      >
        <div
          className="absolute"
          style={{
            left: "50%",
            top: "50%",
            transformStyle: "preserve-3d",
          }}
        >
          {projects.map((p, i) => {
            const offset = i - active;
            const abs = Math.abs(offset);
            const tx = offset * 280;
            const tz = -abs * 200;
            const ry = offset * -25;
            const opacity = abs > 2 ? 0 : 1 - abs * 0.15;
            return (
              <article
                key={p.n}
                onClick={() => setActive(i)}
                style={{
                  position: "absolute",
                  left: -220,
                  top: -260,
                  width: 440,
                  height: 520,
                  borderRadius: 28,
                  overflow: "hidden",
                  transform: `translate3d(${tx}px, 0, ${tz}px) rotateY(${ry}deg)`,
                  transition:
                    "transform .7s cubic-bezier(.22,1,.36,1), opacity .7s",
                  cursor: i === active ? "default" : "pointer",
                  background: p.grad,
                  opacity,
                  boxShadow:
                    i === active
                      ? "0 40px 80px rgba(10,10,10,0.35), 0 0 0 1px rgba(10,10,10,0.1)"
                      : "0 20px 40px rgba(10,10,10,0.2)",
                  pointerEvents: abs > 2 ? "none" : "auto",
                }}
              >
                <div
                  aria-hidden
                  style={{
                    position: "absolute",
                    inset: 0,
                    backgroundImage:
                      "linear-gradient(rgba(10,10,10,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(10,10,10,0.08) 1px, transparent 1px)",
                    backgroundSize: "40px 40px",
                  }}
                />
                <div
                  aria-hidden
                  style={{
                    position: "absolute",
                    inset: 0,
                    background:
                      "linear-gradient(180deg, rgba(255,255,255,0.25) 0%, transparent 40%, rgba(0,0,0,0.4) 100%)",
                  }}
                />

                <div
                  className="font-display italic"
                  style={{
                    position: "absolute",
                    top: -40,
                    right: -20,
                    fontFamily: "var(--font-display)",
                    fontSize: 360,
                    color: "rgba(10,10,10,0.18)",
                    lineHeight: 1,
                    letterSpacing: "-0.06em",
                  }}
                >
                  {p.n}
                </div>

                <div
                  className="font-mono uppercase"
                  style={{
                    position: "absolute",
                    top: 20,
                    left: 20,
                    padding: "6px 12px",
                    borderRadius: 999,
                    background: "rgba(255,245,238,0.95)",
                    color: "var(--ink)",
                    fontSize: 10,
                    letterSpacing: "0.18em",
                  }}
                >
                  Caso {p.n} · {p.kind}
                </div>

                <div
                  style={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    right: 0,
                    padding: 28,
                    color: "var(--paper)",
                  }}
                >
                  <h3
                    className="font-display italic uppercase m-0"
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: 56,
                      letterSpacing: "-0.03em",
                      marginBottom: 4,
                      textShadow: "0 4px 24px rgba(0,0,0,0.4)",
                    }}
                  >
                    {p.name}
                  </h3>
                  <p
                    className="italic m-0 mb-4"
                    style={{
                      fontFamily: "var(--font-serif)",
                      fontSize: 18,
                      opacity: 0.95,
                    }}
                  >
                    {p.sub}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {p.stack.map((s) => (
                      <span
                        key={s}
                        className="font-mono uppercase"
                        style={{
                          fontSize: 10,
                          padding: "4px 10px",
                          borderRadius: 999,
                          border: "1px solid rgba(255,245,238,0.4)",
                          letterSpacing: "0.12em",
                        }}
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>

      <div className="flex justify-center gap-2">
        {projects.map((_, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            aria-label={`Ir al proyecto ${i + 1}`}
            style={{
              width: i === active ? 32 : 10,
              height: 10,
              borderRadius: 999,
              background:
                i === active ? "var(--orange)" : "rgba(10,10,10,0.2)",
              border: "none",
              cursor: "pointer",
              transition: "all .3s",
              padding: 0,
            }}
          />
        ))}
      </div>
    </section>
  );
}
