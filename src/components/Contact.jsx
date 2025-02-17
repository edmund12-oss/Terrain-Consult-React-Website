import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import terrainlogo from "../assets/terrain logo.png"
import terraintitlenew from "../assets/terraintitlenew.png"

const Contact = () => {

  const [isActive, setIsActive] = useState(false);

  function toggleMenu() {
     setIsActive(!isActive);
  }

  function scrollTop() {
    window.scrollTo(0,0);
  }

  return (
    <div>
      <header id="header" className="header">
                <div className="header-elements">
                    <div className="header-logo">
                    <Link to="/">
                     <img src={terrainlogo} className="terrain-icon" alt="Company Logo"></img>
                     <img src={terraintitlenew} className="terrain-icon2" alt="Company Name"></img> 
                    </Link>
                    </div>

                    {/*<i className="navicon fa fa-bars" aria-hidden="true"></i>*/}
                    <div className="header-element">
                    {/**/}
                        <nav className='navlinks'>
                          <Link to="/">Home</Link>
                          <Link to="/ About">About</Link>
                          <Link to="/ Services">Services</Link>
                          <Link to="/ Projects">Projects</Link>
                        </nav>
                    </div>

            <div className="hamburgher">
            {/*<button className="hamburgher-btn"  onClick={toggleMenu}>BTN</button>*/}
            {!isActive && (
           <i className="navicon fa fa-bars" aria-hidden="true" onClick={toggleMenu}></i>
)}
            {isActive && (
                <div className="hamburgher-links">
                    {/*<button className="hamburgher-close-btn" onClick={() => setIsActive(false)}>BTNX</button>*/}
                    <i className='navx fa fa-times' aria-hidden="true" onClick={() => setIsActive(false)}></i>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/ About">About</Link></li>
                        <li><Link to="/ Services">Services</Link></li>
                        <li><Link to="/ Projects">Projects</Link></li>
                    </ul>
                </div>
            )

            }

        </div>
   
                    <div className="header-question-icon">
                        <a href="#contact"><i class="fa fa-question-circle" aria-hidden="true"></i></a>
                    </div>

                </div>

            </header>
            <section id="contact" className="contact section">


<div className="container section-title">
    <div className="section-title-element">
        <h2>CONTACT <i className="fa fa-phone-square" aria-hidden="true"></i></h2>
    </div>
    <h3>For Any Inquiries Or Business, Contact Us Using The Information Below</h3>
</div>

<div className="terrain-map">
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d997.4393381889141!2d32.575559219430566!3d0.31674599207707427!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x177dbbccd96f875d%3A0xf22297c293caef9e!2sAmbassador%20House!5e0!3m2!1sen!2sus!4v1718101143897!5m2!1sen!2sus"></iframe>
</div>
<div className="contact-element">
<div className="info">
    <h3>Get in touch</h3>
    <div className="info-item">
        <div>
         <b><h4>Main Branch:</h4></b>
         <p><i className="fa fa-map-marker" aria-hidden="true"></i>AMBASSADOR HOUSE, Suite DSF#04;</p>
         <p><i className="fa fa-map-marker" aria-hidden="true"></i> Plot No. 56/60 Kampala Road</p> 
         <p><i className="fa fa-map-marker" aria-hidden="true"></i> P.O Box 179705 Kampala.</p>
         <p><i className="fa fa-phone-square" aria-hidden="true"></i> +256 767 655 978</p>
         <b><h4>Hoima Branch:</h4></b>
         <p><i className="fa fa-map-marker" aria-hidden="true"></i> Plot 52 Fort Portal Road, Mogas Building</p>
         <p><i className="fa fa-phone-square" aria-hidden="true"></i> +256 712 655 502 /  0392 967 406 </p>
        </div>
    </div>
    <div className="info-item">
        <div>
         <h4>Email:</h4>
         <p><i className="fa fa-envelope" aria-hidden="true"></i>terrainconsult2003@gmail.com</p>
         <p><i className="fa fa-map-marker" aria-hidden="true"></i>terrain_consult@yahoo.com</p>
        </div>
    </div>

</div>
</div>
</section>

<footer id="footer" className="footer">
<div className="footer-top">

<div className="footer-elements">
<div className="footer-element">
<a href="index.html" className="logo">
    <span className="sitename">Terrain Consult Ltd</span>

</a>
<div className="footer-contact">
    <p>Ambassador house</p>
    <p>Along Kampala road</p>
    <p className="mt-3"><strong>Phone:</strong> <span>+256 701 601 604</span></p>
    <p><strong>Email:</strong> <span>terrain_consult@yahoo.com</span></p>
</div>
</div>

<div className="footer-element">
<h4>Useful Links</h4>
<ul>
    <li><Link to="/">Home</Link></li>
    <li><Link to="/ About">About</Link></li>
    <li><Link to="/ Services">Services</Link></li>
    <li><Link to="/ Projects">Projects</Link></li>
</ul>
</div>
</div>
</div>

<div className="social-links">
<div className="social-link">
<strong><span>© Terrain Consult | 2024 </span></strong>
</div>
<div className="social-link">
<a href="https://www.linkedin.com/company/terrain-consult/?originalSubdomain=ug"><strong><span>LinkedIn</span></strong></a>
</div>         
</div>
</footer>

<button className="scroll-top-icon" onClick={scrollTop}><i className="fa fa-chevron-circle-up" aria-hidden="true"></i></button>

</div>


  );
};

export default Contact;