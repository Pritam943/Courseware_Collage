import React from "react";
import domainimg from "../images/domimg.png";
import skillimg from "../images/skillimg.png";
import coreimg from "../images/corimg.png";
import programimg from "../images/proimg.png";
import otherimg from "../images/otherimg.png";
import Assessmentimg from "../images/Assesmentimg.png"
import { Link } from "react-router-dom";

function Cards() {
  return (
    <div>
      <div className="cards">
        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <img src={domainimg} className="card-img" alt="Avatar" height={200} width={280} />
            </div>
            <div className="flip-card-back">
              
              <h4 className="first-txt">Domain Courses</h4>
              <p className="first-para">Domain Courses Details</p>
              <Link to="/domain">  <button type="button" className="card-btn btn btn-dark btn-lg">
                Explore
              </button></Link>
            </div>
          </div>
        </div>
        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <img src={coreimg} className="card-img" alt="Avatar" height={200} width={280} />
            </div>
            <div className="flip-card-back">
             <h4 className="first-txt" style={{left:40}}>Core Courses</h4>
              <p className="first-para">Core Courses Details</p>
              <Link to="/core"><button type="button" className="card-btn btn btn-dark btn-lg">
                Explore
              </button></Link>
            </div>
          </div>
        </div>
        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <img src={skillimg} className="card-img" alt="Avatar" height={200} width={280} />
            </div>
            <div className="flip-card-back">
              <h4 className="first-txt">Skill Courses</h4>
              <p className="first-para">Skill Courses Details</p>
              <Link to="/skill"> <button type="button" className="card-btn btn btn-dark btn-lg">
                Explore
              </button></Link>
            </div>
          </div>
        </div>
      </div>
      <br></br>

      {/* 2nd row */}

      <div className="cards">
        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <img src={programimg} className="card-img" alt="Avatar" height={200} width={280} />
      
            </div>
            <div className="flip-card-back">
              
              <h4 className="first-txt">Programme Structure</h4>
              <p className="first-para">Programms Details </p>
              <Link to="/domain">  <button type="button" className="card-btn btn btn-dark btn-lg">
                Explore
              </button></Link>
            </div>
          </div>
        </div>
        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <img src={Assessmentimg} alt="Avatar"className="card-img" height={200} width={280} />
            </div>
            <div className="flip-card-back">
             <h4 className="first-txt">Assessment Criterion</h4>
              <p className="first-para">Assessments Details</p>
              <button type="button" className="card-btn btn btn-dark btn-lg">
                Explore
              </button>
            </div>
          </div>
        </div>
        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <img src={otherimg} alt="Avatar"className="card-img"  height={200} width={280} />
            </div>
            <div className="flip-card-back">
              <h4 className="first-txt">Other Information</h4>
              <p className="first-para">Check Informations</p>
              <button type="button" className="card-btn btn btn-dark btn-lg">
                Explore
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;
