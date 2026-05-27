"use client";

import { AnimatePresence, motion } from "motion/react";
import { useEffect } from "react";

// const PHONE = "5215555555555"; // ← reemplaza con tu WhatsApp (sin +, con código país)
const EMAIL = "info@hacompany.com.mx"; // ← reemplaza con tu email
const INSTAGRAM_HANDLE = "hacompany";
const INSTAGRAM_URL = `https://instagram.com/${INSTAGRAM_HANDLE}`;
// const WHATSAPP_MSG =
//   "Hola HA, vi su sitio y me gustaría platicar sobre un proyecto.";
const EMAIL_SUBJECT = "Proyecto nuevo · HA";
const EMAIL_BODY =
  "Hola HA,\n\nMe gustaría platicar sobre un proyecto:\n\n— Qué necesito:\n— Plazo aproximado:\n— Presupuesto estimado:\n\nGracias.";

type Props = {
  open: boolean;
  onClose: () => void;
};

export default function ContactModal({ open, onClose }: Props) {
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  // const wa = `https://wa.me/${PHONE}?text=${encodeURIComponent(WHATSAPP_MSG)}`;
  const mail = `mailto:${EMAIL}?subject=${encodeURIComponent(
    EMAIL_SUBJECT
  )}&body=${encodeURIComponent(EMAIL_BODY)}`;

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          <motion.div
            className="absolute inset-0"
            style={{ background: "rgba(10,10,10,0.6)", backdropFilter: "blur(8px)" }}
            onClick={onClose}
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 10 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="relative w-full max-w-lg rounded-[28px] overflow-hidden"
            style={{
              background: "var(--ink)",
              color: "var(--paper)",
              boxShadow: "0 40px 80px rgba(0,0,0,0.5)",
              border: "1px solid rgba(255,245,238,0.08)",
            }}
          >
            <div
              aria-hidden
              className="absolute pointer-events-none"
              style={{
                top: -120,
                right: -120,
                width: 320,
                height: 320,
                borderRadius: "50%",
                background: "var(--orange)",
                filter: "blur(80px)",
                opacity: 0.5,
              }}
            />

            <button
              onClick={onClose}
              aria-label="Cerrar"
              className="absolute top-5 right-5 z-10 size-9 rounded-full flex items-center justify-center transition-colors hover:bg-paper/20"
              style={{
                background: "rgba(255,245,238,0.08)",
                color: "var(--paper)",
              }}
            >
              ✕
            </button>

            <div className="relative p-8 md:p-10">
              <h3
                className="font-display italic uppercase m-0 mb-3"
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(36px, 5vw, 56px)",
                  letterSpacing: "-0.03em",
                  lineHeight: 0.9,
                }}
              >
                ¿Cómo prefieres
                <br />
                <span style={{ color: "var(--orange)" }}>hablar?</span>
              </h3>
              <p
                className="text-[15px] leading-[1.55] mb-8"
                style={{ opacity: 0.65, maxWidth: 380 }}
              >
                Escoge tu canal favorito. Te respondemos en menos de 24 horas.
              </p>

              <div className="flex flex-col gap-3">
                {/* WhatsApp deshabilitado por ahora — solo correo.
                <a
                  href={wa}
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
                      style={{ background: "var(--ink)", color: "var(--acid)" }}
                    >
                      <svg viewBox="0 0 24 24" className="size-5" fill="currentColor">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                      </svg>
                    </div>
                    <div>
                      <div className="font-bold text-[16px]">WhatsApp</div>
                      <div className="font-mono text-[11px] uppercase tracking-widest opacity-60">
                        Respuesta más rápida
                      </div>
                    </div>
                  </div>
                  <span className="text-xl group-hover:translate-x-1 transition-transform">
                    →
                  </span>
                </a>
                */}

                <a
                  href={mail}
                  className="group flex items-center justify-between gap-4 px-6 py-5 rounded-2xl transition-transform hover:scale-[1.02]"
                  style={{
                    background: "var(--orange)",
                    color: "var(--ink)",
                  }}
                >
                  <div className="flex items-center gap-4">
                    <div
                      className="size-11 rounded-xl flex items-center justify-center shrink-0"
                      style={{ background: "var(--ink)", color: "var(--orange)" }}
                    >
                      <svg
                        viewBox="0 0 24 24"
                        className="size-5"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <rect x="3" y="5" width="18" height="14" rx="2" />
                        <path d="m3 7 9 6 9-6" />
                      </svg>
                    </div>
                    <div>
                      <div className="font-bold text-[16px]">Email</div>
                      <div
                        className="font-mono text-[11px] uppercase tracking-widest"
                        style={{ opacity: 0.6 }}
                      >
                        {EMAIL}
                      </div>
                    </div>
                  </div>
                  <span className="text-xl group-hover:translate-x-1 transition-transform">
                    →
                  </span>
                </a>

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
                      style={{ background: "var(--ink)", color: "var(--acid)" }}
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
                    →
                  </span>
                </a>
              </div>

              <p
                className="text-center font-mono uppercase mt-7"
                style={{
                  fontSize: 10,
                  letterSpacing: "0.2em",
                  opacity: 0.4,
                }}
              >
                ESC para cerrar
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
