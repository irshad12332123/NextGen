import React, { act } from "react";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa6";

const EventCard = ({
  date,
  location,
  description,
  action,
  title,
  link = "/events",
}) => {
  return (
    <div className="shadow-raisin p-3 rounded-2xl space-y-5 border-[0.01rem] border-[#4fa1d11d] hover:border-[#4fa1d1b1]">
      <div className="flex gap-4">
        <div className="flex items-center justify-center bg-[#27374A] md:p-2  p-1 rounded-md">
          <p className="font-bold text-xl md:text-xl text-celestial-blue text-center md:w-[50%] w-[70%]">
            {date}
          </p>
        </div>
        <div>
          <p className="text-seasalt w-[80%]  text-sm md:text-md">{title}</p>
          <p className="text-muted text-sm">{location}</p>
        </div>
      </div>
      <p className="flex-1 md:text-md text-sm text-muted"> {description}</p>
      <div className="flex gap-5 items-center">
        <p className="text-celestial-blue text-sm md:-text[1rem] font-semibold">
          Explore events
        </p>
        <Link to={link}>
          <FaArrowRight className="text-seasalt" />
        </Link>
      </div>
    </div>
  );
};

export default EventCard;
