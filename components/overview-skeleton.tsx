export default function OverviewSkeleton() {
  return (
    <div className="border border-[#E2E8F0] rounded-lg p-6">
      <div className="space-y-4">
        <div className="h-4 w-24 bg-slate-200 rounded animate-pulse" />
        <div className="space-y-2">
          <div className="h-4 w-full bg-slate-200 rounded animate-pulse" />
          <div className="h-4 w-3/4 bg-slate-200 rounded animate-pulse" />
          <div className="h-4 w-1/2 bg-slate-200 rounded animate-pulse" />
        </div>
      </div>
    </div>
  );
}
