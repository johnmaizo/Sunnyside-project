const button_nav = document.querySelector(".button_nav");
const primary_nav = document.querySelector(".primary_nav");

const mediaQuery = window.matchMedia('(max-width: 800px)');

function handleMediaChange(event) {
    if (event.matches) {
        if (primary_nav.getAttribute("aria-expanded") === "true") {
            primary_nav.setAttribute("aria-hidden", "false");
            button_nav.setAttribute("aria-expanded", "true");
        }
        else {
            primary_nav.setAttribute("aria-hidden", "true");
            button_nav.setAttribute("aria-expanded", "false");
        }
        
        // console.log("MOBILE AKO SCREEN HAHHHA");
    }
    else {
        if (primary_nav.getAttribute("aria-expanded") === "false") {
            primary_nav.setAttribute("aria-hidden", "true");
            button_nav.setAttribute("aria-expanded", "false");
        }
        else {
            primary_nav.setAttribute("aria-hidden", "false");
            button_nav.setAttribute("aria-expanded", "true");
        }
        // console.log("DESKTOP AKO SCREEN HAHHHA");
    }
}

handleMediaChange(mediaQuery); 

mediaQuery.addListener(handleMediaChange); 

const arrow = document.querySelector(".aroow");

button_nav.addEventListener("click", () => { 
    if (button_nav.getAttribute("aria-expanded") === "false") {
        button_nav.setAttribute("aria-expanded", "true");
        primary_nav.setAttribute("aria-hidden", "false");
        
        arrow.classList.add("hide");
    } 
    else {
        button_nav.setAttribute("aria-expanded", "false");
        primary_nav.setAttribute("aria-hidden", "true");
            
        arrow.classList.remove("hide");
    }
});