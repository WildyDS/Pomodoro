import {takeLatest, all} from 'redux-saga/effects'

/* ------------- Types ------------- */

import {StartupTypes} from '../redux/StartupRedux'

import {Types as TimerTypes} from '../redux/Timer'

/* ------------- Sagas ------------- */

import {startup} from './StartupSagas'

import {start} from './TimerSagas'

/* ------------- Connect Types To Sagas ------------- */

export default function * root () {
  yield all([
    takeLatest(StartupTypes.STARTUP, startup),
    takeLatest(TimerTypes.START, start)
  ])
}
