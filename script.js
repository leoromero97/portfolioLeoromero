//SCRIPT PARA EL SLIDER SHOW
let slider = document.querySelector(".slideShow");
let sliderIndividual = document.querySelectorAll(".slide"); //slide es mySlides
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

//---------Seccion Recomendations-----//
let persona = document.querySelector(".person");
let testimonio = document.querySelector(".testimony");
persona.addEventListener('click', function(){
    persona.classList.toggle('active');
    testimonio.classList.toggle('active');
})

let marinaP = document.querySelector(".marinaP");
let marinaT = document.querySelector(".marinaT");
marinaP.addEventListener('click', function(){
  marinaP.classList.toggle('active');
  marinaT.classList.toggle('active');
})

let andresP = document.querySelector(".andresP");
let andresT = document.querySelector(".andresT");
andresP.addEventListener('click', function(){
  andresP.classList.toggle('active');
  andresT.classList.toggle('active');
})

let carolinaP = document.querySelector(".carolinaP");
let carolinaT = document.querySelector(".carolinaT");
carolinaP.addEventListener('click', function(){
  carolinaP.classList.toggle('active');
  carolinaT.classList.toggle('active');
})