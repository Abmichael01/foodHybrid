import React from "react";
import pic from "@/assets/images/testimonial1.webp";
import Overview from "@/components/PartnerDashboard/Profile/Overview";
import Links from "@/components/PartnerDashboard/Profile/Links";


const Profile: React.FC = () => {
  return (
    <div className="space-y-10">
      <h1 className="text-[24px] font-[600]">Profile</h1>
      <div className="flex gap-[12px] px-5 items-center">
        <img src={pic} alt="" className="size-[48px] rounded-full" />
        <div className="space-y-[4px] font-satoshi">
          <h1 className="font-[700] text-[20px]">Username</h1>
          <p className="text-[16px] font-500">Johndoe@email.com</p>
        </div>
      </div>
      <Overview />
      <Links />
    </div>
  );
};

export default Profile;
