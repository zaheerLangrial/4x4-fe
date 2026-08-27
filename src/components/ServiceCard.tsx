import { motion } from "framer-motion"
import { ArrowUpRight } from "lucide-react"
import { useQuote } from "@/context/QuoteContext"
import type { Service } from "@/data/services"
import { cn } from "@/lib/utils"

export function ServiceCard({ service, index }: { service: Service; index: number }) {
  const Icon = service.icon
  const { openQuote } = useQuote()

  return (
    <motion.article
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -8 }}
      role="button"
      tabIndex={0}
      onClick={() => openQuote()}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault()
          openQuote()
        }
      }}
      className="group relative flex h-full cursor-pointer flex-col overflow-hidden border border-white/10 bg-steel text-left transition-colors duration-500 hover:border-brand"
    >
      <div className="relative h-48 overflow-hidden">
        <img
          src={service.image}
          alt=""
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-linear-to-t from-steel via-black/20 to-transparent" />
        <div className="absolute inset-0 bg-brand/0 transition-colors duration-500 group-hover:bg-brand/20" />
        <span className="display absolute top-4 left-4 text-4xl text-white/35">
          {service.number}
        </span>
        <span className="absolute top-4 right-4 flex size-10 items-center justify-center border border-white/20 bg-black/40 text-white backdrop-blur-sm">
          <Icon className="size-4" />
        </span>
      </div>
      <div className="flex flex-1 flex-col p-6">
        <h3 className="display text-2xl text-white">{service.title}</h3>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-white/55">
          {service.description}
        </p>
        <div
          className={cn(
            "mt-6 inline-flex items-center gap-2 text-[11px] font-semibold tracking-[0.2em] text-white/70 uppercase transition-colors group-hover:text-brand",
          )}
        >
          Enquire
          <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
        </div>
      </div>
      <div className="pointer-events-none absolute bottom-0 left-0 h-0.5 w-0 bg-brand transition-all duration-500 group-hover:w-full" />
    </motion.article>
  )
}
