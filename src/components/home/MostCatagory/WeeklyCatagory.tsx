'use client'
import MostCatagoryCard from "@/components/shared/MostCatagoryCard";
import { useFetchTopRatedProduct } from "@/lib/hooks/product";
import { TopRatedProduct } from "@/lib/types/mostcatagory";
import React from "react";

const WeeklyCatagory = () => {
  const { data, isLoading, isError } = useFetchTopRatedProduct();

  if (isLoading) {
    return <div className="flex justify-center items-center min-h-[400px]">Loading...</div>;
  }

  if (isError) {
    return <div className="text-red-500">Failed to load top rated products.</div>;
  }

  const topRated = data?.data || [];

  return (
    <div>
      <div className="mb-7">
        <h1 className="text-secondary font-bold text-lg md:text-2xl leading-7.5 border-b pb-5">
          Weekly Wholesale Deals
        </h1>
        <p className=" border-b  w-20 h-1 bg-[#BCE3C9] "></p>
      </div>

        <div className="space-y-4  sm:space-y-5 lg:space-x-7">
        {topRated.length > 0 ? (
          topRated.map((item: TopRatedProduct) => (
            <MostCatagoryCard key={item._id} data={item} />
          ))
        ) : (
          <p>No products found.</p>
        )}
      </div>
    </div>
  );
};

export default WeeklyCatagory;
