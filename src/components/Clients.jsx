import React from "react";

const clients = () => {
    return (
        <section>
        <div className="container section-title" data-aos="fade-up">
          <div className="section-title-element">
           <h2>TRUSTED BY;</h2>
           <i className="fas fa-handshake" aria-hidden="true"></i>
          </div>
          <h3>OUR ESTEEMED CLIENTELE</h3>
        </div>
          <div className="clientele">
            <div className="client-item">
             <img src="molhud.jpg"/>
            </div>
            
            <div className="client-item">
             <img src="naro.png"/>
            </div>
            
            <div className="client-item">
              <img src="nssf.png"/>
            </div>
            
            <div className="client-item">
              <img src="mtn.webp"/>
            </div>
            
            <div className="client-item">
             <img src="UNRA.gif"/>
            </div>
          </div>
      
          
        </section>

    );


};

export default clients;