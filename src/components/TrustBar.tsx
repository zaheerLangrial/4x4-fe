import { motion } from "framer-motion"
import { AnimatedCounter } from "@/components/AnimatedCounter"
import { Separator } from "@/components/ui/separator"

const STATS = [
  { value: 30, suffix: "+", label: "Years Experience", decimals: 0 },
  { value: 24, suffix: " MONTHS", label: "Warranty Available", decimals: 0 },
  { value: 4.95, suffix: "/5", label: "Average Rating", decimals: 2 },
  { value: null, display: "OEM", label: "Genuine Parts & Oil" },
  { value: null, display: "PICKUP", label: "Collection & Delivery" },
] as const

export function TrustBar() {
  return (
    <section className="relative border-y border-white/8 bg-steel">
      <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-brand to-transparent" />
      <div className="mx-auto grid max-w-7xl grid-cols-2 md:grid-cols-5">
        {STATS.map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.08, duration: 0.5 }}
            className="group relative flex flex-col items-center px-4 py-9 text-center"
          >
            {index > 0 ? (
              <Separator
                orientation="vertical"
                className="absolute top-6 bottom-6 left-0 hidden bg-white/8 md:block"
              />
            ) : null}
            <p className="display text-3xl text-white transition-colors duration-300 group-hover:text-brand md:text-4xl">
              {stat.value !== null ? (
                <AnimatedCounter
                  value={stat.value}
                  decimals={stat.decimals}
                  suffix={stat.suffix}
                />
              ) : (
                stat.display
              )}
            </p>
            <p className="mt-2 text-[10px] font-semibold tracking-[0.22em] text-white/45 uppercase">
              {stat.label}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
