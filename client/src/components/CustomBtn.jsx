import React from "react";
import rightArrow from "../assets/angle-circle-right.png";
import { TextEffect } from "../../components/motion-primitives/text-effect";

function CustomBtn({ customStyle = "" }) {
  return (
    <button
      className={`bg-[#67676744] text-xl flex items-center justify-center gap-3  text-black hover:text-white px-7 py-6 hover:bg-[#676767bd] hover:cursor-pointer transition duration-300 rounded-full ${customStyle}`}
    >
      <div>
        <TextEffect per="word" preset="fade-in-blur">
          Animate your ideas with motion-primitives
        </TextEffect>
      </div>
      <img src={rightArrow} alt="right-arrow" className="w-10" />
    </button>
  );
}

export default CustomBtn;
