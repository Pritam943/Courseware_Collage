import React, { useContext, useEffect, useState } from "react";
import "../style/login.css";
import userContext from "../../context/userContext";
import { useNavigate } from "react-router-dom";
import { doLogin } from "../../authentication";
import { loginUser } from "../../services/user-service";

const Login = () => {
  const { data, setData } = useContext(userContext);
  const navigate = useNavigate();
  const [loginDetail, setLoginDetail] = useState({
    userName: "",
    password: "",
  });
  const [error, setError] = useState({
    errors: [],
    isError: false,
  });

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  const handleChange = (event, field) => {
    let actualValue = event.target.value;
    setLoginDetail({ ...loginDetail, [field]: actualValue });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(loginDetail);
    if (
      loginDetail.userName.trim() === "" ||
      loginDetail.password.trim() === ""
    ) {
      console.log("Username or password is required !!");
      return;
    }
    loginUser(loginDetail)
      .then((userData) => {
        console.log(userData);
        doLogin(userData, () => {
          console.log("User details saved in local storage !!");
          console.log(userData);
          setData({
            data: userData.data,
            login: true,
          });
          console.log(data);
          navigate("/dashboard");
        });
        console.log("Login successful !!");
      })
      .catch((error) => {
        console.log(error);
        if (error.response.status === 400 || error.response.status === 404) {
          setLoginDetail({
            userName: "",
            password: "",
          });
          console.log(error.response.data.message);
        } else {
          console.log(
            "Something went wrong on server. Please try again later."
          );
        }
      });
  };
  return (
    <div className="logbody">
      <div className="wrapper">
        <from action="">
          <h1>Login</h1>
          <div className="input-box">
            <input
              type="text"
              placeholder="Username"
              onChange={(e) => handleChange(e, "userName")}
              required
            />
            <i className="bx bxs-user-rectangle"></i>
          </div>
          <div className="input-box">
            <input
              type="password"
              placeholder="password"
              onChange={(e) => handleChange(e, "password")}
              required
            />
            <i className="bx bxs-lock-open-alt"></i>
          </div>
          <button type="submit" className="btn" onClick={handleSubmit}>
            Login
          </button>
        </from>
      </div>
    </div>
  );
};

export default Login;
