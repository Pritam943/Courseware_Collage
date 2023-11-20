import React from 'react'
import avtar from '../images/img_avatar.png'
import '../style/Teacher.css'

export default function Teachercard(props) {
  return (
    
      <div className="cardt">
        <img className="card_imgt" src={avtar} alt={avtar} />
        
        <div className="containert">
          <h4><b>{props.name}</b></h4> 
          <p>{props.jobTitle}</p> 
          <button id="toggle">Read More</button>
        </div>
      </div>
    
  )
}
