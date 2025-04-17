import React from "react";
import heroImg from "@/assets/images/wheatField.webp";
import Motto from "@/components/Others/Motto";
import { Button } from "@/components/ui/button";
import StackedProducts from "@/components/LandingPage/StackedProducts";

const Hero: React.FC = () => {
  return (
    <div className="section-padding relative h-[600px] sm:h-[780px] flex flex-col gap-5 justify-center">
      <img
        src={heroImg}
        alt="hero-image"
        className="absolute inset-0 w-full h-full"
      />
      <div className="space-y-[28px] relative z-[1]">
        <Motto className="" sizes={["text-[52px] sm:text-[64px]", " text-[28px] sm:text-[40px]"]} />
        <Button className="py-[12px] px-[20px]">Get Started</Button>
      </div>
      <StackedProducts type="rice" className="absolute left-[2%] sm:left-[40px] lg:left-[100px] " />
      <StackedProducts type="beans" className="absolute right-[2%] sm:right-[40px] lg:right-[100px]  " />
    </div>
  );
};

export default Hero;
