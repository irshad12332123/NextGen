import React, { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function HorizontalCarousel({ Card, length }) {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    const { current } = scrollRef;
    if (current) {
      const scrollAmount = 350; // adjust per card width
      current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="relative w-full flex items-center">
      {/* Left arrow */}
      <button
        onClick={() => scroll("left")}
        className="absolute left-2 z-10 p-2 bg-blue-500 shadow-md  rounded-md hover:bg-black transition"
      >
        <ChevronLeft size={22} className="text-white" />
      </button>

      {/* Scroll container */}
      <div
        ref={scrollRef}
        className="flex overflow-x-auto scroll-smooth space-x-4 p-3"
      >
        {Array.from({ length }).map((_, i) => (
          <div
            key={i}
            className="flex-shrink-0 w-[450px] bg-white shadow-sm hover:shadow-md transition rounded-xl p-4"
          >
            <Card />
          </div>
        ))}
      </div>

      {/* Right arrow */}
      <button
        onClick={() => scroll("right")}
        className="absolute -right-5 z-10 p-2 bg-blue-500 shadow-md  rounded-md hover:bg-black transition"
      >
        <ChevronRight size={22} className="text-white" />
      </button>
    </div>
  );
}
