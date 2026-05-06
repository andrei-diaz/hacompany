"use client";

import Reveal from "./Reveal";

const team = [
  {
    initial: "H",
    name: "Nombre 1",
    role: "Desarrollo & arquitectura",
    bio: "Reemplaza con tu bio: especialidad, años de experiencia, lo que más disfrutas construir.",
    bg: "bg-orange",
  },
  {
    initial: "A",
    name: "Nombre 2",
    role: "Diseño & frontend",
    bio: "Bio del socio: especialidad, herramientas favoritas, enfoque al trabajar.",
    bg: "bg-red",
  },
];

const stats = [
  { value: "2+", label: "Proyectos" },
  { value: "100%", label: "Custom" },
  { value: "0", label: "Intermediarios" },
  { value: "24h", label: "Respuesta" },
];

export default function About() {
  return (
    <section id="nosotros" className="relative py-32 md:py-48 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-12 mb-24">
          <Reveal className="lg:col-span-7">
            <p className="text-sm font-mono uppercase tracking-widest text-orange mb-4">
              / Nosotros
            </p>
            <h2 className="text-5xl md:text-8xl font-black tracking-tighter uppercase italic leading-[0.9] mb-8">
              Dos personas.
              <br />
              <span className="text-orange">Un equipo.</span>
            </h2>
            <p className="text-muted text-xl leading-relaxed max-w-xl">
              Sin gerentes intermedios. Sin procesos pesados. Hablas directo con
              quien está construyendo tu producto — desde el primer email hasta
              el deploy.
            </p>
          </Reveal>

          <div className="lg:col-span-5 grid grid-cols-2 gap-4">
            {stats.map((s, i) => (
              <Reveal key={s.label} delay={i * 0.08}>
                <div className="bg-card border border-border rounded-2xl p-6 h-full">
                  <div className="text-4xl md:text-5xl font-black italic text-orange mb-2">
                    {s.value}
                  </div>
                  <div className="text-sm font-mono uppercase tracking-widest text-muted">
                    {s.label}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {team.map((m, i) => (
            <Reveal key={m.name} delay={i * 0.1}>
              <div className="group bg-card border border-border rounded-3xl p-8 md:p-10 h-full hover:border-orange/40 transition-colors">
                <div className="flex items-start gap-6 mb-6">
                  <div
                    className={`size-20 rounded-2xl ${m.bg} text-background flex items-center justify-center font-black text-4xl italic shrink-0 group-hover:rotate-6 transition-transform`}
                  >
                    {m.initial}
                  </div>
                  <div>
                    <h3 className="text-2xl font-black uppercase italic tracking-tight">
                      {m.name}
                    </h3>
                    <p className="text-orange font-mono text-sm uppercase tracking-widest">
                      {m.role}
                    </p>
                  </div>
                </div>
                <p className="text-muted leading-relaxed">{m.bio}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
