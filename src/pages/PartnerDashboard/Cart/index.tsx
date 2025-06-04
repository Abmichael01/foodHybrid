import React, { useEffect } from "react";
import { CartItem as CartItemType } from "@/types";
import useCartStore from "@/stores/cartStore";
import CartItem from "@/components/PartnerDashboard/Cart/CartItem";
import { useQuery } from "@tanstack/react-query";
import { viewCart } from "@/api/apiEndpoints";


const Cart: React.FC = () => {
  const { items, updateCart } = useCartStore();
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
      <h2 className="text-[24px]">
        Cart <span className="text-[14px]">(2)</span>{" "}
      </h2>

      <div className="">
        {items?.map((item) => (
          <CartItem key={item.product_id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Cart;
