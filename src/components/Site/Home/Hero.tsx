import React from "react";
import heroImg from "@/assets/images/wheatField.webp";
import Motto from "@/components/Others/Motto";
import { Button } from "@/components/ui/button";
import StackedProducts from "@/components/LandingPage/StackedProducts";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/animations";

const Hero: React.FC = () => {
  return (
    <div className="section-padding relative h-[600px] sm:h-[780px] flex flex-col gap-5 justify-center">
  <img
    src={heroImg}
    alt="hero-image"
    className="absolute inset-0 w-full h-full object-cover z-0"
  />
  
  <motion.div
    variants={staggerContainer}
    initial="initial"
    whileInView="animate"
    viewport={{ once: true, amount: 0.5 }}
    className="space-y-[28px] relative z-10"
  >
    <motion.div variants={fadeInUp}>
      <Motto
        sizes={["text-[52px] sm:text-[64px]", "text-[28px] sm:text-[40px]"]}
      />
    </motion.div>

    <motion.div variants={fadeInUp}>
      <Button className="py-[12px] px-[20px]">Get Started</Button>
    </motion.div>
  </motion.div>

  <StackedProducts
    type="rice"
    className="absolute left-[2%] sm:left-[40px] lg:left-[100px]"
  />
  <StackedProducts
    type="beans"
    className="absolute right-[2%] sm:right-[40px] lg:right-[100px]"
  />
</div>

  );
};

export default Hero;
