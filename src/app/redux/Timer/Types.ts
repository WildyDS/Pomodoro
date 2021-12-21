import {Immutable} from 'seamless-immutable'

export type Timer = {
  start: number | null,
  end: number | null,
  left: number | null,
}

// TODO: придумать, как сделать адекватно типизацию стейта
export type TimerState = Immutable<{
  [key: string]: Timer,
} & { predefinedTimers: Array<PredefinedTimer> }>

export type PredefinedTimer = {
  key: string,
  time: number,
  name: string,
  status: string,
}
