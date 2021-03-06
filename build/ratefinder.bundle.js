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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./js/ratefinder.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./js/rate-service-mock.js":
/*!*********************************!*\
  !*** ./js/rate-service-mock.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var rates = [{
  "name": "30 years fixed",
  "rate": "13",
  "years": "30"
}, {
  "name": "20 years fixed",
  "rate": "2.8",
  "years": "20"
}];

/***/ }),

/***/ "./js/ratefinder.js":
/*!**************************!*\
  !*** ./js/ratefinder.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _rate_service_mock__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rate-service-mock */ "./js/rate-service-mock.js");
/* harmony import */ var _rate_service_mock__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_rate_service_mock__WEBPACK_IMPORTED_MODULE_0__);
// let url = "rates.json";
// fetch(url)
//     .then(response => response.json())
//     .then(rates => {
//       let html = '';
//       rates.forEach(rate => html += `<tr><td>${rate.name}</td><td>${rate.years}</td><td>${rate.rate}%</td></tr>`);
//       document.getElementById("rates").innerHTML = html;
//     })
//     .catch(e => console.log(e));

_rate_service_mock__WEBPACK_IMPORTED_MODULE_0__["findAll"]().then(function (rates) {
  var html = '';
  rates.forEach(function (rate) {
    return html += "<tr><td>".concat(rate.name, "</td><td>").concat(rate.years, "</td><td>").concat(rate.rate, "%</td></tr>");
  });
  document.getElementById("rates").innerHTML = html;
}).catch(function (e) {
  return console.log(e);
});

/***/ })

/******/ });
//# sourceMappingURL=ratefinder.bundle.js.map