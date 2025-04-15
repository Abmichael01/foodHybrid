import React from "react";
import Logo from "../Others/Logo";
import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";

const Navbar: React.FC = () => {
  return (
    <div className="section-padding flex justify-between items-center mt-10 fixed top-0 right-0 left-0 z-[99] backdrop-blur-md">
      <Logo color="black" />
      <nav className="flex gap-10 items-center text-[]">
        <Link to="/#">Home</Link>
        <DropdownMenu>
          <DropdownMenuTrigger className="flex gap-1 items-center outline-none cursor-pointer">
            Company
            <ChevronDown className="w-4 h-4" />
          </DropdownMenuTrigger>
          <DropdownMenuContent align="start" className="z-[9999]">
            <DropdownMenuItem>About us</DropdownMenuItem>
            <DropdownMenuItem>Rewards & Loyalty Program</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <Link to="/#">Contact</Link>
        <Button className="bg-transparent hover:bg-transparent text-[#252525] border border-primary py-[10px] px-7">
          Login
        </Button>
      </nav>
    </div>
  );
};

export default Navbar;
