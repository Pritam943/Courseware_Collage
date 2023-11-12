import React from "react";
import "../style/domain.css";

const Dboxes = (props) => {
  return (
    <div className="dbox">
  
            <div class="card" >
              <div class="card-body">
                <h5 class="card-title">{props.title}</h5>
                <p class="card-text">{props.content}</p>
                <button className="cardbtn">Read more</button>
              </div>
            </div>
            </div>
  );
};

export default Dboxes;
