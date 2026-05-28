import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "HA — Estudio digital · Montemorelos, NL";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#ff4d1c",
          color: "#0a0a0a",
          padding: 80,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          fontFamily: "system-ui, -apple-system, sans-serif",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: -200,
            right: -150,
            width: 500,
            height: 500,
            borderRadius: "50%",
            background: "#d8ff00",
            opacity: 0.18,
            display: "flex",
          }}
        />

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: 22,
            letterSpacing: "0.3em",
            textTransform: "uppercase",
            fontWeight: 600,
          }}
        >
          <span>HA · Montemorelos, NL</span>
          <span style={{ opacity: 0.7 }}>2025</span>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
          <div
            style={{
              display: "flex",
              alignItems: "baseline",
              fontStyle: "italic",
              fontWeight: 900,
              fontSize: 260,
              lineHeight: 0.85,
              letterSpacing: "-0.05em",
            }}
          >
            <span>H</span>
            <span style={{ color: "#fff5ee" }}>A</span>
            <span style={{ color: "#d8ff00" }}>.</span>
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 64,
              fontWeight: 800,
              letterSpacing: "-0.03em",
              maxWidth: 920,
              lineHeight: 1.05,
            }}
          >
            Hacemos software a tu medida.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: 22,
            letterSpacing: "0.25em",
            textTransform: "uppercase",
            fontWeight: 600,
            opacity: 0.85,
          }}
        >
          <span>Estudio digital independiente</span>
          <span>→ hacompany.com.mx</span>
        </div>
      </div>
    ),
    { ...size }
  );
}
