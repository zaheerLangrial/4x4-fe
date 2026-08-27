import { motion } from "framer-motion"

const ITEMS = [
  "Power",
  "Engineering",
  "Trust",
  "Experience",
  "OEM Parts",
  "24 Month Warranty",
  "Pickup & Delivery",
  "Land Rover",
  "Range Rover",
]

export function Marquee() {
  const loop = [...ITEMS, ...ITEMS]

  return (
    <div className="relative overflow-hidden border-y border-brand/25 bg-ink py-3">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-linear-to-r from-ink to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-linear-to-l from-ink to-transparent" />
      <motion.div
        className="flex w-max gap-10"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 28, ease: "linear", repeat: Infinity }}
      >
        {loop.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="display flex items-center gap-10 text-xl tracking-[0.18em] text-white/70"
          >
            {item}
            <span className="inline-block size-1.5 bg-brand" />
          </span>
        ))}
      </motion.div>
    </div>
  )
}
