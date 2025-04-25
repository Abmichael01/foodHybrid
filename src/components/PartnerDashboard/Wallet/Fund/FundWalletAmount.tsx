import { Button } from "@/components/ui/button";
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";


const FundWalletAmount: React.FC = () => {
  const navigate = useNavigate()
  const location = useLocation()
  return (
    <div className="flex flex-col gap-[60px] items-center font-satoshi mt-[60px]">
      <div className="flex flex-col gap-[12px] items-center w-full">
        <h1 className="text-[20px] font-[500] ">Amount</h1>
        <h1 className="text-[44px] font-[900] flex items-center gap-[8px]">
          <span className="text-[24px] font-[700]">£</span>
          <p
            contentEditable
            autoFocus
            aria-placeholder="0.00"
            className="outline-none"
          ></p>
        </h1>
        <Button
          onClick={() => {
            navigate(`${location.pathname}?dialog=fundWallet&dialogCurrent=fundSuceess`)
          }}
          className="w-full"
        >
          Next
        </Button>
      </div>
      
    </div>
  );
};

export default FundWalletAmount;
