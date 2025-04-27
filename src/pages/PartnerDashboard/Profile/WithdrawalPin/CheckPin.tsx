import { Button } from "@/components/ui/button";
import React, { useState } from "react";
import { GoArrowLeft } from "react-icons/go";
import { Link } from "react-router-dom";

const CheckPin: React.FC = () => {
  const [showPin, setShowPin] = useState(false);
  return (
    <div className="space-y-10">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-[8px]">
          <Link to="/partner/profile/withdrawal-pin">
            <GoArrowLeft className="size-[24px]" />
          </Link>
          <h1 className="text-[24px]">Check Withdrawal PIN</h1>
        </div>
      </div>
      <div className=" flex justify-center">
        {!showPin && (
          <div className="space-y-[60px] w-full md:w-[698px]  items-center">
            <div className="space-y-[8px] flex flex-col items-center w-full ">
              <label htmlFor="password" className="text-[14px] text-[#6E6E6E]">
                Password
              </label>                                                                                                                                                     
              <input
                id="password"
                type="password"
                name="new-password"
                autoComplete="new-password"
                className="py-[18px] px-[20px] border border-[#6E6E6E] w-full"
                placeholder="Enter your login password"
              />
            </div>
            <Button onClick={() => setShowPin(true)} className="w-full">
              Next
            </Button>
          </div>
        )}

        {showPin && (
          <div className="space-y-[24px] w-full md:w-[698px] flex items-center flex-col">
            <h1 className="text-[14px] text-[#6E6E6E]">Withdrawal PIN</h1>
            <div className="flex gap-[24px]">
              {"2222".split("").map((pin, index) => (
                <h1
                  key={index}
                  className="text-[32px] font-[500] border border-[#15221B1A]  px-[20px] py-[10px]"
                >
                  {pin}
                </h1>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CheckPin;
