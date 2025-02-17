import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function PureCounter() {
    const location = useLocation();
    useEffect(() => {
            const counters = document.querySelectorAll('.count');
            const speed = 200; 
        
            counters.forEach(counter => {
                const updateCount = () => {
                    const target = +counter.getAttribute('data-target');
                    const count = +counter.innerText;
        
                    const inc = target / speed;
        
                    if (count < target) {
                        counter.innerText = Math.ceil(count + inc);
                        setTimeout(updateCount, 50);
                    } else {
                        counter.innerText = target;
                    }
                };
        
                updateCount();
            });
        

    }, [location.pathname]);

    return null;
};

export default PureCounter;