import { MapPin } from "lucide-react";
import React from "react";

const locations = [
  {
    name: "Hybrid Foods & Mart Limited <br /> Plots 2-6, Owode Street, Lagere <br /> Ile-Ife, Nigeria",
    flag: (
      <img
        src="https://flagcdn.com/w320/ng.png"
        alt="Nigerian Flag"
        className="w-[28px]"
      />
    ),
    country: "NG",
  },
  {
    name: "Food Hybrid (UK) Limited <br /> 128, City road, London <br /> EC1V 2NX",
    flag: (
      <img
        src="https://flagcdn.com/w320/gb.png"
        alt="United Kingdom Flag"
        className="w-[28px]"
      />
    ),
    country: "UK",
  },
];

const LocatedAt: React.FC = () => {
  return (
    <div className="section-padding mt-[100px] sm:mt-[180px] flex flex-col gap-[40px]">
      <h2 className="text-center font-[600] text-[24px] text-[#15221B]">
        We're located at
      </h2>
      <div className="space-y-[40px] text-center font-satoshi">
        {locations.map((location, index) => (
          <div className="flex flex-col gap-[10px] items-center">
            <div className="p-[12px] bg-[#F4F4F4] flex items-center gap-[8px] items-center rounded-[12px] text-[20px] font-[500]">
              <MapPin className="w-[19.2px]" />
              <span className="">{location.country}</span>
              {location.flag}
            </div>
            <h1
              className=" text-[24px] sm:text-[32px] font-[500] text-[#252525]"
              key={index}
              dangerouslySetInnerHTML={{ __html: location.name }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default LocatedAt;
