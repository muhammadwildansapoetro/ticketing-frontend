export default function EventCardSkeleton() {
  return (
    <div className="group relative w-full animate-pulse rounded-xl bg-white p-5 shadow-lg sm:w-36 lg:w-48 xl:w-80">
      <div className="relative aspect-video w-full overflow-hidden rounded-t-xl bg-gray-200">
        {/* Placeholder for image */}
        <div className="h-full w-full bg-gray-300"></div>
      </div>
      <div className="m-3">
        <div className="mb-2 h-6 w-3/4 rounded bg-gray-300"></div>
        <div className="mb-2 h-4 w-1/2 rounded bg-gray-300"></div>
        <div className="mb-2 h-4 w-1/4 rounded bg-gray-300"></div>
        <div className="mt-3 flex items-center justify-start gap-2 border-t-2 border-gray-300 pt-3">
          <div className="h-10 w-10 rounded-full bg-gray-300"></div>
          <div className="h-4 w-1/2 rounded bg-gray-300"></div>
        </div>
      </div>
    </div>
  );
}
