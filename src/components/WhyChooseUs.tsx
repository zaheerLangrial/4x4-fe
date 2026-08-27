import {
  BadgePoundSterling,
  Handshake,
  Package,
  Shield,
  Truck,
  Warehouse,
  Wrench,
  Award,
  Layers,
} from "lucide-react"
import { BrandChip } from "@/components/BrandChip"
import { Reveal } from "@/components/Reveal"
import { cn } from "@/lib/utils"

const BENEFITS = [
  {
    title: "Up to 24 Months Warranty",
    copy: "Peace of mind on every rebuild, backed in writing.",
    icon: Shield,
    className: "md:col-span-7 md:row-span-2",
    featured: true,
  },
  {
    title: "Over 30 Years Experience",
    copy: "Specialist Land Rover knowledge, not guesswork.",
    icon: Award,
    className: "md:col-span-5",
  },
  {
    title: "Highly Competitive Pricing",
    copy: "Clear quotes. No dealer theatre.",
    icon: BadgePoundSterling,
    className: "md:col-span-5",
  },
  {
    title: "At Least a Third Cheaper Than Main Dealer Prices",
    copy: "The same genuine parts. A far more honest bill.",
    icon: Layers,
    className: "md:col-span-8",
  },
  {
    title: "Pickup & Delivery Available",
    copy: "Nationwide collection when you cannot drive in.",
    icon: Truck,
    className: "md:col-span-4",
  },
  {
    title: "Genuine OEM Parts & Oil",
    copy: "No pattern shortcuts on critical components.",
    icon: Package,
    className: "md:col-span-4",
  },
  {
    title: "Friendly Personal Service",
    copy: "You deal with the people doing the work.",
    icon: Handshake,
    className: "md:col-span-4",
  },
  {
    title: "Specialist Technicians",
    copy: "Director-checked workmanship on every job.",
    icon: Wrench,
    className: "md:col-span-4",
  },
  {
    title: "Engines In Stock",
    copy: "Faster turnaround when time is against you.",
    icon: Warehouse,
    className: "md:col-span-12 lg:col-span-12",
  },
]

export function WhyChooseUs() {
  return (
    <section className="bg-ink py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Reveal>
          <BrandChip>Why choose us?</BrandChip>
          <h2 className="display mt-6 text-4xl text-white md:text-6xl">
            Expertise you can trust.
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-3 md:grid-cols-12">
          {BENEFITS.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.04} className={item.className}>
              <article
                className={cn(
                  "group h-full border border-white/10 bg-steel p-6 transition-all duration-500 hover:-translate-y-1 hover:border-brand hover:bg-brand/5 hover:shadow-[0_24px_50px_rgba(27,147,41,0.12)]",
                  item.featured && "flex flex-col justify-end md:min-h-[280px] md:p-8",
                )}
              >
                <item.icon className="size-7 text-brand" />
                <h3
                  className={cn(
                    "display mt-5 text-white",
                    item.featured ? "text-3xl md:text-4xl" : "text-xl md:text-2xl",
                  )}
                >
                  {item.title}
                </h3>
                <p className="mt-3 text-sm text-white/55">{item.copy}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
