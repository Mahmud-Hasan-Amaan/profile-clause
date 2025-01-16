import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Profile } from "../types/types";
import { ProfileSkeleton } from "./skeletons";
import { NavigationTabs } from "../components/NavigationTabs";
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
    <div className="sticky top-0 bg-white z-20 pt-2 sticky-header">
      <button className="flex items-center gap-1.5 text-[13px] mb-6 font-bold text-blue-950">
        <ArrowLeft className="w-6 h-6 mr-1 font-bold" />
        Back
      </button>

      <div className="flex flex-col md:flex-row items-start justify-between gap-4 mb-6">
        <div className="flex md:items-center gap-4">
          <div className="relative w-20 md:w-[120px] flex-shrink-0">
            <Image
              src={profileData.avatar}
              alt="Profile picture"
              width={120}
              height={120}
              className="rounded-full w-full h-auto"
            />
            {profileData.availability.status === "online" && (
              <div className="absolute bottom-0 right-0 w-6 h-6 md:w-8 md:h-8 border-2 border-white rounded-full bg-[#22C55E]" />
            )}
          </div>

          <div className="flex-shrink">
            <div className="flex items-center gap-2 mb-2">
              <h1 className="text-[15px] md:text-[17px] font-medium text-blue-950 truncate">
                {profileData.name}
              </h1>
              <Image
                src={profileData.country.flagUrl}
                alt={`${profileData.country.name} flag`}
                width={24}
                height={24}
                className="rounded-sm flex-shrink-0"
              />
            </div>
            <p className="text-[12px] md:text-[20x] text-black mb-2">
              {profileData.available}
            </p>
            <p className="text-[12px] md:text-[13px] text-[#94A3B8]">
              {profileData.role} @ {profileData.company}
            </p>
          </div>
        </div>

        <div className="w-full md:w-auto md:min-w-[320px] p-3 md:p-4 space-y-3 md:space-y-4 border border-[#E2E8F0] rounded-lg">
          <div className="flex items-center gap-2">
            <div className="flex-1">
              <h3 className="text-[13px] md:text-sm font-medium leading-none mb-1 text-blue-950">
                {profileData.availability.nextAvailable}
              </h3>
              <p className="text-[12px] md:text-sm text-muted-foreground">
                Usually responds within {profileData.availability.responseTime}
              </p>
            </div>
            <div className="h-4 w-4 rounded-full bg-green-500" />
          </div>
          <div className="flex gap-2">
            <Button
              variant="outline"
              className="flex-1 h-8 md:h-9 text-[12px] md:text-[13px]"
            >
              Message
            </Button>
            <Button
              className="flex-1 h-8 md:h-9 text-[12px] md:text-[13px] bg-blue-950"
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
