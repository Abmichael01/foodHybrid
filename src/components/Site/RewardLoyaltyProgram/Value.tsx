import React from "react";
import value from "@/assets/images/value.webp";

const Value: React.FC = () => {
  return (
    <div className="section-padding space-y-[10px] mt-[120px] sm:mt-[0]">
      <h1 className="text-[20px] sm:text-[32.11px] lg:text-[44px] font-[600] text-center">
        We understand that{" "}
        <span className="font-distant-stroke font-[500] text-[32px] sm:text-[60px]">You</span>,
        our <br /> Distributors, are at the heart of our <br /> success
      </h1>
      <div className="sm:bg-[#F9F9F9]  sm:px-[47px] py-[28px] rounded-[24px] flex flex-col-reverse sm:flex-row gap-[47px] items-center">
        <img src={value} alt="" className=" w-full sm:w-1/2 rounded-[7.99px] sm:rounded-[24px]" />
        <div className="space-y-[20px]">
          <h2 className="text-[28px] lg:text-[40px] text-[#15221B] font-[600]">
            We Value You
          </h2>
          <div className="space-y-[10px] text-[18px] sm:text-[20px] font-[500] text-[#494949]]">
            <p className="">
              So, we went ahead to create an exciting and rewarding Loyalty
              Program to give back and support your growth.
            </p>
            <p className="">
              From newcomers to top performers, we’ve got a range of rewards
              that recognize your hard work, loyalty, and commitment to bringing
              innovative food hybrids to market.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Value;
