// @flow

import DebugSettings from './DebugSettings'
import Reactotron, {asyncStorage, overlay, trackGlobalErrors} from 'reactotron-react-native'
import Immutable from 'seamless-immutable'
import sagaPlugin from 'reactotron-redux-saga'
const {reactotronRedux} = require('reactotron-redux')

import AsyncStorage from '@react-native-community/async-storage'

const configure = () => {
  if (__DEV__) {
    // Totally hacky, but this allows you to not both importing reactotron-react-native
    // on every file. This is just DEV mode, so no big deal.
        (console: Object).tron = Reactotron.configure({  // eslint-disable-line
      name: 'Pomodoro'
    })
      .useReactNative()
      .setAsyncStorageHandler(AsyncStorage)
      .use(trackGlobalErrors())
      .use(reactotronRedux({
        // Fires when Reactotron uploads a new copy of the state tree.  Since our reducers are
        // immutable with `seamless-immutable`, we ensure we convert to that format.
        onRestore: (state) => Immutable(state)
      }))
      .use(sagaPlugin())
      .use(asyncStorage())
      .use(overlay())
      .connect();

    // If ReactNative's yellow box warnings are too much, it is possible to turn
    // it off, but the healthier approach is to fix the warnings.  =)
    (console: Object).disableYellowBox = !DebugSettings.yellowBox
  }
}

export default configure
