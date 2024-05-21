import React from "react";

const EmailAndPassword = ({ handleinput }) => {
  return (
    <div>
      <div className="form-content">
        <label>Email</label>
        <input
          type="email"
          id="email"
          onChange={(e) => handleinput(e)}
          required
        ></input>
      </div>

      <div className="form-content">
        <label>Password</label>
        <input
          type="password"
          id="password"
          onChange={(e) => handleinput(e)}
          required
        ></input>
      </div>
    </div>
  );
};

export default EmailAndPassword;
