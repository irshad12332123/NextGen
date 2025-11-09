import { createEvent } from "@/api/events";
import React, { useState } from "react";
import CustomForm from "../form-components/CustomForm";
import { useApi } from "@/hooks/useApi";
import { replace, useNavigate } from "react-router-dom";

const CreateEvent = ({}) => {
  const navigate = useNavigate();
  const {
    loading,
    error: fetchError,
    refetch,
    fetchData,
    data: result,
  } = useApi();

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    location: "",
    thumbnail: "",
    start: "",
    end: "",
  });
  const [error, setError] = useState({});

  const customFormStyles = {};

  const formFields = [
    {
      label: "Title",
      placeholder: "Enter event title",
      id: "title",
      name: "title",
      type: "text",
    },
    {
      label: "Descriprion",
      placeholder: "What's the event about?",
      id: "description",
      name: "description",
      type: "text",
    },
    {
      label: "Location",
      placeholder: "e.g., Auditorium, Virtual",
      id: "location",
      name: "location",
      type: "text",
    },
    {
      label: "Thumbnail",
      placeholder: "Enter the url of the image",
      id: "thumbnail",
      name: "thumbnail",
      type: "file",
    },
    {
      label: "Starting On",
      placeholder: "starts on?",
      id: "start",
      name: "start",
      type: "date",
    },
    {
      label: "Ending On",
      placeholder: "ends on",
      id: "end",
      name: "end",
      type: "date",
    },
  ];

  const handleSubmit = async (e) => {
    let newErrors = {};
    try {
      e.preventDefault();
      // Validation
      if (!formData.title.trim()) newErrors.title = "Enter a valid title";
      if (!formData["description"].trim())
        newErrors["description"] = "Provide a description";
      if (!formData.location.trim()) newErrors.location = "Enter a location";
      if (!formData.thumbnail.trim())
        newErrors.thumbnail = "Provide a thumbnail";
      if (!formData.start.trim()) newErrors.start = "Enter a start date";
      if (!formData.end.trim()) newErrors.end = "Enter a end date";

      if (Object.keys(newErrors).length > 0) {
        setError(newErrors);
        return;
      }

      const response = await createEvent("/event/", fetchData, formData);

      if (!response.success) {
        newErrors.submitError = response.message;
        setError(newErrors);
        return;
      }

      // Succesfuly registered
      alert("ADDED EVENT");
      navigate("/admin-event");
    } catch (error) {
      newErrors.submitError = `Some error occured, ${error.message}`;
      setError(newErrors);
    }
  };
  return (
    <div className="min-h-screen bg-[#111518] w-full p-10 justify-center items-center">
      <p className="font-bold text-seasalt text-xl mb-10">Create New Event</p>
      <div className="flex flex-col gap-2 w-full mx-auto bg-[#111925] border border-[#3B4754] p-8 rounded-md">
        <CustomForm
          formData={formData}
          setErrors={setError}
          setFormData={setFormData}
          formFields={formFields}
          method="POST"
          handleSubmit={handleSubmit}
          error={error}
          submitBtnTitle="Create Event"
          customObjStyles={""}
          customLabelStyles={"bg-[#18212E] border-[#374151] border-2"}
          cancelBtnTitle={"Cancel"}
          handleCancel={() => {
            navigate("/admin-event");
          }}
        />
        {error.submitError && (
          <p className="text-red-500">{error.submitError}</p>
        )}
      </div>
    </div>
  );
};

export default CreateEvent;
