"use client";

import { useEffect, useState } from "react";
import Reveal from "./Reveal";
import Sphere3D from "./Sphere3D";

export default function Hero() {
  const [sphereSize, setSphereSize] = useState(480);

  useEffect(() => {
    const compute = () => {
      const w = window.innerWidth;
      if (w < 640) setSphereSize(Math.min(340, w - 64));
      else if (w < 1024) setSphereSize(420);
      else if (w < 1280) setSphereSize(460);
      else setSphereSize(500);
    };
    compute();
    window.addEventListener("resize", compute);
    return () => window.removeEventListener("resize", compute);
  }, []);

  return (
    <section
      id="top"
      className="relative px-6 pt-10 pb-24 overflow-hidden"
    >
      <div aria-hidden className="absolute inset-0 grid-bg pointer-events-none" />

      <div className="relative max-w-[1280px] mx-auto">
        <div
          className="flex flex-wrap items-center justify-between gap-4 mb-10 font-mono uppercase text-ink"
          style={{ fontSize: 11, letterSpacing: "0.18em" }}
        >
          <span>HA · Montemorelos, NL</span>
          <span className="inline-flex items-center gap-2">
            <span
              className="size-1.5 rounded-full bg-ink"
              style={{ animation: "hh-pulse 1.5s infinite" }}
            />
            Tomando proyectos · Q3 2026
          </span>
          <span>arrastra el planeta ↻</span>
        </div>

        <div className="grid lg:grid-cols-[1.1fr_1fr] gap-10 items-center min-h-[600px]">
          <Reveal>
            <h1
              className="font-display italic uppercase text-ink m-0"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(56px, 8.5vw, 140px)",
                lineHeight: 0.82,
                letterSpacing: "-0.05em",
              }}
            >
              <span className="block">Hacemos</span>
              <span className="block relative">software</span>
              <span
                className="block italic"
                style={{
                  fontFamily: "var(--font-serif)",
                  color: "var(--paper)",
                  WebkitTextStroke: "2px var(--ink)",
                }}
              >
                que importa.
              </span>
            </h1>

            <p className="text-ink/85 mt-8 max-w-md text-[18px] leading-[1.55]">
              Estudio independiente de dos personas. Hablas directo con quien
              escribe el código y dibuja la pantalla — del primer email al
              deploy.
            </p>

            <div className="flex flex-wrap gap-3 mt-8">
              <a
                href="#contacto"
                className="inline-flex items-center gap-2.5 px-7 py-[18px] rounded-full bg-ink text-paper font-semibold text-[15px]"
                style={{ boxShadow: "0 12px 32px rgba(10,10,10,0.25)" }}
              >
                Empezar proyecto
                <span className="size-2 rounded-full bg-acid" />
              </a>
              <a
                href="#proyectos"
                className="inline-flex items-center px-7 py-[18px] rounded-full text-ink font-semibold text-[15px] border-[1.5px] border-ink"
              >
                Ver trabajo ↗
              </a>
            </div>
          </Reveal>

          <Reveal
            delay={0.15}
            className="flex justify-center items-center overflow-hidden"
          >
            <Sphere3D size={sphereSize} />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
