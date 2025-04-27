import { Button } from "@/components/ui/button";
import React from "react";
import { Link } from "react-router-dom";

const EnterPassword: React.FC = () => {
  return (
    <div className="space-y-[60px]">
      <div className="space-y-[40px]">
        <div className="space-y-[8px] flex flex-col items-center w-full ">
          <label htmlFor="password" className="text-[14px] text-[#6E6E6E]">
            Current Password
          </label>
          <input
            id="password"
            type="password"
            name="new-password"
            autoComplete="new-password"
            className="py-[18px] px-[20px] border border-[#6E6E6E] w-full"
            placeholder="Enter login password"
          />
        </div>
        <div className="space-y-[8px] flex flex-col items-center w-full ">
          <label htmlFor="password" className="text-[14px] text-[#6E6E6E]">
            New Password
          </label>
          <input
            id="password"
            type="password"
            name="new-password"
            autoComplete="new-password"
            className="py-[18px] px-[20px] border border-[#6E6E6E] w-full"
            placeholder="Enter login password"
          />
        </div>
      </div>
      <Link to="/partner/profile/reset-password?current=confirmOtp">
        <Button className="w-full">Next</Button>
      </Link>
    </div>
  );
};

export default EnterPassword;
