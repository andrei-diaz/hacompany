"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { projects } from "@/data/projects";

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

type CardSize = {
  w: number;
  h: number;
  offset: number;
  height: number;
  panelInset: number;
  titleSize: number;
  subSize: number;
};

const sizes = {
  sm: {
    w: 280,
    h: 380,
    offset: 200,
    height: 420,
    panelInset: 130,
    titleSize: 26,
    subSize: 14,
  } as CardSize,
  md: {
    w: 360,
    h: 460,
    offset: 240,
    height: 500,
    panelInset: 160,
    titleSize: 32,
    subSize: 16,
  } as CardSize,
  lg: {
    w: 440,
    h: 520,
    offset: 280,
    height: 560,
    panelInset: 188,
    titleSize: 38,
    subSize: 18,
  } as CardSize,
};

export default function Projects() {
  const [active, setActive] = useState(1);
  const [s, setS] = useState<CardSize>(sizes.lg);

  useEffect(() => {
    const compute = () => {
      const w = window.innerWidth;
      if (w < 640) setS(sizes.sm);
      else if (w < 1024) setS(sizes.md);
      else setS(sizes.lg);
    };
    compute();
    window.addEventListener("resize", compute);
    return () => window.removeEventListener("resize", compute);
  }, []);

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
      className="relative pt-20 sm:pt-32 pb-16 sm:pb-20 px-4 sm:px-6 overflow-hidden"
      style={{ background: "var(--paper)", color: "var(--ink)" }}
    >
      <div className="max-w-[1280px] mx-auto">
        <div className="flex flex-wrap items-end justify-between gap-8 mb-12">
          <div>
            <h2
              className="font-display italic uppercase m-0"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(36px, 9vw, 128px)",
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
        style={{ height: s.height, perspective: 1800 }}
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
            const tx = offset * s.offset;
            const tz = -abs * 200;
            const ry = offset * -25;
            const opacity = abs > 2 ? 0 : 1 - abs * 0.15;
            return (
              <article
                key={p.n}
                onClick={() => setActive(i)}
                style={{
                  position: "absolute",
                  left: -s.w / 2,
                  top: -s.h / 2,
                  width: s.w,
                  height: s.h,
                  borderRadius: 28,
                  overflow: "hidden",
                  transform: `translate3d(${tx}px, 0, ${tz}px) rotateY(${ry}deg)`,
                  transition:
                    "transform .7s cubic-bezier(.22,1,.36,1), opacity .7s",
                  cursor: i === active ? "default" : "pointer",
                  background: "#ece5dc",
                  opacity,
                  boxShadow:
                    i === active
                      ? "0 40px 80px rgba(10,10,10,0.35), 0 0 0 1px rgba(10,10,10,0.1)"
                      : "0 20px 40px rgba(10,10,10,0.2)",
                  pointerEvents: abs > 2 ? "none" : "auto",
                }}
              >
                {p.image && (
                  <div
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: s.panelInset,
                      overflow: "hidden",
                      background: "#ece5dc",
                    }}
                  >
                    <Image
                      src={p.image}
                      alt={`${p.name} preview`}
                      fill
                      sizes="(max-width: 640px) 280px, (max-width: 1024px) 360px, 440px"
                      style={{
                        objectFit: "cover",
                        objectPosition: "top",
                      }}
                      priority={i === active}
                    />
                  </div>
                )}

                {!p.image && (
                  <div
                    aria-hidden
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: s.panelInset,
                      overflow: "hidden",
                      backgroundImage:
                        "linear-gradient(rgba(10,10,10,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(10,10,10,0.08) 1px, transparent 1px)",
                      backgroundSize: "40px 40px",
                    }}
                  />
                )}
                {!p.image && (
                  <div
                    className="font-display italic"
                    aria-hidden
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
                )}

                <div
                  className="font-mono uppercase"
                  style={{
                    position: "absolute",
                    top: 20,
                    left: 20,
                    padding: "6px 12px",
                    borderRadius: 999,
                    background: "var(--paper)",
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
                    bottom: 14,
                    left: 14,
                    right: 14,
                    padding: s.w < 360 ? 16 : 20,
                    borderRadius: 18,
                    color: "var(--paper)",
                    background: "var(--ink)",
                    boxShadow: "0 10px 30px rgba(0,0,0,0.25)",
                  }}
                >
                  <h3
                    className="font-display italic uppercase m-0"
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: s.titleSize,
                      letterSpacing: "-0.03em",
                      marginBottom: 6,
                      lineHeight: 1,
                    }}
                  >
                    {p.name}
                  </h3>
                  <div className="flex items-end justify-between gap-3">
                    <p
                      className="italic m-0 flex-1"
                      style={{
                        fontFamily: "var(--font-serif)",
                        fontSize: s.subSize,
                        opacity: 0.95,
                      }}
                    >
                      {p.sub}
                    </p>
                    <Link
                      href={`/proyectos/${p.slug}`}
                      onClick={(e) => e.stopPropagation()}
                      className="inline-flex items-center gap-2 font-semibold shrink-0 transition-transform hover:scale-105"
                      style={{
                        padding: "10px 18px",
                        borderRadius: 999,
                        background: "var(--paper)",
                        color: "var(--ink)",
                        fontSize: 13,
                        letterSpacing: "-0.01em",
                      }}
                    >
                      Ver caso
                      <span>→</span>
                    </Link>
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
