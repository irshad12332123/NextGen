import React, { useState } from "react";
import { Link, Links, NavLink } from "react-router-dom";
import clsx from "clsx";
import { RiArrowDownWideFill } from "react-icons/ri";
import { PiPhoneDisconnectThin } from "react-icons/pi";

const NavBar = () => {
  const [activeDropDowm, setActiveDropDowm] = useState(null);
  const handleMouseOn = (i) => {
    setActiveDropDowm(i);
  };
  const handleMouseOver = (i) => {
    console.log("hovered", i);
    setActiveDropDowm(null);
  };
  const navLinks = [
    { linkName: "Home", route: "/" },
    { linkName: "About", route: "/about" },
    { linkName: "Gallery", route: "/gallery" },
    { linkName: "Courses", route: "/courses" },
    { linkName: "Contact Us", route: "/contact-us" },
  ];

  const headerNavLinks = [
    {
      title: "Admissions",
      subTitles: [
        "Undergraduate",
        "Graduate",
        "International Students",
        "Financial Aid",
        "Apply Now",
      ],
    },
    {
      title: "Academics",
      subTitles: ["Undergraduate Programs", "Graduate Programs", "Departments"],
    },
    {
      title: "Research",
      subTitles: [
        "Centers & Institutes",
        "Research Projects",
        "Publications",
        "Funding Opportunities",
      ],
    },
    {
      title: "Campus Life",
      subTitles: [
        "Housing & Dining",
        "Clubs & Organizations",
        "Events & Activities",
        "Health & Wellness",
      ],
    },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-10 flex justify-center flex-col ">
      <nav className="bg-white lg:px-35 md:px-5 px-2  md:py-2 py-1 flex justify-between items-center w-full ">
        {/* Next Gen logo compartment */}
        <div className="flex flex-col leading-tight">
          <p className="text-[#012F6D] font-bold md:text-3xl text-xl justify-self-end m-0 p-0">
            Next{" "}
            <span className="font-bold text-[#50A2D1] md:text-3xl text-xl m-0 p-0">
              Gen
            </span>
          </p>
          <p className="self-end m-0 p-0">Academy</p>
          {/* Rayat bahra University Logo Section */}
        </div>

        <ul className="gap-5 items-center justify-center p-3 border-[#012F6D] lg:flex hidden">
          {/* Rendering all the links for diffnrtnt routes */}
          {navLinks.map((linkObj, index) => (
            <NavLink
              key={index}
              className={({ isActive }) =>
                clsx(
                  "relative font-bold text-black after:content-[''] after:absolute after:left-1/2 after:-translate-x-1/2 after:-bottom-1 after:h-[2px] after:w-0 after:bg-blue-400 after:transition-all after:duration-300 hover:after:w-full",
                  isActive
                    ? "text-blue-500  px-4  text-sm relative font-bold after:content-[''] after:absolute after:left-1/2 after:-translate-x-1/2 after:-bottom-1 after:h-[2px] after:w-full after:bg-blue-900"
                    : " px-4 font-bold text-sm "
                )
              }
              to={linkObj.route}
            >
              {linkObj.linkName}
            </NavLink>
          ))}
        </ul>
        <div className="bg-blue-500 rounded-xl py-3 px-2 flex text-white gap-1">
          <PiPhoneDisconnectThin size={35} className=" self-center" />
          <div className="lg:block hidden">
            <h5 className="lg:text-sm text-xs">Admission Helpline</h5>
            <p className="lg:text-sm text-xs">+91 98XXXXXXX</p>
          </div>
        </div>
      </nav>
      <div className="md:h-12  md:relative h-10 w-full bg-[#2B363A] flex justify-center gap-40 items-center text-white">
        {headerNavLinks.map((item, i) => (
          <div
            className="h-full hidden lg:flex items-center justify-center "
            onMouseEnter={() => handleMouseOn(i)}
            onMouseLeave={handleMouseOver}
            key={i}
          >
            <div className="flex group items-center justify-center  ">
              <p className="text-sm text-gray-300 mr-1 cursor-pointer hover:text-white">
                {item.title}
              </p>
              <RiArrowDownWideFill className="group-hover:text-white text-gray-300" />
            </div>
            {activeDropDowm === i && (
              <div className="absolute shadow-lg  bg-white rounded-b-xl border-1 border-gray-700 top-full z-20 px-10">
                {item.subTitles.map((sub, idx) => (
                  <p
                    key={idx}
                    className="px-4 py-2 text-black border-b-1 border-gray-200 hover:translate-x-2.5 hover:text-blue-500 transition-all duration-100 cursor-pointer"
                  >
                    {sub}
                  </p>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </header>
  );
};

export default NavBar;
