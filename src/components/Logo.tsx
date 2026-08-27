import logo from "@/assets/4x4-logo.png"
import { cn } from "@/lib/utils"

type LogoProps = {
  className?: string
  compact?: boolean
}

export function Logo({ className, compact = false }: LogoProps) {
  return (
    <img
      src={logo}
      alt="4X4 Engine Rebuilds"
      className={cn(
        "h-12 w-auto object-contain object-left md:h-16",
        compact && "h-10 md:h-12",
        className,
      )}
    />
  )
}
