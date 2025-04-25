import React from 'react'
import { FaUserCircle } from 'react-icons/fa'

const WithdrawalAmount: React.FC = () => {
  return (
    <div>
        <div className="flex items-center flex-col gap-[2px]">
            <div className="flex gap-1 items-center p-[8px] bg-[#F0F0F0] rounded-full">
                <FaUserCircle className='size-[16.66px]' />
                <h1 className="text-[14px] font-[600]">Emmanuel Ayomide Ebo</h1>
            </div>
            <p className="text-[12px] font-satoshi font-[500] text-[#6E6E6E]">1122334455 | Lloyds Bank</p>
        </div>
        <div className="">
            <div className="space-y-[8px]">
                <p className=""></p>
            </div>
        </div>
    </div>
  )
}

export default WithdrawalAmount