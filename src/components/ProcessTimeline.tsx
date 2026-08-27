import { motion, useScroll, useSpring, useTransform } from "framer-motion"
import { useRef } from "react"
import { Reveal } from "@/components/Reveal"

const STEPS = [
  {
    number: "01",
    title: "Contact",
    copy: "Call, WhatsApp or enter your registration for an instant quote.",
  },
  {
    number: "02",
    title: "Diagnosis",
    copy: "We collect the vehicle and confirm the fault with photos and a clear plan.",
  },
  {
    number: "03",
    title: "Rebuild",
    copy: "Your original engine is stripped, machined and rebuilt with genuine OEM parts.",
  },
  {
    number: "04",
    title: "Testing",
    copy: "Professional running-in, leak checks and road testing before sign-off.",
  },
  {
    number: "05",
    title: "Delivery",
    copy: "Valeted, warrantied and returned — nationwide collection and delivery.",
  },
]

export function ProcessTimeline() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 70%", "end 50%"],
  })
  const scaleX = useSpring(scrollYProgress, { stiffness: 80, damping: 20 })
  const height = useTransform(scrollYProgress, [0, 1], ["0%", "100%"])

  return (
    <section className="bg-graphite py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Reveal>
          <p className="text-[11px] font-semibold tracking-[0.32em] text-brand uppercase">
            Our process
          </p>
          <h2 className="display mt-4 max-w-3xl text-4xl leading-[0.95] text-white md:text-6xl">
            From breakdown to back on the road.
          </h2>
        </Reveal>

        <div ref={ref} className="relative mt-16">
          <div className="absolute top-8 right-0 left-0 hidden h-px bg-white/10 lg:block" />
          <motion.div
            style={{ scaleX, transformOrigin: "left" }}
            className="absolute top-8 right-0 left-0 hidden h-px bg-brand lg:block"
          />
          <div className="absolute top-0 bottom-0 left-4 w-px bg-white/10 lg:hidden" />
          <motion.div
            style={{ height }}
            className="absolute top-0 left-4 w-px bg-brand lg:hidden"
          />

          <ol className="grid gap-10 lg:grid-cols-5 lg:gap-6">
            {STEPS.map((step, index) => (
              <motion.li
                key={step.number}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ delay: index * 0.1, duration: 0.55 }}
                className="relative pl-10 lg:pl-0"
              >
                <span className="absolute top-1 left-2 size-5 rounded-full border border-brand bg-ink lg:top-6 lg:left-0 lg:size-5" />
                <p className="display text-4xl text-brand/80">{step.number}</p>
                <h3 className="display mt-3 text-2xl text-white">{step.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-white/55">
                  {step.copy}
                </p>
              </motion.li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
