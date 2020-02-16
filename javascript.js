
 window.onscroll = function () {
  window.scrollTo(0,window.scrollY);
};


// countdowncodes



var deadline = new Date("march 28, 2020 15:37:25").getTime(); 
      
var x = setInterval(function() { 
  
var now = new Date().getTime(); 
var t = deadline - now; 
var days = Math.floor(t / (1000 * 60 * 60 * 24)); 
var hours = Math.floor((t%(1000 * 60 * 60 * 24))/(1000 * 60 * 60)); 
var minutes = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60)); 
var seconds = Math.floor((t % (1000 * 60)) / 1000); 
document.getElementById("day").innerHTML =days ; 
document.getElementById("hour").innerHTML =hours; 
document.getElementById("minute").innerHTML = minutes;  
document.getElementById("second").innerHTML =seconds;  
if (t < 0) { 
        clearInterval(x); 
        document.getElementById("demo").innerHTML = "TIME UP"; 
        document.getElementById("day").innerHTML ='0'; 
        document.getElementById("hour").innerHTML ='0'; 
        document.getElementById("minute").innerHTML ='0' ;  
        document.getElementById("second").innerHTML = '0'; } 
}, 1000); 
//countdownends;


//................................................SCROLL ON CLICK..........................................................................
 //scrolling as per the click on particular button...
 window.smoothScroll = function(target) {
    var scrollContainer = target;
    do { 
        scrollContainer = scrollContainer.parentNode;
        if (!scrollContainer) return;
        scrollContainer.scrollTop += 1;
    } while (scrollContainer.scrollTop == 0);

    var targetY = 0;
    do { 
        if (target == scrollContainer) break;
        targetY += target.offsetTop;
    } while (target = target.offsetParent);

    scroll = function(c, a, b, i) {
        i++; if (i > 30) return;
        c.scrollTop = a + (b - a) / 30 * i;
        setTimeout(function(){ scroll(c, a, b, i); }, 20);
        document.getElementById('meny').style.display='None';   
    }
    //this will start scrolling
    scroll(scrollContainer, scrollContainer.scrollTop, targetY, 0);
}


//     function menu(){
//         let right = document.querySelector('.nn').style.right;
//         if(right!='0px'){
//             slide(0);
//         }
//         else{
//     // function menuHide(){
//         slide(-200);
//     }

// }
// //    function menuHide(){
// //        slide
//     function slide(rightVal){
//         document.querySelector('.nn').style.right = rightVal + 'px';
//         document.querySelector('.nn').style.transition = '1s';
//     }
    // function menuHide(){
    //     document.querySelector('.overlay').style.left = '-200px';
    //         document.querySelector('.overlay').style.transition = '1px';
    // }


  function SeeMore() {
  var dots = document.getElementById("dots");
  var moreImages_1 = document.getElementById("f1_");
  var moreImages_2 = document.getElementById("f2_");
  var moreImages_3 = document.getElementById("f3_");
  let big_div = document.getElementById("four");
  var btn_1 = document.getElementById("btnSeeMore_1");
var btn_2 = document.getElementById("btnSeeMore_2");
  if (dots.style.display == "none") {
    dots.style.display = "inline"; 
    btn_2.innerHTML = "See More";
    moreImages_1.style.display = "none";
moreImages_2.style.display = "none"; 
moreImages_3.style.display = "none";   
  // big_div.style.height = '130vh';
  btn_2.style.display="none";
  btn_1.style.display="block";
  } else {
    dots.style.display = "none";
    btn_2.innerHTML = "See less"; 
    moreImages_1.style.display = "block";
  moreImages_2.style.display = "block";
  moreImages_3.style.display = "block";
  // big_div.style.height = '240vh';
  btn_2.style.display="block";
  btn_1.style.display="none";
  }}











  
// hiding social media on clicking menu
function newslider()
{
    document.getElementById("hamburger").classList.toggle('active');
}

function myslider()
{
    document.getElementById("sidebar").classList.toggle('active');
    document.getElementById("sidebar").classList.toggle('display-con');
    document.getElementById("sticky").classList.toggle('active');
}

const hamburger = document.querySelectorAll('.hamburger');
const line = document.querySelectorAll('.line-n');
hamburger[0].addEventListener("click", function(){
    console.log('ha hogya!');
    hamburger[0].classList.toggle('active');
    line.forEach(line => {
      line.classList.toggle('clicked');
    });

  });


function myfunction()
{
 
    
    document.getElementById("icons").classList.toggle('active');

}
//ends
