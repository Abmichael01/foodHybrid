import React from "react";
import { motion } from "framer-motion";
import riceBanner from "@/assets/images/riceBanner.webp";
import beansBanner from "@/assets/images/beansBanner.webp";
import { fadeInUp, staggerContainer } from "@/lib/animations";

const Banners: React.FC = () => {
  return (
    <motion.div
      className="section-padding mt-20 grid grid-cols-1 sm:grid-cols-2 gap-[30px]"
      variants={staggerContainer}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, amount: 0.4 }}
    >
      <motion.img
        src={riceBanner}
        alt="rice-banner"
        className="rounded-[20px]"
        variants={fadeInUp}
      />
      <motion.img
        src={beansBanner}
        alt="beans-banner"
        className="rounded-[20px]"
        variants={fadeInUp}
      />
    </motion.div>
  );
};

export default Banners;
