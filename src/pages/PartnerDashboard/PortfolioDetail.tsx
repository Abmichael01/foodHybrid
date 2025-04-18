import React from "react";
import { Link } from "react-router-dom";
import { GoArrowLeft } from "react-icons/go";
import { FiUpload } from "react-icons/fi";
import OverviewCard from "@/components/PartnerDashboard/Portfolio/OverviewCard";
import MyOrders from "@/components/PartnerDashboard/Portfolio/MyOrders";
import History from "@/components/PartnerDashboard/Portfolio/History";
import SelectPage from "@/components/PartnerDashboard/Portfolio/SelectPage";

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

const PortfolioDetail: React.FC = () => {
  return (
    <div className="space-y-10">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-[8px]">
          <Link to="/partner/portfolio">
            <GoArrowLeft className="size-[24px]" />
          </Link>
          <h1 className="text-[24px]">Portfolio</h1>
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
          <div className="text-center flex flex-col gap-[2px] items-center cursor-pointer">
            <FiUpload className="size-[15px]" />
            <h1 className="text-[12px]">Withdraw</h1>
          </div>
        </OverviewCard>
      </div>
      <MyOrders pending />
      <History heading="Transactions" data={transactions} />
    </div>
  );
};

export default PortfolioDetail;
