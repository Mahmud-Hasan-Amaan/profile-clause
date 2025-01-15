import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function StudentFeedback() {
  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-[15px] font-medium text-[#0F172A]">
          Student Feedback
        </h2>
        <span className="text-[13px] text-[#64748B]">12 reviews</span>
      </div>

      <div className="space-y-6">
        {[1, 2, 3].map((item) => (
          <div key={item} className="space-y-4">
            <div className="flex items-start gap-4">
              <Avatar className="w-10 h-10">
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <div>
                <h3 className="text-[13px] font-medium text-[#0F172A] mb-1">
                  John Doe
                </h3>
                <p className="text-[12px] text-[#64748B] mb-1">
                  Software Engineer
                </p>
                <p className="text-[12px] text-[#94A3B8]">2 days ago</p>
              </div>
            </div>
            <p className="text-[13px] text-[#64748B] leading-relaxed">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
              voluptates, quod, voluptate, voluptas quae voluptatem quibusdam
              voluptatum quidem quos quia quas. Quisquam, quae. Quisquam
              voluptates, quod, voluptate, voluptas quae voluptatem quibusdam
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
