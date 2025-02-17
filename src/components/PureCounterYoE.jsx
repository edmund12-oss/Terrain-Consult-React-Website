import React from "react";
import { useEffect } from "react";
import { data, useLocation } from "react-router-dom";

function PureCounterYoE() {
    const location = useLocation();

    useEffect(() => {
        const newcounts = document.querySelectorAll('.newcount');
        const speed = 21;

        newcounts.forEach(newcounter => {
            const updateCount = () => {
            const target = +newcounter.getAttribute('yoe-data-target');
            const newcount = +newcounter.innerText;

            const increment = target / speed;
            
            if(newcount < target) {
                newcounter.innerText = Math.ceil(newcount + increment);
                setTimeout(updateCount, 500);
            }
            else {
                newcounter.innerText = target;
            }
        };

        updateCount();
        });
    }, [location.pathname]);

    return null;
}

export default PureCounterYoE;

