import React from "react";
import { Link } from "react-router-dom";
import terrainlogo from "../assets/terrain logo.png"
import terraintitlenew from "../assets/terraintitlenew.png"
import slaac1 from "../assets/slaac1.jpeg"
import eryong_shyaka from "../assets/eryong_shaka.jpeg"
import building from "../assets/building.jpg"
import hoima from"../assets/hoima.jpg"
import totalstation from "../assets/total-station.jpeg"
import ntungamo from "../assets/ntungamo.jpg"
import topo from "../assets/topo.jpeg"
import saudi from "../assets/saudi.webp"
import arua from "../assets/arua.jpg"
import mtn from "../assets/mtn.webp"
import { useState } from "react";

const Allprojects = () => {
   
    const [isActive, setIsActive] = useState(false);

    function toggleMenu() {
        setIsActive(!isActive);
    }

    function scrollTop() {
        window.scrollTo(0,0);
    }

    return (

      <div className="allprojects-page">
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
  
  <section>
    
          <div className="projects-section-title">
                    <h1>Projects</h1>
                    <ol>
                        <li><Link to="/">Home</Link></li>
                        <li>Projects</li>
                    </ol>
                </div>

          <div className="projects">
                <div className="project-element">
                    <img src={slaac1} className="projects-img" />
                    <div className="text-block">CADASTRAL SURVEYING</div>
                    <h4>Systematic Land Adjudication And Certification (SLAAC) Project</h4>
                    <div className="project-location-year">
                      <div className="location">
                      <p><i className="fa fa-map-pin" aria-hidden="true"></i> Sheema, Uganda</p>
                      </div>
                      <div className="year">
                      <p><i className="fa fa-calendar" aria-hidden="true"></i> 2024</p>
                      </div>
                    </div>
                </div>

                <div className="project-element">
                    <img src={eryong_shyaka} className="projects-img" />
                    <div className="text-block">CADASTRAL SURVEYING</div>
                    <h4>Boundary opening survey of NARO land and emplacement of pillars</h4>
                    <div className="project-location-year">
                      <div className="location">
                      <p><i className="fa fa-map-pin" aria-hidden="true"></i> Apac, Uganda</p>
                      </div>
                      <div className="year">
                      <p><i className="fa fa-calendar" aria-hidden="true"></i> 2022</p>
                      </div>
                    </div>
                </div>

                <div className="project-element">
                    <img src={building} className="projects-img" />
                    <div className="text-block">ENGINEERING SURVEYING</div>
                    <h4>Consultancy services for surveying of N.S.S.F lubowa Housing project land under Seyani Brothers’ Ltd at Lubowa</h4>
                    <div className="project-location-year">
                      <div className="location">
                      <p><i className="fa fa-map-pin" aria-hidden="true"></i> Lubowa, Uganda</p>
                      </div>
                      <div className="year">
                      <p><i className="fa fa-calendar" aria-hidden="true"></i> 2019</p>
                      </div>
                    </div>
                </div>

                <div className="project-element">
                    <img src={hoima} className="projects-img" />
                    <div className="text-block">CADASTRAL SURVEYING</div>
                    <h4>Re-settlement Action Plan and Land Acquisition for land for the Hoima – Mityana Oil Pipeline</h4>
                    <div className="project-location-year">
                      <div className="location">
                      <p><i className="fa fa-map-pin" aria-hidden="true"></i> Hoima, Uganda</p>
                      </div>
                      <div className="year">
                      <p><i className="fa fa-calendar" aria-hidden="true"></i> 2016</p>
                      </div>
                    </div>
                </div>

                <div className="project-element">
                    <img src={totalstation} className="projects-img" />
                    <div className="text-block">CADASTRAL & ENGINEERING SURVEYING</div>
                    <h4>Topographic survey and boundary opening of 23 sites for Land Offices under the Private Sector Foundation</h4>
                    <div className="project-location-year">
                      <div className="location">
                      <p><i className="fa fa-map-pin" aria-hidden="true"></i> Not Specified</p>
                      </div>
                      <div className="year">
                      <p><i className="fa fa-calendar" aria-hidden="true"></i> 2015</p>
                      </div>
                    </div>
                </div>

                <div className="project-element">
                    <img src={ntungamo} className="projects-img" />
                    <div className="text-block">ENVIRONMENTAL CONSULTANCY</div>
                    <h4>Design reconstruction and training supplies supervision at four technical institutes</h4>
                    <div className="project-location-year">
                    <div className="location">
                      <p><i className="fa fa-map-pin" aria-hidden="true"></i> Agago, Ntungamo, Kayunga, Tororo</p>
                      </div>
                      <div className="year">
                      <p><i className="fa fa-calendar" aria-hidden="true"></i> 2015</p>
                      </div>
                    </div>
                </div>

                <div className="project-element">
                    <img src={topo} className="projects-img" />
                    <div className="text-block">ENGINEERING & CADASTRAL SURVEYING</div>
                    <h4>Topographic and cadastral project and feasibility studies of 10 Hydropower  Dams</h4>
                    <div className="project-location-year">
                      <div className="location">
                      <p><i className="fa fa-map-pin" aria-hidden="true"></i> Kabarole, Kasese, Rukangizi, Mitoona</p>
                      </div>
                      <div className="year">
                      <p><i className="fa fa-calendar" aria-hidden="true"></i> 2014</p>
                      </div>
                    </div>
                </div>

                <div className="project-element">
                    <img src={saudi} className="projects-img" />
                    <div className="text-block">CADASTRAL SURVEYING</div>
                    <h4>Boundary opening and detailed topographic survey for plot 7 Kololo Hill Road for the Royal Saudi Embassy</h4>
                    <div className="project-location-year">
                      <div className="location">
                      <p><i className="fa fa-map-pin" aria-hidden="true"></i> Kololo</p>
                      </div>
                      <div className="year">
                      <p><i className="fa fa-calendar" aria-hidden="true"></i> 2011</p>
                      </div>
                    </div>
                </div>

                <div className="project-element">
                    <img src={arua} className="projects-img" />
                    <div className="text-block">CADASTRAL SURVEYING</div>
                    <h4>Land acquisition for road construction for Vurra-Arua-Koboko-Oraba road (93km) for UNRA</h4>
                    <div className="project-location-year">
                      <div className="location">
                      <p><i className="fa fa-map-pin" aria-hidden="true"></i> Arua, Koboko, Oraba</p>
                      </div>
                      <div className="year">
                      <p><i className="fa fa-calendar" aria-hidden="true"></i> 2011</p>
                      </div>
                    </div>
                </div>

                <div className="project-element">
                    <img src={mtn} className="projects-img" />
                    <div className="text-block">CADASTRAL SURVEYING</div>
                    <h4>Site acquisition/Processing of various land titles for MTN mast sites</h4>
                    <div className="project-location-year">
                      <div className="location">
                      <p><i className="fa fa-map-pin" aria-hidden="true"></i> Kampala, Uganda</p>
                      </div>
                      <div className="year">
                      <p><i className="fa fa-calendar" aria-hidden="true"></i> 2009</p>
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

export default Allprojects;