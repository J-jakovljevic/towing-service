export type ServiceType =
  | "towing"
  | "repair"
  | "truck"
  | "roadside"
  | "recruiting"
  | "tire"
  | "oil"
  | "bodywork";

export type ServiceItem = {
  icon: ServiceType;
  title: string;
  items: string[];
  compact?: boolean;
};

export type StatItem = {
  num: string;
  label: string;
};

export const heroLines = ["Towing", "Service", "Recovery &", "Workshop"];

export const stats: StatItem[] = [
  { num: "24/7", label: "Availability" },
  { num: "100%", label: "Committed" },
  { num: "All", label: "Makes & Models" },
  { num: "1 Call", label: "That's All It Takes" },
];

export const promises = [
  "Fast Response",
  "Experienced Team",
  "Professional Equipment",
  "Competitive Prices",
];

export const services: ServiceItem[] = [
  {
    icon: "towing",
    title: "Towing & Recovery",
    items: [
      "Local & Long Distance",
      "Box Truck Towing",
      "Accident Recovery",
      "Breakdowns",
      "Load Shifts",
    ],
  },
  {
    icon: "repair",
    title: "Workshop Services",
    items: [
      "Diagnostics",
      "Engine & Drivetrain",
      "Brakes & Suspension",
      "Electrical Repair",
      "Preventive Maintenance",
    ],
  },
  {
    icon: "truck",
    title: "Box Truck Specialists",
    items: [
      "All Makes & Models",
      "Diesel Repair",
      "Liftgate Service",
      "DOT Inspections",
      "Fleet Maintenance",
    ],
  },
  {
    icon: "roadside",
    title: "Roadside Assistance",
    items: ["Highly experienced", "Fast response", "Friendly pricing"],
  },
  {
    icon: "recruiting",
    title: "Recruiting",
    items: [
      "Apply for CDL: Dry Van, Flatbed, Conestoga",
      "Non-CDL: Box Truck",
      "Owner-operators welcome",
    ],
  },
  {
    icon: "truck",
    title: "Truck Repairs",
    items: ["Specialized in all kinds of box trucks"],
  },
  {
    icon: "oil",
    title: "Oil Change Express",
    items: [],
    compact: true,
  },
  {
    icon: "tire",
    title: "Tire Shop",
    items: [],
    compact: true,
  },
  {
    icon: "bodywork",
    title: "Bodywork",
    items: [],
    compact: true,
  },
];
