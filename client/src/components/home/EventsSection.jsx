import React from "react";
import EventCard from "./eventCard";

export const EventsSection = () => {
  const eventsArray = [
    {
      date: "25 OCT",
      title: "Innovate & Create Hackathon",
      location: "Online & On-Campus",
      description:
        "A 24-hour event for students to build groundbreaking projects and compete for exciting prizes.",
      action: "Register Now",
    },
    {
      date: "12 NOV",
      title: "AI & Machine Learning Seminar",
      location: "Main Auditorium",
      description:
        "Guest lecture from a leading AI researcher on the future of intelligent systems.",
      action: "Learn More",
    },
    {
      date: "05 DEC",
      title: "Annual Tech Fest 'Innovision'",
      location: "Entire Campus",
      description:
        "Our flagship technical festival with competitions, workshops, and exhibitions.",
      action: "Explore Fest",
    },
  ];
  return (
    <div className="md:mt-20 xl:mt-30 2xl:mt-40 mt-20 flex flex-col items-center ">
      <p className="md:text-3xl text-seasalt">Upcoming events</p>
      <div className="grid grid-cols-1 md:gap-6 md:mb-30 md:mt-10 my-5 md:grid-cols-2 xl:grid-cols-3">
        {eventsArray.map((event, i) => (
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
