import React from "react";
import CourseRow from "./CourseRow";

const courses = [
  {
    id: 1,
    name: "Computer Science & Engineering - CS101",
    duration: "4 Years",
    specialization: "AI & Machine Learning",
  },
  {
    id: 2,
    name: "Mechanical Engineering - ME201",
    duration: "4 Years",
    specialization: "Robotics",
  },
  {
    id: 3,
    name: "Electronics & Communication - EC301",
    duration: "4 Years",
    specialization: "VLSI Design",
  },
  {
    id: 4,
    name: "Civil Engineering - CE401",
    duration: "4 Years",
    specialization: "Structural Engineering",
  },
];

const CourseList = () => {
  return (
    <div className="rounded-2xl pb-3 bg-[#1C2227] border border-[#dadada29] ">
      <table className="w-full bg-[#283239] rounded-2xl ">
        <thead className="text-left">
          <tr className="text-gray-400 text-sm border-b border-gray-700">
            <th className="p-5">Course Name & Code</th>
            <th className="p-5">Duration</th>
            <th className="p-5">Specialization</th>
            <th className="p-5">Actions</th>
          </tr>
        </thead>

        <tbody className="bg-[#1C2227]">
          {courses.map((course) => (
            <CourseRow key={course.id} course={course} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CourseList;
