import { cn } from "@/lib/utils"

type LogoProps = {
  className?: string
  stacked?: boolean
}

export function Logo({ className, stacked = false }: LogoProps) {
  return (
    <div className={cn("flex items-center gap-3", className)}>
      <svg
        viewBox="0 0 40 40"
        className="size-10 shrink-0"
        aria-hidden="true"
      >
        <rect width="40" height="40" fill="#050505" />
        <rect x="3" y="3" width="15" height="15" fill="#1B9329" />
        <rect
          x="22"
          y="3"
          width="15"
          height="15"
          fill="none"
          stroke="#ffffff"
          strokeWidth="1.4"
        />
        <rect
          x="3"
          y="22"
          width="15"
          height="15"
          fill="none"
          stroke="#ffffff"
          strokeWidth="1.4"
        />
        <rect x="22" y="22" width="15" height="15" fill="#ffffff" />
      </svg>
      <div className={cn("leading-none", stacked && "hidden sm:block")}>
        <p className="display text-[17px] tracking-[0.18em] text-white">4X4</p>
        <p className="mt-1 text-[9px] font-semibold tracking-[0.28em] text-white/70 uppercase">
          Engine Rebuilds
        </p>
      </div>
    </div>
  )
}
