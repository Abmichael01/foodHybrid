import Navbar from "@/components/PartnerDashboard/Layouts/Navbar";
import Sidebar from "@/components/PartnerDashboard/Layouts/Sidebar";
import FundWalletDialog from "@/components/PartnerDashboard/Wallet/Fund/FundWalletDialog";
import { default as WithdrawFromWallet } from "@/components/PartnerDashboard/Wallet/Withdraw/WithdrawalDialog";
import { default as WithdrawFromPortfolio } from "@/components/PartnerDashboard/Portfolio/Withdraw/WithdrawalDialog";

import { useDialogStore } from "@/stores/dialogStore";
import React, { useEffect } from "react";
import { Outlet, useSearchParams } from "react-router-dom";

const DashboardLayout: React.FC = () => {
  const { openDialog } = useDialogStore();
  const [ params ] = useSearchParams()
  const dialog = params.get("dialog")

  useEffect(() => {
    openDialog(dialog as string)
  }, [openDialog, dialog])

  return (
      <div className="bg-[#F9F9F9] flex relative text-[#494949] min-h-screen">
        <div className="sticky top-0 bottom-0 h-full inline">
          <Sidebar />
        </div>
        <div className="flex-1 min-h-[90vh] w-full md:px-14 sm:px-10 px-2 lg:px-10 py-5 sm:py-10 space-y-5 sm:space-y-10 flex flex-col ">
          <Navbar />
          <div className="bg-white rounded-[6px] border border-[#F0F0F0] md:px-14 sm:px-10 px-5 lg:px-10 py-5 sm:py-10 flex-grow h-full">
            <Outlet />
          </div>
          <FundWalletDialog />
          <WithdrawFromWallet />
          <WithdrawFromPortfolio />
        </div>
      </div>
  );
};

export default DashboardLayout;
