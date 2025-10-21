import React, { useState } from "react";
import { CiMenuBurger } from "react-icons/ci";
import { NavLink } from "react-router-dom";
import { IoHomeOutline } from "react-icons/io5";
import { CiMail } from "react-icons/ci";
import { LuGalleryVerticalEnd } from "react-icons/lu";
import { CiCircleInfo } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";
import { SiCoursera } from "react-icons/si";
import { motion, AnimatePresence } from "framer-motion";

const MobileNav = () => {
  const [menuClicked, setMenuClicked] = useState(false);
  const [selected, setSelected] = useState(0);
  const navLinks = [
    { linkName: "Home", route: "/", icon: IoHomeOutline },
    { linkName: "About", route: "/about", icon: CiCircleInfo },
    { linkName: "Gallery", route: "/gallery", icon: LuGalleryVerticalEnd },
    { linkName: "Courses", route: "/courses", icon: SiCoursera },
    { linkName: "Contact Us", route: "/contact-us", icon: CiMail },
  ];

  const handleMenuClick = () => setMenuClicked((prev) => !prev);

  return (
    <div className="md:hidden relative w-full flex items-center px-3 py-2">
      <CiMenuBurger
        size={28}
        className="text-white cursor-pointer"
        onClick={handleMenuClick}
      />
      <AnimatePresence>
        {menuClicked && (
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed top-0 left-0 w-[60%] h-full bg-[#1A2A44] gap-4 flex flex-col p-3 z-50"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.1, duration: 0.2 }}
              className="flex justify-between items-center text-white"
            >
              <p className="font-bold">Menu</p>
              <IoMdClose
                className="text-center text-xl"
                onClick={handleMenuClick}
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.3 }}
              className="flex flex-col gap-3"
            >
              {navLinks.map((nav, i) => (
                <div
                  className={`flex gap-4 items-center w-full h-full ${
                    selected === i ? "bg-[#3B5998]" : ""
                  } p-2 px-5 rounded-md`}
                  key={i}
                >
                  <nav.icon className="text-white text-lg" />
                  <NavLink
                    to={nav.route}
                    className={({ isActive }) =>
                      `text-sm font-semibold text-white ${
                        isActive ? "text-red-400" : ""
                      }`
                    }
                    onClick={() => {
                      setSelected(i);
                      setMenuClicked(false);
                    }}
                  >
                    {nav.linkName}
                  </NavLink>
                </div>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MobileNav;
