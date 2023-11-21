import React from 'react'
import '../style/about.css'
import logott from '../images/logott.png'

function About() {
  return (
    <div className="wrapperr"> 
    <div className="backgroundd-color">
      <div className="abg-1"></div>
      <div className="abg-2"></div>

    </div>
    <div className="about-container">
      
    <div className="imagee-container"> <div><img className="logott.png" src={logott} alt={logott} /> </div> </div>
    
    <div className="textt-container"><h1>About us</h1>
          <p>
          Courseware refers to educational materials that are designed for use in a specific course or educational program.
           These materials can take various forms, including textbooks, online modules, software applications, and multimedia presentations.
           The goal of courseware is to facilitate teaching and learning, providing students with the necessary resources to understand and engage with course content.
          </p>
          <a href="https://cutm.ac.in/erp-facility/">Click For More Information</a></div>
    </div>
    </div>
    
    
  )
}

export default About