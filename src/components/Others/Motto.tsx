import { cn } from "@/lib/utils";
import React from "react";

interface Props {
  className?: string;
}

const Motto: React.FC<Props> = ({ className }) => {
  return (
    <div
      className={cn("space-y-4 relative z-0 text-white text-xl ", className)}
    >
      <h1>
        <span>Nourishing</span>{" "}
        <span>Traditions.</span>
      </h1>
      <h1>
        <span>Embracing</span>{" "}
        <span>Innovation.</span>
      </h1>
      <h1>
        Bringing {" "}
        <span>AFRICA</span> {" "}
        <span>to the</span>{" "}
        <span>World.</span>
      </h1>
    </div>
  );
};

export default Motto;
