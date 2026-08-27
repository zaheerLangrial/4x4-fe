import logo from "@/assets/4x4-logo.png"
import about from "@/assets/about.jpg"
import cta from "@/assets/cta.jpg"
import engine from "@/assets/engine.jpg"
import gClassic from "@/assets/g-classic.jpg"
import gDiag from "@/assets/g-diag.jpg"
import gLandrover from "@/assets/g-landrover.jpg"
import gParts from "@/assets/g-parts.jpg"
import gRebuild from "@/assets/g-rebuild.jpg"
import gWorkshop from "@/assets/g-workshop.jpg"
import hero from "@/assets/hero.jpg"

export const SITE = {
  name: "4X4 Engine Rebuilds",
  phone: "0203 542 0100",
  phoneTel: "02035420100",
  phones: [
    { label: "Workshop", display: "0203 542 0100", tel: "02035420100" },
    { label: "Mobile", display: "07842 045191", tel: "07842045191" },
    { label: "Mobile", display: "07365 342876", tel: "07365342876" },
  ],
  whatsapp: "447842045191",
  email: "sales@4x4enginerebuilds.co.uk",
  address: "27 Thames Road, Barking, IG11 0ND",
  addressFull: "Unit 16, Riverside Industrial Estate, 27 Thames Road, Barking, IG11 0ND",
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=Unit+16+Riverside+Industrial+Estate+27+Thames+Road+Barking+IG11+0ND",
  facebook: "https://www.facebook.com/4x4enginerebuilds",
  instagram: "https://www.instagram.com/4x4enginerebuilds",
  partner: {
    name: "Range Rover World",
    href: "https://www.rangeroverworld.co.uk",
  },
} as const

export const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Gallery", href: "#gallery" },
  { label: "Reviews", href: "#reviews" },
  { label: "News", href: "#news" },
  { label: "Contact Us", href: "#contact" },
] as const

export const IMAGES = {
  logo,
  hero,
  about,
  engine,
  cta,
  defender: gLandrover,
  rangeRover: hero,
  workshop: gWorkshop,
  diagnostics: gDiag,
  tools: gParts,
  classic: gClassic,
  engineBay: engine,
  rebuild: gRebuild,
  parts: gParts,
}
