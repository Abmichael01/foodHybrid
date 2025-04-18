import React from "react";
import { FiChevronRight } from "react-icons/fi";
import { Link } from "react-router-dom";
import rice from "@/assets/images/manyrice.webp"
import beans from "@/assets/images/manybeans.webp"

interface Props {
  products: {
    id: string;
    name: string;
    price: number;
    units: string;
    type: string;
  }[];
  transactionsPage?: boolean
}

const Products: React.FC<Props> = ({ products, transactionsPage }) => {
  return (
    <div className="space-y-[10px]">
      <div className="flex justify-between items-center">
        <h1 className="text-[18px] font-[600] text-[#494949]">Products</h1>
        { !transactionsPage && <Link
          to="/partner/my-orders/09029oio-9898212-we-qwe232323/transactions"
          className="flex gap-2 items-center text-[16px] font-[500] font-satoshi text-[#15221B]"
        >
          View transaction flow
          <FiChevronRight />
        </Link>}
      </div>
      <div className="flex flex-wrap gap-[12px]">
        {products.map((product, index) => (
            <div key={index} className="flex gap-[20px] items-center">
                <img src={
                    product.type === "rice" ? rice : beans
                } alt="" className="" />
                <div className="space-y-[8px] font-satoshi">
                    <h1 className="text-[18px] font-[500] text-[#494949]">{product.name}</h1>
                    <p className="font-[900] text-[14px]">£{product.price}</p>
                    <p className="text-[14px] font-[500] text-[#6E6E6E]">{product.units}</p>
                </div>
            </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
