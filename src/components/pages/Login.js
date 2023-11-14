import React from "react";
import "../style/login.css";

const Login = () => {
  return (
    <div className="logbody">
      <div className="wrapper">
        <from action="">
          <h1>Login</h1>
          <div className="input-box">
            <input type="text" placeholder="Username" required />
            <i className="bx bxs-user-rectangle"></i>
          </div>
          <div className="input-box">
            <input type="password" placeholder="password" required />
            <i className="bx bxs-lock-open-alt"></i>
          </div>
          <div className="remember-forgot">
            <label>
              <input type="checkbox" /> Remember me
            </label>
          </div>
          <button type="submit" className="btn">
            Login
          </button>
        </from>
      </div>
    </div>
  );
};

export default Login;
