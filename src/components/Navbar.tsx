import { AnimatePresence, motion } from "framer-motion"
import { Menu } from "lucide-react"
import { useEffect, useState } from "react"
import { Logo } from "@/components/Logo"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTitle } from "@/components/ui/sheet"
import { useQuote } from "@/context/QuoteContext"
import { NAV_LINKS } from "@/lib/site"
import { cn } from "@/lib/utils"

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const { openQuote } = useQuote()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-40 transition-all duration-500",
        scrolled
          ? "border-b border-white/8 bg-ink/95 backdrop-blur-md"
          : "bg-transparent",
      )}
    >
      <div className="mx-auto flex h-24 max-w-[92rem] items-center justify-between gap-4 px-5 md:px-8">
        <a href="#home" aria-label="4X4 Engine Rebuilds home">
          <Logo />
        </a>

        <nav className="hidden items-center gap-4 xl:gap-7 lg:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="nav-link text-[10px] font-semibold tracking-[0.16em] text-white/80 uppercase transition-colors hover:text-white xl:text-[11px] xl:tracking-[0.2em]"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Button
            className="hidden sm:inline-flex"
            onClick={() => openQuote()}
          >
            Get a quote
          </Button>
          <button
            type="button"
            className="inline-flex size-11 items-center justify-center border border-white/20 text-white lg:hidden"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
          >
            <Menu className="size-5" />
          </button>
        </div>
      </div>

      <Sheet open={open} onOpenChange={setOpen}>
        <SheetContent side="right" className="border-l border-white/10 p-0">
          <SheetTitle className="sr-only">Navigation</SheetTitle>
          <div className="flex h-24 items-center px-6">
            <Logo />
          </div>
          <AnimatePresence>
            {open ? (
              <motion.nav
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex flex-1 flex-col gap-2 px-6 pt-8"
              >
                {NAV_LINKS.map((link, index) => (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    initial={{ opacity: 0, x: 24 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 * index, duration: 0.35 }}
                    className="display border-b border-white/8 py-4 text-3xl text-white"
                  >
                    {link.label}
                  </motion.a>
                ))}
                <Button
                  className="mt-8 w-full"
                  onClick={() => {
                    setOpen(false)
                    openQuote()
                  }}
                >
                  Get a quote
                </Button>
              </motion.nav>
            ) : null}
          </AnimatePresence>
        </SheetContent>
      </Sheet>
    </header>
  )
}
