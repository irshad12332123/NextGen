import React from "react";
import rightCircleArrow from "../assets/angle-circle-right.png";
import { Link } from "react-router-dom";
function CustomCard({ cardDetails }) {
  if (!cardDetails) return;
  return (
    <div className="flex flex-col h-full w-full bg-white relative shadow-2xl group ">
      <div className=" h-full w-full relative overflow-hidden ">
        <img
          src={cardDetails.src}
          alt="Btech"
          className="h-full w-full object-cover group-hover:scale-110 transition-all duration-300"
        />
        <p className="text-center text-2xl text-white absolute z-2 bottom-3 left-2 ">
          {cardDetails.title}
        </p>
        <div className="h-full w-full absolute bg-[#181818a9] z-1 top-0 left-0 "></div>
      </div>
      <div className="p-5 flex flex-col flex-1 ">
        <p className="mb-5">{cardDetails.content}</p>
        {/* Explore button section */}
        <Link
          to={cardDetails.link || "#"}
          className="cursor-pointer -bottom-1 "
        >
          <div
            className={`flex items-center justify-center gap-2 group-hover:bg-[#898f95] rounded-full p-1 group  transition-all duration-300 ease-in-out `}
          >
            <img src={rightCircleArrow} alt="Right-arrow" className="w-10" />
            <p
              className={`opacity-0 text-white group-hover:px-3 group-hover:opacity-100 transition-all duration-300 ease-in-out `}
            >
              Explore
            </p>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default CustomCard;
