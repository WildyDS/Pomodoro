// @flow

import {put, delay, select} from 'redux-saga/effects'

import {Actions as TimerActions, highestTimerSecondsLeft} from '../redux/Timer/'

export function * start (): Generator<*, void, Object> {
  let left = 0
  do {
    left = yield select(highestTimerSecondsLeft)
    yield put(TimerActions.update())
    yield delay(1000)
  } while (left > 0)
}
