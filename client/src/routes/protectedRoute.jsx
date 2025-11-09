import { useApiContext } from "@/providers/ApiContext";
import { useEffect } from "react";
import { Navigate, useLocation, useNavigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const { token } = useApiContext();
  const navigate = useNavigate();
  const location = useLocation();

  // redirect unauthenticated users to login
  useEffect(() => {
    if (!token) {
      console.log("Prortexted route", location.pathname);

      navigate("/admin-login", { replace: true });
    }
  }, [token, navigate]);

  if (!token) return null;
  return children;
};

export default ProtectedRoute;
