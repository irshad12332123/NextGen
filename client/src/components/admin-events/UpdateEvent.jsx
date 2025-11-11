import { getEventById, updateEvent } from "@/api/events";
import React, { useEffect, useState } from "react";
import CustomForm from "../form-components/CustomForm";
import { useApiContext } from "@/providers/ApiContext";
import { useNavigate, useParams } from "react-router-dom";

const UpdateEvent = () => {
  const { fetchData } = useApiContext();
  const { id } = useParams();
  const navigate = useNavigate();
  const [event, setEvent] = useState(null);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    location: "",
    thumbnail: "",
    start: "",
    end: "",
  });

  const [error, setError] = useState({});

  const fetchEventById = async () => {
    const response = await getEventById(`/event/${id}`, fetchData);
    if (response?.data) {
      setEvent(response.data);
      setFormData({
        title: response.data.title,
        description: response.data.description,
        location: response.data.location,
        thumbnail: response.data.thumbnail,
        start: response.data.start.split("T")[0],
        end: response.data.end.split("T")[0],
      });
    }
  };

  useEffect(() => {
    fetchEventById();
  }, [id]);

  const formFields = [
    {
      label: "Title",
      placeholder: "Enter event title",
      id: "title",
      name: "title",
      type: "text",
    },
    {
      label: "Description",
      placeholder: "What's the event about?",
      id: "description",
      name: "description",
      type: "text",
    },
    {
      label: "Location",
      placeholder: "Where is it happening?",
      id: "location",
      name: "location",
      type: "text",
    },
    {
      label: "Thumbnail",
      placeholder: "Enter the image URL",
      id: "thumbnail",
      name: "thumbnail",
      type: "text",
    },
    { label: "Starting On", id: "start", name: "start", type: "date" },
    { label: "Ending On", id: "end", name: "end", type: "date" },
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    let newErrors = {};

    for (const key in formData) {
      if (!formData[key]?.trim()) newErrors[key] = `Please enter ${key}`;
    }

    if (Object.keys(newErrors).length > 0) {
      setError(newErrors);
      return;
    }

    try {
      const response = await updateEvent(`/event/${id}`, fetchData, formData);

      if (!response.success) {
        setError({ submitError: response.message });
        return;
      }

      if (response.success === true) {
        alert("Event updated successfully!");
        navigate("/admin-event");
      }
    } catch (error) {
      setError({ submitError: `Some error occurred: ${error.message}` });
    }
  };

  if (!event) {
    return (
      <div className="min-h-screen bg-raisin-black w-full flex flex-col justify-center items-center">
        <p className="text-center text-gray-400">Loading event details...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#111518] w-full p-10 justify-center items-center">
      <p className="font-bold text-seasalt text-xl mb-10">
        Update Event:{" "}
        <span className="text-teal-300 italic"> {formData.title}</span>
      </p>
      <div className="flex flex-col gap-2 w-full mx-auto bg-[#111925] border border-[#3B4754] p-8 rounded-md">
        <CustomForm
          formData={formData}
          setErrors={setError}
          setFormData={setFormData}
          formFields={formFields}
          method="POST"
          handleSubmit={handleSubmit}
          error={error}
          submitBtnTitle="Update Event"
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

export default UpdateEvent;
