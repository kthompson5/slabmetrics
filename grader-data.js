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
  },
  
    {
    id: "sgc",
    name: "SGC",
    logo: "SGC.png",
    founded: 1998,
    hq: "Boca Raton, Florida",
    website: "https://www.gosgc.com",
    portal: "https://gosgc.com/submit",
    powerScore: 7.91,
    metrics: {
      volume: {
        score: 8.5,
        text: "SGC handles a high submission volume, especially for vintage cards. They are a trusted option among longtime collectors."
      },
      appearance: {
        score: 9.0,
        text: "The signature black insert gives SGC slabs a premium, framed look. Many collectors consider them the best-designed slabs on the market."
      },
      turnaround: {
        score: 7.5,
        text: "Turnaround times are reliable and typically fall in the 10–15 business day range. Rush options are also available."
      },
      pricing: {
        score: 6.5,
        text: "Pricing is competitive with PSA and Beckett, with standard submissions starting around $18–$20 per card."
      },
      technology: {
        score: 5.0,
        text: "SGC offers basic QR verification but lacks advanced features like population trends, blockchain, or AI-assisted grading."
      },
      transparency: {
        score: 6.0,
        text: "While population reports are accessible, SGC doesn’t currently offer open APIs or deep insight into their grading process."
      },
      resale: {
        score: 7.0,
        text: "SGC-graded cards generally resell at a strong premium—especially vintage—though modern resale values trail PSA slightly."
      },
      brand: {
        score: 8.5,
        text: "SGC is one of the most recognized and respected names in card grading, especially for vintage cards and long-time hobbyists."
      }
    },
    images: {
      slabFront: "sgc-mj-front.png",
      slabBack: "sgc-mj-back.png"
    },
    design: "SGC slabs are sleek, well-built, and known for their standout black insert. This design is especially praised for enhancing the visual appeal of vintage cards, giving them a museum-quality display.",
    submission: "SGC accepts both direct submissions and third-party group submissions. Their submission portal is easy to use, and bulk rates make them appealing to frequent graders.",
    tech: "While SGC’s tech offerings are minimal, their slab verification system ensures authenticity. However, there’s room to grow in areas like public APIs or enhanced scan tech.",
    resalePerformance: "SGC commands strong resale value for vintage cards. Modern resale trails PSA but still outpaces many smaller grading companies, offering a good balance between credibility and affordability.",
    brandVisibility: "SGC has a consistent presence at card shows, strong branding, and a loyal base among vintage collectors. Their green label rebrand was well received and continues to gain traction.",
    pros: [
      "Highly respected for vintage grading",
      "Beautiful black slab design",
      "Strong resale performance"
    ],
    cons: [
      "Limited tech features",
      "Modern card resale lags behind PSA",
      "No public API or tool integrations"
    ],
    finalTake: "SGC has earned its place as one of the big names in grading, particularly in the vintage space. With consistent turnaround, iconic slab design, and brand trust, SGC is a smart choice for collectors who prioritize presentation and legacy."
  },
];