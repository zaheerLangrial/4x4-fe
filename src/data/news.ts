import { IMAGES } from "@/lib/site"

export type Article = {
  id: string
  date: string
  category: string
  title: string
  excerpt: string
  image: string
  body: string[]
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
    body: [
      "This Discovery Sport came in on a recovery truck after a timing failure took the turbo with it. The owner had already been quoted a complete replacement engine by a main dealer.",
      "We stripped the unit, confirmed the root cause, and rebuilt the original engine with genuine OEM parts so the V5 identity stayed intact. Progress photos went to the owner every day.",
      "After professional running-in and a road test, the vehicle was valeted and delivered back — warrantied, quieter, and ready for another decade of family use.",
    ],
  },
  {
    id: "svr-ready",
    date: "21 Aug 2025",
    category: "Range Rover",
    title: "Range Rover SVR engines rebuilt and ready for the road",
    excerpt:
      "High-performance SVR powertrains demand specialist care. Two rebuilds completed, dyno-tested and signed off by the director before collection.",
    image: IMAGES.hero,
    body: [
      "SVR engines are not a job for a general workshop. These two Supercharged V8s arrived with bearing wear and oil-pressure concerns after hard use.",
      "Both units were stripped, measured and rebuilt to specialist tolerances with genuine Land Rover parts. The director signed off each stage before the engines went back in.",
      "Both vehicles left Barking quieter, stronger and covered by our rebuild warranty. High performance only counts if it lasts.",
    ],
  },
  {
    id: "ingenium-seizure",
    date: "14 Aug 2025",
    category: "Engine Rebuilds",
    title: "Discovery 5 Ingenium seized engine — rebuilt, not replaced",
    excerpt:
      "We strip, machine and rebuild your original engine so V5 identity stays intact. This Ingenium 2.0D is back on the road with up to 24 months warranty.",
    image: IMAGES.engine,
    body: [
      "Ingenium seizures are becoming a familiar story. This Discovery 5 owner was told the only option was a brand-new crate engine at main-dealer money.",
      "We collected the vehicle, stripped the seized 2.0D and rebuilt the original unit. Machining, OEM parts and a full running-in programme brought it back without changing the V5 numbers.",
      "The owner now has a warrantied engine, a car that still matches its paperwork, and a bill that is a third of the dealer quote.",
    ],
  },
]
