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

	module.exports = __webpack_require__(1);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	/// <reference path="../../typings/bundle.d.ts" />
	var React = __webpack_require__(2);
	var react_redux_1 = __webpack_require__(3);
	var Redux = __webpack_require__(4);
	var rootElement = document.getElementById('main');
	exports.ADD_TODO = 'ADD_TODO';
	function addTodo(text) {
	    return { type: exports.ADD_TODO, text: text };
	}
	exports.addTodo = addTodo;
	function todoApp(state, action) {
	    switch (action.type) {
	        case exports.ADD_TODO:
	            return {
	                visibilityFilter: action.filter
	            };
	        default:
	            return state;
	    }
	}
	var store = Redux.createStore(todoApp);
	React.render((
	// The child must be wrapped in a function
	// to work around an issue in React 0.13.
	React.createElement(react_redux_1.Provider, {"store": store}, function () { return React.createElement(App, null); })), rootElement);
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
	function mapDispatchToProps(dispatch) {
	    return {
	        todo: function (text) { return dispatch(addTodo(text)); }
	    };
	}
	function mapStateToProps(state) {
	    return { todos: state.todos };
	}
	react_redux_1.connect(mapStateToProps, mapDispatchToProps)(App);
	//# sourceMappingURL=bootstrap.js.map

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = React;

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = ReactRedux;

/***/ },
/* 4 */
/***/ function(module, exports) {

	module.exports = Redux;

/***/ }
/******/ ]);