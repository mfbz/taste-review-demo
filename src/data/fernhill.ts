export const NAV = [
  { href: "/", label: "Planner" },
  { href: "/pricing", label: "Pricing" },
] as const;

export const FEATURES = [
  {
    title: "Draw the beds to scale",
    body: "Sketch every bed, path and fence line on a grid that matches your plot, down to the centimetre.",
  },
  {
    title: "Know what grows together",
    body: "Fernhill flags companions and rivals as you plant, so the beans never end up beside the onions.",
  },
  {
    title: "A calendar for your climate",
    body: "Sowing and harvest dates follow your last frost, not a seed packet written for somewhere else.",
  },
] as const;

export const PLANS = [
  {
    name: "Seedling",
    price: "Free",
    cadence: "forever",
    blurb: "One garden, the full planner and the sowing calendar.",
    features: ["1 garden", "Companion planting", "Frost-date calendar"],
    featured: false,
  },
  {
    name: "Gardener",
    price: "$6",
    cadence: "per month",
    blurb: "For a plot that changes every season.",
    features: ["5 gardens", "Crop rotation over 4 years", "Harvest log", "Printable plans"],
    featured: true,
  },
  {
    name: "Allotment",
    price: "$14",
    cadence: "per month",
    blurb: "For community gardens shared between neighbours.",
    features: ["Unlimited gardens", "Shared plots", "Plot holder roles", "Everything in Gardener"],
    featured: false,
  },
] as const;

export const PRICING_FAQ = [
  {
    question: "Can I change plans later?",
    answer: "Yes. Moving up takes effect at once, and moving down applies from your next month.",
  },
  {
    question: "What happens to my gardens if I stop paying?",
    answer: "They stay yours. You keep the newest one editable and the rest become read-only.",
  },
  {
    question: "Is there a discount for community gardens?",
    answer:
      "Registered community gardens get Allotment at half price. Write to us with your registration.",
  },
] as const;
