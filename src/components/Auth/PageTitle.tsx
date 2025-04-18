import React from "react";
import { Button } from "../ui/button";
import { ArrowLeft } from "lucide-react"; // Example: Importing from react-icons
import { Link } from "react-router-dom";

interface PageTitleProps {
  title: string;
  subtitle?: string;
  backLink?: string;
}

const PageTitle: React.FC<PageTitleProps> = ({ title, subtitle, backLink }) => {
  return (
    <div className="w-full flex flex-col gap-[8px] items-center justify-center relative font-satoshi">
      {backLink && (
        <Link to={backLink as string}>
          <Button variant={"ghost"} className="absolute top-3 py-3 left-0">
            <ArrowLeft />
          </Button>
        </Link>
      )}
      <h1 className="text-[40px] font-bold text-[#636C67] text-center">{title}</h1>
      <p className="text-[#494949] text-[18px] text-center">{subtitle}</p>
    </div>
  );
};

export default PageTitle;
