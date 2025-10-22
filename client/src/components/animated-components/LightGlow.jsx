import React from "react";

export const LightGlow = ({ lightRef, glowColor = "white" }) => {
  return (
    <div
      ref={lightRef}
      className="pointer-events-none absolute w-32 h-32 b rounded-full blur-3xl mix-blend-color"
      style={{
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        transition: "opacity 0.2s ease",
        mixBlendMode: "overlay",
        backgroundColor: glowColor,
        opacity: 0,
      }}
    ></div>
  );
};
