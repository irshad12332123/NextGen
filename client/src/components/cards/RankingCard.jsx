import React from "react";

function RankingCard() {
  return (
    <div className="hover:bg-blue-500 cursor-pointer bg-[#F8F8F8] group hover:shadow-[0_0_50px_rgb(120,120,255)_inset,0_0_30px_rgb(120,120,255)] transition-all duration-100 ">
      <p className="p-2 text-xs opacity-85 group-hover:text-white">RANKED</p>
      <div className="p-2  flex flex-col items-center justify-center gap-10  rounded-xl px-5 w-full transition-all duration-300 ">
        <p className="md:text-5xl text-xl group-hover:text-white  text-blue-500">
          {" "}
          <sup className="text-xl">#</sup>1
        </p>
        <p className="text-xs group-hover:text-white opacity-75">Rank title</p>
      </div>
      <div className="flex text-[2.5dvw] text-white py-5  bg-gray-900 opacity-70 flex-col items-center justify-center text-center">
        <p> Universities in QS World University</p>
        <p>Rankings by Subject 2025</p>
        <p>Engineering & Technology</p>
      </div>
    </div>
  );
}

export default RankingCard;
