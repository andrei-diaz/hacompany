"use client";

import Reveal from "./Reveal";

export default function Contact() {
  return (
    <section
      id="contacto"
      className="relative py-32 md:py-48 overflow-hidden bg-orange text-background"
    >
      <div className="absolute inset-0 grid-bg opacity-20" />
      <div
        aria-hidden
        className="absolute -top-40 -left-40 size-[600px] rounded-full bg-red/40 blur-3xl"
      />
      <div
        aria-hidden
        className="absolute -bottom-40 -right-40 size-[600px] rounded-full bg-yellow/30 blur-3xl"
      />

      <div className="relative max-w-7xl mx-auto px-6">
        <Reveal>
          <p className="text-sm font-mono uppercase tracking-widest mb-4 opacity-70">
            / Contacto
          </p>
          <h2 className="text-6xl md:text-[12rem] font-black tracking-tighter uppercase italic leading-[0.85] mb-10">
            ¿Tienes
            <br />
            una idea?
          </h2>
        </Reveal>

        <Reveal delay={0.15}>
          <p className="text-xl md:text-2xl leading-relaxed max-w-2xl mb-12 opacity-90">
            Cuéntanos de tu proyecto. Te respondemos en menos de 24 horas con
            una propuesta inicial sin compromiso.
          </p>
        </Reveal>

        <Reveal delay={0.25}>
          <div className="flex flex-wrap gap-3">
            <a
              href="mailto:hola@hacompany.com"
              className="group px-8 py-5 rounded-full bg-background text-foreground font-black text-lg uppercase italic tracking-tight hover:bg-foreground hover:text-background transition-colors inline-flex items-center gap-3"
            >
              hola@hacompany.com
              <span className="group-hover:translate-x-1 transition-transform">
                →
              </span>
            </a>
            <a
              href="#"
              className="px-8 py-5 rounded-full border-2 border-background text-background font-black text-lg uppercase italic tracking-tight hover:bg-background hover:text-orange transition-colors"
            >
              WhatsApp
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
