import { ServiceCard } from "@/components/ServiceCard"
import { SectionHeading } from "@/components/SectionHeading"
import { Reveal } from "@/components/Reveal"
import { SERVICES } from "@/data/services"

export function ServicesSection() {
  return (
    <section id="services" className="bg-graphite py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="What we do"
            title="Our Services"
            subtitle="Specialist care for your Land Rover & Range Rover"
          />
        </Reveal>
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
