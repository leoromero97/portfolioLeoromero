//SCRIPT PARA EL SLIDER SHOW
let slider = document.querySelector(".slideShow");
let sliderIndividual = document.querySelectorAll(".slide");//slide es mySlides
let contador = 1;
let width = sliderIndividual[0].clientWidth; //es para calcular el ancho del primer slider

window.addEventListener("resize", function () {
  width = sliderIndividual[0].clientWidth; //esta funcion es para que cada vez que el usuario gire la pantalla se actualice el width
});

setInterval(function () {
  slides();
}, 8000);

function slides() {
  slider.style.transform = "translate(" + (-width * contador) + "px)"; //hace un barrido total del width actual
  slider.style.transition = "transform 2s";
  contador++;

  if (contador == sliderIndividual.length) {
    setTimeout(function () {
      slider.style.transform = "translate(0px)";
      slider.style.transition = "transform 0s ease-in-out";
      contador = 1;
    }, 2000)
  }
}


//A partir de esta linea empieza el script para el slider show del banner
var slideIndex = 1;
var myTimer;

//Controla la slide actual y resetea el intervalo si es necesario
function currentSlide(n) {
  clearInterval(myTimer);
  myTimer = setInterval(function () {
    plusSlides(n + 1)
  }, 6000);
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("slideSkills");
  var dots = document.getElementsByClassName("state");
  var stateNot = document.getElementsByClassName("stateNot");
  
  if (n > slides.length) {
    slideIndex = 1
  }
  if (n < 1) {
    slideIndex = slides.length
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" activeDot", "");
  }
  slides[slideIndex - 1].style.display = "flex";
  dots[slideIndex - 1].className += " activeDot";
}