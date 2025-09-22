"use client";
import React from "react";
import FancyButton from "./FancyButton";
import { CarouselImage } from "./CarouselImage";
import BestSeller from "./BestSeller";

export default function Landing() {
  return (
    <div className="flex flex-col py-5 px-16 w-full overflow-y-auto">
      <div className="flex flex-row">
        <div className="w-full flex flex-col items-center md:justify-center border-[#053600]">
          <p className="md:text-7xl text-5xl">
            Crafted to seamlessly blend fashion with function
          </p>
          <div className="flex flex-row items-start w-full py-3">
            <FancyButton
              name="Shop New Arrival"
              borderColor="border-[#d9d9d9] shadow-md cursor-pointer"
              bgColor="bg-[#053600]"
            />
          </div>
        </div>
        <div className="w-full flex items-center justify-center">
          <CarouselImage />
        </div>
      </div>

      <div className="flex flex-row items-center pt-15">
        <BestSeller />
      </div>
    </div>
  );
}
