export type ServiceType = "towing" | "repair" | "truck";

export type ServiceItem = {
  icon: ServiceType;
  title: string;
  items: string[];
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
];
