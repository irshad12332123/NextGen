import { Delete } from "lucide-react";
import React from "react";
import { MdDelete, MdEdit } from "react-icons/md";

const CourseRow = ({ course }) => {
  return (
    <tr className="border-b border-gray-700 hover:bg-[#293444] transition">
      <td className="p-5">{course.name}</td>
      <td className="p-5">{course.duration}</td>
      <td className="p-5">{course.specialization}</td>

      <td className=" px-2">
        <div className="flex items-center gap-2">
          <MdEdit className="text-center" size={25} />
          <MdDelete className="text-red-600" size={25} />
        </div>
      </td>
    </tr>
  );
};

export default CourseRow;
