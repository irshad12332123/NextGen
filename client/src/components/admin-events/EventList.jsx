import React from "react";
import EventRow from "./EventRow";
import { getEventStatus } from "@/utils/getCurrentEventStatus";

const EventList = ({ fetchData, refetch, events, onDelete, filter }) => {
  const enhancedEvents = events?.map((e) => ({
    ...e,
    status: getEventStatus(e.start, e.end),
  }));

  const visibleEvents =
    filter === "All"
      ? enhancedEvents
      : enhancedEvents.filter((e) => e.status === filter);

  return (
    <div className="bg-[#1C2227] border border-[#2B333A] rounded-xl pt-4 px-4  w-full">
      {!visibleEvents || visibleEvents.length === 0 ? (
        <p className="text-center text-green-400 pb-4">Events soon....</p>
      ) : (
        <table className="w-full text-left">
          <thead>
            <tr className="border-b border-[#2B333A] text-seasalt text-sm">
              <th className="py-3 px-2">Event Name</th>
              <th className="px-2">Date</th>
              <th className="px-2">Location</th>
              <th className="px-2">Status</th>
              <th className="px-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {visibleEvents &&
              visibleEvents.map((event) => (
                <EventRow
                  key={event.id}
                  event={event}
                  refetch={refetch}
                  onDelete={onDelete}
                  fetchData={fetchData}
                />
              ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default EventList;
