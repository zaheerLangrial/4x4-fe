import { ArrowUpRight } from "lucide-react"
import { Reveal } from "@/components/Reveal"
import { SectionHeading } from "@/components/SectionHeading"
import { ARTICLES } from "@/data/news"

export function NewsSection() {
  return (
    <section id="news" className="bg-graphite py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Reveal>
          <SectionHeading eyebrow="Journal" title="Latest News" />
        </Reveal>
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {ARTICLES.map((article, index) => (
            <Reveal key={article.id} delay={index * 0.08}>
              <article className="group flex h-full flex-col border border-white/10 bg-steel">
                <div className="overflow-hidden">
                  <img
                    src={article.image}
                    alt=""
                    className="aspect-[16/10] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <p className="text-[10px] font-semibold tracking-[0.24em] text-brand uppercase">
                    {article.date} · {article.category}
                  </p>
                  <h3 className="display mt-3 text-2xl leading-tight text-white">
                    {article.title}
                  </h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-white/55">
                    {article.excerpt}
                  </p>
                  <a
                    href="#contact"
                    className="mt-6 inline-flex items-center gap-2 text-[11px] font-semibold tracking-[0.2em] text-white/70 uppercase transition-colors group-hover:text-brand"
                  >
                    Read more
                    <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
