import { IMAGES } from "@/lib/site"

export type Article = {
  id: string
  date: string
  category: string
  title: string
  excerpt: string
  image: string
}

export const ARTICLES: Article[] = [
  {
    id: "discovery-sport-timing",
    date: "05 Sep 2025",
    category: "Workshop",
    title: "Discovery Sport in for timing failure and turbo repair",
    excerpt:
      "A Land Rover Discovery Sport arrived with timing failure and turbo damage. Our technicians diagnosed the root cause and rebuilt the powertrain with genuine OEM parts.",
    image: IMAGES.workshop,
  },
  {
    id: "svr-ready",
    date: "21 Aug 2025",
    category: "Range Rover",
    title: "Range Rover SVR engines rebuilt and ready for the road",
    excerpt:
      "High-performance SVR powertrains demand specialist care. Two rebuilds completed, dyno-tested and signed off by the director before collection.",
    image: IMAGES.hero,
  },
  {
    id: "ingenium-seizure",
    date: "14 Aug 2025",
    category: "Engine Rebuilds",
    title: "Discovery 5 Ingenium seized engine — rebuilt, not replaced",
    excerpt:
      "We strip, machine and rebuild your original engine so V5 identity stays intact. This Ingenium 2.0D is back on the road with up to 24 months warranty.",
    image: IMAGES.engine,
  },
]
