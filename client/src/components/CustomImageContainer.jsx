import React from "react";
import { Link } from "react-router-dom";
import rightArrow from "../assets/right-arrow.png";
function CustomImageContainer({
  imageURL,
  cardTitle,
  cardContent,
  cardLink,
  idx,
}) {
  return (
    <Link className="flex flex-col group relative w-full h-150 overflow-hidden bg-black">
      <div
        className="
          w-full h-full bg-cover bg-center transition-transform duration-500 ease-in-out
           group-hover:scale-110 flex flex-col mask-b-from-10%
        "
        style={{ backgroundImage: `url(${imageURL})` }}
      ></div>
      {/* Content of Cart */}
      <div className="absolute z-10 top-[70%] p-10">
        {/* Title and the hidden content of the card section */}
        <div className="">
          <h5 className=" text-white text-3xl group-hover:-translate-y-4 transition-transform">
            {cardTitle}
          </h5>
        </div>
        <div className="flex p-2 items-center gap-5">
          <img src={rightArrow} alt="Right arrow" />
          <h5 className="text-white text-xl">{cardLink}</h5>
        </div>
      </div>
    </Link>
  );
}

export default CustomImageContainer;
