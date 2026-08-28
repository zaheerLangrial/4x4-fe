import { AboutSection } from "@/components/AboutSection"
import { CTASection } from "@/components/CTASection"
import { PageHero } from "@/components/PageHero"
import { ProcessTimeline } from "@/components/ProcessTimeline"
import { WhyChooseUs } from "@/components/WhyChooseUs"
import { IMAGES } from "@/lib/site"

export function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="Specialists who know your 4x4 inside out."
        subtitle="Director-checked workmanship, genuine OEM parts, and 30+ years of Land Rover and Range Rover knowledge in Barking."
        image={IMAGES.about}
      />
      <AboutSection ctaHref="/contact" ctaLabel="Get in touch" />
      <WhyChooseUs />
      <ProcessTimeline />
      <CTASection />
    </>
  )
}
