/// <reference path="../../typings/bundle.d.ts" />

import * as React from 'react';
import * as Immutable from 'immutable';
import * as common from '../ts/common';
import {TodoItem} from './todoitem';

'use strict';
if (window["$w"] === undefined) {
    window["$w"] = {}
}
var $w = window["$w"]

export interface IMainState {
    loginForm: Immutable.Map<string, string>
}

export interface IMainProps { }

export class Main extends React.Component<IMainProps, Object> {
    state: any =
    {
        todoList:[],
        newItem:{
            description:""
        }
    };

    constructor() {
        super();
        $w.app = this;
    }
    addItem(e){
       $w.dispatcher.dispatch(
           screen_add_item($w.app.state.newItem.description)) 
    }
    removeItem(e) {
        var names = e.target.name.split("#");
        var no = names[1];
        $w.dispatcher.dispatch(
            screen_remove_item(no))    
    }
    render() {
        var todoItems = this.state.todoList.map((item,i) => {
            return <TodoItem key={i} item={item} no={i} ></TodoItem>;
        });

        return (
            <div>
                <div>
                    <input type="text" placeholder="input new item" 
                    name="newItem#description"
                    value={this.state.newItem.description} onChange={$w.onChange} />
                    <button onClick={this.addItem} >add</button>
                </div>
                <ul>{todoItems}</ul>
            </div>
        );
    }

    componentDidMount() {
        $w.dispatcher = new common.Dispatcher(
            [common.CMN_Reducer,SCREEN_Reducer])
    }
}
export const SCREEN_ADD_ITEM = 'SCREEN_ADD_ITEM'
export const SCREEN_REMOVE_ITEM = 'SCREEN_REMOVE_ITEM'
export function screen_add_item(description:string):any{
    var action={
        type:SCREEN_ADD_ITEM,
        description:description
    }
    return action;
}
export function screen_remove_item(no:string):any{
    var action={
        type:SCREEN_REMOVE_ITEM,
        no:no
    }
    return action;
}

export function SCREEN_Reducer(state: any, action: any) {
    switch (action.type) {
        case SCREEN_ADD_ITEM:
            if (action.description.length==0){
                return state;
            }
            var item={
                description:action.description
            }
            var todoList=Immutable.fromJS(state).getIn(["todoList"])
            var newList=todoList.push(item)
            return Immutable.fromJS(state)
                .updateIn(["todoList"], (value) => newList)
                .updateIn(["newItem","description"],(value)=>"").toJS()
        case SCREEN_REMOVE_ITEM:
            var todoList=Immutable.fromJS(state).getIn(["todoList"])
            var newList=todoList.delete(+action.no)
            return Immutable.fromJS(state).updateIn(["todoList"], (value) => newList).toJS()
        default:return state;
    }
}