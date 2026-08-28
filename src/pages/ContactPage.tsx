import { MapPin, MessageCircle, Phone } from "lucide-react"
import { ContactForm } from "@/components/ContactForm"
import { PageHero } from "@/components/PageHero"
import { Reveal } from "@/components/Reveal"
import { FacebookIcon, InstagramIcon } from "@/components/SocialIcons"
import { TiltCard } from "@/components/TiltCard"
import { Button } from "@/components/ui/button"
import { IMAGES, SITE } from "@/lib/site"

export function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact Us"
        title="Get in touch with the workshop."
        subtitle="Call, WhatsApp or send an enquiry. Include your registration if you want a faster quote."
        image={IMAGES.cta}
      />

      <section className="bg-ink py-20 md:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 md:px-8 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <h2 className="display text-4xl text-white md:text-5xl">
              Send an enquiry
            </h2>
            <p className="mt-4 mb-8 max-w-md text-white/60">
              Tell us the vehicle, the fault and the best number to reach you.
              A specialist will come back with a clear next step.
            </p>
            <ContactForm />
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
                  Email
                </p>
                <a
                  href={`mailto:${SITE.email}`}
                  className="mt-3 block text-lg text-white hover:text-brand"
                >
                  {SITE.email}
                </a>
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

              <TiltCard intensity={8}>
                <a
                  href={SITE.mapsUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="relative block overflow-hidden border border-white/10"
                >
                  <div className="relative flex h-64 items-end overflow-hidden bg-ink p-6">
                    <img
                      src={IMAGES.workshop}
                      alt=""
                      className="absolute inset-0 h-full w-full object-cover opacity-45"
                    />
                    <div className="hero-grid absolute inset-0 opacity-30" />
                    <div className="absolute inset-0 bg-linear-to-t from-black via-black/40 to-transparent" />
                    <div className="relative">
                      <p className="display text-2xl text-white">Workshop map</p>
                      <p className="mt-1 text-sm text-white/55">
                        {SITE.address} — open in Google Maps
                      </p>
                    </div>
                  </div>
                </a>
              </TiltCard>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
