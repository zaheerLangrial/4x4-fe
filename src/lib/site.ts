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

export function unsplash(id: string, width = 1800) {
  return `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${width}&q=80`
}

export const IMAGES = {
  hero: unsplash("photo-1617531653332-bd46c24f2068", 2400),
  about: unsplash("photo-1487754180451-c456f719a1fc", 1600),
  engine: unsplash("photo-1486262715619-67b85e0b08d3", 2000),
  cta: unsplash("photo-1617531653332-bd46c24f2068", 2200),
  defender: unsplash("photo-1519641471654-76ce0107ad1b", 1600),
  rangeRover: unsplash("photo-1606016159991-dfe4f2746ad5", 1600),
  workshop: unsplash("photo-1619642751034-765dfdf7c58e", 1600),
  diagnostics: unsplash("photo-1487754180451-c456f719a1fc", 1400),
  tools: unsplash("photo-1625047509168-a7026f36de04", 1400),
  classic: unsplash("photo-1533473359331-0138ec0b4826", 1400),
  engineBay: unsplash("photo-1492144534655-ae79c964c9d7", 1400),
  suvNight: unsplash("photo-1549317661-bd32c8ce0db2", 1600),
}
