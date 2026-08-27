import { motion, type HTMLMotionProps } from "framer-motion"
import type { ReactNode } from "react"
import { cn } from "@/lib/utils"

type RevealProps = {
  children: ReactNode
  className?: string
  delay?: number
  y?: number
} & HTMLMotionProps<"div">

export function Reveal({
  children,
  className,
  delay = 0,
  y = 36,
  ...props
}: RevealProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      className={cn(className)}
      {...props}
    >
      {children}
    </motion.div>
  )
}

export function ImageReveal({
  children,
  className,
  delay = 0,
}: {
  children: ReactNode
  className?: string
  delay?: number
}) {
  return (
    <motion.div
      initial={{ clipPath: "inset(14% 14% 14% 14%)", scale: 1.08 }}
      whileInView={{ clipPath: "inset(0% 0% 0% 0%)", scale: 1 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 1, delay, ease: [0.22, 1, 0.36, 1] }}
      className={cn("overflow-hidden", className)}
    >
      {children}
    </motion.div>
  )
}
