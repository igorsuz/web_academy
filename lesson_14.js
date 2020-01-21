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
/******/ 	return __webpack_require__(__webpack_require__.s = 17);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/lesson_14/garland.js":
/*!**********************************!*\
  !*** ./src/lesson_14/garland.js ***!
  \**********************************/
/*! exports provided: garland */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "garland", function() { return garland; });
function getRandom() {
  var min = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  var max = arguments.length > 1 ? arguments[1] : undefined;
  return Math.floor(min + Math.random() * max);
}

function getRandomColor() {
  return "rgb(".concat(getRandom(0, 255), ", ").concat(getRandom(0, 255), ", ").concat(getRandom(0, 255), ")");
}

function garland(count) {
  var body = document.querySelector("body");

  var _loop = function _loop(i) {
    var el = document.createElement("div");
    el.style.borderRadius = "50%";
    el.style.border = "2px solid black";
    el.style.width = el.style.height = "50px";
    el.style.display = "inline-block";
    el.style.backgroundColor = getRandomColor();
    setInterval(function () {
      el.style.backgroundColor = getRandomColor();
    }, getRandom(5500, 100));
    body.appendChild(el);
  };

  for (var i = 0; i < count; i++) {
    _loop(i);
  }
}



/***/ }),

/***/ "./src/lesson_14/lesson_14.js":
/*!************************************!*\
  !*** ./src/lesson_14/lesson_14.js ***!
  \************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lesson_14_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lesson_14.scss */ "./src/lesson_14/lesson_14.scss");
/* harmony import */ var _lesson_14_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_lesson_14_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _garland__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./garland */ "./src/lesson_14/garland.js");
 // import { commentForm } from "./comment-form";
// commentForm();


Object(_garland__WEBPACK_IMPORTED_MODULE_1__["garland"])(100); // const template = `<article class><h1>Hello</h1><p>Test</p></article>`;
// // const header = document.createElement("h1");
// // const article = document.createElement("article");
// // const p = document.createElement("p");
// // article.appendChild(header);
// // article.appendChild(p);
// const body = document.querySelector("body");
// body.innerHTML = template;
// // header.classList.add("header");
// // body.appendChild(article);
// // console.log(header);

/***/ }),

/***/ "./src/lesson_14/lesson_14.scss":
/*!**************************************!*\
  !*** ./src/lesson_14/lesson_14.scss ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 17:
/*!******************************************!*\
  !*** multi ./src/lesson_14/lesson_14.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./src/lesson_14/lesson_14.js */"./src/lesson_14/lesson_14.js");


/***/ })

/******/ });
//# sourceMappingURL=lesson_14.js.map