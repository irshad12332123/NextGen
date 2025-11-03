import React from "react";
import { useApiContext } from "@/providers/ApiContext";
import { Navigate, useLocation } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const { token } = useApiContext();
  const location = useLocation();
  if (location.pathname.includes("admin-login") && token) {
    console.log("REturning", location.pathname);
    return <Navigate to="/admin-event" replace />;
  }

  if (!token && location.pathname.startsWith("/admin")) {
    return <Navigate to="/admin-login" replace />;
  }

  return children;
};

export default ProtectedRoute;
