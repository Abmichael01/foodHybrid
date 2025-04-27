import { Plus, Trash } from "lucide-react";
import React from "react";
import { FaUserCircle } from "react-icons/fa";
import { GoArrowLeft } from "react-icons/go";
import { Link } from "react-router-dom";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

export const dummyBeneficiaries = [
  {
    name: "Emmanuel Ayomide Ebo",
    accountNumber: "1122334455",
    bankName: "Lloyds Bank",
  },
  {
    name: "Jane Smith",
    accountNumber: "9876543210",
    bankName: "First Bank",
  },
  {
    name: "Michael Johnson",
    accountNumber: "1234509876",
    bankName: "GTBank",
  },
];

const Beneficiary: React.FC = () => {
  return (
    <div className="space-y-10">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-[8px]">
          <Link to="/partner/profile/withdrawal-pin">
            <GoArrowLeft className="size-[24px]" />
          </Link>
          <h1 className="text-[24px]">Beneficiary</h1>
        </div>
      </div>
      <div className="space-y-4">
        <div className="space-y-[8px]">
          {dummyBeneficiaries.map((beneficiary, index) => (
            <div
              key={index}
              className="border-b px-[12px] py-[8px] flex justify-between items-center"
            >
              <div className="flex items-center gap-[12px]">
                <FaUserCircle className="size-[33.3px] text-[#494949] fill-[#494949]/40 " />
                <div className="">
                  <h1 className="text-[18px] font-[600]">{beneficiary.name}</h1>
                  <p className="font-satoshi text-[14px]">
                    {beneficiary.accountNumber} | {beneficiary.bankName}
                  </p>
                </div>
              </div>
              <AlertDialog>
                <AlertDialogTrigger asChild>
                  <div className="cursor-pointer">
                    <Trash className="text-[#494949]  w-[18px]" />
                  </div>
                </AlertDialogTrigger>
                <AlertDialogContent>
                  <AlertDialogHeader>
                    <AlertDialogTitle>
                      Are you absolutely sure?
                    </AlertDialogTitle>
                    <AlertDialogDescription className="text-center mt-[20px] text-[19px] font-[500]">
                    Are you sure you want to remove ‘Emmanuel Ayomide Ebo’ as a Beneficiary?
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                  <AlertDialogFooter className="flex gap-[8px] w-full mt-[20px]">
                    <AlertDialogCancel className="button text-[#494949] flex-1">No, Cancel</AlertDialogCancel>
                    <AlertDialogAction className="flex-1 button bg-[#15221B] hover:bg-[#15221B]/90">Yes, Remove</AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
            </div>
          ))}
        </div>
        <Link to="/partner/profile/beneficiary/new?current=addBeneficiary" className="flex gap-[4px] [&_svg]:size-[20px] items-center rounded-full hover:bg-[#F9F9F9] w-fit cursor-pointer px-[12px] py-[8px] font-satoshi text-[16px]">
          <Plus />
          Add a new beneficiary
        </Link>
      </div>
    </div>
  );
};

export default Beneficiary;
