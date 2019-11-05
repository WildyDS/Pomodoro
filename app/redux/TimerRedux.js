// @flow

import {createActions, createReducer} from 'reduxsauce'
import Immutable from 'seamless-immutable'
import reduce from 'lodash/reduce'
import values from 'lodash/values'

type Timer = {
  start: ?number,
  end: ?number,
  left: ?number
}

type TimerState = {
  [string]: Timer
}

export const POMODORO_KEY = 'pomodoro'
export const SHORT_BREAK_KEY = 'short_break'

const state: TimerState = {
  [POMODORO_KEY]: {
    start: null,
    end: null,
    left: null
  }
}

export const INITIAL_STATE = Immutable(state)

const {Types, Creators} = createActions({
  start: ['key', 'start', 'end'],
  setTime: ['start', 'end'],
  update: null
})

const start = (state, {key, start, end}) => state.merge({
  [key]: {
    start,
    end,
    left: end - start
  }
})

const setTime = (state, {start, end}) => state.merge({start, end, left: end - start})

export const _updateReducer = (acc: Object, timer: Timer, key: string) => {
  if (timer.end) {
    const left = timer.end - Date.now()
    acc[key] = {
      ...timer,
      left: left >= 0 ? left : 0
    }
  }
  return acc
}

const update = (state) => state.merge(reduce(state, _updateReducer, {}))

export const reducer = createReducer(INITIAL_STATE, {
  [Types.START]: start,
  [Types.SET_TIME]: setTime,
  [Types.UPDATE]: update
})

export const TimerTypes = Types

export default Creators

export const secondsLeftSelector: ({timer: TimerState}, key?: string) => number = ({timer}, key = POMODORO_KEY) =>
  timer[key] == null || timer[key].left == null
    ? 0
    : parseInt(timer[key].left / 1000, 10)

export const secondsDiffSelector: ({timer: TimerState}, key?: string) => number = ({timer}, key = POMODORO_KEY) =>
  timer[key] == null || timer[key].end == null || timer[key].start == null
    ? 0
    : parseInt((timer[key].end - timer[key].start) / 1000, 10)

export const highestTimerSecondsLeft: ({timer: TimerState}) => number = ({timer}) => {
  let biggestTime = 0
  // Отключение бага линтера
  // eslint-disable-next-line no-unused-vars
  for (const _timer: Timer of values(timer)) {
    if (_timer.left && biggestTime < _timer.left) {
      biggestTime = _timer.left
    }
  }
  return biggestTime
}
