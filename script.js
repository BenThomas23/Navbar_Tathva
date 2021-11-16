const hamburger = document.querySelector(".hamburger");
const cont = document.querySelector(".cont");
const links = document.querySelectorAll(".nav-links li");

hamburger.addEventListener("click", () =>{
    cont.classList.toggle("open1");
    hamburger.classList.toggle("open2");
    gsap.from(".nav-links li a", {duration:1.5,opacity:0,delay:0.3})
}); 
