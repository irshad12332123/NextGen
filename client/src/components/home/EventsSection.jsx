import React from "react";
import EventCard from "@/components/cards/EventCard";

export const EventsSection = () => {
  return (
    <div className="flex my-20 md:my-30">
      <div className="flex-1 flex   justify-center flex-col">
        <p className="md:text-3xl text-xl px-5 font-semibold">
          Upcoming Events
        </p>
        <p className="md:text-center mt-3 mb-10 text-xs px-5  md:text-xl max-w-lg  text-[#616161]">
          Stay informed and get involved! Here are out latest community events
        </p>

        {/* Displaying Events */}
        <div className="flex lg:flex-row  flex-col lg:px-50 px-5 md:px-20 w-full h-full gap-2">
          <div className=" bg-blue-300 border-1 lg:w-2/3 md:w-full h-50 md:h-70 lg:h-150 border-blue-600"></div>
          {/* EventCard */}
          <div className="flex flex-col gap-5 self-end md:mt-5">
            <EventCard />
            <EventCard />
            <EventCard />
            <EventCard />
          </div>
        </div>
      </div>
    </div>
  );
};
