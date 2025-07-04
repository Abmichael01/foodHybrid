import React from "react";
import { IoSearch } from "react-icons/io5";
import {  FiShoppingCart } from "react-icons/fi";
import notificationIcon from "@/assets/svgs/notification.svg";
import { Link, useLocation, useNavigate } from "react-router-dom";
// import { useSidebarStore } from "@/stores/sidebarStore";
import useCartStore from "@/stores/cartStore";
import { useQuery } from "@tanstack/react-query";
import { CartItem } from "@/types";
import { viewCart } from "@/api/apiEndpoints";
import { cn } from "@/lib/utils";
import useUserDetailsStore from "@/stores/userStore";
import { FiGlobe, FiLogOut } from "react-icons/fi";
import {
DropdownMenu,
DropdownMenuContent,
DropdownMenuItem,
DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import useAuthStore from "@/stores/authStore";

const Navbar: React.FC = () => {
  // const { toggle } = useSidebarStore();
  const { getItemCount } = useCartStore();
  const { userDetails } = useUserDetailsStore()
  const { updateCart } = useCartStore();
  const { logout } = useAuthStore()
  const { data } = useQuery({
    queryKey: ["cartItems"],
    queryFn: viewCart,
  });
  const location = useLocation();
  const navigate = useNavigate()
 
  React.useEffect(() => {
    if (data) {
      updateCart(data.items as CartItem[]);
    }
  }, [updateCart, data]);

  

  return (
    <div className="flex md:px-14 sm:px-10 px-2 lg:px-10 items-center gap-[10px] sm:gap-[24px] h-fit sticky top-0 py-5 bg-[#F9F9F9]/80 backdrop-blur-xl z-[9]">
      {/* <div
        onClick={toggle}
        className="px-[12px] lg:hidden shrink-0 py-[12px] text-[14px] bg-white rounded-[8px] h-full border flex items-center gap-[4px] border-[#F0F0F0]"
      >
        <FiMenu className="w-[20.5px] h-[18.7px]" />
      </div> */}
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <div className="w-10 h-10 shrink-0 rounded-full bg-primary flex items-center justify-center text-white cursor-pointer">
            {userDetails?.personal_details?.username?.charAt(0).toUpperCase()}
          </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="start" className="w-48 ml-5">
          <DropdownMenuItem onClick={() => navigate("/home")}>
            <FiGlobe className="mr-2 h-4 w-4" />
            <span>Visit website</span>
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => logout()}>
            <FiLogOut className="mr-2 h-4 w-4" />
            <span>Logout</span>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      <div className="bg-white text-[#6E6E6E] w-full rounded-[8px] flex gap-2 items-center px-[12px] border border-[#F0F0F0]">
        <IoSearch className="size-[15px]" />
        <input
          type="text"
          className=" border-0 h-full py-[12px] w-full outline-none"
          placeholder="Search"
        />
      </div>
      <Link
        to="/partner/cart"
        className={cn(
          "px-[12px] py-[12px] text-[14px] bg-white rounded-[8px] h-full border flex items-center gap-[4px] ",
          location.pathname.split("/")[2] === "cart" ? "border-primary/60" : "border-[#F0F0F0]"
        )}
      >
        Cart
        <div className="relative">
          <FiShoppingCart className="w-[20.5px] h-[18.7px]" />
          <p className="bg-[#15221B] size-[15px] rounded-full absolute flex justify-center items-center text-white -top-2 -right-2 text-[10px] font-satoshi">
            {getItemCount()}
          </p>
        </div>
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
