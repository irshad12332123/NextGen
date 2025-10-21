import React from "react";
import { useParams } from "react-router-dom";
import ImageCard from "../components/cards/ImageCard";
import { engineeringCourses } from "../../types/CourseData";
import BlobAnimation from "../components/animated-components/BlobAnimation";
import { useGSAP } from "@gsap/react";

function ShowDetailCard({ title, description }) {
  return (
    <div className="border-1 p-5 border-gray-300  bg-gray-200 w-full">
      <p className="md:text-md text-smc text-gray-600">{title}</p>
      <p className="md:text-xl text-sm ">{description}</p>
    </div>
  );
}

function CourseDetails() {
  const { courseId } = useParams();
  const course = engineeringCourses.find((course) => course.id === courseId);
  console.log("Inside you", course);
  return (
    <div className=" w-full h-full bg-[#F6FAFF]">
      <ImageCard title={course.name} buttonRequired={false} />
      <div className="flex flex-col  justify-center items-center w-full h-full mt-20 relative">
        {/*  Ptogram overview */}
        <div className="flex gap-5 flex-col md:absolute md:-top-50 bg-[#F6FAFF]  md:p-5 lg:px-20  px-5 rounded-2xl">
          <p className="md:text-3xl text-xl font-bold "> Programme Overwiew</p>
          <div className="md:flex">
            {course.programDetails.map((detail) => (
              <ShowDetailCard
                title={detail.title}
                description={detail.description}
              />
            ))}
          </div>
          <p className="max-w-2xl text-sm">{course.overview.description}</p>
        </div>

        {/*  */}
        <div className="lg:my-50 md:my-20 my-5 lg:w-[70%] w-full h-full flex flex-col gap-y-5 lg:p-25 px-5 bg-white rounded-xl ">
          <p className="md:text-3xl text-xl">Admission Requirements</p>
          <div className="md:flex border-b-1  w-full">
            {course.admissionDetails.map((detail) => (
              <ShowDetailCard
                title={detail.title}
                description={detail.description}
              />
            ))}
          </div>
          <ShowDetailCard
            title={course.tuitionFee[0].title}
            description={course.tuitionFee[0].description}
          />
        </div>
      </div>
    </div>
  );
}

export default CourseDetails;
