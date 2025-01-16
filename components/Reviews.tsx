import { FeedbackSkeleton } from "./skeletons";
import StudentFeedback from "./student-feedback";
import { Suspense } from "react";

interface ReviewsProps {
  isLoading: boolean;
}

export function Reviews({ isLoading }: ReviewsProps) {
  if (isLoading) return <FeedbackSkeleton />;

  return (
    <div id="reviews" className="border border-[#E2E8F0] rounded-lg p-4">
      <Suspense fallback={<FeedbackSkeleton />}>
        <StudentFeedback />
      </Suspense>
    </div>
  );
}
