import React from "react";
import { FaUserCircle } from "react-icons/fa";
import passcodeLock from "@/assets/svgs/passcode-lock.svg";
import { CiLock } from "react-icons/ci";
import { Link } from "react-router-dom";
import { FiChevronRight } from "react-icons/fi";

const links = [
  {
    name: "Vendor List",
    icon: <FaUserCircle className="size-[16.6px]" />,
    link: "#",
  },
  {
    name: "Beneficiary",
    icon: <FaUserCircle className="size-[16.6px]" />,
    link: "#",
  },
  {
    name: "Withdrawal Pin",
    icon: <img src={passcodeLock} alt="" />,
    link: "#",
  },
  {
    name: "Reset Password",
    icon: <CiLock className="size-[16.6px]" />,
    link: "#",
  },
];

const Links: React.FC = () => {
  return (
    <div className="space-y-[12px]">
      {links.map((link, index) => (
        <Link
        to="#"
          key={index}
          className="text-[#494949] flex items-center justify-between px-[12px] py-[12px] bg-[#F0F0F0] rounded-[8px] "
        >
          <div className="flex items-center  gap-2">
            {link.icon}
            <p className="text-[#333333]">{link.name}</p>
          </div>

          <FiChevronRight />
        </Link>
      ))}
    </div>
  );
};

export default Links;
