import React, { useEffect, useState } from "react";
import Header from "../layout/Header";
import Dboxes from "../layout/Dboxes";
import "../style/domain.css";
import Coursesbanner from "../layout/Coursesbanner";
import Footer from "../layout/Footer";
import { readAll } from "../../services/course.service";

function domain() {

  const [boxes, setBoxes] = useState([]);

  useEffect(() => {
    readAll().then(response => {
      console.log(`Received the response from API ${response.data}`);
      setBoxes(response.data);
    }).catch(error => {
      console.log(`Error occured ${error}`);
    })
  }, []);

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
