import React from "react";
import { Outlet } from "react-router-dom";
import image from "@/assets/images/auth.png";
import patterns from "@/assets/images/patterns.png";
import Motto from "@/components/Others/Motto";
import Logo from "@/components/Others/Logo";

const AuthLayout: React.FC = () => {
  return (
    <div className="flex overflow-hidden">
      <img
        src={patterns}
        alt=""
        className="w-[669px] h-[669px] rounded-full absolute top-[-440px] right-[-440px] lg:block hidden"
      />
      <img
        src={patterns}
        alt=""
        className="w-[400px] h-[400px] rounded-full absolute top-[-200px] right-[-200px] hidden sm:block lg:hidden"
      />
      <img
        src={patterns}
        alt=""
        className="w-[200px] h-[200px] rounded-full absolute top-[-100px] right-[-100px] sm:hidden"
      />
      <div className="p-5 w-1/2 shrink-0 h-screen sticky top-0 left-0 lg:block hidden">
        <div className="rounded-xl h-full overflow-hidden relative before:absolute before:inset-0 before:bg-black/20 before:backdrop-blur-[2px] ">
          <div className="absolute top-0 right-0 left-0 z-[3] flex justify-center mt-5">
            <Logo color="black" />{" "}
          </div>
          <Motto className="absolute bottom-5 left-5 " />
          <img src={image} alt="" className="w-full h-full object-cover" />
        </div>
      </div>
      <div className="w-full py-14 px-5 sm:px-10 md:px-20 lg:px-14  flex items-center min-h-screen">
        <Outlet />
      </div>
    </div>
  );
};

export default AuthLayout;
