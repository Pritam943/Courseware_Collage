import React from "react";
import Slider from "../layout/Slider";
import Header from "../layout/Header";
import Cards from "../layout/Cards";
import Footer from "../layout/Footer";
import { FiDownload } from "@react-icons/all-files/fi/FiDownload";
import DomainDownload from "../docs/2022-CUTM-Domain-Courses-Brochure-Final-New-1.pdf";
import SkillDownload from "../docs/2022-CUTM-Skill-Courses-Brochure-Final.pdf";

function Home() {
  return (
    <div>
      <Header />
      <Slider />

      <section class="bg-dark text-light p-5">
        <div class="container1">
          <div class="d-md-flex justify-content-between align-item-center">
            <h4 class="b-3 mb-md-0">
              Courseware : institutional model with industry, Academia,
              Government & Social entrepreneurship{" "}
            </h4>
          </div>
        </div>
        <div id="hoverbtn">
        <a href={DomainDownload} download="domainDownload" target='_blank' rel="noopener noreferrer">
        <button className="newbtn" >
          {" "}
          Download Domain Repository <FiDownload />
        </button>
        </a>
        <a href={SkillDownload} download="skillDownload" target='_blank' rel="noopener noreferrer">
        <button className="newbtn">
          {" "}
          Download Skill Repository <FiDownload />
        </button>
        </a>
        </div>
        
      </section>

      <Cards />
      <Footer />
    </div>
  );
}

export default Home;
