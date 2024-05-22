import React, { useState, ChangeEvent, FormEvent } from "react";
import { useNavigate, Link } from "react-router-dom";
import "../components/Signup.css";
import { useDataFromLocal } from "./CustomHooks";
import UserInput from "./UserInput";

interface FormData {
  name?: string;
  email?: string;
  password?: string;
  confirmPassword?: string;
}

const Signup: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({});

  const navigate = useNavigate();
  const existingData = useDataFromLocal();

  const handleinput = (e: ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handlesubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const userData = {
      name: formData.name,
      email: formData.email,
      password: formData.password,
      confirmPassword: formData.confirmPassword,
    };
    const newData = existingData.concat(userData);
    localStorage.setItem("userData", JSON.stringify(newData));

    setFormData({});
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
            <UserInput
              label="Name"
              id="name"
              type="text"
              onChange={handleinput}
            />
            <UserInput
              label="Email"
              id="email"
              type="email"
              onChange={handleinput}
            />
            <UserInput
              label="Password"
              id="password"
              type="password"
              onChange={handleinput}
            />
            <UserInput
              label="Confirm Password"
              id="confirmPassword"
              type="password"
              onChange={handleinput}
            />
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
