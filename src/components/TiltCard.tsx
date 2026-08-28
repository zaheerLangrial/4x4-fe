import { motion, useMotionValue, useSpring, useTransform } from "framer-motion"
import { useRef, type MouseEvent, type ReactNode } from "react"
import { cn } from "@/lib/utils"

export function TiltCard({
  children,
  className,
  intensity = 10,
}: {
  children: ReactNode
  className?: string
  intensity?: number
}) {
  const ref = useRef<HTMLDivElement>(null)
  const mx = useMotionValue(0)
  const my = useMotionValue(0)
  const sx = useSpring(mx, { stiffness: 180, damping: 18 })
  const sy = useSpring(my, { stiffness: 180, damping: 18 })
  const rotateY = useTransform(sx, [-1, 1], [-intensity, intensity])
  const rotateX = useTransform(sy, [-1, 1], [intensity, -intensity])

  function onMove(event: MouseEvent<HTMLDivElement>) {
    const rect = ref.current?.getBoundingClientRect()
    if (!rect) return
    mx.set(((event.clientX - rect.left) / rect.width) * 2 - 1)
    my.set(((event.clientY - rect.top) / rect.height) * 2 - 1)
  }

  function onLeave() {
    mx.set(0)
    my.set(0)
  }

  return (
    <div className="perspective-3d h-full">
      <motion.div
        ref={ref}
        onMouseMove={onMove}
        onMouseLeave={onLeave}
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        className={cn("h-full will-change-transform", className)}
      >
        {children}
      </motion.div>
    </div>
  )
}
