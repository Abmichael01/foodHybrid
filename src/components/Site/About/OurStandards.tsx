import React from "react";
import haccp from "@/assets/images/haccp.webp";
import nepc from "@/assets/svgs/nepc.svg";
import fca from "@/assets/svgs/fca.svg";
import fda from "@/assets/svgs/fda.svg";

const standards = [
  {
    name: "Hazard Analysis & Critical <br /> Control Point",
    logo: haccp,
  },
  {
    name: "Nigerian Export Promotion <br />  Council (NIG)",
    logo: nepc,
  },
  {
    name: "Financial Conduct <br /> Authority  (UK)",
    logo: fca,
  },
  {
    name: "Food and Drug <br /> Administration (USA &UK)",
    logo: fda,
  },
];

const OurStandards: React.FC = () => {
  return (
    <div className="section-padding space-y-[60px] mt-[60px] ">
      <div className="flex flex-col items-center gap-[20px] sm:gap-[40px] lg:gap-[60px]">
        <div className="space-y-[40px] text-center">
          <h1 className="section-title">Our Standards</h1>
          <p className="lg:px-20 sm:px-10 font-satoshi text-[20px] lg:text-[22px]">
            We are committed to quality and excellence, adhering to global best
            practices in food safety and hygiene. Our FDA, NAFDAC, and
            international certifications ensure rigorous quality control and
            compliance with top industry standards.
          </p>
        </div>
        <div className="space-y-[40px] w-full">
          <p className=" sm:text-[16px] lg:text-[18px] text-[#929292] text-center">
            We are Licensed and Certified by:
          </p>
          <div className="flex flex-col sm:flex-row gap-y-[40px] justify-between items-center w-full">
            {standards.map((standard, index) => (
              <div
                key={index}
                className="flex flex-col gap-[20px] items-center"
              >
                <img src={standard.logo} alt="" className="h-[80px]" />
                <h1
                  className="text-center text-[16px] sm:text-[18px] font-semibold text-wrap"
                  dangerouslySetInnerHTML={{ __html: standard.name }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurStandards;
