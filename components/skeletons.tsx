import { Card } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { Button } from "@/components/ui/button";

export function ServicesSkeleton() {
  return (
    <div className="grid grid-cols-3 gap-6 skeleton-fade">
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

export function ProfileSkeleton() {
  return (
    <div className="flex items-start gap-4 mb-10 skeleton-fade">
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

export function FeedbackSkeleton() {
  return (
    <div className="w-full max-w-6xl mx-auto p-4">
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center gap-2">
          <Skeleton className="h-6 w-32" />
          <Skeleton className="h-4 w-24" />
        </div>
        <Skeleton className="h-4 w-16" />
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {[1, 2].map((i) => (
          <Card key={i} className="p-4">
            <div className="flex items-start gap-3">
              <Skeleton className="h-10 w-10 rounded-full" />
              <div className="flex-1">
                <div className="flex justify-between items-start">
                  <div>
                    <Skeleton className="h-5 w-32 mb-2" />
                    <Skeleton className="h-4 w-24" />
                  </div>
                  <Skeleton className="h-4 w-24" />
                </div>
                <Skeleton className="h-4 w-full mt-4" />
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}

export function BookingSkeleton() {
  return (
    <div className="w-full max-w-2xl mx-auto bg-white p-6">
      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <div className="space-y-1">
            <Skeleton className="h-6 w-32" />
            <Skeleton className="h-4 w-48" />
          </div>
          <Skeleton className="h-4 w-16" />
        </div>

        <div className="space-y-4">
          <div className="space-y-2">
            <Skeleton className="h-5 w-40" />
            <Skeleton className="h-4 w-64" />
          </div>

          <div className="space-y-3">
            <Skeleton className="h-10 w-full" />
            <Skeleton className="h-24 w-full" />
            <Skeleton className="h-32 w-full" />
          </div>
        </div>

        <div className="flex justify-between pt-4">
          <Skeleton className="h-9 w-24" />
          <Skeleton className="h-9 w-24" />
        </div>
      </div>
    </div>
  );
}

export function DocumentsSkeleton() {
  return (
    <Card className="p-4 sm:p-6">
      <Skeleton className="h-4 w-28 mb-6" />
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {[1, 2].map((i) => (
          <div
            key={i}
            className="flex items-center gap-4 p-4 bg-[#F8FAFC] rounded-[6px]"
          >
            <Skeleton className="w-10 h-10 rounded-[6px]" />
            <div className="space-y-2">
              <Skeleton className="h-4 w-32" />
              <Skeleton className="h-3 w-16" />
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}

export function EducationSkeleton() {
  return (
    <Card className="p-6">
      <Skeleton className="h-4 w-28 mb-6" />
      <div className="space-y-6">
        {[1, 2].map((i) => (
          <div key={i} className="flex gap-4">
            <Skeleton className="w-12 h-12 rounded-[6px]" />
            <div className="flex-1 space-y-2">
              <Skeleton className="h-4 w-48" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-32" />
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}

export function ExperienceSkeleton() {
  return (
    <Card className="p-6">
      <Skeleton className="h-4 w-28 mb-6" />
      <div className="flex gap-4">
        <Skeleton className="w-12 h-12 rounded-[6px]" />
        <div className="flex-1 space-y-2">
          <Skeleton className="h-4 w-32" />
          <Skeleton className="h-4 w-48" />
          <Skeleton className="h-4 w-40" />
        </div>
      </div>
    </Card>
  );
}

export function OverviewSkeleton() {
  return (
    <Card className="p-6">
      <div className="space-y-4">
        <Skeleton className="h-4 w-24" />
        <div className="space-y-2">
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-3/4" />
          <Skeleton className="h-4 w-1/2" />
        </div>
      </div>
    </Card>
  );
}
