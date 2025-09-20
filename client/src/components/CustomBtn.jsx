import React from "react";
import rightArrow from "../assets/angle-circle-right.png";
function CustomBtn({ customStyle = "" }) {
  return (
    <button
      className={`bg-[#67676767] text-xl flex items-center justify-center gap-3  text-black hover:text-white px-7 py-6 hover:bg-slate-500 hover:cursor-pointer transition duration-300 rounded-full ${customStyle}`}
    >
      <p className="text-xl">Explore All Courses</p>
      <img src={rightArrow} alt="right-arrow" className="w-10" />
    </button>
  );
}

export default CustomBtn;
