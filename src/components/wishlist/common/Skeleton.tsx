import React from "react"
import { Skeleton } from "@/components/ui/skeleton"

const WishlistSkeleton = () => {
  return (
    <section className="my-10 md:my-16 lg:my-20">
      <div className="container mx-auto space-y-10">
        {/* Header skeleton */}
        <div className="space-y-2">
          <Skeleton className="h-8 w-48" />
          <Skeleton className="h-4 w-64" />
        </div>

        {/* Wishlist card skeletons */}
        {[...Array(1)].map((_, index) => (
          <div
            key={index}
            className="flex flex-col sm:flex-row gap-5 rounded-2xl border p-4"
          >
            {/* Image */}
            <Skeleton className="h-32 w-32 rounded-xl" />

            {/* Content */}
            <div className="flex-1 space-y-4">
              <Skeleton className="h-4 w-32" />
              <Skeleton className="h-6 w-3/4" />

              <div className="flex gap-4">
                <Skeleton className="h-4 w-16" />
                <Skeleton className="h-4 w-12" />
              </div>

              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-5/6" />

              <div className="flex items-center gap-4 pt-2">
                <Skeleton className="h-6 w-24" />
                <Skeleton className="h-10 w-32 rounded-lg" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default WishlistSkeleton
