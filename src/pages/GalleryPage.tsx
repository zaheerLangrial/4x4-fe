import { CTASection } from "@/components/CTASection"
import { GallerySection } from "@/components/GallerySection"
import { PageHero } from "@/components/PageHero"
import { IMAGES } from "@/lib/site"

export function GalleryPage() {
  return (
    <>
      <PageHero
        eyebrow="Gallery"
        title="A look inside the workshop."
        subtitle="Rebuilds, diagnostics and vehicles ready for the road — photographed on the bench in Barking."
        image={IMAGES.rebuild}
      />
      <GallerySection showHeading={false} />
      <CTASection />
    </>
  )
}
