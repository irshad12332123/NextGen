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
      <nav className="bg-white px-3 py-2 flex justify-between items-center w-full">
        {/* Next Gen logo compartment */}
        <div className="flex flex-col leading-tight">
          <p className="text-[#012F6D] font-bold text-3xl justify-self-end m-0 p-0">
            Next{" "}
            <span className="font-bold text-[#50A2D1] text-3xl m-0 p-0">
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
        <ul className="flex gap-5 items-center justify-center p-3  border-1 border-[#012F6D]  rounded-4xl">
          {/* Rendering all the links for diffnrtnt routes */}
          {navLinks.map((linkObj, index) => (
            <NavLink
              key={index}
              className={({ isActive }) =>
                clsx(
                  "",
                  isActive
                    ? "bg-[#50A2D1] rounded-[2rem] py-2 px-4 text-[#012F6D] font-bold text-sm"
                    : "py-2 px-4 font-bold text-sm border-1 border-[#6786] rounded-[2rem]"
                )
              }
              to={linkObj.route}
            >
              {linkObj.linkName}
            </NavLink>
          ))}
        </ul>
        <div className="bg-[#012F6D] rounded-xl py-3 px-2 flex text-white gap-1">
          <img src={phone} alt="call_img_png" className="self-center" />
          <div>
            <h5 className="text-sm">Admission Helpline</h5>
            <p className="text-sm">+91 98XXXXXXX</p>
          </div>
        </div>
      </nav>
      <div className="h-15 w-full bg-[#012F6D] flex"></div>
    </header>
  );
};

export default NavBar;
