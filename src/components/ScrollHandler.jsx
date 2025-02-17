import { useEffect } from "react";

function scrollHandler() {
    useEffect(() => {
        const toggleScrolled = () => {
           const selectBody = document.querySelector('body');
           /**  selectHeader = document.querySelector('#header');*/

            if(window.scrollY > 100) {
                selectBody.classList.add("scrolled");
            }
            else {
                selectBody.classList.remove("scrolled");
                }

        document.addEventListener('scroll', toggleScrolled);
        window.addEventListener('load', toggleScrolled);

        return () => {
        document.removeEventListener('scroll', toggleScrolled);
        window.removeEventListener('load', toggleScrolled);    
        };
        }
    }, []);

    return null;
}

export default scrollHandler;