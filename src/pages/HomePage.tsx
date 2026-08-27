import { AboutSection } from "@/components/AboutSection"
import { ContactSection } from "@/components/ContactSection"
import { CTASection } from "@/components/CTASection"
import { EngineFeature } from "@/components/EngineFeature"
import { Footer } from "@/components/Footer"
import { GallerySection } from "@/components/GallerySection"
import { Hero } from "@/components/Hero"
import { Navbar } from "@/components/Navbar"
import { NewsSection } from "@/components/NewsSection"
import { ProcessTimeline } from "@/components/ProcessTimeline"
import { QuoteDialog } from "@/components/QuoteDialog"
import { ReviewsSection } from "@/components/ReviewsSection"
import { ServicesSection } from "@/components/ServicesSection"
import { TrustBar } from "@/components/TrustBar"
import { WhyChooseUs } from "@/components/WhyChooseUs"

export function HomePage() {
  return (
    <div className="bg-ink">
      <Navbar />
      <main>
        <Hero />
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
      </main>
      <Footer />
      <QuoteDialog />
    </div>
  )
}
