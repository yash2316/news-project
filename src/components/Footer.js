import React from "react";
import '@fortawesome/fontawesome-free/css/all.min.css';
import logo from './NSAI_LOGO.png';





function Footer() {
  return (
    <footer className="text-center text-lg-start text-white" style={{ backgroundColor: "#212121", width: "100%", position: "relative" }}>
      {/* Section: Social media */}
      <section className="d-flex justify-content-between p-4" style={{ backgroundColor: "#000000" }}>
        {/* Left */}
        <div className="me-5">
          <span>Get connected with us on social networks:</span>
        </div>
        {/* Left */}

        {/* Right */}
        <div>
          <a href="" className="text-white me-4"><i className="fab fa-facebook-f"></i></a>
          <a href="" className="text-white me-4"><i className="fab fa-twitter"></i></a>
          <a href="" className="text-white me-4"><i className="fab fa-google"></i></a>
          <a href="" className="text-white me-4"><i className="fab fa-instagram"></i></a>
          <a href="" className="text-white me-4"><i className="fab fa-linkedin"></i></a>
          <a href="" className="text-white me-4"><i className="fab fa-github"></i></a>
        </div>
        {/* Right */}
      </section>
      {/* Section: Social media */}

      {/* Section: Links */}
      <section className="">
        <div className="container text-center text-md-start mt-5">
          {/* Grid row */}
          <div className="row mt-3">
            {/* Grid column */}
            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
              {/* Content */}
              <h3 className="text-uppercase fw-bold">RapidRecap</h3>
              <hr className="mb-4 mt-0 d-inline-block mx-auto" style={{ width: "205px", backgroundColor: "#7c4dff", height: "2px" }} />
              <p>
                <span>
                  <img src={logo} alt="NSAI Logo" style={{ height: "120px", width: "auto", borderRadius: "50%" }} />
                </span>
              </p>

            </div>
            {/* Grid column */}

            {/* Grid column */}
            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
              {/* Links */}
              <h6 className="text-uppercase fw-bold">Sources</h6>
              <hr className="mb-4 mt-0 d-inline-block mx-auto" style={{ width: "75px", backgroundColor: "#7c4dff", height: "2px" }} />
              <p><a href="https://timesofindia.indiatimes.com/" className="text-white">Times of India</a></p>
              <p><a href="https://abcnews.go.com/" className="text-white">ABC News</a></p>
              <p><a href="https://www.foxnews.com/" className="text-white">FoxNews</a></p>
              <p><a href="https://www.cnbc.com/world/?region=world" className="text-white">CNBC</a></p>
              <p><a href="https://www.livemint.com/" className="text-white">Livemint</a></p>
              <p><a href="https://www.moneycontrol.com/s" className="text-white">Moneycontrol</a></p>
            </div>
            {/* Grid column */}

            {/* Grid column */}
            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
              {/* Links */}
              <h6 className="text-uppercase fw-bold">About Us</h6>
              <hr className="mb-4 mt-0 d-inline-block mx-auto" style={{ width: "95px", backgroundColor: "#7c4dff", height: "2px" }} />
              <p><a href="" className="text-white">Our Story</a></p>
              <p><a href="" className="text-white">Our Team</a></p>
              <p><a href="" className="text-white">Our Mission</a></p>
            </div>





            {/* Grid column */}

            {/* Grid column */}
            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
              {/* Links */}
              <h6 className="text-uppercase fw-bold">Contact Us</h6>
              <hr className="mb-4 mt-0 d-inline-block mx-auto" style={{ width: "115px", backgroundColor: "#7c4dff", height: "2px" }} />
              
              <p><i className="fas fa-envelope mr-3"></i> yashgaude77@gmail.com</p>
              
            </div>
            {/* Grid column */}
          </div>
          {/* Grid row */}
        </div>
      </section>
      {/* Section: Links */}

    

      {/* Copyright */}
      <div className="text-center p-3" style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}>
        © 2024 Copyright:
        <a className="text-white" href="#home">RapidRecap.com</a>
      </div>
      {/* Copyright */}
    </footer>
  );
}

export default Footer;




