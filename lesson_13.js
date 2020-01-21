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
/******/ 	return __webpack_require__(__webpack_require__.s = 15);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/common/traffic-lighter/traffic-lighter.js":
/*!*******************************************************!*\
  !*** ./src/common/traffic-lighter/traffic-lighter.js ***!
  \*******************************************************/
/*! exports provided: trafficLighter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "trafficLighter", function() { return trafficLighter; });
/* harmony import */ var _traffic_lighter_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./traffic-lighter.scss */ "./src/common/traffic-lighter/traffic-lighter.scss");
/* harmony import */ var _traffic_lighter_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_traffic_lighter_scss__WEBPACK_IMPORTED_MODULE_0__);


function trafficLighter(test) {
  var trafficLighterRoot = document.querySelector(test);
  var lights = trafficLighterRoot.querySelectorAll(".traffic-lighter__light");
  var togglerBtn = trafficLighterRoot.querySelector(".traffic-lighter__toggler");
  var isEnabled = false;
  var activeIndex = 0;
  var intervalId = 0;

  var toggleOffAll = function toggleOffAll() {
    for (var i = 0; i < lights.length; i++) {
      lights[i].classList.remove("active");
    }
  };

  var activateLight = function activateLight() {
    lights[activeIndex].classList.add("active");
  };

  var _loop = function _loop(i) {
    lights[i].onclick = function () {
      if (isEnabled) {
        clearInterval(intervalId);
        toggleOffAll();
        activeIndex = i;
        activateLight();
        startAutoChange();
      }
    };
  };

  for (var i = 0; i < lights.length; i++) {
    _loop(i);
  }

  var changeIndex = function changeIndex() {
    if (activeIndex + 1 < lights.length) {
      activeIndex += 1;
    } else {
      activeIndex = 0;
    }
  };

  var toggleOffLighter = function toggleOffLighter() {
    isEnabled = false;
    toggleOffAll();
    activeIndex = 0;
    clearInterval(intervalId);
  };

  var startAutoChange = function startAutoChange() {
    intervalId = setInterval(function () {
      toggleOffAll();
      changeIndex();
      activateLight();
    }, 1000);
  };

  var toggleOnLighter = function toggleOnLighter() {
    isEnabled = true;
    activateLight(0);
    startAutoChange();
  };

  var togglerClickHandler = function togglerClickHandler() {
    if (isEnabled) {
      toggleOffLighter();
    } else {
      toggleOnLighter();
    }
  };

  togglerBtn.onclick = togglerClickHandler;
}



/***/ }),

/***/ "./src/common/traffic-lighter/traffic-lighter.scss":
/*!*********************************************************!*\
  !*** ./src/common/traffic-lighter/traffic-lighter.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/lesson_13/lesson_13.js":
/*!************************************!*\
  !*** ./src/lesson_13/lesson_13.js ***!
  \************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lesson_13_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lesson_13.scss */ "./src/lesson_13/lesson_13.scss");
/* harmony import */ var _lesson_13_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_lesson_13_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _common_traffic_lighter_traffic_lighter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/traffic-lighter/traffic-lighter */ "./src/common/traffic-lighter/traffic-lighter.js");


Object(_common_traffic_lighter_traffic_lighter__WEBPACK_IMPORTED_MODULE_1__["trafficLighter"])('.first-lighter');
Object(_common_traffic_lighter_traffic_lighter__WEBPACK_IMPORTED_MODULE_1__["trafficLighter"])('.second-lighter');
Object(_common_traffic_lighter_traffic_lighter__WEBPACK_IMPORTED_MODULE_1__["trafficLighter"])('.third-lighter');

/***/ }),

/***/ "./src/lesson_13/lesson_13.scss":
/*!**************************************!*\
  !*** ./src/lesson_13/lesson_13.scss ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 15:
/*!******************************************!*\
  !*** multi ./src/lesson_13/lesson_13.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./src/lesson_13/lesson_13.js */"./src/lesson_13/lesson_13.js");


/***/ })

/******/ });
//# sourceMappingURL=lesson_13.js.map