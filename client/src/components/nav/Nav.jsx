import React from "react";
import { NavLink } from "react-router-dom";
import clsx from "clsx";
import { PiPhoneDisconnectThin } from "react-icons/pi";
import CustomBtn from "../CustomBtn";
const Nav = () => {
  const navLinks = [
    { linkName: "Home", route: "/" },
    { linkName: "About", route: "/about" },
    { linkName: "Gallery", route: "/gallery" },
    { linkName: "Courses", route: "/courses" },
    { linkName: "Contact Us", route: "/contact-us" },
  ];
  return (
    <nav className="xl:px-35  2xl:px-70  md:px-5 px-2    ">
      {/* Next Gen logo compartment */}
      <div className="flex justify-between items-center bg-raisin-black h-full shadow-md rounded-sm  w-full p-4">
        <div className="flex flex-col leading-tight">
          <p className="text-seasalt font-bold md:text-2xl text-xl justify-self-end m-0 p-0">
            Next <span className="text-celestial-blue">Gen</span>
          </p>
          {/* Rayat bahra University Logo Section */}
        </div>

        <ul className="">
          <div className="gap-5 items-center justify-center p-3  lg:flex hidden">
            {/* Rendering all the links for diffnrtnt routes */}
            {navLinks.map((linkObj, index) => (
              <NavLink
                key={index}
                className={({ isActive }) =>
                  clsx(
                    "relative font-bold text-seasalt after:content-[''] after:absolute after:left-1/2 after:-translate-x-1/2 after:-bottom-1 after:h-[2px] after:w-0 after:bg-celestial-blue after:transition-all after:duration-300 hover:after:w-full",
                    isActive
                      ? "text-celestial-blue  px-4  text-sm relative font-bold after:content-[''] after:absolute after:left-1/2 after:-translate-x-1/2 after:-bottom-1 after:h-[2px] after:w-full after:bg-celestial-blue"
                      : " px-4 font-bold text-sm "
                  )
                }
                to={linkObj.route}
              >
                {linkObj.linkName}
              </NavLink>
            ))}
            <CustomBtn title={"Apply Now"} />
          </div>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
