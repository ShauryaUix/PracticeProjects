import React from "react";
import "../components/HomePage.css";
import Navbar from "./Navbar";

const HomePage:React.FC = () => {

  return (
    <div className="homepage-container">
      <Navbar/>
      <h1 className="homepage-content">Hello World</h1>
    </div>
  );
};

export default HomePage;
