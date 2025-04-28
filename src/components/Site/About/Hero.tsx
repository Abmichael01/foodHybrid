import React from "react";
import africa from "@/assets/images/africa.webp"
import hand from "@/assets/images/hand.webp"
import greenEarth from "@/assets/images/greenEarth.webp"

const Hero: React.FC = () => {
  return (
    <div className="section-padding relative h-[500px] sm:h-[500px] lg:h-[709px] flex items-center gap-5 justify-between">
      <div className="space-y-[28px] relative z-[1] w-[60%]">
        
          <h2 className="about-us-text bg-clip-text text-transparent font-[700]">ABOUT US</h2>
          <h2 className=" text-[28px] lg:text-[48px] font-[600]">
            Bridging <span className="font-afro font-[400]">AFRICA</span>'s Rich
            Agricultural Heritage with the World
            <img src={greenEarth} alt="" className="inline size-[48px]" />
          </h2>
      </div>
      <div className="relative">
        <img src={africa} alt="" className=" sm:w-[211.65px] sm:h-[225.8px] lg:w-[365.5px]" />
        <img src={hand} alt="" className="absolute right-0 top-[40px] sm:h-[182.43px] sm:w-[357.9px]  lg:h-[315px] lg:w-[618px] object-contain" />
      </div>
    </div>
  );
};

export default Hero;
