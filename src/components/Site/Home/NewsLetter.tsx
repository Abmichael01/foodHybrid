// NewsLetter.tsx

"use client";

import React from "react";
import megaphone from "@/assets/images/megaphone.webp";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { zoomIn, fadeInUp, bounceIn } from "@/lib/animations";

const NewsLetter: React.FC = () => {
  return (
    <motion.section
      variants={zoomIn}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, amount: 0.2 }}
      className="section-padding mt-[80px] sm:mt-40 flex flex-col items-center text-center"
    >
      {/* Megaphone Image */}
      <motion.img
        variants={fadeInUp}
        src={megaphone}
        alt="Megaphone"
        className="size-[204px] mb-8"
      />

      {/* Heading & Paragraph */}
      <motion.div variants={fadeInUp} className="max-w-2xl">
        <h1 className="sm:text-[24px] lg:text-[32px] font-semibold mb-4">
          Stay up to date
        </h1>
        <p className="sm:text-[18px] lg:text-[20px] text-[#15221B] w-full lg:w-[80%] mx-auto">
          Subscribe to our Newsletter to get updates on products and happenings with us.
        </p>
      </motion.div>

      {/* Email Input */}
      <motion.div
        variants={bounceIn}
        className="mt-[60px] flex w-full max-w-[650px] justify-between h-fit"
      >
        <input
          type="text"
          placeholder="Enter your email address"
          className="border text-[16px] px-[20px] w-full outline-none bg-[#F5F5F5] rounded-l-sm py-[18px]"
        />
        <Button className="rounded-r-sm py-[18px] px-6 hover:scale-105 transform transition-all duration-300">
          Subscribe
        </Button>
      </motion.div>
    </motion.section>
  );
};

export default NewsLetter;