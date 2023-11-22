import React, { useEffect, useState } from "react";
import Header from "../layout/Header";
import Coursesbanner from "../layout/Coursesbanner";
import Dboxes from "../layout/Dboxes";
import "../style/domain.css";
import { readAll } from "../../services/course.service";
import Footer from "../layout/Footer";

function core() {
 
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

export default core;
