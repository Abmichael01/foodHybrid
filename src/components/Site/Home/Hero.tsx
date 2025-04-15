import React from "react";
import heroImg from "@/assets/images/wheatField.webp";
import Motto from "@/components/Others/Motto";
import { Button } from "@/components/ui/button";
import StackedProducts from "@/components/LandingPage/StackedProducts";

const Hero: React.FC = () => {
  return (
    <div className="section-padding relative h-[780px] flex flex-col gap-5 justify-center">
      <img
        src={heroImg}
        alt="hero-image"
        className="absolute inset-0 w-full h-full"
      />
      <div className="space-y-[28px] relative z-[1]">
        <Motto className="" sizes={["text-[64px]", "text-[40px]"]} />
        <Button className="py-[12px] px-[20px]">Get Started</Button>
      </div>
      <StackedProducts type="rice" className="absolute left-[3%] sm:left-[10%] " />
      <StackedProducts type="beans" className="absolute right-[3%] sm:right-[10%]  " />
    </div>
  );
};

export default Hero;
