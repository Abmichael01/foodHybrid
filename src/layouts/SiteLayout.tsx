import Navbar from "@/components/Site/Navbar";
import React from "react";
import { Outlet } from "react-router-dom";


const SiteLayout: React.FC = () => {
  return (
    <div className="relative">
      <Navbar />
      <div className="pb-40">
        <Outlet />
      </div>
    </div>
  );
};

export default SiteLayout;
