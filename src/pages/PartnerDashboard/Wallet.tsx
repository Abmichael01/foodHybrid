import History from "@/components/PartnerDashboard/Portfolio/History";
import OverviewCard from "@/components/PartnerDashboard/Portfolio/OverviewCard";
import SelectPage from "@/components/PartnerDashboard/Portfolio/SelectPage";
import { Separator } from "@/components/ui/separator";
import React from "react";
import { FaPlus } from "react-icons/fa6";
import { FiUpload } from "react-icons/fi";
import { GoArrowLeft } from "react-icons/go";
import { Link } from "react-router-dom";

const transactions = [
    {
      type: "Remittance Inflow",
      time: "3:31am, 21st Jan. 2025",
      amount: "+£2350",
    },
    {
      type: "Remittance Inflow",
      time: "16:32pm, 21st Jan. 2025",
      amount: "+£2350",
    },
    {
      type: "Withdrawal",
      time: "11:42am, 21st Jan. 2025",
      amount: "-£2350",
    },
    {
      type: "Remittance Inflow",
      time: "5:30am, 21st Jan. 2025",
      amount: "+£2350",
    },
];

const Wallet: React.FC = () => {
  return (
    <div className="space-y-10">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-[8px]">
          <Link to="/partner/portfolio">
            <GoArrowLeft className="size-[24px]" />
          </Link>
          <h1 className="text-[24px]">Wallet</h1>
        </div>
        <SelectPage />
      </div>
      <div className="flex justify-center">
        <OverviewCard className="w-[698px]">
          <h1 className="text-[#FFFFFFCC] text-[14px] text-center">Balance</h1>
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
          <div className="flex justify-center">
            <div className="grid grid-cols-3 justify-center gap-[20px] w-[50%]">
              <div className="text-center flex flex-col py-[4px] gap-[2px] items-center float-right cursor-pointer">
                <FiUpload className="size-[15px]" />
                <h1 className="text-[12px]">Withdraw</h1>
              </div>
              <div className="flex justify-center">
                <Separator orientation="vertical" className="h-[75%]" />
              </div>
              <div className="text-center flex flex-col py-[4px]  gap-[2px] items-center cursor-pointer">
                <FaPlus className="size-[15px]" />
                <h1 className="text-[12px]">Fund</h1>
              </div>
            </div>
          </div>
        </OverviewCard>
      </div>
      <History heading="Transactions" data={transactions} />
    </div>
  );
};

export default Wallet;
