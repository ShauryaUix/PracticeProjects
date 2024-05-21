import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../components/Signup.css";
const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const navigate = useNavigate();

  const handleinput = (e) => {
    const id = e.target.id;

    if (id === "name") {
      setName(e.target.value);
    }
    else if (id === "email") {
      setEmail(e.target.value);
    }
    else if (id === "password") {
      setPassword(e.target.value);
    }
    else if (id === "confirmPassword") {
      setConfirmPassword(e.target.value);
    }
  };
  const handlesubmit = (e) => {
    e.preventDefault();
    const existingDataString = localStorage.getItem("userData");
    const existingData = existingDataString
      ? JSON.parse(existingDataString)
      : [];

    const userData = {
      name: name,
      email: email,
      password: password,
      confirmPassword: confirmPassword,
    };
const newData= existingData.concat(userData)
    localStorage.setItem("userData", JSON.stringify(newData));

    setName("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
    navigate("/");
  };
  return (
    <div className="form-body">
      <nav className="register-nav">
        <h3 className="register-heading">Register</h3>
      </nav>
      <form className="form" onSubmit={handlesubmit}>
        <div className="form-content">
          <label>Name</label>
          <input
            type="text"
            value={name}
            id="name"
            onChange={(e) => handleinput(e)}
            required
          ></input>
        </div>

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

        <div className="form-content">
          <label>Confirm Password</label>
          <input
            type="password"
            value={confirmPassword}
            id="confirmPassword"
            onChange={(e) => handleinput(e)}
            required
          ></input>
        </div>
        <button className="signup-button" type="submit">
          Signup
        </button>
      </form>
    </div>
  );
};

export default Signup;
