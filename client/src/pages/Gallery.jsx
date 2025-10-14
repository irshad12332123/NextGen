import React from "react";
import ImageContainer from "../components/cards/ImageCard";
import DisplayGallery from "../components/DisplayGallery";
import Carousel from "../components/Carousel";
import { galleryImages } from "../assets/galleryImages";
import SearchFilterBar from "@/components/SearchFilter";

const Gallery = () => {
  return (
    <>
      <ImageContainer buttonRequired={false} title="Gallery" />
      <div className="min-h-screen w-full flex flex-col items-center justify-center md:px-50 px-2">
        <div className="md:mt-20 my-10">
          <p className="md:text-3xl text-xl border-b-1 pb-5 md:mb-5 mb-2">
            Our Campus
          </p>
          <SearchFilterBar />
          <DisplayGallery galleryImages={galleryImages} />
        </div>
      </div>
      <div className="md:px-50 px-10">
        <h5 className="md:text-3xl text-2xl">Heading title here</h5>
        <p className="md:text-xl text-sm opacity-75 md:max-w-6xl w-full">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas earum
          error minus neque omnis illum vero suscipit soluta dignissimos totam
          labore blanditiis, quibusdam asperiores iste ea reprehenderit sunt
          nesciunt! Sunt.
        </p>
      </div>
      <Carousel carouselImages={galleryImages} />
    </>
  );
};

export default Gallery;
