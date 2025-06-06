import React, { useEffect } from "react";
import { CartItem as CartItemType } from "@/types";
import useCartStore from "@/stores/cartStore";
import CartItem from "@/components/PartnerDashboard/Cart/CartItem";
import { useQuery } from "@tanstack/react-query";
import { viewCart } from "@/api/apiEndpoints";
import { Link } from "react-router-dom";


const Cart: React.FC = () => {
  const { items, updateCart, getItemCount } = useCartStore();
  const { data } = useQuery({
    queryKey: ["cartItems"],
    queryFn: viewCart,
  });

  console.log(data)

  useEffect(() => {
    if (data) {
      updateCart(data.items as CartItemType[]);
    }
  }, [updateCart, data]);

  return (
    <div className="space-y-[30px]">
      <h2 className="text-[24px] flex items-center gap-1">
        Cart <span className="text-[14px]">({getItemCount()})</span>{" "}
      </h2>

      <div className="">
        {items?.map((item) => (
          <CartItem key={item.product_id} item={item} />
        ))}
        {items.length === 0 && (
          <div className="flex flex-col items-center justify-center h-[200px]">
            <h2 className="text-[30px] font-semibold font-satoshi">Your cart is empty.</h2>
            <Link
              to="/partner/shop"
              className="text-white mt-5 text-[14px] font-medium bg-[#15221B] button"
            >
              Browse products 
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
