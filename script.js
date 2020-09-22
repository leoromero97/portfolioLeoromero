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
//---------Seccion Skills-----//
let skills = document.querySelector(".skills");
let skillsList = document.querySelector(".skillsList");
skills.addEventListener('click', function () {
  skills.classList.toggle('active');
  skillsList.classList.toggle('active');
})

let tools = document.querySelector(".tools");
let toolsList = document.querySelector(".toolsList");
tools.addEventListener('click', function () {
  tools.classList.toggle('active');
  toolsList.classList.toggle('active');
})

//---------Seccion Recomendations-----//
let persona = document.querySelector(".person");
let testimonio = document.querySelector(".testimony");
persona.addEventListener('click', function () {
  persona.classList.toggle('active');
  testimonio.classList.toggle('active');
})

let marinaP = document.querySelector(".marinaP");
let marinaT = document.querySelector(".marinaT");
marinaP.addEventListener('click', function () {
  marinaP.classList.toggle('active');
  marinaT.classList.toggle('active');
})

let andresP = document.querySelector(".andresP");
let andresT = document.querySelector(".andresT");
andresP.addEventListener('click', function () {
  andresP.classList.toggle('active');
  andresT.classList.toggle('active');
})

let carolinaP = document.querySelector(".carolinaP");
let carolinaT = document.querySelector(".carolinaT");
carolinaP.addEventListener('click', function () {
  carolinaP.classList.toggle('active');
  carolinaT.classList.toggle('active');
})
