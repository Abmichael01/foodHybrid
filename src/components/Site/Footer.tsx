import React from "react";
import { Link } from "react-router-dom";
import { Mail, MapPin, PhoneIcon } from "lucide-react";

import Logo from "../Others/Logo";
import Motto from "../Others/Motto";
import { FaFacebook, FaInstagram, FaXTwitter } from "react-icons/fa6";

const links = [
  { name: "Home", link: "/" },
  { name: "About", link: "/about" },
  { name: "Reward and loyalty programme", link: "/loyalty" },
  { name: "Contact", link: "/contact" },
];

const Footer: React.FC = () => {
  return (
    <footer className="section-padding bg-[#15221B] text-white ">
      <div className="flex gap-[20px] justify-between py-20 w-full mt-[120px] ">
        {/* Logo and Motto */}
        <div className="space-y-[40px]">
          <Logo color="white" className="w-[112px] h-[55.53px] object-cover" />
          <Motto className="mt-[40px]" sizes={["text-[32px]", "text-[18px]"]} />
        </div>

        {/* Navigation Links */}
        <nav className="space-y-[12px] flex flex-col">
          {links.map((link, index) => (
            <Link to={link.link} key={index} className="hover:underline">
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Contact Information */}
        <div className="space-y-[40px]">
          <div className="space-y-[20px]">
            <div className="flex items-center gap-2">
              <PhoneIcon />
              <h2 className="text-[18px] text-nowrap">
                1800-121-3637, +91-7052-101-786
              </h2>
            </div>

            <div className="flex items-center gap-2">
              <Mail />
              <h2>info@foodhybrid.co.uk</h2>
            </div>

            <div className="flex items-start gap-2">
              <MapPin />
              <h2 className="flex flex-col gap-2">
                <span>
                  Hybrid Foods & Mart Limited <br /> Plots 2-6, Owode Street,
                  Lagere <br /> Ile-Ife, Nigeria
                </span>
                <span>
                  Food Hybrid (UK) Limited <br /> 128, City road, London <br />{" "}
                  EC1V 2NX
                </span>
              </h2>
            </div>
          </div>
          <div className="flex gap-[10px] pl-[32px]">
            <FaFacebook />
            <FaInstagram />
            <FaXTwitter />
          </div>
        </div>

        {/* Call to Action */}
        <div className="space-y-[24px]">
          <h2 className="font-semibold">Get started with Food Hybrid today!</h2>
          <button className="bg-white text-[#15221B] rounded-[4px] w-full py-[10px] hover:bg-gray-100 transition">
            Sign up
          </button>
        </div>
      </div>
      <div className="flex items-center justify-center flex-col">
        <h2 className="">Copyright © 2024 Food Hybrid. All Rights Reserved</h2>
        <h2 className="text-[177.65px] bg-gradient-to-b from-[#FFFFFF]/20 to-[#15221B]/20 font-[700] bg-clip-text text-transparent mt-[-40px]">
          Food Hybrid
        </h2>
      </div>
    </footer>
  );
};

export default Footer;
