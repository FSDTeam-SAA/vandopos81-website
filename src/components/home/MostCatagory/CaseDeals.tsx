'use client'
import MostCatagoryCard from "@/components/shared/MostCatagoryCard";
import { useCaseDealsProduct } from "@/lib/hooks/product";
import { TopRatedProduct } from "@/lib/types/mostcatagory";
import React from "react";

const CaseDeals = () => {
  const { data, isLoading, isError } = useCaseDealsProduct();

  if (isLoading) {
    return <div className="flex justify-center items-center min-h-[400px]">Loading...</div>;
  }

  if (isError) {
    return <div className="text-red-500">Failed to load case deals.</div>;
  }

  const caseDeals = data?.data || [];

  return (
    <div>
      <div className="mb-7">
        <h1 className="text-secondary font-bold text-lg md:text-2xl leading-7.5 border-b pb-5">
          Case Deals
        </h1>
        <p className=" border-b  w-20 h-1 bg-[#BCE3C9] "></p>
      </div>

      <div className="space-y-4  sm:space-y-5 lg:space-x-7">
        {caseDeals.length > 0 ? (
          caseDeals.map((item: TopRatedProduct) => (
            <MostCatagoryCard key={item._id} data={item} />
          ))
        ) : (
          <p>No products found.</p>
        )}
      </div>
    </div>
  );
};

export default CaseDeals;
