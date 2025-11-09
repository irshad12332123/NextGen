import React, { useState } from "react";
import FormLabel from "./FormLabel";
import CustomBtn from "../CustomBtn";
import FormError from "./FormError";

const CustomForm = ({
  formData,
  setFormData,
  formFields,
  method = "POST",
  action = "",
  handleSubmit,
  error,
  setErrors,
  buttonType = "primary",
  submitBtnTitle = "Submit Application",
  cancelBtnTitle = null,
  handleCancel,
  children,
  customLabelStyles,
  customObjStyles = {},
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
      {formFields.map((form, i) => (
        <div key={i}>
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
          {error[form.id] && <FormError title={error[form.id]} />}
        </div>
      ))}

      {children ? children : null}

      <div className="flex md:w-[60%] 2xl:w-[20%] space-x-2.5 ">
        <CustomBtn title={submitBtnTitle} styleType={"tertiary"} />
        {cancelBtnTitle ? (
          <CustomBtn
            styleType={"danger"}
            onClick={handleCancel}
            title={cancelBtnTitle}
          />
        ) : null}
      </div>
    </form>
  );
};

export default CustomForm;
