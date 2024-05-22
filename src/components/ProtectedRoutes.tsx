import React from "react";
import { Navigate, useLocation } from "react-router-dom";

const ProtectedRoutes: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const location = useLocation();
  const isLoggedIn = JSON.parse(localStorage.getItem("isLoggedIn") || "false");

  if (!isLoggedIn) {
    if (location.pathname === "/home") {
      return <Navigate to="/" replace={true} />;
    } else {
      return <>{children}</>;
    }
  } else {
    if (
      location.pathname === "/signin" ||
      location.pathname === "/signup" ||
      location.pathname === "/"
    ) {
      return <Navigate to="/home" replace={true} />;
    } else if (location.pathname === "/home") {
      return <>{children}</>;
    }
  }
};

export default ProtectedRoutes;
