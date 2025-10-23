import React from "react";

const GalleryCard = ({ img, title, content }) => {
  return (
    <div
      className="h-75 bg-[#0b3b4dbb] flex rounded-2xl w-full relative bg-center bg-cover "
      style={{ backgroundImage: `url(${img})` }}
    >
      <div className="self-end p-4">
        <p className="font-bold text-seasalt">{title}</p>
        <p className="text-sm text-muted">{content}</p>
      </div>
    </div>
  );
};

export default GalleryCard;
