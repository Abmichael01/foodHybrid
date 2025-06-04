// src/layouts/DashboardLayout.tsx
import React, { useEffect } from "react";
import  useAuthStore from "@/stores/authStore";
import { useDialogStore } from "@/stores/dialogStore";
import { Outlet, useSearchParams, useNavigate } from "react-router-dom";

// Components
import Navbar from "@/components/PartnerDashboard/Layouts/Navbar";
import Sidebar from "@/components/PartnerDashboard/Layouts/Sidebar";
import FundWalletDialog from "@/components/PartnerDashboard/Wallet/Fund/FundWalletDialog";
import WithdrawFromWallet from "@/components/PartnerDashboard/Wallet/Withdraw/WithdrawalDialog";
import WithdrawFromPortfolio from "@/components/PartnerDashboard/Portfolio/Withdraw/WithdrawalDialog";
import { toast } from "sonner";
import { getCurrentUser } from "@/api/apiEndpoints";
import useUserDetailsStore from "@/stores/userStore";

const DashboardLayout: React.FC = () => {
  const navigate = useNavigate();
  const { isAuthenticated, logout } = useAuthStore();
  const { openDialog } = useDialogStore();
  const [searchParams] = useSearchParams();
  const dialog = searchParams.get("dialog");
  const { setUserDetails } = useUserDetailsStore()

  // Trigger dialog if present in URL
  useEffect(() => {
    if (dialog) {
      openDialog(dialog);
    }
  }, [dialog, openDialog]);

  // Redirect if not authenticated
  useEffect(() => {
    const verifyUser = async () => {
      try {
        const data = await getCurrentUser();
        console.log(data);
        setUserDetails(data);
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      } catch (error) {
        toast.error("Session expired. Please login again");
        logout();
        navigate("/partner/login", { replace: true });
      }
    };

      verifyUser();
  }, [isAuthenticated, logout]);


  // Optional: Show loading state or splash screen here
  if (!isAuthenticated) {
    return null; // Or a loader/spinner
  }

  return (
    <div className="bg-[#F9F9F9] flex relative text-[#494949] min-h-screen">
      <div className="sticky top-0 bottom-0 h-full inline">
        <Sidebar />
      </div>
      <div className="flex-1 min-h-[90vh] w-full md:px-14 sm:px-10 px-2 lg:px-10 py-5 sm:py-10 space-y-5 sm:space-y-10 flex flex-col">
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