import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, MenuIcon, X } from "lucide-react";

import Logo from "../Others/Logo";
import { Button } from "../ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate()

  const toggleMobileMenu = () => setIsMobileMenuOpen((prev) => !prev);

  return (
    <>
      <header className={cn(
        "section-padding bg-transparent fixed flex justify-between items-center py-6 top-0 left-0 right-0 z-[99999] backdrop-blur-xl",
        isMobileMenuOpen && "bg-white shadow-lg",
      )}>
        {/* Logo */}
        <Logo color="black" className="w-[83px] h-[44px]" />

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex gap-10 items-center text-[#252525]">
          <Link to="/home">Home</Link>
          <DropdownMenu>
            <DropdownMenuTrigger className="flex gap-1 items-center outline-none cursor-pointer">
              Company
              <ChevronDown className="w-4 h-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="z-[99999]">
              <DropdownMenuItem onClick={() => navigate("/about")}>About us
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => navigate("/reward-loyalty-program")}>
                Rewards & Loyalty Program
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <Link to="/contact">Contact</Link>
          <Link to="/partner/login">
            <button className="bg-transparent hover:bg-transparent text-[#252525] rounded-sm border border-primary py-[5px] px-7 ">
              Login
            </button>
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden focus:outline-none z-[99999] cursor-pointer"
          aria-label="Toggle menu"
          aria-expanded={isMobileMenuOpen}
          onClick={toggleMobileMenu}
        >
          {isMobileMenuOpen ? (
            <X className="size-8 sm:size-9" />
          ) : (
            <MenuIcon className="size-8 sm:size-9" />
          )}
        </button>
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.nav
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="absolute top-[100%] right-0 left-0 w-full bg-white shadow-lg z-[9998] p-8 flex flex-col gap-5 border-gray-50"
            >
              <Link
                to="/home"
                className="text-sm font-medium px-5 py-3 border rounded-full bg-[#f9f9f9]"
                onClick={toggleMobileMenu}
              >
                Home
                
              </Link>

              {/* Mobile Company Dropdown (simple link for now) */}
              <div className="flex flex-col gap-3">
                <span className="text-sm font-medium px-5 py-3 rounded-full border bg-[#f9f9f9] flex justify-between items-center">
                  Company
                  <ChevronDown className="w-4 h-4 inline-block ml-2" />
                </span>
                <div className="pl-4 flex flex-col gap-2 text-gray-600 text-base border-l ml-4">
                  <Link to="/about" onClick={toggleMobileMenu}>
                    About us
                  </Link>
                  <Link to="/reward-loyalty-program" onClick={toggleMobileMenu}>
                    Rewards & Loyalty Program
                  </Link>
                </div>
              </div>

              <Link
                to="/contact"
                className="text-sm font-medium px-5 py-3 rounded-full border bg-[#f9f9f9]"
                onClick={toggleMobileMenu}
              >
                Contact
              </Link>

              <Link to="/partner/login" onClick={toggleMobileMenu}>
                <Button className="w-full bg-primary hover:bg-primary/90 text-white py-3">
                  Login
                </Button>
              </Link>
            </motion.nav>
          )}
        </AnimatePresence>
        
      </header>
    </>
  );
};

export default Navbar;
