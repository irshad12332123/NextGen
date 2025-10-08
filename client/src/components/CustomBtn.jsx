import React from "react";
import rightArrow from "../assets/angle-circle-right.png";

function CustomBtn({ customStyle = "" }) {
  return (
    <button
      className={`bg-[#67676744] text-xl hover:shadow-[0_0_50px_rgb(120,120,255)_inset,0_0_30px_rgb(120,120,255)] flex items-center justify-center gap-3  text-black hover:text-white px-7 py-6 hover:bg-blue-500  hover:cursor-pointer transition-all duration-300 rounded-full ${customStyle} group `}
    >
      <p className=" text-sm">Animate your ideas with motion-primitives</p>
      <img src={rightArrow} alt="right-arrow" className="w-10" />
    </button>
  );
}

export default CustomBtn;
