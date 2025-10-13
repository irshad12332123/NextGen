import React from "react";
import { FaLocationPin } from "react-icons/fa6";
import { SlCalender } from "react-icons/sl";
import { IoShareSocial } from "react-icons/io5";
import eventBanner from "../../assets/event_page_banner.png";
import { CiClock1 } from "react-icons/ci";
function EventDetailCard({ type = "primary" }) {
  return (
    <div className="flex flex-col gap-3 bg-white rounded-xl shadow-xl ">
      {type === "primary" ? (
        <img
          src={eventBanner}
          alt="event_banner"
          className="object-cover w-full h-80 rounded-t-xl"
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
        <h5 className="text-2xl font-bold">Innovate & Inspire Global Summit</h5>
        <p className="text-[#434343] line-clamp-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
          molestiae minima, dolor sequi cum, quos blanditiis nemo non ratione,
          consequuntur quia! Autem inventore voluptatibus aliquid provident enim
          ex nulla ad!
        </p>
        <div className="flex gap-3 items-center text-[#626262]">
          <span>
            <SlCalender />
          </span>{" "}
          <p>Nov 01, 2025 - Nov 05, 2025</p>
        </div>

        {type === "secondary" ? (
          <div className="flex gap-3 items-center text-[#626262]">
            <span>
              <CiClock1 />
            </span>{" "}
            <p>10:00 A.M - 12:00 P.M</p>
          </div>
        ) : null}

        <div className="flex gap-3 items-center text-[#626262]">
          <span>
            <FaLocationPin />
          </span>
          Grand Auditorium
        </div>

        <div className="flex justify-between items-center">
          {type === "primary" ? (
            <button className="bg-blue-500 text-white p-2 rounded-md">
              Register Now
            </button>
          ) : (
            <button className="bg-blue-100 text-blue-500 p-2 rounded-md">
              Register Now
            </button>
          )}
          <IoShareSocial className="text-[#626262] text-2xl " />
        </div>
      </div>
    </div>
  );
}

export default EventDetailCard;
