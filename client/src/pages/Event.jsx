import ImageCard from "../components/cards/ImageCard";
import { GoStarFill } from "react-icons/go";
import eventBanner from "../assets/event_page_banner.png";
import EventDetailCard from "../components/cards/EventDetailCard";
import SearchFilterBar from "../components/SearchFilter";
import { useState } from "react";
import { MdUpcoming } from "react-icons/md";
import { SlCalender } from "react-icons/sl";
import EventCard from "../components/cards/EventCard";

function ButtonComponent({ title, isSelected, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`p-2 cursor-pointer font-medium ${
        isSelected
          ? "text-blue-500 border-b-2 border-blue-500"
          : "text-gray-500 border-b-2 border-transparent hover:text-blue-500"
      }`}
    >
      {title}
    </button>
  );
}

function Event() {
  const [selected, setSelected] = useState("onGoing");

  const tabs = [
    { id: "onGoing", label: "On-Going" },
    { id: "upcoming", label: "Upcoming" },
  ];

  return (
    <div className="mt-30 w-full h-full bg-[#F9FAFB] disable-scrollbar">
      <ImageCard
        title="Discover Events"
        imageUrl={eventBanner}
        buttonRequired={false}
      />

      {/* Featured Events */}
      <div className="w-full h-full md:px-50 px-5 my-20">
        <div className="md:text-2xl text-xl flex  gap-2 items-center">
          <GoStarFill className="text-blue-500" />
          <p className="font-bold">Featured Events</p>
        </div>

        <div className="grid md:grid-cols-2 grid-cols-1  mt-10 gap-10">
          <EventDetailCard />
          <EventDetailCard />
        </div>

        <div className="mt-10">
          <SearchFilterBar />
        </div>

        <div className="mt-10">
          {/* Tab Buttons */}
          <div className="flex gap-4 border-b border-gray-200">
            {tabs.map((tab) => (
              <ButtonComponent
                key={tab.id}
                title={tab.label}
                isSelected={selected === tab.id}
                onClick={() => setSelected(tab.id)}
              />
            ))}
          </div>

          {/* Tab Content */}
          <div className="mt-10 grid grid-cols-3 gap-10">
            {selected === "onGoing" && (
              <>
                <EventDetailCard type="secondary" />
                <EventDetailCard type="secondary" />
                <EventDetailCard type="secondary" />
              </>
            )}
            {selected === "upcoming" && (
              <>
                <EventDetailCard type="secondary" />
                <EventDetailCard type="secondary" />
              </>
            )}
          </div>
        </div>
      </div>

      <div className="my-10 px-50">
        <div className="flex gap-10 items-center">
          <SlCalender className="text-3xl text-blue-500" />
          <div className="flex gap-2 items-center">
            <MdUpcoming className="text-3xl text-blue-500" />
            <p className="text-3xl font-bold">Upcoming Events</p>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-5">
          <EventCard type="secondary" />
          <EventCard type="secondary" />
          <EventCard type="secondary" />
          <EventCard type="secondary" />
          <EventCard type="secondary" />
          <EventCard type="secondary" />
        </div>
      </div>
    </div>
  );
}

export default Event;
