// @flow

import {put, delay, select} from 'redux-saga/effects'

import TimerActions, {secondsLeftSelector} from '../redux/TimerRedux'

export function * start (): Generator<*, void, Object> {
  let left = 0
  do {
    left = yield select(secondsLeftSelector)
    yield put(TimerActions.update())
    yield delay(1000)
  } while (left > 0)
}
