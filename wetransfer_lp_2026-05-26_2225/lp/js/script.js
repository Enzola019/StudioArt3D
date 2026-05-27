// REVEAL EFFECT

const reveals = document.querySelectorAll(".reveal");

window.addEventListener("scroll", revealElements);

function revealElements(){

  reveals.forEach((element) => {

    const windowHeight = window.innerHeight;
    const revealTop = element.getBoundingClientRect().top;

    if(revealTop < windowHeight - 100){
      element.classList.add("active");
    }

  });

}

revealElements();

// HEADER EFFECT

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {

  if(window.scrollY > 50){

    header.style.background = "rgba(15,17,21,.75)";
    header.style.backdropFilter = "blur(20px)";

  }else{

    header.style.background = "transparent";

  }

});

// PARALLAX EFFECT

window.addEventListener("mousemove", (e) => {

  const blur1 = document.querySelector(".blur-1");
  const blur2 = document.querySelector(".blur-2");

  const x = e.clientX / window.innerWidth;
  const y = e.clientY / window.innerHeight;

  blur1.style.transform =
    `translate(${x * 30}px, ${y * 30}px)`;

  blur2.style.transform =
    `translate(${x * -30}px, ${y * -30}px)`;

});