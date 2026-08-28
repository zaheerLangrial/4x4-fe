import { CTASection } from "@/components/CTASection"
import { PageHero } from "@/components/PageHero"
import { ReviewsSection } from "@/components/ReviewsSection"
import { IMAGES } from "@/lib/site"

export function ReviewsPage() {
  return (
    <>
      <PageHero
        eyebrow="Reviews"
        title="4.95 from 342 real customers."
        subtitle="Honest quotes from people who trusted us with their Land Rover or Range Rover."
        image={IMAGES.cta}
      />
      <ReviewsSection />
      <CTASection />
    </>
  )
}
