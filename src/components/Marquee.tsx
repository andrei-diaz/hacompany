const items = [
  "Web Design",
  "Branding",
  "Aplicaciones",
  "Frontend",
  "Backend",
  "UI/UX",
  "E-commerce",
  "Dashboards",
];

export default function Marquee() {
  const doubled = [...items, ...items];
  return (
    <div className="relative bg-orange text-background py-6 overflow-hidden border-y-4 border-foreground -rotate-2 my-16 -mx-4">
      <div className="marquee-track flex whitespace-nowrap will-change-transform">
        {doubled.map((item, i) => (
          <span
            key={i}
            className="text-3xl md:text-5xl font-black uppercase italic tracking-tighter px-8 inline-flex items-center gap-8"
          >
            {item}
            <span className="text-red text-4xl">★</span>
          </span>
        ))}
      </div>
    </div>
  );
}
