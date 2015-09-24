/// <reference path="../../typings/bundle.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require('react');
var Immutable = require('immutable');
var common = require('../ts/common');
var todoitem_1 = require('./todoitem');
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