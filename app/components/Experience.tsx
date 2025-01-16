import { ExperienceSkeleton } from "./skeletons";
import { Profile } from "../types/types";
import Image from "next/image";

interface ExperienceProps {
  isLoading: boolean;
  profileData: Profile;
}

export function Experience({ isLoading, profileData }: ExperienceProps) {
  if (isLoading) return <ExperienceSkeleton />;

  return (
    <div
      id="experience"
      className="border border-[#E2E8F0] rounded-lg p-4 mb-6"
    >
      <h2 className="text-[15px] font-medium text-blue-950 mb-6">Experience</h2>
      {profileData.experience.map((exp, index) => (
        <div key={index} className="flex gap-4">
          <div className="w-12 h-12 bg-white rounded-full border border-[#E2E8F0] flex items-center justify-center">
            <Image
              src={exp.logoUrl}
              alt={`${exp.company} logo`}
              width={30}
              height={30}
            />
          </div>
          <div>
            <h3 className="text-[15px] font-medium text-blue-950 mb-2">
              {exp.company}
            </h3>
            <p className="text-[13px] text-[#64748B] mb-2">{exp.role}</p>
            <p className="text-[13px] text-[#94A3B8]">{exp.period}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
