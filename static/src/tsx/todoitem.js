/// <reference path="../../typings/bundle.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require('react');
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