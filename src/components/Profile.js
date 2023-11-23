import React, { useContext } from "react";
import admin from "../admin.png";
import userContext from "../context/userContext";
import { doLogout } from "../authentication";
import { useNavigate } from "react-router-dom";
export default function Profile() {
  const userData = useContext(userContext);
  const navigate = useNavigate();
  const handleLogOut = () => {
    doLogout(() => {
      userData.setData({
        data: null,
        login: false,
      });
    });
    console.log("Successfully Log out!!");
    navigate("/");
  };
  return (
    <div className="profile-container">
      <div className="profile-header">
        {/* <img src="admin-avatar.jpg" alt="Admin Avatar" className="avatar" /> */}
        <img className="dp" src={admin} />
        <h1>
          Admin Name :{" "}
          {userData.data?.data?.firstname + " " + userData.data?.data?.lastname}{" "}
        </h1>
        <p>Role : {userData.data?.data?.role?.name}</p>
      </div>
      <div className="profile-details">
        <h2>Contact Information</h2>
        <p>Email: {userData.data?.data?.email}</p>
        <p>Phone: +1 123 456 7890</p>
      </div>
      <input
        type="button"
        style={{ width: "150px", height: "50px" }}
        value="Log out"
        onClick={handleLogOut}
      />
    </div>
  );
}
