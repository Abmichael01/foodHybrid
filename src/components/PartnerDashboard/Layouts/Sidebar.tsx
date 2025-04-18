import Logo from "@/components/Others/Logo";
import { Separator } from "@/components/ui/separator";
import React from "react";
import { IoBagHandleOutline } from "react-icons/io5";
import { FiShoppingBag } from "react-icons/fi";
import { RiBox3Line } from "react-icons/ri";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { FaCircleUser } from "react-icons/fa6";

const navs = [
  {
    name: "Portfolio",
    icon: <IoBagHandleOutline />,
    slug: "portfolio",
  },
  {
    name: "Shop",
    icon: <FiShoppingBag />,
    slug: "shop",
  },
  {
    name: "My Orders",
    icon: <RiBox3Line />,
    slug: "my-orders",
  },
];

const Sidebar: React.FC = () => {
  const { pathname } = useLocation();
  const currentPath = pathname.split("/")[2];

  return (
    <div className="w-[205px] sticky h-[100vh] shrink-0 bg-white flex flex-col gap-4 pb-10 justify-between">
      <div>
        <div className="p-5 flex flex-col gap-5 items-center justify-center">
          <Logo className="w-[115px] h-[48px]" />
          <Separator className="bg-[#F0F0F0] w-full" />
        </div>
        <div className="w-full">
          {navs.map((nav, index) => (
            <Link
              key={index}
              to={`/partner/${nav.slug}`}
              className={cn(
                "w-full flex items-center gap-2 px-[48px] py-[10px]",
                currentPath === nav.slug ? "bg-[#15221B1F]" : ""
              )}
            >
              {nav.icon}
              <p className="text-[16px]">{nav.name}</p>
            </Link>
          ))}
        </div>
      </div>
      <div className="flex justify-center items-center gap-[4px] w-full text-[16px]">
        <FaCircleUser className="size-[20px] text-[#494949]" />
        Username
      </div>
    </div>
  );
};

export default Sidebar;
