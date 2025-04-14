import React from "react";
import heroBgImage from "@/assets/images/wheatField.png";
import { Button } from "../ui/button";
import { Globe, ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";

const Hero: React.FC = () => {
  return (
      <div className="overflow-hidden section-padding sm:rounded-[60px] absolute sm:relative top-0 right-0 left-0 z-[-1] h-[600px] w-full bg-black">
        <img src={heroBgImage} alt="" className="absolute inset-0 h-full w-full" />
        <div className="w-full h-full relative z-10 flex gap-[60px] justify-center sm:items-center flex-col">
          <h1 className="text-white text-[36px] sm:max-w-[70%] text-start sm:text-center font-semibold">
            Bridging Africa's Rich Agricultural Heritage with the World
          </h1>
          <div className="flex gap-8 sm:gap-[62px]">
            <Link to="/">
              <Button className="sm:px-14 px-8 bg-[#15221B] hover:bg-[#15221B]/90">
                <div className="flex gap-2 items-center">
                  Visit Our website
                  <Globe />
                </div>
              </Button>
            </Link>
            <Link to="/shop">
              <Button className="sm:px-14 px-8 bg-[#15221B] hover:bg-[#15221B]/90">
                <div className="flex gap-2 items-center">
                  Go to shop
                  <ShoppingCart />
                </div>
              </Button>
            </Link>
          </div>
        </div>
      </div>
  );
};

export default Hero;
