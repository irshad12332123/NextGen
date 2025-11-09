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
  autocomplete,
  customStyles,
}) => {
  return (
    <div className="flex flex-col gap-1">
      <label htmlFor={htmlFor} className="text-seasalt mt-5">
        {title}
      </label>
      <input
        required
        accept={inputType === "file" ? "image/*" : undefined}
        placeholder={placeholder}
        type={inputType}
        value={inputType === "file" ? undefined : value}
        autoComplete={autocomplete || "off"}
        id={id}
        name={name}
        onChange={handleChange}
        className={`text-seasalt p-3 ${
          customStyles ? customStyles : "border border-[#3B4754] bg-[#1C2127]"
        } ${inputType === "file" ? "border-dashed h-50 cursor-pointer" : ""}
        focus:border-white focus:outline-0 rounded-md`}
      />
    </div>
  );
};

export default FormLabel;
