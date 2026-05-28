"use client";

import { AnimatePresence, motion } from "motion/react";
import Link from "next/link";
import { useEffect, useState } from "react";
import Logo from "./Logo";

const links = [
  { href: "/#servicios", label: "Servicios" },
  { href: "/#proyectos", label: "Proyectos" },
  { href: "/nosotros", label: "Nosotros" },
  { href: "/#contacto", label: "Contacto" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <header
        className="sticky top-0 z-50 border-b"
        style={{
          background: "rgba(10,10,10,0.85)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          borderColor: "rgba(255,245,238,0.08)",
        }}
      >
        <div className="px-4 sm:px-6 py-3.5 flex items-center justify-between gap-3">
          <Link href="/" aria-label="HA — inicio" className="shrink-0">
            <Logo size="md" theme="onDark" />
          </Link>

          <nav
            className="hidden md:flex gap-1 rounded-full p-1"
            style={{ background: "rgba(255,245,238,0.08)" }}
          >
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-paper text-[13px] font-medium px-4 py-2 rounded-full hover:bg-paper/10 transition-colors"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <Link
              href="/contacto"
              className="hidden sm:inline-flex items-center gap-2 px-[18px] py-2.5 rounded-full text-ink text-[13px] font-semibold hover:scale-[1.03] transition-transform"
              style={{ background: "var(--orange)" }}
            >
              <span className="size-1.5 rounded-full bg-ink" />
              Hablemos
            </Link>

            <button
              type="button"
              onClick={() => setMenuOpen(true)}
              aria-label="Abrir menú"
              className="md:hidden inline-flex flex-col items-center justify-center gap-1.5 size-10 rounded-full transition-colors hover:bg-paper/10"
            >
              <span
                className="block"
                style={{
                  width: 20,
                  height: 2,
                  background: "var(--paper)",
                  borderRadius: 2,
                }}
              />
              <span
                className="block"
                style={{
                  width: 20,
                  height: 2,
                  background: "var(--paper)",
                  borderRadius: 2,
                }}
              />
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="fixed inset-0 z-[100] md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
              className="absolute inset-0 flex flex-col"
              style={{
                background: "var(--orange)",
                color: "var(--ink)",
              }}
            >
              <div className="flex items-center justify-between px-4 sm:px-6 py-3.5 border-b border-ink/15">
                <Link
                  href="/"
                  aria-label="HA — inicio"
                  onClick={() => setMenuOpen(false)}
                >
                  <Logo size="md" />
                </Link>
                <button
                  type="button"
                  onClick={() => setMenuOpen(false)}
                  aria-label="Cerrar menú"
                  className="size-10 rounded-full flex items-center justify-center transition-colors hover:bg-ink/10"
                  style={{ fontSize: 22, color: "var(--ink)" }}
                >
                  ✕
                </button>
              </div>

              <nav className="flex-1 flex flex-col justify-center gap-2 px-6 pb-12">
                {links.map((l, i) => (
                  <motion.a
                    key={l.href}
                    href={l.href}
                    onClick={() => setMenuOpen(false)}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      duration: 0.3,
                      delay: 0.05 + i * 0.05,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="font-display italic uppercase"
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "clamp(48px, 14vw, 88px)",
                      letterSpacing: "-0.04em",
                      lineHeight: 0.9,
                      color: "var(--ink)",
                    }}
                  >
                    {l.label}
                  </motion.a>
                ))}

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.25 }}
                  className="mt-8"
                >
                  <Link
                    href="/contacto"
                    onClick={() => setMenuOpen(false)}
                    className="inline-flex items-center gap-3 px-7 py-4 rounded-full text-paper font-semibold transition-transform hover:scale-[1.03]"
                    style={{
                      background: "var(--ink)",
                      fontSize: 16,
                    }}
                  >
                    <span className="size-1.5 rounded-full bg-acid" />
                    Hablemos
                    <span>→</span>
                  </Link>
                </motion.div>
              </nav>

              <div
                className="px-6 py-6 font-mono uppercase border-t border-ink/15"
                style={{
                  fontSize: 11,
                  letterSpacing: "0.2em",
                  opacity: 0.7,
                }}
              >
                HA · Montemorelos, NL
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
