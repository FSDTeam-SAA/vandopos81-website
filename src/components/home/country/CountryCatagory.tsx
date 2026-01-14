"use client";

import CountryCard from "@/components/shared/countryCard";
import { ChevronLeft, ChevronRight } from "lucide-react";
import React, { useRef } from "react";

const CountryCatagory = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  
  const data =  [ { value: "africa-all", name: "All Africa", continent: "africa", img: "/images/country1.png" },
      { value: "African", name: "Pakistan", continent: "African", img: "/images/flag_pakistan.png" },
  { value: "Caribbean", name: "Caribbean", continent: "Caribbean", img: "/images/flag_bangladesh.png" },
  { value: "Latino", name: "Latino", continent: "Latino", img: "/images/country1.png" },
  { value: "Asian", name: "Philippines", continent: "asia", img: "/images/country1.png" },
  // ... rest of data
  { value: "nigeria", name: "Nigeria", continent: "africa", img: "/images/country1.png" },
  { value: "ethiopia", name: "Ethiopia", continent: "africa", img: "/images/country1.png" },
  { value: "egypt", name: "Egypt", continent: "africa", img: "/images/country1.png" },
  { value: "dr-congo", name: "DR Congo", continent: "africa", img: "/images/country1.png" },
  { value: "tanzania", name: "Tanzania", continent: "africa", img: "/images/country1.png" },
  { value: "south-africa", name: "South Africa", continent: "africa", img: "/images/country1.png" },
  { value: "kenya", name: "Kenya", continent: "africa", img: "/images/country1.png" },
  { value: "uganda", name: "Uganda", continent: "africa", img: "/images/country1.png" },
  { value: "algeria", name: "Algeria", continent: "africa", img: "/images/country1.png" },
  { value: "sudan", name: "Sudan", continent: "africa", img: "/images/country1.png" },
  { value: "morocco", name: "Morocco", continent: "africa", img: "/images/country1.png" },
  { value: "angola", name: "Angola", continent: "africa", img: "/images/country1.png" },
  { value: "mozambique", name: "Mozambique", continent: "africa", img: "/images/country1.png" },
  { value: "ghana", name: "Ghana", continent: "africa", img: "/images/country1.png" },
  { value: "madagascar", name: "Madagascar", continent: "africa", img: "/images/country1.png" },


  
];

  const handleScroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollAmount = clientWidth * 0.8;
      scrollRef.current.scrollTo({
        left: direction === 'left' ? scrollLeft - scrollAmount : scrollLeft + scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="overflow-hidden py-10 container mx-auto ">
      {/* <div className=" mx-auto px-4 mb-8 text-center">
        <h2 className="text-3xl font-bold text-gray-900 border-none">Shop by Country</h2>
        <p className="text-gray-500 mt-2 text-lg">Find authentic products from your favorite regions</p>
      </div> */}

      <div className="relative group  mx-auto">
        {/* Navigation Buttons */}
        <button 
          onClick={() => handleScroll('left')}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-30 p-3 rounded-full bg-white/90 shadow-lg text-gray-800 hover:bg-primary hover:text-white transition-all duration-300 opacity-90 group-hover:opacity-100  md:block"
        >
          <ChevronLeft size={24} />
        </button>
        <button 
          onClick={() => handleScroll('right')}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-30 p-3 rounded-full bg-white/90 shadow-lg text-gray-800 hover:bg-primary hover:text-white transition-all duration-300 opacity-90 group-hover:opacity-100  md:block"
        >
          <ChevronRight size={24} />
        </button>

        {/* Blur/Gradient Overlays */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-20 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-20 pointer-events-none"></div>

        {/* Scrollable Container */}
        <div 
          ref={scrollRef}
          className="relative w-full overflow-x-auto scrollbar-hide no-scrollbar"
        >
          {/* Slider track - We keep the marquee div but allow manual scrolling */}
          <div className="flex w-max gap-8 animate-marquee hover:pause whitespace-nowrap py-4 px-32">
            {[...data, ...data].map((item, index) => (
              <div key={index} className="inline-block">
                <CountryCard data={item} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CountryCatagory;
