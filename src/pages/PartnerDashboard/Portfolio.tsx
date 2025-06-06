import History from "@/components/PartnerDashboard/Portfolio/History";
import MyOrders from "@/components/PartnerDashboard/Portfolio/MyOrders";
import Overview from "@/components/PartnerDashboard/Portfolio/Overview";
import useUserDetailsStore from "@/stores/userStore";
import React from "react";

const activities = [
  {
    type: "Remittance Inflow",
    time: "3:31am, 21st Jan. 2025",
    amount: "+£2350",
  },
  {
    type: "Remittance Inflow",
    time: "16:32pm, 21st Jan. 2025",
    amount: "+£2350",
  },
  {
    type: "Withdrawal",
    time: "11:42am, 21st Jan. 2025",
    amount: "-£2350",
  },
  {
    type: "Remittance Inflow",
    time: "5:30am, 21st Jan. 2025",
    amount: "+£2350",
  },
  {
    type: "Withdrawal",
    time: "8:35am, 21st Jan. 2025",
    amount: "-£2350",
  },
];

const Portfolio: React.FC = () => {
  const { userDetails } = useUserDetailsStore()
  return (
    <div className="space-y-10">
      <h1 className="text-[20px] ">
        Welcome, <span className="font-[600] uppercase">{userDetails?.personal_details.username}</span>{" "}
      </h1>
      <Overview />
      <MyOrders />
      <History heading="Activity" data={activities} />
    </div>
  );
};

export default Portfolio;
