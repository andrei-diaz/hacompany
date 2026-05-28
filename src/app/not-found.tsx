import Link from "next/link";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function NotFound() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <section
          className="relative px-4 sm:px-6 py-24 sm:py-32 overflow-hidden"
          style={{ background: "var(--paper)", color: "var(--ink)" }}
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
              filter: "blur(140px)",
              opacity: 0.25,
            }}
          />

          <div className="relative max-w-[1280px] mx-auto">
            <div
              className="font-mono uppercase mb-6"
              style={{
                fontSize: 11,
                color: "var(--orange)",
                letterSpacing: "0.2em",
              }}
            >
              Error 404
            </div>

            <h1
              className="font-display italic uppercase m-0 mb-8"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(96px, 18vw, 280px)",
                letterSpacing: "-0.05em",
                lineHeight: 0.85,
              }}
            >
              No <br />
              <span
                style={{
                  fontFamily: "var(--font-serif)",
                  color: "var(--orange)",
                }}
              >
                existe.
              </span>
            </h1>

            <p
              className="max-w-xl mb-10"
              style={{
                fontSize: 19,
                lineHeight: 1.5,
                opacity: 0.85,
              }}
            >
              La página que buscas se perdió en el deploy, o nunca estuvo aquí.
              Vuelve al inicio y sigamos.
            </p>

            <div className="flex flex-wrap gap-3">
              <Link
                href="/"
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
                Volver al inicio
                <span>→</span>
              </Link>
              <Link
                href="/#proyectos"
                className="inline-flex items-center font-semibold transition-colors hover:bg-ink/5"
                style={{
                  padding: "16px 28px",
                  borderRadius: 999,
                  border: "1.5px solid var(--ink)",
                  color: "var(--ink)",
                  fontSize: 15,
                }}
              >
                Ver proyectos ↗
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
