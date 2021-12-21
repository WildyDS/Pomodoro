import {createStore, applyMiddleware, compose} from 'redux'

import {createLogger} from 'redux-logger'
import createSagaMiddleware from 'redux-saga'
import includes from 'lodash/includes'
import ReduxPersist from './ReduxPersist'
import DebugSettings from '../../config/DebugSettings'

import type {SagaMonitor, Saga, Task, SagaMiddleware} from 'redux-saga'

// creates the store
export default (rootReducer: () => Object, rootSaga: () => Saga<any>) => {
  /* ------------- Redux Configuration ------------- */

  const middleware = []
  const enhancers = []

  /* ------------- Saga Middleware ------------- */
  const sagaMonitor: SagaMonitor = __DEV__
      ? ((console as any).tron.createSagaMonitor())
      : undefined
  const sagaMiddleware: SagaMiddleware<any> = createSagaMiddleware({sagaMonitor})
  middleware.push(sagaMiddleware)

  /* ------------- Logger Middleware ------------- */

  const SAGA_LOGGING_BLACKLIST = ['EFFECT_TRIGGERED', 'EFFECT_RESOLVED', 'EFFECT_REJECTED', 'persist/REHYDRATE']
  if (DebugSettings.reduxLogging) {
    // silence these saga-based messages
    // create the logger
    const logger = createLogger({
      predicate: (getState, {type}) => !includes(SAGA_LOGGING_BLACKLIST, type)
    })
    middleware.push(logger)
  }

  /* ------------- Assemble Middleware ------------- */
  enhancers.push(applyMiddleware(...middleware))
  if (__DEV__ && (console as any).tron) {
    enhancers.push((console as any).tron.createEnhancer()) // eslint-disable-line
  }
  const store = createStore(rootReducer, compose(...enhancers))

  // configure persistStore and check reducer version number
  if (ReduxPersist.active) {
    ReduxPersist.updateReducers(store)
  }

  // kick off root saga
  const sagasManager: Task<void> = sagaMiddleware.run(rootSaga)

  return {
    store,
    sagasManager,
    sagaMiddleware
  }
}
