let menuButton = document.querySelector(".menu-button");
let navLinks = document.querySelector(".nav-links");

menuButton.addEventListener("click",()=>{
     navLinks.classList.toggle("mobile-menu")
})