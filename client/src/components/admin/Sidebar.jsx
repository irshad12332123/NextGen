import { decodeToken } from "@/utils/decodeToken";
import React, { useState } from "react";
import { BsCalendar2Event } from "react-icons/bs";
import { LuUserRound } from "react-icons/lu";
import { SiCoursera } from "react-icons/si";
import { NavLink } from "react-router-dom";
import CustomBtn from "../CustomBtn";
import { useApiContext } from "@/providers/ApiContext";
const Sidebar = () => {
  const { username_id } = decodeToken();
  const { handleLogOut } = useApiContext();

  const logOut = () => {
    const hasLoggedOut = handleLogOut();
    if (hasLoggedOut) navigate("/admin-login");
  };

  const tabs = [
    { Icon: BsCalendar2Event, title: "Events Management", to: "/admin-event" },
    { Icon: SiCoursera, title: "Courses Management", to: "/admin-course" },
  ];
  const [selected, setSelected] = useState(0);
  return (
    <aside
      className={`bg-[#111518] fixed w-64 h-full border-r border-[#3B4954] p-4 transition-all duration-300 flex flex-col
          `}
    >
      <div className="flex items-center justify-between mb-8">
        <div className="flex gap-2 items-center ">
          <LuUserRound
            className="rounded-full p-2 bg-[#AFC0A9] text-raisin-black"
            size={40}
          />
          <div className="">
            <p className="text-wheat">{username_id}</p>
            <p className="text-muted text-sm">logged in</p>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex flex-col gap-1 flex-grow border-t pt-2 border-[#dadada4f]">
        <nav className="flex flex-col gap-1 flex-grow">
          {tabs.map((tab, i) => (
            <NavLink
              key={i}
              to={tab.to}
              className={({ isActive }) =>
                `
        flex items-center gap-2 py-2 px-4 rounded-md cursor-pointer transition-all
        ${isActive ? "bg-celestial-blue text-white" : "bg-[#25384900]"}
        hover:opacity-70
        `
              }
            >
              <tab.Icon
                className={({ isActive }) =>
                  `${isActive ? "text-white" : "text-gray-300"}`
                }
              />
              <p className="text-sm">{tab.title}</p>
            </NavLink>
          ))}
        </nav>

        <div className="flex-grow"></div>

        <div className="hover:scale-110">
          <CustomBtn title={"Log out"} onClick={logOut} styleType="tertiary" />
        </div>
      </nav>
    </aside>
  );
};

export default Sidebar;
