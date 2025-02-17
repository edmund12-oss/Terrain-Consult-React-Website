import React from "react";

const aboutHome = () => {
    return (
        <section>
         <div className="container section-title" data-aos="fade-up">
                <div className="section-title-element">
                    <h2>ABOUT US</h2>
                    <i className="fa fa-search-plus" aria-hidden="true"></i>
                </div>
                <h3>WHO ARE WE?</h3>
            </div>
            <div className="about-home-page" data-aos="fade-up">
                <div className="about-home-item b-right">
                    <img src="about-portrait.jpg"></img>
                    </div>
                <div className="about-home-item b-radi">
                    <h3>What to know about us</h3>
                    <p>Terrain Consult is a professional consultancy, registered as a partnership in Uganda offering Engineering and Cadastral surveying services, planning and Environmental consultancy services, geographical information sysyems services and analysis established on 16th December, 2003.</p>
                        <div className="about-home-button">
                            <a>Learn more about us</a><i className="fa fa-external-link" aria-hidden="true"></i>
                        </div>
                    </div>

                    </div>
            </section>
 
    );
};

export default aboutHome;