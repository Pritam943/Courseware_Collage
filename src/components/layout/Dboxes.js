import React from "react";
import "../style/domain.css";

const Dboxes = (props) => {
  return (
    <div className="dbox">
  
            <div className="card" >
              <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text">{props.content}</p>
                <button className="cardbtn">Read more</button>
              </div>
            </div>
            </div>
  );
};

export default Dboxes;
