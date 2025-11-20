import React, { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

function GeneralInformation({ formData, setFormData }) {
  const [open, setOpen] = useState(true);

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
          <div>
            <label className="text-sm text-gray-300">Course Slug</label>
            <input
              className="bg-gray-900 text-white p-3 w-full rounded-md"
              value={formData.slug}
              onChange={(e) =>
                setFormData({ ...formData, slug: e.target.value })
              }
              placeholder="btech-ai-ml"
            />
          </div>

          <div>
            <label className="text-sm text-gray-300">Course Title</label>
            <input
              className="bg-gray-900 text-white p-3 w-full rounded-md"
              value={formData.title}
              onChange={(e) =>
                setFormData({ ...formData, title: e.target.value })
              }
              placeholder="B.Tech in Artificial Intelligence & Machine Learning"
            />
          </div>

          <div>
            <label className="text-sm text-gray-300">Course Description</label>
            <textarea
              className="bg-gray-900 text-white p-3 w-full rounded-md h-28"
              value={formData.description}
              onChange={(e) =>
                setFormData({ ...formData, description: e.target.value })
              }
              placeholder="This program focuses on the core principles of AI and ML..."
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default GeneralInformation;
