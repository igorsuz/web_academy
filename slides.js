/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "./";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 23);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/slides/slides.css":
/*!*******************************!*\
  !*** ./src/slides/slides.css ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/slides/slides.js":
/*!******************************!*\
  !*** ./src/slides/slides.js ***!
  \******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _slides_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./slides.css */ "./src/slides/slides.css");
/* harmony import */ var _slides_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_slides_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _slideshow__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./slideshow */ "./src/slides/slideshow.js");


var body = document.querySelector("body");
var slideshow = new _slideshow__WEBPACK_IMPORTED_MODULE_1__["Slideshow"](body);
slideshow.init();

/***/ }),

/***/ "./src/slides/slideshow.js":
/*!*********************************!*\
  !*** ./src/slides/slideshow.js ***!
  \*********************************/
/*! exports provided: Slideshow */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Slideshow", function() { return Slideshow; });
function Slideshow(el) {
  this.el = el;
}

Slideshow.prototype.init = function () {
  // this.render();
  this.inition(); // this.getPosts();
}; // Slideshow.prototype.render = function() {
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


Slideshow.prototype.inition = function () {
  this.wrapper = this.el.querySelector(".slider-wrapper");
  this.slides = this.el.querySelectorAll(".slide");
  this.previous = this.el.querySelector(".slider-previous");
  this.next = this.el.querySelector(".slider-next");
  this.index = 0;
  this.total = this.slides.length;
  this.actions();
  console.log(this.slides);
};

Slideshow.prototype._slideTo = function (slide) {
  var currentSlide = this.slides[slide];
  this.wrapper.style.left = "-" + currentSlide.offsetLeft + "px";
};

Slideshow.prototype.actions = function () {
  var self = this;
  self.next.addEventListener("click", function () {
    self.index++;
    self.previous.style.display = "block";

    if (self.index == self.total - 1) {
      self.index = self.total - 1;
      self.next.style.display = "none";
    }

    self._slideTo(self.index);
  }, false);
  self.previous.addEventListener("click", function () {
    self.index--;
    self.next.style.display = "block";

    if (self.index == 0) {
      self.index = 0;
      self.previous.style.display = "none";
    }

    self._slideTo(self.index);
  }, false);
}; // document.addEventListener("DOMContentLoaded", function() {
//   var slider = new Slideshow("#main-slider");
// });




/***/ }),

/***/ 23:
/*!************************************!*\
  !*** multi ./src/slides/slides.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./src/slides/slides.js */"./src/slides/slides.js");


/***/ })

/******/ });
//# sourceMappingURL=slides.js.map