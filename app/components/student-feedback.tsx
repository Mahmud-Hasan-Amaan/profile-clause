import { Star } from "lucide-react";
import { Card } from "@/components/ui/card";
import Image from "next/image";

export default function StudentFeedback() {
  const reviews = [
    {
      id: 1,
      name: "Alice Johnson",
      avatar: "/placeholder.svg?height=40&width=40",
      rating: 5,
      date: "2 days ago",
      comment:
        "Excellent tutor! Very knowledgeable and patient. Helped me understand complex topics easily.",
    },
    {
      id: 2,
      name: "Bob Smith",
      avatar: "/placeholder.svg?height=40&width=40",
      rating: 4,
      date: "1 week ago",
      comment:
        "Great session! The tutor was well-prepared and provided valuable insights.",
    },
    {
      id: 3,
      name: "Carol Davis",
      avatar: "/placeholder.svg?height=40&width=40",
      rating: 5,
      date: "2 weeks ago",
      comment:
        "Fantastic experience! The tutor's teaching style is very effective and engaging.",
    },
    {
      id: 4,
      name: "David Wilson",
      avatar: "/placeholder.svg?height=40&width=40",
      rating: 4,
      date: "3 weeks ago",
      comment:
        "Very helpful session. The tutor clarified all my doubts and provided additional resources.",
    },
  ];

  return (
    <div className="w-full max-w-6xl mx-auto p-2 sm:p-4">
      <div className="flex justify-between items-center mb-4 sm:mb-6">
        <div className="flex items-center gap-2">
          <h2 className="text-lg sm:text-xl font-semibold font-clash">
            Student Feedback
          </h2>
          <span className="text-xs sm:text-sm text-gray-500">(32 reviews)</span>
        </div>
        <button className="text-xs sm:text-sm text-blue-600 hover:text-blue-800">
          View All
        </button>
      </div>

      <div className="grid gap-3 sm:gap-6 md:grid-cols-2">
        {reviews.map((review) => (
          <Card key={review.id} className="p-3 sm:p-4">
            <div className="flex items-start gap-2 sm:gap-3">
              <Image
                src={review.avatar || "/placeholder.svg"}
                alt={`${review.name}'s avatar`}
                width={32}
                height={32}
                className="rounded-full sm:w-[40px] sm:h-[40px]"
              />
              <div className="flex-1">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-sm sm:text-base font-semibold font-clash">
                      {review.name}
                    </h3>
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-3 h-3 sm:w-4 sm:h-4 ${
                            i < review.rating
                              ? "text-yellow-400 fill-yellow-400"
                              : "text-gray-300"
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                  <span className="text-xs sm:text-sm text-gray-500">
                    {review.date}
                  </span>
                </div>
                <p className="mt-1 sm:mt-2 text-xs sm:text-sm text-gray-600 line-clamp-3 font-clash">
                  {review.comment}
                </p>
                <button className="mt-1 sm:mt-2 text-xs sm:text-sm text-blue-600 hover:text-blue-800">
                  View More
                </button>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
