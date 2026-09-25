export interface Project {
  id: string;
  title: string;
  category: "residential" | "commercial" | "industrial" | "distribution-boards" | "compliance" | "backup-power";
  description: string;
  image?: string;
  featured: boolean;
}

export const projects: Project[] = [
  {
    id: "1",
    title: "Residential DB Board Upgrade",
    category: "distribution-boards",
    description: "Complete distribution board upgrade for a Sandton home, replacing an outdated fuse box with a modern circuit breaker panel.",
    image: "/assets/hero-residential-electrician.webp",
    featured: true,
  },
  {
    id: "2",
    title: "Office Park Electrical Maintenance",
    category: "commercial",
    description: "Ongoing electrical maintenance program for a Fourways office park including scheduled inspections and reactive repairs.",
    featured: true,
  },
  {
    id: "3",
    title: "Full Home Rewiring",
    category: "residential",
    description: "Complete rewire of a residential property in Bryanston, upgrading from aluminium wiring to modern copper installations.",
    image: "/assets/customer-consultation.webp",
    featured: false,
  },
  {
    id: "4",
    title: "Industrial Switchgear Inspection",
    category: "industrial",
    description: "Electrical inspection and maintenance of industrial switchgear and distribution systems.",
    image: "/assets/industrial-electrician.webp",
    featured: true,
  },
  {
    id: "5",
    title: "Backup Power Installation",
    category: "backup-power",
    description: "UPS and generator setup for a commercial property, including automatic transfer switch installation.",
    featured: false,
  },
  {
    id: "6",
    title: "Electrical Compliance Certificate",
    category: "compliance",
    description: "Full electrical compliance inspection and certificate issuance for a property transfer in Sandton.",
    featured: false,
  },
];

export const projectCategories = [
  { slug: "residential", label: "Residential" },
  { slug: "commercial", label: "Commercial" },
  { slug: "industrial", label: "Industrial" },
  { slug: "distribution-boards", label: "Distribution Boards" },
  { slug: "compliance", label: "Compliance & Upgrades" },
  { slug: "backup-power", label: "Backup Power" },
] as const;
