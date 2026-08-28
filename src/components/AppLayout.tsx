import { AnimatePresence, motion } from "framer-motion"
import { useEffect } from "react"
import { Outlet, useLocation } from "react-router-dom"
import { Footer } from "@/components/Footer"
import { Navbar } from "@/components/Navbar"
import { QuoteDialog } from "@/components/QuoteDialog"

export function AppLayout() {
  const location = useLocation()

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.slice(1)
      const timer = window.setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" })
      }, 480)
      return () => window.clearTimeout(timer)
    }
    window.scrollTo({ top: 0, left: 0, behavior: "auto" })
  }, [location.pathname, location.hash])

  return (
    <div className="bg-ink">
      <Navbar />
      <AnimatePresence mode="wait">
        <motion.main
          key={location.pathname}
          initial={{ opacity: 0, y: 18, rotateX: 6 }}
          animate={{ opacity: 1, y: 0, rotateX: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          style={{ transformPerspective: 1200 }}
        >
          <Outlet />
        </motion.main>
      </AnimatePresence>
      <Footer />
      <QuoteDialog />
    </div>
  )
}
