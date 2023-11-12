import React from "react";
import Header from "../layout/Header";
import Coursesbanner from "../layout/Coursesbanner";
import Dboxes from "../layout/Dboxes";
import "../style/domain.css";

function core() {
  return (
    <div>
    <Header/>
     <Coursesbanner/>
     <div className="dcard">
      <Dboxes/>
      <Dboxes/>
      <Dboxes/>
      <Dboxes/>
      <Dboxes/>
      <Dboxes/>
      </div>
    </div>
  );
}

export default core;
