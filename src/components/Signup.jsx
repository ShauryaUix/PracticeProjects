import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../components/Signup.css";
import {useDataFromLocal}  from "../components/CustomHooks";
import EmailAndPassword from "./EmailAndPassword";
import { Link } from "react-router-dom";

const Signup = () => {
  const [formData,setFormData]= useState({})

  const navigate = useNavigate();
  const existingData=useDataFromLocal();

  const handleinput = (e) => {
    const {id,value} = e.target;
       setFormData({...formData,[id]:value})
  };


  const handlesubmit = (e) => {
    e.preventDefault();

    const userData = {
      name: formData.name,
      email: formData.email,
      password: formData.password,
      confirmPassword: formData.confirmPassword,
    };
    const newData = existingData.concat(userData);
    localStorage.setItem("userData", JSON.stringify(newData));

      setFormData({})
    navigate("/signin");
  };
  return (
    <div className="signup-container">
      <div className="signup-wrapper">
        <div className="signup-heading">
          <h2 className="title">Register</h2>
        </div>
        <div className="form-container">
          <form onSubmit={handlesubmit}>
            <div className="form-content">
              <label>Name</label>
              <input
                type="text"
                id="name"
                onChange={(e) => handleinput(e)}
                required
              ></input>
            </div>

           <EmailAndPassword handleinput={handleinput}/>

            <div className="form-content">
              <label>Confirm Password</label>
              <input
                type="password"
                id="confirmPassword"
                onChange={(e) => handleinput(e)}
                required
              ></input>
            </div>
            <button className="signup-button" type="submit">
              Sign Up
            </button>
            Already a Member? <Link to="/signin">Log In</Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
