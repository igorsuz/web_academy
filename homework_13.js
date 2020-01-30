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
/******/ 	return __webpack_require__(__webpack_require__.s = 22);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/homework_13/homework_13.js":
/*!****************************************!*\
  !*** ./src/homework_13/homework_13.js ***!
  \****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _homework_13_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./homework_13.scss */ "./src/homework_13/homework_13.scss");
/* harmony import */ var _homework_13_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_homework_13_scss__WEBPACK_IMPORTED_MODULE_0__);
 /////

var xhr = new XMLHttpRequest();
var body = document.querySelector("body");
var mountPoint = document.createElement("div");
mountPoint.classList.add("slider-wrapper");
body.appendChild(mountPoint);
var btnBox = document.createElement("div");
btnBox.classList.add("btn_box");
mountPoint.appendChild(btnBox);
var NButton = document.createElement("button");
var PButton = document.createElement("button");
NButton.classList.add("btn__Next");
PButton.classList.add("btn__Back");
btnBox.appendChild(NButton);
btnBox.appendChild(PButton);
NButton.textContent = "<<";
PButton.textContent = ">>";

var loadHandler = function loadHandler() {
  var posts = JSON.parse(xhr.response);
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = posts[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var post = _step.value;
      var img = document.createElement("img");
      var containerRoot = document.createElement("div");
      img.classList.add("slide");
      img.src = post.img;
      containerRoot.appendChild(img);
      containerRoot.classList.add("slider");
      mountPoint.appendChild(containerRoot);
      console.log(post.img);
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator["return"] != null) {
        _iterator["return"]();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }
};

xhr.open("GET", "http://localhost:3000/movies");
xhr.send();
xhr.addEventListener("load", loadHandler); ////////

var container = document.querySelector(".slider-wrapper");
var blocks = container.querySelectorAll(".slide");
var nextButton = document.querySelector(".btn__Next");
var prevButton = document.querySelector(".btn__Back");
var activeIndex = 0;
console.log(blocks.length); /////

var toggleOff = function toggleOff() {
  for (var i = 0; i < blocks.length; i++) {
    blocks[i].classList.remove("active");
  }
};

var activeBlock = function activeBlock() {
  blocks[activeIndex].classList.add("active");
};

var changeIndexRight = function changeIndexRight() {
  if (activeIndex + 1 < blocks.length) {
    activeIndex += 1;
  } else {
    activeIndex = 0;
  }
};

var changeIndexLeft = function changeIndexLeft() {
  if (activeIndex - 1 > -1) {
    activeIndex -= 1;
  } else {
    activeIndex = 2;
  }
};

var toggleClickRight = function toggleClickRight() {
  toggleOff();
  changeIndexRight();
  activeBlock(0);
};

var toggleClickLeft = function toggleClickLeft() {
  toggleOff();
  changeIndexLeft();
  activeBlock(0);
};

nextButton.onclick = toggleClickRight;
prevButton.onclick = toggleClickLeft;

/***/ }),

/***/ "./src/homework_13/homework_13.scss":
/*!******************************************!*\
  !*** ./src/homework_13/homework_13.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 22:
/*!**********************************************!*\
  !*** multi ./src/homework_13/homework_13.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./src/homework_13/homework_13.js */"./src/homework_13/homework_13.js");


/***/ })

/******/ });
//# sourceMappingURL=homework_13.js.map