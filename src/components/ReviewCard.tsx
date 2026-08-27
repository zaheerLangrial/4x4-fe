import { Star } from "lucide-react"
import type { Review } from "@/data/reviews"
import { cn } from "@/lib/utils"

export function ReviewCard({ review }: { review: Review }) {
  return (
    <article className="flex h-full flex-col border border-white/10 bg-steel p-7 md:p-9">
      <div className="flex items-center gap-1">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            className={cn(
              "size-4",
              i < review.rating ? "fill-brand text-brand" : "text-white/20",
            )}
          />
        ))}
      </div>
      <p className="mt-6 flex-1 text-base leading-relaxed text-white/80">
        “{review.quote}”
      </p>
      <div className="mt-8 border-t border-white/10 pt-5">
        <p className="display text-xl text-white">{review.name}</p>
        <p className="mt-1 text-xs tracking-[0.16em] text-white/40 uppercase">
          {review.vehicle ? `${review.vehicle} · ` : ""}
          {review.date}
        </p>
      </div>
    </article>
  )
}
