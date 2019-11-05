// @flow

import {put, delay, select} from 'redux-saga/effects'

import TimerActions, {highestTimerSecondsLeft} from '../redux/TimerRedux'

export function * start (): Generator<*, void, Object> {
  let left = 0
  do {
    left = yield select(highestTimerSecondsLeft)
    yield put(TimerActions.update())
    yield delay(1000)
  } while (left > 0)
}
