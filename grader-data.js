const gradingCompanies = [
  {
    id: "isa",
    name: "ISA Grading",
    logo: "ISA.png",
    founded: 2010,
    hq: "Brighton, Michigan",
    website: "https://www.isagrading.com",
    portal: "https://www.isagrading.com/submit-a-card",
    powerScore: 3.83,
    metrics: {
      volume: { score: 2.5, text: "ISA handles a relatively low submission volume compared to larger companies. They cater more to collectors than high-volume flippers." },
      appearance: { score: 4.0, text: "Label design is legible but lacks visual flair or customization features seen in more modern slabs." },
      turnaround: { score: 8.0, text: "ISA consistently returns cards within 5–10 business days, offering one of the fastest turnaround times in the hobby." },
      pricing: { score: 7.5, text: "One of the more affordable options, ISA’s $12/card pricing makes it budget-friendly for bulk or lower-value cards." },
      technology: { score: 3.0, text: "QR code verification is available, but there are no advanced features like AI grading or blockchain-backed reports." },
      transparency: { score: 8.5, text: "ISA offers a fully public population report and developer API access—rare among smaller grading firms." },
      resale: { score: 2.0, text: "Cards graded by ISA generally sell for less than the same grades from top-tier graders like PSA or BGS." },
      brand: { score: 3.0, text: "ISA is lesser-known outside of niche collector circles and doesn’t have a strong presence at major card shows." }
    },
    images: {
      slabFront: "isa-mj-front.png",
      slabBack: "isa-mj-back.png"
    },
    design: "ISA slabs are sturdy and tamper-evident, with a matte finish and clear casing. The label uses large font sizes for grades but lacks personalization or flair. Some collectors appreciate the simplicity, while others feel the design is too generic.",
    submission: "ISA has a fast submission process through their website, with bulk pricing options and clear tier breakdowns. The $12/card base price is a major plus for set collectors or those grading low-value cards.",
    tech: "Collectors can easily access population reports, and developers can build tools using their API. While ISA lacks flashy tools like AI or blockchain, their openness and data availability score them high in this area.",
    resalePerformance: "ISA cards rarely reach premium resale levels. Their value in the secondary market is more in line with raw comps or slightly above. This makes ISA better suited for collectors grading for personal display or archival purposes.",
    brandVisibility: "ISA has a small but consistent presence online and in hobby circles. Their branding is understated, which aligns with their straightforward and no-frills reputation.",
    pros: [
      "Fast turnaround",
      "Very affordable pricing",
      "Publicly accessible pop report and API"
    ],
    cons: [
      "Minimal resale value",
      "Basic slab design",
      "Lower national visibility"
    ],
    finalTake: "ISA fills a niche in the hobby: quick, no-nonsense grading for collectors who value speed, clarity, and transparency over resale hype."
  }
];