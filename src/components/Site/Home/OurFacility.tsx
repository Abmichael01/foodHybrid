import React from 'react'
import haccp from "@/assets/images/haccp.webp";
import { BadgeCheckIcon } from "lucide-react";

const OurFacility: React.FC = () => {
  return (
    <div className="section-padding mt-40 px-[120px] py-[40px] flex justify-between items-center bg-[#F9F9F9]">
        <h1 className="text-[36px] font-semibold">
          Our Facility is HACCP{" "}
          <span className="text-[20px] font-satoshi">
            (Hazard Analysis & Critical Control Point)
          </span>{" "}
          <br />
          <span className="flex gap-2 items-center">
            Certified
            <BadgeCheckIcon className="inline fill-[#008000] text-white size-[28.6px]" />
          </span>
        </h1>
        <img src={haccp} alt="HACCP" className="w-[281.25px] h-[200px]" />
      </div>
  )
}

export default OurFacility