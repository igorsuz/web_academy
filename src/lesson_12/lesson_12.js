// // import "./lesson_12.scss";
const myBtn = document.querySelector(".btn");
const circle = document.querySelector(".span");
const colors = ["green", "yellow", "purple", "white"];

randomIndex = function() {
  return colors[Math.floor(Math.random() * colors.length)];
};
myBtn.onclick = function() {
  //   coordinate += 10;
  myBtn.style.backgroundColor = randomIndex();
  //   circle.style.transform = "translateX(" + coordinate + "px";
};
// const getRandomNumber = max => {
//   return Math.floor(Math.random() * max);
// };
// const getRandomColor = () => {
//   return `rgb(${getRandomNumber(255)}, ${getRandomNumber(
//     255
//   )}, ${getRandomNumber(255)})`;
// };

// const btns = document.querySelectorAll(".btn");

// const toggleOff = () => {
//   for (let i = 0; i < btns.length; i++) {
//     btns[i].style.backgroundColor = "";
//   }
// };
// const toggleOn = btn => {
//   btn.style.backgroundColor = getRandomColor();
// };
// for (let i = 0; i < btns.length; i++) {
//   btns[i].onclick = () => {
//     toggleOff();
//     toggleOn(btns[i]);
//   };
// }
