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
  details: string
  points: string[]
  icon: LucideIcon
  image: string
}

export const SERVICES: Service[] = [
  {
    id: "servicing",
    number: "01",
    title: "Servicing & Repairs",
    description: "We service and repair all Range Rover and Land Rover vehicles.",
    details:
      "Scheduled servicing, wear-and-tear repairs and honest diagnostics for every modern and classic Land Rover in the range. No dealer theatre — just the work your vehicle actually needs.",
    points: [
      "Full and interim services with genuine OEM oil",
      "Brake, suspension and cooling repairs",
      "Director-checked workmanship before handover",
    ],
    icon: Wrench,
    image: IMAGES.workshop,
  },
  {
    id: "rebuilds",
    number: "02",
    title: "Engine Rebuilds",
    description: "Professional engine rebuilding and specialist engine repair.",
    details:
      "We strip, machine and rebuild your original engine so the V5 identity stays intact. From Ingenium seizures to SVR rebuilds, every job is photographed and warrantied.",
    points: [
      "Rebuild your original engine — not a generic swap",
      "Up to 24 months warranty on completed rebuilds",
      "Nationwide collection and delivery available",
    ],
    icon: Cog,
    image: IMAGES.engine,
  },
  {
    id: "diagnostics",
    number: "03",
    title: "Electrical & Diagnostics",
    description:
      "We use the latest diagnostic equipment to ensure efficient diagnosis and repairs.",
    details:
      "Warning lights, intermittent faults and electrical gremlins are diagnosed with specialist Land Rover equipment — then repaired properly, not cleared and sent away.",
    points: [
      "Manufacturer-level diagnostic tools",
      "Wiring, sensors and module faults",
      "Clear report before any work starts",
    ],
    icon: Cpu,
    image: IMAGES.diagnostics,
  },
  {
    id: "mot",
    number: "04",
    title: "MOT Prep & Tests",
    description: "MOT preparation work with MOT testing arranged.",
    details:
      "We prepare the vehicle, fix what will fail, and arrange the test so you are not gambling on the day. Advisories are explained in plain English.",
    points: [
      "Pre-MOT inspection and preparation",
      "Test arranged once the vehicle is ready",
      "No surprise bills for work you did not approve",
    ],
    icon: ShieldCheck,
    image: IMAGES.tools,
  },
  {
    id: "ac",
    number: "05",
    title: "Air Conditioning",
    description: "Our technicians can diagnose and fix A/C problems.",
    details:
      "Weak airflow, warm vents or a compressor that never kicks in — we diagnose the system, recharge correctly and replace failed parts with quality components.",
    points: [
      "Leak detection and system recharge",
      "Compressor, condenser and fan repairs",
      "Climate control diagnostics",
    ],
    icon: AirVent,
    image: IMAGES.engineBay,
  },
  {
    id: "classic",
    number: "06",
    title: "Classic & Older Vehicles",
    description:
      "We have extensive experience working on older and classic Land Rover vehicles.",
    details:
      "Defenders, Discoverys and classic Range Rovers need a different kind of specialist. We have the parts knowledge and the patience older vehicles deserve.",
    points: [
      "Classic Defender and Range Rover experience",
      "Sympathetic repairs that keep character intact",
      "Sourcing of genuine and quality period parts",
    ],
    icon: Car,
    image: IMAGES.classic,
  },
]
