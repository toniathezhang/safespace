let pressButton = document.getElementById("press");
let text = document.getElementsByClassName("cls-8")[0];
let btnClicked = true;
let lamp = document.getElementById("Layer_24");
let shadow = document.getElementsByClassName("cls-19")[0];
let cat = document.getElementById("cat");
let marks = document.getElementById("marks")
let outlet = document.getElementById("outlet")
let picsky = document.getElementById("picsky")
let outside = document.getElementById("outside")

outside.addEventListener("click", outsidealert);
function outsidealert(){
    alert("It's getting late.")
}


marks.addEventListener("click", marksalert);
function marksalert(){
    alert("Seeing these scribbled tally marks fills you with hopelessness. Whoever left them seems to have given up.")
}

outlet.addEventListener("click", outletsalert);
function outletsalert(){
    alert("A power outlet. Nothing is plugged in currently.")
}

picsky.addEventListener("click", picskysalert);
function picskysalert(){
    alert("An uncanny landscape painting. It seems to be constantly changing.")
}



let lampClicked = true;

window.onload = (event) => {
  alert("Welcome back, User 13028!");
};

pressButton.addEventListener("click", showText);
lamp.addEventListener("click", turnLight);
cat.addEventListener("click", meow);

function showText() {
  if (btnClicked) {
    text.style.display = "block";
    btnClicked = false;
  } else {
    text.style.display = "none";
    btnClicked = true;
  }
}

function turnLight() {
  if (lampClicked) {
    shadow.style.display = "block";
    lampClicked = false;
  } else {
    shadow.style.display = "none";
    lampClicked = true;
  }
}

function meow() {
    alert("A cute cat plushie. It reminds you of something.")
    let audio = new Audio('kat.mp3');
    audio.play();
}
