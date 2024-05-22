import React, { useState, ChangeEvent, FormEvent } from "react";
import { useNavigate, Link } from "react-router-dom";

import "../components/Signup.css";
import  UserInput  from "./UserInput";
import { CheckData } from "./CustomHooks";

interface FormData {
  email: string;
  password: string;
}

const Signin: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({ email: "", password: "" });

  const navigate = useNavigate();

  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const userData = CheckData(formData.email, formData.password);

    userData ? navigate("/home") : alert("no user found");
  };

  return (
    <div className="signup-container">
      <div className="signup-wrapper">
        <div className="signup-heading">
          <h2 className="title">Log In</h2>
        </div>
        <div className="form-container">
          <form onSubmit={handleSubmit}>
            <UserInput
              label="Email"
              id="email"
              type="email"
              onChange={handleInput}
            />
            <UserInput
              label="Password"
              id="password"
              type="password"
              onChange={handleInput}
            />
            <button className="signup-button" type="submit">
              Sign In
            </button>
            Not a Member? <Link to="/signup">Sign Up</Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signin;
