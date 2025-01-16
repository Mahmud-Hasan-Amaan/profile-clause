import { OverviewSkeleton } from "./skeletons";
import { Profile } from "@/app/types/types";

interface OverviewProps {
  isLoading: boolean;
  profileData: Profile;
}

export function Overview({ isLoading, profileData }: OverviewProps) {
  if (isLoading) return <OverviewSkeleton />;

  return (
    <div
      id="overview"
      className="border border-[#E2E8F0] rounded-lg p-4 mb-6 mt-6"
    >
      <h2 className="text-[15px] font-medium text-blue-950 mb-3">Bio</h2>
      <p className="text-[13px] text-[#64748B] mb-2 leading-[1.6]">
        {profileData.bio}
      </p>
      <button className="text-[13px] text-blue-950 hover:text-[#1D4ED8] leading-[1.6] font-medium">
        Read more
      </button>
    </div>
  );
}
