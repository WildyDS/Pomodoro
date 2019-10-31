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
  end: Date.now() + 111 * 1000,
  left: 111 * 1000
}

export const INITIAL_STATE = Immutable(state)

const {Types, Creators} = createActions({
  start: null,
  setTime: ['start', 'end'],
  update: null
})

const start = (state) => state.merge({start: Date.now(), end: Date.now() + 111 * 1000, left: 111 * 1000})

const setTime = (state, {start, end}) => state.merge({start, end, left: end - start})

const update = (state) => state.merge({left: state.end - Date.now()})

export const reducer = createReducer(INITIAL_STATE, {
  [Types.START]: start,
  [Types.SET_TIME]: setTime,
  [Types.UPDATE]: update
})

export const TimerTypes = Types

export default Creators

export const secondsLeftSelector: ({timer: TimerState}) => number = ({timer}) =>
  timer.left == null
    ? 0
    : parseInt(timer.left / 1000, 10)

export const secondsDiffSelector: ({timer: TimerState}) => number = ({timer}) =>
  timer.end == null || timer.start == null
    ? 0
    : parseInt((timer.end - timer.start) / 1000, 10)
