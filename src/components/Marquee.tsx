const items = [
  "Web Design",
  "Aplicaciones",
  "Frontend",
  "Backend",
  "Branding",
  "Dashboards",
  "E-commerce",
];

export default function Marquee() {
  const tripled = [...items, ...items, ...items];
  return (
    <div
      className="overflow-hidden"
      style={{ background: "var(--ink)", color: "var(--orange)", padding: "18px 0" }}
    >
      <div
        className="flex whitespace-nowrap"
        style={{ animation: "hh-scroll 40s linear infinite" }}
      >
        {tripled.map((t, i) => (
          <span
            key={i}
            className="font-display italic uppercase inline-flex items-center gap-6 px-6"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: 38,
              letterSpacing: "-0.02em",
            }}
          >
            {t}
            <span style={{ color: "var(--acid)", fontSize: 22 }}>✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
