import React from "react"
import admin from '../admin.png'
export default function Profile(){
return(
    <div className="pagee">
    <div className="profile-container">
      <div className="profile-header">
        {/* <img src="admin-avatar.jpg" alt="Admin Avatar" className="avatar" /> */}
        <img className='dp' src={admin}/>
        <h1>Admin Name</h1>
        <p>Admin Role</p>
      </div>

      <div className="profile-details">
        <h2>Contact Information</h2>
        <p>Email: admin@example.com</p>
        <p>Phone: +1 123 456 7890</p>
      </div>
    </div>
    </div>
)


}