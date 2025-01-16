// First, let's create types for our data
export interface Review {
  id: number;
  name: string;
  avatar: string;
  rating: number;
  date: string;
  comment: string;
}

export interface Profile {
  name: string;
  role: string;
  company: string;
  country: {
    name: string;
    flagUrl: string;
  };
  avatar: string;
  availability: {
    nextAvailable: string;
    responseTime: string;
    status: "online" | "offline";
  };
  available: string;
  bio: string;
  education: {
    institution: string;
    degree: string;
    period: string;
    logoUrl: string;
  }[];
  experience: {
    company: string;
    role: string;
    period: string;
    logoUrl: string;
  }[];
  services: {
    title: string;
    price: string;
    description: string;
    iconBg: string;
    iconType: "fileText" | "clock" | "phone";
    iconColor?: string;
  }[];
  reviews: Review[];
}
