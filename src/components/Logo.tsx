type LogoProps = {
  size?: "sm" | "md" | "lg";
};

const sizeClasses = {
  sm: "text-xl",
  md: "text-2xl",
  lg: "text-4xl",
};

export default function Logo({ size = "md" }: LogoProps) {
  return (
    <span
      className={`${sizeClasses[size]} font-black tracking-tighter inline-flex items-baseline italic`}
    >
      <span className="text-foreground">H</span>
      <span className="text-orange">A</span>
      <span className="text-red">.</span>
    </span>
  );
}
