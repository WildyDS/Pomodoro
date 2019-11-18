// @flow

import type {PredefinedTimer} from './Types.flow'

export const POMODORO_KEY = 'pomodoro'
export const SHORT_BREAK_KEY = 'short_break'
export const LONG_BREAK_KEY = 'long_break'

export const predefinedTimers: Array<PredefinedTimer> = [
  {key: POMODORO_KEY, time: 25 * 60 * 1000, name: 'Pomodoro'},
  {key: SHORT_BREAK_KEY, time: 5 * 60 * 1000, name: 'Short break'},
  {key: LONG_BREAK_KEY, time: 15 * 60 * 1000, name: 'Long break'}
]
