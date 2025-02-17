import React from "react";

const servicesHome = () => {
    return (
        <section>
      <div className="container section-title" data-aos="fade-up">
        <div className="section-title-element">
        <h2>SERVICES</h2>
        <i className="fa fa-cogs" aria-hidden="true"></i>
        </div>
        <h3>THE SERVICES OFFERED AT TERRAIN CONSULT</h3>
      </div>
      
    
      <div className="service-items">
        
        <div className="service-item" data-aos="fade-up">
           <img src="ashaba.jpg"/>
               <div className="service-icon">
                 <i className="fa fa-object-group" aria-hidden="true"></i>
               </div>  
            <div className="element-one">
              <h4>Cadastral Surveying</h4>
            </div>
            <a href="cadastral.html" className="element-two"><i className="fa fa-long-arrow-right" aria-hidden="true"></i></a> 
        </div>
        
        <div className="service-item" data-aos="fade-up">
          <img src="agaba.jpg"/>
            <div className="service-icon">
              <i className="fa fa-road" aria-hidden="true"></i>
            </div>
          <div className="element-one">
            <h4>Engineering Surveying</h4>
          </div> 
          <a href="engineering.html" className="element-two"><i className="fa fa-long-arrow-right" aria-hidden="true"></i></a>    
        </div>
        
        <div className="service-item" data-aos="fade-up">
          <img src="gis.JPG"/>
          <div className="service-icon">
            <i className="fa fa-globe" aria-hidden="true"></i>
          </div>
          <div className="element-one">
            <h4>GIS Analysis</h4>
          </div>
          <a href="geoinfosys.html" className="element-two"><i className="fa fa-long-arrow-right" aria-hidden="true"></i></a> 
        </div>
        
        <div className="service-item" data-aos="fade-up">
          <img src="topo2.JPG"/>
          <div className="service-icon">
            <i className="fa fa-map" aria-hidden="true"></i>
          </div>
          <div className="element-one">
            <h4>Topographic Surveying</h4>
          </div>
          <a href="tsurvyeys.html" className="element-two"><i className="fa fa-long-arrow-right" aria-hidden="true"></i></a> 
        </div>
        
        <div className="service-item" data-aos="fade-up">
          <img src="rs.jpg"/>
          <div className="service-icon">
            <i className="fa fa-search-plus" aria-hidden="true"></i>
          </div>
          <div className="element-one">
            <h4>Remote Sensing Analysis</h4>
          </div>
          <a href="envconsultancy.html" className="element-two"><i className="fa fa-long-arrow-right" aria-hidden="true"></i></a> 
        </div>
        
        <div className="service-item" data-aos="fade-up">
          <img src="planning.JPG"/>
          <div className="service-icon">
            <i className="fa fa-book" aria-hidden="true"></i>
          </div>
          <div className="element-one">
            <h4>Environmental Consultancy</h4>
          </div>
          <a href="planning.html" className="element-two"><i className="fa fa-long-arrow-right" aria-hidden="true"></i></a> 
        </div>
        
      </div>
    </section>

    );


};
export default servicesHome;