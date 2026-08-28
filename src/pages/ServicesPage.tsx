import { Link } from "react-router-dom"
import { CTASection } from "@/components/CTASection"
import { PageHero } from "@/components/PageHero"
import { ProcessTimeline } from "@/components/ProcessTimeline"
import { Reveal } from "@/components/Reveal"
import { TiltCard } from "@/components/TiltCard"
import { Button } from "@/components/ui/button"
import { useQuote } from "@/context/QuoteContext"
import { SERVICES } from "@/data/services"
import { IMAGES } from "@/lib/site"

export function ServicesPage() {
  const { openQuote } = useQuote()

  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Specialist care for every Land Rover."
        subtitle="Rebuilds, servicing, diagnostics, MOT prep and classic work — all under one workshop roof."
        image={IMAGES.workshop}
      />

      <section className="bg-ink py-20 md:py-28">
        <div className="mx-auto max-w-7xl space-y-16 px-5 md:px-8">
          {SERVICES.map((service, index) => {
            const Icon = service.icon
            const reverse = index % 2 === 1
            return (
              <Reveal key={service.id}>
                <article
                  id={service.id}
                  className="grid scroll-mt-28 items-center gap-8 lg:grid-cols-2 lg:gap-14"
                >
                  <TiltCard className={reverse ? "lg:order-2" : undefined}>
                    <div className="relative overflow-hidden border border-white/10">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="aspect-4/3 w-full object-cover"
                      />
                      <div className="absolute inset-0 bg-linear-to-t from-black/50 to-transparent" />
                      <span className="display absolute top-5 left-5 text-5xl text-white/40">
                        {service.number}
                      </span>
                    </div>
                  </TiltCard>

                  <div className={reverse ? "lg:order-1" : undefined}>
                    <div className="mb-4 inline-flex size-11 items-center justify-center border border-brand/40 bg-brand/10 text-brand">
                      <Icon className="size-5" />
                    </div>
                    <h2 className="display text-4xl text-white md:text-5xl">
                      {service.title}
                    </h2>
                    <p className="mt-4 max-w-lg text-base leading-relaxed text-white/65">
                      {service.details}
                    </p>
                    <ul className="mt-6 space-y-2">
                      {service.points.map((point) => (
                        <li
                          key={point}
                          className="flex items-start gap-3 text-sm text-white/80"
                        >
                          <span className="mt-1.5 size-1.5 shrink-0 bg-brand" />
                          {point}
                        </li>
                      ))}
                    </ul>
                    <div className="mt-8 flex flex-wrap gap-3">
                      <Button onClick={() => openQuote()}>Get a quote</Button>
                      <Button variant="outline" asChild>
                        <Link to="/contact">Talk to a specialist</Link>
                      </Button>
                    </div>
                  </div>
                </article>
              </Reveal>
            )
          })}
        </div>
      </section>

      <ProcessTimeline />
      <CTASection />
    </>
  )
}
