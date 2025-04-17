document.addEventListener("DOMContentLoaded",function (){
    let slideIndex=0;
    const slides =document.querySelector(".slides");
    const totalslides =document.querySelectorAll(".slides img").length;

    function showNextSlide (){
        slideIndex=(slideIndex +1 )% totalslides;
        slides.style.transform =`translateX(-${slideIndex*100}%)`;
    }
    setInterval(showNextSlide, 3000);
});
  function toggleMenu(){
    document.querySelector(".nav-links").classList.toggle("show");
}