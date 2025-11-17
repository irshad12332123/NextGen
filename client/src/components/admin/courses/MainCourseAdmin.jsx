import React, { useEffect, useState } from "react";
import { IoIosLogOut } from "react-icons/io";
import CustomBtn from "../CustomBtn";
import EventList from "./EventList";
import Loader from "../Loader";
import { useApi } from "@/hooks/useApi";
import { createEvent, deleteEvent, getAllEvents } from "@/api/events";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

import withReactContent from "sweetalert2-react-content";
import { useApiContext } from "@/providers/ApiContext";

const MainCourseAdmin = () => {
  const { handleLogOut } = useApiContext();

  const MySwal = withReactContent(Swal);
  const navigate = useNavigate();
  const [events, setEvents] = useState(null);
  const { loading, refetch, fetchData, data: result } = useApi();
  const fetchEvents = async () => {
    const res = await getAllEvents("/event/", fetchData);
    if (res?.data) setEvents(res.data);
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  const handleCreateNewEvent = async () => {
    navigate("/admin-event/create");
  };

  const handleDeleteEvent = async (id) => {
    MySwal.fire({
      title: "Are you sure?",
      text: "You won’t be able to revert this action!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Delete",
      background: "#1C2227",
      color: "#fff",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const res = await deleteEvent(`/event/${id}`, fetchData);
        if (res.success) {
          MySwal.fire({
            title: "Deleted!",
            text: "Your event has been removed.",
            icon: "success",
            background: "#1C2227",
            color: "#fff",
          });
          const refreshed = await refetch("/event/");
          if (refreshed?.data) setEvents(refreshed.data);
        } else {
          MySwal.fire({
            title: "Failed",
            text: "Something went wrong while deleting.",
            icon: "error",
            background: "#1C2227",
            color: "#fff",
          });
        }
      }
    });
  };

  const handleLogout = () => {
    const hasLoggedOut = handleLogOut();
    if (hasLoggedOut) navigate("/admin-login");
  };

  const [filter, setFilter] = useState("All");
  return (
    <main className="overflow-y-auto bg-[#111518] h-full p-5">
      <div className="flex  py-2 border-b items-center border-[#3B4954] ">
        <p className="text-xl text-center">Events Management</p>
        <div className="flex-grow"></div>
        <div>
          <IoIosLogOut
            onClick={handleLogout}
            size={50}
            className="p-2 rounded-md bg-[#1C2227] text-center"
          />
        </div>
      </div>

      <div className="p-15  h-full w-full">
        <div className="w-full flex items-center">
          <p className="font-bold text-4xl flex-1">Events</p>
          <div className="">
            <CustomBtn
              title={"Add new event"}
              styleType="tertiary"
              onClick={handleCreateNewEvent}
            />
          </div>
        </div>
        <div className="flex gap-2 my-8 md:flex-nowrap flex-wrap">
          {["All", "Upcoming", "Ongoing"].map((cat) => (
            <button
              key={cat}
              className={`md:px-4 md:py-2 px-3 py-2 text-sm md:text-[1rem] font-bold text-seasalt rounded-full cursor-pointer ${
                filter === cat
                  ? "bg-[#253849] text-celestial-blue "
                  : "bg-[#1C2227]"
              }`}
              onClick={() => setFilter(cat)}
            >
              {cat.charAt(0).toUpperCase() + cat.slice(1)}
            </button>
          ))}
        </div>
        {loading ? (
          <Loader />
        ) : (
          <EventList
            refetch={refetch}
            events={events}
            fetchData={fetchData}
            filter={filter}
            onDelete={handleDeleteEvent}
          />
        )}
      </div>
    </main>
  );
};

export default MainCourseAdmin;
