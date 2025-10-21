// LazyCarousel.jsx
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import CustomCard from "./cards/CustomCard";

const LazyCarousel = ({ carouselImages, isCard = false, type = "primary" }) => {
  return (
    <div className="w-full md:h-[450px] h-[250px] mx-auto mt-10">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={isCard ? 5 : 1}
        // autoplay={{ delay: 2000 }}
        loop={true}
        className="w-full h-full"
      >
        {isCard && type === "primary"
          ? carouselImages.map((card, i) => (
              <SwiperSlide key={i} className="flex items-center justify-center">
                <CustomCard cardDetails={card} />
              </SwiperSlide>
            ))
          : carouselImages.map((image, i) => (
              <SwiperSlide key={i} className="flex items-center justify-center">
                <img
                  alt={image.title}
                  src={image.src}
                  loading="lazy"
                  className="w-full h-full object-cover object-center"
                />
              </SwiperSlide>
            ))}
      </Swiper>
    </div>
  );
};

export default LazyCarousel;
