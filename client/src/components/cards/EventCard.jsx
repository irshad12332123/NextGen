import React from "react";
import { SlCalender } from "react-icons/sl";
import { IoShareSocial } from "react-icons/io5";
import { FaChevronRight } from "react-icons/fa";
import { CiClock1 } from "react-icons/ci";
import { Link } from "react-router-dom";
import { FaLocationPin } from "react-icons/fa6";
import EventMetaData from "../EventMetaData";
function EventCard({ type = "primary" }) {
  return (
    <div className="flex hover:border-blue-500 items-center gap-4  justify-between group border-1 border-gray-400 rounded-md p-5 group">
      {/* Date Badge */}
      <div
        className={`bg-blue-200 rounded-md shadow-md  flex flex-col ${
          type === "primary"
            ? "px-4 py-2"
            : "flex-col-reverse px-7 p-3 text-white bg-blue-500"
        } items-center justify-center`}
      >
        {type === "primary" ? <SlCalender className="text-2xl" /> : <p>Nov</p>}
        <p className="text-3xl font-bold ">12</p>
      </div>

      {/* Event Details */}
      <div>
        <p className="text-xl font-semibold">Community indexed data</p>
        <p
          className={` text-gray-800 leading-relaxed max-w-5xl line-clamp-1  ${
            type === "primary" ? "" : ""
          }`}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Et obcaecati
          aut accusantium eveniet itaque eum rem dicta totam tenetur quod, nemo
          magni, dignissimos natus? Illum beatae doloribus commodi quidem modi!
        </p>
        {type === "primary" ? null : (
          <div className="flex gap-10 ">
            <EventMetaData Icon={CiClock1} data={"10:00 A.M"} />
            <EventMetaData Icon={FaLocationPin} data={"Kharar, Mohali"} />
          </div>
        )}
      </div>
      {type === "primary" ? (
        <Link
          to={"/events"}
          className="group-hover:bg-blue-500 p-5 transition-all duration-150 group-hover:text-white group-hover:p-5 rounded-md"
        >
          <FaChevronRight />
        </Link>
      ) : (
        <div className="flex gap-2 items-center">
          <button className="bg-blue-500 text-white p-2 rounded-md cursor-pointer">
            Register
          </button>
          <IoShareSocial className="text-[#626262] text-2xl cursor-pointer" />
        </div>
      )}
    </div>
  );
}

export default EventCard;
