import React from "react";
import { NavLink } from "react-router-dom";
import phone from "../assets/phone.png";
import clsx from "clsx";

const NavBar = () => {
  const navLinks = [
    { linkName: "Home", route: "/" },
    { linkName: "About", route: "/about" },
    { linkName: "Gallery", route: "/gallery" },
    { linkName: "Courses", route: "/courses" },
    { linkName: "Contact Us", route: "/contact-us" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-10 flex justify-center flex-col ">
      <nav className="bg-white px-3 md:py-2 py-1 flex justify-between items-center w-full">
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
        {/* <div className="flex flex-col leading-tight">
          <img
            src={"../../public/RBU_logo.svg"}
            alt="Rayat bahra university logo"
          />
        </div> */}
        <ul className="gap-5 items-center justify-center p-3 border-[#012F6D] md:flex hidden">
          {/* Rendering all the links for diffnrtnt routes */}
          {navLinks.map((linkObj, index) => (
            <NavLink
              key={index}
              className={({ isActive }) =>
                clsx(
                  "relative font-bold text-black after:content-[''] after:absolute after:left-1/2 after:-translate-x-1/2 after:-bottom-1 after:h-[2px] after:w-0 after:bg-blue-900 after:transition-all after:duration-300 hover:after:w-full",
                  isActive
                    ? "text-[#012F6D]  px-4  text-sm relative font-bold after:content-[''] after:absolute after:left-1/2 after:-translate-x-1/2 after:-bottom-1 after:h-[2px] after:w-full after:bg-blue-900"
                    : " px-4 font-bold text-sm "
                )
              }
              to={linkObj.route}
            >
              {linkObj.linkName}
            </NavLink>
          ))}
        </ul>
        <div className="bg-[#012F6D] rounded-xl py-3 px-2 flex text-white gap-1">
          <img src={phone} alt="call_img_png" className="self-center w-5" />
          <div className="md:block hidden">
            <h5 className="md:text-sm text-xs">Admission Helpline</h5>
            <p className="md:text-sm text-xs">+91 98XXXXXXX</p>
          </div>
        </div>
      </nav>
      <div className="md:h-15 h-10 w-full bg-[#012F6D] flex"></div>
    </header>
  );
};

export default NavBar;
