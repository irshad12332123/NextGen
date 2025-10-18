import React from "react";
import Carousel from "@/components/Carousel";

const CarouselSection = () => {
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
    <div className="w-full h-full lg:px-50 md:px-20 px-5 mt-10 md:mt-10 lg:mt-30 ">
      <div className="flex items-center justify-center mb-10 flex-col gap-1">
        <p className="font-bold w-full md:text-3xl text-xl lg:max-w-5xl md:text-center">
          Immerse yourself in a Global Educational Experience with peers from 65
          countries
        </p>
        <p className="opacity-70 md:text-xl text-xs md:text-center max-w-3xl">
          Uniting students worldwide, our platform fosters a vibrant network
          with global learning opportunities and optimal learning experiences.
        </p>
      </div>
      <div className="rounded-3xl">
        <Carousel carouselImages={cardDetails} />
      </div>
    </div>
  );
};

export default CarouselSection;
