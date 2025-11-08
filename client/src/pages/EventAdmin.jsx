import React, { useState } from "react";
import MainEventAdmin from "@/components/admin-events/MainEventAdmin";
import { decodeToken } from "@/utils/decodeToken";
import { Sidebar } from "lucide-react";

const EventAdmin = () => {
  const { username_id } = decodeToken();

  return (
    <div className="min-h-screen w-full bg-[#0e1418] text-gray-100">
      <div className="grid grid-cols-[auto_1fr] h-screen">
        {/* Sidebar */}
        <Sidebar username_id={username_id} />
        {/* Main Content */}
        <MainEventAdmin />
      </div>
    </div>
  );
};

export default EventAdmin;
