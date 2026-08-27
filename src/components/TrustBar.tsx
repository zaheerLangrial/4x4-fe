import { AnimatedCounter } from "@/components/AnimatedCounter"

const STATS = [
  { value: 30, suffix: "+", label: "Years Experience", decimals: 0 },
  { value: 24, suffix: " MONTHS", label: "Warranty Available", decimals: 0 },
  { value: 4.95, suffix: "/5", label: "Average Rating", decimals: 2 },
  { value: null, display: "OEM", label: "Genuine Parts & Oil" },
  { value: null, display: "PICKUP", label: "Collection & Delivery" },
] as const

export function TrustBar() {
  return (
    <section className="border-y border-white/8 bg-steel">
      <div className="mx-auto grid max-w-7xl grid-cols-2 divide-y divide-white/8 md:grid-cols-5 md:divide-x md:divide-y-0">
        {STATS.map((stat) => (
          <div
            key={stat.label}
            className="flex flex-col items-center px-4 py-8 text-center"
          >
            <p className="display text-3xl text-white md:text-4xl">
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
          </div>
        ))}
      </div>
    </section>
  )
}
