function Slideshow(el) {
  this.el = el;
}

Slideshow.prototype.init = function() {
  // this.render();
  this.inition();
  // this.getPosts();
};

// Slideshow.prototype.render = function() {
//   this.container = document.createElement("div");
//   this.container.classList.add("feed__container");
//   this.el.appendChild(this.container);
// };

// Slideshow.prototype.getPosts = function() {
//   const xhr = new XMLHttpRequest();

//   xhr.open("GET", "http://localhost:3000/movies");
//   xhr.send();

//   xhr.onload = () => {
//     if (xhr.status >= 200 && xhr.status < 400) {
//       const data = JSON.parse(xhr.response);
//       this.renderPosts(data);
//     }
//   };
// };
// Slideshow.prototype.renderPosts = function(posts) {
//   for (let post of posts) {
//     this.renderPost(post);
//   }
// };
// Slideshow.prototype.renderPost = function(post) {
//   const img = document.createElement("img");
//   img.classList.add("slide");
//   img.src = post.img;
//   this.wrapper.appendChild(img);
//   console.log(post.img);
// };
Slideshow.prototype.inition = function() {
  this.wrapper = this.el.querySelector(".slider-wrapper");
  this.slides = this.el.querySelectorAll(".slide");
  this.previous = this.el.querySelector(".slider-previous");
  this.next = this.el.querySelector(".slider-next");
  this.index = 0;
  this.total = this.slides.length;
  this.actions();
  console.log(this.slides);
};

Slideshow.prototype._slideTo = function(slide) {
  var currentSlide = this.slides[slide];
  this.wrapper.style.left = "-" + currentSlide.offsetLeft + "px";
};
Slideshow.prototype.actions = function() {
  var self = this;
  self.next.addEventListener(
    "click",
    function() {
      self.index++;
      self.previous.style.display = "block";
      if (self.index == self.total - 1) {
        self.index = self.total - 1;
        self.next.style.display = "none";
      }
      self._slideTo(self.index);
    },
    false
  );
  self.previous.addEventListener(
    "click",
    function() {
      self.index--;
      self.next.style.display = "block";
      if (self.index == 0) {
        self.index = 0;
        self.previous.style.display = "none";
      }
      self._slideTo(self.index);
    },
    false
  );
};

// document.addEventListener("DOMContentLoaded", function() {
//   var slider = new Slideshow("#main-slider");
// });

export { Slideshow };
