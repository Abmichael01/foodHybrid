// OurTaste.tsx

"use client";

import React from "react";
import rice from "@/assets/images/rice.webp";
import beans from "@/assets/images/beans.webp";
import yamFlour from "@/assets/images/yamFlour.webp";
import riceFlour from "@/assets/images/riceFlour.webp";
import plantainFlour from "@/assets/images/plantainFlour.webp";
import garri from "@/assets/images/garri.webp";
import { motion } from "framer-motion";
import {
  slideInLeft,
  slideInRight,
  fadeInUp,
  staggerContainer,
} from "@/lib/animations";

const tastes = [
  {
    name: "Rice",
    description:
      "Simplify kitchen prep with our Peeled Beans. A convenient, time-saving solution for your favorite dishes. Hand-peeled to preserve natural flavor and texture, they’re perfect for moin-moin, akara, or any traditional recipe, without the peeling hassle.",
    img: rice,
    idx: 0,
  },
  {
    name: "Peeled Beans",
    description:
      "Simplify kitchen prep with our Peeled Beans. A convenient, time-saving solution for your favorite dishes. Hand-peeled to preserve natural flavor and texture, they’re perfect for moin-moin, akara, or any traditional recipe, without the peeling hassle.",
    img: beans,
    idx: 1,
  },
  {
    name: "Yam Flour",
    description:
      "Turn mealtime into a celebration with our premium Yam Flour, the heart of the perfect amala. Made from 100% finely processed yams, it’s light, fluffy, and rich in taste. Whether paired with soups or stews, our Yam Flour guarantees a smooth and satisfying experience.",
    img: yamFlour,
    idx: 2,
  },
  {
    name: "Rice Flour",
    description:
      "Experience the versatility of our finely milled Rice Flour, perfect for a variety of culinary delights. Made from high-quality rice grains, it serves as an excellent gluten-free alternative for baking, thickening soups, or preparing traditional African dishes like tuwo shinkafa. Its light texture and mild flavor make it an essential addition to your pantry.",
    img: riceFlour,
    idx: 3,
  },
  {
    name: "Plantain Flour",
    description:
      "Discover the wholesome goodness of our Plantain Flour, made from 100% unripe plantains. Gluten-free and rich in fiber, it’s ideal for those seeking a healthy alternative. Perfect for making swallow or pancakes, it delivers a distinct flavor that brings versatility and nutrition to your meals.",
    img: plantainFlour,
    idx: 4,
  },
  {
    name: "Garri",
    description:
      "Our Garri, made from finely processed cassava roots, strikes the perfect balance of crunch and smoothness. Enjoy it as a refreshing drink or as eba, a quick, nutritious meal that delivers comfort in every bite.",
    img: garri,
    idx: 5,
  },
];

const OurTaste: React.FC = () => {
  return (
    <motion.div
      variants={staggerContainer}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, amount: 0.2 }}
      className="section-padding mt-40"
    >
      <motion.h1
        variants={fadeInUp}
        className="section-title text-center mb-[40px]"
      >
        Our Recipe, Your Taste
      </motion.h1>

      <motion.p
        variants={fadeInUp}
        className="sm:text-center leading-[28px] sm:text-[16px] flex sm:block flex-col gap-y-[24px] text-start max-w-4xl mx-auto px-4"
      >
        <span>
          At Food Hybrid, every product is crafted with care, blending the
          richness of African tradition with modern food processing techniques
          to deliver authentic flavors that satisfy your cravings.
        </span>{" "}
        <span>
          Our recipe is simple: Natural ingredients, Expert processing, and a
          commitment to Quality.
        </span>{" "}
        <span>The result? A taste that feels like Home.</span>
      </motion.p>

      <motion.div
        variants={staggerContainer}
        className="grid grid-cols-1 sm:grid-cols-2 gap-5 lg:px-[40px] lg:gap-x-20 lg:gap-y-10 mt-[60px]"
      >
        {tastes.map((taste, index) =>
          index % 2 === 0 ? (
            <motion.div
              key={index}
              variants={slideInLeft}
              className="flex flex-col space-y-[20px] bg-[#F9F9F9] rounded-[12px] px-[20px] py-[40px]"
            >
              <div className="flex justify-center">
                <img
                  src={taste.img}
                  alt={taste.name}
                  className="h-[160px] sm:h-[120px] lg:w-[193.5px] lg:h-[220px]"
                />
              </div>
              <div>
                <h1 className="text-[20px] sm:text-[16px] font-semibold">
                  {taste.name}
                </h1>
                <p className="text-[18px] leading-[28px] sm:text-[14px] font-satoshi">
                  {taste.description}
                </p>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key={index}
              variants={slideInRight}
              className="flex flex-col space-y-[20px] bg-[#F9F9F9] rounded-[12px] px-[20px] py-[40px]"
            >
              <div className="flex justify-center">
                <img
                  src={taste.img}
                  alt={taste.name}
                  className="h-[160px] sm:h-[120px] lg:w-[193.5px] lg:h-[220px]"
                />
              </div>
              <div>
                <h1 className="text-[20px] sm:text-[16px] font-semibold">
                  {taste.name}
                </h1>
                <p className="text-[18px] leading-[28px] sm:text-[14px] font-satoshi">
                  {taste.description}
                </p>
              </div>
            </motion.div>
          )
        )}
      </motion.div>
    </motion.div>
  );
};

export default OurTaste;