import React, { useState } from "react";
import testimonials1Img from "@/assets/images/testimonial1.webp";
import testimonials2Img from "@/assets/images/testimonial2.webp";
import testimonials3Img from "@/assets/images/testimonial3.webp";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

const testimonials = [
  {
    name: "Damilola O.",
    profession: "Restaurant Owner",
    testimonial:
      "“FoodHybrid has completely transformed the way I source fresh produce. The ordering process is seamless, and the quality of the products is always top-notch!”",
    img: testimonials1Img,
  },
  {
    name: "Chinedu M.",
    profession: "Catering Business Owner",
    testimonial:
      "“I love how FoodHybrid ensures timely deliveries. My business relies on fresh ingredients, and they never disappoint. Highly recommended!”",
    img: testimonials2Img,
  },
  {
    name: "Miriam K.",
    profession: "Food Supplier",
    testimonial:
      "“I’ve been using FoodHybrid for months, and they’ve never let me down. Reliable service, quality products, and secure transactions all in one place!”",
    img: testimonials3Img,
  },
  {
    name: "Damilola O.",
    profession: "Restaurant Owner",
    testimonial:
      "“FoodHybrid has completely transformed the way I source fresh produce. The ordering process is seamless, and the quality of the products is always top-notch!”",
    img: testimonials1Img,
  },
  {
    name: "Chinedu M.",
    profession: "Catering Business Owner",
    testimonial:
      "“I love how FoodHybrid ensures timely deliveries. My business relies on fresh ingredients, and they never disappoint. Highly recommended!”",
    img: testimonials2Img,
  },
  {
    name: "Miriam K.",
    profession: "Food Supplier",
    testimonial:
      "“I’ve been using FoodHybrid for months, and they’ve never let me down. Reliable service, quality products, and secure transactions all in one place!”",
    img: testimonials3Img,
  },
];

const Testimonials: React.FC = () => {
  const [index, setIndex] = useState(0);
  return (
    <div className="section-padding pr-0 mt-40">
      <div className="space-y-[20px] sm:space-y-[40px] lg:space-y-[60px] ">
        <h2 className="section-title">Take It From Our Clients</h2>
        <div className="hidden sm:flex gap-[33.59px] overflow-x-auto py-10 px-5 testimonials-container">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="sm:w-[247.3px] lg:w-[415.3px] p-[13.44px] shadow-xl rounded-xl shrink-0 space-y-[13.44px] testimonial-container "
            >
              <div className="space-y-[7.78px]">
                <div className="size-[60px] rounded-full bg-primary">
                  <img
                    src={testimonial.img}
                    alt=""
                    className="size-full object-cover object-top"
                  />
                </div>
                <div>
                  <h1 className="sm:text-[16px] lg:text-[20px] font-medium">
                    {testimonial.name}
                  </h1>
                  <h2 className="sm:text-[12px]">{testimonial.profession}</h2>
                </div>
              </div>
              <p className="sm:text-[10.42px] lg:text-[18px] font-satoshi italic">
                {testimonial.testimonial}
              </p>
            </div>
          ))}
        </div>
        <div>
          <div className={cn(
            "w-full p-[13.44px] sm:hidden shadow-xl rounded-xl shrink-0 space-y-[13.44px] testimonial-container",
            
          )}>
            <div className="space-y-[7.78px]">
              <div className="size-[60px] rounded-full bg-primary">
                <img
                  src={testimonials[index].img}
                  alt=""
                  className="size-full object-cover object-top"
                />
              </div>
              <div>
                <h1 className="sm:text-[16px] lg:text-[20px] font-medium">
                  {testimonials[index].name}
                </h1>
                <h2 className="sm:text-[12px]">
                  {testimonials[index].profession}
                </h2>
              </div>
            </div>
            <p className="sm:text-[10.42px] lg:text-[18px] font-satoshi italic">
              {testimonials[index].testimonial}
            </p>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <div
            onClick={() => {
              setIndex((prev) => (index === 0 ? 0 : prev - 1));
              document.querySelector(".testimonial-container")?.classList.add("fade-in")
              document.querySelector(".testimonial-container")?.classList.remove("fade-in")
            }}
            className={cn(
              "p-[3px] text-[12px] text-[#15221B] border-2 rounded-full border-[#15221B] cursor-pointer",
              index == 0 && "border-[#15221B]/20 text-[#15221B]/20 "
            )}
          >
            <ArrowLeft />
          </div>
          <div className="flex gap-2">
            {Array.from({ length: testimonials.length }).map((_, idx) => (
              <div key={idx} className={cn(
                "size-2 rounded-full bg-[#15221B]/20 transition-all duration-500",
                idx === index && "bg-[#15221B] w-5"
              )}>

              </div>
            ))}
          </div>
          <div
            onClick={() => {
              setIndex((prev) =>
                index === testimonials.length - 1
                  ? testimonials.length - 1
                  : prev + 1
              );
            }}
            className={cn(
              "p-[3px] text-[12px] text-[#15221B] border-2 rounded-full border-[#15221B] cursor-pointer",
              index == testimonials.length - 1 &&
                "border-[#15221B]/20 text-[#15221B]/20"
            )}
          >
            <ArrowRight />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
