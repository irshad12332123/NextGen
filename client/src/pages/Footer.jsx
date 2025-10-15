import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
const Footer = () => {
  const [email, setEmail] = useState("");
  const navLinks = [
    { linkName: "About", route: "/about" },
    { linkName: "Gallery", route: "/gallery" },
    { linkName: "Courses", route: "/courses" },
  ];

  const socialLinks = [
    { linkName: "<FaInstagram />", route: "/instagram" },
    { linkName: "<FaLinkedin />", route: "/linkedIn" },
    { linkName: "<FaXTwitter />", route: "/twitter" },
    { linkName: "<FaFacebook />", route: "/facebook" },
  ];

  const support = [
    { linkName: "Privacy policy", route: "/privacy-policy" },
    { linkName: "Terms & Conditions", route: "/terms-and-conditions" },
    { linkName: "Refund policy", route: "/refund-policy" },
    { linkName: "Contact Us", route: "/contact-us" },
  ];

  return (
    <div className=" bg-gradient-to-br from-[#0f172a] to-[#383f4b] md:gap-12 gap-5 text-white w-full h-full pt-5 md:pt-20 flex justify-between flex-col mb-15">
      <p className="md:text-3xl text-xl font-bold md:px-20 px-10 ">JOIN NOW</p>
      <div className="flex md:flex-row flex-col gap-15 md:px-20 px-10">
        <div className="md:w-1/3 w-full">
          <p className="text-xl md:text-2xl font-bold">About</p>
          <p className="max-w-3xl text-sm md:text-xl text-[#cbd5e1]">
            Next gen academy powers bla bla bla, Next gen academy powers bla bla
            bla, Next gen academy powers bla bla bla, Next gen academy powers
            bla bla bla....
          </p>
        </div>
        <div className="w-full flex flex-row justify-between md:flex-col md:w-1/2">
          <div className="mb-5">
            <p className="md:text-2xl text-xl  font-bold">Quick Links</p>
            {navLinks.map((link, i) => (
              <p className=" text-sm md:text-xl text-[#cbd5e1] " key={i}>
                {link.linkName}
              </p>
            ))}
          </div>
          <div>
            <p className="text-xl md:text-2xl  font-bold">Support</p>
            {support.map((link, i) => (
              <p className="text-sm md:text-xl text-[#cbd5e1]" key={i}>
                {link.linkName}
              </p>
            ))}
          </div>
        </div>
        <div className="flex flex-col md:gap-5 gap-2">
          <p className="font-bold text-xl md:text-2xl">Join Our Community</p>
          <p className="text-[#cbd5e1] text-sm md:text-xl">
            Subscribe to our news letter and stay updated with our latest
            courses and offers.
          </p>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your email address"
            className="focus:outline-0 outline-0 rounded-xl border-[0.05px] border-gray-600 text-md p-3"
          />
          <button className="py-3 px-5 bg-blue-500 rounded-xl border-[0.05px] border-blue-300">
            Subscribe
          </button>
          <div className="text-[#38bdf8] flex gap-5 text-xl">
            <FaFacebook />
            <FaInstagram />
            <FaLinkedin />
            <FaXTwitter />
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center  bg-gradient-to-r from-[#383f4b] to-[#0f172a] py-2">
        <p className="text-xs md:text-xl">
          © {new Date().getFullYear()} NextGen Academy. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
