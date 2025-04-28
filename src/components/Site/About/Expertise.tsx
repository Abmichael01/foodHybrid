import React from "react";
import patterns from "@/assets/images/patterns.webp";

const Expertise: React.FC = () => {
  return (
    <div className="section-padding mt-[100px] sm:mt-[150px] lg:mt-[200px] relative h-[237px] sm:-[304.9px] lg:h-[400px]">
      <img
        src={patterns}
        alt=""
        className="absolute rounded-full size-[237px] sm:size-[304.9px] lg:size-[400px] left-[50%] translate-x-[-50%] opacity-[0.4]"
      />
      <div className="relative z-[1] flex flex-col items-center justify-center h-full">
        <p className="text-[14px] sm:text-[20px] lg:text-[28px] font-[500] font-satoshi">With</p>
        <h2 className="font-[700] text-[24px] sm:text-[44px] lg:text-[60px]">
          30+ years{" "}
          <span className="font-distant-stroke font-[500] text-[32px] sm:text-[60px] lg:text-[72px]">
            of Expertise
          </span>
        </h2>
        <p className="font-satoshi text-[18px] sm:text-[20px] lg:text-[28px] text-center text-[#252525] font-[700]">
          Our team blends Traditional African Food Processing with Modern
          Technology, Delivering Authentic, High-Quality Products that meet
          Global Market Needs.
        </p>
      </div>
    </div>
  );
};

export default Expertise;
