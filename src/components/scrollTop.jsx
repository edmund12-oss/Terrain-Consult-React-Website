import { useEffect } from "react";

function scrollTop() {
    useEffect(() => {
        const scrollTopButton = document.querySelector('.scroll-top');

        scrollTopButton.addEventListener('click', (e) => {
            e.preventDefault;
            window.scrollTo({
            top: 0,
            behavior: 'smooth'    
            })
        })


    }, []);

    return null; 
}