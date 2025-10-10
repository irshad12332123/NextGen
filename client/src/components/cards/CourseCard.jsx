import React from "react";

function CourseCard({ courseCard }) {
  const { icon: Icon, title, content } = courseCard;
  return (
    <div className="flex text-white hover:text-black group flex-col gap-5 bg-gradient-to-br from-[#1e293b] to-[#0f172a] hover:from-[#38bdf8] hover:to-[#0ea5e9] rounded-2xl p-5">
      <Icon className="text-5xl" />
      <p className="text-[#38bdf8] group-hover:text-black ">
        {courseCard.title}
      </p>
      <p className="max-w-[60%] text-gray-100">{courseCard.content}</p>
    </div>
  );
}

export default CourseCard;
