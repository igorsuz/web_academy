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
/******/ 	return __webpack_require__(__webpack_require__.s = 20);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/lesson_15/car.js":
/*!******************************!*\
  !*** ./src/lesson_15/car.js ***!
  \******************************/
/*! exports provided: Car */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Car", function() { return Car; });
function Car(mountPoint, title, speed, x, y, finishLine, finishCb) {
  this.title = title;
  this.finishCb = finishCb;
  this.mountPoint = mountPoint;
  this.speed = speed;
  this.finishLine = finishLine;
  this.x = x;
  this.y = y;
}

Car.prototype.render = function () {
  this.element = document.createElement("div");
  this.element.textContent = this.title;
  this.element.style.backgroundColor = "red";
  this.element.style.border = "1px solid green";
  this.element.style.position = "absolute";
  this.element.style.left = this.x + "px";
  this.element.style.top = this.y + "px";
  this.element.style.minWidth = "50px";
  this.element.style.height = "50px";
  this.mountPoint.appendChild(this.element);
};

Car.prototype.move = function () {
  var _this = this;

  this.intId = setInterval(function () {
    var coordX = parseInt(_this.element.style.left);

    if (coordX < _this.finishLine) {
      _this.element.style.left = parseInt(_this.element.style.left) + 10 + "px";
    } else {
      clearInterval(_this.intId);

      _this.finishCb();
    }
  }, this.speed);
};



/***/ }),

/***/ "./src/lesson_15/lesson_15.css":
/*!*************************************!*\
  !*** ./src/lesson_15/lesson_15.css ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/lesson_15/lesson_15.js":
/*!************************************!*\
  !*** ./src/lesson_15/lesson_15.js ***!
  \************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lesson_15_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lesson_15.css */ "./src/lesson_15/lesson_15.css");
/* harmony import */ var _lesson_15_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_lesson_15_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _playground__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./playground */ "./src/lesson_15/playground.js");


var game = new _playground__WEBPACK_IMPORTED_MODULE_1__["Playground"]();
game.render();
game.startGame(); // function greeting() {
//   console.log(this);
//   console.log("hello" + this.name);
// }
// const User = {
//   name: "ilya",
//   greet: greeting
// };
// const User2 = {
//   name: "Jhon",
//   greet: greeting
// };
// User.greet();
// User2.greet();
// function User(Username, usersecondName) {
//   this.name = Username;
//   this.secondName = usersecondName;
// }
// User.prototype.t = function() {
//   console.log(this.name + this.secondName);
// };
// const user1 = new User("Ilya", "Jhonson");
// const user2 = new User("Ilya", "Jhonson");
// // const user2 = new User("Jhonson");
// console.log(user1);
// console.log(user2);

/***/ }),

/***/ "./src/lesson_15/playground.js":
/*!*************************************!*\
  !*** ./src/lesson_15/playground.js ***!
  \*************************************/
/*! exports provided: Playground */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Playground", function() { return Playground; });
/* harmony import */ var _car__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./car */ "./src/lesson_15/car.js");


function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}

function Playground() {
  var mp = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : document.querySelector("body");
  this.mountPoint = mp;
}

Playground.prototype.render = function () {
  this.el = document.createElement("div");
  this.el.style.border = "1px solid red";
  this.el.style.minHeight = "500px";
  this.el.style.position = "relative";
  this.mountPoint.appendChild(this.el);
};

Playground.prototype.addCar = function (index) {
  var carName = prompt("Enter car Name");
  var carSpeed = getRandomArbitrary(400, 5000);
  var finishLineCoord = 250;
  var x = 0;
  var y = 50 * index;

  var finishCallback = function finishCallback() {
    console.log("finish", carName);
  };

  var car = new _car__WEBPACK_IMPORTED_MODULE_0__["Car"](this.el, carName, carSpeed, 0, 50 * index, finishLineCoord, finishCallback);
  car.render();
  car.move();
};

Playground.prototype.startGame = function () {
  var carsCount = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 5;

  for (var i = 0; i < carsCount; i++) {
    this.addCar(i);
  }
};



/***/ }),

/***/ 20:
/*!******************************************!*\
  !*** multi ./src/lesson_15/lesson_15.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./src/lesson_15/lesson_15.js */"./src/lesson_15/lesson_15.js");


/***/ })

/******/ });
//# sourceMappingURL=lesson_15.js.map