export default function FeedbackSkeleton() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="h-4 w-28 bg-slate-200 rounded animate-pulse" />
        <div className="h-4 w-20 bg-slate-200 rounded animate-pulse" />
      </div>

      <div className="space-y-4">
        {[1, 2, 3].map((item) => (
          <div key={item} className="space-y-4">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-slate-200 animate-pulse" />
              <div className="flex-1 space-y-2">
                <div className="h-4 w-32 bg-slate-200 rounded animate-pulse" />
                <div className="h-3 w-24 bg-slate-200 rounded animate-pulse" />
                <div className="h-3 w-20 bg-slate-200 rounded animate-pulse" />
              </div>
            </div>
            <div className="space-y-2">
              <div className="h-4 w-full bg-slate-200 rounded animate-pulse" />
              <div className="h-4 w-3/4 bg-slate-200 rounded animate-pulse" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
