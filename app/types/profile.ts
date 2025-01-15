// First, let's create types for our data
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
  personalInfo: {
    email: string;
    location: string;
    dateOfBirth: string;
    gender: string;
  };
  bio: string;
  services: Array<{
    icon: string;
    title: string;
    description: string;
    price: string;
  }>;
  education: Array<{
    institution: string;
    degree: string;
    period: string;
    logoUrl: string;
  }>;
  experience: Array<{
    company: string;
    role: string;
    period: string;
    logoUrl: string;
  }>;
  documents: Array<{
    name: string;
    size: string;
  }>;
}
