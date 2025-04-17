import React from "react";
import nepc from "@/assets/svgs/nepc.svg"
import fca from "@/assets/svgs/fca.svg"
import fda from "@/assets/svgs/fda.svg"
const standards = [
    {
        name: "Nigerian Export Promotion <br />  Council (NIG)",
        logo: nepc,
    },
    {
        name: "Financial Conduct Authority <br /> (UK)",
        logo: fca,
    },
    {
        name: "Food and Drug <br /> Administration (USA &UK)",
        logo: fda
    }
]

const OurStandards: React.FC = () => {
  return (
    <div className="section-padding space-y-[60px] mt-[60px] ">
      <div className="flex flex-col items-center gap-[20px] sm:gap-[40px] lg:gap-[60px]">
        <div className="space-y-[8px] text-center">
          <h1 className="section-title">Our Standards</h1>
          <p className=" sm:text-[16px] lg:text-[18px] text-[#929292]">We are Licensed and Certified by:</p>
        </div>
        <div className="flex flex-col sm:flex-row gap-y-[40px] justify-between items-center w-full">
            {standards.map((standard, index) => (
                <div key={index} className="flex flex-col gap-[20px] items-center">
                    <img src={standard.logo} alt="" className="h-[80px] sm:h-[60px] lg:h-auto" />
                    <h1 className="text-center text-[16px] sm:text-[18px] font-semibold text-wrap" dangerouslySetInnerHTML={{ __html: standard.name }} />
                </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default OurStandards;
