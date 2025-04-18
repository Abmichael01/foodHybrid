import Navbar from "@/components/PartnerDashboard/Layouts/Navbar";
import Sidebar from "@/components/PartnerDashboard/Layouts/Sidebar";
import React from "react";
import { Outlet } from "react-router-dom";

const DashboardLayout: React.FC = () => {
  return (
      <div className="bg-[#F9F9F9] flex relative">
        <div className="sticky top-0 bottom-0 h-full inline">
          <Sidebar />
        </div>
        <div className="flex-grow p-10 space-y-10 inline">
          <Navbar />
          <div className="bg-white rounded-[6px] border border-[#F0F0F0] p-10">
            <Outlet />
          </div>
        </div>
      </div>
  );
};

export default DashboardLayout;
