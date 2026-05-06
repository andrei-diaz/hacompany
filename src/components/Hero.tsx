"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

function PlusMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="square"
    >
      <path d="M12 4v16M4 12h16" />
    </svg>
  );
}

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.95]);

  return (
    <section
      id="top"
      ref={ref}
      className="relative min-h-screen overflow-hidden flex items-center pt-24 pb-16"
    >
      <div className="absolute inset-0 grid-bg -z-20" />
      <div
        aria-hidden
        className="absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(900px circle at 80% 20%, rgba(255,91,31,0.30), transparent 55%), radial-gradient(700px circle at 10% 90%, rgba(239,41,23,0.25), transparent 55%)",
        }}
      />
      <div
        aria-hidden
        className="absolute -top-32 -right-32 size-[500px] rounded-full bg-orange/20 blur-3xl -z-10"
      />

      <motion.div
        style={{ y, opacity, scale }}
        className="max-w-7xl mx-auto px-6 w-full"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest border border-orange/40 text-orange rounded-full px-4 py-1.5 mb-10"
        >
          <span className="size-1.5 rounded-full bg-orange animate-pulse" />
          Estudio digital · 2026
        </motion.div>

        <div className="relative">
          <PlusMark className="absolute -top-6 -left-6 size-6 text-orange hidden md:block" />
          <PlusMark className="absolute -bottom-6 -right-6 size-6 text-red hidden md:block" />

          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-[clamp(3rem,11vw,11rem)] font-black tracking-[-0.04em] leading-[0.85] uppercase italic"
          >
            <motion.span
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="block"
            >
              Diseño <span className="text-orange">+</span>
            </motion.span>
            <motion.span
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
              className="block"
            >
              Código <span className="text-red">=</span>
            </motion.span>
            <motion.span
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="block bg-gradient-to-r from-orange via-red to-orange bg-clip-text text-transparent"
            >
              Productos.
            </motion.span>
          </motion.h1>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="mt-10 grid md:grid-cols-2 gap-8 items-end"
        >
          <p className="text-lg md:text-xl text-muted leading-relaxed max-w-xl">
            Somos un estudio independiente. Construimos páginas web y
            aplicaciones que la gente <span className="text-foreground font-semibold">realmente</span>{" "}
            quiere usar.
          </p>
          <div className="flex flex-wrap gap-3 md:justify-end">
            <a
              href="#contacto"
              className="group relative px-7 py-4 rounded-full bg-orange text-background font-bold overflow-hidden"
            >
              <span className="relative z-10">Empezar proyecto →</span>
              <span className="absolute inset-0 bg-red translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            </a>
            <a
              href="#proyectos"
              className="px-7 py-4 rounded-full border-2 border-foreground/20 hover:border-foreground hover:bg-foreground hover:text-background font-bold transition-all"
            >
              Ver trabajo
            </a>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
