import { Smile, Stars, TreePalm, Users } from "lucide-react";
import React from "react";
import nigeria from "@/assets/svgs/nigeria.svg"
import uk from "@/assets/svgs/uk.svg"
import usa from "@/assets/svgs/usa.svg"
import { cn } from "@/lib/utils";

const countries = [
    {
        name: "Nigeria",
        logo: nigeria,
        className: " mr-40"
    },
    {
        name: "United Kingdom",
        logo: uk,
        className: ""
    },
    {
        name: "United States of America",
        logo: usa,
        className: "ml-20"
    }
]

const stats = [
    {
        name: "Happy Clients",
        icon: <Smile />,
        value: "2000+"
    },
    {
        name: "Our Farms",
        icon: <TreePalm className="w-[24px] h-[24px]" />,
        value: "5"
    },
    {
        name: "Testimonies",
        icon: <Stars className="w-[24px] h-[24px]" />,
        value: "3000+"
    },
    {
        name: "Team Members",
        icon: <Users className="w-[24px] h-[24px]" />,
        value: "100+"
    }
]

const Welcome: React.FC = () => {
  return (
    <div className="section-padding mt-40 relative space-y-10">
      <div className="relative">
        <h1 className="sm:text-[64.58px] lg:text-[95.57px] tracking-tighter text-center font-bold bg-gradient-to-b from-[#FFFFFF60] to-[#15221B60] bg-clip-text text-transparent relative">
          <span>Welcome to Food Hybrid</span>
        </h1>
        <Stars className="absolute top-[0px] left-[30px] rotate-[23.87deg] text-[#15221B]" />
        <Stars className="absolute top-[17.9%] right-[9.05%] w-4 h-4 bg-background rounded-full text-[#15221B]" />
      </div>
      <div>
        <p className="text-[24px] text-center font-satoshi ">
          We are more than just a food processing and packaging company. <br />{" "}
          We are a bridge connecting the{" "}
          <strong>rich agricultural heritage of Africa</strong> with the world.{" "}
          <br /> Specializing in producing and packaging premium, authentic
          African food products that speak to the heart and taste buds of our
          customers.
        </p>
      </div>
      <div className="space-y-5 mt-20">
        <h1 className="text-center text-[20px] text-[#929292]">With Operations In:</h1>
        <div className="flex justify-center">
            {countries.map((country, index) => (
                <div key={index} className={cn(
                    "flex flex-col justify-between items-center gap-5",
                    country.className
                )}>
                    <img src={country.logo} alt="" />
                    <h1>{country.name}</h1>
                </div>
            ))}
        </div>
      </div>
      <div className="flex justify-between mt-20">
            {stats.map((stat, index) => (
                <div key={index} className="space-y-2 border-l-2 pl-[20px] border-[#911B13]">
                    {stat.icon}
                    <p className="text-[18px]">{stat.name}</p>
                    <h1 className="text-[#15221B] text-[40px] font-semibold">{stat.value}</h1> 
                </div>
            ))}
      </div>
    </div>
  );
};

export default Welcome;
