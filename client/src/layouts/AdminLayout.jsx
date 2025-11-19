import { Outlet } from "react-router-dom";

import React from "react";
import Sidebar from "@/components/admin/Sidebar";

const AdminLayout = () => {
  return (
    <div className="min-h-screen w-full bg-[#0e1418] text-gray-100">
      <div className="grid grid-cols-[16rem_1fr] min-h-screen">
        <Sidebar />
        <div className="ml-64"></div>
        <Outlet />
      </div>
    </div>
  );
};

export default AdminLayout;
