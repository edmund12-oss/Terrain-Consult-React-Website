import React from "react";

const recentProjects = () => {
    return (
        <section className="recent-projects-section">

        <div className="container section-title" data-aos="fade-up">
          <div className="section-title-element">
           <h2>RECENT PROJECTS</h2>
           <i className="fa fa-tasks" aria-hidden="true"></i>
          </div>
        <h3>OUR LATEST PROJECTS</h3>
        </div> 
          <div className="recent-projects">
           <img src="slaac1.jpeg" className="recent-projects-img"/>
           <div className="text-block">CADASTRAL SURVEYING</div>
            <div className="projects-element-one">
              <div className="item-status">
              <p>Status: Ongoing <i className="fa fa-hourglass-half" aria-hidden="true"></i></p>
              </div>
              <div className="item-year">
              <p><i className="fa fa-calendar" aria-hidden="true"></i> 2024</p>
              </div> 
            </div>
            <h4>Systematic Land Adjudication And Certification (SLAAC) Project</h4>
            <div className="projects-element-two">
              <div className="item-location">
                <p><i className="fa fa-map-pin" aria-hidden="true"></i> Sheema, Uganda</p>
              </div>
            </div>
            
          </div>
          <div className="recent-projects-button-element">
            <a className="more-projects-button">More Projects  <i className="fa fa-external-link-square" aria-hidden="true"></i></a>
          </div>
         
          
        </section>
    );
};

export default recentProjects;