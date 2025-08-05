
const Button = document.getElementById("btnp");

            function Aud(divIndex) {
                
                  const divContent = document.querySelector(`.post:nth-child(${divIndex}) pre`).textContent.trim();
                  
                  responsiveVoice.speak(divContent, "Australian Male", { volume: 1 });
                  
                  
                    if(responsiveVoice.isPlaying(divContent, "Australian Male", { volume: 1 })) {
       responsiveVoice.pause();

   }else{
       responsiveVoice.resume();
   }
            }


    // Add sticky class to navbar when scrolling
window.onscroll = function() {
  stickyNavbar();
};

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function stickyNavbar() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
}


