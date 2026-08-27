import { createContext, useContext, useMemo, useState, type ReactNode } from "react"

type QuoteContextValue = {
  open: boolean
  registration: string
  openQuote: (reg?: string) => void
  closeQuote: () => void
  setRegistration: (value: string) => void
}

const QuoteContext = createContext<QuoteContextValue | null>(null)

export function QuoteProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false)
  const [registration, setRegistration] = useState("")

  const value = useMemo<QuoteContextValue>(
    () => ({
      open,
      registration,
      openQuote: (reg) => {
        if (reg) setRegistration(reg)
        setOpen(true)
      },
      closeQuote: () => setOpen(false),
      setRegistration,
    }),
    [open, registration],
  )

  return <QuoteContext.Provider value={value}>{children}</QuoteContext.Provider>
}

export function useQuote() {
  const ctx = useContext(QuoteContext)
  if (!ctx) throw new Error("useQuote must be used within QuoteProvider")
  return ctx
}
