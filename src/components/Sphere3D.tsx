"use client";

import { useEffect, useRef, useState } from "react";

type Props = { size?: number };

export default function Sphere3D({ size = 500 }: Props) {
  const [auto, setAuto] = useState(true);
  const [rot, setRot] = useState({ x: -10, y: 0 });
  const last = useRef({ x: 0, y: 0 });

  useEffect(() => {
    if (!auto) return;
    let raf = 0;
    let t = 0;
    const loop = () => {
      t += 0.4;
      setRot((r) => ({ x: r.x, y: t }));
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(raf);
  }, [auto]);

  const N = 18;
  const longitudes = Array.from({ length: N }, (_, i) => (360 / N) * i);

  const onMouseDown = (e: React.MouseEvent) => {
    setAuto(false);
    last.current = { x: e.clientX, y: e.clientY };
    let timer: ReturnType<typeof setTimeout> | null = null;
    const move = (ev: MouseEvent) => {
      const dx = ev.clientX - last.current.x;
      const dy = ev.clientY - last.current.y;
      last.current = { x: ev.clientX, y: ev.clientY };
      setRot((r) => ({
        x: Math.max(-60, Math.min(60, r.x - dy * 0.4)),
        y: r.y + dx * 0.4,
      }));
    };
    const up = () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseup", up);
      timer = setTimeout(() => setAuto(true), 1500);
    };
    window.addEventListener("mousemove", move);
    window.addEventListener("mouseup", up);
    return () => {
      if (timer) clearTimeout(timer);
    };
  };

  return (
    <div
      onMouseDown={onMouseDown}
      style={{
        width: size,
        height: size,
        position: "relative",
        perspective: 1400,
        cursor: "grab",
        userSelect: "none",
      }}
    >
      <div
        style={{
          width: "100%",
          height: "100%",
          position: "relative",
          transformStyle: "preserve-3d",
          transform: `rotateX(${rot.x}deg) rotateY(${rot.y}deg)`,
          transition: auto ? "none" : "transform 0.1s linear",
        }}
      >
        {longitudes.map((angle) => (
          <div
            key={`lng-${angle}`}
            style={{
              position: "absolute",
              inset: 0,
              borderRadius: "50%",
              border: "1px solid rgba(10,10,10,0.18)",
              transform: `rotateY(${angle}deg)`,
              transformStyle: "preserve-3d",
            }}
          />
        ))}

        <ExtrudedHA size={size} />
      </div>
    </div>
  );
}

function ExtrudedHA({ size }: { size: number }) {
  const letterSize = size * 0.5;
  const depth = 32;

  return (
    <div
      style={{
        position: "absolute",
        left: "50%",
        top: "50%",
        transformStyle: "preserve-3d",
        transform: "translate(-50%, -50%)",
        display: "flex",
        alignItems: "center",
      }}
    >
      <ExtrudedLetter
        char="H"
        size={letterSize}
        depth={depth}
        front="var(--paper)"
        side="var(--ink)"
      />
      <ExtrudedLetter
        char="A"
        size={letterSize}
        depth={depth}
        front="var(--acid)"
        side="var(--ink)"
      />
    </div>
  );
}

function ExtrudedLetter({
  char,
  size,
  depth,
  front,
  side,
}: {
  char: string;
  size: number;
  depth: number;
  front: string;
  side: string;
}) {
  const layers = Array.from({ length: depth }, (_, i) => i);
  return (
    <div
      style={{
        position: "relative",
        transformStyle: "preserve-3d",
        display: "inline-block",
        lineHeight: 1,
      }}
    >
      {layers.map((i) => {
        const isFront = i === depth - 1;
        const isFirst = i === 0;
        const shade = isFront ? front : side;
        return (
          <div
            key={i}
            className="italic"
            style={{
              position: isFirst ? "relative" : "absolute",
              left: 0,
              top: 0,
              fontFamily: "var(--font-display)",
              fontStyle: "italic",
              fontSize: size,
              lineHeight: 1,
              color: shade,
              transform: `translateZ(${i - depth + 1}px)`,
              textShadow: isFront
                ? "0 4px 16px rgba(0,0,0,0.5)"
                : "none",
              WebkitFontSmoothing: "antialiased",
              userSelect: "none",
              pointerEvents: "none",
              whiteSpace: "nowrap",
            }}
          >
            {char}
          </div>
        );
      })}
    </div>
  );
}
