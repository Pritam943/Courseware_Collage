import React, { useState } from "react";
import Header from "../layout/Header";
import Dboxes from "../layout/Dboxes";
import "../style/domain.css";
import Coursesbanner from "../layout/Coursesbanner";
import Footer from "../layout/Footer";

function domain() {

  const [boxes, setBoxes] = useState([]);
  return (
    <div>
    <Header/>
      <Coursesbanner/>
      <div className="dcard">
      {boxes.map(box => {

        return( <Dboxes
          key={box.id}
          title={box.title}
          content={box.content}
        />);
      })}
      </div>
      <Footer/>
    </div>
  );
}

export default domain;
