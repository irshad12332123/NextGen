import React, { useState } from "react";
import FormLabel from "@/components/form-components/FormLabel";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

function FeeStructure({ formData, setFormData }) {
  const [open, setOpen] = useState(false);

  const tutionFee = [{ title: "Tuition Fee", key: "tution_fee" }];

  const handleChange = (key, value) => {
    setFormData({
      ...formData,
      tutionFee: {
        ...formData.tutionFee,
        [key]: value,
      },
    });
  };

  return (
    <div className="bg-gray-800 p-6 rounded-xl">
      <div
        className={`flex justify-between items-center cursor-pointer ${
          open ? "bg-gray-500 rounded-md p-5" : ""
        }`}
        onClick={() => setOpen(!open)}
      >
        <span className="text-white font-semibold text-lg">Tuition Fees</span>
        {open ? (
          <IoIosArrowUp className="text-white" />
        ) : (
          <IoIosArrowDown className="text-white" />
        )}
      </div>

      {open && (
        <div className="grid grid-cols-2 gap-x-8 gap-y-4 mt-4">
          {tutionFee.map((item, idx) => (
            <div key={idx}>
              <FormLabel
                title={item.title}
                placeholder={`Enter ${item.title}`}
                inputType="text"
                value={formData.tutionFee?.[item.key] || ""}
                onChange={(e) => handleChange(item.key, e.target.value)}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default FeeStructure;
