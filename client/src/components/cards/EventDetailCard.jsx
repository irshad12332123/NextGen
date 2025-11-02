import React from "react";
import { FaLocationPin } from "react-icons/fa6";
import { SlCalender } from "react-icons/sl";
import { IoShareSocial } from "react-icons/io5";
import eventBanner from "../../assets/event_page_banner.png";
import { CiClock1 } from "react-icons/ci";
import EventMetaData from "../EventMetaData";
import { formatDate } from "@/utils/formatDate";
function EventDetailCard({
  type = "primary",
  title,
  description,
  thumbnail,
  date,
  location,
}) {
  console.log("====================================");
  console.log(date);
  console.log("====================================");
  return (
    <div className="flex flex-col gap-3 bg-white rounded-xl shadow-md">
      {type === "primary" ? (
        <img
          loading="lazy"
          src={thumbnail}
          alt="event_banner"
          className="object-cover w-full h-50 md:h-80 rounded-t-xl"
        />
      ) : (
        <div className="px-5 pt-5">
          <button className="text-sm bg-red-200 font-bold rounded-full text-red-800 px-2 py-1">
            LIVE
          </button>
        </div>
      )}

      <div
        className={`${
          type === "primary" ? "p-5" : "px-5 pt-1 pb-5"
        } flex flex-col gap-5`}
      >
        <h5 className="text-xl md:text-2xl font-bold">{title}</h5>
        <p className="text-[#434343] md:text-sm text-[3dvw] line-clamp-2">
          {description}
        </p>
        <EventMetaData Icon={SlCalender} data={formatDate(date)} />

        <EventMetaData Icon={FaLocationPin} data={location} />

        {/* <div className="flex justify-between items-center">
          {type === "primary" ? (
            <button className="bg-blue-500 text-white md:text-xl text-[3dvw] p-2 rounded-md">
              Register Now
            </button>
          ) : (
            <button className="bg-blue-100 text-blue-500 md:text-xl text-[3dvw] p-2 rounded-md">
              Register Now
            </button>
          )}
          <IoShareSocial className="text-[#626262] text-2xl " />
        </div> */}
      </div>
    </div>
  );
}

export default EventDetailCard;
