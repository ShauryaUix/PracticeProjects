import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import "../components/Signup.css";
import EmailAndPassword from "./EmailAndPassword";
const Signin = () => {
  const [formData, setFormData] = useState({});

  const navigate = useNavigate();

  const handleinput = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handlesubmit = (e) => {
    e.preventDefault();

    const userDataString = localStorage.getItem("userData");
    if (userDataString !== null) {
      const userInfo = JSON.parse(userDataString);
      const userData = userInfo.find(
        (user) =>
          user.email === formData.email && user.password === formData.password
      );
      console.log(userData);
      if (userData !== undefined) {
        localStorage.setItem("isLoggedIn", "true");
        console.log(JSON.parse(localStorage.getItem("isLoggedIn")));
      }
      userData ? <>{navigate("/home")}</> : alert("no user found");
    }
  };

  return (
    <div className="signup-container">
      <div className="signup-wrapper">
        <div className="signup-heading">
          <h2 className="title">Log In</h2>
        </div>
        <div className="form-container">
          <form onSubmit={handlesubmit}>
            <EmailAndPassword handleinput={handleinput} />
            <button className="signup-button" type="submit">
              Sign In
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signin;
