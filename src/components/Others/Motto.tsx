import { cn } from "@/lib/utils";
import React from "react";

interface Props {
  className?: string;
}

const Motto: React.FC<Props> = ({ className }) => {
  return (
    <div
      className={cn("space-y-4 relative z-0 text-white text-xl", className)}
    >
      <h1>
        <span className="motto-fancy-text">Nourishing</span>{" "}
        <span>Traditions.</span>
      </h1>
      <h1>
        <span className="motto-fancy-text">Embracing</span>{" "}
        <span>Innovation.</span>
      </h1>
      <h1>
        <span className="motto-fancy-text">Bringing</span>  {" "}
        <span className="font-extrabold patterned-text bg-clip-text text-transparent">AFRICA</span> {" "}
        <span className="font-satoshi">to the</span>{" "}
        <span>World.</span>
      </h1>
    </div>
  );
};

export default Motto;
