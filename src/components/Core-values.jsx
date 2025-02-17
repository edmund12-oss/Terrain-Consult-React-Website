import React from "react";

const coreValues = () => {
    return (
        <section id="featured-services" className="featured-services section">
      
        <div className="container section-title" data-aos="fade-up">
          <div className="section-title-element">
            <h2>OUR CORE VALUES</h2>
            <i className="fa fa-bookmark" aria-hidden="true"></i>
          </div>
          <h3>THE CORE VALUES OUR WORK HERE AT TERRAIN CONSULT IS BASED ON</h3>
        </div>
    
    
          <div className="container">
    
            <div className="row gy-4">
    
              <div className="col-xl-3 col-md-6 d-flex" data-aos="fade-up" data-aos-delay="100">
                <div className="values-item position-relative">
                  <div className="icon"><i className="fa fa-check-square" aria-hidden="true"></i></div>
                  <h4><a href="" className="stretched-link">Integrity</a></h4>
                  <p>Upholding honesty and ethical behaviour in all dealings with clients.</p>
                </div>
              </div>
    
              <div className="col-xl-3 col-md-6 d-flex" data-aos="fade-up" data-aos-delay="200">
                <div className="values-item position-relative">
                  <div className="icon"><i className="fa fa-bullseye" aria-hidden="true"></i></div>
                  <h4><a href="" className="stretched-link">Accuracy</a></h4>
                  <p>Committing to precise measurements and meticulous data collection to provide reliable and exact survey results.</p>
                </div>
              </div>
    
              <div className="col-xl-3 col-md-6 d-flex" data-aos="fade-up" data-aos-delay="300">
                <div className="values-item position-relative">
                  <div className="icon"><i class="fa fa-user-circle" aria-hidden="true"></i></div>
                  <h4><a href="" className="stretched-link">Customer Service</a></h4>
                  <p>Providing excellent service by understanding and meeting client needs.</p>
                </div>
              </div>
    
              <div className="col-xl-3 col-md-6 d-flex" data-aos="fade-up" data-aos-delay="400">
                <div className="values-item position-relative">
                  <div className="icon"><i className="fa fa-thumbs-up" aria-hidden="true"></i></div>
                  <h4><a href="" className="stretched-link">Ethical Conduct</a></h4>
                  <p>Adhering to the highest ethical standards in all professional activities.</p>
                </div>
              </div>
    
            </div>
    
          </div>
    
        </section>
    );
};

export default coreValues;