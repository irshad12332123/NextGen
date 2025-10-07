import React from "react";

function RankingCard() {
  return (
    <div
      data-aos="fade-up"
      className="hover:bg-amber-200 bg-white p-5 flex flex-col items-center justify-center group rounded-br-4xl border-[0.01rem] hover:border-amber-200 border-[#20202061] transition-all duration-300 w-full"
    >
      <div className="flex items-center justify-center gap-2 group-hover:bg-amber-400 rounded-xl px-5 w-full transition-all duration-300 ">
        <p className="text-xl">RANKED</p>
        <p className="md:text-4xl text-xl"> #241</p>
      </div>
      <p className="text-gray-700 ">Among's top scorer</p>
      <div className="flex flex-col items-center justify-center text-center">
        <p>Universities in QS World University</p>
        <p>Rankings by Subject 2025</p>
        <p>Engineering & Technology</p>
      </div>
    </div>
  );
}

export default RankingCard;
