export interface Review {
  id: string;
  author: string;
  rating: number;
  text: string;
  source: string;
  date: string;
  verified: boolean;
  featured: boolean;
}

export const reviews: Review[] = [
  {
    id: "1",
    author: "Verified Client",
    rating: 5,
    text: "Excellent service. The electrician arrived on time, explained the problem clearly, and fixed it properly. Highly recommend RUS Electrical for any electrical work.",
    source: "Google Reviews",
    date: "2024",
    verified: true,
    featured: true,
  },
  {
    id: "2",
    author: "Sandton Homeowner",
    rating: 5,
    text: "Professional from start to finish. They sorted out our electrical compliance certificate quickly and the price was fair. Will use again.",
    source: "Google Reviews",
    date: "2024",
    verified: true,
    featured: false,
  },
  {
    id: "3",
    author: "Property Manager",
    rating: 5,
    text: "Reliable electrical maintenance for our office park. RUS Electrical handles all our electrical needs and we have never had an issue.",
    source: "Google Reviews",
    date: "2024",
    verified: true,
    featured: false,
  },
  {
    id: "4",
    author: "Fourways Resident",
    rating: 5,
    text: "They rewired our older home and installed a new distribution board. The work was done neatly and to standard. Very happy with the result.",
    source: "Google Reviews",
    date: "2024",
    verified: true,
    featured: false,
  },
  {
    id: "5",
    author: "Commercial Client",
    rating: 4,
    text: "Good communication and professional work. Installed backup power systems for our business. Would recommend.",
    source: "Google Reviews",
    date: "2024",
    verified: true,
    featured: false,
  },
];

export const reviewStats = {
  averageRating: 4.9,
  totalReviews: 15,
  source: "Google Reviews",
  rating: 4.9,
};
