import { Phone } from "lucide-react"
import { BrandChip } from "@/components/BrandChip"
import { Reveal } from "@/components/Reveal"
import { Button } from "@/components/ui/button"
import { useQuote } from "@/context/QuoteContext"
import { IMAGES, SITE } from "@/lib/site"

export function CTASection() {
  const { openQuote } = useQuote()

  return (
    <section className="relative overflow-hidden py-28 md:py-40">
      <img
        src={IMAGES.cta}
        alt=""
        className="absolute inset-0 h-full w-full scale-105 object-cover"
      />
      <div className="absolute inset-0 bg-black/78" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(27,147,41,0.28),transparent_55%)]" />
      <div className="animate-glow pointer-events-none absolute inset-x-1/4 top-1/2 h-40 -translate-y-1/2 rounded-full bg-brand/10 blur-3xl" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-brand to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-linear-to-r from-transparent via-brand to-transparent" />

      <div className="relative z-10 mx-auto max-w-4xl px-5 text-center md:px-8">
        <Reveal>
          <BrandChip>Ready when you are</BrandChip>
          <h2 className="display mt-6 text-5xl leading-[0.9] text-white md:text-7xl">
            Engine trouble?
            <span className="mt-3 block text-brand">
              Let's get you back on the road.
            </span>
          </h2>
          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button size="lg" onClick={() => openQuote()}>
              Get a quote
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href={`tel:${SITE.phoneTel}`}>
                <Phone className="size-4" />
                Call {SITE.phone}
              </a>
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
