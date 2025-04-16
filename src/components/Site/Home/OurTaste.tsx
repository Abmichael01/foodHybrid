import React from "react";
import rice from "@/assets/images/rice.webp";
import beans from "@/assets/images/beans.webp";
import yamFlour from "@/assets/images/yamFlour.webp";
import riceFlour from "@/assets/images/riceFlour.webp";
import plantainFlour from "@/assets/images/plantainFlour.webp";
import garri from "@/assets/images/garri.webp";


const tastes = [
  {
    name: "Rice",
    description:
      "Simplify kitchen prep with our Peeled Beans. A convenient, time-saving solution for your favorite dishes. Hand-peeled to preserve natural flavor and texture, they’re perfect for moin-moin, akara, or any traditional recipe, without the peeling hassle.",
    img: rice,
  },
  {
    name: "Peeled Beans",
    description:
      "Simplify kitchen prep with our Peeled Beans. A convenient, time-saving solution for your favorite dishes. Hand-peeled to preserve natural flavor and texture, they’re perfect for moin-moin, akara, or any traditional recipe, without the peeling hassle.",
    img: beans,
  },
  {
    name: "Yam Flour",
    description:
      "Turn mealtime into a celebration with our premium Yam Flour, the heart of the perfect amala. Made from 100% finely processed yams, it’s light, fluffy, and rich in taste. Whether paired with soups or stews, our Yam Flour guarantees a smooth and satisfying experience.",
    img: yamFlour,
  },
  {
    name: "Rice Flour",
    description:
      "Experience the versatility of our finely milled Rice Flour, perfect for a variety of culinary delights. Made from high-quality rice grains, it serves as an excellent gluten-free alternative for baking, thickening soups, or preparing traditional African dishes like tuwo shinkafa. Its light texture and mild flavor make it an essential addition to your pantry.",
    img: riceFlour,
  },
  {
    name: "Plantain Flour",
    description:
      "Discover the wholesome goodness of our Plantain Flour, made from 100% unripe plantains. Gluten-free and rich in fiber, it’s ideal for those seeking a healthy alternative. Perfect for making swallow or pancakes, it delivers a distinct flavor that brings versatility and nutrition to your meals.",
    img: plantainFlour,
  },
  {
    name: "Garri",
    description:
      "Our Garri, made from finely processed cassava roots, strikes the perfect balance of crunch and smoothness. Enjoy it as a refreshing drink or as eba, a quick, nutritious meal that delivers comfort in every bite.",
    img: garri
  },
];

const OurTaste: React.FC = () => {
  return (
    <div className="section-padding mt-40">
      <div className="px-[40px] space-y-[60px]">
        <div className="space-y-[20px] text-center">
          <h1 className="text-[32px] font-semibold">Our Recipe, Your Taste</h1>
          <p className="text-center">
            At Food Hybrid, every product is crafted with care, blending the
            richness of African tradition with modern food processing techniques
            to deliver authentic flavors that satisfy your cravings. Our recipe
            is simple: Natural ingredients, Expert processing, and a commitment
            to Quality. The result? A taste that feels like Home.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-x-20 gap-y-10 ">
          {tastes.map((taste, index) => (
            <div
              key={index}
              className="flex flex-col space-y-[20px] bg-[#F9F9F9] rounded-[12px] px-[20px] py-[40px]"
            >
              <div className="flex justify-center ">
                <img src={taste.img} alt={taste.name} className="w-[193.5px] h-[220px]" />
              </div>
              <p>{taste.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurTaste;
