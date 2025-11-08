import { Outlet } from "react-router-dom";

import React from "react";
import Sidebar from "@/components/admin-events/Sidebar";

const AdminLayout = () => {
  return (
    <div>
      <Sidebar />
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default AdminLayout;
