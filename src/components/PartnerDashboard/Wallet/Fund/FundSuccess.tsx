import { Button } from "@/components/ui/button";
import { useCloseDialog } from "@/hooks/closeDialog";
import { BadgeCheck } from "lucide-react";
import React from "react";
import { PiCoinsBold } from "react-icons/pi";

const FundSuccess: React.FC = () => {
  const close = useCloseDialog("fundWallet");
  return (
    <div className="space-y-[]">
      <div className="flex flex-col gap-[24px] items-center text-center">
        <BadgeCheck className="size-[120px] stroke-white fill-[#16A34A] text-center" />
        <h1 className="text-[36px] font-[700]">+£10,000</h1>
        <p className="text-[20px] font-[500]">£10,000 has successfully been added to your wallet</p>
        <PiCoinsBold className="text-yellow-500 fill-yellow-400 mt-[4px]" />
      </div>
      <Button onClick={close} className="w-full mt-[40px]">
        Done
      </Button>
    </div>
  );
};

export default FundSuccess;
