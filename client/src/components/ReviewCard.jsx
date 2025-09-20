import React from "react";
import profile from "../assets/profile.png";
import Announcements from "./Announcements";
function ReviewCard() {
  return (
    <div className="flex bg-[#c5c8cb] p-5 gap-5">
      <img src={profile} alt="profile-" className="w-10 self-start" />
      {/* Review detals */}
      <div className="flex flex-col gap-5">
        <p className="text-[#6B6B76]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio natus
          consectetur nesciunt, neque sequi, dignissimos sapiente dicta ab
          cupiditate placeat porro ratione eum, et repudiandae laudantium facere
          magni. Dignissimos, illum.
        </p>
        <h5 className="text-xl">Md Irshad</h5>
      </div>
    </div>
  );
}

export default ReviewCard;
