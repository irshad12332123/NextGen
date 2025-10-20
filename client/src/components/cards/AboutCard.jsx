import React from "react";

function AboutCard({ img, title, content }) {
  return (
    <div className="h-full">
      {" "}
      {/* ensures the card fills the grid cell */}
      <div className="flex flex-col h-full bg-white dark:bg-background-dark rounded-xl shadow-md overflow-hidden transition-shadow hover:shadow-xl">
        <div
          className="h-48 bg-cover bg-center"
          style={{
            backgroundImage: `url(${img})`,
          }}
        ></div>
        <div className="p-6 flex flex-col flex-grow">
          <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
          <p className="text-gray-600 text-sm leading-relaxed flex-grow">
            {content}
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutCard;
