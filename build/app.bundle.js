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
/******/ 	return __webpack_require__(__webpack_require__.s = "./js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./js/main.js":
/*!********************!*\
  !*** ./js/main.js ***!
  \********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _mortgage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mortgage */ "./js/mortgage.js");

document.getElementById('addButton').addEventListener('click', function () {
  console.log("Arrow functions working");
});
document.getElementById('calcBtn').addEventListener('click', function () {
  var principal = document.getElementById("principal").value;
  var years = document.getElementById("years").value;
  var rate = document.getElementById("rate").value; // let {monthlyPayment, monthlyRate, amortization} = calculateAmortization(principal, years, rate);

  var _mortgage$calculateAm = _mortgage__WEBPACK_IMPORTED_MODULE_0__["calculateAmortization"](principal, years, rate),
      monthlyPayment = _mortgage$calculateAm.monthlyPayment,
      monthlyRate = _mortgage$calculateAm.monthlyRate,
      amortization = _mortgage$calculateAm.amortization;

  document.getElementById("monthlyPayment").innerHTML = monthlyPayment.toFixed(2);
  document.getElementById("monthlyRate").innerHTML = (monthlyRate * 100).toFixed(2);
  amortization.forEach(function (month) {
    return console.log(month);
  });
});

/***/ }),

/***/ "./js/mortgage.js":
/*!************************!*\
  !*** ./js/mortgage.js ***!
  \************************/
/*! exports provided: calculateMonthlyPayment, calculateAmortization */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "calculateMonthlyPayment", function() { return calculateMonthlyPayment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "calculateAmortization", function() { return calculateAmortization; });
var calculateMonthlyPayment = function calculateMonthlyPayment(principal, years, rate) {
  var monthlyRate = 0;

  if (rate) {
    monthlyRate = rate / 100 / 12;
  }

  var monthlyPayment = principal * monthlyRate / (1 - Math.pow(1 / (1 + monthlyRate), years * 12));
  return {
    principal: principal,
    years: years,
    rate: rate,
    monthlyPayment: monthlyPayment,
    monthlyRate: monthlyRate
  };
};
var calculateAmortization = function calculateAmortization(principal, years, rate) {
  var _calculateMonthlyPaym = calculateMonthlyPayment(principal, years, rate),
      monthlyRate = _calculateMonthlyPaym.monthlyRate,
      monthlyPayment = _calculateMonthlyPaym.monthlyPayment;

  var balance = principal;
  var amortization = [];

  for (var y = 0; y < years; y++) {
    var interestY = 0; //Interest payment for year y

    var principalY = 0; //Principal payment for year y

    for (var m = 0; m < 12; m++) {
      var interestM = balance * monthlyRate; //Interest payment for month m

      var principalM = monthlyPayment - interestM; //Principal payment for month m

      interestY = interestY + interestM;
      principalY = principalY + principalM;
      balance = balance - principalM;
    }

    amortization.push({
      principalY: principalY,
      interestY: interestY,
      balance: balance
    });
  }

  return {
    monthlyPayment: monthlyPayment,
    monthlyRate: monthlyRate,
    amortization: amortization
  };
};

/***/ })

/******/ });
//# sourceMappingURL=app.bundle.js.map