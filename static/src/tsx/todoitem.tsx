/// <reference path="../../typings/bundle.d.ts" />

import * as React from 'react';
import * as Immutable from 'immutable';

'use strict';
if (window["$w"] === undefined) {
    window["$w"] = {}
}
var $w = window["$w"]
export interface ITodoItemProps {
    item: any;
    key?: number; 
    no:number;
}
export class TodoItem extends React.Component<ITodoItemProps, {}> {
     constructor() {
        super();
    }
    render () {
        return (
            <li>
              <span> {this.props.item.description} </span>
              <button name={"btn#"+this.props.no} 
                onClick={$w.app.removeItem} >delete</button>
            </li>
        );
    }	
	
}