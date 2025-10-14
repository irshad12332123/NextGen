import React from "react";
import rightCircleArrow from "../../assets/angle-circle-right.png";
import { Link } from "react-router-dom";
function CustomCard({ cardDetails, link }) {
  if (!cardDetails) return;
  return (
    <div className="flex flex-col h-full w-full relative  group rounded-2xl bg-white shadow-2xl">
      <div className="h-90 lg:h-90 md:h-70 w-full relative overflow-hidden rounded-t-2xl  ">
        <img
          src={cardDetails.src}
          alt="Btech"
          className="h-full w-full  object-cover group-hover:scale-110 transition-all duration-300"
        />
        <p className=" left-[4%] transition-all duration-300 line-clamp-1 text-center font-bold group-hover:-translate-y-6 text-white absolute z-2 bottom-3  w-[90%]">
          {cardDetails.title || cardDetails.name}
        </p>
        <div className="h-full w-full absolute bg-[#181818a9] z-1 top-0 left-0 group-hover:bg-[#181818b8] "></div>
      </div>
      <div className="p-5 flex flex-col  ">
        <p className="mb-5 line-clamp-1 ">
          {cardDetails.content || cardDetails.description}
        </p>
        {/* Explore button section */}
        <Link to={link || "#"} className="cursor-pointer -bottom-1 ">
          <img src={rightCircleArrow} alt="Right-arrow" className="w-10" />
        </Link>
      </div>
    </div>
  );
}

export default CustomCard;
