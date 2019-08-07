
const menu = document.getElementById('hamburger-menu');
const lines = document.querySelectorAll('.h-line');

menu.addEventListener('click', () => {
    menu.classList.toggle("menu-showing");
    if(menu.classList.contains("menu-showing")){
        lines[0].animate([
            { transform: 'translateY(0px) rotate(0deg)', backgroundColor: '#374C60'},
            { transform: 'translateY(7px) rotate(-45deg)', backgroundColor: '#1AB999'}
        ], {
            fill: 'both',
            duration: 500
        });
        lines[2].animate([
            { transform: 'translateY(0px) rotate(0deg)', backgroundColor: '#374C60'},
            { transform: 'translateY(-7px) rotate(45deg)', backgroundColor: '#1AB999'}
        ], {
            fill: 'both',
            duration: 500
        });
    } else {
        lines[0].animate([
            { transform: 'translateY(7px) rotate(-45deg)', backgroundColor: '#1AB999'},
            { transform: 'translateY(0px) rotate(0deg)', backgroundColor: '#374C60'}
        ], {
            fill: 'both',
            duration: 500
        });
        lines[2].animate([
            { transform: 'translateY(-7px) rotate(45deg)', backgroundColor: '#1AB999'},
            { transform: 'translateY(0px) rotate(0deg)', backgroundColor: '#374C60'}
        ], {
            fill: 'both',
            duration: 500
        });
    }

    const navItems = document.querySelector("#nav-items");
    if(navItems.classList.contains("showing")){
        navItems.classList.remove("showing");
        navItems.style["overflow"] = "hidden";
        navItems.animate([
            { opacity: 1, height: "120px"},
            { opacity: 0, height: "0"}
        ], {
            fill: 'both',
            duration: 500
        });
        setTimeout(() => {
            navItems.style["max-height"] = "0";
        }, 500);
        
    } else {
        navItems.classList.add("showing");
        navItems.style["max-height"] = "120px";
        navItems.style["overflow"] = "auto";
        navItems.animate([
            { opacity: 0, height: "0"},
            { opacity: 1,  height: "120px"}
        ], {
            fill: 'both',
            duration: 500
        });
    }
});


const body = document.getElementById('body');
const logoText = document.getElementById('logo-text');
const centerLogo = document.getElementById('center-logo');
const navbar = document.getElementById('navbar');
const navItems = document.getElementById("nav-items");
let movement = ( ( window.innerWidth - centerLogo.offsetWidth ) / 2 ) - 15;
let currScroll = 0;

body.addEventListener('scroll', () => {
    currScroll = body.scrollTop;
    const threshold = 60;
    if(currScroll > threshold){
        logoText.style.display = "none";
        centerLogo.style.transform = `scale(1) translateX(-${movement}px)`;
        navbar.style.height = "75px";
        navItems.style["margin-top"] = "15px";
        navbar.style["border-bottom"] = "2px solid #374C60";

    } else if(currScroll < threshold){
        logoText.style.display = "block";
        centerLogo.style.transform = "scale(1.5) translateX(0px)";
        navbar.style.height = "120px";
        navItems.style["margin-top"] = "30px";
        navbar.style["border-bottom"] = "2px solid transparent";
    }
});