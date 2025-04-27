import { Button } from "@/components/ui/button";
import React from "react";
import { FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

const WithdrawalAmount: React.FC = () => {
  return (
    <div>
      <div className="flex items-center flex-col gap-[2px]">
        <div className="flex gap-1 items-center p-[8px] bg-[#F0F0F0] rounded-full">
          <FaUserCircle className="size-[16.66px]" />
          <h1 className="text-[14px] font-[600]">Emmanuel Ayomide Ebo</h1>
        </div>
        <p className="text-[12px] font-satoshi font-[500] text-[#6E6E6E]">
          1122334455 | Lloyds Bank
        </p>
      </div>
      <div className="font-satoshi space-y-[60px]">
        <div className="space-y-[8px]">
          <p className="">Amount</p>
          <div className="px-[16px] bg-[#F0F0F0] rounded-[12px] w-full text-[18px] flex items-center">
            <span className="font-[500] text-[#929292]">£</span>
            <input value={"10000"} type="text" className="w-full px-[12px] py-[10px] outline-none" />
          </div>
        </div>
        <Link to="/partner/portfolio/wallet?dialog=walletWithdrawal&dialogCurrent=enterPin" className="w-full">
        <Button className="w-full">Next</Button>
        </Link>
      </div>
    </div>
  );
};

export default WithdrawalAmount;
