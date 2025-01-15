export default function ProfileSkeleton() {
  return (
    <div className="flex flex-col md:flex-row items-start justify-between gap-4 mb-6">
      <div className="flex md:items-center gap-4">
        <div className="relative w-20 md:w-[100px] aspect-square rounded-full bg-slate-200 animate-pulse" />
        <div className="flex-shrink space-y-2">
          <div className="h-4 w-48 bg-slate-200 rounded animate-pulse" />
          <div className="h-3 w-32 bg-slate-200 rounded animate-pulse" />
          <div className="h-3 w-40 bg-slate-200 rounded animate-pulse" />
        </div>
      </div>

      <div className="w-full md:w-auto md:min-w-[320px] p-3 md:p-4 space-y-3 md:space-y-4 border border-[#E2E8F0] rounded-lg">
        <div className="space-y-2">
          <div className="h-4 w-3/4 bg-slate-200 rounded animate-pulse" />
          <div className="h-3 w-1/2 bg-slate-200 rounded animate-pulse" />
        </div>
        <div className="flex gap-2">
          <div className="flex-1 h-9 bg-slate-200 rounded animate-pulse" />
          <div className="flex-1 h-9 bg-slate-200 rounded animate-pulse" />
        </div>
      </div>
    </div>
  );
}
