import React from "react";
import Slider from "../layout/Slider";
import Header from "../layout/Header";
import Cards from "../layout/Cards";
import Footer from "../layout/Footer";
import { FiDownload } from "@react-icons/all-files/fi/FiDownload";

function Home() {
  return (
    <div>
      <Header />
      <Slider />

      <section class="bg-dark text-light p-5">
        <div class="container">
          <div class="d-md-flex justify-content-between align-item-center">
            <h4 class="b-3 mb-md-0">
              Courseware : institutional model with industry, Academia,
              Government & Social entrepreneurship{" "}
            </h4>
          </div>
        </div>
        <div id="hoverbtn">
        <button className="newbtn">
          {" "}
          Download Domain Repository <FiDownload />
        </button>
        <button className="newbtn">
          {" "}
          Download Skill Repository <FiDownload />
        </button>
        </div>
        
      </section>

      <Cards />
      <Footer />
    </div>
  );
}

export default Home;
