type LogoProps = {
  size?: "sm" | "md" | "lg" | "xl";
  theme?: "onLight" | "onDark";
};

const sizeClasses = {
  sm: "text-xl",
  md: "text-[22px]",
  lg: "text-4xl",
  xl: "text-[88px]",
};

export default function Logo({ size = "md", theme = "onLight" }: LogoProps) {
  const hColor = theme === "onDark" ? "text-paper" : "text-ink";
  const aColor = theme === "onDark" ? "text-orange" : "text-paper";

  return (
    <span
      className={`${sizeClasses[size]} font-display italic inline-flex items-baseline tracking-tight leading-none`}
      style={{ fontFamily: "var(--font-display)" }}
    >
      <span className={hColor}>H</span>
      <span className={aColor}>A</span>
      <span className="text-acid">.</span>
    </span>
  );
}
