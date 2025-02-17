import React from "react";

const Footer = () => {
    return (
        <footer id="footer" className="footer">

    <div className="footer-top">
      <div className="container">
        <div className="row gy-4">
          <div className="col-lg-4 col-md-6 footer-about">
            <a href="index.html" className="logo d-flex align-items-center">
            <span className="sitename">Terrain Consult Ltd</span>
              
            </a>
            <div className="footer-contact pt-3">
              <p>Ambassador house</p>
              <p>Along Kampala road</p>
              <p className="mt-3"><strong>Phone:</strong> <span>+256 701 601 604</span></p>
              <p><strong>Email:</strong> <span>terrain_consult@yahoo.com</span></p>
            </div>
          </div>

          <div className="col-lg-2 col-md-3 footer-links">
            <h4>Useful Links</h4>
            <ul>
              <li><a href="index.html">Home</a></li>
              <li><a href="about.html">About</a></li>
              <li><a href="service-details.html">Services</a></li>
              <li><a href="projects.html">Projects</a></li>
              
            </ul>
          </div>
        </div>
      </div>
    </div>

    <div className="copyright text-center">
      <div className="container d-flex flex-column flex-lg-row justify-content-center justify-content-lg-between align-items-center">

        <div className="d-flex flex-column align-items-center align-items-lg-start">
          <div>
            <strong><span>© Terrain Consult | 2024 </span></strong>
          </div>
          <div className="credits">
          </div>
        </div>

        <div className="social-links order-first order-lg-last mb-3 mb-lg-0">
          <a href=""><i className="bi bi-twitter-x"></i></a>
          <a href=""><i className="bi bi-facebook"></i></a>
          <a href=""><i className="bi bi-instagram"></i></a>
          <a href="https://www.linkedin.com/company/terrain-consult/?originalSubdomain=ug"><i className="bi bi-linkedin"></i></a>
        </div>

      </div>
    </div>

  </footer>
    );

};

export default Footer;