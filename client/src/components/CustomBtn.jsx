import React from "react";

const CustomBtn = ({
  title,
  styleType = "primary",
  onClick,
  btnType = "button",
}) => {
  return (
    <button
      type={btnType}
      onClick={onClick ? onClick : undefined}
      className={`${
        styleType === "primary"
          ? "bg-celestial-blue shadow-celestial hover:bg-[#33333d7b]"
          : null
      } p-3 text-seasalt text-sm transition-all duration-100 w-full rounded-md  hover:cursor-pointer
      
      ${styleType === "danger" ? "bg-red-500 opacity-70" : null}
      ${styleType === "tertiary" ? "bg-[#1E7ABB]" : null}
      `}
    >
      {title}
    </button>
  );
};

export default CustomBtn;
