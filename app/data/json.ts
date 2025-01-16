import { Profile } from "../types/types";

export const profileData: Profile = {
  name: "Albert Einstein",
  role: "Senior Developer",
  company: "Tech Corp",
  country: {
    name: "United States",
    flagUrl: "/images/palestine.png",
  },
  avatar: "/images/munab-profile.png",
  availability: {
    nextAvailable: "Tomorrow at 10:00 AM",
    responseTime: "2 hours",
    status: "online" as const,
  },
  available: "Our team will review your application and get back",
  bio: "Our team will review your application and get back to you within 1-3 business days. If approved, you&apos;ll gain access to your dashboard",
  education: [
    {
      institution: "MIT",
      degree: "Computer Science",
      period: "2018-2022",
      logoUrl: "/images/mahmud.png",
    },
    {
      institution: "Tanzimul Ummah",
      degree: "Computer Science",
      period: "2018-2022",
      logoUrl: "/images/ded-club.jpg",
    },
    // Add more education entries
  ],
  experience: [
    {
      company: "Science Club",
      role: "Senior Developer",
      period: "2022-Present",
      logoUrl: "/images/ded-club.jpg",
    },
    {
      company: "It Club",
      role: "Senior Developer",
      period: "2022-Present",
      logoUrl: "/images/ded-club.jpg",
    },
    {
      company: "Ded Club",
      role: "Senior Developer",
      period: "2022-Present",
      logoUrl: "/images/ded-club.jpg",
    },
    // Add more experience entries
  ],
  services: [
    {
      title: "Essay Review",
      price: "$15",
      description: "Lorem ipsum dolor sit amet consectetur.",
      iconBg: "bg-yellow-50",
      iconType: "fileText",
      iconColor: "text-yellow-500",
    },
    {
      title: "1 Hour Session",
      price: "$15",
      description: "Lorem ipsum dolor sit amet consectetur.",
      iconBg: "bg-green-50",
      iconType: "fileText",
      iconColor: "text-green-500",
    },
    {
      title: "15 mins Introductory Call",
      price: "Free",
      description: "Lorem ipsum dolor sit amet consectetur.",
      iconBg: "bg-blue-50",
      iconType: "fileText",
      iconColor: "text-blue-500",
    },
  ],
  reviews: [
    {
      id: 1,
      name: "Modi",
      avatar: "/images/modi-happy.jpg",
      rating: 4.5,
      date: "2 days ago",
      comment:
        "Excellent tutor! Very knowledgeable and patient. Helped me understand complex topics easily.",
    },
    {
      id: 2,
      name: "Donald Trump",
      avatar: "/images/trump.jpg",
      rating: 4,
      date: "1 week ago",
      comment:
        "Great session! The tutor was well-prepared and provided valuable insights.",
    },
    {
      id: 3,
      name: "Sheikh Hasina",
      avatar: "/images/hasina-happy.jpg",
      rating: 5,
      date: "2 weeks ago",
      comment:
        "Fantastic experience! The tutor's teaching style is very effective and engaging.",
    },
    {
      id: 4,
      name: "Rafim Tahsin",
      avatar: "/images/rafim-tahsin.png",
      rating: 4,
      date: "3 weeks ago",
      comment:
        "Very helpful session. The tutor clarified all my doubts and provided additional resources.",
    },
    {
      id: 5,
      name: "Rafim Tahsin",
      avatar: "/images/rafim-tahsin.png",
      rating: 4,
      date: "3 weeks ago",
      comment:
        "Very helpful session. The tutor clarified all my doubts and provided additional resources.",
    },
    {
      id: 6,
      name: "Rafim Tahsin",
      avatar: "/images/rafim-tahsin.png",
      rating: 4,
      date: "3 weeks ago",
      comment:
        "Very helpful session. The tutor clarified all my doubts and provided additional resources.",
    },
    {
      id: 7,
      name: "Sheikh Hasina",
      avatar: "/images/hasina-happy.jpg",
      rating: 5,
      date: "2 weeks ago",
      comment:
        "Fantastic experience! The tutor's teaching style is very effective and engaging.",
    },
  ],
} as const;
