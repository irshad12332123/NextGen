import React from "react";

const Error = ({ children }) => {
  return (
    <div className="flex bg-raisin-black text-3xl justify-center items-center min-h-screen w-full">
      {children}
    </div>
  );
};

export default Error;
