interface SCVCLogoProps {
  className?: string;
  inverted?: boolean;
}

export default function SCVCLogo({ className, inverted = false }: SCVCLogoProps) {
  const color = inverted ? "#ffffff" : "#0f2557";
  return (
    <svg
      viewBox="0 0 196 40"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="SCVC"
      role="img"
    >
      <text
        x="1"
        y="34"
        fill={color}
        style={{
          fontFamily: "'Orbitron', sans-serif",
          fontWeight: 800,
          fontSize: "36px",
          letterSpacing: "2px",
        }}
      >
        SCVC
      </text>
    </svg>
  );
}
