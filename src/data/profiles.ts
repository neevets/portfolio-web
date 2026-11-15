interface ProfileHighlight {
  title: string;
  text: string;
}

export interface Profile {
  slug: string;
  title: string;
  eyebrow: string;
  headline: string;
  description: string;
  seoDescription: string;
  highlights: ProfileHighlight[];
}

interface Discipline {
  to: string;
  eyebrow: string;
  title: string;
  description: string;
}

export const siteMeta = {
  title: "Neevets: SMC Trader, Barber, Nutritionist, Music Producer & Developer",
  description:
    "Neevets is an SMC trader, barber, nutritionist, music producer and backend developer. Explore each discipline on its own page.",
};

export const story = {
  whoIAm: [
    "I am Neevets. I work across markets, craft, food, sound and code, and what connects them is the same habit: understand how something works, then do it properly.",
    "Trader, barber, nutritionist, music producer and backend developer. Each one has its own page here.",
  ],
  whoIWas: [
    "I am originally from Honduras and now live in Spain.",
    "Before all of this I was someone who took things apart just to see how they worked. That curiosity is what pulled me into each of these worlds.",
  ],
  facts: [
    "From Honduras, living in Spain",
    "Reading and playing games when I am not working",
    "Backend developer working with Go and Python",
    "Always breaking something on purpose to learn how it works",
  ],
};

export const profiles: Profile[] = [
  {
    slug: "trading",
    title: "Trading",
    eyebrow: "SMC Trader",
    headline: "Reading the market through Smart Money Concepts",
    description:
      "I trade using Smart Money Concepts (SMC): market structure, liquidity and the footprints large players leave on the chart. Process and risk come first, setups second.",
    seoDescription:
      "Smart Money Concepts (SMC) trading by Neevets: market structure, liquidity and risk-first execution.",
    highlights: [
      { title: "Market structure", text: "Identifying trend, breaks of structure and where price is likely to go next." },
      { title: "Liquidity", text: "Mapping where stops and resting orders sit, and how price is drawn toward them." },
      { title: "Risk first", text: "Every idea starts with where it is wrong and how much is at stake." },
      { title: "Discipline", text: "A written plan, a review routine and the patience to wait for the setup." },
    ],
  },
  {
    slug: "barber",
    title: "Barber",
    eyebrow: "Barber",
    headline: "Clean cuts and sharp details",
    description:
      "Haircuts and grooming with attention to detail: precise fades, clean lines and a finish that fits your face and your style.",
    seoDescription:
      "Barber services by Neevets: precise fades, clean lines, beard work and grooming with attention to detail.",
    highlights: [
      { title: "Cuts and fades", text: "Classic and modern cuts with clean, even blends." },
      { title: "Beard work", text: "Shaping, lining and maintenance that keeps the beard sharp." },
      { title: "Detail", text: "Edges, outlines and finishing touches that make the difference." },
      { title: "Consultation", text: "Choosing the cut that suits your face, hair and routine." },
    ],
  },
  {
    slug: "nutrition",
    title: "Nutrition",
    eyebrow: "Nutritionist",
    headline: "Nutrition that fits real life",
    description:
      "Practical nutrition guidance built around your goals, habits and schedule, without extreme diets or quick fixes.",
    seoDescription:
      "Nutrition guidance by Neevets: practical, sustainable eating plans built around your goals and routine.",
    highlights: [
      { title: "Personal goals", text: "A plan that starts from what you want to achieve." },
      { title: "Sustainable habits", text: "Changes you can keep, not diets that burn out in two weeks." },
      { title: "Food education", text: "Understanding what you eat and why it works." },
      { title: "Follow-up", text: "Adjusting the plan as your body and routine change." },
    ],
  },
  {
    slug: "music",
    title: "Music",
    eyebrow: "Music Producer",
    headline: "From the first idea to the final mix",
    description:
      "Music production covering beats, arrangement, sound design and mixing, building tracks with a clear identity.",
    seoDescription:
      "Music production by Neevets: beats, arrangement, sound design and mixing.",
    highlights: [
      { title: "Beats and composition", text: "Writing the core idea: rhythm, harmony and melody." },
      { title: "Sound design", text: "Shaping the sounds that give a track its character." },
      { title: "Arrangement", text: "Structuring the track so it builds, breathes and lands." },
      { title: "Mixing", text: "Balancing every element so the track translates everywhere." },
    ],
  },
];

export const disciplines: Discipline[] = [
  ...profiles.map((profile) => ({
    to: `/${profile.slug}`,
    eyebrow: profile.eyebrow,
    title: profile.title,
    description: profile.headline,
  })),
  {
    to: "/portfolio",
    eyebrow: "Developer",
    title: "Portfolio",
    description: "Backend development with Go and Python: skills, services and projects",
  },
];
