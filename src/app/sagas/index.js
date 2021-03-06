// @flow

import {takeLatest, all} from 'redux-saga/effects'

/* ------------- Types ------------- */

import {StartupTypes} from '../redux/StartupRedux'

import {Types as TimerTypes} from '../redux/Timer'

/* ------------- Sagas ------------- */

import {startup} from './StartupSagas'

import {start} from './TimerSagas'

import type {Saga} from 'redux-saga'

/* ------------- Connect Types To Sagas ------------- */

export default function * root (): Saga<void> {
  yield all([
    takeLatest(StartupTypes.STARTUP, startup),
    takeLatest(TimerTypes.START, start)
  ])
}
