import React from "react";
import { NavLink } from "react-router-dom";
import clsx from "clsx";
import { PiPhoneDisconnectThin } from "react-icons/pi";
const Nav = () => {
  const navLinks = [
    { linkName: "Home", route: "/" },
    { linkName: "About", route: "/about" },
    { linkName: "Gallery", route: "/gallery" },
    { linkName: "Courses", route: "/courses" },
    { linkName: "Contact Us", route: "/contact-us" },
  ];
  return (
    <nav className="bg-white xl:px-35  md:px-5 px-2  md:py-2 py-1 flex justify-between items-center w-full ">
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
      <div className="bg-blue-500 rounded-xl md:py-3 py-2 px-2 flex text-white gap-1">
        <PiPhoneDisconnectThin size={35} className="self-center" />
        <div className="lg:block hidden">
          <h5 className="lg:text-sm text-xs">Admission Helpline</h5>
          <p className="lg:text-sm text-xs">+91 98XXXXXXX</p>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
