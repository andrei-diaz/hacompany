"use client";

import Reveal from "./Reveal";

const services = [
  {
    num: "01",
    title: "Páginas Web",
    description:
      "Sitios corporativos, landings y portafolios. Rápidos, optimizados y listos para convertir visitantes en clientes.",
    items: ["Diseño responsive", "SEO optimizado", "Hosting + dominio"],
    color: "bg-orange",
    text: "text-background",
  },
  {
    num: "02",
    title: "Aplicaciones",
    description:
      "Plataformas web a la medida con autenticación, base de datos, panel admin e integraciones con APIs externas.",
    items: ["Dashboards", "Áreas de cliente", "APIs custom"],
    color: "bg-red",
    text: "text-foreground",
  },
  {
    num: "03",
    title: "Mantenimiento",
    description:
      "Mejoras continuas, soporte técnico y nuevas funciones para que tu producto siga evolucionando con tu negocio.",
    items: ["Soporte 24/7", "Nuevas features", "Monitoreo"],
    color: "bg-foreground",
    text: "text-background",
  },
];

export default function Services() {
  return (
    <section id="servicios" className="relative py-32 md:py-48 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-6 mb-20">
            <div>
              <p className="text-sm font-mono uppercase tracking-widest text-orange mb-4">
                / Servicios
              </p>
              <h2 className="text-5xl md:text-8xl font-black tracking-tighter uppercase italic leading-[0.9]">
                Lo que
                <br />
                <span className="text-orange">hacemos.</span>
              </h2>
            </div>
            <p className="text-muted max-w-md text-lg">
              Tres formas de trabajar juntos. Todas empiezan con una conversación
              honesta sobre tu proyecto.
            </p>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <Reveal key={s.num} direction="up" delay={i * 0.1}>
              <article
                className={`group relative ${s.color} ${s.text} rounded-3xl p-8 md:p-10 h-full overflow-hidden cursor-pointer hover:scale-[1.02] transition-transform duration-300`}
              >
                <div className="absolute top-6 right-6 text-7xl md:text-8xl font-black opacity-15 italic">
                  {s.num}
                </div>
                <div className="relative z-10 flex flex-col h-full min-h-[420px]">
                  <h3 className="text-3xl md:text-4xl font-black uppercase italic tracking-tight mb-6">
                    {s.title}
                  </h3>
                  <p className="text-base md:text-lg leading-relaxed mb-8 opacity-90">
                    {s.description}
                  </p>
                  <ul className="mt-auto space-y-2">
                    {s.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-center gap-3 font-medium border-t border-current/20 py-3"
                      >
                        <span className="font-mono text-xs opacity-60">→</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
