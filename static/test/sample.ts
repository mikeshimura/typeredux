/// <reference path="../typings/bundle.d.ts" />

import * as assert from 'power-assert';
import * as Immutable from 'immutable';
import * as reducer from '../src/ts/common';

describe('Redux', () => {
  let state=Immutable.fromJS(
    {
      loginForm:{
        id:"aa"
      }
    }
  )
  action = {
    type:reducer.CMN_SET_VALUE,
    keys:["loginForm","id"],
    value:"bb"
  }
  let newState=reducer.CMN_Reducer(state,action)
  it('loginForm', () => {
    assert(state.getIn(["loginForm","id"]) =="aa");
    assert(newState.getIn(["loginForm","id"]) =="bb");
  })

})