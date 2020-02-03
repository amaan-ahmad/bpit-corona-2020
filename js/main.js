const hamburger = document.querySelectorAll('.hamburger');
const navLinks = document.querySelectorAll('.navLinks');
const line = document.querySelectorAll('.line');
const links = document.querySelectorAll('.navLinks li');

hamburger[0].addEventListener("click", function(){
    navLinks[0].classList.toggle('open');
    line.forEach(line => {
        line.classList.toggle('clicked');
    });
    links.forEach(link => {
        link.classList.toggle('fade');
    });
});