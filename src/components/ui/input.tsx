import type { ComponentProps } from "react"
import { cn } from "@/lib/utils"

function Input({ className, type, ...props }: ComponentProps<"input">) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        "h-12 w-full border border-white/15 bg-white/5 px-4 text-sm text-white outline-none transition-colors placeholder:text-white/35 focus:border-brand",
        className,
      )}
      {...props}
    />
  )
}

export { Input }
