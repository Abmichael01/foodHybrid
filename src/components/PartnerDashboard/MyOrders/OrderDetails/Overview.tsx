import React from "react";
import orderBox from "@/assets/svgs/orderBox.svg";

const Overview: React.FC = () => {
  return (
    <div className="flex justify-between items-center">
      <div className="flex gap-20 items-center pl-[60px]">
        <img src={orderBox} alt="" className="size-[116.6px]" />
        <div className="space-y-[12px]">
          <h1 className="text-[24px] font-[500]">Order #5456</h1>
          <div className="space-y-[2px] font-satoshi">
            <p className="text-[14px] font-[500] text-[#929292]">Order ID</p>
            <p className="text-[16px] font-[700]">FHR-5210</p>
          </div>
          <div className="space-y-[2px] font-satoshi">
            <p className="text-[14px] font-[500] text-[#929292]">
              Date purchased
            </p>
            <p className="text-[16px] font-[700]">12th Jan. 2025</p>
          </div>
        </div>
      </div>
      <div className="space-y-[12px] text-end">
        <h1 className="text-[14px] text-[#1C274C] bg-[#1C274C1A] py-[4px] px-[12px] rounded-[2px]">
          Pending Settlement
        </h1>
        <div className="space-y-[2px] font-satoshi">
          <p className="text-[14px] font-[500] text-[#929292]">
          Amount paid
          </p>
          <p className="text-[16px] font-[700]">£2350</p>
        </div>
        <div className="space-y-[2px] font-satoshi">
          <p className="text-[14px] font-[500] text-[#929292]">
          Returns
          </p>
          <p className="text-[16px] font-[700] text-[#16A34A]">
            <span className="">+12%</span> 
            <span className=""> | </span> 
            <span className="">£2653.8</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Overview;
