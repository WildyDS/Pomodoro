// @flow

import Immutable from 'seamless-immutable'

export type Timer = {
  start: ?number,
  end: ?number,
  left: ?number
}

type ImmutableType<T> = {
  ...Immutable<T>,
}

// TODO: придумать, как сделать адекватно типизацию стейта
export type TimerState = ImmutableType<{
  [string]: Timer,
  predefinedTimers: Array<PredefinedTimer>
}>

export type PredefinedTimer = {
  key: string,
  time: number,
  name: string
}
