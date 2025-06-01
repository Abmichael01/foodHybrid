import React from "react";

import { Button } from "@/components/ui/button";
import { FiPlus } from "react-icons/fi";
import { Link } from "react-router-dom";
import PriceCalculator from "./PriceCalculator";
import { ShopProduct } from "@/types";
import rice from "@/assets/images/shop-rice.webp";
import beans from "@/assets/images/shop-beans.webp";

interface Props {
  item: ShopProduct;
}

const ShopItem: React.FC<Props> = ({ item }) => {
  return (
    <div className="flex flex-col gap-y-5 sm:flex-row sm:justify-between sm:items-center lg:px-[24px] py-[20px] border-b border-[#F0F0F0]">
      <Link
        to="/partner/shop/090192-000wq0-u00qwjaoas"
        className="flex gap-[24px] items-center"
      >
        {item.name === "Rice" ? (
          <img src={rice} alt="" />
        ) : item.name === "Beans" ? (
          <img src={beans} alt="" />
        ) : (
          ""
        )}
        <div className="space-y-[8px]">
          <h1 className="text-[20px]">{item.name}</h1>
          <p className="text-[16px] font-satoshi">
            {item.description}
          </p>
        </div>
      </Link>
      <div className="space-y-[20px]">
        <PriceCalculator price={Number(item.price)} />
        <Button
          variant={"outline"}
          className="border border-[#15221B] text-[#15221B] w-full py-[8px] rounded-[2px]"
        >
          Make Order
          <FiPlus />
        </Button>
      </div>
    </div>
  );
};

export default ShopItem;
