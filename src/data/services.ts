export interface Service {
  id: string;
  slug: string;
  number: string;
  title: string;
  shortTitle: string;
  description: string;
  longDescription: string;
  icon: string;
  category: ("residential" | "commercial" | "industrial" | "general")[];
  verified: boolean;
  requiresConfirmation: boolean;
  source: string;
}

export const services: Service[] = [
  {
    id: "1",
    slug: "electrical-repairs-fault-finding",
    number: "01",
    title: "Electrical Repairs & Fault Finding",
    shortTitle: "Repairs & Fault Finding",
    description:
      "Diagnosing and resolving electrical faults quickly and safely. From tripping breakers to power failures, we identify the root cause and fix it properly.",
    longDescription:
      "Electrical faults can range from minor annoyances to serious safety hazards. Our approach is methodical: we diagnose the problem thoroughly before carrying out any repair work. This means you get a lasting fix, not a temporary patch. We handle tripping circuits, power surges, faulty wiring, damaged outlets, and complete fault tracing across residential, commercial and industrial properties.",
    icon: "Zap",
    category: ["residential", "commercial", "industrial", "general"],
    verified: true,
    requiresConfirmation: false,
    source: "public profile + company artwork",
  },
  {
    id: "2",
    slug: "electrical-installations",
    number: "02",
    title: "Electrical Installations",
    shortTitle: "Installations",
    description:
      "New electrical installations for residential, commercial and industrial properties. Done to standard, done properly.",
    longDescription:
      "Whether you are building new, renovating, or adding electrical capacity to an existing property, proper installation is the foundation of electrical safety. We handle complete electrical fit-outs, new circuit installations, lighting setups, power distribution, and appliance connections. Every installation is carried out with attention to code compliance and long-term reliability.",
    icon: "Plug",
    category: ["residential", "commercial", "industrial", "general"],
    verified: true,
    requiresConfirmation: false,
    source: "public profile + company artwork",
  },
  {
    id: "3",
    slug: "rewiring-upgrades",
    number: "03",
    title: "Rewiring & Upgrades",
    shortTitle: "Rewiring & Upgrades",
    description:
      "Complete and partial rewiring for older properties, upgrades to meet current electrical standards, and capacity improvements.",
    longDescription:
      "Older properties in Sandton and Johannesburg North often have wiring that no longer meets current safety standards. We carry out full and partial rewiring, upgrade outdated distribution boards, and improve electrical capacity to handle modern loads. This work is essential for safety, insurance compliance, and reliable power distribution.",
    icon: "Cable",
    category: ["residential", "commercial"],
    verified: true,
    requiresConfirmation: false,
    source: "public profile",
  },
  {
    id: "4",
    slug: "distribution-boards",
    number: "04",
    title: "Distribution Boards",
    shortTitle: "Distribution Boards",
    description:
      "Installation, upgrade and maintenance of electrical distribution boards. Proper protection for your electrical system.",
    longDescription:
      "The distribution board is the heart of your electrical system. We install new DB boards, upgrade outdated fuse boxes to modern circuit breaker panels, and ensure proper load balancing and earth leakage protection. A well-maintained distribution board prevents damage to appliances and reduces fire risk.",
    icon: "LayoutGrid",
    category: ["residential", "commercial", "industrial"],
    verified: true,
    requiresConfirmation: false,
    source: "public profile",
  },
  {
    id: "5",
    slug: "electrical-maintenance",
    number: "05",
    title: "Electrical Maintenance",
    shortTitle: "Maintenance",
    description:
      "Scheduled and reactive electrical maintenance for homes, offices, retail spaces and industrial facilities.",
    longDescription:
      "Regular electrical maintenance prevents costly breakdowns and safety hazards. We offer scheduled maintenance programs for commercial and industrial clients, as well as one-off maintenance visits for residential properties. This includes testing, inspection, tightening connections, and identifying potential issues before they become problems.",
    icon: "Wrench",
    category: ["residential", "commercial", "industrial"],
    verified: true,
    requiresConfirmation: false,
    source: "public profile + Snupit",
  },
  {
    id: "6",
    slug: "compliance-inspections-coc",
    number: "06",
    title: "Compliance Inspections / COC",
    shortTitle: "Compliance & COC",
    description:
      "Electrical compliance inspections and Certificate of Compliance support. We help ensure your property meets electrical safety requirements.",
    longDescription:
      "Electrical compliance certificates are required for property transfers, insurance claims, and rental agreements. We carry out thorough inspections of your electrical installation and provide the necessary documentation. Our inspections cover wiring, earthing, circuit breakers, and overall installation safety.",
    icon: "ClipboardCheck",
    category: ["residential", "commercial", "general"],
    verified: true,
    requiresConfirmation: false,
    source: "public profile",
  },
  {
    id: "7",
    slug: "backup-power-ups-generators",
    number: "07",
    title: "Backup Power / UPS / Generators",
    shortTitle: "Backup Power",
    description:
      "UPS systems, generator installations and backup power solutions. Keep your property running when the grid goes down.",
    longDescription:
      "With ongoing load-shedding and power instability, backup power is no longer optional. We install and maintain UPS systems for homes and businesses, connect standby generators, and set up automatic transfer switches. We help you choose the right solution for your power needs and budget.",
    icon: "Battery",
    category: ["residential", "commercial", "industrial"],
    verified: true,
    requiresConfirmation: false,
    source: "public profile + Snupit",
  },
  {
    id: "8",
    slug: "security-exterior-lighting",
    number: "08",
    title: "Security & Exterior Lighting",
    shortTitle: "Security Lighting",
    description:
      "Security lighting, perimeter lighting, exterior lighting design and installation. Deter intruders and improve visibility.",
    longDescription:
      "Proper exterior lighting is one of the most effective deterrents against crime. We design and install security lighting systems including motion-activated floodlights, perimeter lighting, gate area illumination, and automated lighting systems. We also handle garden and landscape lighting for residential properties.",
    icon: "Lightbulb",
    category: ["residential", "commercial"],
    verified: true,
    requiresConfirmation: false,
    source: "public profile + Snupit",
  },
  {
    id: "9",
    slug: "prepaid-meter-solutions",
    number: "09",
    title: "Prepaid Meter Solutions",
    shortTitle: "Prepaid Meters",
    description:
      "Prepaid electricity meter installation, setup and support. Manage your electricity costs effectively.",
    longDescription:
      "Prepaid meters give property owners control over electricity usage and costs. We install and configure prepaid meters for residential complexes, rental properties, and commercial buildings. We also assist with meter resets, token generation, and troubleshooting.",
    icon: "Gauge",
    category: ["residential", "commercial"],
    verified: true,
    requiresConfirmation: false,
    source: "public profile + Snupit",
  },
  {
    id: "10",
    slug: "gate-motor-electrical-support",
    number: "10",
    title: "Gate Motor Electrical Support",
    shortTitle: "Gate Motors",
    description:
      "Gate motor electrical connections, troubleshooting and support. Reliable access control for your property.",
    longDescription:
      "Gate motor electrical issues can leave you stranded or compromise your property security. We handle the electrical side of gate motor installations, troubleshoot power supply problems, connect gate motors to backup power systems, and ensure reliable operation of your automated access.",
    icon: "DoorOpen",
    category: ["residential", "commercial"],
    verified: true,
    requiresConfirmation: false,
    source: "public profile + Snupit",
  },
];

/**
 * Stage imagery per service. Allocation rules:
 *  - best semantic match per service (see docs/image-assets-spec.md)
 *  - no asset repeated within the services index
 *  - null = no suitable asset yet → the stage renders a technical
 *    "spec plate" instead of a mismatched photo
 */
export const serviceImages: Record<string, string | null> = {
  // Diagnostics: technician testing live switchgear with tablet in hand
  "electrical-repairs-fault-finding": "/assets/industrial-electrician.webp",
  // MISSING: installation-in-progress (professional fit-out, cable tray / first fix)
  "electrical-installations": null,
  // MISSING: rewiring-conduit-work (conduit runs, cable pulls)
  "rewiring-upgrades": null,
  // Electrician actively working a residential distribution board
  "distribution-boards": "/assets/hero-residential-electrician.webp",
  // Scheduled crew / readiness — branded service vehicle and team
  "electrical-maintenance": "/assets/service-van-team.webp",
  // Walkthrough at a DB board, findings explained to the client
  "compliance-inspections-coc": "/assets/customer-consultation.webp",
  // MISSING: backup-power-inverter (inverter / battery install)
  "backup-power-ups-generators": null,
  // MISSING: security-lighting-install (architectural exterior lighting)
  "security-exterior-lighting": null,
  // MISSING: prepaid-meter-install (meter board closeup)
  "prepaid-meter-solutions": null,
  // MISSING: gate-motor-install (motor + power supply connection)
  "gate-motor-electrical-support": null,
};

/** Key applications per service, drawn from the verified service data. */
export const serviceApplications: Record<string, string[]> = {
  "electrical-repairs-fault-finding": [
    "Tripping breakers & dead circuits",
    "Fault tracing & diagnosis",
    "Power failure restoration",
  ],
  "electrical-installations": [
    "New circuits & fit-outs",
    "Lighting & power distribution",
    "Appliance connections",
  ],
  "rewiring-upgrades": [
    "Full & partial rewiring",
    "Outdated board replacement",
    "Capacity improvement",
  ],
  "distribution-boards": [
    "New DB installation",
    "Earth leakage protection",
    "Load balancing",
  ],
  "electrical-maintenance": [
    "Scheduled maintenance programs",
    "Testing & inspection",
    "Preventative attention",
  ],
  "compliance-inspections-coc": [
    "COC inspections",
    "Property transfer certificates",
    "Insurance compliance",
  ],
  "backup-power-ups-generators": [
    "UPS systems",
    "Generator connections",
    "Automatic transfer switches",
  ],
  "security-exterior-lighting": [
    "Perimeter & security lighting",
    "Motion floodlights",
    "Garden & landscape lighting",
  ],
  "prepaid-meter-solutions": [
    "Prepaid meter installation",
    "Rental & complex metering",
    "Meter troubleshooting",
  ],
  "gate-motor-electrical-support": [
    "Gate motor power supply",
    "Backup power for access",
    "Automation troubleshooting",
  ],
};

export function getServiceBySlug(slug: string): Service | undefined {  return services.find((s) => s.slug === slug);
}

export function getServicesByCategory(
  cat: "residential" | "commercial" | "industrial" | "general"
): Service[] {
  return services.filter((s) => s.category.includes(cat));
}
