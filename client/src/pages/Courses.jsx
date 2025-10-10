import React from "react";
import ImageCard from "../components/cards/ImageCard";
import CourseCard from "../components/cards/CourseCard";
import { GiFlatPlatform } from "react-icons/gi";
import { GrUserExpert } from "react-icons/gr";
import { SiGooglemarketingplatform } from "react-icons/si";
import { BsCircleSquare } from "react-icons/bs";
import { motion } from "motion/react";
const Courses = () => {
  const cards = [
    {
      icon: GiFlatPlatform,
      title: "Powerful platform",
      content:
        "The platform provides a powerful way to access educational material. It allows users to participate in interactive activities and take tests.",
    },
    {
      icon: GrUserExpert,
      title: "Expert teachers",
      content:
        "These teachers can provide guidance and support to the user as they learn, helping them to stay motivated and engaged.",
    },
    {
      icon: SiGooglemarketingplatform,
      title: "50+ Categories",
      content:
        "It offers more than 50 categories so that the user can find the materials he needs to achieve his learning objectives.",
    },
    {
      icon: BsCircleSquare,
      title: "100+ courses",
      content:
        "Offering more than 100 courses covering a wide range of topics, you can explore different fields and areas of study.",
    },
  ];

  return (
    <div>
      <ImageCard buttonRequired={false} title="Courses" />
      <div className="px-50 mt-10">
        <p className="text-3xl font-bold">Why choose Next Gen?</p>
        <p className="max-w-2xl mt-5 ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
          iure voluptatibus saepe quia! Alias unde voluptatum ad laboriosam quo,
          beatae velit iste officia tempora, praesentium laborum esse quam
          tempore laudantium!
        </p>

        {/*  cards */}
        <div className="relative mt-15 bg-gray-200 p-8 flex gap-5 rounded-md">
          {cards.map((card, i) => (
            <CourseCard key={i} courseCard={card} />
          ))}
          <motion.div
            animate={{
              x: [0, 30, -20, 0],
              y: [0, -20, 20, 0],
              scale: [1, 1.6, 0.9, 1],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute -z-10 -bottom-15  rounded-full filter blur-2xl bg-blue-500 w-50 h-50 -left-15"
          ></motion.div>
          <motion.div
            animate={{
              x: [0, 30, -20, 0],
              y: [0, -20, 20, 0],
              scale: [1, 1.2, 0.9, 1],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute -z-10 -bottom-2  rounded-full filter blur-2xl 
                       mix-blend-multiply
                       bg-green-500 w-50 h-50 -left-25"
          ></motion.div>
          <motion.div
            animate={{
              x: [0, 30, -20, 0],
              y: [0, -20, 20, 0],
              scale: [1, 1.2, 0.9, 1],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute -z-10 -top-15  rounded-full filter blur-2xl bg-blue-500 w-50 h-50 -right-15"
          ></motion.div>

          <motion.div
            animate={{
              x: [0, 30, -20, 0],
              y: [0, -20, 20, 0],
              scale: [1, 1.6, 0.9, 1],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute -z-10 top-8 mix-blend-multiply  rounded-full filter blur-2xl bg-amber-500 w-50 h-50 -right-15"
          ></motion.div>
        </div>
      </div>
    </div>
  );
};

export default Courses;
