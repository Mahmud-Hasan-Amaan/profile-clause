import { EducationSkeleton } from "./skeletons";
import { Profile } from "@/app/types/types";
import Image from "next/image";

interface EducationProps {
  isLoading: boolean;
  profileData: Profile;
}

export function Education({ isLoading, profileData }: EducationProps) {
  if (isLoading) return <EducationSkeleton />;

  return (
    <div id="education" className="border border-[#E2E8F0] rounded-lg p-4 mb-6">
      <h2 className="text-[15px] font-medium text-blue-950 mb-6">Education</h2>
      <div className="space-y-6">
        {profileData.education.map((edu, index) => (
          <div
            key={index}
            className={`flex gap-4 ${
              index !== profileData.education.length - 1
                ? "flex gap-4 mb-6 border-b border-[#E2E8F0] pb-4"
                : "pb-4"
            }`}
          >
            <div className="w-12 h-12 bg-white border border-[#E2E8F0] rounded-full flex items-center justify-center">
              <Image
                src={edu.logoUrl}
                alt={`${edu.institution} logo`}
                width={31}
                height={31}
                className="rounded-full"
              />
            </div>
            <div>
              <h3 className="text-[17px] font-medium text-blue-950 mb-3">
                {edu.institution}
              </h3>
              <p className="text-[14px] text-[#64748B] mb-3">{edu.degree}</p>
              <p className="text-[13px] text-[#94A3B8]">{edu.period}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
