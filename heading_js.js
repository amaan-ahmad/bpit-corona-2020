//.............................................ABOUT.....................................................
var textWrapper = document.querySelector('.about_ani');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.about_ani .letter',
    scale: [4,1],
    opacity: [0,1],
    translateZ: 0,
    easing: "easeOutExpo",
    duration: 950,
    delay: (el, i) => 70*i
  }).add({
    targets: '.about_ani',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });

  //.............................................PAST STARS.....................................................
var textWrapper = document.querySelector('.past_ani');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.past_ani .letter',
    scale: [4,1],
    opacity: [0,1],
    translateZ: 0,
    easing: "easeOutExpo",
    duration: 950,
    delay: (el, i) => 70*i
  }).add({
    targets: '.past_ani',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });

  //.............................................SOME GLIMPSES FROM PAST.....................................................
var textWrapper = document.querySelector('.glimpses_ani');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.glimpses_ani .letter',
    scale: [4,1],
    opacity: [0,1],
    translateZ: 0,
    easing: "easeOutExpo",
    duration: 950,
    delay: (el, i) => 70*i
  }).add({
    targets: '.glimpses_ani',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });

  
  //.............................................HIGHLIGHTS.....................................................
var textWrapper = document.querySelector('.highlights_ani');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.highlights_ani .letter',
    scale: [4,1],
    opacity: [0,1],
    translateZ: 0,
    easing: "easeOutExpo",
    duration: 950,
    delay: (el, i) => 70*i
  }).add({
    targets: '.highlights_ani',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });

    //.............................................PAST STATS.....................................................
var textWrapper = document.querySelector('.stats_ani');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.stats_ani .letter',
    scale: [4,1],
    opacity: [0,1],
    translateZ: 0,
    easing: "easeOutExpo",
    duration: 950,
    delay: (el, i) => 70*i
  }).add({
    targets: '.stats_ani',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });

      //.............................................MIGHT SAY.....................................................
var textWrapper = document.querySelector('.mightSay_ani');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.mightSay_ani .letter',
    scale: [4,1],
    opacity: [0,1],
    translateZ: 0,
    easing: "easeOutExpo",
    duration: 950,
    delay: (el, i) => 70*i
  }).add({
    targets: '.mightSay_ani',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });

      //.............................................statsNo1.....................................................
      var textWrapper = document.querySelector('.statsNo1_ani');
      textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
      
      anime.timeline({loop: true})
        .add({
          targets: '.statsNo1_ani .letter',
          scale: [4,1],
          opacity: [0,1],
          translateZ: 0,
          easing: "easeOutExpo",
          duration: 950,
          delay: (el, i) => 75*i
        }).add({
          targets: '.statsNo1_ani',
          opacity: 0,
          duration: 1000,
          easing: "easeOutExpo",
          delay: 1000
        });
      
      //.............................................statsNo2_ani.....................................................
      var textWrapper = document.querySelector('.statsNo2_ani');
      textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
      
      anime.timeline({loop: true})
        .add({
          targets: '.statsNo2_ani .letter',
          scale: [4,1],
          opacity: [0,1],
          translateZ: 0,
          easing: "easeOutExpo",
          duration: 950,
          delay: (el, i) => 80*i
        }).add({
          targets: '.statsNo2_ani',
          opacity: 0,
          duration: 1000,
          easing: "easeOutExpo",
          delay: 1000
        });
      
      //.............................................statsNo3_ani.....................................................
      var textWrapper = document.querySelector('.statsNo3_ani');
      textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
      
      anime.timeline({loop: true})
        .add({
          targets: '.statsNo3_ani .letter',
          scale: [4,1],
          opacity: [0,1],
          translateZ: 0,
          easing: "easeOutExpo",
          duration: 950,
          delay: (el, i) => 60*i
        }).add({
          targets: '.statsNo3_ani',
          opacity: 0,
          duration: 1000,
          easing: "easeOutExpo",
          delay: 1000
        });
      
            