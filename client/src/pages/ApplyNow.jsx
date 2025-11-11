import { handleApply } from "@/api/api";
import CustomForm from "@/components/form-components/CustomForm";
import React, { useState } from "react";

export const ApplyNow = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    course: "",
  });
  const [error, setError] = useState({});

  const formFields = [
    {
      label: "Name",
      placeholder: "Enter your full name",
      id: "name",
      name: "name",
      type: "text",
    },
    {
      label: "Phone number",
      placeholder: "Enter your contact number",
      id: "phone",
      name: "phone",
      type: "number",
    },
    {
      label: "Email",
      placeholder: "you@examle.com",
      id: "email",
      name: "email",
      type: "email",
    },
    {
      label: "Course",
      placeholder: "Which course you are choosing?",
      id: "course",
      name: "course",
      type: "text",
    },
  ];

  const handleSubmit = async (e) => {
    console.log("CLICKED SUBMIT BTN IN APPLY NOW PAGE");

    let newErrors = {};
    try {
      e.preventDefault();
      // Validation
      if (!formData.name.trim()) newErrors.name = "Enter a valid name";
      if (!formData["phone"]) newErrors["phone"] = "Enter a number";
      if (formData["phone"].length < 10 || formData["phone"].length > 10)
        newErrors["phone"] = "Number is not valid";
      if (formData["phone"].startsWith("0"))
        newErrors["phone"] = "Leading zeros are not allowed";
      if (!formData.email.includes("@"))
        newErrors.email = "Enter a valid email";

      if (Object.keys(newErrors).length > 0) {
        setError(newErrors);
        return;
      }

      const response = await handleApply(formData);
      if (!response.success) {
        newErrors.submitError = response.message;
        setError(newErrors);
        return;
      }

      // Succesfuly registered
      alert("SUCCESSFULLY REGISTERED");
    } catch (error) {
      newErrors.submitError = `Some error occured, ${error.message}`;
      setError(newErrors);
    }
  };

  return (
    <main className="min-h-screen w-full bg-raisin-black  py-30 md:py-40">
      <div className="flex justify-center items-center flex-col relative mb-10">
        <h5 className="text-seasalt lg:text-2xl text-center">
          Begin your journey at{" "}
          <span className="2xl:text-8xl md:text-6xl text-3xl text-seasalt ">
            Next<span className="text-celestial-blue">Gen</span>
          </span>
        </h5>
        <p className="text-muted md:text-xl text-sm italic w-[70%] lg:w-[30%] text-center">
          Take the first step towards a future in technology. Fill out the form
          below to get started.
        </p>
      </div>

      <div className="flex flex-col gap-2 w-full md:w-[50%] mx-auto border border-[#3B4754] p-8 rounded-md">
        <CustomForm
          formData={formData}
          setErrors={setError}
          setFormData={setFormData}
          formFields={formFields}
          method="POST"
          handleSubmit={handleSubmit}
          error={error}
        />
        {error.submitError && (
          <p className="text-red-500">{error.submitError}</p>
        )}
      </div>
    </main>
  );
};
