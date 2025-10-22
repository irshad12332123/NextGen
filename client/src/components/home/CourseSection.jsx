import React from "react";
import { MdComputer } from "react-icons/md";
import { LandingPageCard } from "./LandingPageCard";
const CourseSection = () => {
  const cardDetails = [
    {
      Icon: MdComputer,
      title: "Artificial Intelligence",
      content: "Dive into the world of new technologies and energing t ech ",
    },
    {
      Icon: MdComputer,
      title: "Cyber Security",
      content: "Dive into the world of new technologies and energing t ech ",
    },
    {
      Icon: MdComputer,
      title: "Cyber Security",
      content: "Dive into the world of new technologies and energing t ech ",
    },
  ];
  return (
    <div className="h-full w-full flex flex-col gap-5  items-center">
      <p className="text-seasalt md:text-3xl">Our Specialisations</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4  w-full justify-centerr">
        {cardDetails.map((card, i) => (
          <LandingPageCard
            key={i}
            title={card.title}
            content={card.content}
            Icon={card.Icon}
          />
        ))}
      </div>
    </div>
  );
};

export default CourseSection;
