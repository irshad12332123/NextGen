import { handleAdminRegister } from "@/api/auth";
import CustomForm from "@/components/form-components/CustomForm";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import adminPoster from "/images/admin_poster_img.png";
import { getCurrentYear } from "@/utils/getCurrrentYear";
import { useApiContext } from "@/providers/ApiContext";
import Loader from "@/components/Loader";

export const AdminRegister = () => {
  const { loading, setLoading } = useApiContext();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    id: "",
    password: "",
  });
  const [error, setError] = useState({
    password:
      "Must contain atleast 8 chars, one number, uppercase letter, and a special character",
  });

  const formFields = [
    {
      label: "User ID",
      placeholder: "🪪 enter your user ID",
      id: "id",
      name: "id",
      type: "text",
    },
    {
      label: "Password",
      placeholder: "🔒enter your password",
      id: "password",
      name: "password",
      type: "password",
    },
    {
      label: "Confirm password",
      placeholder: "☑️ confirm your password",
      id: "confirm-pass",
      name: "confirm-pass",
      type: "password",
    },
  ];

  const handleSubmit = async (e) => {
    setLoading(true);
    let newErrors = {};
    try {
      e.preventDefault();
      // Validation
      if (!formData.id.trim()) newErrors.id = "Enter a valid id";
      if (!formData.password.trim()) newErrors.password = "Enter the password";
      if (formData.password.length < 9)
        newErrors.password = "Atleast 8 characters required";
      if (formData.password !== formData["confirm-pass"])
        newErrors["confirm-pass"] = "❌ password does not match";
      if (Object.keys(newErrors).length > 0) {
        setError(newErrors);
        return;
      }

      const response = await handleAdminRegister(formData);
      if (!response.success) {
        newErrors.submitError = response.message;
        setError(newErrors);
        return;
      }

      // Succesfuly registered
      alert("Succesfully Registered Admin");
      navigate("/admin-login");
    } catch (error) {
      newErrors.submitError = `Some error occured, ${error.message}`;
      setError(newErrors);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {!loading ? (
        <main className="min-h-screen w-full bg-[#101A22] flex py-30 md:py-40 2xl:px-50">
          <div
            className="flex justify-center rounded-l-2xl bg-center bg-cover  bg-amber-100 w-1/2 items-center flex-col relative"
            style={{
              backgroundImage: `url(${adminPoster})`,
            }}
          ></div>

          <div className="flex flex-col gap-2 md:w-1/2 rounded-r-2xl mx-auto bg-[#1C2227]  shadow-raisin p-15">
            <div>
              <h5 className="font-bold text-white text-2xl mb-1">
                Create an admin 👤
              </h5>
              <p className="text-muted font-bold">Secure registration 🔑</p>
            </div>
            <CustomForm
              formData={formData}
              setErrors={setError}
              setFormData={setFormData}
              formFields={formFields}
              method="POST"
              submitBtnTitle="Register"
              handleSubmit={handleSubmit}
              error={error}
              buttonType="tertiary"
              customLabelStyles={"bg-[#111518] border border-[#3b444b]"}
            >
              <div className="flex justify-between items-center">
                <Link to={"/admin-login"}>
                  <p className="text-blue-500">Already registered?</p>
                </Link>
              </div>
            </CustomForm>
            {error.submitError && (
              <p className="text-red-500">{error.submitError}</p>
            )}
            <hr className="mt-5 text-[#3b444b]" />
            <p className="text-muted text-center">
              &copy; {getCurrentYear()} NextGen Academy. All rights reserved.{" "}
            </p>
          </div>
        </main>
      ) : (
        <Loader />
      )}
    </>
  );
};
