import React from "react";
import CustomBtn from "./CustomBtn";

function ImageCard() {
  return (
    <div className="relative w-full h-120 bg-amber-300 flex items-center justify-center overflow-hidden rounded-lg shadow-lg">
      <img
        src="https://imgs.search.brave.com/jf59zES8W8QcQu5yfM2HKNrlAf9upF32vuBA5WGbLfQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvNjY5/Nzc1NzEyL3Bob3Rv/L3RlYWNoZXItZ2l2/aW5nLWFuLWl0LWNs/YXNzLWF0LXNjaG9v/bC10by1hLWdyb3Vw/LW9mLXN0dWRlbnRz/LmpwZz9zPTYxMng2/MTImdz0wJms9MjAm/Yz1rRlJfX2hCTElN/LTBQVzZrNGxTcUFR/SkdvLXVrTHUtYmJz/T1FrX1Y2ZWRBPQ"
        alt="image-card"
        className="w-full h-full object-cover"
      />
      <div className="absolute z-1 flex flex-col items-center justify-center gap-5">
        <p className="max-w-6xl text-5xl text-white font-bold">
          Enroll for the best Online Courses
        </p>
        <CustomBtn customStyle={"border-1 border-white text-white"} />
      </div>
      <div className="absolute top-0 w-full h-full bg-black opacity-70"></div>
    </div>
  );
}

export default ImageCard;
