import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const navLinks = [
    { linkName: "About", route: "/about" },
    { linkName: "Gallery", route: "/gallery" },
    { linkName: "Courses", route: "/courses" },
    { linkName: "Privacy policy", route: "/privacy-policy" },
    { linkName: "Privacy policy", route: "/privacy-policy" },
    { linkName: "Privacy policy", route: "/privacy-policy" },
    { linkName: "Privacy policy", route: "/privacy-policy" },
    { linkName: "Privacy policy", route: "/privacy-policy" },
    { linkName: "Contact Us", route: "/contact-us" },
    { linkName: "Contact Us", route: "/contact-us" },
    { linkName: "Contact Us", route: "/contact-us" },
    { linkName: "Contact Us", route: "/contact-us" },
  ];

  const socialLinks = [
    { linkName: "Instagram", route: "/instagram" },
    { linkName: "LinkedIn", route: "/linkedIn" },
    { linkName: "Twitter", route: "/twitter" },
    { linkName: "Snapchat", route: "snapchat" },
  ];

  return (
    <div className="bg-[#CAD5E2] w-full h-full px-10 py-5 flex justify-between flex-col mb-15">
      {/* Top container */}
      <div className="flex items-center justify-between">
        <p className="md:text-xl font-bold text-black self-start">JOIN NOW</p>
        <div className="grid grid-cols-3 md:gap-x-8 gap-x-[0.1rem]">
          {navLinks.map((linkObj, index) => (
            <Link
              to="linkObj.route"
              key={index}
              className="px-5 py-2 text-[#616161] md:text-xl text-sm  hover:text-green-700"
            >
              {linkObj.linkName}
            </Link>
          ))}
        </div>
      </div>
      {/* Bottom container */}
      <div className="flex md:justify-between flex-col">
        <div className="md:mt-25 mt-2 ">
          {socialLinks.map((linkObj, index) => (
            <Link
              to="linkObj.route"
              key={index}
              className="md:px-5 md:py-2 py-1 px-2 hover:bg-white text-[#616161] md:text-xl text-sm"
            >
              {linkObj.linkName}
            </Link>
          ))}
        </div>
        <p className="md:self-end text-[#616161] w-full md:text-xl text-sm">
          © 2024 NextGen Academy. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
