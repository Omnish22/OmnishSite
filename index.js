function navSlider(){
  navContainer = document.querySelector(".nav-links");
  navLinks = document.querySelectorAll(".nav-links li");

  // managing container's size
  navContainer.style.width=`${navLinks.length * 10}%`;

// slider animation
  navContainer.classList.toggle("nav-active");
//=============================================================================

// links animation
  for(i=0; i<navLinks.length; i++){
    link = navLinks[i];
    index = i;
    if(link.style.animation){
      link.style.animation=``;
    }else{

      link.style.animation=`linksAnimation 1s ease forwards ${index/4+0.4}s`;
    }
  }
  //============================================================================
  // burger animation
    burger.classList.toggle('toggle');

}
burger = document.querySelector(".burger");
burger.addEventListener('click',navSlider);


navContainer = document.querySelector(".nav-links");
navLinks = document.querySelectorAll(".nav-links li");

// managing container's size
navContainer.style.width=`${navLinks.length * 10}%`;

//====================  FRONT PAGE ===============================
// ***************** text animation ****************



function animateOmnish(){
  const omnishHeading = document.querySelector(".front-page h1");
  omnishHeading.style.animation = "omnishAnimation 2s ease-in forwards";
}

animateOmnish();
