import React from "react";
import "../components/Landing.css";
import { useNavigate } from "react-router-dom";
const Landing = () => {
  const naviagte = useNavigate();
  const handleSignUp = () => {
    naviagte("/signup");
  };
  const handleSignIn = () => {
    naviagte("/signin");
  };
  return (
    <div>
      <nav className="landing-nav">
        <button className="landing-sign" onClick={handleSignUp}>
          Sign Up
        </button>
        <button className="landing-sign" onClick={handleSignIn}>
          Sign In
        </button>
      </nav>

      <main className="landing-content">This is landing page</main>
    </div>
  );
};

export default Landing;
