// @flow

import {call} from 'redux-saga/effects'

import {start} from './TimerSagas'

export function * startup (): Generator<*, void, Object> {
  yield call(start)
}
