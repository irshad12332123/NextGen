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
        <p className="text-xl font-bold text-black self-start">JOIN NOW</p>
        <div className="grid grid-cols-3 gap-x-8">
          {navLinks.map((linkObj, index) => (
            <Link
              to="linkObj.route"
              key={index}
              className="px-5 py-2 text-[#616161]"
            >
              {linkObj.linkName}
            </Link>
          ))}
        </div>
      </div>
      {/* Bottom container */}
      <div className="flex justify-between items-end">
        <p className="self-end text-[#616161]">
          © 2024 NextGen Academy. All rights reserved.
        </p>
        <div className="mt-25">
          {socialLinks.map((linkObj, index) => (
            <Link
              to="linkObj.route"
              key={index}
              className="px-5 py-2 text-[#616161]"
            >
              {linkObj.linkName}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Footer;
