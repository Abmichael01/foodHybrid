import React from "react";
import {
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { GlobalDialog } from "@/components/ui/CustomDialog";
import { FaMoneyBill } from "react-icons/fa";
import { useSearchParams } from "react-router-dom";
import Beneficiary from "./Beneficiary";
import WithdrawalAmount from "./WithdrawalAmount";

const WithdrawalDialog: React.FC = () => {
  const [params] = useSearchParams();
  const dialogCurrent = params.get("dialogCurrent");
  return (
    <GlobalDialog dialogName="withdrawFromWallet">
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="flex gap-1 items-center">
            Withdraw
            <FaMoneyBill className="fill-[#157811]" />
          </DialogTitle>
        </DialogHeader>
        {dialogCurrent === "beneficiary" || !dialogCurrent && <Beneficiary /> }
        {dialogCurrent === "amount" && <WithdrawalAmount /> }
      </DialogContent>
    </GlobalDialog>
  );
};

export default WithdrawalDialog;
