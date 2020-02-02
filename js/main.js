// window.onload = function () {
//
//     const welcome = document.querySelectorAll('.welcome');
//     const heading = document.querySelectorAll('h1');
//     // const body = document.querySelectorAll('body');
//
//     welcome[0].addEventListener("click", function () {
//         setInterval(function () {
//             welcome[0].classList.toggle('filter');
//             heading[0].classList.toggle('filter');
//         }, 100);
//         console.log('running');
//     });
// };

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