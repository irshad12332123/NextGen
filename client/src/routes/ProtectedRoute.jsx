import { useApiContext } from "@/providers/ApiContext";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const { token } = useApiContext();
  const navigate = useNavigate();

  // redirect unauthenticated users to login
  useEffect(() => {
    if (!token) {
      navigate("/admin-login", { replace: true });
    }
  }, [token, navigate]);

  if (!token) return null;
  return children;
};

export default ProtectedRoute;
