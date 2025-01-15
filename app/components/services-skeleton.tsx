import { Card } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export default function ServicesSkeleton() {
  return (
    <div className="grid grid-cols-3 gap-6">
      {[1, 2, 3].map((i) => (
        <Card key={i} className="p-6 shadow-sm border-[#E2E8F0]">
          <Skeleton className="w-8 h-8 mb-4" />
          <Skeleton className="h-5 w-32 mb-2" />
          <Skeleton className="h-4 w-full mb-4" />
          <Skeleton className="h-4 w-20 mb-1" />
          <Skeleton className="h-5 w-16 mb-4" />
          <div className="flex gap-3">
            <Skeleton className="h-9 flex-1" />
            <Skeleton className="h-9 flex-1" />
          </div>
        </Card>
      ))}
    </div>
  );
}
