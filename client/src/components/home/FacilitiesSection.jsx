import React from "react";
import CustomCard from "@/components/cards/CustomCard";

const FacilitiesSection = () => {
  const cardDetails = [
    {
      src: "https://images.unsplash.com/photo-1458668383970-8ddd3927deed",
      link: "Explore Library",
      title: "Mountains Library",
      content: "Read and study in a serene mountain library environment.",
    },
    {
      src: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
      link: "Visit Labs",
      title: "Desert Labs",
      content: "Conduct experiments in fully equipped desert labs.",
    },
    {
      src: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
      link: "Play Sports",
      title: "Beach Sports",
      content: "Enjoy sports activities with scenic ocean views.",
    },
    {
      src: "https://images.unsplash.com/photo-1519681393784-d120267933ba",
      link: "Tour Museums",
      title: "Forest Museums",
      content: "Immerse yourself in history and art amidst lush forests.",
    },
    {
      src: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
      link: "Join Plantation",
      title: "Ocean Plantation Drive",
      content: "Participate in environmental conservation drives.",
    },
  ];
  return (
    <div className="relative w-full h-full md:my-20   flex flex-col flex-1 border-t-2 border-blue-900">
      <div className="bg-slate-300  p-5 flex flex-col items-center justify-center">
        <div className=" flex flex-col items-center justify-center absolute -top-10 md:-top-15 bg-blue-300 border-1 border-blue-900 rounded-md md:p-5 p-2">
          <p className="text-xl md:text-3xl font-bold ">Our Facilities</p>
          <p className=" text-gray-800 text-xs md:text-xl md:mt-5 mt-2">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit
          </p>
        </div>
        <div className="h-full mt-20 mb-10 grid grid-cols-1  md:grid-cols-3 xl:grid-cols-5 gap-4 md:gap-6  lg:px-20 place-items-center">
          {cardDetails.map((card, i) => (
            <div key={i} className="w-full">
              <CustomCard cardDetails={card} link="/events" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FacilitiesSection;
