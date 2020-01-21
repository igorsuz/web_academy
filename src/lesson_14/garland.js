function getRandom(min = 0, max) {
  return Math.floor(min + Math.random() * max);
}
function getRandomColor() {
  return `rgb(${getRandom(0, 255)}, ${getRandom(0, 255)}, ${getRandom(
    0,
    255
  )})`;
}

function garland(count) {
  const body = document.querySelector("body");
  for (let i = 0; i < count; i++) {
    const el = document.createElement("div");
    el.style.borderRadius = "50%";
    el.style.border = "2px solid black";
    el.style.width = el.style.height = "50px";
    el.style.display = "inline-block";
    el.style.backgroundColor = getRandomColor();
    setInterval(() => {
      el.style.backgroundColor = getRandomColor();
    }, getRandom(5500, 100));
    body.appendChild(el);
  }
}
export { garland };
