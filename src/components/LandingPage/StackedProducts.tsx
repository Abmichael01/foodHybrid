import React from "react";
import rice from "@/assets/images/rice.webp";
import riceBack from "@/assets/images/rice-back.webp";
import beans from "@/assets/images/beans.webp";
import beansBack from "@/assets/images/beans-back.webp";
import { cn } from "@/lib/utils";

interface Props {
  type: "rice" | "beans";
  className?: string;
}

const StackedProducts: React.FC<Props> = ({ type, className }) => {
  const imgFront = type === "beans" ? beans : rice;
  const imgBack = type === "beans" ? beansBack : riceBack;

  return (
    <div className={cn("bottom-[-60px] sm:bottom-[-90px] lg:bottom-[-120px] z-[4]", className)}>
      <div className="relative flex items-center">
        <img src={imgBack} alt="" className="w-[62px] h-[80px] sm:w-[99.7px] lg:w-[149.6px] sm:h-[114.8px] lg:h-[172.3px] translate-x-[30px] sm:translate-x-[80px]" />
        <img src={imgFront} alt="" className="w-[93px] h-[112px] sm:w-[147.6px] lg:w-[221.5px] sm:h-[160px] lg:h-[240px] z-[1]" />
        <img src={imgBack} alt="" className="w-[62px] h-[80px] sm:w-[99.7px] lg:w-[149.6px] sm:h-[114.8px] lg:h-[172.3px] translate-x-[-30px] sm:translate-x-[-80px]" />
      </div>
    </div>
  );
};

export default StackedProducts;
