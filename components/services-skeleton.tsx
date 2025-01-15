export default function ServicesSkeleton() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
      {[1, 2, 3].map((item) => (
        <div
          key={item}
          className="p-6 border border-[#E2E8F0] rounded-lg shadow-sm space-y-4"
        >
          <div className="w-8 h-8 bg-slate-200 rounded animate-pulse" />
          <div className="space-y-2">
            <div className="h-4 w-32 bg-slate-200 rounded animate-pulse" />
            <div className="h-3 w-full bg-slate-200 rounded animate-pulse" />
          </div>
          <div className="space-y-2">
            <div className="h-3 w-16 bg-slate-200 rounded animate-pulse" />
            <div className="h-4 w-20 bg-slate-200 rounded animate-pulse" />
          </div>
          <div className="flex gap-3">
            <div className="flex-1 h-9 bg-slate-200 rounded animate-pulse" />
            <div className="flex-1 h-9 bg-slate-200 rounded animate-pulse" />
          </div>
        </div>
      ))}
    </div>
  );
}
