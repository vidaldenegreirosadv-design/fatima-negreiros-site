import { SITE } from "../data";

type Props = {
  variant?: "light" | "dark";
  size?: "sm" | "md" | "lg";
  className?: string;
};

/**
 * Logo tipográfico minimalista — sem elementos gráficos.
 * Combinação serifada + sans com divisor vertical sutil.
 *  - "Fátima Negreiros" → Cormorant Garamond (autoridade, luxo editorial)
 *  - "PODOLOGIA ESPECIALIZADA" → Inter, tracking largo (modernidade)
 */
export default function Logo({ variant = "dark", size = "md", className = "" }: Props) {
  const sizes = {
    sm: { name: "text-lg", sub: "text-[9px]", gap: "gap-3" },
    md: { name: "text-xl sm:text-[1.4rem]", sub: "text-[10px]", gap: "gap-3 sm:gap-3.5" },
    lg: { name: "text-3xl sm:text-4xl", sub: "text-[11px]", gap: "gap-4" },
  }[size];

  const nameColor = variant === "light" ? "text-cream" : "text-ink";
  const subColor = variant === "light" ? "text-cream/55" : "text-teal-500";
  const dividerColor =
    variant === "light"
      ? "bg-cream/30"
      : "bg-teal-500/40";

  return (
    <div className={`inline-flex items-center ${sizes.gap} ${className}`}>
      <div className="flex flex-col leading-none">
        <span
          className={`font-serif ${sizes.name} ${nameColor} leading-none tracking-tight`}
          style={{ fontWeight: 500 }}
        >
          Fátima<span className="italic"> Negreiros</span>
        </span>
        {/* Subtítulo mobile (uma linha) */}
        <span
          className={`sm:hidden mt-1.5 ${sizes.sub} ${subColor} uppercase font-medium`}
          style={{ letterSpacing: "0.28em" }}
        >
          Podologia Especializada
        </span>
      </div>

      {/* Divisor + subtítulo desktop (duas linhas elegantes) */}
      <span
        className={`hidden sm:block w-px self-stretch ${dividerColor}`}
        aria-hidden="true"
      />
      <span
        className={`hidden sm:block ${sizes.sub} ${subColor} uppercase font-medium leading-tight`}
        style={{ letterSpacing: "0.32em" }}
      >
        Podologia
        <br />
        Especializada
      </span>

      <span className="sr-only">{SITE.role}</span>
    </div>
  );
}
