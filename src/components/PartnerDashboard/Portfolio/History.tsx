import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";
import React from "react";
import { FiPlus, FiUpload } from "react-icons/fi";


interface Props {
    heading?: string;
    data: {
        type: string;
        time: string;
        amount: string;
    }[]
}

const History: React.FC<Props> = ({ heading, data }) => {
  return (
    <div className="space-y-[12px]">
      <div className="flex justify-between items-center">
        <h1 className="font-[600] text-[18px]">{heading}</h1>
        <Select>
          <SelectTrigger className="w-[100px] rounded-[4px]">
            <SelectValue placeholder="All" />
          </SelectTrigger>
          <SelectContent align="end">
            <SelectItem value="light">All</SelectItem>
            <SelectItem value="dark">Withdrawal</SelectItem>
            <SelectItem value="system">Remittance Inflow</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="space-y-[4px]">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex justify-between items-center p-[12px] border-b border-[#F0F0F0]"
          >
            <div className="flex gap-[16px] items-center">
              <div
                className={cn(
                  "p-2 rounded-full",
                  item.type === "Remittance Inflow"
                    ? "bg-[#16A34A1A] text-[#16A34A]"
                    : "bg-[#B522171A] text-[#B52217]"
                )}
              >
                {item.type == "Withdrawal" ? (
                  <FiUpload className="size-[15px]" />
                ) : (
                  <FiPlus className="size-[15px]" />
                )}
              </div>
              <div className="space-y-[2px] font-satoshi">
                <h1 className="text-[18px]">{item.type}</h1>
                <p className="text-[12px]">{item.time}</p>
              </div>
            </div>
            <h1 className="text-[16px] font-[700] font-satoshi">{item.amount}</h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default History;
