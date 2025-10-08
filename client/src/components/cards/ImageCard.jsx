import React from "react";
import CustomBtn from "../CustomBtn";

function ImageCard({
  buttonRequired = true,
  title = "Enroll for the best Online Courses",
}) {
  return (
    <div className="relative w-full md:h-120 flex items-center justify-center overflow-hidden">
      <img
        src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee"
        alt="image-card"
        className="w-full h-full object-cover"
      />
      <div className="absolute z-1 flex flex-col items-center justify-center gap-5">
        <p className="max-w-6xl md:text-5xl text-3xl text-white font-bold text-center">
          {title}
        </p>
        {buttonRequired && (
          <CustomBtn customStyle={"border-1 border-white text-white"} />
        )}
      </div>
      <div className="absolute top-0 w-full h-full bg-black opacity-70"></div>
    </div>
  );
}

export default ImageCard;
