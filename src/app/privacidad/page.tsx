import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "Privacidad",
  description:
    "Cómo manejamos tus datos en HA. Sin letra chica, sin trampas.",
};

const sections = [
  {
    title: "Qué recolectamos",
    body: "Cuando llenas el formulario de contacto recolectamos tu nombre, email, y la información que elijas sobre tu proyecto o consulta. Nada más. No usamos analytics de terceros, no rastreamos tu navegación.",
  },
  {
    title: "Para qué los usamos",
    body: "Únicamente para responderte. Tu email se usa para contactarte de vuelta sobre tu consulta. Los demás datos nos ayudan a entender qué necesitas antes de la primera respuesta.",
  },
  {
    title: "Quién más los ve",
    body: "Tu mensaje se entrega vía Resend (resend.com), nuestro proveedor de email transaccional. No compartimos tus datos con nadie más, ni los vendemos, ni los usamos para marketing.",
  },
  {
    title: "Cuánto los guardamos",
    body: "Mientras la conversación esté activa. Si decides no continuar con un proyecto, eliminamos tus datos a petición. Para borrar tu información, escríbenos al mismo email.",
  },
  {
    title: "Tus derechos",
    body: "Puedes pedirnos acceso, corrección o eliminación de tus datos en cualquier momento. Sólo escríbenos.",
  },
  {
    title: "Contacto",
    body: "Andrei Díaz y Hithan Crispin — HA. Montemorelos, Nuevo León, México. Para cualquier duda sobre privacidad, escríbenos al mismo email del formulario.",
  },
];

export default function PrivacidadPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <section
          className="px-4 sm:px-6 pt-12 sm:pt-16 pb-12"
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
                fontSize: "clamp(42px, 9vw, 128px)",
                letterSpacing: "-0.05em",
                lineHeight: 0.85,
              }}
            >
              Privacidad
              <br />
              <span
                style={{
                  fontFamily: "var(--font-serif)",
                  color: "var(--orange)",
                }}
              >
                sin trampas.
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
              Resumen corto: sólo recolectamos lo que nos das en el formulario,
              lo usamos sólo para responderte, no lo compartimos con nadie. Sin
              letra chica.
            </p>
          </div>
        </section>

        <section
          className="px-4 sm:px-6 py-16 sm:py-24"
          style={{ background: "var(--paper)", color: "var(--ink)" }}
        >
          <div className="max-w-[920px] mx-auto flex flex-col gap-12">
            {sections.map((s, i) => (
              <div key={s.title}>
                <div
                  className="font-mono uppercase mb-3"
                  style={{
                    fontSize: 11,
                    color: "var(--orange)",
                    letterSpacing: "0.2em",
                  }}
                >
                  {String(i + 1).padStart(2, "0")} /
                </div>
                <h2
                  className="font-display italic uppercase m-0 mb-4"
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "clamp(28px, 4vw, 44px)",
                    letterSpacing: "-0.03em",
                    lineHeight: 0.95,
                  }}
                >
                  {s.title}
                </h2>
                <p
                  className="m-0"
                  style={{
                    fontSize: 17,
                    lineHeight: 1.6,
                    opacity: 0.85,
                  }}
                >
                  {s.body}
                </p>
              </div>
            ))}

            <p
              className="font-mono uppercase pt-8 border-t border-ink/10"
              style={{
                fontSize: 11,
                letterSpacing: "0.18em",
                opacity: 0.5,
              }}
            >
              Última actualización: 2026-05-28
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
