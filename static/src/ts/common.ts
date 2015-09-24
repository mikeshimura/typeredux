/// <reference path="../../typings/bundle.d.ts" />

import * as Immutable from 'immutable';

'use strict';
if (window["$w"] === undefined) {
    window["$w"] = {}
}
var $w = window["$w"]
export var contextpath = "/";
$w.onChange = (e: any) => {
    var action =cmn_set_value(
        e.target.name.split("#"),
         e.target.value)
    $w.dispatcher.dispatch(action)
}

export const CMN_SET_VALUE = 'CMN_SET_VALUE'

export class Dispatcher {
    reducers: any;
    constructor(reducers) {
        this.reducers = reducers;
    }

    dispatch(action: any) {
        var state = $w.app.state;
        for (var no in this.reducers) {
            var newState = this.reducers[no](state, action);
            if (state !== newState) {
                $w.app.setState(newState);
                return;
            }
        }
        return;
    }
}
export function CMN_Reducer(state: any, action: any) {
    switch (action.type) {
        case CMN_SET_VALUE:
            return Immutable.fromJS(state).updateIn(
                action.keys, (value) => action.value).toJS()
                default:
            return state;
    }
}

export function cmn_set_value(keys:string[],value:any):any{
    var action = {
        type: CMN_SET_VALUE,
        keys: keys,
        value: value
    }
    return action;
}

