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

	/// <reference path="../../typings/bundle.d.ts" />
	var React = __webpack_require__(2);
	var main_1 = __webpack_require__(3);
	React.render(React.createElement(main_1.Main), document.getElementById('main'));
	//# sourceMappingURL=bootstrap.js.map

/***/ },
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
	var Immutable = __webpack_require__(4);
	var common = __webpack_require__(5);
	var todoitem_1 = __webpack_require__(6);
	'use strict';
	if (window["$w"] === undefined) {
	    window["$w"] = {};
	}
	var $w = window["$w"];
	var Main = (function (_super) {
	    __extends(Main, _super);
	    function Main() {
	        _super.call(this);
	        this.state = {
	            todoList: [],
	            newItem: {
	                description: ""
	            }
	        };
	        $w.app = this;
	    }
	    Main.prototype.addItem = function (e) {
	        $w.dispatcher.dispatch(screen_add_item($w.app.state.newItem.description));
	    };
	    Main.prototype.removeItem = function (e) {
	        var names = e.target.name.split("#");
	        var no = names[1];
	        $w.dispatcher.dispatch(screen_remove_item(no));
	    };
	    Main.prototype.render = function () {
	        var todoItems = this.state.todoList.map(function (item, i) {
	            return React.createElement(todoitem_1.TodoItem, {"key": i, "item": item, "no": i});
	        });
	        return (React.createElement("div", null, React.createElement("div", null, React.createElement("input", {"type": "text", "placeholder": "input new item", "name": "newItem#description", "value": this.state.newItem.description, "onChange": $w.onChange}), React.createElement("button", {"onClick": this.addItem}, "add")), React.createElement("ul", null, todoItems)));
	    };
	    Main.prototype.componentDidMount = function () {
	        $w.dispatcher = new common.Dispatcher([common.CMN_Reducer, SCREEN_Reducer]);
	    };
	    return Main;
	})(React.Component);
	exports.Main = Main;
	exports.SCREEN_ADD_ITEM = 'SCREEN_ADD_ITEM';
	exports.SCREEN_REMOVE_ITEM = 'SCREEN_REMOVE_ITEM';
	function screen_add_item(description) {
	    var action = {
	        type: exports.SCREEN_ADD_ITEM,
	        description: description
	    };
	    return action;
	}
	exports.screen_add_item = screen_add_item;
	function screen_remove_item(no) {
	    var action = {
	        type: exports.SCREEN_REMOVE_ITEM,
	        no: no
	    };
	    return action;
	}
	exports.screen_remove_item = screen_remove_item;
	function SCREEN_Reducer(state, action) {
	    switch (action.type) {
	        case exports.SCREEN_ADD_ITEM:
	            if (action.description.length == 0) {
	                return state;
	            }
	            var item = {
	                description: action.description
	            };
	            var todoList = Immutable.fromJS(state).getIn(["todoList"]);
	            var newList = todoList.push(item);
	            return Immutable.fromJS(state)
	                .updateIn(["todoList"], function (value) { return newList; })
	                .updateIn(["newItem", "description"], function (value) { return ""; }).toJS();
	        case exports.SCREEN_REMOVE_ITEM:
	            var todoList = Immutable.fromJS(state).getIn(["todoList"]);
	            var newList = todoList.delete(+action.no);
	            return Immutable.fromJS(state).updateIn(["todoList"], function (value) { return newList; }).toJS();
	        default: return state;
	    }
	}
	exports.SCREEN_Reducer = SCREEN_Reducer;
	//# sourceMappingURL=main.js.map

/***/ },
/* 4 */
/***/ function(module, exports) {

	module.exports = Immutable;

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	/// <reference path="../../typings/bundle.d.ts" />
	var Immutable = __webpack_require__(4);
	'use strict';
	if (window["$w"] === undefined) {
	    window["$w"] = {};
	}
	var $w = window["$w"];
	exports.contextpath = "/";
	$w.onChange = function (e) {
	    var action = cmn_set_value(e.target.name.split("#"), e.target.value);
	    $w.dispatcher.dispatch(action);
	};
	exports.CMN_SET_VALUE = 'CMN_SET_VALUE';
	var Dispatcher = (function () {
	    function Dispatcher(reducers) {
	        this.reducers = reducers;
	    }
	    Dispatcher.prototype.dispatch = function (action) {
	        var state = $w.app.state;
	        for (var no in this.reducers) {
	            var newState = this.reducers[no](state, action);
	            if (state !== newState) {
	                $w.app.setState(newState);
	                return;
	            }
	        }
	        return;
	    };
	    return Dispatcher;
	})();
	exports.Dispatcher = Dispatcher;
	function CMN_Reducer(state, action) {
	    switch (action.type) {
	        case exports.CMN_SET_VALUE:
	            return Immutable.fromJS(state).updateIn(action.keys, function (value) { return action.value; }).toJS();
	        default:
	            return state;
	    }
	}
	exports.CMN_Reducer = CMN_Reducer;
	function cmn_set_value(keys, value) {
	    var action = {
	        type: exports.CMN_SET_VALUE,
	        keys: keys,
	        value: value
	    };
	    return action;
	}
	exports.cmn_set_value = cmn_set_value;
	//# sourceMappingURL=common.js.map

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	/// <reference path="../../typings/bundle.d.ts" />
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var React = __webpack_require__(2);
	'use strict';
	if (window["$w"] === undefined) {
	    window["$w"] = {};
	}
	var $w = window["$w"];
	var TodoItem = (function (_super) {
	    __extends(TodoItem, _super);
	    function TodoItem() {
	        _super.call(this);
	    }
	    TodoItem.prototype.render = function () {
	        return (React.createElement("li", null, React.createElement("span", null, " ", this.props.item.description, " "), React.createElement("button", {"name": "btn#" + this.props.no, "onClick": $w.app.removeItem}, "delete")));
	    };
	    return TodoItem;
	})(React.Component);
	exports.TodoItem = TodoItem;
	//# sourceMappingURL=todoitem.js.map

/***/ }
/******/ ]);