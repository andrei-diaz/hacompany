"use client";

import { type ReactNode } from "react";
import Logo from "./Logo";

function SocialIcon({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: ReactNode;
}) {
  const isExternal = href.startsWith("http");
  return (
    <a
      href={href}
      aria-label={label}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noreferrer" : undefined}
      className="size-10 rounded-full flex items-center justify-center transition-all hover:scale-110"
      style={{
        background: "rgba(255,245,238,0.06)",
        color: "rgba(255,245,238,0.7)",
        border: "1px solid rgba(255,245,238,0.08)",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.background = "var(--orange)";
        e.currentTarget.style.color = "var(--ink)";
        e.currentTarget.style.borderColor = "var(--orange)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.background = "rgba(255,245,238,0.06)";
        e.currentTarget.style.color = "rgba(255,245,238,0.7)";
        e.currentTarget.style.borderColor = "rgba(255,245,238,0.08)";
      }}
    >
      {children}
    </a>
  );
}

const navLinks = [
  { label: "Servicios", href: "#servicios" },
  { label: "Proyectos", href: "#proyectos" },
  { label: "Contacto", href: "#contacto" },
];

const services = [
  { label: "Páginas web", href: "#servicios" },
  { label: "Aplicaciones", href: "#servicios" },
  { label: "Mantenimiento", href: "#servicios" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
        className="relative overflow-hidden"
        style={{ background: "var(--ink)", color: "var(--paper)" }}
      >
        <div
          aria-hidden
          className="absolute pointer-events-none"
          style={{
            top: -200,
            left: -150,
            width: 500,
            height: 500,
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
            bottom: -150,
            right: -150,
            width: 400,
            height: 400,
            borderRadius: "50%",
            background: "var(--acid)",
            filter: "blur(140px)",
            opacity: 0.15,
          }}
        />

        <div className="relative max-w-[1280px] mx-auto px-6 pt-24 pb-10">
          <div className="grid lg:grid-cols-[1.4fr_1fr] gap-16 mb-20">
            <div>
              <Logo size="xl" theme="onDark" />
            </div>

            <div className="grid grid-cols-2 gap-8">
              <div>
                <div
                  className="font-mono uppercase mb-5"
                  style={{
                    fontSize: 11,
                    color: "var(--orange)",
                    letterSpacing: "0.2em",
                  }}
                >
                  Sitio
                </div>
                <ul className="list-none p-0 m-0 space-y-3">
                  {navLinks.map((l) => (
                    <li key={l.label}>
                      <a
                        href={l.href}
                        className="font-display italic uppercase text-[20px] hover:text-orange transition-colors"
                        style={{
                          fontFamily: "var(--font-display)",
                          letterSpacing: "-0.02em",
                        }}
                      >
                        {l.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <div
                  className="font-mono uppercase mb-5"
                  style={{
                    fontSize: 11,
                    color: "var(--orange)",
                    letterSpacing: "0.2em",
                  }}
                >
                  Servicios
                </div>
                <ul className="list-none p-0 m-0 space-y-3">
                  {services.map((l) => (
                    <li key={l.label}>
                      <a
                        href={l.href}
                        className="font-display italic uppercase text-[20px] hover:text-orange transition-colors"
                        style={{
                          fontFamily: "var(--font-display)",
                          letterSpacing: "-0.02em",
                        }}
                      >
                        {l.label}
                      </a>
                    </li>
                  ))}
                </ul>

              </div>
            </div>
          </div>

          <div
            className="relative -mx-6 mb-10 overflow-hidden"
            style={{
              borderTop: "1px solid rgba(255,245,238,0.08)",
              borderBottom: "1px solid rgba(255,245,238,0.08)",
            }}
          >
            <div
              className="font-display italic uppercase text-center select-none whitespace-nowrap"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(36px, 10.5vw, 144px)",
                lineHeight: 1,
                letterSpacing: "-0.05em",
                color: "transparent",
                WebkitTextStroke: "1.5px rgba(255,245,238,0.18)",
                paddingTop: 16,
                paddingBottom: 16,
              }}
            >
              HACOMPANY
              <span style={{ color: "var(--orange)", WebkitTextStroke: "0" }}>
                .
              </span>
            </div>
          </div>

          <div
            className="grid gap-6 items-center md:grid-cols-[1fr_auto_1fr] font-mono uppercase"
            style={{
              fontSize: 11,
              letterSpacing: "0.15em",
              color: "rgba(255,245,238,0.5)",
            }}
          >
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 md:justify-self-start">
              <span>HA · Montemorelos, NL</span>
              <span style={{ opacity: 0.4 }}>·</span>
              <span>© {year}</span>
            </div>

            <div className="flex items-center gap-3 md:justify-self-center">
              <SocialIcon
                href="https://instagram.com/hacompany"
                label="Instagram"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="size-[18px]"
                >
                  <rect x="3" y="3" width="18" height="18" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r="0.6" fill="currentColor" />
                </svg>
              </SocialIcon>
            </div>

            <div className="md:justify-self-end" />
          </div>
        </div>
    </footer>
  );
}
