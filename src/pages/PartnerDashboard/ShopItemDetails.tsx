import React from "react";
import { GoArrowLeft } from "react-icons/go";
import { Link } from "react-router-dom";
import rice from "@/assets/images/shop-rice.webp";
import beans from "@/assets/images/shop-beans.webp";
import PriceCalculator from "@/components/PartnerDashboard/Shop/PriceCalculator";
import { Button } from "@/components/ui/button";
import { FiPlus } from "react-icons/fi";

const otherProdcts = [
    {
        name: "Food Hybrid Rice",
        bagsPerUnit: 5,
        price: 153,
        img: rice,
    },
    {
        name: "Food Hybrid Beans",
        bagsPerUnit: 2,
        price: 343,
        img: beans,
    },
    {
        name: "Food Hybrid Rice",
        bagsPerUnit: 5,
        price: 153,
        img: rice,
    },
    {
        name: "Food Hybrid Beans",
        bagsPerUnit: 2,
        price: 343,
        img: beans,
    },
    {
        name: "Food Hybrid Rice",
        bagsPerUnit: 5,
        price: 153,
        img: rice,
    },
    {
        name: "Food Hybrid Beans",
        bagsPerUnit: 2,
        price: 343,
        img: beans,
    },
]

const item = {
  name: "Food Hybrid Rice",
  bagsPerUnit: 5,
  price: 153,
  img: rice,
  description: "Simplify your kitchen prep with our Peeled Beans, a convenient and time-saving solution for your favorite bean dishes. Carefully hand-peeled and processed, our beans maintain their natural flavor and texture, perfect for moin-moin, akara, or any traditional bean recipe, all without the hassle of peeling."
};

const ShopItemDetails: React.FC = () => {
  return (
    <div className="space-y-[20px]">
      <Link to="/partner/shop">
        <GoArrowLeft className="size-[20px]" />
      </Link>
      <div className="space-y-[60px]">
        <div className="space-y-[40px]">
          <div className="flex gap-[40px] pl-[40px]">
            <img src={item.img} alt="" className="w-[240px] object-contain" />
            <div className="space-y-[20px] text-start">
              <div className="space-y-[2px]">
                <p className="text-[#DF4D42E5]  text-[12px] font-[500]">
                  10 units left
                </p>
                <h1 className="text-[24px] text-[#494949] ">{item.name}</h1>
              </div>
              <div className="space-y-[4px]">
                <p className="text-[14px] font-satoshi font-[500]">
                  1 unit = {item.bagsPerUnit} bags
                </p>
                <PriceCalculator price={item.price} />
              </div>
              <Button
                variant={"outline"}
                className="border w-[313px] border-[#15221B] text-[#15221B] py-[8px] rounded-[2px]"
              >
                Make Order
                <FiPlus />
              </Button>
            </div>
          </div>
          <div className="space-y-[12px]">
            <h1 className="text-[16px] font-satoshi font-[700]">
                <span className="text-[#16A34A]">12% Returns</span>
                <span className="text-[#494949]"> on overall purchase</span>
            </h1>
            <p className="text-[18px] font-satoshi rounded-[12px] bg-[#F9F9F9] w-[770px] py-[16px] px-[12px]">{item.description}</p>
          </div>
        </div>
        <div className="space-y-[20px]">
            <h1 className="text-center font-[600] text-[20px]">Check out other products</h1>
            <div className="flex justify-between">
                {otherProdcts.map((product, index) => (
                    <div className="text-center space-y-[24px]" key={index}>
                        <img src={product.img} alt="" />
                        <p className="text-[#252525] font-satoshi fton-[500] text-[16px]">{product.name.split(" ")[2]}</p>
                    </div>
                ))}
            </div>
        </div>
      </div>
    </div>
  );
};

export default ShopItemDetails;
