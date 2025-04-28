import { SendIcon } from "lucide-react";
import React from "react";

const SendMessage: React.FC = () => {
  return (
    <div className="section-padding mt-[180px] flex justify-center items-center">
      <div className=" w-full sm:w-[584px] lg:w-[866px] flex flex-col items-center gap-[40px]">
        <h2 className="text-[24px] font-[600]">Send us a message</h2>
        <textarea
          name=""
          placeholder="Type your message"
          id=""
          className="bg-[#F9F9F9] border-1 border-[#F0F0F0] outline-none p-[20px] sm:p-[40px] rounded-[20px] w-full h-[400px] shadow-xl"
        ></textarea>
        <button className="w-full mt-[30px] sm:mt-[49px] cursor-pointer bg-[#15221B] py-[20px] px-[32px] text-white rounded-[4px] flex items-center gap-[10px] justify-center">
          Send Message
          <SendIcon className="rotate-45 size-[18.93px]" />
        </button>
      </div>
    </div>
  );
};

export default SendMessage;
