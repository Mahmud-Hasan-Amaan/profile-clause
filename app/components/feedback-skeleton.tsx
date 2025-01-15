import { Card } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export default function FeedbackSkeleton() {
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
        {[1, 2, 3, 4].map((i) => (
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
