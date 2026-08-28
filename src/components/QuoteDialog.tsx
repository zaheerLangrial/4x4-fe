import { useState, type FormEvent } from "react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { useQuote } from "@/context/QuoteContext"

export function QuoteDialog() {
  const { open, closeQuote, registration, setRegistration } = useQuote()
  const [sent, setSent] = useState(false)

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setSent(true)
  }

  return (
    <Dialog
      open={open}
      onOpenChange={(next) => {
        if (!next) {
          closeQuote()
          setSent(false)
        }
      }}
    >
      <DialogContent className="max-w-xl border-brand/30">
        <DialogHeader>
          <p className="text-[10px] font-semibold tracking-[0.28em] text-brand uppercase">
            Instant quote
          </p>
          <DialogTitle>Get a specialist quote</DialogTitle>
          <DialogDescription>
            Enter your details and vehicle registration. A technician will come
            back to you with a clear, no-obligation estimate.
          </DialogDescription>
        </DialogHeader>

        {sent ? (
          <div className="mt-6 border border-brand/40 bg-brand/10 p-6">
            <p className="display text-2xl text-white">Request received.</p>
            <p className="mt-2 text-sm text-white/70">
              Thank you. We will contact you shortly with your quote.
            </p>
          </div>
        ) : (
          <form onSubmit={onSubmit} className="mt-6 grid gap-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <Field
                label="Name"
                name="name"
                placeholder="e.g. James Walker"
                required
              />
              <Field
                label="Email"
                name="email"
                type="email"
                placeholder="e.g. james@email.com"
                required
              />
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <Field
                label="Phone"
                name="phone"
                type="tel"
                placeholder="e.g. 07700 900 000"
                required
              />
              <div className="grid gap-2">
                <Label htmlFor="quote-reg">Vehicle registration</Label>
                <Input
                  id="quote-reg"
                  name="registration"
                  value={registration}
                  onChange={(e) =>
                    setRegistration(e.target.value.toUpperCase())
                  }
                  placeholder="AB12 CDE"
                  className="display tracking-[0.2em]"
                  required
                />
              </div>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="quote-message">How can we help?</Label>
              <Textarea
                id="quote-message"
                name="message"
                placeholder="Engine knocking, warning lights, full rebuild…"
              />
            </div>
            <Button type="submit" className="mt-2 w-full sm:w-auto">
              Request quote
            </Button>
          </form>
        )}
      </DialogContent>
    </Dialog>
  )
}

function Field({
  label,
  name,
  type = "text",
  required,
  placeholder,
}: {
  label: string
  name: string
  type?: string
  required?: boolean
  placeholder?: string
}) {
  return (
    <div className="grid gap-2">
      <Label htmlFor={name}>{label}</Label>
      <Input
        id={name}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
      />
    </div>
  )
}
