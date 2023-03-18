import React from 'react'
import gameart from '../images/3d game art.jpg';
import adobe from '../images/adobe.jpg';
import agrivoltaic from '../images/agrivoltaics.jpg';
import markating from '../images/markating.jpg';
import basketball from '../images/baskeetball.jpg';
import bio from '../images/bio.jpg';
import brew from '../images/brew.jpg';
import apperal from '../images/apperal.jpg';

function Boxes() {
  return (
    <div>
         <section class="p-5">
      <div class="container-box">
        <div class="row">
          <div class="col-md">
            <div class="card" >
              <img src={gameart} class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">3D Game Art</h5>
                <p class="card-text">This course has been created</p>
                <button className="cardbtn">Read more</button>
              </div>
            </div>
          </div>
          <div class="col-md">
            <div class="card" >
              <img src={adobe} class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">Adobe Tools And Illustration</h5>
                <p class="card-text">This is a skill oriented Course to</p>
                <button className="cardbtn">Read more</button>
              </div>
            </div>
          </div>
          <div class="col-md">
            <div class="card" >
              <img src={agrivoltaic} class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">Agrivoltaic Technology</h5>
                <p class="card-text">In the apparel industry the work is</p>
                <button className="cardbtn">Read more</button>
              </div>
            </div>
          </div>
          <div class="col-md">
            <div class="card" >
              <img src={markating} class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">Apparel Production & Markiting</h5>
                <p class="card-text">Code(Credit):CUTM3143(0-3-1)</p>
                <button className="cardbtn">Read more</button>
              </div>
            </div>
          </div>
          <div class="col-md">
            <div class="card" >
              <img src={basketball} class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">Basketball</h5>
                <p class="card-text">This course is designed to provide</p>
                <button className="cardbtn">Read more</button>
              </div>
            </div>
          </div>
          <div class="col-md">
            <div class="card" >
              <img src={bio} class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">Bio-Fertilizer Preparation</h5>
                <p class="card-text">
                  This is a skill oriented course to impart
                </p>
                <button className="cardbtn">Read more</button>
              </div>
            </div>
          </div>
          <div class="col-md">
            <div class="card" >
              <img src={brew} class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">Brew Master</h5>
                <p class="card-text">This course is to make a world-class</p>
                <button className="cardbtn">Read more</button>
              </div>
            </div>
          </div>
          <div class="col-md">
            <div class="card" >
              <img src={apperal} class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">Apparel Production</h5>
                <p class="card-text">In the apparel industry the work is</p>
                <button className="cardbtn">Read more</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      </section>
    </div>
  )
}

export default Boxes