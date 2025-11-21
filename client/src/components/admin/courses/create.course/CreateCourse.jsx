import React, { useState } from "react";
import GeneralInformation from "./GeneralInformation";
import ProgramDetails from "./ProgramDetails";
import AdmissionDetails from "./AdmissionDetails";
import FeeStructure from "./FeeStructure";

function CreateCourse() {
  const [formData, setFormData] = useState({
    course: {
      slug: "",
      name: "",
      description: "",
      image_url: "",
    },
    programDetails: {},
    admissionDetails: {},
    tutionFee: {},
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    alert("SUBMITTED");
  };

  return (
    <form onSubmit={handleSubmit} className="p-15 space-y-6">
      <GeneralInformation formData={formData} setFormData={setFormData} />
      <ProgramDetails formData={formData} setFormData={setFormData} />
      <AdmissionDetails formData={formData} setFormData={setFormData} />
      <FeeStructure formData={formData} setFormData={setFormData} />

      <button
        className="bg-blue-600 text-white px-6 py-3 rounded-lg"
        type="submit"
      >
        Save Course
      </button>
    </form>
  );
}

export default CreateCourse;
