import React from "react";
import { SlCalender } from "react-icons/sl";
import { FaChevronRight } from "react-icons/fa";
import { Link } from "react-router-dom";
function EventCard({ type = "primary" }) {
  return (
    <div className="flex hover:border-blue-500 items-center gap-4 shadow-xl group border-1 border-gray-400 rounded-md p-5 group">
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
        <p className=" text-gray-800 leading-relaxed max-w-5xl line-clamp-1">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Et obcaecati
          aut accusantium eveniet itaque eum rem dicta totam tenetur quod, nemo
          magni, dignissimos natus? Illum beatae doloribus commodi quidem modi!
        </p>
      </div>
      <Link to={"/events"}>
        <FaChevronRight className="group-hover:bg-blue-400 p-2 text-4xl transition-all duration-150 rounded-xl hover:cursor-pointer" />
      </Link>
    </div>
  );
}

export default EventCard;
