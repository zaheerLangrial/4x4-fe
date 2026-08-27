import {
  AirVent,
  Car,
  Cog,
  Cpu,
  ShieldCheck,
  Wrench,
  type LucideIcon,
} from "lucide-react"
import { IMAGES } from "@/lib/site"

export type Service = {
  id: string
  number: string
  title: string
  description: string
  icon: LucideIcon
  image: string
}

export const SERVICES: Service[] = [
  {
    id: "servicing",
    number: "01",
    title: "Servicing & Repairs",
    description: "We service and repair all Range Rover and Land Rover vehicles.",
    icon: Wrench,
    image: IMAGES.workshop,
  },
  {
    id: "rebuilds",
    number: "02",
    title: "Engine Rebuilds",
    description: "Professional engine rebuilding and specialist engine repair.",
    icon: Cog,
    image: IMAGES.engine,
  },
  {
    id: "diagnostics",
    number: "03",
    title: "Electrical & Diagnostics",
    description:
      "We use the latest diagnostic equipment to ensure efficient diagnosis and repairs.",
    icon: Cpu,
    image: IMAGES.diagnostics,
  },
  {
    id: "mot",
    number: "04",
    title: "MOT Prep & Tests",
    description: "MOT preparation work with MOT testing arranged.",
    icon: ShieldCheck,
    image: IMAGES.tools,
  },
  {
    id: "ac",
    number: "05",
    title: "Air Conditioning",
    description: "Our technicians can diagnose and fix A/C problems.",
    icon: AirVent,
    image: IMAGES.engineBay,
  },
  {
    id: "classic",
    number: "06",
    title: "Classic & Older Vehicles",
    description:
      "We have extensive experience working on older and classic Land Rover vehicles.",
    icon: Car,
    image: IMAGES.classic,
  },
]
