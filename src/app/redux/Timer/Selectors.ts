import values from 'lodash/values'
import {POMODORO_KEY} from './'

import {Timer, TimerState} from './Types'

export const secondsLeftSelector: ({timer}: { timer: TimerState }, key?: string) => number = ({timer}, key = POMODORO_KEY) =>
  timer[key] == null || timer[key].left == null
    ? 0
    : parseInt(timer[key].left / 1000, 10)

export const secondsDiffSelector: ({timer}: { timer: TimerState }, key?: string) => number = ({timer}, key = POMODORO_KEY) =>
  timer[key] == null || timer[key].end == null || timer[key].start == null
    ? 0
    : parseInt((timer[key].end - timer[key].start) / 1000, 10)

export const highestTimerSecondsLeft: ({timer}: { timer: TimerState }) => number = ({timer}) => {
  let biggestTime = 0
  for (const _timer of values(timer)) {
    if (_timer.left && biggestTime < _timer.left) {
      biggestTime = _timer.left
    }
  }
  return biggestTime
}
