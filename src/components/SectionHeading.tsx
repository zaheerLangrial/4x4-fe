import { BrandChip } from "@/components/BrandChip"
import { cn } from "@/lib/utils"

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "left",
}: {
  eyebrow?: string
  title: string
  subtitle?: string
  align?: "left" | "center"
}) {
  return (
    <div className={cn(align === "center" && "text-center")}>
      {eyebrow ? (
        <div className={cn("mb-5", align === "center" && "flex justify-center")}>
          <BrandChip>{eyebrow}</BrandChip>
        </div>
      ) : null}
      <h2 className="display text-4xl leading-[0.95] text-white md:text-5xl lg:text-6xl">
        {title}
      </h2>
      {subtitle ? (
        <p
          className={cn(
            "mt-4 max-w-xl text-sm tracking-[0.18em] text-white/50 uppercase",
            align === "center" && "mx-auto",
          )}
        >
          {subtitle}
        </p>
      ) : null}
    </div>
  )
}
