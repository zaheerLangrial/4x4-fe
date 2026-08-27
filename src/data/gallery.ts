import { IMAGES, unsplash } from "@/lib/site"

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
    src: IMAGES.engine,
    alt: "Precision engine rebuild on the bench",
    category: "Engine Rebuilds",
    tall: true,
  },
  {
    id: "g2",
    src: IMAGES.rangeRover,
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
    src: unsplash("photo-1612825173281-9a193378527e", 1400),
    alt: "Range Rover ready for collection",
    category: "Range Rover",
  },
  {
    id: "g6",
    src: IMAGES.tools,
    alt: "Engine strip-down in progress",
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
    alt: "Workshop bay and tooling",
    category: "Workshop",
    tall: true,
  },
  {
    id: "g9",
    src: IMAGES.engineBay,
    alt: "Completed engine bay after rebuild",
    category: "Before & After",
  },
  {
    id: "g10",
    src: unsplash("photo-1609521263047-f8f205293f24", 1400),
    alt: "Land Rover on the road after rebuild",
    category: "Engine Rebuilds",
  },
]
