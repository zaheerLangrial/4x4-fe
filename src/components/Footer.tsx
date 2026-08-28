import { ArrowUpRight } from "lucide-react"
import type { ReactNode } from "react"
import { Link } from "react-router-dom"
import { Logo } from "@/components/Logo"
import { FacebookIcon, InstagramIcon } from "@/components/SocialIcons"
import { NAV_LINKS, SITE } from "@/lib/site"

const SERVICE_LINKS = [
  { label: "Engine Rebuilds", href: "/services" },
  { label: "Servicing", href: "/services" },
  { label: "Repairs", href: "/services" },
  { label: "Diagnostics", href: "/services" },
  { label: "MOT", href: "/services" },
  { label: "Air Conditioning", href: "/services" },
]

export function Footer() {
  const companyLinks = NAV_LINKS.filter((l) =>
    ["Home", "About Us", "Gallery", "News", "Contact Us"].includes(l.label),
  )

  return (
    <footer className="bg-ink text-white">
      <div className="h-px w-full bg-linear-to-r from-transparent via-brand to-transparent" />
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 md:grid-cols-2 md:px-8 lg:grid-cols-12 lg:py-20">
        <div className="lg:col-span-4">
          <Link to="/" aria-label="4X4 Engine Rebuilds home">
            <Logo />
          </Link>
          <p className="mt-6 max-w-xs text-sm leading-relaxed text-white/55">
            Land Rover & Range Rover 4×4 Engine Specialists.
          </p>
        </div>

        <div className="lg:col-span-2">
          <p className="text-[11px] font-semibold tracking-[0.28em] text-brand uppercase">
            Company
          </p>
          <ul className="mt-5 space-y-3">
            {companyLinks.map((link) => (
              <li key={link.href}>
                <Link
                  to={link.href}
                  className="text-sm text-white/70 transition-colors hover:text-brand"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-3">
          <p className="text-[11px] font-semibold tracking-[0.28em] text-brand uppercase">
            Services
          </p>
          <ul className="mt-5 space-y-3">
            {SERVICE_LINKS.map((link) => (
              <li key={link.label}>
                <Link
                  to={link.href}
                  className="text-sm text-white/70 transition-colors hover:text-brand"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-3">
          <p className="text-[11px] font-semibold tracking-[0.28em] text-brand uppercase">
            Contact
          </p>
          <ul className="mt-5 space-y-3 text-sm text-white/70">
            {SITE.phones.map((phone) => (
              <li key={phone.tel}>
                <a
                  href={`tel:${phone.tel}`}
                  className="transition-colors hover:text-brand"
                >
                  {phone.display}
                </a>
              </li>
            ))}
            <li>{SITE.addressFull}</li>
          </ul>
          <div className="mt-5 flex gap-3">
            <Social href={SITE.facebook} label="Facebook">
              <FacebookIcon className="size-4" />
            </Social>
            <Social href={SITE.instagram} label="Instagram">
              <InstagramIcon className="size-4" />
            </Social>
          </div>
        </div>
      </div>

      <div className="border-t border-white/8">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-5 py-6 text-xs text-white/45 md:flex-row md:items-center md:justify-between md:px-8">
          <p>© 2024–2026 All Rights Reserved. 4X4 Engine Rebuilds</p>
          <a
            href={SITE.partner.href}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1 text-white/70 transition-colors hover:text-brand"
          >
            Visit our partners: {SITE.partner.name}
            <ArrowUpRight className="size-3.5" />
          </a>
        </div>
      </div>
    </footer>
  )
}

function Social({
  href,
  label,
  children,
}: {
  href: string
  label: string
  children: ReactNode
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
      className="inline-flex size-10 items-center justify-center border border-white/15 text-white/80 transition-colors hover:border-brand hover:text-brand"
    >
      {children}
    </a>
  )
}
