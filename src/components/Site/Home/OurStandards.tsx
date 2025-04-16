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
    <div className="section-padding  space-y-[60px] mt-[60px] ">
      <div className="flex flex-col items-center gap-[60px] px-[40px]">
        <div className="space-y-[8px] text-center">
          <h1 className="text-[32px] text-[#15221B] font-semibold">Our Standards</h1>
          <p className="text-[18px] text-[#929292]">We are Licensed and Certified by:</p>
        </div>
        <div className="flex justify-between items-center w-full">
            {standards.map((standard, index) => (
                <div key={index} className="flex flex-col gap-[20px] items-center">
                    <img src={standard.logo} alt="" />
                    <h1 className="text-center" dangerouslySetInnerHTML={{ __html: standard.name }} />
                </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default OurStandards;
