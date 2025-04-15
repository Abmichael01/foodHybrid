import React from "react";
import heroBgImage from "@/assets/images/wheatField.webp";
import { Button } from "../ui/button";
import { Globe, ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";
import StackedProducts from "./StackedProducts";
import Logo from "../Others/Logo";

const Hero: React.FC = () => {
  return (
    <div className="px-0 sm:px-10 section-padding relative">
      <div className="overflow-hidden section-padding sm:rounded-[60px]  relative h-[700px] pb-20 w-full bg-black">
        <img
          src={heroBgImage}
          alt=""
          className="absolute inset-0 h-full w-full"
        />
        <div className="w-full absolute top-10 flex sm:hidden sm:justify-center">
          <Logo className="relative z-[2]" />
        </div>
        <div className="w-full h-full relative z-10 flex gap-[60px] justify-center sm:items-center flex-col">
          <h1 className="text-white text-[36px] sm:max-w-[80%] text-start sm:text-center font-semibold">
            Bridging Africa's Rich Agricultural Heritage with the World
          </h1>
          <div className="flex gap-5 sm:gap-[62px]">
            <Link to="/">
              <Button className="sm:px-14 px-5 bg-[#15221B] hover:bg-[#15221B]/90">
                <div className="flex gap-2 items-center">
                  Visit Our website
                  <Globe />
                </div>
              </Button>
            </Link>
            <Link to="/shop">
              <Button className="sm:px-14 px-5 bg-[#15221B] hover:bg-[#15221B]/90">
                <div className="flex gap-2 items-center">
                  Go to shop
                  <ShoppingCart />
                </div>
              </Button>
            </Link>
          </div>
        </div>
      </div>
      <StackedProducts type="rice" className="absolute left-[3%] sm:left-[10%] " />
      <StackedProducts type="beans" className="absolute right-[3%] sm:right-[10%]  " />
    </div>
  );
};

export default Hero;
