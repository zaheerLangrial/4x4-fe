import { cn } from "@/lib/utils"

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "left",
  light = false,
}: {
  eyebrow?: string
  title: string
  subtitle?: string
  align?: "left" | "center"
  light?: boolean
}) {
  return (
    <div className={cn(align === "center" && "text-center")}>
      {eyebrow ? (
        <p
          className={cn(
            "mb-3 text-[11px] font-semibold tracking-[0.32em] uppercase",
            light ? "text-brand" : "text-brand",
          )}
        >
          {eyebrow}
        </p>
      ) : null}
      <h2
        className={cn(
          "display text-4xl leading-[0.95] md:text-5xl lg:text-6xl",
          light ? "text-white" : "text-white",
        )}
      >
        {title}
      </h2>
      {subtitle ? (
        <p
          className={cn(
            "mt-4 max-w-xl text-sm tracking-[0.18em] uppercase",
            align === "center" && "mx-auto",
            "text-white/50",
          )}
        >
          {subtitle}
        </p>
      ) : null}
    </div>
  )
}
