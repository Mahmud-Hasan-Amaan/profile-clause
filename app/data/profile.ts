import { Profile } from "../types/profile";

export const profileData: Profile = {
  name: "Alis Elsvin",
  role: "Product Designer",
  company: "XYZ",
  avatar:
    "https://media.licdn.com/dms/image/v2/D5603AQFyBi8UPThzLA/profile-displayphoto-shrink_800_800/B56ZQxA4TEHIAc-/0/1735989103211?e=1742428800&v=beta&t=bAge4Ym7y0RKnD7p8Lvltoxbxt_2MPuZ28E4HA-KTXU",
  country: {
    name: "Pakistan",
    flagUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Flag_of_Palestine.svg/800px-Flag_of_Palestine.svg.png",
  },
  availability: {
    status: "online",
    nextAvailable: "Tuesday at 22:30 GMT +5",
    responseTime: "15 mins",
  },
  personalInfo: {
    email: "check@check.com",
    location: "Karachi, Pakistan",
    dateOfBirth: "24 December 2000",
    gender: "Male",
  },
  available: "Our team will review your application and get back",
  bio: "Our team will review your application and get back to you within 1-3 business days. If approved, you'll gain access to your dashboard",
  services: [
    {
      icon: "📝",
      title: "Essay Review",
      description: "Lorem ipsum dolor sit amet consectetur.",
      price: "$15",
    },
    {
      icon: "🎯",
      title: "1 Hour Session",
      description: "Lorem ipsum dolor sit amet consectetur.",
      price: "$15",
    },
    {
      icon: "📞",
      title: "15 mins Introductory Call",
      description: "Lorem ipsum dolor sit amet consectetur.",
      price: "Free",
    },
  ],
  education: [
    {
      institution: "University of London",
      degree: "Master Degree in computer science and mathematics",
      period: "January 20 2020 - March 11 2024",
      logoUrl:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-qzW9uDMe7I7hejL6pdM5c2dgQBZlKT.png",
    },
    {
      institution: "University of London",
      degree: "Master Degree in computer science and mathematics",
      period: "January 20 2020 - March 11 2024",
      logoUrl:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-qzW9uDMe7I7hejL6pdM5c2dgQBZlKT.png",
    },
    // Add more education entries as needed
  ],
  experience: [
    {
      company: "Google",
      role: "Associate Software Engineer",
      period: "January 20 2020 - Present",
      logoUrl:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-qzW9uDMe7I7hejL6pdM5c2dgQBZlKT.png",
    },
    // Add more experience entries as needed
  ],
  documents: [
    {
      name: "HannahBusing_Resume.pdf",
      size: "200 KB",
    },
    // Add more documents as needed
  ],
};
