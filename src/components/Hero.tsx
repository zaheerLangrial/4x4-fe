import { motion, useMotionValue, useSpring, useTransform } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { useRef, useState, type FormEvent, type MouseEvent } from "react"
import { BrandChip } from "@/components/BrandChip"
import { Button } from "@/components/ui/button"
import { useQuote } from "@/context/QuoteContext"
import { IMAGES } from "@/lib/site"

export function Hero() {
  const { openQuote } = useQuote()
  const [reg, setReg] = useState("")
  const ref = useRef<HTMLElement>(null)
  const mx = useMotionValue(0)
  const my = useMotionValue(0)
  const sx = useSpring(mx, { stiffness: 40, damping: 20 })
  const sy = useSpring(my, { stiffness: 40, damping: 20 })
  const x = useTransform(sx, [-1, 1], ["-2.2%", "2.2%"])
  const y = useTransform(sy, [-1, 1], ["-2.2%", "2.2%"])

  function onMove(event: MouseEvent<HTMLElement>) {
    const rect = ref.current?.getBoundingClientRect()
    if (!rect) return
    mx.set((event.clientX - rect.left) / rect.width * 2 - 1)
    my.set((event.clientY - rect.top) / rect.height * 2 - 1)
  }

  function onProceed(event: FormEvent) {
    event.preventDefault()
    openQuote(reg)
  }

  return (
    <section
      id="home"
      ref={ref}
      onMouseMove={onMove}
      className="relative min-h-[100svh] overflow-hidden scanlines"
    >
      <motion.div
        className="absolute inset-[-4%]"
        style={{ x, y }}
        initial={{ scale: 1.16 }}
        animate={{ scale: 1.04 }}
        transition={{ duration: 7, ease: [0.22, 1, 0.36, 1] }}
      >
        <img
          src={IMAGES.hero}
          alt="Range Rover in the 4X4 Engine Rebuilds workshop"
          className="h-full w-full object-cover object-center"
        />
      </motion.div>

      <div className="absolute inset-0 bg-linear-to-r from-black/72 via-black/38 to-black/12" />
      <div className="absolute inset-0 bg-linear-to-t from-ink via-transparent to-black/30" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(27,147,41,0.22),transparent_42%)]" />
      <div className="hero-grid pointer-events-none absolute inset-0 opacity-30" />

      <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-7xl flex-col justify-end px-5 pb-16 pt-32 md:px-8 lg:flex-row lg:items-end lg:justify-between lg:pb-20">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.12 }}
          >
            <BrandChip>Land Rover & Range Rover Specialists</BrandChip>
          </motion.div>

          <h1 className="display mt-6 text-6xl leading-[0.84] text-white sm:text-8xl lg:text-[8.5rem]">
            <span className="block overflow-hidden">
              <motion.span
                className="block"
                initial={{ y: "110%" }}
                animate={{ y: "0%" }}
                transition={{ duration: 0.85, delay: 0.22, ease: [0.22, 1, 0.36, 1] }}
              >
                Engineered to
              </motion.span>
            </span>
            <span className="block overflow-hidden">
              <motion.span
                className="block text-brand"
                initial={{ y: "110%" }}
                animate={{ y: "0%" }}
                transition={{ duration: 0.85, delay: 0.36, ease: [0.22, 1, 0.36, 1] }}
              >
                perform.
              </motion.span>
            </span>
            <span className="mt-1 block overflow-hidden">
              <motion.span
                className="block"
                initial={{ y: "110%" }}
                animate={{ y: "0%" }}
                transition={{ duration: 0.85, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
              >
                Built to last.
              </motion.span>
            </span>
          </h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.75 }}
            className="mt-6 max-w-lg text-base leading-relaxed text-white/70 md:text-lg"
          >
            Specialist engine rebuilds, servicing and repairs for Land Rover and
            Range Rover vehicles.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.9 }}
            className="mt-8 flex flex-col gap-3 sm:flex-row"
          >
            <Button size="lg" onClick={() => openQuote()}>
              Get an instant quote
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="#services">Explore our services</a>
            </Button>
          </motion.div>
        </div>

        <motion.form
          onSubmit={onProceed}
          initial={{ opacity: 0, y: 48 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 1.05, ease: [0.22, 1, 0.36, 1] }}
          className="animate-glow mt-10 w-full max-w-md border border-brand/45 bg-black/60 p-6 backdrop-blur-xl lg:mt-0"
        >
          <p className="text-[11px] font-semibold tracking-[0.22em] text-white uppercase">
            Please enter your reg to get an instant quote
          </p>
          <div className="mt-4 flex flex-col gap-3 sm:flex-row">
            <input
              value={reg}
              onChange={(e) => setReg(e.target.value.toUpperCase())}
              placeholder="Enter Your Reg No."
              maxLength={8}
              className="display h-14 flex-1 bg-[#F7D117] px-4 text-center text-2xl tracking-[0.22em] text-black outline-none placeholder:text-black/40"
              aria-label="Vehicle registration"
            />
            <Button type="submit" className="h-14 px-6">
              Proceed
              <ArrowRight className="size-4" />
            </Button>
          </div>
        </motion.form>
      </div>
    </section>
  )
}
