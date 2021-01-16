let inital = document.querySelector(".initial");
let container = document.querySelector(".container");
let key = document.getElementById("key");
let keyCode = document.getElementById("keycode");
let code = document.getElementById("code");

function getKey(event) {
  inital.classList.add("vanish");
  key.innerText = event.key;
  keyCode.innerText = event.keyCode;
  code.innerText = event.code;
  container.classList.remove("vanish");
}

window.addEventListener("keydown", getKey);
