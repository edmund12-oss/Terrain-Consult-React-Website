import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

function HamMenu() {
    const [isActive, setIsActive] = useState(false);

    function toggleMenu() {
       setIsActive(!isActive);
    }

     return (
        <div className="hamburgher" onClick={toggleMenu}>
            <button className="hamburgher-btn">BTN</button>

            {isActive && (
                <div className="hamburgher-links">
                    <button className="hamburgher-close-btn" onClick={() => setIsActive(false)}>BTNX</button>
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
     );
}

export default HamMenu;