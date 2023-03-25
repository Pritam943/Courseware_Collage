import React from "react";
import Header from "../layout/Header";

function core() {
  return (
    <div>
    <Header/>
      <section className="bg-dark text-light p-2  text-center">
        <div className="container">
          <div className="d-sm-flex align-item-center">
            <div>
              <h2 className="headdomain pt-5">
              Discover the world of possibility with
Centurion University Core Courses!
              </h2>
              <button
                type="button"
                className="dmbtn"
                style={{ padding: "5px",
                fontSize: "10px"}}
                >
                Register Now
              </button>
            </div>
          </div>
        </div>
      </section>
      
      
    </div>
  );
}

export default core;
