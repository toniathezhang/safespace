let pressButton = document.getElementById("press");
let text = document.getElementsByClassName("cls-8")[0];
let btnClicked = true;
let lamp = document.getElementById("Layer_24");
let shadow = document.getElementsByClassName("cls-19")[0];
let cat = document.getElementById("cat");

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
    let audio = new Audio('kat.mp3');
    audio.play();
}
