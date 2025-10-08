import React from "react";
import { SlCalender } from "react-icons/sl";
import { FaChevronRight } from "react-icons/fa";
function EventCard() {
  return (
    <div className="flex items-center gap-4 shadow-xl border-1 border-gray-400 rounded-xl p-4 group">
      {/* Date Badge */}
      <div className="bg-blue-200 rounded-xl shadow-md px-4 py-2 flex flex-col items-center justify-center">
        <SlCalender className="text-2xl" />
        <p className="text-xl font-bold text-black">12th</p>
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
      <FaChevronRight />
    </div>
  );
}

export default EventCard;
