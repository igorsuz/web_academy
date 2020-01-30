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
/******/ 	return __webpack_require__(__webpack_require__.s = 18);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/practic_js/practic_js.js":
/*!**************************************!*\
  !*** ./src/practic_js/practic_js.js ***!
  \**************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _practic_js_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./practic_js.scss */ "./src/practic_js/practic_js.scss");
/* harmony import */ var _practic_js_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_practic_js_scss__WEBPACK_IMPORTED_MODULE_0__);
 // $("html").mousemove(function(event) {
//   $("#main-heading").offset({
//     left: event.pageX,
//     top: event.pageY
//   });
// });
// const mousemove = event => {
//   $("#main-heading").offset({
//     left: event.pageX,
//     top: event.pageY
//   });
// };
// $("html").click(mousemove);
// const clickHandler = event => {
//   console.log("Клик! " + event.pageX + " " + event.pageY);
// };
// $("h1").click(clickHandler);
// let topOffset = 0;
// let leftOffset = 0;
// const moveHeading = () => {
//   $("#main-heading").offset({ top: topOffset });
//   topOffset++;
//   if (topOffset > 200) {
//     topOffset = 200;
//     $("#main-heading").offset({ left: leftOffset });
//     leftOffset++;
//     if (leftOffset > 200) {
//       leftOffset = 200;
//       $("#main-heading").offset({ top: topOffset });
//       topOffset--;
//     }
//   }
// };
// setInterval(moveHeading, 30);
// let i = 5;
// var printMessage = function() {
//   console.log("Ты смотришь в консоль уже " + i + " сек");
//   i = i + 5;
//   if (i > 15) {
//     clearInterval(intervalId);
//   }
// };
// var intervalId = setInterval(printMessage, 5000);
// let fruits = ["Яблоко", "Апельсин", "Слива"];
// for (let i = 0; i < fruits.length; i++) {
//   $("body")
//     .append("<p>" + fruits[i] + "</p>")
//     .delay(3000);
// }
// $("p")
//   .fadeOut(1000)
//   .delay(3000)
//   .fadeIn(1000);
// $("p").append("Лучший");
// $("h1").fadeTo(2000, 0.1);
// let heading = document.getElementById("main-heading");
// let newheading = "Мои друзья";
// heading.innerHTML = newheading;
// for (let i = 0; i < 4; i++) {
//   if ((i = 1)) {
//     $("h1").fadeOut(1000);
//     $("h1").fadeIn(1000);
//   }
//   if ((i = 2)) {
//     $("h1").fadeOut(2000);
//     $("h1").fadeIn(2000);
//   }
//   if ((i = 3)) {
//     $("h1").fadeOut(2000);
//     $("h1").fadeIn(2000);
//   }
//   $("p").slideUp(2000);
//   $("p").slideDown(2000);
// }
//*********** Форма вводв */
// function garland() {
//   const body = document.querySelector("body");
//   const el = document.createElement("form");
//   const inpName = document.createElement("input");
//   const inpPassword = document.createElement("input");
//   const btn = document.createElement("button");
//   el.style.border = "2px solid black";
//   inpName.style.display = inpPassword.style.display = "block";
//   inpName.placeholder = "Enter name";
//   btn.style.backgroundColor = "yellow";
//   inpPassword.placeholder = "Enter password";
//   btn.innerHTML = "SENT";
//   el.onsubmit = event => {
//     event.preventDefault();
//     const p = document.createElement("p");
//     $("body").append(
//       "<p>" +
//         inpName.value +
//         "</br>" +
//         "<h1>" +
//         inpPassword.value +
//         "</h1>" +
//         "</p>"
//     );
//   };
//   document.body.appendChild(el);
//   el.appendChild(inpName);
//   el.appendChild(inpPassword);
//   el.appendChild(btn);
// }
// garland();

/***/ }),

/***/ "./src/practic_js/practic_js.scss":
/*!****************************************!*\
  !*** ./src/practic_js/practic_js.scss ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 18:
/*!********************************************!*\
  !*** multi ./src/practic_js/practic_js.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./src/practic_js/practic_js.js */"./src/practic_js/practic_js.js");


/***/ })

/******/ });
//# sourceMappingURL=practic_js.js.map