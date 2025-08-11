import { HiUsers } from "react-icons/hi2";
import { Link } from "react-router-dom";
import { FaCirclePlus } from "react-icons/fa6";
import { BsArrowUpRightCircleFill } from "react-icons/bs";
import { Vendors } from "@/types/admin";

export default function Overview( data: Vendors ) {
  
  const statsData = [
    {
      id: "total-vendors",
      label: "Total Vendors",
      icon: HiUsers, // People icon representing vendors
      value: data.total_vendors,
    },
    {
      id: "todays-remittance",
      label: "Today's Remittance",
      icon: FaCirclePlus, // Briefcase icon for remittance
      value: data.today_remittance,
    },
    {
      id: "total-remittance",
      label: "Total Remittance",
      icon: BsArrowUpRightCircleFill, // Money withdraw icon for total remittance
      value: data.total_remittance,
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-[15px] lg:grid-cols-4 justify-between items-center font-satoshi ">
      {statsData.map((data) => (
        <Link
            to={data.id}
          key={data.id}
          className={`
            flex-1 py-[15px] shadow-sm rounded-[8px] px-[20px]
            sm:px-0 sm:shadow-none sm:border-l sm:first:border-0 sm:nth-[3]:border-0 sm:pl-[20px] sm:py-[15px] sm:rounded-none
            lg:border-0 lg:border-l lg:first:border-0 lg:nth-[3]:border-l
          `}
        >
          <div className="space-y-[12px]">
            <div className="flex gap-1 items-center">
              <span className="p-[5px] bg-[#15221B33] rounded-full">
                <data.icon className="size-[15px]" />
              </span>
              <span className="">{data.label}</span>
            </div>
            <h2 className="text-[20px] text-primary font-[700]">
              {data.value}
            </h2>
          </div>
        </Link>
      ))}
    </div>
  );
}
