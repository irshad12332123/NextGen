import React from "react";
import { useApiContext } from "@/providers/ApiContext";
import { Navigate, useLocation } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const { token } = useApiContext();
  const location = useLocation();

  // If user tries to access login page but is already logged in → redirect to admin panel
  if (location.pathname === "/admin-login" && token) {
    return <Navigate to="/admin-event" replace />;
  }

  // If user tries to access protected route without token → redirect to login
  if (!token && location.pathname.startsWith("/admin")) {
    return <Navigate to="/admin-login" replace />;
  }

  return children;
};

export default ProtectedRoute;
