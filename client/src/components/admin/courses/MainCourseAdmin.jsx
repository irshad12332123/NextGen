import React, { useState } from "react";
import CourseList from "./CourseList";
import CustomBtn from "@/components/CustomBtn";
import { useNavigate } from "react-router-dom";

const MainCourseAdmin = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [specializationFilter, setSpecializationFilter] = useState("");
  const [statusFilter, setStatusFilter] = useState("");
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-[#111518] text-white px-20 py-6">
      <div className="flex items-center mb-6">
        <div className="flex-1">
          <h1 className="text-4xl font-bold">Courses</h1>
          <p className="text-gray-400 text-sm">
            Manage all courses offered at the institute.
          </p>
        </div>
        <div>
          <CustomBtn
            title={"Add Course"}
            styleType="tertiary"
            onClick={() => {
              navigate("/admin-course/create");
            }}
          />
        </div>
      </div>
      <CourseList
        search={searchQuery}
        specialization={specializationFilter}
        status={statusFilter}
      />

      {/* <Pagination /> */}
    </div>
  );
};

export default MainCourseAdmin;
