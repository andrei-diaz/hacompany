import Link from "next/link";
import Reveal from "./Reveal";

export default function Contact() {
  return (
    <section
      id="contacto"
      className="relative px-4 sm:px-6 py-20 sm:py-32 overflow-hidden"
      style={{ background: "var(--ink)", color: "var(--paper)" }}
    >
      <div
        aria-hidden
        className="absolute pointer-events-none"
        style={{
          top: -200,
          right: -200,
          width: 600,
          height: 600,
          borderRadius: "50%",
          background: "var(--orange)",
          filter: "blur(120px)",
          opacity: 0.5,
        }}
      />
      <div
        aria-hidden
        className="absolute pointer-events-none"
        style={{
          bottom: -200,
          left: -200,
          width: 500,
          height: 500,
          borderRadius: "50%",
          background: "var(--acid)",
          filter: "blur(120px)",
          opacity: 0.3,
        }}
      />

      <div className="relative max-w-[1280px] mx-auto">
        <Reveal>
          <h2
            className="font-display italic uppercase m-0 mb-8"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(44px, 14vw, 240px)",
              letterSpacing: "-0.05em",
              lineHeight: 0.82,
            }}
          >
            ¿Tienes <br />
            <span
              className="italic"
              style={{ fontFamily: "var(--font-serif)", color: "var(--orange)" }}
            >
              una idea?
            </span>
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <p
            className="text-[19px] leading-[1.5] max-w-xl mb-14"
            style={{ opacity: 0.85 }}
          >
            Idea nueva, algo existente, o sólo una pregunta. Hablas directo
            con quienes van a construirlo — sin intermediarios.
          </p>
        </Reveal>

        <Reveal delay={0.15}>
          <div
            className="font-mono uppercase mb-6"
            style={{
              fontSize: 11,
              color: "var(--orange)",
              letterSpacing: "0.2em",
            }}
          >
            Cómo trabajamos
          </div>
          <div className="grid md:grid-cols-4 gap-px mb-14" style={{ background: "rgba(255,245,238,0.12)" }}>
            {[
              {
                n: "01",
                t: "Contactas",
                d: "Nos escribes por correo o Instagram con la idea que tienes en mente.",
              },
              {
                n: "02",
                t: "Conversamos",
                d: "Una llamada corta para entender alcance, plazos y objetivos reales.",
              },
              {
                n: "03",
                t: "Propuesta",
                d: "Te enviamos plan de desarrollo y cotización por hitos. Sin compromiso.",
              },
              {
                n: "04",
                t: "Construimos",
                d: "Trabajamos en sprints, con pagos por hito entregado y aprobado.",
              },
            ].map((step) => (
              <div
                key={step.n}
                className="p-6"
                style={{ background: "var(--ink)" }}
              >
                <div
                  className="font-mono mb-4"
                  style={{
                    fontSize: 11,
                    color: "var(--orange)",
                    letterSpacing: "0.2em",
                  }}
                >
                  {step.n} /
                </div>
                <h3
                  className="font-display italic uppercase m-0 mb-3"
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: 26,
                    letterSpacing: "-0.02em",
                    lineHeight: 1,
                  }}
                >
                  {step.t}
                </h3>
                <p
                  className="text-[13px] leading-[1.55] m-0"
                  style={{ opacity: 0.7 }}
                >
                  {step.d}
                </p>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.2}>
          <Link
            href="/contacto"
            className="inline-flex items-center gap-3 font-semibold transition-transform hover:scale-[1.03]"
            style={{
              padding: "20px 32px",
              borderRadius: 999,
              background: "var(--orange)",
              color: "var(--ink)",
              fontSize: 16,
              boxShadow: "0 12px 40px rgba(255,77,28,0.4)",
            }}
          >
            <span className="size-1.5 rounded-full bg-ink" />
            Hablemos →
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
