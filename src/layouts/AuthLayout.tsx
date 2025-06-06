import React from "react";
import { Outlet } from "react-router-dom";
import image from "@/assets/images/auth.webp";
import patterns from "@/assets/images/patterns.webp";
import Motto from "@/components/Others/Motto";
import Logo from "@/components/Others/Logo";


const AuthLayout: React.FC = () => {
  return (
    <div className="flex overflow-hidden max-w-screen relative">
      
      <div className="p-0 md:p-5 w-full md:w-1/2 shrink-0 h-full top-0 left-0 absolute md:sticky">
        <div className="rounded-xl h-full overflow-hidden relative before:absolute before:inset-0 before:bg-black/20 before:backdrop-blur-[2px] ">
          <div className="absolute top-0 right-0 left-0 z-[3] flex justify-center mt-5">
            <Logo className=" max-[500px]:w-[92px] max-[500px]:h-[46px] " color="black" />{" "}
          </div>
          <Motto className="absolute bottom-5 left-5 " />
          <img src={image} alt="" className="w-full h-full object-cover" />
        </div>
      </div>
      <div className=" relative w-full pb-10 pt-20 p-2 px-5 sm:px-10 md:px-20 lg:px-14  flex items-center justify-center md:justify-start min-h-screen">
        <div className=" max-sm:mb-[180px] max-sm:mt-[20px] bg-white w-full md:bg-transparent rounded-xl p-6 max-sm:px-[20px] max-sm:py-[40px] h-fit md:h-full">
          <Outlet />
        </div>
        <img
        src={patterns}
        alt=""
        className="w-[669px] h-[669px] rounded-full absolute top-[-440px] right-[-440px] md:block hidden"
      />
      </div>
    </div>
  );
};

export default AuthLayout;
