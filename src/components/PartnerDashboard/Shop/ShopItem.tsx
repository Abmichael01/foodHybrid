import React from "react";

import { Button } from "@/components/ui/button";
import { FiPlus } from "react-icons/fi";
import { Link } from "react-router-dom";
import PriceCalculator from "./PriceCalculator";

interface Props {
  item: {
    name: string;
    bagsPerUnit: number;
    price: number;
    img: string;
  };
}

const ShopItem: React.FC<Props> = ({ item }) => {
    

    
  return (
    <div className="flex flex-col gap-y-5 sm:flex-row sm:justify-between sm:items-center px-[24px] py-[20px] border-b border-[#F0F0F0]">
      <Link to="/partner/shop/090192-000wq0-u00qwjaoas" className="flex gap-[24px] items-center">
        <img src={item.img} alt="" />
        <div className="space-y-[8px]">
          <h1 className="text-[20px]">{item.name}</h1>
          <p className="text-[16px] font-satoshi">
            1 unit ={item.bagsPerUnit} bags
          </p>
        </div>
      </Link>
      <div className="space-y-[20px]">
        <PriceCalculator price={item.price} />
        <Button variant={"outline"} className="border border-[#15221B] text-[#15221B] w-full py-[8px] rounded-[2px]">
            Make Order 
            <FiPlus />
        </Button>
      </div>
    </div>
  );
};

export default ShopItem;
