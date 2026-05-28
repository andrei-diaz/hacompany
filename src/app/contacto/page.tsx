import type { Metadata } from "next";
import Link from "next/link";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

const PrivacyNote = () => (
  <p
    className="text-[12px] leading-[1.55] mt-6 m-0"
    style={{
      color: "rgba(255,245,238,0.5)",
      letterSpacing: "-0.005em",
    }}
  >
    Tus datos sólo los usamos para responderte. No los compartimos ni los
    vendemos. Más en{" "}
    <Link
      href="/privacidad"
      className="underline underline-offset-2 hover:opacity-100 transition-opacity"
      style={{ color: "var(--paper)", opacity: 0.7 }}
    >
      privacidad
    </Link>
    .
  </p>
);

export const metadata: Metadata = {
  title: "Contacto",
  description:
    "Cuéntanos de tu proyecto. Te respondemos en menos de 24 horas con una propuesta inicial sin compromiso.",
};

const INSTAGRAM_HANDLE = "hacompany.com.mx";
const INSTAGRAM_URL = `https://instagram.com/${INSTAGRAM_HANDLE}`;

export default function ContactoPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <section
          className="px-4 sm:px-6 pt-12 sm:pt-16 pb-10 sm:pb-12"
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
                fontSize: "clamp(44px, 10vw, 144px)",
                letterSpacing: "-0.05em",
                lineHeight: 0.85,
              }}
            >
              Cuéntanos de
              <br />
              <span
                style={{
                  fontFamily: "var(--font-serif)",
                  color: "var(--orange)",
                }}
              >
                tu proyecto.
              </span>
            </h1>

            <p
              className="max-w-xl"
              style={{
                fontSize: 19,
                lineHeight: 1.5,
                opacity: 0.85,
              }}
            >
              Empieza eligiendo qué te interesa. Te haremos las preguntas justas
              según tu caso — sin formularios eternos.
            </p>
          </div>
        </section>

        <section
          className="relative px-4 sm:px-6 py-16 sm:py-20 overflow-hidden"
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
              filter: "blur(140px)",
              opacity: 0.35,
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
              filter: "blur(140px)",
              opacity: 0.2,
            }}
          />

          <div className="relative max-w-[1280px] mx-auto grid lg:grid-cols-[1.5fr_1fr] gap-12 items-start">
            <div>
              <ContactForm />
              <PrivacyNote />
            </div>

            <aside className="flex flex-col gap-8 lg:sticky lg:top-24">
              <div>
                <div
                  className="font-mono uppercase mb-4"
                  style={{
                    fontSize: 11,
                    color: "var(--orange)",
                    letterSpacing: "0.2em",
                  }}
                >
                  O por otro canal
                </div>
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center justify-between gap-4 px-6 py-5 rounded-2xl transition-transform hover:scale-[1.02]"
                  style={{
                    background: "var(--acid)",
                    color: "var(--ink)",
                  }}
                >
                  <div className="flex items-center gap-4">
                    <div
                      className="size-11 rounded-xl flex items-center justify-center shrink-0"
                      style={{
                        background: "var(--ink)",
                        color: "var(--acid)",
                      }}
                    >
                      <svg
                        viewBox="0 0 24 24"
                        className="size-5"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <rect x="3" y="3" width="18" height="18" rx="5" />
                        <circle cx="12" cy="12" r="4" />
                        <circle cx="17.5" cy="6.5" r="0.6" fill="currentColor" />
                      </svg>
                    </div>
                    <div>
                      <div className="font-bold text-[16px]">Instagram</div>
                      <div
                        className="font-mono text-[11px] uppercase tracking-widest"
                        style={{ opacity: 0.6 }}
                      >
                        @{INSTAGRAM_HANDLE}
                      </div>
                    </div>
                  </div>
                  <span className="text-xl group-hover:translate-x-1 transition-transform">
                    ↗
                  </span>
                </a>
              </div>

              <div
                className="rounded-2xl p-6"
                style={{
                  background: "rgba(255,245,238,0.04)",
                  border: "1px solid rgba(255,245,238,0.08)",
                }}
              >
                <div
                  className="font-mono uppercase mb-3"
                  style={{
                    fontSize: 11,
                    color: "var(--orange)",
                    letterSpacing: "0.2em",
                  }}
                >
                  Tiempo de respuesta
                </div>
                <p
                  className="m-0"
                  style={{
                    fontSize: 14,
                    lineHeight: 1.55,
                    opacity: 0.75,
                  }}
                >
                  Menos de 24 horas.
                </p>
              </div>
            </aside>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
