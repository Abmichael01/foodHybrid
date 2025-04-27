import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import React from "react";
import { FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

const Beneficiary: React.FC = () => {
  
  return (
    <div>
      <h1 className="text-[12px]">Beneficiary</h1>
      <div className="mt-[4px]">
        <Link to="/partner/portfolio/wallet?dialog=walletWithdrawal&dialogCurrent=amount" className="flex gap-2 items-center">
            <FaUserCircle className="size-[33.33px]" />
            <div className="">
                <h1 className="text-[18px] font-[600]">Emmanuel Ayomide Ebo</h1>
                <p className="text-[14px] font-[500] text-[#6E6E6E]">1122334455 | Lloyds Bank</p>
            </div>
        </Link>
      </div>
      <Link to="/partner/portfolio/wallet?dialog=walletWithdrawal&dialogCurrent=newBeneficiary" className="flex justify-center w-full">
        <Button variant={"outline"} className="mt-[40px] rounded-full p-[8px] bg-[#F0F0F0]">
          <Plus />
          Add a new beneficiary
        </Button>
      </Link>
    </div>
  );
};

export default Beneficiary;
