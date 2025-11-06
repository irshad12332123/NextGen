import React, { useState } from "react";
import FormLabel from "./FormLabel";
import CustomBtn from "../CustomBtn";

const CustomForm = ({
  formData,
  setFormData,
  formFields,
  method = "POST",
  action = "",
  handleSubmit,
  error,
  setErrors,
  buttonType = "",
  submitBtnTitle = "Submit Application",
  cancelBtnTitle = null,
  handleCancel,
  children,
  customLabelStyles,
}) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
  };

  return (
    <form
      action={action}
      method={method}
      onSubmit={handleSubmit}
      noValidate
      className="w-full space-y-5 flex flex-col"
    >
      {formFields.map((form) => (
        <div>
          <FormLabel
            htmlFor={form.id}
            value={formData[form.id]}
            inputType={form.type}
            placeholder={form.placeholder}
            handleChange={handleChange}
            id={form.id}
            title={form.label}
            name={form.name}
            customStyles={customLabelStyles}
          />
          {error[form.id] && <p className="text-red-500">{error[form.id]}</p>}
        </div>
      ))}

      {children ? children : null}

      <div className="flex space-x-2.5 ">
        <CustomBtn title={submitBtnTitle} styleType={buttonType} />
        {cancelBtnTitle ? (
          <CustomBtn
            type={buttonType}
            onClick={handleCancel}
            title={cancelBtnTitle}
          />
        ) : null}
      </div>
    </form>
  );
};

export default CustomForm;
