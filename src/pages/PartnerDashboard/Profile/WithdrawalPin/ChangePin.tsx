import ConfirmOtp from "@/components/PartnerDashboard/Profile/WithdrawalPin/ConfirmOtp";
import EnterPin from "@/components/PartnerDashboard/Profile/WithdrawalPin/EnterPin";
import ResetSuccess from "@/components/PartnerDashboard/Profile/WithdrawalPin/ResetSuccess";
import React from "react";
import { GoArrowLeft } from "react-icons/go";
import { Link, useSearchParams } from "react-router-dom";




const ChangePin: React.FC = () => {
  const [ params ] = useSearchParams();
  const current = params.get("current") || "enterPin";
  
  return (
    <div className="space-y-10">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-[8px]">
          <Link to="/partner/profile/withdrawal-pin">
            <GoArrowLeft className="size-[24px]" />
          </Link>
          <h1 className="text-[24px]">Reset Withdrawal PIN</h1>
        </div>
      </div>
      <div className=" flex justify-center">
        <div className=" w-full md:w-[698px]">
          {current === "enterPin" &&  <EnterPin /> }
          {current === "confirmOtp" && <ConfirmOtp  /> }
          {current === "resetSuccess" && <ResetSuccess /> }
        </div>
      </div>
    </div>
  );
};

export default ChangePin;
