export default function DocumentsSkeleton() {
  return (
    <div className="border border-[#E2E8F0] rounded-lg p-4 sm:p-6">
      <div className="h-4 w-28 bg-slate-200 rounded animate-pulse mb-6" />
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {[1, 2].map((item) => (
          <div
            key={item}
            className="flex items-center gap-4 p-4 bg-[#F8FAFC] rounded-[6px]"
          >
            <div className="w-10 h-10 bg-slate-200 rounded-[6px] animate-pulse" />
            <div className="space-y-2">
              <div className="h-4 w-32 bg-slate-200 rounded animate-pulse" />
              <div className="h-3 w-16 bg-slate-200 rounded animate-pulse" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
