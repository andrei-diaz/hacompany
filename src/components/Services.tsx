"use client";

import Reveal from "./Reveal";
import TiltCard from "./TiltCard";

const services = [
  {
    n: "01",
    t: "Páginas Web",
    kicker: "Marketing · Landing · Portafolio",
    d: "Sitios rápidos, optimizados y listos para convertir. Diseño + código + hosting.",
    items: ["Diseño responsive", "SEO técnico", "Hosting + dominio"],
    glow: "var(--acid)",
  },
  {
    n: "02",
    t: "Aplicaciones",
    kicker: "SaaS · Dashboards · Internas",
    d: "Plataformas a la medida con autenticación, base de datos y panel admin.",
    items: ["Dashboards", "APIs custom", "Áreas cliente"],
    glow: "var(--orange-light)",
  },
  {
    n: "03",
    t: "Mantenimiento",
    kicker: "Soporte · Iteración · Crecimiento",
    d: "Mejoras continuas, soporte técnico y nuevas funciones mes con mes.",
    items: ["Soporte 24h", "Nuevas features", "Monitoreo"],
    glow: "var(--acid)",
  },
];

export default function Services() {
  return (
    <section
      id="servicios"
      className="relative px-6 py-32"
      style={{ background: "var(--orange)", color: "var(--ink)" }}
    >
      <div className="max-w-[1280px] mx-auto">
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-8 mb-16">
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
                Lo que{" "}
                <span
                  className="italic"
                  style={{
                    fontFamily: "var(--font-serif)",
                    color: "var(--paper)",
                    WebkitTextStroke: "2px var(--ink)",
                  }}
                >
                  hacemos.
                </span>
              </h2>
            </div>
            <p className="max-w-sm text-[16px] leading-[1.5] opacity-85">
              Tres formas de trabajar juntos. Todas empiezan con una conversación
              honesta sobre tu proyecto.
            </p>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-5">
          {services.map((s, i) => (
            <Reveal key={s.n} delay={i * 0.08}>
              <TiltCard className="h-full">
                <article
                  className="relative p-8 rounded-[28px] flex flex-col overflow-hidden h-full"
                  style={{
                    background: "var(--ink)",
                    color: "var(--paper)",
                    minHeight: 460,
                    boxShadow: "0 24px 60px rgba(0,0,0,0.25)",
                  }}
                >
                  <div
                    aria-hidden
                    className="absolute pointer-events-none"
                    style={{
                      top: -50,
                      right: -50,
                      width: 200,
                      height: 200,
                      borderRadius: "50%",
                      background: s.glow,
                      opacity: 0.18,
                      filter: "blur(40px)",
                      transform: "translateZ(20px)",
                    }}
                  />
                  <div
                    className="flex justify-between items-start mb-7"
                    style={{ transform: "translateZ(40px)" }}
                  >
                    <span
                      className="font-mono"
                      style={{
                        fontSize: 11,
                        color: s.glow,
                        letterSpacing: "0.2em",
                      }}
                    >
                      {s.n} /
                    </span>
                    <span style={{ color: s.glow, fontSize: 18 }}>✦</span>
                  </div>
                  <div
                    className="font-mono uppercase mb-3"
                    style={{
                      fontSize: 11,
                      opacity: 0.55,
                      letterSpacing: "0.15em",
                    }}
                  >
                    {s.kicker}
                  </div>
                  <h3
                    className="font-display italic uppercase m-0 mb-4"
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "clamp(32px, 3.2vw, 44px)",
                      letterSpacing: "-0.04em",
                      transform: "translateZ(30px)",
                      wordBreak: "break-word",
                      hyphens: "auto",
                    }}
                  >
                    {s.t}
                  </h3>
                  <p
                    className="text-[14px] leading-[1.55] mb-7 flex-1"
                    style={{ opacity: 0.7 }}
                  >
                    {s.d}
                  </p>
                  <ul className="list-none p-0 m-0">
                    {s.items.map((it) => (
                      <li
                        key={it}
                        className="font-mono uppercase flex justify-between"
                        style={{
                          fontSize: 12,
                          padding: "12px 0",
                          borderTop: "1px solid rgba(255,245,238,0.12)",
                          letterSpacing: "0.12em",
                        }}
                      >
                        <span>{it}</span>
                        <span style={{ color: s.glow }}>+</span>
                      </li>
                    ))}
                  </ul>
                </article>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
