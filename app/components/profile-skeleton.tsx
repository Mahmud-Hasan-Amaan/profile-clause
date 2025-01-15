import { Skeleton } from "@/components/ui/skeleton";
import { Button } from "@/components/ui/button";

export default function ProfileSkeleton() {
  return (
    <div className="flex items-start gap-4 mb-10">
      <Skeleton className="w-[76px] h-[76px] rounded-full" />
      <div className="flex-1">
        <div className="flex items-center gap-2 mb-1">
          <Skeleton className="h-5 w-32" />
          <Skeleton className="w-5 h-5 rounded-sm" />
        </div>
        <Skeleton className="h-4 w-3/4 mb-1" />
        <Skeleton className="h-4 w-1/2" />
      </div>
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2">
          <Skeleton className="w-2 h-2 rounded-full mt-1" />
          <div className="flex flex-col">
            <Skeleton className="h-4 w-48 mb-1" />
            <Skeleton className="h-4 w-40" />
          </div>
        </div>
        <Button disabled className="bg-[#0F172A] text-white h-9 rounded-[6px]">
          Message
        </Button>
      </div>
    </div>
  );
}
