import React from 'react';

const Header = () => {
  return (
  <header id="header" className="header d-flex align-items-center sticky-top">
    <div className="container-fluid position-relative d-flex align-items-center justify-content-between">

      <a href="index.html" className="logo d-flex align-items-center me-auto me-xl-0">
       <img src="terrain logo.png" className="terrain-icon"></img>
       <img src="terraintitlenew.png" className="terrain-icon2"></img>
      </a>
      
      <i className="navicon d-xl-none bi bi-list"></i>
      <nav className="navlinks" id="navlinks">
        <a href="index.html">Home</a>
        <a href="about.html">About</a>
        <a href="service-details.html">Services</a>
        <a href="projects.html">Projects</a>
      </nav>
    </div>
  </header>

  );
};

export default Header;
