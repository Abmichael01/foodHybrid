import React from "react";
import { IoSearch } from "react-icons/io5";
import { FiMenu, FiShoppingCart } from "react-icons/fi";
import notificationIcon from "@/assets/svgs/notification.svg";
import { Link } from "react-router-dom";
import { useSidebarStore } from "@/stores/sidebarStore";

const Navbar: React.FC = () => {
  const { toggle } = useSidebarStore();
  return (
    <div className="flex items-center gap-[10px] sm:gap-[24px] h-fit">
      <div
        onClick={toggle}
        className="px-[12px] shrink-0 py-[12px] text-[14px] bg-white rounded-[8px] h-full border flex items-center gap-[4px] border-[#F0F0F0]"
      >
        <FiMenu className="w-[20.5px] h-[18.7px]" />
      </div>
      <div className="bg-white text-[#6E6E6E] w-full rounded-[8px] flex gap-2 items-center px-[12px] border border-[#F0F0F0]">
        <IoSearch className="size-[15px]" />
        <input
          type="text"
          className=" border-0 h-full py-[12px] w-full outline-none"
          placeholder="Search"
        />
      </div>
      <Link
        to="#"
        className="px-[12px] py-[12px] text-[14px] bg-white rounded-[8px] h-full border flex items-center gap-[4px] border-[#F0F0F0]"
      >
        Cart
        <FiShoppingCart className="w-[20.5px] h-[18.7px]" />
      </Link>

      <Link
        to="#"
        className="px-[12px] py-[12px] text-[14px] bg-white rounded-[8px] h-full shrink-0 border flex items-center gap-[4px] border-[#F0F0F0]"
      >
        <img src={notificationIcon} className="w-[20.5px] h-[18.7px]" />
      </Link>
    </div>
  );
};

export default Navbar;
