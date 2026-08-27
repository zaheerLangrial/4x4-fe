import type { ReactNode } from "react"
import { cn } from "@/lib/utils"

export function BrandChip({
  children,
  className,
}: {
  children: ReactNode
  className?: string
}) {
  return (
    <span
      className={cn(
        "inline-flex origin-left skew-x-[-14deg] items-center bg-brand px-4 py-1.5 shadow-[6px_0_0_0_#050505]",
        className,
      )}
    >
      <span className="skew-x-[14deg] text-[10px] font-semibold tracking-[0.28em] text-white uppercase">
        {children}
      </span>
    </span>
  )
}
