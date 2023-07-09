const navbar = document.getElementById("nav");
const navtext = document.getElementById("nav-list");
function hideNavbar() {
    navbar.style.top = "-150px";
    navbar.style.position = "absolute";
    navbar.style.backgroundColor = "transparent"
    navbar.style.transition = "all ease-in-out 0.3s"
}

function showNavbar() {
    navbar.style.top = "0";
    navbar.style.position = "fixed";
    navbar.style.backgroundColor = "black"
    navtext.style.color = "white"
    navbar.style.transition = "all ease-in-out 0.3s"
}

function normalNavbar(){
    navbar.style.top = "0";
    navbar.style.position = "absolute";
    navbar.style.backgroundColor = "transparent"
}
var prevScroll = window.scrollY;

window.addEventListener("scroll", function() {
    const currentScroll = window.scrollY;

        if (currentScroll > prevScroll && prevScroll>100) {
            hideNavbar();
        } else if(currentScroll < prevScroll && prevScroll>100) {
            showNavbar();
        }
        else{
            normalNavbar()
        }
        prevScroll = currentScroll;
    
  });