import { IMAGES } from "@/lib/site"

export type GalleryCategory =
  | "All"
  | "Engine Rebuilds"
  | "Workshop"
  | "Land Rover"
  | "Range Rover"
  | "Before & After"

export type GalleryItem = {
  id: string
  src: string
  alt: string
  category: Exclude<GalleryCategory, "All">
  tall?: boolean
}

export const GALLERY_CATEGORIES: GalleryCategory[] = [
  "All",
  "Engine Rebuilds",
  "Workshop",
  "Land Rover",
  "Range Rover",
  "Before & After",
]

export const GALLERY: GalleryItem[] = [
  {
    id: "g1",
    src: IMAGES.rebuild,
    alt: "Precision engine rebuild on the bench",
    category: "Engine Rebuilds",
    tall: true,
  },
  {
    id: "g2",
    src: IMAGES.hero,
    alt: "Range Rover after specialist rebuild",
    category: "Range Rover",
  },
  {
    id: "g3",
    src: IMAGES.workshop,
    alt: "Technician at work in the Barking workshop",
    category: "Workshop",
  },
  {
    id: "g4",
    src: IMAGES.defender,
    alt: "Land Rover Defender specialist care",
    category: "Land Rover",
    tall: true,
  },
  {
    id: "g5",
    src: IMAGES.engine,
    alt: "Engine internals during a specialist rebuild",
    category: "Engine Rebuilds",
  },
  {
    id: "g6",
    src: IMAGES.parts,
    alt: "Genuine OEM parts staged for a rebuild",
    category: "Before & After",
  },
  {
    id: "g7",
    src: IMAGES.classic,
    alt: "Classic Land Rover in for restoration work",
    category: "Land Rover",
  },
  {
    id: "g8",
    src: IMAGES.about,
    alt: "Specialist technician in the workshop",
    category: "Workshop",
    tall: true,
  },
  {
    id: "g9",
    src: IMAGES.diagnostics,
    alt: "Diagnostics and electrical inspection",
    category: "Before & After",
  },
  {
    id: "g10",
    src: IMAGES.cta,
    alt: "Vehicle ready for collection after rebuild",
    category: "Range Rover",
  },
]
