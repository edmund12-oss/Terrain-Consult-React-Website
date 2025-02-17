import React, { useState } from "react";
import { Link } from "react-router-dom";
import terrainlogo from "../assets/terrain logo.png"
import terraintitlenew from "../assets/terraintitlenew.png"

const Servicedetails = () => {

    const [isActive, setIsActive] = useState(false);

    function toggleMenu() {
        setIsActive(!isActive);
    }

    function scrollTop() {
        window.scrollTo(0,0);
    }

    return (
    <div className="service-details-page">
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
                        <Link to="/ Contact"><i class="fa fa-question-circle" aria-hidden="true"></i></Link>
                    </div>

                </div>

            </header>
    <section id="service-details" className="service-details section">

            <div className="container">
                <div className="services-section-title">
                    <h1>Services</h1>
                    <ol>
                        <li><Link to="/">Home</Link></li>
                        <li>Services</li>
                    </ol>
                </div>
                    <div className="services-element">
                        <h3>Our Major specialties where we do have core competencies include.</h3>
                        <p></p>
                        <ul>
                            <li><i className="fa fa-check-circle" aria-hidden="true"></i> <span>Detailed topographic surveys for purposes of locating buildings and other facilities for Architects and Planners.</span></li>
                            <li><i className="fa fa-check-circle" aria-hidden="true"></i> <span>As built surveys for construction works.</span></li>
                            <li><i className="fa fa-check-circle" aria-hidden="true"></i> <span>Detailed topographic surveys for Physical planning/ layout schemes, for Physical planning projects.</span></li>
                            <li><i className="fa fa-check-circle" aria-hidden="true"></i> <span>Site layout/ setting out surveys for reserves/ plans/ schemes, plot, roads et al.</span></li>
                            <li><i className="fa fa-check-circle" aria-hidden="true"></i> <span>Cadastral surveys for land title processing purposes.</span></li>
                            <li><i className="fa fa-check-circle" aria-hidden="true"></i> <span>Processing of land titles for various individuals and organizations.</span></li>
                            <li><i className="fa fa-check-circle" aria-hidden="true"></i> <span>Site acquisition surveys for installation of GSM Telecommunications Equipment (masts).</span></li>
                            <li><i className="fa fa-check-circle" aria-hidden="true"></i> <span>Systematic surveys for compensation purposes.</span></li>
                            <li><i className="fa fa-check-circle" aria-hidden="true"></i> <span>GIS Analysis for choosing of most economically, viable routes e.g. for roads, power lines etc.</span></li>
                            <li><i className="fa fa-check-circle" aria-hidden="true"></i> <span>Boundary opening for development or dispute resolution purposes.</span></li>
                            <li><i className="fa fa-check-circle" aria-hidden="true"></i> <span>Feasibility studies for projects such as pipeline, resettlement optimum route survey, etc.</span></li>
                            <li><i className="fa fa-check-circle" aria-hidden="true"></i> <span>Route Designs e.g. for roads .</span></li>
                            <li><i className="fa fa-check-circle" aria-hidden="true"></i> <span>Specialized training and land related subjects/policies e.g. Land Act.</span></li>
                            <li><i className="fa fa-check-circle" aria-hidden="true"></i> <span>Management of compensation for (way lease) developmental projects such as road surveys and power line.</span></li>
                        </ul>
                        <p>
                        </p>
                        <p>
                        </p>
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

export default Servicedetails;