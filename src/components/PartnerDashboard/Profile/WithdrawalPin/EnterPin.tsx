import React from "react";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const otpSlotClassName =
  "h-12 w-12 text-[32px] data-[active=true]:ring-[0px]  first:rounded-l-none first:border-l-0 last:rounded-r-none border-0 shadow-none  border-b-2 border-[#444] data-[active=true]:border-[#494949]";

const EnterPin: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div className="space-y-[80px]">
      <div className="space-y-[40px]">
        <div className="space-y-[24px] font-satoshi flex flex-col items-center">
          <h1 className="font-[500] text-[16px]">Enter old withdrawal PIN</h1>
          <InputOTP maxLength={6}>
            <InputOTPGroup className="flex gap-2">
              <InputOTPSlot index={0} autoFocus className={otpSlotClassName} />
              <InputOTPSlot index={1} className={otpSlotClassName} />
              <InputOTPSlot index={2} className={otpSlotClassName} />
              <InputOTPSlot index={3} className={otpSlotClassName} />
            </InputOTPGroup>
          </InputOTP>
        </div>
        <div className="space-y-[24px] font-satoshi flex flex-col items-center">
          <h1 className="font-[500] text-[16px]">Enter new withdrawal PIN</h1>
          <InputOTP maxLength={6}>
            <InputOTPGroup className="flex gap-2">
              <InputOTPSlot index={0} autoFocus className={otpSlotClassName} />
              <InputOTPSlot index={1} className={otpSlotClassName} />
              <InputOTPSlot index={2} className={otpSlotClassName} />
              <InputOTPSlot index={3} className={otpSlotClassName} />
            </InputOTPGroup>
          </InputOTP>
        </div>
      </div>
      <Button
        onClick={() =>
          navigate(
            "/partner/profile/withdrawal-pin/change-pin?current=confirmOtp"
          )
        }
        className="w-full bg-[#15221B]"
      >
        Reset
      </Button>
    </div>
  );
};

export default EnterPin;
