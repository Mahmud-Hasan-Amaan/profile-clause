import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Profile } from "@/app/types/types";
import { ProfileSkeleton } from "./skeletons";
import { NavigationTabs } from "./NavigationTabs";
import { ArrowLeft } from "lucide-react";

interface ProfileHeaderProps {
  profileData: Profile;
  isLoading: boolean;
  setIsBookingOpen: (open: boolean) => void;
}

export function ProfileHeader({
  profileData,
  isLoading,
  setIsBookingOpen,
}: ProfileHeaderProps) {
  if (isLoading) return <ProfileSkeleton />;

  return (
    <div className="sticky top-0 bg-white z-20 pt-3 sticky-header">
      <button className="flex items-center gap-2 text-[13px] mb-6 font-medium font-clash text-blue-950">
        <ArrowLeft className="w-6 h-6 mr-1.5 font-medium" />
        Back
      </button>

      <div className="flex flex-col md:flex-row items-start justify-between gap-5 mb-6">
        <div className="flex md:items-center gap-5">
          <div className="relative w-20 md:w-[150px] flex-shrink-0">
            <Image
              src={profileData.avatar}
              alt="Profile picture"
              width={150}
              height={150}
              className="rounded-full w-full h-auto border-4 border-gray-50"
            />
            {profileData.availability.status === "online" && (
              <div className="absolute bottom-[-2px] right-[-12px] w-8 h-8 md:w-12 md:h-12 border-[8px] border-white rounded-full bg-[#22C55E]" />
            )}
          </div>

          <div className="flex-shrink">
            <div className="flex items-center gap-3 mb-2">
              <h1 className="text-[16px] md:text-[24px] font-medium text-blue-950 truncate">
                {profileData.name}
              </h1>
              <Image
                src={profileData.country.flagUrl}
                alt={`${profileData.country.name} flag`}
                width={26}
                height={26}
                className="rounded-sm flex-shrink-0"
              />
            </div>
            <p className="text-[14px] md:text-[20px] text-black mb-2">
              {profileData.available}
            </p>
            <p className="text-[13px] md:text-[15px] text-[#565f69]">
              {profileData.role} @ {profileData.company}
            </p>
          </div>
        </div>

        <div className="w-full md:w-auto md:min-w-[380px] p-4 md:p-5 space-y-3 md:space-y-4 border border-[#E2E8F0] rounded-lg">
          <div className="flex items-center gap-3">
            <div className="flex-1">
              <h3 className="text-[14px] md:text-[16px] font-medium leading-none mb-2 text-blue-950">
                {profileData.availability.nextAvailable}
              </h3>
              <p className="text-[13px] md:text-[15px] text-muted-foreground">
                Usually responds within {profileData.availability.responseTime}
              </p>
            </div>
            <div className="h-7 w-7 rounded-full bg-[#22C55E] border-4 border-green-200" />
          </div>
          <div className="flex gap-3">
            <Button
              variant="outline"
              className="flex-1 h-9 md:h-10 text-[13px] md:text-[14px] bg-gray-100 hover:bg-gray-200"
            >
              Message
            </Button>
            <Button
              className="flex-1 h-9 md:h-10 text-[13px] md:text-[14px] bg-blue-950"
              onClick={() => setIsBookingOpen(true)}
            >
              Select Services
            </Button>
          </div>
        </div>
      </div>
      <NavigationTabs />
    </div>
  );
}
