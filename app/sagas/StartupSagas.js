// @flow

import {put, delay} from 'redux-saga/effects'

import TimerActions from '../redux/TimerRedux'

export function * startup (): Generator<*, void, Object> {
  let timeLeft = 1500
  while (timeLeft) {
    yield put(TimerActions.setTime(timeLeft--)) // старт таймера на 25 минут
    yield delay(1000)
  }
}
