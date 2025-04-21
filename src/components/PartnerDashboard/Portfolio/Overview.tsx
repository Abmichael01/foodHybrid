import React from "react";
import OverviewCard from "./OverviewCard";
import { Link } from "react-router-dom";
import { FaBagShopping, FaChevronRight } from "react-icons/fa6";
import { FiUpload } from "react-icons/fi";
import { FaTag } from "react-icons/fa";
import { IoMdWallet } from "react-icons/io";
import { FaPlus } from "react-icons/fa6";

const Overview: React.FC = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-x-[72px] gap-y-[50px]">
      <OverviewCard>
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-1 text-[12px]">
            <FaBagShopping className="w-[8px]" />
            <h1>Portfolio (RSI)</h1>
          </div>
          <Link to="/partner/portfolio/portfolio">
            <FaChevronRight />
          </Link>
        </div>
        <div className="text-center font-satoshi">
          <h1 className="text-center text-[24px] font-satoshi font-[700] gap-[1px] flex items-center justify-center">
            {" "}
            <span className=" text-[18px] text-[#FFFFFF99]">£</span> 53,300
          </h1>
          <h1 className="text-[12px]">
            {" "}
            <span className="text-[#16A34A]">+5.16%</span> (+£105) Today
          </h1>
        </div>
        <div className="text-center flex flex-col gap-[2px] items-center cursor-pointer">
          <FiUpload className="size-[15px]" />
          <h1 className="text-[12px]">Withdraw</h1>
        </div>
      </OverviewCard>

      <OverviewCard className="h-[160px] lg:h-full">
        <div className="flex justify-between items-center text-[12px]">
          <div className="flex items-center gap-1">
            <FaTag className="w-[8px]" />
            <h1>Total purchase</h1>
          </div>
          <Link to="#">
            <FaChevronRight className="" />
          </Link>
        </div>
        <div className="text-center font-satoshi h-full">
          <h1 className="text-center text-[24px] font-satoshi font-[700] gap-[1px] flex items-center justify-center mt-[20px]">
            {" "}
            <span className=" text-[18px] text-[#FFFFFF99]">£</span> 153,300
          </h1>
        </div>
      </OverviewCard>

      <OverviewCard>
        <div className="flex justify-between items-center text-[12px]">
          <div className="flex items-center gap-1">
            <IoMdWallet className="w-[8px]" />
            <h1>Wallet</h1>
          </div>
          <Link to="/partner/portfolio/wallet">
            <FaChevronRight />
          </Link>
        </div>
        <div className="text-center font-satoshi h-full">
          <h1 className="text-center text-[24px] font-satoshi font-[700] gap-[1px] flex items-center justify-center">
            {" "}
            <span className=" text-[18px] text-[#FFFFFF99]">£</span> 153,300
          </h1>
        </div>
        <div className="grid grid-cols-2">
          <div className="text-center flex flex-col gap-[2px] items-center cursor-pointer">
            <FiUpload className="size-[15px]" />
            <h1 className="text-[12px]">Withdraw</h1>
          </div>
          <div className="text-center flex flex-col gap-[2px] items-center cursor-pointer">
            <FaPlus className="size-[15px]" />
            <h1 className="text-[12px]">Fund</h1>
          </div>
        </div>
      </OverviewCard>
    </div>
  );
};

export default Overview;
