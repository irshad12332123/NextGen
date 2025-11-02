import React from "react";
import { getUserFromToken } from "../utils/auth";
import Error from "@/components/error/Error";

const ProtectedRoute = ({ children }) => {
  const admin = getUserFromToken();

  if (admin) {
    // Not logged in
    return (
      <Error>
        <p className="text-wheat">
          Not Authorized <span className="text-red-400">401</span>
        </p>
      </Error>
    );
  }

  return children;
};

export default ProtectedRoute;
