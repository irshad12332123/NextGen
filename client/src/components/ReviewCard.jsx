import React from "react";
import profile from "../assets/profile.png";
import Announcements from "./Announcements";
function ReviewCard() {
  return (
    <div className=" bg-[#c5c8cb] rounded-4xl border-1 border-[#414141]">
      <div className="flex md:p-5 p-3 md:gap-2 gap-1">
        <img
          src={profile}
          alt="profile-"
          className="md:w-10 w-10 rounded-full self-start bg-amber-50 p-1"
        />
        <h5 className="md:text-xl text-sm self-end">Md Irshad</h5>
      </div>
      {/* Review detals */}
      <div className="flex flex-col md:gap-5 gap-2 py-1 px-5 rounded-4xl">
        <p className="text-[#545454] italic md:text-[18px] line-clamp-3 md:line-clamp-4 ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio natus
          consectetur nesciunt, neque sequi, dignissimos sapiente dicta ab
          cupiditate placeat porro ratione eum, et repudiandae laudantium facere
          magni. Dignissimos, illum.
        </p>
      </div>
    </div>
  );
}

export default ReviewCard;
