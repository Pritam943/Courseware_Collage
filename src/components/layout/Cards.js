import React from "react";
import cardsimg from "../images/cardsimg.jpg";
import { Link } from "react-router-dom";

function Cards() {
  return (
    <div>
      <div className="cards">
        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <img src={cardsimg} alt="Avatar" height={200} width={280} />
              <h3 className="first-txt">Domain Courses</h3>
            </div>
            <div className="flip-card-back">
              
              <h3 className="first-txt">Domain Courses</h3>
              <p className="first-para"> Read all about our domain courses</p>
              <Link to="/domain">  <button type="button" className="card-btn btn btn-dark btn-lg">
                Explore
              </button></Link>
            </div>
          </div>
        </div>
        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <img src={cardsimg} alt="Avatar" height={200} width={280} />
              <h3 className="first-txt">Core Courses</h3>
            </div>
            <div className="flip-card-back">
             <h3 className="first-txt">Core Courses</h3>
              <p className="first-para"> Read all about our core courses</p>
              <button type="button" className="card-btn btn btn-dark btn-lg">
                Explore
              </button>
            </div>
          </div>
        </div>
        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <img src={cardsimg} alt="Avatar" height={200} width={280} />
              <h3 className="first-txt ">Skill Courses</h3>
            </div>
            <div className="flip-card-back">
              <h3 className="first-txt">Skill Courses</h3>
              <p className="first-para"> Read all about our skill courses</p>
              <button type="button" className="card-btn btn btn-dark btn-lg">
                Explore
              </button>
            </div>
          </div>
        </div>
      </div>
      <br></br>
    </div>
  );
}

export default Cards;
