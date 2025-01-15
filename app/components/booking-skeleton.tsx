import { Skeleton } from "@/components/ui/skeleton";

export default function BookingSkeleton() {
  return (
    <div className="w-full max-w-2xl mx-auto bg-white p-6">
      <div className="space-y-6">
        <div className="flex justify-between items-center pb-2">
          <div className="space-y-1">
            <Skeleton className="h-6 w-32" />
            <Skeleton className="h-4 w-48" />
          </div>
          <Skeleton className="h-4 w-16" />
        </div>

        <div className="space-y-6">
          <div className="space-y-2">
            <Skeleton className="h-5 w-40" />
            <Skeleton className="h-4 w-64" />
          </div>

          <div className="space-y-4">
            <Skeleton className="h-10 w-full" />
            <Skeleton className="h-24 w-full" />
            <Skeleton className="h-32 w-full" />
          </div>
        </div>

        <div className="flex justify-between pt-6">
          <Skeleton className="h-9 w-24" />
          <Skeleton className="h-9 w-24" />
        </div>
      </div>
    </div>
  );
}
