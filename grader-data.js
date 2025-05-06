const gradingCompanies = [
  {
  id: "ags",
  name: "AGS Grading",
  logo: "AGS.png",
  founded: 2021,
  hq: "Tampa, Florida",
  website: "https://www.agscard.com",
  portal: "https://www.agscard.com/pages/ags-submit",
  powerScore: 6.93,
  metrics: {
    volume: {
      score: 5.0,
      text: "AGS maintains a moderate submission volume as a newer entrant. Their tech-driven approach has earned steady growth among modern collectors."
    },
    appearance: {
      score: 7.0,
      text: "AGS slabs feature a clean and futuristic label layout with large subgrade displays. While modern in appearance, the design may not appeal to all collectors."
    },
    turnaround: {
      score: 6.5,
      text: "AGS offers dependable turnaround in the 10–20 business day range, with faster tiers available. Processing is transparent thanks to their digital tracking."
    },
    pricing: {
      score: 6.0,
      text: "Standard pricing starts around $20–$25 per card. While not the cheapest option, their pricing includes AI-assisted grading and digital features."
    },
    technology: {
      score: 9.5,
      text: "AGS is a leader in tech, with fully automated grading, AI imaging, 360° scans, digital fingerprints, and blockchain-based slab verification."
    },
    transparency: {
      score: 8.0,
      text: "Every graded card includes full subgrades, image comparisons, and a scannable digital report. AGS sets a new standard for data transparency in grading."
    },
    resale: {
      score: 4.0,
      text: "AGS resale values are still emerging. While tech-focused collectors are supportive, broader hobby recognition is still developing."
    },
    brand: {
      score: 5.5,
      text: "AGS is well known in tech-forward circles and YouTube communities, but lacks the deep-rooted visibility of legacy brands like PSA or SGC."
    }
  },
  images: {
    slabFront: "ags1.png",
    slabBack: "ags2.png"
  },
  design: "AGS slabs are modern and durable, with a clean digital label, barcode integration, and emphasis on subgrades. The slab design feels futuristic but may be polarizing among vintage purists.",
  submission: "AGS allows submissions through a user-friendly portal. Submitters can view progress updates and access high-res scans and subgrades once the grading is complete.",
  tech: "Tech is AGS's biggest differentiator. Every card is scanned, graded, and verified using an automated system, with digital audit trails, blockchain links, and AI-powered precision.",
  resalePerformance: "While resale is not yet on par with the big three, AGS cards are gaining steam in modern and low-pop niches. Their resale strength lies in tech appeal rather than tradition.",
  brandVisibility: "AGS is active online, particularly through YouTube and tech influencers. They maintain a strong digital presence but are still building name recognition in hobby shops and major shows.",
  pros: [
    "AI-assisted grading with blockchain tech",
    "Full subgrades and image transparency",
    "Strong digital innovation"
  ],
  cons: [
    "Limited resale traction so far",
    "Higher cost than budget graders",
    "Still growing brand presence"
  ],
  finalTake: "AGS represents the future of grading for collectors who value tech, transparency, and innovation. While their resale is still growing, the grading quality and user experience are among the best available."
},

###### ISA ######

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

####### SGC #######
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
      slabFront: "sgc1.png",
      slabBack: "sgc2.png"
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

##### TAG #####

{
  id: "tag",
  name: "TAG Grading",
  logo: "TAG.png",
  founded: 2021,
  hq: "Los Angeles, California",
  website: "https://taggrading.com",
  portal: "https://taggrading.com/submit",
  powerScore: 7.32,
  metrics: {
    volume: {
      score: 4.5,
      text: "TAG is still growing its volume but has drawn strong interest from modern collectors and tech-focused hobbyists thanks to its fully automated grading system."
    },
    appearance: {
      score: 8.5,
      text: "TAG slabs are futuristic and ultra-clear, with subgrades, digital QR codes, and a unique 'grading fingerprint.' Many collectors praise the clean design and visual clarity."
    },
    turnaround: {
      score: 6.0,
      text: "TAG’s turnaround times typically fall in the 15–30 day range depending on demand. The process is automated but includes a quality check, which can add time."
    },
    pricing: {
      score: 6.5,
      text: "TAG pricing starts around $20–$25 per card, depending on tier. All submissions include full digital reports and high-res scans, making the cost competitive for tech-savvy users."
    },
    technology: {
      score: 10.0,
      text: "TAG uses 100% automated AI grading, detailed defect mapping, blockchain reporting, and 3D slab visualization. It is considered the most advanced tech stack in the grading industry."
    },
    transparency: {
      score: 9.0,
      text: "Every graded card gets a public, scannable Digital Fingerprint Report (DFR) detailing why each subgrade was awarded. TAG’s transparency is unmatched in the space."
    },
    resale: {
      score: 4.5,
      text: "TAG resale is still developing. While respected among some tech-forward communities, their resale value hasn’t yet caught up to traditional graders like PSA or SGC."
    },
    brand: {
      score: 6.5,
      text: "TAG is making waves with a sleek brand identity and strategic partnerships. While not yet mainstream, their visibility is rapidly growing within tech and breaking communities."
    }
  },
  images: {
    slabFront: "tag1.jpeg",
    slabBack: "tag2.jpeg"
  },
  design: "TAG slabs are crystal-clear and futuristic, with precise edges and deep detail visibility. Each label features full subgrades, a QR code linking to a digital report, and minimalistic styling that appeals to modern collectors.",
  submission: "TAG offers a smooth online submission process. Each submission includes a Digital Fingerprint Report, subgrades, and ultra-high-res images of the card and its flaws, accessible through a secure portal.",
  tech: "TAG is a tech-first company. Their fully automated AI grading system scans and measures every card with precision, storing detailed defect maps and grading logs linked to a blockchain-verified record.",
  resalePerformance: "TAG slabs don’t yet command premium resale prices, but their reputation is growing. As collectors warm up to automation and transparency, TAG could become a high-tech alternative to legacy brands.",
  brandVisibility: "TAG is highly visible in modern collecting circles, especially online and among breakers. Their design and branding are polished and consistent, even if their name isn’t yet widespread at major shows.",
  pros: [
    "Fully automated AI grading",
    "Industry-best transparency",
    "Premium slab design and clarity"
  ],
  cons: [
    "Resale value still emerging",
    "Longer turnaround during high demand",
    "Not widely recognized in traditional circles"
  ],
  finalTake: "TAG is redefining grading with automation, analytics, and unmatched clarity. While hobby veterans may hesitate, modern collectors who value precision, visuals, and data will find TAG to be one of the most forward-thinking option available."
}


  ];
