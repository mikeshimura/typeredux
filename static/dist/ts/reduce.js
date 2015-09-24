/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(6);


/***/ },
/* 1 */,
/* 2 */
/***/ function(module, exports) {

	module.exports = React;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	/// <reference path="../../typings/bundle.d.ts" />
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var React = __webpack_require__(2);
	var App = (function (_super) {
	    __extends(App, _super);
	    function App() {
	        _super.call(this);
	    }
	    App.prototype.handleChange = function (dispatch, target) {
	        var t = target;
	    };
	    App.prototype.render = function () {
	        return (React.createElement("div", {"className": "container"}, React.createElement("div", {"className": "row"}, React.createElement("div", {"className": "col-md-1"}, "Id: "), React.createElement("div", {"className": "col-md-4"}, React.createElement("input", {"type": "text", "name": "loginform#id", "value": "TEST", "onChange": this.handleChange.bind(this, this.props.dispatch)}))), React.createElement("div", {"className": "row"}, React.createElement("div", {"className": "col-md-1"}, "Password: "), React.createElement("div", {"className": "col-md-4"}, React.createElement("input", {"type": "password"}))), React.createElement("div", {"className": "row"}, React.createElement("div", null, React.createElement("button", null, "Login")))));
	    };
	    return App;
	})(React.Component);
	exports.App = App;
	//# sourceMappingURL=main.js.map

/***/ },
/* 4 */
/***/ function(module, exports) {

	module.exports = ReactRedux;

/***/ },
/* 5 */,
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	var react_redux_1 = __webpack_require__(4);
	var main_1 = __webpack_require__(3);
	function mapStateToProps(state) {
	    return { todos: state.todos };
	}
	exports.mapStateToProps = mapStateToProps;
	exports.__esModule = true;
	exports["default"] = react_redux_1.connect(mapStateToProps)(main_1.App);
	//# sourceMappingURL=reduce.js.map

/***/ }
/******/ ]);