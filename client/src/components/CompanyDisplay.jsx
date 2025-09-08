import React from "react";
function Image({ logo, packageLPA }) {
  return (
    <div className="w-full h-full flex">
      <img src={logo} alt="" className="" />
      <p>{packageLPA}</p>
    </div>
  );
}

export default Image;
