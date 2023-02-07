import React from "react";

function Footer() {
  return (
    <div>

      <div className="footer">
        <div className="footer-img-div">
          <img
            className="footer-img"
            src="https://upload.wikimedia.org/wikipedia/en/thumb/6/62/Centurion_University_of_Technology_and_Management_Logo.svg/1200px-Centurion_University_of_Technology_and_Management_Logo.svg.png" alt="centurion"
            height="220px"
            widht="220px"
          />
        </div>

        <div className="footer-div">
          <hr className="linehr " />
          <p className="paraf">
            Copyright © 2022 Centurion University Of Technology & Management
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
