import { motion } from "framer-motion"
import { BadgeCheck, Camera, FlaskConical, Shield } from "lucide-react"
import { ImageReveal, Reveal } from "@/components/Reveal"
import { IMAGES } from "@/lib/site"

const LABELS = [
  { text: "Precision", x: "8%", y: "22%" },
  { text: "OEM Parts", x: "72%", y: "18%" },
  { text: "Tested", x: "10%", y: "72%" },
  { text: "Warranty", x: "70%", y: "76%" },
]

const BADGES = [
  { icon: Shield, label: "Up to 24 Months Warranty" },
  { icon: BadgeCheck, label: "Genuine OEM Parts & Oil" },
  { icon: Camera, label: "Detailed Progress Updates" },
  { icon: FlaskConical, label: "Professional Testing" },
]

export function EngineFeature() {
  return (
    <section className="relative overflow-hidden bg-ink py-24 md:py-32">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(27,147,41,0.12),transparent_35%)]" />
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="grid items-end gap-8 lg:grid-cols-2">
          <Reveal>
            <h2 className="display text-5xl leading-[0.9] text-white md:text-7xl">
              Your engine.
              <span className="mt-2 block text-brand">Rebuilt right.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="max-w-md text-base leading-relaxed text-white/60 lg:ml-auto lg:text-right">
              Professional engine rebuilds carried out by experienced Land Rover
              and Range Rover specialists.
            </p>
          </Reveal>
        </div>

        <div className="relative mt-14">
          <ImageReveal>
            <div className="relative">
              <img
                src={IMAGES.engine}
                alt="Engine rebuild in progress"
                className="h-[420px] w-full object-cover md:h-[560px]"
              />
              <div className="absolute inset-0 bg-linear-to-r from-ink/70 via-transparent to-ink/50" />
              <svg
                className="pointer-events-none absolute inset-0 h-full w-full"
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
              >
                <motion.line
                  x1="18"
                  y1="26"
                  x2="42"
                  y2="44"
                  stroke="#1B9329"
                  strokeWidth="0.25"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.1, delay: 0.2 }}
                />
                <motion.line
                  x1="82"
                  y1="22"
                  x2="58"
                  y2="40"
                  stroke="#1B9329"
                  strokeWidth="0.25"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.1, delay: 0.35 }}
                />
                <motion.line
                  x1="18"
                  y1="76"
                  x2="40"
                  y2="58"
                  stroke="#1B9329"
                  strokeWidth="0.25"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.1, delay: 0.5 }}
                />
                <motion.line
                  x1="82"
                  y1="80"
                  x2="60"
                  y2="62"
                  stroke="#1B9329"
                  strokeWidth="0.25"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.1, delay: 0.65 }}
                />
              </svg>
              {LABELS.map((label, i) => (
                <motion.div
                  key={label.text}
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.35 + i * 0.12 }}
                  className="absolute hidden border border-brand/50 bg-black/60 px-3 py-1.5 text-[10px] font-semibold tracking-[0.28em] text-white uppercase backdrop-blur-sm md:block"
                  style={{ left: label.x, top: label.y }}
                >
                  {label.text}
                </motion.div>
              ))}
            </div>
          </ImageReveal>
        </div>

        <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {BADGES.map((badge, i) => (
            <Reveal key={badge.label} delay={i * 0.08}>
              <div className="flex items-center gap-3 border border-white/10 bg-steel px-4 py-4">
                <badge.icon className="size-5 text-brand" />
                <p className="text-sm text-white">{badge.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
