import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import "../components/Signup.css";
const Signin = ({ isLoggedIn, setIsLoggedIn }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleinput = (e) => {
    const id = e.target.id;

    if (id === "email") {
      setEmail(e.target.value);
    }
    if (id === "password") {
      setPassword(e.target.value);
    }
  };
  const handlesubmit = (e) => {
    e.preventDefault();

    const userDataString = localStorage.getItem("userData");

    if (userDataString !== null) {
      const userData = JSON.parse(userDataString);
      const { email: storedemail, password: storedpassword } = userData;

      if (email === storedemail && password === storedpassword) {
        setIsLoggedIn(true);
        console.log(isLoggedIn);
        navigate("/");
      } else alert("Invalid email or password");
    } else alert("no user found");

    setEmail("");
    setPassword("");
  };
  return (
    <div className="form-body">
      <nav className="register-nav">
        <h3 className="register-heading">Login</h3>
      </nav>
      <form className="form" onSubmit={handlesubmit}>
        <div className="form-content">
          <label>Email</label>
          <input
            type="email"
            value={email}
            id="email"
            onChange={(e) => handleinput(e)}
            required
          ></input>
        </div>

        <div className="form-content">
          <label>Password</label>
          <input
            type="password"
            value={password}
            id="password"
            onChange={(e) => handleinput(e)}
            required
          ></input>
        </div>

        <button className="signup-button" type="submit">
          Sign In
        </button>
      </form>
    </div>
  );
};

export default Signin;
