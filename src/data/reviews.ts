export type Review = {
  name: string
  date: string
  rating: number
  quote: string
  vehicle?: string
}

export const REVIEWS: Review[] = [
  {
    name: "Wez",
    date: "March 2025",
    rating: 5,
    vehicle: "Range Rover Sport SDV6 3.0L (2016)",
    quote:
      "I had my Range Rover Sport in for a full engine rebuild after the crankshaft snapped. Ali was spot on — honest, knowledgeable and straight-talking. I was kept in the loop with texts, photos and clear explanations. No hidden costs, just solid work at a fair price.",
  },
  {
    name: "Benni",
    date: "June 2025",
    rating: 5,
    vehicle: "Range Rover Sport 2007 Overfinch",
    quote:
      "Brilliant bunch of lads, constant updates with pictures and videos. They even sorted a parking sensor and battery terminal fault at no extra cost. A thousand miles into the rebuild and it drives faultless. Top quality — highly recommend.",
  },
  {
    name: "Bob",
    date: "Spring 2025",
    rating: 5,
    vehicle: "Range Rover",
    quote:
      "Jaguar Land Rover was completely useless apart from quoting a new engine. For a fraction of that price they collected the same day and delivered it back in two weeks. They repair your own engine so all numbers on the V5 remain intact. I have no hesitation recommending them.",
  },
  {
    name: "Peter",
    date: "November 2024",
    rating: 5,
    vehicle: "Discovery 5",
    quote:
      "After much research I had my Discovery 5 engine rebuilt by these guys. A professional, established outfit who did exactly what they said at the price they quoted. Regular photographic updates and the car now runs like new. Ali was always available. A breath of fresh air.",
  },
  {
    name: "Karen",
    date: "August 2024",
    rating: 5,
    quote:
      "Wow! Amazing service. Ali is such a gentleman and kept us informed with every process. Sent pictures all the way through rebuilding our engine. Wonderful workmanship and service — we will always use this garage now.",
  },
  {
    name: "Tom",
    date: "January 2025",
    rating: 5,
    vehicle: "Range Rover Sport",
    quote:
      "I sent my Range Rover Sport here for an engine rebuild. These guys have done an incredible job — trustworthy, honest, professional and genuine. The customer service was unbeatable. If you're experiencing issues with your car, there is nowhere I would recommend better.",
  },
  {
    name: "David",
    date: "May 2024",
    rating: 5,
    vehicle: "Discovery 4 3.0 SDV6",
    quote:
      "They collected from Portsmouth, stripped the engine, fitted new bearings, re-ground the heads, new oil pump, seals and belts, then MOT'd it. Silky smooth since it came back. Kabir, Faisel and the team — service second to none.",
  },
  {
    name: "Huriye",
    date: "July 2025",
    rating: 5,
    vehicle: "Range Rover Sport",
    quote:
      "The sudden engine seizure left me blindsided. Fixed costs never exceeded what we agreed. Ali explained everything as many times as I needed, dealt with the warranty company, and the car gleamed on collection. Outstanding from start to finish.",
  },
]
