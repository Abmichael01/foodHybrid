import React from "react";
import coins from "@/assets/images/coins.webp";

const Hero: React.FC = () => {
  return (
    <div className="section-padding pl-0 relative h-fit sm:h-[500px] lg:h-[709px] flex flex-col sm:flex-row sm:items-center gap-[50px] sm:gap-5 sm:justify-between justify-center">
      <div className="space-y-[px] relative z-[1] w-full sm:w-[60%] mt-[120px] sm:mt-0">
        <h2 className=" font-[600] text-[20px] text-[#15221B52]">
          Food Hybrid's
        </h2>
        <h2 className=" text-[28px] lg:text-[48px] font-[600]">
          Rewards & Loyalty <br /> Program
        </h2>
        <h3 className="text-[24px] font-satoshi font-[500] text-[#252525]">
          Become a Partner and Earn with Our Distribution Program!
        </h3>
        <button className="button bg-[#15221B] text-white mt-[60px]">
          Become a partner
        </button>
      </div>
      <div className="relative self-center  ">
        <img
          src={coins}
          alt=""
          className=" w-[100%] h-[283.0px] sm:w-[303.65px] sm:h-[225.8px] lg:w-[527px] lg:h-[424px]"
        />
      </div>
    </div>
  );
};

export default Hero;
