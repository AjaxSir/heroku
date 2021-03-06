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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

(function(){
	var arrStr = 'Ordinary programmer? Or what?';
	var i = 0;
	var flag = true; // 代表添加
	function autoComplate(arr) {
		if (flag) {
			if (i === arr.length) {
				flag = false;
				clearInterval(timer);
				timer = setInterval(function(){
					autoComplate(arrStr);
				}, 50);
			} else {
				$('#typed').html($('#typed').html() + arr[i]);
			i++;
			}
			
		} else {
			if (i === 0) {
				flag = true;
				clearInterval(timer);
				timer = setInterval(function(){
					autoComplate(arrStr);
				}, 150);
			} else {
				$('#typed').html($('#typed').html().slice(0, i - 1));
				i--;
			}
		}
	}
	var timer = setInterval(function(){
		autoComplate(arrStr);
	}, 100);

	$('.fa-user').click(function(){
		$('.fa').removeClass('active');
		$(this).addClass('active');
		$('.headerCon').hide();
		$('#me').fadeIn();
	})
	$('.fa-book').click(function(){
		$('.fa').removeClass('active');
		$(this).addClass('active');
		$('.headerCon').hide();
		$('#skills').fadeIn();
	})
	$('.fa-desktop').click(function(){
		$('.fa').removeClass('active');
		$(this).addClass('active');
		$('.headerCon').hide();
		$('#project').fadeIn();
	})
	$('.fa-mobile').click(function(){
		$('.fa').removeClass('active');
		$(this).addClass('active');
		$('.headerCon').hide();
		$('#contactMe').fadeIn();
	})
}())

/***/ })
/******/ ]);
//# sourceMappingURL=main.js.map