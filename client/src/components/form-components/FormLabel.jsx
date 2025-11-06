import React from "react";

const FormLabel = ({
  title,
  placeholder,
  inputType = "text",
  handleChange,
  htmlFor,
  name,
  value,
  id,
  customStyles,
}) => {
  return (
    <div className="flex flex-col gap-1">
      <label
        htmlFor={htmlFor}
        name={name}
        id={id}
        className="text-seasalt mt-5"
      >
        {title}
      </label>
      <input
        required
        placeholder={placeholder}
        type={inputType}
        value={value}
        id={id}
        name={name}
        onChange={handleChange}
        className={`text-seasalt p-3 ${
          customStyles ? customStyles : "border border-[#3B4754] bg-[#1C2127]"
        }  focus:border-white focus:outline-0 rounded-md`}
      />
    </div>
  );
};

export default FormLabel;
