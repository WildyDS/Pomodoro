// @flow

import React from 'react'
import {Provider} from 'react-redux'
import RootContainer from './containers/Root'
import createStore from './redux'
import applyConfigSettings from './config'

// Apply config overrides
applyConfigSettings()

/**
 * Provides an entry point into our application. index.js calls this component first.
 *
 * We create our Redux store here, put it into a provider and then bring in our
 * RootContainer.
 *
 * We separate like this to play nice with React Native's hot reloading.
 */

const App = () => {
  // create our store
  const store = createStore()
  return <Provider store={store}>
    <RootContainer />
  </Provider>
}

let AppClass = App

if (__DEV__) {
  // $FlowFixMe
  AppClass = console.tron.overlay(App) // eslint-disable-line
}

export default AppClass
