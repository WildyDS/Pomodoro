// @flow

import {createActions, createReducer} from 'reduxsauce'
import Immutable from 'seamless-immutable'

type TimerState = {
  start: ?number,
  end: ?number,
  left: ?number
}

const state: TimerState = {
  start: Date.now(),
  end: Date.now() + 100000,
  left: 100000
}

export const INITIAL_STATE = Immutable(state)

const {Types, Creators} = createActions({
  setTime: ['start', 'end'],
  update: null
})

const setTime = (state, {start, end}) => state.merge({start, end, left: end - start})

const update = (state) => state.merge({left: state.end - Date.now()})

export const reducer = createReducer(INITIAL_STATE, {
  [Types.SET_TIME]: setTime,
  [Types.UPDATE]: update
})

export const TimerTypes = Types

export default Creators

export const secondsLeftSelector = ({timer}: Object) => parseInt(timer.left / 1000, 10)
