import React, { useState } from "react";
import { LuUserRound } from "react-icons/lu";
import { BsCalendar2Event } from "react-icons/bs";

import MainEventAdmin from "@/components/admin-events/MainEventAdmin";
import { decodeToken } from "@/utils/decodeToken";

const EventAdmin = () => {
  const { name, email } = decodeToken();
  return (
    <div className="min-h-screen w-full bg-[#0e1418] text-gray-100">
      <div className="grid grid-cols-[auto_1fr] h-screen">
        {/* Sidebar */}
        <aside
          className={`bg-[#1C2227] border-r border-[#3B4954] p-4 transition-all duration-300 flex flex-col
          `}
        >
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-xl font-semibold text-white">
              Next <span className="text-celestial-blue ">Gen</span>
            </h2>
          </div>

          {/* Navigation */}
          <nav className="flex flex-col gap-4 flex-grow">
            <div className="flex items-center bg-[#253849] gap-2 py-2 px-4 rounded-md">
              <BsCalendar2Event className="text-celestial-blue" />
              <p className="text-sm text-celestial-blue">Events Management</p>
            </div>

            <div className="flex-grow"></div>

            <div className="flex gap-2 items-center">
              <LuUserRound
                className="rounded-full p-2 bg-[#AFC0A9] text-raisin-black"
                size={40}
              />
              <div className="">
                <p className="text-wheat">{name}</p>
                <p className="text-muted text-sm">{email}</p>
              </div>
            </div>
          </nav>
        </aside>

        {/* Main Content */}
        <MainEventAdmin />
      </div>
    </div>
  );
};

export default EventAdmin;
