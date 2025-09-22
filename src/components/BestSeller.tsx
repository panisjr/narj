import Image from "next/image";
import React from "react";

export default function BestSeller() {
  return (
    <div>
      <div className="flex flex-row items-center justify-between">
        <p className="text-xl">This Season&#39;s Best Sellers</p>
      </div>
      <div className="flex flex-wrap flex-row items-center justify-center gap-5">
        <div className="relative w-[350px] h-[350px]">
          <Image
            src={"/assets/images/m1.jpg"}
            alt="Sample model"
            fill
            priority
            sizes="350px"
            className="object-cover"
          />
        </div>
      </div>
    </div>
  );
}
