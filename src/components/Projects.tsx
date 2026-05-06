"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import Reveal from "./Reveal";

const projects = [
  {
    num: "01",
    name: "Proyecto Uno",
    summary:
      "Reemplaza con el problema que resolvieron y el resultado en una frase.",
    stack: ["Next.js", "Tailwind", "Supabase"],
    color: "from-orange to-red",
  },
  {
    num: "02",
    name: "Proyecto Dos",
    summary:
      "Reemplaza con el problema que resolvieron y el resultado en una frase.",
    stack: ["React", "Node.js", "PostgreSQL"],
    color: "from-red to-orange",
  },
  {
    num: "03",
    name: "Proyecto Tres",
    summary:
      "Reemplaza con el problema que resolvieron y el resultado en una frase.",
    stack: ["Next.js", "TypeScript"],
    color: "from-yellow to-orange",
  },
];

function StickyCard({
  project,
  index,
  total,
}: {
  project: (typeof projects)[number];
  index: number;
  total: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const scale = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [0.95, 1, 1 - (total - index - 1) * 0.04]
  );
  const rotate = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [index % 2 === 0 ? -2 : 2, 0, 0]
  );

  return (
    <div
      ref={ref}
      className="sticky top-24 md:top-28"
      style={{ zIndex: index + 1 }}
    >
      <motion.article
        style={{ scale, rotate }}
        className="bg-card border border-border rounded-3xl overflow-hidden mb-8 shadow-2xl shadow-black/40"
      >
        <div className="grid md:grid-cols-2 gap-0 min-h-[480px]">
          <div
            className={`relative bg-gradient-to-br ${project.color} flex items-center justify-center p-12 overflow-hidden`}
          >
            <div className="absolute inset-0 grid-bg opacity-30" />
            <div className="relative text-[clamp(6rem,18vw,18rem)] font-black italic text-background/20 leading-none">
              {project.num}
            </div>
            <div className="absolute top-6 left-6 px-3 py-1 rounded-full bg-background/20 backdrop-blur-md text-xs font-mono uppercase tracking-widest text-background">
              Caso {project.num}
            </div>
          </div>
          <div className="p-10 md:p-14 flex flex-col justify-between">
            <div>
              <h3 className="text-4xl md:text-5xl font-black uppercase italic tracking-tighter mb-4">
                {project.name}
              </h3>
              <p className="text-muted text-lg leading-relaxed mb-8">
                {project.summary}
              </p>
            </div>
            <div>
              <div className="flex flex-wrap gap-2 mb-6">
                {project.stack.map((t) => (
                  <span
                    key={t}
                    className="text-xs font-mono uppercase tracking-widest px-3 py-1.5 rounded-full border border-border text-muted"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <a
                href="#"
                className="inline-flex items-center gap-2 font-bold text-orange hover:gap-4 transition-all"
              >
                Ver caso completo
                <span>→</span>
              </a>
            </div>
          </div>
        </div>
      </motion.article>
    </div>
  );
}

export default function Projects() {
  return (
    <section id="proyectos" className="relative py-32 md:py-48">
      <div className="max-w-7xl mx-auto px-6">
        <Reveal>
          <div className="mb-20 max-w-3xl">
            <p className="text-sm font-mono uppercase tracking-widest text-orange mb-4">
              / Proyectos
            </p>
            <h2 className="text-5xl md:text-8xl font-black tracking-tighter uppercase italic leading-[0.9]">
              Trabajo
              <br />
              <span className="text-red">seleccionado.</span>
            </h2>
          </div>
        </Reveal>

        <div className="relative">
          {projects.map((p, i) => (
            <StickyCard
              key={p.num}
              project={p}
              index={i}
              total={projects.length}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
