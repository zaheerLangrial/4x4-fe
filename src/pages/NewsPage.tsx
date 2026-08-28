import { Link } from "react-router-dom"
import { PageHero } from "@/components/PageHero"
import { Reveal } from "@/components/Reveal"
import { TiltCard } from "@/components/TiltCard"
import { ARTICLES } from "@/data/news"
import { IMAGES } from "@/lib/site"

export function NewsPage() {
  return (
    <>
      <PageHero
        eyebrow="News"
        title="From the workshop floor."
        subtitle="Recent rebuilds, timing failures, SVR work and the jobs that come through Barking."
        image={IMAGES.workshop}
      />
      <section className="bg-ink py-20 md:py-28">
        <div className="mx-auto grid max-w-7xl gap-6 px-5 md:grid-cols-3 md:px-8">
          {ARTICLES.map((article, index) => (
            <Reveal key={article.id} delay={index * 0.08}>
              <TiltCard>
                <Link
                  to={`/news/${article.id}`}
                  className="group flex h-full flex-col border border-white/10 bg-steel transition-colors hover:border-brand"
                >
                  <div className="overflow-hidden">
                    <img
                      src={article.image}
                      alt=""
                      className="aspect-16/10 w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <p className="text-[10px] font-semibold tracking-[0.24em] text-brand uppercase">
                      {article.date} · {article.category}
                    </p>
                    <h2 className="display mt-3 text-2xl leading-tight text-white">
                      {article.title}
                    </h2>
                    <p className="mt-3 flex-1 text-sm leading-relaxed text-white/55">
                      {article.excerpt}
                    </p>
                    <span className="mt-6 text-[11px] font-semibold tracking-[0.2em] text-white/70 uppercase group-hover:text-brand">
                      Read article
                    </span>
                  </div>
                </Link>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  )
}
