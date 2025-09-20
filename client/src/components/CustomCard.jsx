import React from "react";
import rightCircleArrow from "../assets/angle-circle-right.png";
import { Link } from "react-router-dom";
import cn from "clsx";
function CustomCard() {
  return (
    <div className="flex flex-col h-full w-full bg-white relative shadow-2xl ">
      <div className=" h-full w-full relative overflow-hidden ">
        <img
          src="https://imgs.search.brave.com/jf59zES8W8QcQu5yfM2HKNrlAf9upF32vuBA5WGbLfQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvNjY5/Nzc1NzEyL3Bob3Rv/L3RlYWNoZXItZ2l2/aW5nLWFuLWl0LWNs/YXNzLWF0LXNjaG9v/bC10by1hLWdyb3Vw/LW9mLXN0dWRlbnRz/LmpwZz9zPTYxMng2/MTImdz0wJms9MjAm/Yz1rRlJfX2hCTElN/LTBQVzZrNGxTcUFR/SkdvLXVrTHUtYmJz/T1FrX1Y2ZWRBPQ"
          alt="Btech"
          className="h-full w-full object-cover"
        />
        <p className="text-center text-2xl text-white absolute z-2 bottom-3 left-2 ">
          Engineering
        </p>
        <div className="h-full w-full absolute bg-[#181818a9] z-1 top-0 left-0 "></div>
      </div>
      <div className="p-5 flex flex-col flex-1">
        <p className="mb-5">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis
          vel debitis iure ullam commodi nam minima nemo, quae animi laboriosam
          libero magni pariatur voluptatem, rem accusantium ducimus eaque at
          nesciunt.
        </p>
        {/* Explore button section */}
        <Link
          href=""
          className="absolute left-[50%] translate-x-[-50%] cursor-pointer -bottom-5"
        >
          <div
            className={`flex items-center justify-center gap-2 hover:bg-[#898f95] rounded-full p-1 group  transition-all duration-300 ease-in-out `}
          >
            <img src={rightCircleArrow} alt="Right-arrow" className="w-10" />
            <p
              className={`opacity-0 text-white group-hover:px-3 group-hover:opacity-100 transition-all duration-300 ease-in-out `}
            >
              Explore
            </p>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default CustomCard;
