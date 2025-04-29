import React from "react";
import growth from "@/assets/images/growth.webp";

const JoinUs: React.FC = () => {
  return (
    <div className="h-fit sm:h-[901px] mt-[120px] sm:mt-[180px] relative w-full section-padding sm:py-[80px] sm:px-[50px] flex flex-col-reverse sm:flex-row gap-[50px] ">
      <img
        src={growth}
        alt=""
        className=" sm:absolute inset-0 h-[245.8px] w-full sm:h-full object-cover"
      />
      <div className="relative z-[1] space-y-[10px] sm:space-y-[20px]">
        <h1 className=" text-[24px] lg:text-[40px] font-[700]">
          Join Our Rewards and Loyalty <br /> Program Today!
        </h1>
        <p className="text-[16px] sm:text-[18px] lg:text-[22px] font-[500]">
          At Food Hybrid Ltd, we believe in rewarding those who help us bring{" "}
          <br />
          our innovative products to market. Our Rewards and Loyalty Program is{" "}
          <br />
          here to support your business, reward your hard work, and build a{" "}
          <br />
          lasting, successful partnership.
        </p>
        <button className="button bg-[#15221BCC] text-white mt-[40px] sm:mt-[60px]">
          Become a partner
        </button>
      </div>
      <h2
        className=" text-center w-full absolute left-0 right-0 bottom-0 text-nowrap text-transparent bg-transparent font-bold text-[clamp(21.07px,8vw,124px)] z-[10]"
        style={{ WebkitTextStroke: "1.4px white" }}
      >
        Let’s grow together!
      </h2>
    </div>
  );
};

export default JoinUs;
