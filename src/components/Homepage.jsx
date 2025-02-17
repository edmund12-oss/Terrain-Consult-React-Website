import React from "react";
import { Link } from "react-router-dom";
import testimonialsbg from "../assets/terrain-family.JPG";
import terrainlogo from "../assets/terrain logo.png"
import terraintitlenew from "../assets/terraintitlenew.png"
import molhud from "../assets/molhud.jpg"
import naro from "../assets/naro.png"
import nssf from "../assets/nssf.png"
import unra from "../assets/UNRA.gif"
import mtn from "../assets/mtn.webp"
import slaac1 from "../assets/slaac1.jpeg"
import eryong_shyaka from "../assets/eryong_shaka.jpeg"
import joyce01 from "../assets/joyce01.JPG"
import simon01 from "../assets/simon01.JPG"
import imgone from "../assets/img_one.JPG"
import imgtwo from "../assets/img_two.JPG"
import imgthree from "../assets/img_three.JPG"
import imgfour from "../assets/img_four.jpg"
import { useState } from "react";


function Homepage() {

    const [isActive, setIsActive] = useState(false);

    function toggleMenu() {
       setIsActive(!isActive);
    }

    function scrollTop() {
        window.scrollTo(0,0);
    }

    const images = [
        imgone,
        imgtwo,
        imgthree,
        imgfour,
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    function handleNext() {
        setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
    };

    function handlePrev() {
        setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
    }

    const [isOpen, setIsOpen] = useState("mission-event");

    const handleMission = () => setIsOpen("mission-event");
    const handleVision = () => setIsOpen("vision-event");
    const handleObjective = () => setIsOpen("objective-event");

    return(
        <div className="home">
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

            <section id="testimonials" className="testimonials section">
                <div className="container section-title">
                    <strong><h1>Welcome to <br></br><span className="orange">Terrain</span> Consult</h1></strong>
                     <p>One Of The Leading Land Surveying Companies in Uganda.</p>
                    <div className="home-buttons">
                        <Link to="/ Services">
                        <div className="home-button">
                            <span>Our Services </span>
                        </div>
                        </Link>
                        <a href="#contact">
                        <div className="home-button darker">
                            <span>Contact Us</span>
                        </div>
                        </a>
                    </div>
                </div>


                <img src={testimonialsbg} class="testimonials-bg" alt=""></img>


            </section>

          
            <section>
            <div className="container section-title" data-aos="fade-up">
                    <div className="section-title-element">
                        <h2>ABOUT US <i className="fa fa-search-plus" aria-hidden="true"></i></h2>
                        
                    </div>
                    <h3>Who Are We?</h3>
                </div>
                <div className="about-home-page" data-aos="fade-up">
                    <div className="about-home-item">
                        <img src={images[currentIndex]}></img>
                        <div className="slide-icons">
                        <i className="fa fa-chevron-circle-left" aria-hidden="true" onClick={handlePrev}></i>
                        <i className="fa fa-chevron-circle-right" aria-hidden="true" onClick={handleNext}></i>
                        </div>
                    </div>
                    <div className="about-home-item balance">
                        <h3><i className="fa fa-info-circle" aria-hidden="true"></i> About Terrain Consult</h3>
                        <p>Terrain Consult is a professional consultancy, registered as a partnership in Uganda offering Engineering and Cadastral surveying services, planning and Environmental consultancy services, geographical information sysyems services and analysis established on 16th December, 2003.</p>
                        <Link to="/ About" className="about-home-button">Read more</Link>
                    </div>
                </div>


                {/* Mission, Vision, and Objective*/}
                <div className="purpose">
                  <div className="purpose-item" onClick={handleMission}>
                    <div className={isOpen === "mission-event" ? "active" : ""}>
                    <p>Mission <i className="fa fa-shield" aria-hidden="true"></i></p>
                    </div>
                  </div>
                  <div className="purpose-item" onClick={handleVision}>
                    <div className={isOpen === "vision-event" ? "active" : ""}>
                    <p>Vision <i className="fa fa-eye" aria-hidden="true"></i></p>
                    </div> 
                  </div>
                  <div className="purpose-item" onClick={handleObjective}>
                    <div className={isOpen === "objective-event" ? "active" : ""}>
                    <p>Objective <i className="fa fa-bullseye" aria-hidden="true"></i></p>
                    </div>
                  </div>
                </div>
                {isOpen === "mission-event" && 
                <div className="purpose-content">
                    <h3>Terrain Consult's Mission</h3>
                    <p>To deliver high-quality, reliable, and timely surveying and geomatics services through innovative techniques to exceed expectations of clientele while promoting sustainable development and responsible land use practices.</p>
                </div>
                }

                {isOpen === "vision-event" && 
                <div className="purpose-content">
                    <h3>Terrain Consult's Vision</h3>
                    <p>To be the firm of choice for surveying and geomatic solutions.</p>
                </div>
                }

               {isOpen === "objective-event" && 
                <div className="purpose-content">
                    <h3>Terrain Consult's Objective</h3>
                    <p>To maintain the highest level of accuracy and precision in all our surveying services, using cutting-edge technology and techniques.</p>
                </div>
                }
            </section>
           

            <section>
                <div className="section-title" data-aos="fade-up">
                    <div className="section-title-element">
                        <h2>SERVICES  <i className="fa fa-cogs" aria-hidden="true"></i></h2> 
                    </div>
                    <h3>The Services Offered At Terrain Consult</h3>
                </div>

            <div className="service-items">
                <div className="service-item">
                        <div className="service-icon">
                            <i className="fa fa-object-group" aria-hidden="true"></i>
                        </div>
                        <div className="service-name">
                            <h4>Cadastral Surveying</h4>
                            <span>Cadastral surveying is a specialized field of land surveying that focuses on the legal boundaries of properties. It involves creating and maintaining detailed records of land ownership, boundaries, and subdivisions, typically for legal, administrative, and property management purposes.</span>
                        </div>   
                </div>

                <div className="service-item">
                        <div className="service-icon">
                            <i className="fa fa-road" aria-hidden="true"></i> 
                        </div>
                        <div className="service-name">
                            <h4>Engineering Surveying</h4>
                            <span>Engineering surveying, also known as construction surveying or civil engineering surveying, is a branch of surveying that focuses on the precise measurement and mapping of construction sites and engineering projects.</span>
                        </div>
                </div>

                <div className="service-item">
                        <div className="service-icon">
                            <i className="fa fa-globe" aria-hidden="true"></i>
                        </div>
                        <div className="service-name">
                            <h4>GIS Analysis</h4>
                            <span>Geographic Information System (GIS) analysis involves the use of software and tools to collect, manage, analyze, and visualize spatial or geographic data. GIS analysis helps in understanding patterns, relationships, and trends in geographic space.</span>
                        </div>
                </div>

                <div className="service-item">
                        <div className="service-icon">
                            <i className="fa fa-map" aria-hidden="true"></i>
                        </div>
                        <div className="service-name">
                            <h4>Topographic Surveying</h4>
                            <span>Topographic surveying is the practice of measuring and mapping the features and elevations of a given piece of land. It is a crucial process in the fields of civil engineering, construction, architecture, and land development.</span>
                        </div>
                </div>

                <div className="service-item">
                        <div className="service-icon">
                            <i className="fa fa-search-plus" aria-hidden="true"></i>
                        </div>
                        <div className="service-name">
                            <h4>Remote Sensing Analysis</h4>
                            <span>Remote sensing analysis is the process of collecting, interpreting, and utilizing data obtained from a distance, typically using satellite or aerial sensors, to observe and measure various characteristics of the Earth's surface and atmosphere.</span>
                        </div>
                </div>

                <div className="service-item">
                        <div className="service-icon">
                            <i className="fa fa-book" aria-hidden="true"></i>
                        </div>
                        <div className="service-name">
                            <h4>Environmental Consultancy</h4>
                            <span>Planning & Environmental Consultany refers to specialized services that assist in the management and development of land and environmental resources. These consultancies integrate planning, environmental, and surveying expertise to provide comprehensive solutions for land use and development projects.</span>
                        </div>
                </div>
            </div>

            </section>

            <section>
                <div className="container section-title" data-aos="fade-up">
                    <div className="section-title-element">
                        <h2>TRUSTED BY; <i className="fas fa-handshake" aria-hidden="true"></i></h2>
                        
                    </div>
                    <h3>Our Esteemed Clientele</h3>
                </div>
                <div className="clientele">
                    <div className="client-item">
                        <img src={molhud} alt="Ministry Of Lands Housing and Urban Development logo"></img>
                    </div>

                    <div className="client-item">
                        <img src={naro} alt="National Agricultural Research Organisation logo"></img>
                    </div>

                    <div className="client-item">
                        <img src={nssf} alt="National Social Security Fund logo"></img>
                    </div>

                    <div className="client-item">
                        <img src={mtn} alt="Mtn logo"></img>
                    </div>

                    <div className="client-item">
                        <img src={unra} alt="Uganda National Roads Authority logo"></img>
                    </div>
                </div>


            </section>

            <section className="recent-projects-section">

                <div className="container section-title" data-aos="fade-up">
                    <div className="section-title-element">
                        <h2>RECENT PROJECTS  <i className="fa fa-tasks" aria-hidden="true"></i></h2>                       
                    </div>
                    <h3>Our Latest Projects</h3>
                </div>
            <div className="recent-projects">

                <div className="recent-project">
                    <img src={slaac1} className="recent-projects-img" />
                    <div className="text-block">CADASTRAL SURVEYING</div>
                    <h4>Systematic Land Adjudication And Certification (SLAAC) Project</h4>
                    <div className="project-location-year">
                    <p><i className="fa fa-map-pin" aria-hidden="true"></i> Sheema, Uganda</p>
                    <p><i className="fa fa-calendar" aria-hidden="true"></i> 2024</p>
                    </div>
                </div>

                <div className="recent-project">
                    <img src={eryong_shyaka} className="recent-projects-img" />
                    <div className="text-block">CADASTRAL SURVEYING</div>
                    <h4>Boundary opening survey of NARO land and emplacement of pillars</h4>
                    <div className="project-location-year">
                    <p><i className="fa fa-map-pin" aria-hidden="true"></i> Sheema, Uganda</p>
                    <p><i className="fa fa-calendar" aria-hidden="true"></i> 2022</p>
                    </div>
                </div>
                <Link to="/ Projects">
                <div className="recent-projects-button-element ">
                    <span>Explore Projects</span>
                </div>
                </Link>
            </div>
            </section>

            
        <section>
                <div className="container section-title" data-aos="fade-up">
                    <div className="section-title-element">
                        <h2>OUR CORE VALUES  <i className="fa fa-bookmark" aria-hidden="true"></i></h2>                      
                    </div>
                    <h3>The Core Values Our Work Here At Terrain Consult Is Based On</h3>
                </div>  

                        <div className="values-items">
                            <div className="values-item">
                                <div className="icon"><i className="fa fa-check-square" aria-hidden="true"></i></div>
                                <h4><a href="" className="stretched-link">Integrity and Professionalism</a></h4>
                                <p>We are committed to delivering accurate and professional land surveying services with the highest standards of integrity.</p>
                            </div>
                                   
                            <div className="values-item">
                                <div className="icon"><i className="fa fa-bullseye" aria-hidden="true"></i></div>
                                <h4><a href="" className="stretched-link">Collaborative and Supportive Teamwork Environment</a></h4>
                                <p>Our team of skilled surveyors work together to provide accurate and efficient land surveying solutions.</p>
                            </div>
                                          
                            <div className="values-item">
                                <div className="icon"><i class="fa fa-user-circle" aria-hidden="true"></i></div>
                                <h4><a href="" className="stretched-link">Honest and Transparent business practices</a></h4>
                                <p>We prioritise open communication with our clients throughout the surveying process.</p>
                            </div>
                        
                            <div className="values-item">
                                <div className="icon"><i className="fa fa-thumbs-up" aria-hidden="true"></i></div>
                                <h4><a href="" className="stretched-link">Customer Focus</a></h4>
                                <p>Our clients are at the heart of everything we do.</p>
                            </div>
                        </div>
        </section>
    
            <section id="team" className="team section">


                <div className="container section-title">
                    <div className="section-title-element">
                        <h2>OUR CORE TEAM <i className="fa fa-users" aria-hidden="true"></i></h2>
                    </div>
                    <h3>Meet The Owners Of Terrain Consult</h3>
                </div>
                <div className="team-partner">
                    <div className="partner">
                        <img src={joyce01} className="partner-img" alt="" />
                        <h4>MADAM JOYCE GUNZE HABAASA</h4>
                        <p>Partner / Registered Surveyor</p>
                    </div>

                    <div className="partner">
                        <img src={simon01} className="partner-img" alt="" />
                        <h4>IRIMA SIMON PETER</h4>
                        <p>Partner / Registered Surveyor</p>
                    </div>
                </div>
            </section>

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
                export default Homepage;