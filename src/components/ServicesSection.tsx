import { Link } from "react-router-dom"
import { Reveal } from "@/components/Reveal"
import { SectionHeading } from "@/components/SectionHeading"
import { ServiceCard } from "@/components/ServiceCard"
import { Button } from "@/components/ui/button"
import { SERVICES } from "@/data/services"

export function ServicesSection() {
  return (
    <section id="services" className="bg-graphite py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Reveal>
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <SectionHeading
              eyebrow="What we do"
              title="Our Services"
              subtitle="Specialist care for your Land Rover & Range Rover"
            />
            <Button variant="outline" asChild>
              <Link to="/services">All services</Link>
            </Button>
          </div>
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
