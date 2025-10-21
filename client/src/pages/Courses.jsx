import ImageCard from "../components/cards/ImageCard";
import FeatureCard from "../components/cards/FeatureCard";
import { GiFlatPlatform } from "react-icons/gi";
import { GrUserExpert } from "react-icons/gr";
import { SiGooglemarketingplatform } from "react-icons/si";
import { BsCircleSquare } from "react-icons/bs";
import BlobAnimation from "../components/animated-components/BlobAnimation";
import { RiSearchLine } from "react-icons/ri";
import CustomCard from "../components/cards/CustomCard";
import { engineeringCourses } from "../../types/CourseData";
import { useState } from "react";

const Courses = () => {
  const [search, setSearch] = useState("");
  const [filteredCourses, setFilteredCourses] = useState(
    engineeringCourses.slice(0, 6)
  );

  const filterCourses = (search) => {
    console.log(search);
    return engineeringCourses
      .filter((course) => course.name.toLowerCase().includes(search))
      .slice(0, 6);
  };

  const handleSearch = (courseName) => {
    console.log("Seardched Course", courseName);
    setFilteredCourses(filterCourses(courseName));
  };

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

  const courseFilterOp = ["B.Tech", "B.C.A"];

  return (
    <div>
      <ImageCard buttonRequired={false} title="Courses" />
      <div className=" md:px-15 lg:px-50 px-5 md:my-20 my-10 ">
        <p className="md:text-3xl text-xl font-bold">Why choose Next Gen?</p>
        <p className="max-w-2xl md:text-[1rem] text-sm mt-5 ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
          iure voluptatibus saepe quia! Alias unde voluptatum ad laboriosam quo,
          beatae velit iste officia tempora, praesentium laborum esse quam
          tempore laudantium!
        </p>

        {/*  cards */}
        <div className="relative mt-15 bg-gray-200 xl:p-8 p-3 md:px-5  lg:grid-cols-4 grid grid-cols-1 md:grid-cols-2  gap-5 rounded-md">
          {cards.map((card, i) => (
            <FeatureCard key={i} courseCard={card} />
          ))}

          <BlobAnimation
            x={[0, 30, -20, 0]}
            y={[0, -20, 20, 0]}
            scale={[1, 1.6, 0.9, 1]}
            positionStyles={" -bottom-8 bg-blue-500 md:-left-15 "}
            duration={10}
          />

          <BlobAnimation
            x={[0, 30, 10, 0]}
            y={[0, -10, 20, 0]}
            scale={[1, 1.6, 0.5, 1]}
            positionStyles={" -bottom-8 bg-green-500 md:-left-25 "}
            duration={10}
          />

          <BlobAnimation
            x={[0, 30, -20, 0]}
            y={[0, -20, 20, 0]}
            scale={[1, 1.6, 0.9, 1]}
            positionStyles={" -top-8 bg-blue-500 md:-right-10 "}
            duration={10}
          />

          <BlobAnimation
            x={[0, 30, -20, 0]}
            y={[0, -20, 20, 0]}
            scale={[1, 1.6, 0.9, 1]}
            positionStyles={" top-8 bg-amber-500 -md:right-15"}
            duration={10}
          />
        </div>
      </div>
      <div className="md:px-15 lg:px-50 px-5 w-full">
        <div className="mt-5 bg-blue-200 md:w-1/2 w-full flex p-2 rounded-full shadow-md items-center justify-between border-1  border-blue-400 ">
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Which course are you looking for?"
            className="focus:outline-0 flex-1  outline-0 rounded-xl  text-md md:p-3 p-2"
          />
          <RiSearchLine
            onClick={() => {
              handleSearch(search);
            }}
            className=" hover:opacity-80 cursor-pointer text-4xl bg-blue-500 rounded-full p-2 "
          />
        </div>
        <div className=" flex gap-5 mt-5">
          {courseFilterOp.map((filter, i) => (
            <p
              className="px-5 py-2 md:text-[1rem] text-sm rounded-full bg-blue-100  cursor-pointer transition-all duration-100 shadow-xl hover:bg-blue-500 hover:text-white"
              key={i}
              onClick={(e) => {
                handleSearch(e.target.innerText);
              }}
            >
              {filter}
            </p>
          ))}
        </div>
      </div>

      <div className=" mt-10 grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 py-5 lg:px-50 md:py-10 md:px-15 px-5 gap-5  ">
        {filteredCourses.map((course, i) => (
          <CustomCard
            cardDetails={course}
            key={i}
            link={`/courses/${course.id}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Courses;
