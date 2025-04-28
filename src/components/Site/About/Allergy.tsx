import React from "react";
import allergyImage from "@/assets/images/allergy.webp";

const Allergy: React.FC = () => {
  return (
    <div className="section-padding flex mt-[120px] lg:mt-[200px]">
      <div className="bg-[#F9F9F9] flex items-center rounded-[24px] gap-[47px] py-[28px] px-[47px]">
        <div className="space-y-[12px] lg:space-y-[20px] flex-1">
          <h2 className="text-[28px] lg:text-[40px] font-[600] text-[#15221B]">Allergy Awareness</h2>
          <p className="text-[18px] lg:text-[24px] font-[500] font-satoshi text-start">
            Allergy safety is a priority in our production. Our team is fully
            trained to adhere to HACCP protocols to prevent cross-contamination,
            ensuring rigorous food safety management to protect consumers'
            health.
          </p>
        </div>
        <img src={allergyImage} alt="" className="w-[45%] h-[251.28px] lg:h-auto shrink-1 rounded-[12px]" />
      </div>
    </div>
  );
};

export default Allergy;
