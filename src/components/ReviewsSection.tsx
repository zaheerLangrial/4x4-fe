import Autoplay from "embla-carousel-autoplay"
import { Star } from "lucide-react"
import { useRef } from "react"
import { AnimatedCounter } from "@/components/AnimatedCounter"
import { BrandChip } from "@/components/BrandChip"
import { ReviewCard } from "@/components/ReviewCard"
import { Reveal } from "@/components/Reveal"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { REVIEWS } from "@/data/reviews"

export function ReviewsSection() {
  const plugin = useRef(
    Autoplay({ delay: 5200, stopOnInteraction: false, stopOnMouseEnter: true }),
  )

  return (
    <section id="reviews" className="bg-graphite py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Reveal>
          <div className="flex flex-col justify-between gap-8 border-b border-white/10 pb-10 md:flex-row md:items-end">
            <div>
              <BrandChip>Reviews</BrandChip>
              <h2 className="display mt-5 text-5xl text-white md:text-7xl">
                <AnimatedCounter value={4.95} decimals={2} />
                <span className="text-white/40"> / 5</span>
              </h2>
              <p className="mt-2 text-sm tracking-[0.2em] text-white/50 uppercase">
                342 reviews · Excellent
              </p>
            </div>
            <div className="flex items-center gap-2 text-brand">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="size-5 fill-brand" />
              ))}
            </div>
          </div>
        </Reveal>

        <Carousel
          opts={{ loop: true, align: "start" }}
          plugins={[plugin.current]}
          className="mt-10"
        >
          <CarouselContent>
            {REVIEWS.map((review) => (
              <CarouselItem
                key={review.name + review.date}
                className="md:basis-1/2 lg:basis-1/2"
              >
                <ReviewCard review={review} />
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="mt-8 flex gap-3">
            <CarouselPrevious className="static" />
            <CarouselNext className="static" />
          </div>
        </Carousel>
      </div>
    </section>
  )
}
