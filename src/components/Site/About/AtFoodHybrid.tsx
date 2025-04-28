import React from "react";

const AtFoodHybrid: React.FC = () => {
  const gradient =
    "bg-gradient-to-b from-[#15221B] via-[#54886CCC] via-[80%] to-[#15221B] bg-clip-text text-transparent";
  return (
    <div className="section-padding mt-[200px] text-center">
      <h2 className="font-[700] text-[40px]">
        <span className={gradient}>
          At <span className="text-[#15221BCC]">Food Hybrid</span>, Food is more
          than sustenance. It’s a{" "}
          <span className="text-[#15221BCC]">connection</span> to
        </span>
        <span className={gradient}>culture, family, and memory.</span>
        <span className={gradient}>
          For Africans abroad, our fresh, flavorful products bring the
        </span>
        <span className={gradient}>
          <span className="text-[#15221BCC]">nostalgic</span> and{" "}
          <span className="text-[#15221BCC]">comforting</span> comforting taste
          of home.
        </span>
      </h2>
    </div>
  );
};

export default AtFoodHybrid;
