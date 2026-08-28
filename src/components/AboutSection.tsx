import { Check } from "lucide-react"
import { Link } from "react-router-dom"
import { BrandChip } from "@/components/BrandChip"
import { ImageReveal, Reveal } from "@/components/Reveal"
import { Button } from "@/components/ui/button"
import { IMAGES } from "@/lib/site"

const STATS = [
  "30+ Years Experience",
  "Genuine OEM Parts",
  "Specialist Technicians",
]

export function AboutSection({
  ctaHref = "/about",
  ctaLabel = "Learn more",
}: {
  ctaHref?: string
  ctaLabel?: string
}) {
  return (
    <section id="about" className="relative overflow-hidden bg-ink py-24 md:py-32">
      <div className="pointer-events-none absolute top-24 right-0 hidden h-64 w-px bg-linear-to-b from-transparent via-brand/50 to-transparent lg:block" />
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 md:px-8 lg:grid-cols-2 lg:gap-20">
        <ImageReveal className="relative">
          <div className="absolute -inset-3 border border-brand/80" />
          <div className="absolute top-0 left-0 h-16 w-1 bg-brand" />
          <img
            src={IMAGES.about}
            alt="Specialist technicians in the 4X4 workshop"
            className="relative aspect-[4/5] w-full object-cover md:aspect-[5/6]"
          />
          <div className="absolute right-4 bottom-4 border border-white/15 bg-black/70 px-4 py-3 backdrop-blur-md">
            <p className="display text-2xl text-brand">30+</p>
            <p className="text-[10px] tracking-[0.2em] text-white/70 uppercase">
              Years specialist
            </p>
          </div>
        </ImageReveal>

        <div>
          <Reveal>
            <BrandChip>About 4X4 Engine Rebuilds</BrandChip>
            <h2 className="display mt-6 text-4xl leading-[0.95] text-white md:text-5xl lg:text-6xl">
              Specialists who know your 4x4 inside out.
            </h2>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="mt-6 max-w-lg text-base leading-relaxed text-white/65">
              At 4×4 Engine Rebuilds, all works are overseen and checked by the
              director of the business. We combine specialist knowledge,
              professional workmanship and personal customer service to deliver
              reliable results.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <ul className="mt-8 space-y-3">
              {STATS.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-3 text-sm text-white"
                >
                  <span className="flex size-6 items-center justify-center bg-brand">
                    <Check className="size-3.5" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
            <Button className="mt-8" asChild>
              <Link to={ctaHref}>{ctaLabel}</Link>
            </Button>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
