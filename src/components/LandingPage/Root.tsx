import React from "react";
import pattern from "@/assets/images/patterns.webp";

const Root: React.FC = () => {
  return (
    <div className="section-padding pr-0 mt-60 flex items-center justify-between w-full relative overflow-x-hidden">
      <div className="space-y-5 w-full sm:max-w-[60%]">
        <div>
          <h1 className="w-[70%] sm:w-full text-[20px] sm:text-[24px] lg:text-[40px] text-[#15221B] font-[600]">
            Rooted in African Tradition
          </h1>
          <div className="h-[1px] w-[40%] bg-[#15221B] relative">
            <div className="size-[8px] bg-[#15221B] rotate-45 absolute right-0 top-[calc(50%-4px)]"></div>
          </div>
        </div>
        <p className="sm:text-[18px] lg:text-[28px] text-[#252525]">
        With each product carrying the taste of home, designed to meet the needs of Africans diaspora in the United Kingdom🇬🇧 (UK) and beyond. Introducing the world to the authentic flavors of the continent.
        </p>
      </div>
      <div className="overflow-hidden w-[150px] h-[150px] sm:size-[278px] lg:size-[480px] rounded-full sm:translate-x-[70px] absolute top-[-100px] right-[-50px] sm:relative">
        <img src={pattern} alt="" className="w-full h-full object-cover" />
      </div>
    </div>
  );
};

export default Root;
