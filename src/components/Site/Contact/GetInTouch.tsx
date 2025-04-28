import React from "react";
import { MdPhone } from "react-icons/md";
import { IoIosMail } from "react-icons/io";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import rice from "@/assets/images/rice.webp";
import beans from "@/assets/images/beans.webp";

const GetInTouch: React.FC = () => {
  return (
    <div className="section-padding mt-[100px] ">
      <div className="flex flex-col gap-[100px] sm:gap-[150px] items-center justify-center ">
        <div className="text-center w-full">
          <h2 className="about-us-text bg-clip-text text-transparent font-[700]">
            CONTACT
          </h2>
          <h2 className="Get in Touch with Us text-[50px] sm:text-[36px] lg:text-[60px] font-[600]">
            Get in Touch with Us
          </h2>
        </div>
        <div className="flex flex-col gap-[20px] sm:gap-[40px] items-center relative w-full">
          <img
            src={rice}
            alt=""
            className=" w-[120px] h-[150px] sm:w-[166.2px] sm:h-[246.14px] lg:w-[432px] lg:h-[520.7px] absolute left-[-50px] sm:left-[-80px] lg:left-[-200px] "
          />
          <img
            src={beans}
            alt=""
            className=" w-[120px] h-[150px] sm:w-[166.2px] sm:h-[246.14px] lg:w-[432px] lg:h-[520.7px] absolute right-[-50px] sm:right-[-80px]  lg:right-[-200px] "
          />
          <div className="flex flex-col sm:flex-row items-center text-center gap-2">
            <MdPhone className="size-[30.71px] sm:size-[44.29px]" />
            <h2 className="font-satoshi text-[24px] lg:text-[32px] flex flex-col sm:flex-row">
              <span className="">1800-121-3637,</span>{" "}
              <span className="">+91-7052-101-786</span>
            </h2>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-2">
            <IoIosMail className="size-[30.71px] sm:size-[44.29px]" />
            <h2 className="text-nowrap font-satoshi text-[24px] lg:text-[32px]">
              info@foodhybrid.co.uk
            </h2>
          </div>

          <div className="flex gap-[40px] items-center">
            <FaFacebook className=" size-[40px] lg:size-[60px] fill-[#25252566]" />
            <div className="size-[40px] lg:size-[60px] bg-[#25252566] flex items-center justify-center rounded-full">
              <FaInstagram className="size-[25px] lg:size-[45px] text-white" />
            </div>
            <div className="size-[40px] lg:size-[60px] bg-[#25252566] flex items-center justify-center rounded-full">
              <FaXTwitter className="size-[25px] lg:size-[45px] text-white" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetInTouch;
