// @flow

import {combineReducers} from 'redux'
// $FlowFixMe
import {persistReducer} from 'redux-persist'
import configureStore from './config/ConfigureStore'
import rootSaga from '../sagas'
import ReduxPersist from './config/ReduxPersist'

import {reducer as timer} from './Timer'

/* ------------- Assemble The Reducers ------------- */
export const reducers = combineReducers({
  timer
})

export default () => {
  let finalReducers = reducers
  // If rehydration is on use persistReducer otherwise default combineReducers
  if (ReduxPersist.active) {
    const persistConfig = ReduxPersist.storeConfig
    finalReducers = persistReducer(persistConfig, reducers)
  }

  const configuredStore: any = configureStore(finalReducers, rootSaga)

  let {sagasManager} = configuredStore
  const {store, sagaMiddleware} = configuredStore

  if ((module: Object).hot) {
    (module: Object).hot.accept(() => {
      store.replaceReducer(require('./').reducers)

      const newYieldedSagas = require('../sagas').default
      sagasManager.cancel()
      sagasManager.done.then(() => {
        sagasManager = sagaMiddleware.run(newYieldedSagas)
      })
    })
  }

  return store
}
