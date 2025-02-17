import React from "react";
import { Link } from "react-router-dom";
import terrainlogo from "../assets/terrain logo.png"
import terraintitlenew from "../assets/terraintitlenew.png"
import richard01 from "../assets/richard01.JPG"
import aderrick01 from "../assets/aderrick01.JPG"
import kigoye01 from "../assets/kigoye01.JPG"
import joyce01 from "../assets/joyce01.JPG"
import simon01 from "../assets/simon01.JPG"
import derrick_k01 from "../assets/derrick_k01.JPG"
import stephen01 from "../assets/stephen01.JPG"
import marvin01 from "../assets/marvin01.JPG"
import isima01 from "../assets/isima01.JPG"
import anjo01 from "../assets/anjo01.JPG"
import ategeka from "../assets/ATEGEKA.jpg"
import alvin from "../assets/alvin.JPG"
import shyaka01 from "../assets/shyaka01.JPG"
import gerald01 from "../assets/gerald01.JPG"
import deus01 from "../assets/deus01.JPG"
import phillip01 from "../assets/phillip01.JPG"
import jeremiah01 from "../assets/jeremiah01.JPG"
import bwete01 from "../assets/bwete01.JPG"
import derricke01 from "../assets/derricke01.JPG"
import edmund from "../assets/edmund.jpg"
import jonathan01 from "../assets/jonathan01.JPG"
import erina01 from "../assets/erina01.jpg"
import ronald01 from "../assets/ronald01.JPG"
import wyclef01 from "../assets/wyclef01.JPG"
import lule from "../assets/lule.jpeg"
import { useState } from "react";
import img_rt_23_one from "../assets/rt_23_one.JPG"
import img_rt_23_two from "../assets/rt_23_two.JPG"
import img_rt_23_three from "../assets/rt_23_three.JPG"
import img_rt_24_one from "../assets/rt_24_one.JPG"
import img_rt_24_two from "../assets/rt_24_two.JPG"
import img_rt_24_three from "../assets/rt_24_three.JPG"

const Aboutpage = () => {


  const images = [
    img_rt_23_three,
    img_rt_23_two,
    img_rt_23_one,
  ];

  const images_23 = [
    img_rt_24_one,
    img_rt_24_two,
    img_rt_24_three,
    ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentNumber, setCurrentNumber] = useState(0);

  function nextBtn() {
    setCurrentNumber((prevNumber) => 
      prevNumber === images_23.length - 1 ? 0 : prevNumber + 1
    );
  };

  function prevBtn() {
    setCurrentNumber((prevNumber) =>
    prevNumber === 0 ? images.length - 1 : prevNumber - 1
    );
  };

  function handleNext() {
    setCurrentIndex((prevIndex) => 
    prevIndex === images.length - 1 ? 0 : prevIndex + 1 );
  };

  function handlePrevious() {
    setCurrentIndex((prevIndex) => 
    prevIndex === 0 ? images.length - 1 : prevIndex - 1);
  };


  const [isActive, setIsActive] = useState(false);

  function toggleMenu() {
     setIsActive(!isActive);
  }

  function scrollTop() {
    window.scrollTo(0,0);
  }

    return (
    <div className="about">
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
                <div className="about-html-section-title">
                    <h1>About Us</h1>
                    <ol>
                        <li><Link to="/">Home</Link></li>
                        <li>About</li>
                    </ol>
                </div>
                <div className="about-html-container">

                    <div className="about-html-content">
                        <h3>Who Are We?</h3>
                        <p>Terrain Consult is a professional consultancy, registered as a partnership in Uganda offering Engineering and Cadastral surveying services, planning and Environmental consultancy services, geographical information sysyems services and analysis established on 16th December, 2003. Terrain Consult is registered as a business name with its surveyors registered with professional bodies, the Surveyors Registration Board (SRB) and the Institution of Surveyors of Uganda (ISU).The firm has two fully furnished offices, with one located in Ambassador House on Kampala road in Kampala acting as a headquarters and a branch office on Mogas House on Fort Portal road, Hoima town.</p>
                    </div>
                </div>
            
        </section>
        <section>
                <div className="count-box-container">
    
                                <div className="count-box">
                                    <div className="count-box-icon">
                                    <i className="fa fa-thumbs-up" aria-hidden="true"></i>
                                    </div>
                                    <div className="count-box-content">
                                    <span className="count" data-target="1000">0</span><span>+</span>
                                    <p>Happy Clients</p>
                                    </div>
                                </div>
                            
                                <div className="count-box">
                                    <div className="count-box-icon">
                                    <i className="fa fa-book" aria-hidden="true"></i>
                                    </div>
                                    <div className="count-box-content">
                                    <span className="count" data-target="1000">0</span><span>+</span>
                                    <p>Projects</p>
                                    </div>
                                </div>
            
                                <div className="count-box">
                                    <div className="count-box-icon">
                                    <i className="fa fa-calendar" aria-hidden="true"></i>
                                    </div>
                                    <div className="count-box-content">
                                    <span className="newcount" yoe-data-target="21">0</span>
                                    <p>Years of experience</p>
                                    </div>
                                </div>  
                </div>
            </section><section>
                <div className="about-html">
                    <div className="container section-title">
                        <div className="section-title-element">
                            <h2>ACTIVITIES <i className="fa fa-line-chart" aria-hidden="true"></i></h2>
                        </div>
                        <h3>Team Building Engagements</h3>
                    </div>

                    <div className="about-html-container">
                        <div className="about-html-content">
                            <h3></h3>
                            <p>As a usual culture at the end of every year, we get together as Terrain Consult staff to have a dedicated time for team building inclusive of vast activities such as sports, indoor games and many more. This enhances the spirit of teamwork amongst us which improves the efficiency when executing projects. It has always been a pleasure serving you and we believe more efficiency in project execution shall be achieved in this new year. Happy New Year.</p>
                        </div>
                    </div>
                </div>
                <div className="team-activities">
                  <h3>Retreat- <span style={{color: "#ff4a17"}}>2023</span></h3>
                  <div className="team-activity">
                  <i  className="fa fa-chevron-circle-left" aria-hidden="true" onClick={handlePrevious}></i>
                  <img src={images[currentIndex]}></img>
                  <i  className="fa fa-chevron-circle-right" aria-hidden="true" onClick={handleNext}></i>
                  </div>
                  <h3>Retreat-<span style={{color: "#ff4a17"}}>2024</span></h3>
                  <div className="team-activity">
                  <i  className="fa fa-chevron-circle-left" aria-hidden="true" onClick={prevBtn}></i>
                  <img src={images_23[currentNumber]}></img>
                  <i  className="fa fa-chevron-circle-right" aria-hidden="true" onClick={nextBtn}></i>
                  </div>
                </div>
            </section>
            
            <section>
                <div className="about-html">

                    <div className="container section-title">
                        <div className="section-title-element">
                            <h2>COMPANY DOCUMENTS <i className="fa fa-file" aria-hidden="true"></i></h2>
                        </div>
                        <h3>Documents That Prove The Company's Validity</h3>
                    </div>

                    <div className="about-html-container">
                        <div className="about-html-content">
                            <h3></h3>
                            <p>i.	Practicing  Certificate </p>
                            <p>ii. Certificate of Registration </p>
                            <p>iii. VAT Registration Certificate  </p>
                            <p>iv. Powers of attorney </p>
                            <p>v. Company Registration Certificate </p>
                            <p>vi. Tax Clearance  Certificate </p>
                        </div>
                    </div>
                </div>
            </section><section>
                <div className="about-html">
                    <div className="container section-title">
                        <div className="section-title-element">
                            <h2>PERSONNEL AND EXPERIENCE <i className="fa fa-users" aria-hidden="true"></i></h2> 
                        </div>
                        <h3>The Scope Of Our Technical Team </h3>
                    </div>

                    <div className="about-html-container">

                        <div className="about-html-content">
                            <h3></h3>
                            <p>The main staff involved in executing consultancy services fall under three categories;</p>
                            <p>1.	Lead Consultants/ Partners</p>
                            <p>2.	Senior Land surveyors</p>
                            <p>3. Senior Land Valuers</p>
                            <p>4.	Surveyors </p>
                            <p>5.	Other Technical and support staff</p>
                        </div>
                    </div>
                </div>

            </section>
            
            
            <section>
            <div className="container section-title">
                        <div className="section-title-element">
                            <h2>COMPANY STAFF <i className="fa fa-users" aria-hidden="true"></i></h2> 
                        </div>
                        <h3>Meet Our Team</h3>
                    </div>
       <div className="team-members">
        <div className="team-member">
         <img src={joyce01} className="team-member-img" alt=""/>
         <h4>MADAM JOYCE GUNZE HABAASA</h4>
         <p>Partner / Registered Surveyor</p>
        </div>
          
        <div className="team-member">
         <img src={simon01} className="team-member-img" alt=""/>
         <h4>IRIMA SIMON PETER</h4>
         <p>Partner / Registered Surveyor</p>
       </div>  

        <div className="team-member">
         <img src={richard01} className="team-member-img" alt=""/>
         <h4>BAGONZA RICHARD</h4>
         <p>Senior Surveyor</p>
       </div>  

        <div className="team-member">
         <img src={aderrick01} className="team-member-img" alt=""/>
         <h4>AGABA A DERRICK</h4>
         <p>Registered Surveyor</p>
       </div>  
        
       <div className="team-member">
         <img src={kigoye01} className="team-member-img" alt=""/>
         <h4>KIGOYE YUSUFU</h4>
         <p>Registered Surveyor</p>
       </div>  

       <div className="team-member">
         <img src={derrick_k01} className="team-member-img" alt=""/>
         <h4>KAMBUGU DERRICK COSMOS</h4>
         <p>Senior Surveyor</p>
       </div>  

       <div className="team-member">
         <img src={stephen01} className="team-member-img" alt=""/>
         <h4>KAKANDE STEVEN</h4>
         <p>Senior Surveyor</p>
       </div>  

       <div className="team-member">
         <img src={marvin01} className="team-member-img" alt=""/>
         <h4>KAWERE MARVIN</h4>
         <p>Surveyor</p>
       </div>  

       <div className="team-member">
         <img src={isima01} className="team-member-img" alt=""/>
         <h4>SSENINDE ISMAEL</h4>
         <p>Surveyor</p>
       </div> 

       <div className="team-member">
         <img src={anjo01} className="team-member-img" alt=""/>
         <h4>ANJO ABRAHAM</h4>
         <p>Surveyor</p>
       </div> 

       <div className="team-member">
         <img src={ategeka} className="team-member-img" alt=""/>
         <h4>ATEGEKA FREDRICK</h4>
         <p>Surveyor</p>
       </div> 

       <div className="team-member">
         <img src={alvin} className="team-member-img" alt=""/>
         <h4>MUSINGUZI ALVIN</h4>
         <p>Surveyor</p>
       </div> 

       <div className="team-member">
         <img src={shyaka01} className="team-member-img" alt=""/>
         <h4>SHYAKA THIERY</h4>
         <p>Surveyor</p>
       </div> 

       <div className="team-member">
         <img src={gerald01} className="team-member-img" alt=""/>
         <h4>ATUHURA GERALD</h4>
         <p>Surveyor</p>
       </div> 

       <div className="team-member">
         <img src={deus01} className="team-member-img" alt=""/>
         <h4>ASIIMWE DEUSDEDIT</h4>
         <p>Surveyor</p>
       </div> 

       <div className="team-member">
         <img src={phillip01} className="team-member-img" alt=""/>
         <h4>SSEMIGGA PHILIP AARON</h4>
         <p>Surveyor</p>
       </div> 

       <div className="team-member">
         <img src={jeremiah01} className="team-member-img" alt=""/>
         <h4>KIMBUGWE JEREMIAH</h4>
         <p>Surveyor</p>
       </div> 

       <div className="team-member">
         <img src={bwete01} className="team-member-img" alt=""/>
         <h4>BWETE CHRISTOPHER</h4>
         <p>Surveyor</p>
       </div> 

       <div className="team-member">
         <img src={derricke01} className="team-member-img" alt=""/>
         <h4>ERYONG DERRICK</h4>
         <p>Surveyor</p>
       </div> 

       <div className="team-member">
         <img src={edmund} className="team-member-img" alt=""/>
         <h4>MBONYE EDMUND NKEZZA</h4>
         <p>Surveyor</p>
       </div> 

       <div className="team-member">
         <img src={jonathan01} className="team-member-img" alt=""/>
         <h4>KIRABIRA JONATHAN</h4>
         <p>Surveyor</p>
       </div> 

       <div className="team-member">
         <img src={erina01} className="team-member-img" alt=""/>
         <h4>MBABAZI ERINAH</h4>
         <p>Administrative Assistant</p>
       </div> 


       <div className="team-member">
         <img src={ronald01} className="team-member-img" alt=""/>
         <h4>KISEMBO RONALD</h4>
         <p>Administrative Assistant</p>
       </div> 

       <div className="team-member">
         <img src={wyclef01} className="team-member-img" alt=""/>
         <h4>SETYABULE WYCLIFF</h4>
         <p>Chainman/driver</p>
       </div> 

       <div className="team-member">
         <img src={lule} className="team-member-img" alt=""/>
         <h4>LULE JULIUS</h4>
         <p>Chainman/driver</p>
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

export default Aboutpage;