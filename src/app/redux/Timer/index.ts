import {createReducer} from 'reduxsauce'
import Immutable from 'seamless-immutable'
import {Types, Creators as Actions} from './Actions'
import {start, setTime, update} from './Reducers'
import {secondsLeftSelector, secondsDiffSelector, highestTimerSecondsLeft} from './Selectors'
import {predefinedTimers, POMODORO_KEY, SHORT_BREAK_KEY, LONG_BREAK_KEY} from './Config'

import type {TimerState} from './Types'

const state: TimerState = {
  [POMODORO_KEY]: {
    start: null,
    end: null,
    left: null
  },
  predefinedTimers
}

const INITIAL_STATE = Immutable(state)

const reducer = createReducer(INITIAL_STATE, {
  [Types.START]: start,
  [Types.SET_TIME]: setTime,
  [Types.UPDATE]: update
})

export {
  POMODORO_KEY,
  SHORT_BREAK_KEY,
  LONG_BREAK_KEY,
  INITIAL_STATE,
  reducer,
  secondsLeftSelector,
  secondsDiffSelector,
  highestTimerSecondsLeft,
  Actions,
  Types
}
