import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import type { ButtonHTMLAttributes } from "react"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap text-[11px] font-semibold uppercase tracking-[0.22em] transition-all duration-300 disabled:pointer-events-none disabled:opacity-50 outline-none focus-visible:ring-2 focus-visible:ring-brand/70 focus-visible:ring-offset-2 focus-visible:ring-offset-ink [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 cursor-pointer",
  {
    variants: {
      variant: {
        default:
          "bg-brand text-white hover:bg-brand-dark hover:-translate-y-0.5 hover:shadow-[0_10px_30px_rgba(27,147,41,0.28)]",
        outline:
          "border border-white/30 bg-transparent text-white hover:border-brand hover:text-brand hover:-translate-y-0.5",
        ghost: "text-white hover:text-brand",
        dark: "bg-white text-ink hover:bg-brand hover:text-white hover:-translate-y-0.5",
      },
      size: {
        default: "h-12 px-7",
        sm: "h-10 px-5 text-[10px]",
        lg: "h-14 px-8",
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
