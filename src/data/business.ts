export const business = {
  businessName: "RUS Electrical",
  tagline: "done in a proper way",
  refinedTagline: "Electrical work. Done the proper way",
  primaryPhone: "072 132 6098",
  primaryPhoneLink: "tel:+27721326098",
  secondaryPhone: "073 605 5585",
  secondaryPhoneLink: "tel:+27736055585",
  email: "nihovor@gmail.com",
  serviceAreas: [
    "Sandton",
    "Johannesburg North",
    "Fourways",
    "Bryanston",
    "Surrounding Areas",
  ],
  address: {
    display: "Sandton & Johannesburg North",
    street: "Stella St, Sandown, Sandton, 2196",
    streetAlt: "2432B Hawthorn Village, Short Street, Fourways, Sandton, 2055",
    requiresConfirmation: true,
    note: "Address sources conflict. Display broadly until owner confirms.",
  },
  hours: {
    display: "Mon–Fri: 08:00–17:30 | Sat: 08:30–16:00 | Sun: 09:30–14:00",
    mapHours: {
      weekday: "08:00–17:30",
      saturday: "08:30–16:00",
      sunday: "09:30–14:00",
    },
    snupitClaimed24_7: true,
    requiresConfirmation: true,
    note: "24/7 claim appears on Snupit but not confirmed. Use listed hours until verified.",
  },
  emergencyAvailability: {
    advertised: false,
    requiresConfirmation: true,
    note: "Emergency/24-7 claim needs owner confirmation before prominent display.",
  },
  rating: {
    value: 4.9,
    count: 15,
    source: "Google/Maps public listing",
  },
  verifiedFacts: {
    phone: true,
    name: true,
    tagline: true,
    services: true,
    rating: true,
  },
  requiresConfirmation: {
    address: true,
    hours: true,
    secondaryPhone: true,
    email: true,
    twentyFourSeven: true,
    complianceCredentials: true,
  },
  socialProof: {
    conceptBy: "SMK Web Design",
  },
} as const;

export type BusinessData = typeof business;
