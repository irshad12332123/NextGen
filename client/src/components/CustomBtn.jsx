import React from "react";

const CustomBtn = ({ title, type = "primary", onClick }) => {
  return (
    <button
      onClick={onClick ? onClick : undefined}
      className={`${
        type === "primary"
          ? "bg-celestial-blue shadow-celestial hover:bg-[#33333d7b]"
          : "bg-[#33333D] border-[0.01rem] border-[#ffffff14] hover:bg-[#FBEBD0] hover:text-gray-600"
      } px-3 py-2 text-seasalt text-sm transition-all duration-100 rounded-md  hover:cursor-pointer`}
    >
      {title}
    </button>
  );
};

export default CustomBtn;
