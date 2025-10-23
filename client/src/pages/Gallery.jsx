import GalleryCard from "@/components/cards/GalleryCard";
import React, { useState } from "react";
GalleryCard;
const Gallery = () => {
  const [filter, setFilter] = useState("all");

  const galleryData = [
    {
      id: 1,
      title: "Main Campus Building",
      category: "Campus",
      image: "/mnt/data/main-campus-building.png",
    },
    {
      id: 2,
      title: "Robotics Lab Session",
      category: "Labs",
      image: "/mnt/data/robotics-lab-session.png",
    },
    {
      id: 3,
      title: "Annual Hackathon",
      category: "Events",
      image: "/mnt/data/annual-hackathon.png",
    },
    {
      id: 4,
      title: "Campus Green",
      category: "Student Life",
      image: "/mnt/data/campus-green.png",
    },
    {
      id: 5,
      title: "The Knowledge Hub",
      category: "Campus",
      image: "/mnt/data/the-knowledge-hub.png",
    },
    {
      id: 6,
      title: "Innovision Tech Fest",
      category: "Events",
      image: "/mnt/data/innovision-tech-fest.png",
    },
    {
      id: 7,
      title: "Advanced Chemistry Lab",
      category: "Labs",
      image: "/mnt/data/advanced-chemistry-lab.png",
    },
    {
      id: 8,
      title: "Collaborative Study",
      category: "Student Life",
      image: "/mnt/data/collaborative-study.png",
    },
    {
      id: 9,
      title: "Graduation Day",
      category: "Events",
      image: "/mnt/data/graduation-day.png",
    },
  ];

  const filteredData =
    filter === "all"
      ? galleryData
      : galleryData.filter((item) => item.category === filter);
  return (
    <div className="min-h-screen px-5  md:px-60 w-full bg-raisin-black">
      <div className="md:pt-50 pt-20">
        <div className="flex my-30 flex-col justify-center items-center gap-3">
          <p className="text-2xl text-seasalt ">
            Campus{" "}
            <span
              className="lg:text-9xl gallery-text  italic text-wheat after:content-[''] after:absolute after:left-0 after:top-0 after:h-1 after:bg-white after:line"
              style={{ fontFamily: "IceBerg" }}
            >
              Gallery
              <sup>"</sup>
            </span>
          </p>
          <p className="text-sm text-muted md:w-[70%] text-center">
            A glimpse into the life at Nxt Gen Academy, Explore th campus,
            events, and the momrmnts that define us.
          </p>
        </div>
        {/*  Filter optionss */}
        <div className="flex gap-2 mb-4  md:flex-nowrap flex-wrap">
          {["all", "Events", "Labs", "Campus", "Student life"].map((cat) => (
            <button
              key={cat}
              className={`md:px-4 md:py-2 px-3 py-2 text-sm md:text-[1rem] font-bold text-seasalt rounded-full cursor-pointer ${
                filter === cat ? "bg-celestial-blue " : ""
              }`}
              onClick={() => setFilter(cat)}
            >
              {cat.charAt(0).toUpperCase() + cat.slice(1)}
            </button>
          ))}
        </div>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 pb-20">
          {/* Gallery Grid */}
          {filteredData.map((item) => (
            <GalleryCard
              key={item.id}
              img={item.img}
              title={item.title}
              content={item.category}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
