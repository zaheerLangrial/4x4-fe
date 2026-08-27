import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import type { ButtonHTMLAttributes } from "react"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
          "relative inline-flex items-center justify-center gap-2 overflow-hidden whitespace-nowrap font-sans text-[11px] font-semibold uppercase tracking-[0.22em] transition-all duration-300 disabled:pointer-events-none disabled:opacity-50 outline-none focus-visible:ring-2 focus-visible:ring-brand/70 focus-visible:ring-offset-2 focus-visible:ring-offset-ink [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 cursor-pointer isolate before:pointer-events-none before:absolute before:inset-0 before:translate-x-[-120%] before:bg-linear-to-r before:from-transparent before:via-white/25 before:to-transparent before:transition-transform before:duration-700 hover:before:translate-x-[120%]",
  {
    variants: {
      variant: {
        default:
          "bg-brand text-white shadow-[0_0_0_1px_rgba(27,147,41,0.4)] hover:bg-brand-dark hover:-translate-y-0.5 hover:shadow-[0_12px_32px_rgba(27,147,41,0.35)]",
        outline:
          "border border-white/25 bg-white/5 text-white backdrop-blur-sm hover:border-brand hover:bg-brand/10 hover:text-white hover:-translate-y-0.5",
        ghost: "text-white hover:text-brand",
        dark: "bg-white text-ink hover:bg-brand hover:text-white hover:-translate-y-0.5",
      },
      size: {
        default: "h-12 px-7",
        sm: "h-10 px-5 text-[10px]",
        lg: "h-14 px-8 text-xs tracking-[0.24em]",
        icon: "size-12",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
)

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants> & { asChild?: boolean }) {
  const Comp = asChild ? Slot : "button"
  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
