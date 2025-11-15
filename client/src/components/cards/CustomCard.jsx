import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
function CustomCard({ cardDetails, link }) {
  if (!cardDetails) return;
  return (
    <div className="flex flex-col h-full w-full relative  group rounded-2xl  shadow-raisin">
      <div className="h-40 lg:h-70 md:h-70 w-full relative overflow-hidden rounded-t-2xl  ">
        <img
          src={cardDetails.src}
          alt="Btech"
          loading="lazy"
          className="h-full w-full  object-cover group-hover:scale-110 transition-all duration-300"
        />
        <p className=" left-[4%] transition-all duration-300 line-clamp-1 text-center font-bold group-hover:-translate-y-6 text-mute absolute z-2 bottom-3 text-xs md:text-sm w-full text-seasalt  md:w-[90%]">
          {cardDetails.title || cardDetails.name}
        </p>
      </div>
      <div className="p-5 flex flex-col  ">
        <p className="mb-5 line-clamp-1 text-xs md:text-sm text-seasalt ">
          {cardDetails.content || cardDetails.description}
        </p>
        {/* Explore button section */}
        <Link to={link || "#"} className="cursor-pointer -bottom-1 ">
          <div className="p-2">
            <ArrowRight className="text-seasalt  group-hover:bg-blue-300 group-hover:text-black transition-all duration-100 rounded-full" />
          </div>
        </Link>
      </div>
    </div>
  );
}

export default CustomCard;
