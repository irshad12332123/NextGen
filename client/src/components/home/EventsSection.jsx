import React, { useRef } from "react";
import EventCard from "@/components/cards/EventCard";
import { useGSAP } from "@gsap/react";

export const EventsSection = () => {
  return (
    <div className="flex my-20 md:my-30">
      <div className="flex-1 flex justify-center md:items-center flex-col">
        <p className="md:text-3xl md:text-center text-xl px-5 font-semibold">
          Upcoming Events
        </p>
        <p className="md:text-center 3xl mt-3 mb-10 text-xs px-5  md:text-xl max-w-lg  text-[#616161]">
          Stay informed and get involved! Here are out latest community events
        </p>
        {/* Displaying Events */}
        <div className="flex  flex-col lg:px-50 px-5 md:px-20 w-full sm:self-end h-full gap-5 md:mt-5">
          {/* EventCard */}

          <EventCard />
          <EventCard />
          <EventCard />
          <EventCard />
        </div>
      </div>
    </div>
  );
};
