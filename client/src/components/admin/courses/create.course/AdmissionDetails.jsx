import React, { useState } from "react";
import FormLabel from "@/components/form-components/FormLabel";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

function AdmissionDetails({ formData, setFormData }) {
  const [open, setOpen] = useState(false);

  const admissionDetails = [
    { title: "Entrance Exam", key: "entrance_exam" },
    { title: "Application Deadline", key: "application_deadline" },
    { title: "Counseling", key: "counselling" },
    { title: "Selection", key: "selection" },
    { title: "Documents Required", key: "docs_required" },
  ];

  const handleChange = (key, value) => {
    setFormData({
      ...formData,
      admissionDetails: {
        ...formData.admissionDetails,
        [key]: value,
      },
    });
  };

  return (
    <div className="bg-gray-800 p-6 rounded-xl">
      <div
        className={`flex ${
          open ? "bg-gray-500 rounded-md p-5" : ""
        }  justify-between items-center cursor-pointer`}
        onClick={() => setOpen(!open)}
      >
        <span className="text-white font-semibold text-lg">
          Admission Details
        </span>
        {open ? (
          <IoIosArrowUp className="text-white" />
        ) : (
          <IoIosArrowDown className="text-white" />
        )}
      </div>

      {open && (
        <div className=" grid grid-cols-2 gap-x-15">
          {admissionDetails.map((item, idx) => (
            <div className="" key={idx}>
              <FormLabel
                key={idx}
                title={item.title}
                placeholder={`Enter ${item.title}`}
                inputType="text"
                value={formData.admissionDetails[item.key] || ""}
                handleChange={(e) => handleChange(item.key, e.target.value)}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default AdmissionDetails;
