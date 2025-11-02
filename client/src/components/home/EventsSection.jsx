import React, { useState } from "react";
import EventCard from "./eventCard";

const EventsSection = () => {
  const [events, setEvents] = useState([]);

  async function fetchEvents() {
    const response = await getAllEvents("/event/", fetchData);
    setEvents(response.data);
  }

  useEffect(() => {
    fetchEvents();
  }, []);

  return (
    <div className="md:mt-20 xl:mt-30 2xl:mt-40 mt-20 flex flex-col items-center ">
      <p className="md:text-3xl text-seasalt">Upcoming events</p>
      <div className="grid grid-cols-1 md:gap-6 md:mb-30 md:mt-10 my-5 md:grid-cols-2 xl:grid-cols-3">
        {events?.slice(0, 3).map((event, i) => (
          <EventCard
            key={i}
            date={event.date}
            title={event.title}
            description={event.description}
            action={event.action}
            location={event.location}
          />
        ))}
      </div>
    </div>
  );
};

export default EventsSection;
