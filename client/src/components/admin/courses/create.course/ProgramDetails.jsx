import React, { useState } from "react";
import FormLabel from "@/components/form-components/FormLabel";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

function ProgramDetails({ formData, setFormData }) {
  const [open, setOpen] = useState(false);

  const programFields = [
    { title: "Duration", key: "duration" },
    { title: "Eligibility", key: "eligibility" },
    { title: "Specialization", key: "specialization" },
    { title: "Degree", key: "degree" },
  ];

  const handleChange = (key, value) => {
    setFormData({
      ...formData,
      programDetails: {
        ...formData.programDetails,
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
          Program Details
        </span>
        {open ? (
          <IoIosArrowUp className="text-white" />
        ) : (
          <IoIosArrowDown className="text-white" />
        )}
      </div>

      {open && (
        <div className=" grid grid-cols-2 gap-x-15">
          {programFields.map((item, idx) => (
            <div key={idx} className="">
              <FormLabel
                key={idx}
                title={item.title}
                placeholder={`Enter ${item.title}`}
                inputType="text"
                value={formData.programDetails[item.key] || ""}
                handleChange={(e) => handleChange(item.key, e.target.value)}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default ProgramDetails;
