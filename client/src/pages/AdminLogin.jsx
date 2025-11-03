import { handleAdminLogin } from "@/api/auth";
import CustomForm from "@/components/form-components/CustomForm";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export const AdminLogin = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
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
      label: "Email",
      placeholder: "you@examle.com",
      id: "email",
      name: "email",
      type: "email",
    },
  ];

  const handleSubmit = async (e) => {
    let newErrors = {};
    try {
      e.preventDefault();
      // Validation
      if (!formData.name.trim()) newErrors.name = "Enter a valid name";
      if (!formData.email.includes("@"))
        newErrors.email = "Enter a valid email";

      if (Object.keys(newErrors).length > 0) {
        setError(newErrors);
        return;
      }

      const response = await handleAdminLogin(formData);
      if (!response.success) {
        newErrors.submitError = response.message;
        setError(newErrors);
        return;
      }

      // Succesfuly registered
      alert("SUCCESSFULLY LOGGED IN");
      localStorage.setItem("token", response.token);
      navigate("/admin-event");
    } catch (error) {
      newErrors.submitError = `Some error occured, ${error.message}`;
      setError(newErrors);
    }
  };

  return (
    <main className="min-h-screen w-full bg-raisin-black  py-30 md:py-40">
      <div className="flex justify-center items-center flex-col relative mb-10">
        <h5 className="text-seasalt lg:text-2xl text-center">
          Are you an{" "}
          <span
            className="2xl:text-8xl md:text-6xl text-3xl text-wheat "
            style={{ fontFamily: "Hurricane" }}
          >
            {" "}
            Admin?
          </span>
        </h5>
      </div>

      <div className="flex flex-col gap-2 w-full md:w-[50%] mx-auto border border-[#3B4754] p-8 rounded-md">
        <CustomForm
          formData={formData}
          setErrors={setError}
          setFormData={setFormData}
          formFields={formFields}
          method="POST"
          submitBtnTitle="Log In"
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
