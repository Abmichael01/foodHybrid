import { cn } from "@/lib/utils";
import React from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

const tabs = ["Processing", "Ongoing", "History"];

const Tab: React.FC = () => {
  const [params] = useSearchParams();
  const currentTab = params.get("tab");
  const navigate = useNavigate();
  return (
    <div className="flex">
      {tabs.map((tab, index) => (
        <div key={index} onClick={() => {
            navigate(`/partner/my-orders?tab=${tab.toLowerCase()}`)
        }} className={cn(
            "px-5 border-b-2 text-[16px] pb-[12px] cursor-pointer font-satoshi font-[500]",
            currentTab === tab.toLowerCase() ? "text-[#15221B] border-[#15221B]" : "text-[#929292] border-[#D0D3D1]" 
        )}>
          {tab}
        </div>
      ))}
    </div>
  );
};

export default Tab;
