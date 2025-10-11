import React from "react";
import { useParams } from "react-router-dom";
import ImageCard from "../components/cards/ImageCard";
import { engineeringCourses } from "../../types/CourseData";
import BlobAnimation from "../components/animated-components/BlobAnimation";

function ShowDetailCard({ title, description }) {
  return (
    <div className="border-1 p-5 border-gray-300  bg-gray-200 w-full">
      <p className="text-md text-gray-600">{title}</p>
      <p className="text-xl ">{description}</p>
    </div>
  );
}

function CourseDetails() {
  const { courseId } = useParams();
  const course = engineeringCourses.find((course) => course.id === courseId);
  console.log("Inside you", course);
  return (
    <div className="w-full h-full bg-[#F6FAFF]">
      <ImageCard title={course.name} buttonRequired={false} />
      <div className="flex flex-col  justify-center items-center w-full h-full mt-20 relative">
        {/*  Ptogram overview */}
        <div className="flex gap-5 flex-col absolute -top-50 bg-[#F6FAFF]  p-5 px-20 rounded-2xl">
          <p className="text-3xl "> Programme Overwiew</p>
          <div className="flex">
            {course.programDetails.map((detail) => (
              <ShowDetailCard
                title={detail.title}
                description={detail.description}
              />
            ))}
          </div>
          <p className="max-w-2xl">{course.overview.description}</p>
        </div>

        {/*  */}
        <div className="mt-50 w-[70%] h-full flex flex-col gap-y-5 p-25 bg-white rounded-xl ">
          <p className="text-3xl">Admission Requirements</p>
          <div className="flex border-b-1  w-full">
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
