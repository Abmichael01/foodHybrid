// RootedAndDriven.tsx

"use client";

import React from "react";
import RandomStars from "../RandomStars";
import StackedProducts from "@/components/LandingPage/StackedProducts";
import dinner from "@/assets/images/dinner.webp";
import { motion } from "framer-motion";
import {
  slideInLeft,
  slideInRight,
  fadeInUp,
  zoomIn,
  bounceIn,
  staggerContainer,
  popIn,
  floatYInfinite,
} from "@/lib/animations";

const RootedAndDriven: React.FC = () => {
  return (
    <motion.section
      variants={fadeInUp}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, amount: 0.1 }}
      className="section-padding space-y-[80px] py-[40px] sm:py-[120px] bg-[#15221B] overflow-hidden text-white relative mt-[200px]"
    >
      {/* Background Title */}
      <motion.h1
        variants={fadeInUp}
        initial="initial"
        animate="animate"
        className="text-[clamp(50px,6vw,200px)] absolute right-0 top-[30px] left-0 font-[600] bg-gradient-to-b from-[#38423D] to-[#8EA89A] bg-clip-text text-transparent text-center opacity-[0.2]"
      >
        Rooted in Tradition and Driven by Innovation
      </motion.h1>

      {/* Main Heading */}
      <motion.h2
        variants={zoomIn}
        initial="initial"
        animate="animate"
        className="font-[700] text-[32px] lg:text-[40px] text-center mt-[-100px] z-[1] relative"
      >
        Rooted in{" "}
        <span className="font-distant-stroke font-[500]">Tradition</span> and
        Driven by{" "}
        <span className="font-distant-stroke font-[500]">Innovation</span>
      </motion.h2>

      {/* Product Stack Section */}
      <motion.div
        variants={staggerContainer}
        initial="initial"
        animate="animate"
        className="relative flex justify-center"
      >
        <motion.div
          variants={floatYInfinite}
          className="absolute mt-0 bottom-0 sm:bottom-0 lg:bottom-0 scale-[0.7] translate-x-[-100px] sm:translate-x-[-140px]"
        >
          <StackedProducts type="beans" />
        </motion.div>
        <motion.div
          variants={popIn}
          className="relative mt-0 top-0 right-0 scale-[1.2] z-[999]"
        >
          <StackedProducts type="rice" />
        </motion.div>
        <motion.div
          variants={floatYInfinite}
          className="absolute mt-0 bottom-0 sm:bottom-0 lg:bottom-0 scale-[0.7] translate-x-[100px] sm:translate-x-[140px]"
        >
          <StackedProducts type="beans" />
        </motion.div>
      </motion.div>

      {/* Short Description */}
      <motion.h3
        variants={bounceIn}
        initial="initial"
        animate="animate"
        className="text-[16px] lg:text-[20px] font-satoshi font-[500] text-center"
      >
        Food Hybrid is proud to offer a diverse range of high-quality food products
      </motion.h3>

      {/* Long Paragraph With Stars */}
      <motion.div
        variants={{
          initial: {},
          animate: { transition: { staggerChildren: 0.2 } },
        }}
        initial="initial"
        animate="animate"
        className="flex justify-center relative text-white"
      >
        <motion.h3
          variants={fadeInUp}
          className="w-[95%] text-center text-[16px] sm:text-[18px] lg:text-[20px] font-satoshi font-[500] text-[#8A908D] relative"
        >
          <motion.span variants={slideInLeft}>
            <span className="text-[18px] sm:text-[24px] lg:text-[32px] font-[900] text-white">
              Garri
            </span>
            , a staple derived from cassava roots.{" "}
          </motion.span>

          <motion.span variants={slideInRight}>
            <span className="text-[18px] sm:text-[24px] lg:text-[32px] font-[900] text-white">
              Plantain Flour
            </span>{" "}
            , made from nutrient-rich unripe plantain.
          </motion.span>

          <br />

          <motion.span variants={slideInLeft}>
            <span className="text-[18px] sm:text-[24px] lg:text-[32px] font-[900] text-white">
              Vitamin A Fortified Garri
            </span>
            , packed with enhanced nutritional benefits from Vitamin A fortified
            cassava.{" "}
          </motion.span>

          <motion.span variants={slideInRight}>
            <span className="text-[18px] sm:text-[24px] lg:text-[32px] font-[900] text-white">
              Yam Flour
            </span>
            , derived from carefully processed yam tubers.{" "}
          </motion.span>

          <motion.span variants={slideInLeft}>
            <span className="text-[18px] sm:text-[24px] lg:text-[32px] font-[900] text-white">
              Peeled Beans
            </span>{" "}
            , meticulously hand-peeled to preserve the authenticity of this
            essential African protein source.
          </motion.span>

          <RandomStars className="text-white" />
        </motion.h3>
      </motion.div>

      {/* Final Image & Text Block */}
      <motion.div
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="flex flex-col-reverse sm:flex-row mt-[60px] justify-between gap-[23.82px] lg:gap-[40px] items-center p-[23.82px] lg:p-[40px] rounded-[19.05px] lg:rounded-[32px] bg-[#111C16]"
      >
        <motion.img
          variants={slideInLeft}
          src={dinner}
          alt=""
          className="w-full sm:w-[46%] shrink-1 rounded-[12.45px]"
        />
        <motion.h2
          variants={slideInRight}
          className="text-[18px] sm:text-[24px] lg:text-[40px] font-[700] leading-[28px] sm:leading-[40px] lg:leading-[72px] tracking-[-2%]"
        >
          Each product brings the taste of home to the African diaspora while introducing
          the world to authentic African flavors.
        </motion.h2>
      </motion.div>
    </motion.section>
  );
};

export default RootedAndDriven;