import React from "react";
import Marquee from "react-fast-marquee";
function TextMarquee({ titlesList }) {
  return (
    <div className="bg-[#012F6D] text-white flex flex-col gap-10">
      {titlesList ? (
        <Marquee
          gradient={true}
          speed={50}
          pauseOnHover={true}
          className=""
          autoFill={true}
          direction="right"
        >
          {titlesList.map((item, i) => (
            <div className="flex gap-2 p-5 items-center mr-50">
              <p className="text-3xl">{item.title}</p>
              <p className="text-sm">{item.description}</p>
            </div>
          ))}
        </Marquee>
      ) : null}
    </div>
  );
}

export default TextMarquee;
