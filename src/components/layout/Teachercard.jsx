import React from 'react'
import avtar from '../images/img_avatar.png'
import '../style/Teacher.css'

export default function Teachercard(props) {
  return (
    
      <div className="card">
        <img className="card_img" src={avtar} alt={avtar} />
        
        <div className="container">
          <h4><b>{props.name}</b></h4> 
          <p>{props.jobTitle}</p> 
          <button id="toggle">Read More</button>
        </div>
      </div>
    
  )
}
