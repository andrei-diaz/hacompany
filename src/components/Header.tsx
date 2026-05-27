"use client";

import { useState } from "react";
import Logo from "./Logo";
import ContactModal from "./ContactModal";

const links = [
  { href: "#servicios", label: "Servicios" },
  { href: "#proyectos", label: "Proyectos" },
  { href: "#contacto", label: "Contacto" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header
        className="sticky top-0 z-50 border-b"
        style={{
          background: "rgba(255,77,28,0.85)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          borderColor: "var(--line)",
        }}
      >
        <div className="px-6 py-3.5 flex items-center justify-between">
          <a href="#top" aria-label="HA — inicio">
            <Logo size="md" />
          </a>
          <nav
            className="hidden md:flex gap-1 rounded-full p-1"
            style={{ background: "rgba(10,10,10,0.12)" }}
          >
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-ink text-[13px] font-medium px-4 py-2 rounded-full hover:bg-paper/40 transition-colors"
              >
                {l.label}
              </a>
            ))}
          </nav>
          <button
            onClick={() => setOpen(true)}
            className="inline-flex items-center gap-2 px-[18px] py-2.5 rounded-full bg-ink text-paper text-[13px] font-semibold hover:scale-[1.03] transition-transform"
          >
            <span className="size-1.5 rounded-full bg-acid" />
            Hablemos
          </button>
        </div>
      </header>

      <ContactModal open={open} onClose={() => setOpen(false)} />
    </>
  );
}
