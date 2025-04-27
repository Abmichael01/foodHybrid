import React from "react";
import { Button } from "@/components/ui/button";

const Hero: React.FC = () => {
  return (
    <div className="section-padding relative h-[600px] sm:h-[780px] flex flex-col gap-5 justify-center">
      <div className="space-y-[28px] relative z-[1]">
        <div className="">
          <h2 className=" ">About Us</h2>
          <h2 className="text-[48px] font-[600]">
            Bridging <span className="font-afro font-[400]">AFRICA</span>'s Rich
            Agricultural Heritage with the World
          </h2>
        </div>
        <Button className="py-[12px] px-[20px]">Get Started</Button>
      </div>
    </div>
  );
};

export default Hero;
