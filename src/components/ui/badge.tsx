import type { ReactNode } from "react"
import { cn } from "@/lib/utils"

export function Badge({
  className,
  children,
}: {
  className?: string
  children: ReactNode
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center border border-brand/40 bg-brand/10 px-3 py-1 text-[10px] font-semibold tracking-[0.28em] text-brand uppercase",
        className,
      )}
    >
      {children}
    </span>
  )
}
