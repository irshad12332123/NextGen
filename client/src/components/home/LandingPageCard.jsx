import React from "react";
import { FaArrowRight } from "react-icons/fa6";
import { Link } from "react-router-dom";
export const LandingPageCard = ({ Icon, title, content, link = "#" }) => {
  return (
    <div className="w-full hover:border-[#4fa1d1b1] h-full space-y-5 shadow-raisin border-[0.01rem] p-5 rounded-2xl border-[#4fa1d115]">
      <div className="md:w-15 w-10 h-10 md:h150 p-3 bg-celestial-blue rounded-full">
        <Icon className=" w-full h-full text-white" />
      </div>
      <div className="flex flex-1 flex-col gap-4 ">
        <p className="text-seasalt font-bold text-sm md:text-xl">{title}</p>
        <p className="flex-1 text-sm md:text-[1rem] text-muted md:w-[80%]">
          {content}
        </p>
      </div>
      <div className="flex gap-5 items-center">
        <p className="text-celestial-blue font-semibold text-sm md:text-[1rem]">
          Learn more
        </p>
        <Link to={link}>
          <FaArrowRight className="text-seasalt" />
        </Link>
      </div>
    </div>
  );
};
