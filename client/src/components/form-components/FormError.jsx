import React from "react";

const FormError = ({ title }) => {
  return (
    <p className="bg-[#fbc6c67f] text-sm text-red-800 border-dashed rounded-md border  border-red-600 p-3  mt-4">
      {title}
    </p>
  );
};

export default FormError;
