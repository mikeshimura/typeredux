/// <reference path="../../typings/bundle.d.ts" />
var Immutable = require('immutable');
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