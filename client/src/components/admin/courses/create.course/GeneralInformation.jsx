import { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

function GeneralInformation({ formData, setFormData }) {
  const [open, setOpen] = useState(true);

  const updateCourse = (key, value) => {
    setFormData({
      ...formData,
      course: {
        ...formData.course,
        [key]: value,
      },
    });
  };

  return (
    <div className="bg-gray-800 p-6 rounded-xl">
      <button
        className="w-full text-left text-white font-semibold text-lg"
        onClick={() => setOpen(!open)}
      >
        <div className="flex justify-between items-center ">
          General Information {open ? <IoIosArrowUp /> : <IoIosArrowDown />}
        </div>
      </button>

      {open && (
        <div className="py-4 space-y-4">
          {/* Slug */}
          <div>
            <label className="text-sm text-gray-300">Course Slug</label>
            <input
              className="bg-gray-900 text-white p-3 w-full rounded-md"
              value={formData.course.slug}
              onChange={(e) => updateCourse("slug", e.target.value)}
              placeholder="btech-ai-ml"
            />
          </div>

          {/* Name */}
          <div>
            <label className="text-sm text-gray-300">Course Name</label>
            <input
              className="bg-gray-900 text-white p-3 w-full rounded-md"
              value={formData.course.name}
              onChange={(e) => updateCourse("name", e.target.value)}
              placeholder="B.Tech in Artificial Intelligence & Machine Learning"
            />
          </div>

          {/* Description */}
          <div>
            <label className="text-sm text-gray-300">Course Description</label>
            <textarea
              className="bg-gray-900 text-white p-3 w-full rounded-md h-28"
              value={formData.course.description}
              onChange={(e) => updateCourse("description", e.target.value)}
              placeholder="This program focuses on the core principles of AI and ML..."
            />
          </div>

          {/* Image URL */}
          <div>
            <label className="text-sm text-gray-300">Course Image URL</label>
            <div className="bg-gray-900 text-white hover:bg-blue-500 border-dashed h-20 border flex justify-center items-center w-full rounded-md">
              <input
                className="p-5 cursor-pointer "
                value={formData.course.image_url}
                onChange={(e) => updateCourse("image_url", e.target.value)}
                type="file"
                required
                accept="image/*"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
export default GeneralInformation;
