import React from "react";
import "../styles/styles.css";
import { useMotionValue, motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";

import hoimameeting from "../assets/hoima-meeting.jpeg"
import internsmeeting from "../assets/interns-meeting.jpeg"
import survnettraining from "../assets/survnet.jpeg"
import closeofinternship from "../assets/internship26.jpeg"




export default function RecentEventsCarousel() {
  
const [currentIndex, setCurrentIndex] = useState(0);
const [recentEventWidth, setrecentEventWidth] = useState(0);
const recentEventRef = useRef(null);

useEffect(() => {
if(recentEventRef.current) {
  setrecentEventWidth(recentEventRef.current.offsetWidth);
}

function handleResize() {
  if(recentEventRef.current) {
  setrecentEventWidth(recentEventRef.current.offsetWidth);
}
};

window.addEventListener("resize", handleResize);
return () => window.removeEventListener("resize", handleResize)
}, []);

const gap = 50;
const horizontalOffsetDistance = recentEventWidth + gap;



function handleNextButton() {
  if(currentIndex === 1){
    setCurrentIndex(1);
  } else{
  setCurrentIndex(currentIndex + 1);
  }
}
function handlePrevButton() {
  if(currentIndex === 0){
    setCurrentIndex(0);
  } else{
  setCurrentIndex(currentIndex - 1);
  }
}

    return (
        <section>
                <div className="container section-title" data-aos="fade-up">
                    <div className="section-title-element">
                        <h2>RECENT EVENTS <i className="fas fa-calendar" aria-hidden="true"></i></h2>
                        
                    </div>
                    <h3>The Latest From Terrain Consult</h3>
                </div>
              <div className="recent-events-main">
                
                <div className="recent-events-sub">
                  <motion.div 
                  className="recent-events"
                  animate={{x: -(currentIndex * horizontalOffsetDistance)}}
                  transition={{type: "spring", stiffness: 15, damping: 5}}>

                    <div className="recent-event">
                      <div className="recent-event-element">
                        <img src={closeofinternship} alt=""></img>
                      <h3 className="text-box-title">Close Of Internship 2026</h3>
                      </div>
                      <p>Special guests Dr. Diana Rose Abeho, Dr. Ismail Wadembere, and Miss Akutu Fosca were present at the closing ceremony for the 2026 internship programme and provided career guidance to those finishing their internship and to the staff of terrain consult as well.</p>
                    </div>

                    <div className="recent-event">
                      <div className="recent-event-element">
                        <img src={survnettraining} alt=""></img>
                      <h3 className="text-box-title">Survnet Training</h3>
                      </div>
                      <p>This was a two day training held at the main office of survnet with the aim of advancing the knowlegde and competence of the staff at terrain consult.</p>
                    </div>
                    
                    <div className="recent-event" ref={recentEventRef} >
                      <div className="recent-event-element">
                        <img src={hoimameeting} alt=""></img>
                        <h3 className="text-box-title">Hoima Meeting</h3>
                      </div>
                      <p>This meeting was held on 27th June 2025 in Hoima City. The purpose of the meeting was to realign the team working under the Terrain Consult Umbrella in the region.</p>
                    </div>
                   
                    <div className="recent-event">
                      <div className="recent-event-element">
                        <img src={internsmeeting} alt=""></img>
                      <h3 className="text-box-title">Interns Orientation 2025</h3>
                      </div>
                      <p>This meeting was held at Hotel Triangle in Kampala Central. The main purpose of this meeting was to brief the interns in regards to what is expected of them and to introduce them to the members of staff.</p>
                    </div>
                 </motion.div>
                </div>
                <div className="recent-events-button">
                  <button className="switch-arrow" onClick={handlePrevButton}><i className="fa fa-chevron-circle-left" aria-hidden="true"></i></button>
                  <button className="switch-arrow"><i className="fa fa-chevron-circle-right" aria-hidden="true" onClick={handleNextButton}></i></button>
                </div>
              </div>
        </section>
    )
}
