export interface Area {
  slug: string;
  name: string;
  description: string;
  services: string[];
}

export const areas: Area[] = [
  {
    slug: "sandton",
    name: "Sandton",
    description:
      "Professional electrical services for homes and businesses across Sandton. From residential fault finding to commercial electrical maintenance.",
    services: [
      "Electrical Repairs & Fault Finding",
      "Electrical Installations",
      "Compliance Inspections / COC",
      "Backup Power / UPS / Generators",
    ],
  },
  {
    slug: "fourways",
    name: "Fourways",
    description:
      "Reliable electrical solutions for Fourways properties. Residential rewiring, distribution board upgrades and security lighting.",
    services: [
      "Rewiring & Upgrades",
      "Distribution Boards",
      "Security & Exterior Lighting",
      "Prepaid Meter Solutions",
    ],
  },
  {
    slug: "bryanston",
    name: "Bryanston",
    description:
      "Trusted electrical contractor for Bryanston homes and estates. Electrical compliance, maintenance and new installations.",
    services: [
      "Electrical Installations",
      "Electrical Maintenance",
      "Compliance Inspections / COC",
      "Gate Motor Electrical Support",
    ],
  },
  {
    slug: "johannesburg-north",
    name: "Johannesburg North",
    description:
      "Comprehensive electrical services across Johannesburg North. Commercial, industrial and residential electrical work.",
    services: [
      "Electrical Repairs & Fault Finding",
      "Electrical Installations",
      "Rewiring & Upgrades",
      "Backup Power / UPS / Generators",
    ],
  },
];
