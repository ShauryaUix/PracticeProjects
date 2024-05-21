import React from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.setItem("isLoggedIn", false);
    navigate("/");
  };

  return (
    <nav className="heading">
      <span>Home Page </span>
      <button className="logout-button" onClick={handleLogout}>
        Log Out
      </button>
    </nav>
  );
};

export default Navbar;
