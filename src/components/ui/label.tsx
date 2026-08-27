import type { ComponentProps } from "react"
import { cn } from "@/lib/utils"

function Label({ className, ...props }: ComponentProps<"label">) {
  return (
    <label
      className={cn(
        "text-[10px] font-semibold uppercase tracking-[0.22em] text-white/55",
        className,
      )}
      {...props}
    />
  )
}

export { Label }
