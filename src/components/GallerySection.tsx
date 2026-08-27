import { useMemo, useState } from "react"
import { Reveal } from "@/components/Reveal"
import { SectionHeading } from "@/components/SectionHeading"
import {
  Dialog,
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog"
import {
  GALLERY,
  GALLERY_CATEGORIES,
  type GalleryCategory,
  type GalleryItem,
} from "@/data/gallery"
import { cn } from "@/lib/utils"

export function GallerySection() {
  const [filter, setFilter] = useState<GalleryCategory>("All")
  const [active, setActive] = useState<GalleryItem | null>(null)

  const items = useMemo(
    () =>
      filter === "All"
        ? GALLERY
        : GALLERY.filter((item) => item.category === filter),
    [filter],
  )

  return (
    <section id="gallery" className="bg-ink py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Gallery"
            title="Our Work"
            subtitle="A look inside the workshop"
          />
        </Reveal>

        <div className="mt-10 flex gap-2 overflow-x-auto scrollbar-none pb-2">
          {GALLERY_CATEGORIES.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setFilter(cat)}
              className={cn(
                "shrink-0 border px-4 py-2 text-[10px] font-semibold tracking-[0.2em] uppercase transition-colors",
                filter === cat
                  ? "border-brand bg-brand text-white"
                  : "border-white/15 text-white/60 hover:border-brand hover:text-white",
              )}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="mt-8 columns-2 gap-3 md:columns-3 lg:gap-4">
          {items.map((item, index) => (
            <Reveal key={item.id} delay={index * 0.03} className="mb-3 break-inside-avoid lg:mb-4">
              <button
                type="button"
                onClick={() => setActive(item)}
                className="group relative block w-full overflow-hidden"
              >
                <img
                  src={item.src}
                  alt={item.alt}
                  className={cn(
                    "w-full object-cover transition-transform duration-700 group-hover:scale-110",
                    item.tall ? "aspect-[3/4]" : "aspect-[4/3]",
                  )}
                />
                <span className="absolute inset-0 bg-brand/0 transition-colors duration-500 group-hover:bg-brand/35" />
                <span className="absolute inset-x-0 bottom-0 translate-y-3 p-4 text-left text-[10px] font-semibold tracking-[0.2em] text-white uppercase opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                  {item.category}
                </span>
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      <Dialog open={!!active} onOpenChange={(open) => !open && setActive(null)}>
        <DialogContent className="max-w-5xl border-white/10 bg-ink p-0">
          <DialogTitle className="sr-only">{active?.alt}</DialogTitle>
          {active ? (
            <img
              src={active.src}
              alt={active.alt}
              className="max-h-[80vh] w-full object-contain"
            />
          ) : null}
        </DialogContent>
      </Dialog>
    </section>
  )
}
