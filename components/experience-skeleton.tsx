export default function ExperienceSkeleton() {
  return (
    <div className="border border-[#E2E8F0] rounded-lg p-6">
      <div className="h-4 w-28 bg-slate-200 rounded animate-pulse mb-6" />
      <div className="flex gap-4">
        <div className="w-12 h-12 bg-slate-200 rounded-[6px] animate-pulse" />
        <div className="flex-1 space-y-2">
          <div className="h-4 w-32 bg-slate-200 rounded animate-pulse" />
          <div className="h-4 w-48 bg-slate-200 rounded animate-pulse" />
          <div className="h-4 w-40 bg-slate-200 rounded animate-pulse" />
        </div>
      </div>
    </div>
  );
}
