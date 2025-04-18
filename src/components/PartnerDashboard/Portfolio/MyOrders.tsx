import { cn } from "@/lib/utils";
import React from "react";
import { FaChevronRight } from "react-icons/fa6";
import { Link } from "react-router-dom";
import orderBox from "@/assets/svgs/orderBox.svg"


let orders = [
  {
    id: "0e2d4bfa-2b99-4af8-9d23-4b9f8d9b1a5c",
    name: "Order #52534",
    link: "#",
    status: "Processing",
  },
  {
    id: "2f8ad95b-9b17-41db-90c2-2a5c4e4c1f1b",
    name: "Order #52534",
    link: "#",
    status: "Approved",
  },
  {
    id: "88c1d49e-6ed8-4d41-b5b9-139dd9b3c584",
    name: "Order #52534",
    link: "#",
    status: "Pending settlement",
  },
  {
    id: "e74e75dd-1b47-4e55-8265-113d3a18bb80",
    name: "Order #52534",
    link: "#",
    status: "Pending settlement",
  },
  {
    id: "9a6f738f-0b24-4271-845c-617fa2ebf582",
    name: "Order #52534",
    link: "#",
    status: "Approved",
  },
  {
    id: "e3f8d42f-9ddc-42a3-8493-690f08c23c2d",
    name: "Order #52534",
    link: "#",
    status: "In Transit",
  },
];


interface Props {
  pending?: boolean
} 

const MyOrders: React.FC<Props> = ({ pending }) => {
  if(pending){
    orders = orders.filter(order => order.status === "Pending settlement");
  }
  return (
    <div className="space-y-[12px]">
      <div className="flex gap-[4px] items-center">
        <h1 className="text-[18px] font-[600]">
          My Orders
          <span className="text-[14px] font-[400]"> (12)</span>
        </h1>
        <Link to="#">
          <FaChevronRight />
        </Link>
      </div>
      <div className="flex gap-[40px] px-[24px]">
        {orders.map((order, index) => (
            <Link to={`/partner/my-orders/${order.id}`} key={index} className="flex flex-col gap-[8px] items-center text-center font-satoshi">
                <img src={orderBox} alt="" />
                <div className="space-y-[4px]">
                    <h1 className="text-[#494949 font-[500]">{order.name}</h1>
                    <p className={cn(
                        "px-[12px] py-[4px] text-[12px] font-[500] rounded-[2px]",
                        order.status === "Approved" ? "bg-[#16A34A1A] text-[#16A34A]" :
                        order.status === "Processing" ? "bg-[#FFD60A1A] text-[#FFD60A]"
                        : "bg-[#1C274C1A] text-[#1C274C]"
                    )}>{order.status}</p>
                </div>
            </Link>
        ))}
      </div>
    </div>
  );
};

export default MyOrders;
