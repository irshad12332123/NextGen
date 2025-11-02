import { deleteEvent } from "@/api/events";
import { formatDate } from "@/utils/formatDate";
import React from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const statusStyles = {
  Upcoming: "text-blue-400",
  Ongoing: "text-green-400",
  past: "text-gray-500",
};

const EventRow = ({ event, onDelete }) => {
  const navigate = useNavigate();
  return (
    <tr className="border-b border-[#2B333A] hover:bg-[#22282e] transition-colors">
      <td className="py-6 px-2 font-medium text-sesalt">{event.title}</td>
      <td className="px-2 text-muted">{formatDate(event.start)}</td>
      <td className="px-2 text-muted">{event.location}</td>
      <td className="px-2">
        <div
          className={`flex items-center gap-2 ${statusStyles[event.status]}`}
        >
          <span className="w-2 h-2 rounded-full bg-current"></span>
          <span className="capitalize">{event.status}</span>
        </div>
      </td>
      <td className="px-2">
        <div className="flex items-center gap-5  ">
          <button className="hover:text-blue-400">
            <FaEdit
              size={14}
              onClick={() => {
                navigate(`/admin-update-event/${event.id}`);
              }}
            />
          </button>
          <button className="hover:text-red-400">
            <FaTrash
              size={14}
              onClick={() => {
                onDelete(event.id);
              }}
            />
          </button>
        </div>
      </td>
    </tr>
  );
};

export default EventRow;
