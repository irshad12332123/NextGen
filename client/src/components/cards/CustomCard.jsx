import React from "react";
import rightCircleArrow from "../../assets/angle-circle-right.png";
import { Link } from "react-router-dom";
function CustomCard({ cardDetails }) {
  if (!cardDetails) return;
  return (
    <div className="flex flex-col h-full w-full bg-white relative rounded-2xl group ">
      <div className=" h-full w-full relative overflow-hidden ">
        <img
          src={cardDetails.src}
          alt="Btech"
          className="h-full w-full object-cover group-hover:scale-110 transition-all duration-300"
        />
        <p className="transition-all duration-300 text-center text-2xl group-hover:-translate-y-6 text-white absolute z-2 bottom-3 left-6 ">
          {cardDetails.title}
        </p>
        <div className="h-full w-full absolute bg-[#181818a9] z-1 top-0 left-0 group-hover:bg-[#181818b8] "></div>
      </div>
      <div className="p-5 flex flex-col flex-1 ">
        <p className="mb-5">{cardDetails.content}</p>
        {/* Explore button section */}
        <Link
          to={cardDetails.link || "#"}
          className="cursor-pointer -bottom-1 "
        >
          <img src={rightCircleArrow} alt="Right-arrow" className="w-10" />
        </Link>
      </div>
    </div>
  );
}

export default CustomCard;
