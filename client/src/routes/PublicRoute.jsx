import { useApiContext } from "@/providers/ApiContext";
import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const PublicRoute = ({ children }) => {
  const { token } = useApiContext();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    console.log("PUBLIC ROUTE", location.pathname);

    if (
      token &&
      (location.pathname === "/admin-login" ||
        location.pathname === "/admin-register")
    ) {
      navigate("/admin-event", { replace: true });
    }
  }, [token, location.pathname, navigate]);

  return children;
};

export default PublicRoute;
