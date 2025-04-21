import Navbar from "@/components/PartnerDashboard/Layouts/Navbar";
import Sidebar from "@/components/PartnerDashboard/Layouts/Sidebar";
import { useSidebarStore } from "@/stores/sidebarStore";
import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";

const DashboardLayout: React.FC = () => {
  const { toggle } = useSidebarStore()

  useEffect(() => {
    toggle()
  }, [toggle])

  return (
      <div className="bg-[#F9F9F9] flex relative text-[#494949] min-h-screen">
        <div className="sticky top-0 bottom-0 h-full inline">
          <Sidebar />
        </div>
        <div className="flex-grow h-full w-full md:px-14 sm:px-10 px-2 lg:px-10 py-5 sm:py-10 space-y-5 sm:space-y-10 flex flex-col ">
          <Navbar />
          <div className="bg-white rounded-[6px] border border-[#F0F0F0] md:px-14 sm:px-10 px-5 lg:px-10 py-5 sm:py-10 flex-grow">
            <Outlet />
          </div>
        </div>
      </div>
  );
};

export default DashboardLayout;
