import reduce from 'lodash/reduce'

import type {Timer, TimerState} from './Types'

export const start = (state: TimerState, {key, start, end}: {key: string, start: number, end: number}) =>
  state.merge({
    [key]: {
      start,
      end,
      left: end - start
    }
  })

export const setTime = (state: TimerState, {start, end}: {start: number, end: number}) =>
  state.merge({start, end, left: end - start})

export const _updater = (acc: any, timer: Timer, key: string) => {
  if (timer.end) {
    const left = timer.end - Date.now()
    acc[key] = {
      ...timer,
      left: left >= 0 ? left : 0
    }
  }
  return acc
}
export const update = (state: TimerState) => state.merge(reduce(state, _updater, {}))
