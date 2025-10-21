import React, { useRef } from "react";
import EventCard from "@/components/cards/EventCard";
import { motion, useInView } from "framer-motion";
export const EventsSection = () => {
  const titleRef = useRef(null);
  const subTitleRef = useRef(null);
  const eventCardsRef = useRef(null);
  const titleIsInView = useInView(titleRef);
  const subTitleIsInView = useInView(subTitleRef);
  const eventCardIsInView = useInView(eventCardsRef);
  return (
    <div className="flex my-20 md:my-30">
      <div className="flex-1 flex justify-center md:items-center flex-col">
        <motion.p
          initial={{ opacity: 0, x: -50 }}
          animate={titleIsInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 1 }}
          ref={titleRef}
          className="md:text-3xl md:text-center text-xl px-5 font-semibold"
        >
          Upcoming Events
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={subTitleIsInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          ref={subTitleRef}
          className="md:text-center 3xl mt-3 mb-10 text-xs px-5  md:text-xl max-w-lg  text-[#616161]"
        >
          Stay informed and get involved! Here are out latest community events
        </motion.p>
        {/* Displaying Events */}
        <motion.div
          ref={eventCardsRef}
          initial={{ opacity: 0, y: 50 }}
          animate={eventCardIsInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="flex  flex-col xl:px-50 2xl:px-80 px-5 md:px-20 w-full sm:self-end h-full gap-5 md:mt-5"
        >
          {/* EventCard */}

          <EventCard />
          <EventCard />
          <EventCard />
          <EventCard />
        </motion.div>
      </div>
    </div>
  );
};
