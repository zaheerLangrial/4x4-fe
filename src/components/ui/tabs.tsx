import type { ButtonHTMLAttributes, HTMLAttributes } from "react"
import { cn } from "@/lib/utils"

export function Tabs({
  children,
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      role="tablist"
      className={cn("flex gap-2 overflow-x-auto pb-2 scrollbar-none", className)}
      {...props}
    >
      {children}
    </div>
  )
}

export function TabsTrigger({
  active,
  className,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement> & { active?: boolean }) {
  return (
    <button
      type="button"
      role="tab"
      aria-selected={active}
      data-active={active}
      className={cn(
        "relative shrink-0 overflow-hidden border px-4 py-2 text-[10px] font-semibold tracking-[0.22em] uppercase transition-all duration-300",
        active
          ? "border-brand bg-brand text-white shadow-[0_0_24px_rgba(27,147,41,0.35)]"
          : "border-white/15 bg-white/4 text-white/60 hover:border-brand/70 hover:text-white",
        className,
      )}
      {...props}
    />
  )
}
