import "./homework_12.scss";
const red = document.querySelector(".red");
const yellow = document.querySelector(".yellow");
const green = document.querySelector(".green");
const btnStart = document.getElementById("start");
const toggleOff = () => {
  red.style.backgroundColor = "";
  yellow.style.backgroundColor = "";
  green.style.backgroundColor = "";

  // btnStart.disabled = true; // блокируем кнопку Старт
  // btnStop.disabled = false;
};
let isEnabled = false;
red.onclick = function() {
  if (isEnabled === true) {
    toggleOff();
    red.style.backgroundColor = "red";
  }
};
yellow.onclick = function() {
  if (isEnabled === true) {
    toggleOff();
    yellow.style.backgroundColor = "yellow";
  }
};
green.onclick = function() {
  if (isEnabled === true) {
    toggleOff();
    green.style.backgroundColor = "green";
  }
};
const toggle = () => {
  isEnabled = !isEnabled;
};
btnStart.addEventListener("click", toggle);
