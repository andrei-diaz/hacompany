import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "Nosotros",
  description:
    "Andrei Díaz y Hithan Crispin — dos desarrolladores de Montemorelos. Hablamos directo con cada cliente, sin capas de proyecto manager ni gerentes de cuenta.",
};

const team = [
  {
    initial: "H",
    name: "Hithan Crispin",
    role: "Backend · Arquitectura · DevOps",
    bio: "Diseño los sistemas que aguantan el peso — stack, infraestructura, y todo lo que pasa después del deploy.",
    bg: "var(--ink)",
    fg: "var(--paper)",
    initialBg: "var(--acid)",
    roleColor: "var(--acid)",
  },
  {
    initial: "A",
    name: "Andrei Díaz",
    role: "Frontend · Backend · Arquitectura",
    bio: "Construyo desde la pantalla hasta la base de datos — el código que ve el cliente y la lógica que lo sostiene.",
    bg: "var(--paper)",
    fg: "var(--ink)",
    initialBg: "var(--orange)",
    roleColor: "var(--orange)",
  },
];

export default function NosotrosPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <section
          className="px-4 sm:px-6 pt-12 sm:pt-16 pb-12 sm:pb-16"
          style={{ background: "var(--paper)", color: "var(--ink)" }}
        >
          <div className="max-w-[1280px] mx-auto">
            <Link
              href="/"
              className="font-mono uppercase inline-flex items-center gap-2 mb-12 hover:opacity-60 transition-opacity"
              style={{ fontSize: 11, letterSpacing: "0.2em" }}
            >
              <span>←</span> Volver al inicio
            </Link>

            <h1
              className="font-display italic uppercase m-0 mb-6"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(44px, 11vw, 168px)",
                letterSpacing: "-0.05em",
                lineHeight: 0.85,
              }}
            >
              <span style={{ color: "var(--acid)" }}>H</span>ithan
              <br />
              <span
                style={{
                  fontFamily: "var(--font-serif)",
                  textTransform: "lowercase",
                  fontSize: "0.7em",
                  display: "inline-block",
                  opacity: 0.7,
                }}
              >
                y
              </span>
              <br />
              <span style={{ fontFamily: "var(--font-serif)" }}>
                <span style={{ color: "var(--orange)" }}>A</span>ndrei
              </span>
            </h1>

            <p
              className="max-w-2xl"
              style={{
                fontSize: 19,
                lineHeight: 1.5,
                opacity: 0.85,
              }}
            >
              Dos desarrolladores de la Universidad de Montemorelos haciendo
              software a la medida. Hablas directo con los dos desde el primer
              email — no hay intermediarios traduciendo lo que pediste.
            </p>
          </div>
        </section>

        <section
          className="relative px-4 sm:px-6 py-20 sm:py-32 overflow-hidden"
          style={{ background: "var(--orange)", color: "var(--ink)" }}
        >
          <div className="max-w-[1280px] mx-auto">
            <div
              className="font-mono uppercase mb-8"
              style={{ fontSize: 11, letterSpacing: "0.2em" }}
            >
              El equipo
            </div>

            <div className="grid md:grid-cols-2 gap-5">
              {team.map((m) => (
                <article
                  key={m.name}
                  className="rounded-[28px] flex flex-col gap-5"
                  style={{
                    padding: 36,
                    background: m.bg,
                    color: m.fg,
                    boxShadow: "0 24px 60px rgba(0,0,0,0.2)",
                  }}
                >
                  <div className="flex gap-5 items-start">
                    <div
                      className="font-display shrink-0 flex items-center justify-center"
                      style={{
                        width: 88,
                        height: 88,
                        borderRadius: "50%",
                        background: m.initialBg,
                        color: "var(--ink)",
                        fontFamily: "var(--font-display)",
                        fontSize: 56,
                        lineHeight: 1,
                      }}
                    >
                      {m.initial}
                    </div>
                    <div>
                      <h2
                        className="font-display italic uppercase m-0"
                        style={{
                          fontFamily: "var(--font-display)",
                          fontSize: "clamp(28px, 3.2vw, 36px)",
                          letterSpacing: "-0.02em",
                          lineHeight: 1,
                        }}
                      >
                        {m.name}
                      </h2>
                      <div
                        className="font-mono uppercase mt-2"
                        style={{
                          fontSize: 11,
                          color: m.roleColor,
                          letterSpacing: "0.18em",
                        }}
                      >
                        {m.role}
                      </div>
                    </div>
                  </div>
                  <p
                    className="text-[15px] leading-[1.55] m-0"
                    style={{ opacity: 0.8 }}
                  >
                    {m.bio}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section
          className="px-4 sm:px-6 py-20 sm:py-32"
          style={{ background: "var(--paper)", color: "var(--ink)" }}
        >
          <div className="max-w-[1280px] mx-auto grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <div
                className="font-mono uppercase mb-4"
                style={{
                  fontSize: 11,
                  color: "var(--orange)",
                  letterSpacing: "0.2em",
                }}
              >
                Cómo lo dividimos
              </div>
              <h2
                className="font-display italic uppercase m-0 mb-6"
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(40px, 5vw, 72px)",
                  letterSpacing: "-0.04em",
                  lineHeight: 0.9,
                }}
              >
                Sin{" "}
                <span
                  style={{
                    fontFamily: "var(--font-serif)",
                    color: "var(--orange)",
                  }}
                >
                  roles fijos.
                </span>
              </h2>
              <p
                className="text-[17px] leading-[1.55] max-w-md"
                style={{ opacity: 0.85 }}
              >
                Nos repartimos las cosas según lo que necesita cada proyecto.
                Las decisiones técnicas se hablan, no se imponen.
              </p>
            </div>

            <div>
              <div
                className="font-mono uppercase mb-4"
                style={{
                  fontSize: 11,
                  color: "var(--orange)",
                  letterSpacing: "0.2em",
                }}
              >
                Para quién es HA
              </div>
              <h2
                className="font-display italic uppercase m-0 mb-6"
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(40px, 5vw, 72px)",
                  letterSpacing: "-0.04em",
                  lineHeight: 0.9,
                }}
              >
                Para quienes
                <br />
                <span
                  style={{
                    fontFamily: "var(--font-serif)",
                    color: "var(--orange)",
                  }}
                >
                  quieren más.
                </span>
              </h2>
              <p
                className="text-[17px] leading-[1.55] max-w-md mb-8"
                style={{ opacity: 0.85 }}
              >
                Negocios que quieren automatizar procesos, modernizar lo que ya
                tienen, o construir algo que todavía no existe. Diseño actual +
                ingeniería seria — sin filtros corporativos en medio.
              </p>

              <Link
                href="/contacto"
                className="inline-flex items-center gap-3 font-semibold transition-transform hover:scale-[1.03]"
                style={{
                  padding: "16px 28px",
                  borderRadius: 999,
                  background: "var(--ink)",
                  color: "var(--paper)",
                  fontSize: 15,
                }}
              >
                <span className="size-1.5 rounded-full bg-acid" />
                Hablemos
                <span>→</span>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
