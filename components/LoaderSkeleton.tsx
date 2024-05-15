/**
 * v0 by Vercel.
 * @see https://v0.dev/t/tqQHqv4Lm2B
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Skeleton } from "@/components/ui/skeleton";

export default function Component() {
  return (
    <div className="flex flex-col items-center justify-center py-20">
      {/* <Skeleton className="w-24 h-24 rounded-full animate-pulse bg-gradient-to-br from-blue-100 to-blue-50" /> */}
      <div className="space-y-2 w-full max-w-4xl">
        <Skeleton className="h-6 w-full animate-pulse bg-gradient-to-r from-blue-100 to-blue-50" />
        <Skeleton className="h-6 w-full animate-pulse bg-gradient-to-r from-blue-100 to-blue-50" />
      </div>
      <div className="w-full max-w-4xl space-y-6">
        <div className="space-y-4">
          <Skeleton className="h-12 w-full animate-pulse bg-gradient-to-r from-blue-100 to-blue-50" />
          <div className="grid grid-cols-2 gap-4">
            <Skeleton className="h-24 animate-pulse bg-gradient-to-r from-blue-100 to-blue-50" />
            <Skeleton className="h-24 animate-pulse bg-gradient-to-r from-blue-100 to-blue-50" />
          </div>
        </div>
        <div className="space-y-4">
          <Skeleton className="h-10 w-full animate-pulse bg-gradient-to-r from-blue-100 to-blue-50" />
          <div className="grid grid-cols-12 gap-4">
            <Skeleton className="col-span-2 h-10 animate-pulse bg-gradient-to-r from-blue-100 to-blue-50" />
            <Skeleton className="col-span-3 h-10 animate-pulse bg-gradient-to-r from-blue-100 to-blue-50" />
            <Skeleton className="col-span-2 h-10 animate-pulse bg-gradient-to-r from-blue-100 to-blue-50" />
            <Skeleton className="col-span-3 h-10 animate-pulse bg-gradient-to-r from-blue-100 to-blue-50" />
            <Skeleton className="col-span-2 h-10 animate-pulse bg-gradient-to-r from-blue-100 to-blue-50" />
          </div>
        </div>
        <div className="space-y-4">
          <Skeleton className="h-10 w-full animate-pulse bg-gradient-to-r from-blue-100 to-blue-50" />
          <Skeleton className="h-40 w-full animate-pulse bg-gradient-to-r from-blue-100 to-blue-50" />
        </div>
      </div>
    </div>
  );
}
