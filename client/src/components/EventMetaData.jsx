import React from "react";

function EventMetaData({ Icon, data }) {
  return (
    <div className="flex gap-3 items-center text-[#626262]">
      <span>
        <Icon />
      </span>{" "}
      <p>{data}</p>
    </div>
  );
}

export default EventMetaData;
