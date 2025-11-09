import React, { createContext, useContext, useState } from "react";
import { useApi } from "@/hooks/useApi";

const ApiContext = createContext();

export const ApiProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("token"));

  const handleLogIn = (newToken) => {
    localStorage.setItem("token", newToken);
    setToken(newToken);
    if (token) return true;
  };

  const handleLogOut = () => {
    localStorage.removeItem("token");
    setToken(null);
    if (!token) return true;
  };

  const api = useApi();
  return (
    <ApiContext.Provider
      value={{ ...api, token, setToken, handleLogOut, handleLogIn }}
    >
      {children}
    </ApiContext.Provider>
  );
};

export const useApiContext = () => useContext(ApiContext);
