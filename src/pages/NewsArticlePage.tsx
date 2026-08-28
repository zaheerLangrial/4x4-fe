import { Link, Navigate, useParams } from "react-router-dom"
import { BrandChip } from "@/components/BrandChip"
import { Button } from "@/components/ui/button"
import { ARTICLES } from "@/data/news"

export function NewsArticlePage() {
  const { id } = useParams()
  const article = ARTICLES.find((item) => item.id === id)

  if (!article) {
    return <Navigate to="/news" replace />
  }

  return (
    <article className="bg-ink">
      <div className="relative isolate min-h-[48svh] overflow-hidden">
        <img
          src={article.image}
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-t from-ink via-black/50 to-black/40" />
        <div className="relative z-10 mx-auto flex min-h-[48svh] max-w-3xl flex-col justify-end px-5 pb-14 pt-32 md:px-8">
          <p className="mb-4 text-[10px] tracking-[0.22em] text-white/45 uppercase">
            <Link to="/" className="hover:text-brand">
              Home
            </Link>
            <span className="mx-2 text-brand">/</span>
            <Link to="/news" className="hover:text-brand">
              News
            </Link>
          </p>
          <BrandChip>{article.category}</BrandChip>
          <h1 className="display mt-5 text-4xl leading-[0.95] text-white md:text-6xl">
            {article.title}
          </h1>
          <p className="mt-4 text-sm tracking-[0.18em] text-white/50 uppercase">
            {article.date}
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-3xl space-y-6 px-5 py-16 md:px-8 md:py-24">
        {article.body.map((paragraph) => (
          <p key={paragraph} className="text-base leading-relaxed text-white/70">
            {paragraph}
          </p>
        ))}
        <div className="flex flex-wrap gap-3 pt-6">
          <Button asChild>
            <Link to="/contact">Discuss a similar job</Link>
          </Button>
          <Button variant="outline" asChild>
            <Link to="/news">Back to news</Link>
          </Button>
        </div>
      </div>
    </article>
  )
}
