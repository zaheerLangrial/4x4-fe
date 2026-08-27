import { MapPin, Phone, MessageCircle } from "lucide-react"
import { useState, type FormEvent } from "react"
import { Reveal } from "@/components/Reveal"
import { FacebookIcon, InstagramIcon } from "@/components/SocialIcons"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { SITE } from "@/lib/site"

export function ContactSection() {
  const [sent, setSent] = useState(false)

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setSent(true)
  }

  return (
    <section id="contact" className="bg-ink py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Reveal>
          <p className="text-[11px] font-semibold tracking-[0.32em] text-brand uppercase">
            Contact
          </p>
          <h2 className="display mt-4 text-4xl text-white md:text-6xl">
            Get in touch
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-10 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            {sent ? (
              <div className="border border-brand/40 bg-brand/10 p-8">
                <p className="display text-3xl text-white">Enquiry sent.</p>
                <p className="mt-3 text-white/70">
                  Thank you. A specialist will be in touch shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="grid gap-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <Field label="Name" name="name" required />
                  <Field label="Email" name="email" type="email" required />
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <Field label="Phone" name="phone" type="tel" required />
                  <Field
                    label="Vehicle Registration"
                    name="registration"
                    className="display tracking-[0.16em] uppercase"
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea id="message" name="message" required />
                </div>
                <Button type="submit" className="mt-2 w-full sm:w-auto">
                  Send enquiry
                </Button>
              </form>
            )}
          </Reveal>

          <Reveal delay={0.1}>
            <div className="space-y-8">
              <div>
                <p className="text-[11px] font-semibold tracking-[0.24em] text-white/40 uppercase">
                  Phone
                </p>
                <div className="mt-3 space-y-2">
                  {SITE.phones.map((phone) => (
                    <a
                      key={phone.tel}
                      href={`tel:${phone.tel}`}
                      className="flex items-center gap-3 text-lg text-white transition-colors hover:text-brand"
                    >
                      <Phone className="size-4 text-brand" />
                      {phone.display}
                    </a>
                  ))}
                </div>
              </div>

              <div>
                <p className="text-[11px] font-semibold tracking-[0.24em] text-white/40 uppercase">
                  Address
                </p>
                <p className="mt-3 flex items-start gap-3 text-white/80">
                  <MapPin className="mt-1 size-4 shrink-0 text-brand" />
                  {SITE.addressFull}
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                <Button asChild>
                  <a
                    href={`https://wa.me/${SITE.whatsapp}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <MessageCircle className="size-4" />
                    WhatsApp
                  </a>
                </Button>
                <Button variant="outline" asChild>
                  <a href={SITE.facebook} target="_blank" rel="noreferrer">
                    <FacebookIcon className="size-4" />
                    Facebook
                  </a>
                </Button>
                <Button variant="outline" asChild>
                  <a href={SITE.instagram} target="_blank" rel="noreferrer">
                    <InstagramIcon className="size-4" />
                    Instagram
                  </a>
                </Button>
              </div>

              <a
                href={SITE.mapsUrl}
                target="_blank"
                rel="noreferrer"
                className="relative block overflow-hidden border border-white/10"
              >
                <div className="flex h-52 items-end bg-[linear-gradient(135deg,#111_0%,#0a0a0a_40%,#1b932922_100%)] p-6">
                  <div className="hero-grid absolute inset-0 opacity-30" />
                  <div className="relative">
                    <p className="display text-2xl text-white">Workshop map</p>
                    <p className="mt-1 text-sm text-white/55">
                      {SITE.address} — open in Google Maps
                    </p>
                  </div>
                </div>
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

function Field({
  label,
  name,
  type = "text",
  required,
  className,
}: {
  label: string
  name: string
  type?: string
  required?: boolean
  className?: string
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
      />
    </div>
  )
}
