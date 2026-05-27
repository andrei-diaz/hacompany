"use client";

import { useRef, useState, type CSSProperties, type ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
};

export default function TiltCard({ children, className, style }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [t, setT] = useState({ rx: 0, ry: 0 });

  return (
    <div
      ref={ref}
      onMouseMove={(e) => {
        const el = ref.current;
        if (!el) return;
        const r = el.getBoundingClientRect();
        const px = (e.clientX - r.left) / r.width - 0.5;
        const py = (e.clientY - r.top) / r.height - 0.5;
        setT({ rx: -py * 8, ry: px * 8 });
      }}
      onMouseLeave={() => setT({ rx: 0, ry: 0 })}
      className={className}
      style={{ perspective: 1000, ...style }}
    >
      <div
        style={{
          transform: `rotateX(${t.rx}deg) rotateY(${t.ry}deg)`,
          transformStyle: "preserve-3d",
          transition: "transform 0.2s ease-out",
          height: "100%",
        }}
      >
        {children}
      </div>
    </div>
  );
}
