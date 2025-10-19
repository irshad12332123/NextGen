import React, { useState } from "react";
import ImageCard from "../../components/cards/ImageCard";
function AboutCard({ rowReverse = false }) {
  return (
    <div className="my-20 max-w-7xl mx-auto bg-[#CAD5E2] p-5">
      <div
        className={`flex flex-col md:flex-row gap-10 ${
          rowReverse && "md:flex-row-reverse"
        }`}
      >
        <div className="md:w-1/2 flex flex-col gap-10 ">
          <ImageCard />
          <ImageCard buttonRequired={false} />
        </div>
      </div>
    </div>
  );
}

export default AboutCard;
