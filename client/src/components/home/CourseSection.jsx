import React, { useRef } from "react";
import { MdComputer } from "react-icons/md";
import { LandingPageCard } from "./LandingPageCard";
import { useInView, motion } from "framer-motion";
const CourseSection = () => {
  const containerRef = useRef(null);
  const titleRef = useRef(null);
  const containerIsInView = useInView(containerRef);
  const titleIsInView = useInView(titleRef);
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
    <div className="h-full w-full flex flex-col gap-5 lg:mt-15  items-center">
      <motion.p
        ref={titleRef}
        initial={{
          opacity: 0,
          x: -70,
        }}
        animate={{
          opacity: titleIsInView ? 1 : 0,
          x: titleIsInView ? 0 : 50,
        }}
        transition={{
          duration: 1,
        }}
        className="text-seasalt md:text-3xl"
      >
        Our Specialisations
      </motion.p>
      <motion.div
        className="grid grid-cols-1 md:grid-cols-3 gap-4  w-full justify-centerr"
        ref={containerRef}
        initial={{
          opacity: 0,
          y: 70,
        }}
        animate={{
          opacity: containerIsInView ? 1 : 0,
          y: containerIsInView ? 0 : 50,
        }}
        transition={{
          duration: 1,
        }}
      >
        {cardDetails.map((card, i) => (
          <LandingPageCard
            key={i}
            title={card.title}
            content={card.content}
            Icon={card.Icon}
          />
        ))}
      </motion.div>
    </div>
  );
};

export default CourseSection;
