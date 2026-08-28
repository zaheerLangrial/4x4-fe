import { motion, useScroll, useTransform } from "framer-motion"
import { Link } from "react-router-dom"
import { BrandChip } from "@/components/BrandChip"

export function PageHero({
  eyebrow,
  title,
  subtitle,
  image,
}: {
  eyebrow: string
  title: string
  subtitle?: string
  image: string
}) {
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 420], [0, 90])
  const scale = useTransform(scrollY, [0, 420], [1.08, 1.18])

  return (
    <section className="relative isolate min-h-[58svh] overflow-hidden scanlines md:min-h-[68svh]">
      <motion.img
        src={image}
        alt=""
        style={{ y, scale }}
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-linear-to-r from-black/82 via-black/50 to-black/20" />
      <div className="absolute inset-0 bg-linear-to-t from-ink via-transparent to-black/35" />
      <div className="hero-grid pointer-events-none absolute inset-0 opacity-25" />

      <div className="relative z-10 mx-auto flex min-h-[58svh] max-w-7xl flex-col justify-end px-5 pb-16 pt-32 md:min-h-[68svh] md:px-8 md:pb-20">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-5 text-[10px] tracking-[0.22em] text-white/45 uppercase"
        >
          <Link to="/" className="transition-colors hover:text-brand">
            Home
          </Link>
          <span className="mx-2 text-brand">/</span>
          {eyebrow}
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 16, rotateX: 18 }}
          animate={{ opacity: 1, y: 0, rotateX: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          style={{ transformPerspective: 900 }}
        >
          <BrandChip>{eyebrow}</BrandChip>
          <h1 className="display mt-5 max-w-4xl text-5xl leading-[0.88] text-white md:text-7xl lg:text-8xl">
            {title}
          </h1>
          {subtitle ? (
            <p className="mt-5 max-w-xl text-base leading-relaxed text-white/65 md:text-lg">
              {subtitle}
            </p>
          ) : null}
        </motion.div>
      </div>
    </section>
  )
}
