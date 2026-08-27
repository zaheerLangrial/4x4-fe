import { Check } from "lucide-react"
import { ImageReveal, Reveal } from "@/components/Reveal"
import { Button } from "@/components/ui/button"
import { IMAGES } from "@/lib/site"

const STATS = [
  "30+ Years Experience",
  "Genuine OEM Parts",
  "Specialist Technicians",
]

export function AboutSection() {
  return (
    <section id="about" className="bg-ink py-24 md:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 md:px-8 lg:grid-cols-2 lg:gap-20">
        <ImageReveal className="relative">
          <div className="absolute -inset-3 border border-brand/80" />
          <div className="absolute top-0 left-0 h-16 w-1 bg-brand" />
          <img
            src={IMAGES.about}
            alt="Specialist technicians in the 4X4 workshop"
            className="relative aspect-[4/5] w-full object-cover md:aspect-[5/6]"
          />
        </ImageReveal>

        <div>
          <Reveal>
            <p className="text-[11px] font-semibold tracking-[0.32em] text-brand uppercase">
              About 4X4 Engine Rebuilds
            </p>
            <h2 className="display mt-4 text-4xl leading-[0.95] text-white md:text-5xl lg:text-6xl">
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
              <a href="#contact">Learn more</a>
            </Button>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
