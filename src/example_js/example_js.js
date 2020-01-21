import "./example_js.scss";
const colorRoot = document.querySelector(".container");
const imgs = colorRoot.querySelectorAll("span");
const btnBack = document.querySelector(".back");
const btnNext = document.querySelector(".next");

btnBack.addEventListener("click", function() {
  for (var i = imgs.length - 1; i < imgs.length; i--) {
    if (imgs[i].classList.contains("active")) {
      imgs[i].classList.remove("active");
      if (i > 0) {
        imgs[i - 1].classList.add("active");
      } else {
        imgs[imgs.length - 1].classList.add("active");
      }
      break;
    }
  }
});
btnNext.addEventListener("click", function() {
  for (var i = 0; i < imgs.length; i++) {
    if (imgs[i].classList.contains("active")) {
      imgs[i].classList.remove("active");
      if (i < imgs.length - 1) {
        imgs[i + 1].classList.add("active");
      } else {
        imgs[0].classList.add("active");
      }
      break;
    }
  }
});
