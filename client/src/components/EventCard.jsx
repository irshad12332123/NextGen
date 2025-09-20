import React from "react";
import rightCircleArrow from "../assets/angle-circle-right.png";
function EventCard() {
  return (
    <div className="flex items-center gap-4 bg-[#CAD5E2] shadow-lg rounded-full p-4 hover:scale-[1.02] transition-transform duration-300 ease-in-out">
      {/* Date Badge */}
      <div className="bg-white rounded-full shadow-md px-4 py-2 flex items-center justify-center">
        <p className="text-xl font-bold text-black">12th, feb</p>
      </div>

      {/* Event Details */}
      <p className="text-lg text-gray-800 leading-relaxed max-w-5xl">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Et obcaecati
        aut accusantium eveniet itaque eum rem dicta totam tenetur quod, nemo
        magni, dignissimos natus? Illum beatae doloribus commodi quidem modi!
      </p>
      <div
        className={`flex items-center justify-center gap-2 cursor-pointer rounded-full p-1`}
      >
        <img src={rightCircleArrow} alt="Right-arrow" className="w-10" />
        <p
          className={`opacity-0 text-white group-hover:px-3 group-hover:opacity-100 transition-all duration-300 ease-in-out `}
        >
          Explore
        </p>
      </div>
    </div>
  );
}

export default EventCard;
