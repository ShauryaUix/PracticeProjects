import React from "react";
import "../components/Landing.css";
import { useNavigate } from "react-router-dom";

const Landing: React.FC = () => {
  const navigate = useNavigate();

  const handleSignUp = () => {
    navigate("/signup");
  };

  const handleSignIn = () => {
    navigate("/signin");
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
