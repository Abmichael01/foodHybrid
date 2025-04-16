import React from "react";
import testimonials1Img from "@/assets/images/testimonial1.webp";
import testimonials2Img from "@/assets/images/testimonial2.webp";
import testimonials3Img from "@/assets/images/testimonial3.webp";

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
  return (
    <div className="section-padding pr-0 mt-40">
      <div className="space-y-[60px] ">
        <h2 className="text-center font-semibold text-[32px]">
          Take It From Our Clients
        </h2>
        <div className="flex gap-[33.59px] overflow-x-auto py-10 px-5 testimonials-container">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="w-[415.3px] p-[13.44px] shadow-xl rounded-xl shrink-0 space-y-[13.44px] testimonial-container "
            >
              <div className="space-y-[7.78px]">
                <div className="size-[60px] rounded-full bg-primary">
                    <img src={testimonial.img} alt="" className="size-full object-cover object-top" />
                </div>
                <div>
                  <h1 className="text-[20px] font-medium">
                    {testimonial.name}
                  </h1>
                  <h2 className="">{testimonial.profession}</h2>
                </div>
              </div>
              <p className="text-[18px] font-satoshi italic">
                {testimonial.testimonial}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
