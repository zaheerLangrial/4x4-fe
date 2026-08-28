import { useState, type FormEvent } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

const PLACEHOLDERS = {
  name: "e.g. James Walker",
  email: "e.g. james@email.com",
  phone: "e.g. 07700 900 000",
  registration: "e.g. AB12 CDE",
  message: "Tell us the model, the fault, and how we can help…",
}

export function ContactForm() {
  const [sent, setSent] = useState(false)

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setSent(true)
  }

  if (sent) {
    return (
      <div className="border border-brand/40 bg-brand/10 p-8">
        <p className="display text-3xl text-white">Enquiry sent.</p>
        <p className="mt-3 text-white/70">
          Thank you. A specialist will be in touch shortly.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <Field
          label="Name"
          name="name"
          placeholder={PLACEHOLDERS.name}
          required
        />
        <Field
          label="Email"
          name="email"
          type="email"
          placeholder={PLACEHOLDERS.email}
          required
        />
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <Field
          label="Phone"
          name="phone"
          type="tel"
          placeholder={PLACEHOLDERS.phone}
          required
        />
        <Field
          label="Vehicle Registration"
          name="registration"
          placeholder={PLACEHOLDERS.registration}
          className="display tracking-[0.16em] uppercase"
        />
      </div>
      <div className="grid gap-2">
        <Label htmlFor="message">Message</Label>
        <Textarea
          id="message"
          name="message"
          required
          placeholder={PLACEHOLDERS.message}
        />
      </div>
      <Button type="submit" className="mt-2 w-full sm:w-auto">
        Send enquiry
      </Button>
    </form>
  )
}

function Field({
  label,
  name,
  type = "text",
  required,
  className,
  placeholder,
}: {
  label: string
  name: string
  type?: string
  required?: boolean
  className?: string
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
        className={className}
        placeholder={placeholder}
      />
    </div>
  )
}
