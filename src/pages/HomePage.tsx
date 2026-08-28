import { AboutSection } from "@/components/AboutSection"
import { ContactSection } from "@/components/ContactSection"
import { CTASection } from "@/components/CTASection"
import { EngineFeature } from "@/components/EngineFeature"
import { GallerySection } from "@/components/GallerySection"
import { Hero } from "@/components/Hero"
import { Marquee } from "@/components/Marquee"
import { NewsSection } from "@/components/NewsSection"
import { ProcessTimeline } from "@/components/ProcessTimeline"
import { ReviewsSection } from "@/components/ReviewsSection"
import { ServicesSection } from "@/components/ServicesSection"
import { TrustBar } from "@/components/TrustBar"
import { WhyChooseUs } from "@/components/WhyChooseUs"

export function HomePage() {
  return (
    <>
      <Hero />
      <Marquee />
      <TrustBar />
      <AboutSection />
      <ServicesSection />
      <EngineFeature />
      <ProcessTimeline />
      <WhyChooseUs />
      <ReviewsSection />
      <GallerySection />
      <CTASection />
      <NewsSection />
      <ContactSection />
    </>
  )
}
