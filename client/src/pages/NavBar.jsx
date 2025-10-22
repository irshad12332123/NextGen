import React, { useState } from "react";
import { RiArrowDownWideFill } from "react-icons/ri";
import Nav from "@/components/nav/Nav";
import MobileNav from "@/components/nav/MobileNav";

const NavBar = () => {
  const [activeDropDowm, setActiveDropDowm] = useState(null);
  const handleMouseOn = (i) => {
    setActiveDropDowm(i);
  };

  const handleMouseOver = (i) => {
    console.log("hovered", i);
    setActiveDropDowm(null);
  };

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
    <header className="fixed top-5 left-0  right-0 z-10 flex justify-center flex-col ">
      <Nav />
      {/* <div className="md:h-12  md:relative h-10 w-full bg-[#2B363A] flex justify-center gap-40 items-center text-white">
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
          // Mobile Nav Here
        ))}
        <MobileNav />
      </div> */}
    </header>
  );
};

export default NavBar;
